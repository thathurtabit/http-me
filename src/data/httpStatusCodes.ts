import { http100s } from "./100s/http100s";
import { http200s } from "./200s/http200s";
import { http300s } from "./300s/http300s";
import { http400s } from "./400s/http400s";
import { http500s } from "./500s/http500s";
import { IHttpStatusCode } from "./httpStatusCodes.types";

export const httpStatusCodes: IHttpStatusCode[] = [
  ...http100s,
  ...http200s,
  ...http300s,
  ...http400s,
  ...http500s
]

// TODO: create or add a working TS compatible link shortener
// const getShortURL =  (urlToShorten: string) => shortUrl(urlToShorten, (_: string, url: string) => url);

// export const httpStatusCodes: IHttpStatusCode[] = httpStatusCodesRaw.map(({moreLink, specLink, ...rest}) => ({
//   ...rest,
//   moreLink: getShortURL(moreLink),
//   specLink: getShortURL(specLink),
// }))