'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var RelayRuntime = require("relay-runtime");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Graphql_error = Caml_exceptions.create("RelayEnv-Yaos.Graphql_error");

function fetchQuery(operation, variables, _cacheConfig) {
  return fetch(process.env.API_URL, Fetch.RequestInit.make(/* Post */2, {
                      "content-type": "application/json",
                      accept: "application/json"
                    }, Caml_option.some(JSON.stringify(Js_dict.fromList({
                                  hd: [
                                    "query",
                                    operation.text
                                  ],
                                  tl: {
                                    hd: [
                                      "variables",
                                      variables
                                    ],
                                    tl: /* [] */0
                                  }
                                }))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(function (resp) {
              if (resp.ok) {
                return resp.json();
              } else {
                return Promise.reject({
                            RE_EXN_ID: Graphql_error,
                            _1: "Request failed: " + resp.statusText
                          });
              }
            });
}

var network = RelayRuntime.Network.create(fetchQuery, undefined);

var environment = ReasonRelay.Environment.make(network, ReasonRelay.Store.make(new RelayRuntime.RecordSource(undefined), 10, undefined, undefined), undefined, undefined, undefined, undefined);

exports.Graphql_error = Graphql_error;
exports.fetchQuery = fetchQuery;
exports.network = network;
exports.environment = environment;
/* network Not a pure module */
