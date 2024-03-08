import {
  ActionIcon,
  Avatar,
  Button,
  Center,
  Flex,
  Group,
  Image,
  rem,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import s from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const product = useAppSelector((state) => state.producsSlise.product);

  return (
    <Flex className={s.cardWrapper}>
      <Flex className={s.descriptionWrapper}>
        <Flex display='flex' justify='space-between' direction='column'>
          <Flex display='flex' justify='space-between' direction='column'>
            <Title>{product?.title}</Title>
            <Button>
              <Link to='/products'>{t("shop.inshop")}</Link>
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Group mt={15} gap={20} pb={10}>
            <Button>{t("shop.inBascet")}</Button>
            <Button>{t("shop.оrder")}</Button>
          </Group>
          <Group justify='space-between' className={s.footer}>
            <Center>
              <Avatar
                src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'
                size={24}
                radius='xl'
                mr='xs'
              />
              <Text fz='sm' inline>
                Bill Wormeater
              </Text>
            </Center>

            <Group gap={8} mr={0}>
              <ActionIcon className={s.action}>
                <IconHeart
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.red[6]}
                />
              </ActionIcon>
              <ActionIcon className={s.action}>
                <IconBookmark
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.yellow[7]}
                />
              </ActionIcon>
              <ActionIcon className={s.action}>
                <IconShare
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </ActionIcon>
            </Group>
          </Group>
        </Flex>
      </Flex>
      <Flex className={s.imageWrapper} w={550}>
        <Image src={product?.imageURL} />
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
