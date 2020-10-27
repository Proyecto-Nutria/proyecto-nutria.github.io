'use strict';

var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");

function lfill(str, width, value) {
  var strlen = str.length;
  if (strlen >= width) {
    return str;
  }
  var offset = width - strlen | 0;
  return $$String.init(width, (function (i) {
                if (i < offset) {
                  return value;
                } else {
                  return Caml_string.get(str, i - offset | 0);
                }
              }));
}

function int_from_string(str) {
  if (str.length === 0) {
    return 0;
  } else {
    return Caml_format.caml_int_of_string(str);
  }
}

function exactMatch(pattern, str) {
  var match_ = str.match(new RegExp(pattern));
  if (match_ !== null) {
    return Caml_array.get(match_, 0) === str;
  } else {
    return false;
  }
}

function positiveFormat(comment) {
  return "<span style='background: lightgreen'>" + (comment + "</span>");
}

function negativeFormat(comment) {
  return "<span style='background: red; color: white;'>" + (comment + "</span>");
}

function matchRegex(pattern, str) {
  var match_ = str.match(new RegExp(pattern));
  return match_ !== null;
}

function prettifyText(text) {
  var lines = text.split("\n");
  var ans = "";
  for(var i = 0 ,i_finish = lines.length; i < i_finish; ++i){
    ans = matchRegex("\\s*\\[\\d+:\\d+\\]\\s*\\+\\.*", Caml_array.get(lines, i)) ? ans + (positiveFormat(Caml_array.get(lines, i)) + "<br/>") : (
        matchRegex("\\s*\\[\\d+:\\d+\\]\\s*\\-\\.*", Caml_array.get(lines, i)) ? ans + (negativeFormat(Caml_array.get(lines, i)) + "<br/>") : ans + (Caml_array.get(lines, i) + "<br/>")
      );
  }
  return ans;
}

function stringFromOption(str) {
  if (str !== undefined) {
    return str;
  } else {
    return "";
  }
}

function isUrl(str) {
  return matchRegex("^((https?:\\/\\/))?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$", str);
}

function urlFormat(url) {
  return "<a href=\"" + (url + ("\">" + (url + "</a>")));
}

function forceMemo(__x) {
  return React.memo(__x, (function (param, param$1) {
                return true;
              }));
}

exports.lfill = lfill;
exports.int_from_string = int_from_string;
exports.exactMatch = exactMatch;
exports.positiveFormat = positiveFormat;
exports.negativeFormat = negativeFormat;
exports.matchRegex = matchRegex;
exports.prettifyText = prettifyText;
exports.stringFromOption = stringFromOption;
exports.isUrl = isUrl;
exports.urlFormat = urlFormat;
exports.forceMemo = forceMemo;
/* react Not a pure module */
