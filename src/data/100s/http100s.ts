import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http100s: IHttpStatusCode[] = [{
  group: EStatusCodeGroup.INFORMATIONAL,
  statusCode: 100,
  title: "Continue",
  description: `The HTTP 100 Continue informational
  status response code indicates that everything so
  far is OK and that the client should continue with
  the request or ignore it if it is already finished.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100",
  specLink: "https://httpwg.org/specs/rfc7231.html#status.100"
}, {
  group: EStatusCodeGroup.INFORMATIONAL,
  statusCode: 101,
  title: "Switching Protocols",
  description: `The HTTP 101 Switching Protocols
  response code indicates a protocol to which the
  server switches. The protocol is specified in the
  Upgrade request header received from a client.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101",
  specLink: "https://httpwg.org/specs/rfc7231.html#section-6.2.2"
}, {
  group: EStatusCodeGroup.INFORMATIONAL,
  statusCode: 102,
  title: "Processing",
  description: `This code indicates that the server
  has received and is processing the request,
  but no response is available yet.`,
  moreLink: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-102-status-code/",
  specLink: "https://datatracker.ietf.org/doc/html/rfc2518#section-10.1",
  deprecated: true
}, {
  group: EStatusCodeGroup.INFORMATIONAL,
  statusCode: 103,
  title: "Early Hints",
  description: `This status code is primarily intended
  to be used with the Link header, letting the user
  agent start preloading resources while the server prepares a response.`,
  moreLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103",
  specLink: "https://html.spec.whatwg.org/multipage/semantics.html#early-hints",
}]