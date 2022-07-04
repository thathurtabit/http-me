import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http300s: IHttpStatusCode[] = [{
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 300,
  title: "Multiple Choices",
  description: `The request has more than one possible response.
  The user agent or user should choose one of them.
  (There is no standardized way of choosing one of the responses,
  but HTML links to the possibilities are recommended so
  the user can pick.)`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.4.1"
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 301,
  title: "Moved Permanently",
  description: `The HyperText Transfer Protocol (HTTP) 301 Moved Permanently
  redirect status response code indicates that the requested resource
  has been definitively moved to the URL given by the Location headers.
  A browser redirects to the new URL and search engines update
  their links to the resource.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.301"
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 302,
  title: "Found",
  description: `The HyperText Transfer Protocol (HTTP) 302 Found
  redirect status response code indicates that the resource requested
  has been temporarily moved to the URL given by the Location header.
  A browser redirects to this page but search engines don't update
  their links to the resource (in 'SEO-speak', it is said that the
  'link-juice' is not sent to the new URL).`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.302"
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 303,
  title: "See Other",
  description: `The HyperText Transfer Protocol (HTTP) 303 See Other
  redirect status response code indicates that the redirects don't
  link to the requested resource itself, but to another page (such
  as a confirmation page, a representation of a real-world object
  — see HTTP range-14 — or an upload-progress page). This response
  code is often sent back as a result of PUT or POST. The method
  used to display this redirected page is always GET.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.303"
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 304,
  title: "Not Modified",
  description: `The HTTP 304 Not Modified client redirection response
  code indicates that there is no need to retransmit the requested
  resources. It is an implicit redirection to a cached resource.
  This happens when the request method is a safe method, such as GET
  or HEAD, or when the request is conditional and uses an
  If-None-Match or an If-Modified-Since header.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304",
  specLink: "https://httpwg.org/specs/rfc7232.html#status.304"
},  {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 305,
  title: "Use Proxy",
  description: `Defined in a previous version of the HTTP specification
  to indicate that a requested response must be accessed by
  a proxy. It has been deprecated due to security concerns
  regarding in-band configuration of a proxy.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-305-status-code/",
  specLink: "https://tools.ietf.org/html/rfc7231#section-6.4.5",
  deprecated: true
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 306,
  title: "- unused -",
  description: `This response code is no longer used; it is just reserved.
  It was used in a previous version of the HTTP/1.1 specification.`,
  moreLink: "https://webconcepts.info/concepts/http-status-code/306",
  specLink: "https://webconcepts.info/concepts/http-status-code/306",
  deprecated: true
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 307,
  title: "Temporary Redirect",
  description: `The server sends this response to direct the client to
  get the requested resource at another URI with same method that was
  used in the prior request. This has the same semantics as the 302
  Found HTTP response code, with the exception that the user agent
  must not change the HTTP method used: if a POST was used in the
  first request, a POST must be used in the second request.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.307",
}, {
  category: EStatusCodeGroup.REDIRECTION,
  statusCode: 308,
  title: "Permanent Redirect",
  description: `The HyperText Transfer Protocol (HTTP) 308
  Permanent Redirect redirect status response code indicates
  that the resource requested has been definitively moved to
  the URL given by the Location headers. A browser redirects
  to this page and search engines update their links to the
  resource (in 'SEO-speak', it is said that the 'link-juice'
  is sent to the new URL).`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308",
  specLink: "https://httpwg.org/specs/rfc7538.html#status.308",
}]