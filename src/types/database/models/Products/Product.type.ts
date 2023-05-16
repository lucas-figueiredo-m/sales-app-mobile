export type Product = {
  id: string;
  name: string;
  server_id: number;
  price: number;
  category: string;
  type: string;

  created_at: number;
  updated_at: number;
};

export type ProductWithoutId = Omit<Product, 'id'>;
