export enum EStatusCodeGroup {
  INFORMATIONAL = "Informational Responses",
  SUCCESSFUL = "Successful Responses",
  REDIRECTION = "Redirection Messages",
  CLIENT_ERROR = "Client Error Responses",
  SERVER_ERROR = "Server Error Responses",
  MISC = "???"
}

export interface IHttpStatusCode {
  category: EStatusCodeGroup;
  statusCode: number;
  title: string;
  description: string;
  moreLink: string;
  specLink: string;
  deprecated?: boolean;
  experimental?: boolean;
}