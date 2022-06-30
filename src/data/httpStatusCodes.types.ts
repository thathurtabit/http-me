export enum EStatusCodeGroup {
  INFORMATIONAL = "Informational responses",
  SUCCESSFUL = "Successful responses",
  REDIRECTION = "Redirection messages",
  CLIENT_ERROR = "Client error responses",
  SERVER_ERROR = "Server error responses",
}

export interface IHttpStatusCode {
  group: EStatusCodeGroup;
  number: number;
  title: string;
  description: string;
  moreLink: string;
  specLink: string;
  removed?: boolean;
  experimental?: boolean;
}