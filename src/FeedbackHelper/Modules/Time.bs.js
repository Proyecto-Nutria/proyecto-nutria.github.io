'use strict';

var Util$Yaos = require("./Util.bs.js");

function newDuration(param) {
  return {
          minutes: 0,
          seconds: 0
        };
}

function normalize(d) {
  var minutes = d.minutes + (d.seconds / 60 | 0) | 0;
  var seconds = d.seconds % 60;
  return {
          minutes: minutes,
          seconds: seconds
        };
}

function add(a, b) {
  return normalize({
              minutes: a.minutes + b.minutes | 0,
              seconds: a.seconds + b.seconds | 0
            });
}

function percentage(current, total) {
  var totalSeconds = total.seconds + Math.imul(total.minutes, 60) | 0;
  var currentSeconds = current.seconds + Math.imul(current.minutes, 60) | 0;
  return currentSeconds / totalSeconds * 100 | 0;
}

function format(d) {
  return Util$Yaos.lfill(String(d.minutes), 2, /* "0" */48) + (":" + Util$Yaos.lfill(String(d.seconds), 2, /* "0" */48));
}

function toSeconds(d) {
  return d.seconds + Math.imul(d.minutes, 60) | 0;
}

function toMilliseconds(d) {
  return Math.imul(toSeconds(d), 1000);
}

exports.newDuration = newDuration;
exports.normalize = normalize;
exports.add = add;
exports.percentage = percentage;
exports.format = format;
exports.toSeconds = toSeconds;
exports.toMilliseconds = toMilliseconds;
/* Util-Yaos Not a pure module */
