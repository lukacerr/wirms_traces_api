"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["CONTINUE"] = 100] = "CONTINUE";
    HttpCodes[HttpCodes["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpCodes[HttpCodes["PROCESSING"] = 102] = "PROCESSING";
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["CREATED"] = 201] = "CREATED";
    HttpCodes[HttpCodes["ACCEPTED"] = 202] = "ACCEPTED";
    HttpCodes[HttpCodes["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpCodes[HttpCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpCodes[HttpCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpCodes[HttpCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpCodes[HttpCodes["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpCodes[HttpCodes["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpCodes[HttpCodes["IM_USED"] = 226] = "IM_USED";
    HttpCodes[HttpCodes["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpCodes[HttpCodes["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpCodes[HttpCodes["FOUND"] = 302] = "FOUND";
    HttpCodes[HttpCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpCodes[HttpCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpCodes[HttpCodes["USE_PROXY"] = 305] = "USE_PROXY";
    HttpCodes[HttpCodes["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
    HttpCodes[HttpCodes["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpCodes[HttpCodes["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpCodes[HttpCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCodes[HttpCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCodes[HttpCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpCodes[HttpCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpCodes[HttpCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCodes[HttpCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpCodes[HttpCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpCodes[HttpCodes["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpCodes[HttpCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpCodes[HttpCodes["CONFLICT"] = 409] = "CONFLICT";
    HttpCodes[HttpCodes["GONE"] = 410] = "GONE";
    HttpCodes[HttpCodes["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpCodes[HttpCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpCodes[HttpCodes["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpCodes[HttpCodes["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpCodes[HttpCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpCodes[HttpCodes["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpCodes[HttpCodes["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpCodes[HttpCodes["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpCodes[HttpCodes["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpCodes[HttpCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpCodes[HttpCodes["LOCKED"] = 423] = "LOCKED";
    HttpCodes[HttpCodes["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpCodes[HttpCodes["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpCodes[HttpCodes["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpCodes[HttpCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpCodes[HttpCodes["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpCodes[HttpCodes["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpCodes[HttpCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpCodes[HttpCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpCodes[HttpCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpCodes[HttpCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpCodes[HttpCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpCodes[HttpCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpCodes[HttpCodes["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpCodes[HttpCodes["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpCodes[HttpCodes["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpCodes[HttpCodes["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpCodes[HttpCodes["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpCodes || (HttpCodes = {}));
exports.default = HttpCodes;
