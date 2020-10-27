'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Time$Yaos = require("../Modules/Time.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var TextArea$Yaos = require("../TextArea/TextArea.bs.js");
var TimerView$Yaos = require("../TimerView/TimerView.bs.js");
var Core = require("@material-ui/core");
var Styles = require("@material-ui/core/styles");
var MaterialUi_ThemeProvider = require("@jsiebern/bs-material-ui/src/MaterialUi_ThemeProvider.bs.js");

function FeedbackHelper(Props) {
  var match = React.useState(function () {
        return Time$Yaos.newDuration(undefined);
      });
  var setGTime = match[1];
  var gTime = match[0];
  var match$1 = React.useState(function () {
        return {
                minutes: 45,
                seconds: 0
              };
      });
  var setEndTime = match$1[1];
  var match$2 = React.useState(function () {
        return Date.now();
      });
  var setStartingPointInTime = match$2[1];
  var startingPointInTime = match$2[0];
  var match$3 = React.useState(function () {
        return false;
      });
  var setIsTimerActive = match$3[1];
  var isTimerActive = match$3[0];
  var match$4 = React.useState(function () {
        return true;
      });
  var setDarkTheme = match$4[1];
  var isDarkTheme = match$4[0];
  React.useEffect((function () {
          var intervalId;
          if (isTimerActive) {
            intervalId = Caml_option.some(setInterval((function (param) {
                        var newTime = Time$Yaos.normalize({
                              minutes: 0,
                              seconds: (Date.now() - startingPointInTime) / 1000.0 | 0
                            });
                        return Curry._1(setGTime, (function (param) {
                                      return newTime;
                                    }));
                      }), 1000));
          } else if (!isTimerActive) {
            var a = intervalId;
            if (a !== undefined) {
              Caml_option.valFromOption(a);
            }
            
          }
          var a$1 = intervalId;
          if (a$1 === undefined) {
            return ;
          }
          var a$2 = Caml_option.valFromOption(a$1);
          return (function (param) {
                    clearInterval(a$2);
                    
                  });
        }), [
        isTimerActive,
        setGTime,
        startingPointInTime
      ]);
  var onPlay = function (param) {
    if (Caml_obj.caml_equal(gTime, Time$Yaos.newDuration(undefined))) {
      Curry._1(setStartingPointInTime, (function (param) {
              return Date.now();
            }));
    } else {
      Curry._1(setStartingPointInTime, (function (param) {
              return Date.now() - Time$Yaos.toMilliseconds(gTime);
            }));
    }
    return Curry._1(setIsTimerActive, (function (param) {
                  return true;
                }));
  };
  var onPause = function (param) {
    return Curry._1(setIsTimerActive, (function (param) {
                  return false;
                }));
  };
  var onReset = function (param) {
    Curry._1(setIsTimerActive, (function (param) {
            return false;
          }));
    return Curry._1(setGTime, (function (param) {
                  return Time$Yaos.newDuration(undefined);
                }));
  };
  var updateTimes = function (newTime, newEndTime) {
    Curry._1(setGTime, (function (param) {
            return newTime;
          }));
    return Curry._1(setEndTime, (function (param) {
                  return newEndTime;
                }));
  };
  var themeOptions = {};
  if (isDarkTheme) {
    var primary = {
      main: "#EA80FC"
    };
    var secondary = {
      main: "#ffbd69"
    };
    var paletteOptions = {
      primary: primary,
      secondary: secondary,
      type: "dark"
    };
    themeOptions = {
      palette: paletteOptions
    };
  }
  var theme = Styles.createMuiTheme(themeOptions);
  return React.createElement(MaterialUi_ThemeProvider.make, {
              children: React.createElement("div", {
                    style: {
                      background: isDarkTheme ? "#575757" : "#A9A9A9",
                      display: "flex",
                      height: "100%",
                      overflowY: "auto",
                      width: "100%",
                      alignContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }
                  }, React.createElement(TimerView$Yaos.make, {
                        time: gTime,
                        endTime: match$1[0],
                        onUpdate: updateTimes,
                        onPlay: onPlay,
                        onPause: onPause,
                        onReset: onReset
                      }), React.createElement(Core.Switch, {
                        children: "switch theme",
                        checked: isDarkTheme,
                        onChange: (function (param) {
                            return Curry._1(setDarkTheme, (function (old) {
                                          return !old;
                                        }));
                          })
                      }), React.createElement(TextArea$Yaos.make, {
                        time: gTime
                      }), React.createElement("div", {
                        style: {
                          height: "15px"
                        }
                      })),
              theme: theme
            });
}

var make = FeedbackHelper;

exports.make = make;
/* react Not a pure module */
