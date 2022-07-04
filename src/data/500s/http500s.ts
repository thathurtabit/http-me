import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http500s: IHttpStatusCode[] = [{
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 500,
  title: "Internal Server Error",
  description: `The HyperText Transfer Protocol (HTTP) 500
  Internal Server Error server error response code indicates
  that the server encountered an unexpected condition that
  prevented it from fulfilling the request.

  This error response is a generic "catch-all" response.
  Usually, this indicates the server cannot find a better
  5xx error code to response. Sometimes, server administrators
  log error responses like the 500 status code with more
  details about the request to prevent the error from happening
  again in the future.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.500",
}, {
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 501,
  title: "Not Implemented",
  description: `The HyperText Transfer Protocol (HTTP) 501 Not Implemented
  server error response code means that the server does not support
  the functionality required to fulfill the request.

  This status can also send a Retry-After header, telling the requester
  when to check back to see if the functionality is supported by then.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.501",
}, {
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 502,
  title: "Bad Gateway",
  description: `The HyperText Transfer Protocol (HTTP) 502 Bad Gateway
  server error response code indicates that the server,
  while acting as a gateway or proxy, received an invalid
  response from the upstream server.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.502",
}, {
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 503,
  title: "Service Unavailable",
  description: `The HyperText Transfer Protocol (HTTP) 503 Service Unavailable
  server error response code indicates that the server is not ready to
  handle the request.

  Common causes are a server that is down for maintenance or that
  is overloaded. This response should be used for temporary conditions
  and the Retry-After HTTP header should, if possible, contain the
  estimated time for the recovery of the service.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.503",
}, {
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 504,
  title: "Gateway Timeout",
  description: `The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout
  server error response code indicates that the server, while acting
  as a gateway or proxy, did not get a response in time from the
  upstream server that it needed in order to complete the request.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.504",
}, {
  group: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 505,
  title: "HTTP Version Not Supported",
  description: `The HyperText Transfer Protocol (HTTP) 505 HTTP Version Not Supported
  response status code indicates that the HTTP version used in the request is
  not supported by the server.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.505",
}]