import chalk from "chalk";
import { EStatusCodeGroup } from "../data/httpStatusCodes.types";

export const getCategoryColor = (input: string | number | undefined, group: EStatusCodeGroup | undefined): string => {
  const textToReturn = input?.toString();
  switch (group) {
    case EStatusCodeGroup.INFORMATIONAL:
      return chalk.blue(textToReturn);
    case EStatusCodeGroup.SUCCESSFUL:
      return chalk.green(textToReturn);
    case EStatusCodeGroup.REDIRECTION:
      return chalk.magenta(textToReturn);
    case EStatusCodeGroup.CLIENT_ERROR:
      return chalk.red(textToReturn);
    case EStatusCodeGroup.SERVER_ERROR:
      return chalk.magentaBright(textToReturn);
    default:
      return chalk.blue(textToReturn);
  }
}