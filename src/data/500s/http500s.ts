import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http500s: IHttpStatusCode[] = [{
  category: EStatusCodeGroup.SERVER_ERROR,
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
  category: EStatusCodeGroup.SERVER_ERROR,
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
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 502,
  title: "Bad Gateway",
  description: `The HyperText Transfer Protocol (HTTP) 502 Bad Gateway
  server error response code indicates that the server,
  while acting as a gateway or proxy, received an invalid
  response from the upstream server.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.502",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
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
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 504,
  title: "Gateway Timeout",
  description: `The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout
  server error response code indicates that the server, while acting
  as a gateway or proxy, did not get a response in time from the
  upstream server that it needed in order to complete the request.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.504",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 505,
  title: "HTTP Version Not Supported",
  description: `The HyperText Transfer Protocol (HTTP) 505 HTTP Version Not Supported
  response status code indicates that the HTTP version used in the request is
  not supported by the server.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.505",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 506,
  title: "Variant Also Negotiates",
  description: `The HyperText Transfer Protocol (HTTP) 506 Variant
  Also Negotiates response status code may be given in
  the context of Transparent Content Negotiation
  (see RFC 2295). This protocol enables a client to
  retrieve the best variant of a given resource, where
  the server supports multiple variants.

  The Variant Also Negotiates status code indicates an
  internal server configuration error in which the chosen
  variant is itself configured to engage in content
  negotiation, so is not a proper negotiation endpoint.
  `,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506",
  specLink: "https://www.rfc-editor.org/rfc/rfc2295#section-8.1",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 507,
  title: "Insufficient Storage",
  description: `The HyperText Transfer Protocol (HTTP) 507
  Insufficient Storage response status code may be given
  in the context of the Web Distributed Authoring and
  Versioning (WebDAV) protocol (see RFC 4918).

  It indicates that a method could not be performed because
  the server cannot store the representation needed to
  successfully complete the request.
  `,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507",
  specLink: "https://www.rfc-editor.org/rfc/rfc4918#section-11.5",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 508,
  title: "Loop Detected",
  description: `The HyperText Transfer Protocol (HTTP) 508
  Loop Detected response status code may be given
  in the context of the Web Distributed Authoring
  and Versioning (WebDAV) protocol.

  It indicates that the server terminated an operation
  because it encountered an infinite loop while processing
  a request with "Depth: infinity". This status indicates
  that the entire operation failed.
  `,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508",
  specLink: "https://www.rfc-editor.org/rfc/rfc5842#section-7.2",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 510,
  title: "Not Extended",
  description: `The HyperText Transfer Protocol (HTTP) 510 Not Extended
  response status code is sent in the context of the HTTP
  Extension Framework, defined in RFC 2774.

  In that specification a client may send a request that contains
  an extension declaration, that describes the extension to be used.
  If the server receives such a request, but any described extensions
  are not supported for the request, then the server responds with
  the 510 status code.
  `,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510",
  specLink: "https://www.rfc-editor.org/rfc/rfc2774#section-7",
}, {
  category: EStatusCodeGroup.SERVER_ERROR,
  statusCode: 511,
  title: "Network Authentication Required",
  description: `The HTTP 511 Network Authentication Required response
  status code indicates that the client needs to authenticate to
  gain network access.

  This status is not generated by origin servers, but by
  intercepting proxies that control access to the network.
  
  Network operators sometimes require some authentication,
  acceptance of terms, or other user interaction before granting
  access (for example in an internet café or at an airport).
  They often identify clients who have not done so using their
  Media Access Control (MAC) addresses.
  `,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511",
  specLink: "https://www.rfc-editor.org/rfc/rfc6585#section-6",
}]