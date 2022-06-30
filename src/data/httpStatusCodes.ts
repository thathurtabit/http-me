import { http100s } from "./100s/http100s";
import { http200s } from "./200s/http200s";

export const httpStatusCodes = [
  ...http100s,
  ...http200s
]