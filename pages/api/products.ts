import type { NextApiRequest, NextApiResponse } from 'next';
import * as products from '../../data/products.json';

type Data = {
  id: string;
  name: string;
  description: string;
  prices: price[];
  category: string;
  subCategory: string;
  stock: boolean;
  imageURL: string;
}[];

type price = {
  size: string;
  price: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products);
}
