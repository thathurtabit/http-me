import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http200s: IHttpStatusCode[] = [{
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 200,
  title: "OK",
  description: `The request succeeded. The result meaning of "success" depends on the HTTP method: "GET": "The resource has been fetched and transmitted in the message body." | "HEAD": "The representation headers are included in the response without any message body." | "PUT" or "POST": "The resource describing the result of the action is transmitted in the message body." | "TRACE": "The message body contains the request message as received by the server."`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.200"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 201,
  title: "Created",
  description: `The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.201"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 202,
  title: "Accepted",
  description: `The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.3.3"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 203,
  title: "Non-Authoritative Information",
  description: `This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.3.4"
},
{
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 204,
  title: "No Content",
  description: `There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.204"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 205,
  title: "Reset Content",
  description: `The HTTP 205 Reset Content response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.3.6"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 206,
  title: "Partial Content",
  description: `This response code is used when the Range header is sent from the client to request only part of a resource.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206",
  specLink: "https://httpwg.org/specs/rfc7233.html#status.206"
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 207,
  title: "Multi-Status",
  description: `A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-207-status-code/",
  specLink: "https://datatracker.ietf.org/doc/html/rfc4918#section-13",
  removed: true,
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 208,
  title: "Already Reported",
  description: `Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-208-status-code/",
  specLink: "https://tools.ietf.org/html/rfc5842#section-7.1",
  removed: true,
}, {
  group: EStatusCodeGroup.SUCCESSFUL,
  number: 226,
  title: "IM Used",
  description: `The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-226-status-code/",
  specLink: "https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1",
  removed: true,
}]