import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Image,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Role } from "@/enteties/session/User/model/slice";
import {
  addToBasket,
  removeFromBasket,
  removeProductById,
} from "@/pages/ShopPage/model/shopPageslise";
import type { Product } from "@/pages/ShopPage/type";
import isExistProductInBasket from "@/shared/helpers/basket/isTheBasket";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import classes from "./ArticleCard.module.css";

type ProductItemProps = {
  product: Product;
};

const ArticleCard: FC<ProductItemProps> = ({ product }) => {
  const isAdmin = Role.ADMIN === useAppSelector((state) => state.curentUserSlice.rule);
  const basket = useAppSelector((state) => state.producsSlise.basket);

  const matches = useMediaQuery("(min-width: 56.25em)");

  const linkProps = { target: "_blank", rel: "noopener noreferrer" };
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      navigate(`/products/${product.id}`);
    }
  };
  const removeProduct = (id: string) => {
    if (!id) return;
    dispatch(removeProductById({ id }));
  };

  const addProductToBasket = () => {
    if (product) dispatch(addToBasket(product));
  };

  const removeProductFromBasket = () => {
    if (product) dispatch(removeFromBasket(product));
  };

  return (
    <Card withBorder radius='md' className={classes.card}>
      <Box onClick={onClickItem}>
        <Card.Section>
          <Image src={product.imageURL} height={matches ? 550 : 250} />
        </Card.Section>

        <Badge
          className={classes.rating}
          variant='gradient'
          gradient={{ from: "yellow", to: "red" }}
        >
          {product.price.toPrecision()}
        </Badge>

        <Text className={classes.title} fw={500} component='a' {...linkProps}>
          {product.title}
        </Text>

        <Text fz='sm' c='dimmed' lineClamp={4}>
          {product.description}
        </Text>
      </Box>
      <Flex mt={15} gap={20} pb={10}>
        <Group>
          {!isExistProductInBasket(product.id!, basket) && (
            <Button onClick={addProductToBasket}>{t("shop.inBascet")}</Button>
          )}
          {isExistProductInBasket(product.id!, basket) && (
            <Button onClick={removeProductFromBasket}>{t("shop.fromBascet")}</Button>
          )}
        </Group>
        <Button>{t("shop.оrder")}</Button>
        {isAdmin && (
          <Button
            onClick={() => {
              removeProduct(product.id);
            }}
          >
            {t("shop.remove")}
          </Button>
        )}
      </Flex>
      <Group justify='space-between' className={classes.footer}>
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
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default ArticleCard;
