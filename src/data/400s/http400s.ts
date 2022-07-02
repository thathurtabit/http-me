import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http400s: IHttpStatusCode[] = [{
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 400,
  title: "Bad Request",
  description: `The HyperText Transfer Protocol (HTTP) 400
  Bad Request response status code indicates that the server
  cannot or will not process the request due to something
  that is perceived to be a client error (for example, malformed
  request syntax, invalid request message framing, or
  deceptive request routing).`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.1",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 401,
  title: "Unauthorized",
  description: `The HyperText Transfer Protocol (HTTP) 401
  Unauthorized response status code indicates that the client
  request has not been completed because it lacks valid
  authentication credentials for the requested resource. This status
  code is sent with an HTTP WWW-Authenticate response header that
  contains information on how the client can request for the
  resource again after prompting the user for authentication credentials.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
  specLink: "https://httpwg.org/specs/rfc7235.html#status.401",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 402,
  title: "Payment Required",
  description: `The HTTP 402 Payment Required is a nonstandard
  response status code that is reserved for future use. This
  status code was created to enable digital cash or (micro)
  payment systems and would indicate that the requested content
  is not available until the client makes a payment.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402",
  specLink: "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2",
  experimental: true
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 403,
  title: "Forbidden",
  description: `The HTTP 403 Forbidden response status code
  indicates that the server understands the request but
  refuses to authorize it. This status is similar to 401,
  but for the 403 Forbidden status code re-authenticating
  makes no difference. The access is permanently forbidden
  and tied to the application logic, such as insufficient
  rights to a resource.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.403",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 404,
  title: "Not Found",
  description: `The HTTP 404 Not Found response status code
  indicates that the server cannot find the requested
  resource. Links that lead to a 404 page are often called
  broken or dead links and can be subject to link rot.
  A 404 status code only indicates that the resource is
  missing: not whether the absence is temporary or
  permanent. If a resource is permanently removed, use
  the 410 (Gone) status instead.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.404",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 405,
  title: "Method Not Allowed",
  description: `The HyperText Transfer Protocol (HTTP)
  405 Method Not Allowed response status code indicates
  that the server knows the request method, but the
  target resource doesn't support this method. The
  server must generate an Allow header field in a 405
  status code response. The field must contain a list
  of methods that the target resource currently supports.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.5",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 406,
  title: "Not Acceptable",
  description: `In practice, this error is very rarely used.
  Instead of responding using this error code, which would
  be cryptic for the end user and difficult to fix, servers
  ignore the relevant header and serve an actual page to
  the user. It is assumed that even if the user won't be
  completely happy, they will prefer this to an error code.
  If a server returns such an error status, the body of
  the message should contain the list of the available
  representations of the resources, allowing the user to
  choose among them.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.406",
},{
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 407,
  title: "Proxy Authentication Required",
  description: `The HTTP 407 Proxy Authentication Required
  client error status response code indicates that the request
  has not been applied because it lacks valid authentication
  credentials for a proxy server that is between the browser
  and the server that can access the requested resource. This
  status is sent with a Proxy-Authenticate header that
  contains information on how to authorize correctly.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407",
  specLink: "https://httpwg.org/specs/rfc7235.html#status.407",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 408,
  title: "Request Timeout",
  description: `The HyperText Transfer Protocol (HTTP)
  408 Request Timeout response status code means that
  the server would like to shut down this unused
  connection. It is sent on an idle connection by some
  servers, even without any previous request by the client.
  A server should send the "close" Connection header field
  in the response, since 408 implies that the server has
  decided to close the connection rather than continue waiting.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.7",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 409,
  title: "Conflict",
  description: `The HTTP 409 Conflict response status code
  indicates a request conflict with the current state of
  the target resource. Conflicts are most likely to occur
  in response to a PUT request. For example, you may get a
  409 response when uploading a file that is older than
  the existing one on the server, resulting in a version
  control conflict.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.409",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 410,
  title: "Gone",
  description: `The HyperText Transfer Protocol (HTTP) 410
  Gone client error response code indicates that access
  to the target resource is no longer available at the
  origin server and that this condition is likely to be
  permanent. If you don't know whether this condition is
  temporary or permanent, a 404 status code should be
  used instead.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.410",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 411,
  title: "Length Required",
  description: `The HyperText Transfer Protocol (HTTP) 411
  Length Required client error response code indicates that
  the server refuses to accept the request without a
  defined Content-Length header.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.10",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 412,
  title: "Precondition Failed",
  description: `The HyperText Transfer Protocol (HTTP) 412
  Precondition Failed client error response code indicates
  that access to the target resource has been denied.
  This happens with conditional requests on methods other
  than GET or HEAD when the condition defined by
  the If-Unmodified-Since or If-None-Match headers is
  not fulfilled. In that case, the request, usually an
  upload or a modification of a resource, cannot be
  made and this error response is sent back.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412",
  specLink: "https://httpwg.org/specs/rfc7232.html#status.412",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 413,
  title: "Payload Too Large",
  description: `The HTTP 413 Payload Too Large response
  status code indicates that the request entity is larger
  than limits defined by server; the server might close
  the connection or return a Retry-After header field.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.11",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 414,
  title: "URI Too Long",
  description: `The HTTP 414 URI Too Long response status
  code indicates that the URI requested by the client is
  longer than the server is willing to interpret.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.12",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 415,
  title: "Unsupported Media Type",
  description: `The HTTP 415 Unsupported Media Type client error
  response code indicates that the server refuses to accept the
  request because the payload format is in an unsupported format.
  The format problem might be due to the request's indicated
  Content-Type or Content-Encoding, or as a result of inspecting
  the data directly.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.13",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 416,
  title: "Range Not Satisfiable",
  description: `The HyperText Transfer Protocol (HTTP) 416 Range
  Not Satisfiable error response code indicates that a server
  cannot serve the requested ranges. The most likely reason
  is that the document doesn't contain such ranges, or that
  the Range header value, though syntactically correct,
  doesn't make sense.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416",
  specLink: "https://httpwg.org/specs/rfc7233.html#status.416",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 417,
  title: "Expectation Failed",
  description: `The HTTP 417 Expectation Failed client error
  response code indicates that the expectation given in the
  request's Expect header could not be met.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.14",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 418,
  title: "I'm a teapot",
  description: `The HTTP 418 I'm a teapot client error
  response code indicates that the server refuses to
  brew coffee because it is, permanently, a teapot. A
  combined coffee/tea pot that is temporarily out of
  coffee should instead return 503. This error is a
  reference to Hyper Text Coffee Pot Control Protocol
  defined in April Fools' jokes in 1998 and 2014.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",
  specLink: "https://www.rfc-editor.org/rfc/rfc2324#section-2.3.2",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 421,
  title: "Misdirected Request",
  description: `The request was directed at a server that
  is not able to produce a response. This can be sent by
  a server that is not configured to produce responses for
  the combination of scheme and authority that are included
  in the request URI.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-421-status-code/",
  specLink: "https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 421,
  title: "Misdirected Request",
  description: `The request was directed at a server that
  is not able to produce a response. This can be sent by
  a server that is not configured to produce responses for
  the combination of scheme and authority that are included
  in the request URI.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-421-status-code/",
  specLink: "https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 422,
  title: "Unprocessable Entity",
  description: `The HyperText Transfer Protocol (HTTP) 422
  Unprocessable Entity response status code indicates that
  the server understands the content type of the request
  entity, and the syntax of the request entity is correct,
  but it was unable to process the contained instructions.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422",
  specLink: "https://www.rfc-editor.org/rfc/rfc4918#section-11.2",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 423,
  title: "Locked",
  description: `The resource that is being accessed is locked.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-423-status-code/",
  specLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-423-status-code/",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 424,
  title: "Failed Dependency",
  description: `The method could not be performed on the
  resource because the requested action depended on
  another action and that action failed.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-424-status-code/",
  specLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-424-status-code/",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 425,
  title: "Too Early",
  description: `The HyperText Transfer Protocol (HTTP) 425
  Too Early response status code indicates that the server
  is unwilling to risk processing a request that might
  be replayed, which creates the potential for a
  replay attack.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425",
  specLink: "https://httpwg.org/specs/rfc8470.html#status",
  experimental: true
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 426,
  title: "Upgrade Required",
  description: `The HTTP 426 Upgrade Required client error
  response code indicates that the server refuses to
  perform the request using the current protocol but
  might be willing to do so after the client upgrades
  to a different protocol.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.5.15",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 428,
  title: "Precondition Required",
  description: `The origin server requires the request to
  be conditional. This response is intended to prevent
  the 'lost update' problem, where a client GETs a
  resource's state, modifies it and PUTs it back to
  the server, when meanwhile a third party has modified
  the state on the server, leading to a conflict.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428",
  specLink: "https://www.rfc-editor.org/rfc/rfc6585#section-3",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 429,
  title: "Too Many Requests",
  description: `The HTTP 429 Too Many Requests response
  status code indicates the user has sent too many
  requests in a given amount of time ("rate limiting").
  A Retry-After header might be included to this
  response indicating how long to wait before making
  a new request.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429",
  specLink: "https://www.rfc-editor.org/rfc/rfc6585#section-4",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 431,
  title: "Request Header Fields Too Large",
  description: `The server is unwilling to process the
  request because its header fields are too large.
  The request may be resubmitted after reducing the
  size of the request header fields.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431",
  specLink: "https://www.rfc-editor.org/rfc/rfc6585#section-5",
}, {
  group: EStatusCodeGroup.CLIENT_ERROR,
  statusCode: 451,
  title: "Unavailable For Legal Reasons",
  description: `The HyperText Transfer Protocol (HTTP) 451
  Unavailable For Legal Reasons client error response
  code indicates that the user requested a resource that
  is not available due to legal reasons, such as a web
  page for which a legal action has been issued.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451",
  specLink: "https://httpwg.org/specs/rfc7725.html#n-451-unavailable-for-legal-reasons",
}]