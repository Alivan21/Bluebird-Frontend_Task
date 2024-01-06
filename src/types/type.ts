export type CarType = {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
};

export type Type = {
  id: number;
  category_id: number;
  car_type: CarType[];
};
