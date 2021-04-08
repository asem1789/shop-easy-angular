export interface OrdersInfo {
  id?: string;
  createdAt?: string;
  productsRef: ProductsRef[];
  user: string;
  price: number;
  status: OrderStatus;
}

interface ProductsRef {
  id: string;
  count: number;
}

export enum OrderStatus {
  Processing = 'Processing',
  Completed = 'Completed',
  Canceled = 'Canceled',
}
