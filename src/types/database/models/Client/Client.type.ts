export type Client = {
  id: string;
  server_id?: number;
  employee_id: number;
  company_name: string;
  trade_name: string;
  taxpayer_id: string;
  type: string;
  buyer_first_name: string;
  buyer_last_name: string;
  phone: string;
  address: string;
  number: string;
  complement: string;
  zip_code: string;
  active: boolean;

  created_at: number;
  updated_at: number;
};

export type ClientWithoutId = Omit<Client, 'id' | 'created_at' | 'updated_at'>;
