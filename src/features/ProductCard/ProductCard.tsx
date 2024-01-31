import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Rating,
  Text,
  Tooltip
} from '@mantine/core';

import type { Product } from '@/pages/MainPage/MainPage';

export const ProductCard = ({
  product,
  inCart = false,
  removeProduct
}: {
  product: Product;
  inCart: boolean;
  removeProduct: (id: number) => void;
}) => {
  return (
    <Box>
      <Tooltip label={product?.title}>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          style={{
            cursor: 'pointer'
          }}>
          <Card.Section p={100}>
            <AspectRatio maw={300} ratio={720 / 1080} mx="auto">
              <Image src={product?.image} height={200} alt={product?.title} />
            </AspectRatio>
          </Card.Section>

          <Group mt="md" mb="xs">
            <Text lineClamp={1}>{product?.title}</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text lineClamp={1} size="sm" color="dimmed" ml="0.25rem">
            ${product?.price}
          </Text>
          <Rating value={product?.rating?.rate} fractions={3} readOnly />
          {inCart && (
            <Flex
              mih={50}
              mt="1rem"
              gap="lg"
              justify="flex-end"
              align="flex-end"
              direction="row"
              wrap="wrap">
              <Button
                variant="gradient"
                gradient={{ from: '#ed6ea0', to: 'red', deg: 35 }}
                onClick={() => removeProduct(product?.id)}>
                Remove from Cart
              </Button>
            </Flex>
          )}
        </Card>
      </Tooltip>
    </Box>
  );
};
