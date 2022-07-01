import { http100s } from "./100s/http100s";
import { http200s } from "./200s/http200s";
import { http300s } from "./300s/http300s";
import { http400s } from "./400s/http400s";

export const httpStatusCodes = [
  ...http100s,
  ...http200s,
  ...http300s,
  ...http400s
]