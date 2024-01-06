import { Category } from "./category";
import { Type } from "./type";

export type BaseResponse = {
  category: Category[];
  type: Type[];
};
