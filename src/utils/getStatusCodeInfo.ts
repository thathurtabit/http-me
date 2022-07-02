import { httpStatusCodes } from "../data/httpStatusCodes";
import { IHttpStatusCode } from "../data/httpStatusCodes.types";
/**
 * Get Status Code Info - search either status code or title
 * @param  {string} inputValue
 * @returns IHttpStatusCode
 */
export const getStatusCodeInfo = (inputValue: string): IHttpStatusCode | undefined => {
  if (!inputValue) return undefined;
  const trimmedInputValue = inputValue.trim().replace(/[^\w\s!?]/g,''); //?
  const isStatusCode = /^[0-9]{3}$/.test(inputValue);
  const searchedInput = isStatusCode ? parseInt(inputValue) : trimmedInputValue;
  return httpStatusCodes.find(
    ({statusCode, title}) => {
      if (isStatusCode) return statusCode === searchedInput
      return title.toLowerCase() === trimmedInputValue.toLowerCase()
    }
  );
}