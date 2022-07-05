# http-me: status code lookup CLI



[![npm package](https://img.shields.io/badge/npm%20i%20--g-http--me-brightgreen)](https://www.npmjs.com/package/http-me)
[![npm package](https://img.shields.io/badge/yarn%20global%20add-http--me-brightgreen)](https://yarnpkg.com/package/http-me) [![version number](https://img.shields.io/npm/v/http-me?color=green&label=version)](https://github.com/thathurtabit/http-me/releases) [![Actions Status](https://github.com/thathurtabit/http-me/workflows/Test/badge.svg)](https://github.com/thathurtabit/http-me/actions) [![License](https://img.shields.io/github/license/thathurtabit/http-me)](https://github.com/thathurtabit/http-me/blob/main/LICENSE)

If you're anything like me, you'll forget all but a handful of HTTP Status Codes, so why not install and then run a quick lookup from your terminal?

## Install

```bash
npm i -g http-me
```
or
```bash
yarn global add http-me
```

## Usage example
In your terminal, enter `http-me` and then a status code number, ie:
```
$ http-me 400

------------------------------------------------------
  http-me: a quick HTTP status code lookup
------------------------------------------------------

  Status Code: 400
  Title: Bad Request
  Category: Client Error Responses

  Description:
  The HyperText Transfer Protocol (HTTP) 400
  Bad Request response status code indicates that the server
  cannot or will not process the request due to something
  that is perceived to be a client error.

  Info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
  Spec: https://httpwg.org/specs/rfc7231.html#section-6.5.1

------------------------------------------------------
```

You can also search for a status code title, such as:

```
$ http-me "Found"

------------------------------------------------------
  http-me: a quick HTTP status code lookup
------------------------------------------------------

  Status Code: 302
  Title: Found
  Category: Redirection Messages

  Description:
  The HyperText Transfer Protocol (HTTP) 302 Found
  redirect status response code indicates that the resource requested
  has been temporarily moved to the URL given by the Location header.

  Info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
  Spec: https://httpwg.org/specs/rfc7231.html#status.302

------------------------------------------------------

```