export type HistoricalProductPrice = {
  id: string;
  server_id: number;
  product_id: number;
  price: number;

  created_at: number;
  updated_at: number;
};

export type HistoricalProductPriceWithoutId = Omit<
  HistoricalProductPrice,
  'id'
>;
