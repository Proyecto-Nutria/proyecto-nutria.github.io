'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Util$Yaos = require("../Modules/Util.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Core = require("@material-ui/core");
var MaterialUi_TextField = require("@jsiebern/bs-material-ui/src/MaterialUi_TextField.bs.js");

function SettingsDialog(Props) {
  var _open = Props.open;
  var currentTime = Props.currentTime;
  var currentEndTime = Props.currentEndTime;
  var onSave = Props.onSave;
  var match = React.useState(function () {
        return currentTime;
      });
  var setNewTime = match[1];
  var newTime = match[0];
  var match$1 = React.useState(function () {
        return currentEndTime;
      });
  var setNewEndTime = match$1[1];
  var newEndTime = match$1[0];
  React.useEffect((function () {
          Curry._1(setNewTime, (function (param) {
                  return currentTime;
                }));
          Curry._1(setNewEndTime, (function (param) {
                  return currentEndTime;
                }));
          
        }), [_open]);
  return React.createElement(Core.Dialog, {
              children: null,
              onClose: (function (param, param$1) {
                  return Curry._2(onSave, newTime, newEndTime);
                }),
              open: _open
            }, React.createElement(Core.DialogTitle, {
                  children: "Timer Settings"
                }), React.createElement(Core.DialogContent, {
                  children: null
                }, "Start Time:", React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("div", {
                      style: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "center"
                      }
                    }, React.createElement(Core.TextField, {
                          style: {
                            display: "flex",
                            width: "150px"
                          },
                          defaultValue: MaterialUi_TextField.DefaultValue.$$int(currentTime.minutes),
                          label: "Minutes",
                          onChange: (function ($$event) {
                              $$event.persist();
                              return Curry._1(setNewTime, (function (old) {
                                            return {
                                                    minutes: Pervasives.abs(Util$Yaos.int_from_string($$event.target.value)),
                                                    seconds: old.seconds
                                                  };
                                          }));
                            }),
                          type: "number",
                          variant: "outlined"
                        }), React.createElement("div", {
                          style: {
                            width: "15px"
                          }
                        }), React.createElement(Core.TextField, {
                          style: {
                            display: "flex",
                            width: "150px"
                          },
                          defaultValue: MaterialUi_TextField.DefaultValue.$$int(currentTime.seconds),
                          label: "Seconds",
                          onChange: (function ($$event) {
                              $$event.persist();
                              return Curry._1(setNewTime, (function (old) {
                                            return {
                                                    minutes: old.minutes,
                                                    seconds: Pervasives.abs(Util$Yaos.int_from_string($$event.target.value))
                                                  };
                                          }));
                            }),
                          type: "number",
                          variant: "outlined"
                        })), React.createElement("br", undefined), "End Time:", React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("div", {
                      style: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "center"
                      }
                    }, React.createElement(Core.TextField, {
                          style: {
                            display: "flex",
                            width: "150px"
                          },
                          defaultValue: MaterialUi_TextField.DefaultValue.$$int(currentEndTime.minutes),
                          label: "Minutes",
                          onChange: (function ($$event) {
                              $$event.persist();
                              return Curry._1(setNewEndTime, (function (old) {
                                            return {
                                                    minutes: Pervasives.abs(Util$Yaos.int_from_string($$event.target.value)),
                                                    seconds: old.seconds
                                                  };
                                          }));
                            }),
                          type: "number",
                          variant: "outlined"
                        }), React.createElement("div", {
                          style: {
                            width: "15px"
                          }
                        }), React.createElement(Core.TextField, {
                          style: {
                            display: "flex",
                            width: "150px"
                          },
                          defaultValue: MaterialUi_TextField.DefaultValue.$$int(currentEndTime.seconds),
                          label: "Seconds",
                          onChange: (function ($$event) {
                              $$event.persist();
                              return Curry._1(setNewEndTime, (function (old) {
                                            return {
                                                    minutes: old.minutes,
                                                    seconds: Pervasives.abs(Util$Yaos.int_from_string($$event.target.value))
                                                  };
                                          }));
                            }),
                          type: "number",
                          variant: "outlined"
                        }))), React.createElement(Core.DialogActions, {
                  children: null
                }, React.createElement(Core.Button, {
                      onClick: (function (param) {
                          return Curry._2(onSave, currentTime, currentEndTime);
                        }),
                      children: "Cancel",
                      color: "secondary"
                    }), React.createElement(Core.Button, {
                      onClick: (function (param) {
                          return Curry._2(onSave, newTime, newEndTime);
                        }),
                      children: "Save",
                      color: "primary"
                    })));
}

var make = SettingsDialog;

exports.make = make;
/* react Not a pure module */
