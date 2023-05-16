export type Order = {
  id: string;
  server_id: number;
  client_id: number;
  estimated_order_price: number;
  order_total_price: number;
  status: string;

  created_at: number;
  updated_at: number;
};

export type OrderWithoutId = Omit<Order, 'id'>;
