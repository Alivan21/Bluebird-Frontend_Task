import { httpClient } from "@/lib/httpClient";
import { BaseResponse } from "@/types/BaseResponse";

export async function getVehicle() {
  const res = await httpClient.get<BaseResponse>("/vehicles");
  if (res.data === undefined) return;
  return res.data.type;
}
