export interface Product {
  img: string;
  model: string;
  descr: string;
  link?: string;
  price: number;
}

export enum ChangeCountActions {
  INCREASE = "increase",
  DECREASE = "decrease"
}