import { SimpleGrid } from '@mantine/core';
import { useEffect } from 'react';

import { ProductCard } from '@/features/ProductCard/ProductCard';

import classes from './Main.module.css';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { count: number; rate: number };
};
const productList = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://picsum.photos/200/300',
    category: "men's clothing"
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    category: "men's clothing"
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    category: "men's clothing"
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on t…uld be reviewed below on the product description.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    category: "men's clothing"
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery'
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery'
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamo…agement, Wedding, Anniversary, Valentine's Day...",
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery'
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery'
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    category: 'electronics'
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: 'electronics'
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere F… capacity, 3-year manufacturer's limited warranty",
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: 'electronics'
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS …egree. Vertical viewing angle-178 degree 75 hertz',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: 'electronics'
  },
  {
    id: 14,
    title:
      'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    price: 999.99,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR…inate motion blur, ghosting, and reduce input lag',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: 'electronics'
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      'Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    description:
      'Lightweight perfet for trip or casual wear---Long …djustable Drawstrings give it a real styled look.',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do …ves and neckline / Double stitching on bottom hem',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort',
    rating: {
      count: 120,
      rate: 3.9
    },
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category: "women's clothing"
  }
];

export const MainPage = () => {
  useEffect(() => {
    console.log('Product list: ', productList);
  }, [productList]);

  const removeFromCart = (id: number) => {
    console.log(id);
  };

  return (
    <>
      {productList.length > 0 && (
        <SimpleGrid className={classes.card} cols={3} spacing="lg" verticalSpacing="xl">
          {productList.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              inCart={true}
              removeProduct={removeFromCart}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default MainPage;
