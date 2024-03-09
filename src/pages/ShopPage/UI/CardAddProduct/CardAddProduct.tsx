import {
  Button,
  Flex,
  Group,
  Image,
  NumberInput,
  SimpleGrid,
  Textarea,
  TextInput,
} from "@mantine/core";
import type { FileWithPath } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import * as dayjs from "dayjs";
import type { FC } from "react";
import { useState } from "react";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import type { Product } from "../../model/slise";
import { addProduct } from "../../model/slise";
import s from "./CardAddProduct.module.css";
import { DropzoneComponent } from "./UI/Dropzone/Dropzone";

type FormValues = {
  product: Product;
};

type CardAddProductProps = {
  toggleCardAddProduct: () => void;
};

const CardAddProduct: FC<CardAddProductProps> = ({ toggleCardAddProduct }) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const dispatch = useAppDispatch();

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Flex key={index}>
        <Image src={imageUrl} />
      </Flex>
    );
  });
  const form = useForm<FormValues>({
    initialValues: {
      product: {
        id: "",
        images: [],
        imageURL: "",
        description: "",
        title: "",
        brand: "",
        isRecommended: false,
        maxQuantity: 0,
        quantity: 0,
        price: 0,
        dateAdded: 0,
      },
    },
  });

  const submit = (values: FormValues) => {
    values.product.images = files;
    values.product.id = dayjs().toString();
    values.product.dateAdded = new Date().getTime();
    dispatch(addProduct(values.product));
    form.reset();
  };

  return (
    <Flex className={s.cardWrapper}>
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <Flex p={20} direction='column' gap={10}>
          <TextInput
            label='Name Product'
            placeholder='Name Product'
            {...form.getInputProps("product.firstName")}
          />

          <Textarea size='lg' label='Description' {...form.getInputProps("product.description")} />
          <Group>
            <NumberInput
              size='xs'
              label='MaxQuantity'
              {...form.getInputProps("product.maxQuantity")}
            />
            <NumberInput size='xs' label='Quantity' {...form.getInputProps("product.quantity")} />
            <NumberInput size='xs' label='Price' {...form.getInputProps("product.price")} />
            <TextInput
              {...form.getInputProps("product.imageURL")}
              label='ImageURL'
              placeholder='ImageURL'
            />
          </Group>
          <DropzoneComponent onDrop={setFiles} />
          <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? "xl" : 0}>
            {previews}
          </SimpleGrid>
          <Group mt={20} display='flex' justify='space-around'>
            <Button type='submit'>Добавить</Button>
            <Button onClick={toggleCardAddProduct}>Закрыть</Button>
          </Group>
        </Flex>
      </form>
    </Flex>
  );
};

export default CardAddProduct;