'use strict';

var React = require("react");
var MaterialUi_Types = require("@jsiebern/bs-material-ui/src/MaterialUi_Types.bs.js");
var Core = require("@material-ui/core");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");
var MaterialUi_CircularProgress = require("@jsiebern/bs-material-ui/src/MaterialUi_CircularProgress.bs.js");

function CircularProgressWithLabel(Props) {
  var progress = Props.progress;
  var label = Props.label;
  return React.createElement(Core.Box, {
              style: {
                display: "inline-flex",
                position: "relative"
              },
              children: null
            }, React.createElement(Core.CircularProgress, {
                  size: MaterialUi_CircularProgress.Size.$$int(100),
                  thickness: MaterialUi_Types.$$Number.$$int(5),
                  value: MaterialUi_Types.$$Number.$$int(progress),
                  variant: "determinate"
                }), React.createElement(Core.Box, {
                  style: {
                    bottom: "0",
                    display: "flex",
                    left: "0",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: React.createElement(Core.Typography, {
                        children: label,
                        color: "textSecondary",
                        component: MaterialUi_Typography.Component.string("div"),
                        variant: "h5"
                      })
                }));
}

var make = CircularProgressWithLabel;

exports.make = make;
/* react Not a pure module */
