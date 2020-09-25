'use strict';

var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");

var Types = {};

var responseConverter = {};

function convertResponse(v) {
  return ReasonRelay._convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {};

function convertVariables(v) {
  return ReasonRelay._convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertRawResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

var Utils = {};

var node = ((function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "InterviewScore",
    "kind": "LinkedField",
    "name": "interviewScores",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoadScores_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LoadScores_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "42dcaa8679df80aa36473e9d62a3ff9f",
    "id": null,
    "metadata": {},
    "name": "LoadScores_Query",
    "operationKind": "query",
    "text": "query LoadScores_Query {\n  interviewScores {\n    id\n    value\n    description\n  }\n}\n"
  }
};
})());

var include = ReasonRelay.MakeLoadQuery({
      query: node,
      convertVariables: convertVariables
    });

var load = include.load;

var queryRefToObservable = include.queryRefToObservable;

var queryRefToPromise = include.queryRefToPromise;

exports.Types = Types;
exports.Internal = Internal;
exports.Utils = Utils;
exports.node = node;
exports.load = load;
exports.queryRefToObservable = queryRefToObservable;
exports.queryRefToPromise = queryRefToPromise;
/* node Not a pure module */
