export type CartItem = {
  categoryId: string;
  name: string;
  price: number;
  quantity: number;
};

export type PaymentMethod = "efectivo" | "transferencia";

export type OrderDetails = {
  name: string;
  address: string;
  phone: string;
  paymentMethod: PaymentMethod;
};
