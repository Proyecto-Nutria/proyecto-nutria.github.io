
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Time$Yaos = require("../Modules/Time.bs.js");
var Util$Yaos = require("../Modules/Util.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var ClipboardJs = require("./Clipboard.js");
var Core = require("@material-ui/core");
var MaterialUi_MenuItem = require("@jsiebern/bs-material-ui/src/MaterialUi_MenuItem.bs.js");
var MaterialUi_TextField = require("@jsiebern/bs-material-ui/src/MaterialUi_TextField.bs.js");

function copyToClipboard(prim, prim$1) {
  ClipboardJs.default(prim, prim$1);
  
}

function TextArea(Props) {
  var time = Props.time;
  var match = React.useState(function () {
        return "";
      });
  var setFeedback = match[1];
  var feedback = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setInterviewerName = match$1[1];
  var interviewerName = match$1[0];
  var match$2 = React.useState(function () {
        return "";
      });
  var setProblems = match$2[1];
  var problems = match$2[0];
  var match$3 = React.useState(function () {
        return -1;
      });
  var setScore = match$3[1];
  var score = match$3[0];
  var scoresArray = [
    {
      id: "0",
      value: 0,
      description: "No Hire"
    },
    {
      id: "1",
      value: 1,
      description: "Undetermined"
    },
    {
      id: "2",
      value: 2,
      description: "Hire"
    },
    {
      id: "3",
      value: 3,
      description: "Strongly Hire"
    }
  ];
  var scrollableDiv = React.createRef();
  var fullScrollBottom = function (param) {
    var nullableCurrElem = scrollableDiv.current;
    if (!(nullableCurrElem == null)) {
      nullableCurrElem.scrollTop = nullableCurrElem.scrollHeight;
      return ;
    }
    
  };
  var handleChange = function (e) {
    e.persist();
    fullScrollBottom(undefined);
    var timeFormat = function (rawTime) {
      return "[" + (Time$Yaos.format(rawTime) + "] ");
    };
    var currText = e.target.value;
    var length = currText.length;
    var lastLine = "";
    var lastEnterPos = {
      contents: -1
    };
    if ($$String.contains(currText, /* "\n" */10)) {
      lastEnterPos.contents = $$String.rindex(currText, /* "\n" */10);
      lastLine = lastEnterPos.contents === (length - 1 | 0) ? "" : $$String.sub(currText, lastEnterPos.contents + 1 | 0, (length - 1 | 0) - lastEnterPos.contents | 0);
    } else {
      lastLine = currText;
    }
    if (Util$Yaos.exactMatch("\\[\\d+:\\d+\\]", lastLine)) {
      if (lastEnterPos.contents === -1) {
        return Curry._1(setFeedback, (function (param) {
                      return "";
                    }));
      } else {
        return Curry._1(setFeedback, (function (param) {
                      return $$String.sub(currText, 0, lastEnterPos.contents);
                    }));
      }
    } else if (length === 1) {
      return Curry._1(setFeedback, (function (param) {
                    return $$String.concat("", {
                                hd: timeFormat(time),
                                tl: {
                                  hd: currText,
                                  tl: /* [] */0
                                }
                              });
                  }));
    } else if (length > 0 && Caml_string.get(currText, length - 1 | 0) === /* "\n" */10) {
      return Curry._1(setFeedback, (function (param) {
                    return $$String.concat("", {
                                hd: currText,
                                tl: {
                                  hd: timeFormat(time),
                                  tl: /* [] */0
                                }
                              });
                  }));
    } else {
      return Curry._1(setFeedback, (function (param) {
                    return currText;
                  }));
    }
  };
  var getInfo = function (param) {
    var problemsFormatted = problems.split(";").join("\n");
    return "Interviewer: " + (interviewerName + ("\n\nVerdict: " + (Caml_array.caml_array_get(scoresArray, score).description + ("\n\nProblems: \n" + (problemsFormatted + "\n\n")))));
  };
  var getFormattedInfo = function (param) {
    var problemsArray = problems.split(";");
    for(var i = 0 ,i_finish = problemsArray.length; i < i_finish; ++i){
      if (Util$Yaos.isUrl(Caml_array.caml_array_get(problemsArray, i))) {
        Caml_array.caml_array_set(problemsArray, i, "<li>" + (Util$Yaos.urlFormat(Caml_array.caml_array_get(problemsArray, i)) + "</li>"));
      } else {
        Caml_array.caml_array_set(problemsArray, i, "<li>" + (Caml_array.caml_array_get(problemsArray, i) + "</li>"));
      }
    }
    var problemsFormatted = "<ol>" + (problemsArray.join("") + "</ol>");
    return "<b>Interviewer:</b> " + (interviewerName + ("\n\n<b>Verdict:</b> " + (Caml_array.caml_array_get(scoresArray, score).description + ("\n\n<b>Problems:</b>\n" + (problemsFormatted + "\n\n")))));
  };
  var isFormValid = function (param) {
    var output = "";
    if (interviewerName === "") {
      output = output + "-> Interviewer Name is a required field\n";
    }
    if (problems === "") {
      output = output + "-> Problems is a required field\n";
    }
    if (score === -1) {
      output = output + "-> Score is a required field\n";
    }
    if (feedback === "") {
      output = output + "-> Feedback is a required field\n";
    }
    if (output === "") {
      return true;
    }
    output = "Error:\n" + output;
    window.alert(output);
    return false;
  };
  return React.createElement("div", {
              style: {
                display: "flex",
                minHeight: "0",
                overflowY: "auto",
                width: "98%",
                alignItems: "center",
                flex: "1",
                flexDirection: "column"
              }
            }, React.createElement("div", {
                  ref: scrollableDiv,
                  style: {
                    display: "flex",
                    minHeight: "0",
                    overflowY: "auto",
                    width: "100%",
                    flex: "1",
                    justifyContent: "center"
                  }
                }, React.createElement("div", {
                      style: {
                        width: "100%"
                      }
                    }, React.createElement(Core.Card, {
                          children: React.createElement(Core.CardContent, {
                                children: null
                              }, React.createElement("div", {
                                    style: {
                                      display: "flex",
                                      paddingBottom: "5px",
                                      flex: "1",
                                      flexWrap: "wrap"
                                    }
                                  }, React.createElement("div", {
                                        style: {
                                          display: "flex",
                                          padding: "2px 3px 7px 3px",
                                          alignItems: "center",
                                          flexGrow: "1",
                                          justifyContent: "center"
                                        }
                                      }, React.createElement(Core.TextField, {
                                            style: {
                                              display: "flex",
                                              flex: "1"
                                            },
                                            label: "Interviewer",
                                            onChange: (function (e) {
                                                e.persist();
                                                return Curry._1(setInterviewerName, (function (param) {
                                                              return e.target.value;
                                                            }));
                                              }),
                                            placeholder: "Nutria",
                                            value: MaterialUi_TextField.Value.string(interviewerName),
                                            variant: "outlined"
                                          })), React.createElement("div", {
                                        style: {
                                          display: "flex",
                                          padding: "2px 3px 7px 3px",
                                          alignItems: "center",
                                          flexGrow: "50",
                                          justifyContent: "center"
                                        }
                                      }, React.createElement(Core.TextField, {
                                            style: {
                                              display: "flex",
                                              flex: "1"
                                            },
                                            label: "Problems",
                                            onChange: (function (e) {
                                                e.persist();
                                                return Curry._1(setProblems, (function (param) {
                                                              return e.target.value;
                                                            }));
                                              }),
                                            placeholder: "link1;link2;my own description (separate with semicolon)",
                                            value: MaterialUi_TextField.Value.string(problems),
                                            variant: "outlined"
                                          })), React.createElement("div", {
                                        style: {
                                          display: "flex",
                                          minWidth: "100px",
                                          padding: "2px 3px 7px 3px",
                                          alignItems: "center",
                                          flexGrow: "10",
                                          justifyContent: "center"
                                        }
                                      }, React.createElement(Core.TextField, {
                                            style: {
                                              display: "flex",
                                              flex: "1"
                                            },
                                            children: null,
                                            label: "score",
                                            onChange: (function (e) {
                                                return Curry._1(setScore, (function (param) {
                                                              return e.target.value;
                                                            }));
                                              }),
                                            select: true,
                                            value: MaterialUi_TextField.Value.$$int(score),
                                            variant: "outlined"
                                          }, React.createElement(Core.MenuItem, {
                                                children: React.createElement("em", undefined, "Select Score"),
                                                value: MaterialUi_MenuItem.Value.$$int(-1)
                                              }), $$Array.map((function (interviewScore) {
                                                  return React.createElement(Core.MenuItem, {
                                                              children: interviewScore.description,
                                                              value: MaterialUi_MenuItem.Value.$$int(interviewScore.value),
                                                              key: "score" + interviewScore.id
                                                            });
                                                }), scoresArray)))), React.createElement(Core.TextField, {
                                    style: {
                                      width: "100%"
                                    },
                                    label: "Feedback",
                                    multiline: true,
                                    onChange: handleChange,
                                    placeholder: "\n  Prepend your comment with \"+\" if it is a positive comment or with \"-\" if it is a negative comment\n\n  Example:\n\n  [02:00] + Interesting introduction of herself\n  [05:00] / At this point I finished explaining the problem to the interviewee\n  [06:20] - Gave an idea before asking fundamental questions\n  ",
                                    value: MaterialUi_TextField.Value.string(feedback),
                                    variant: "outlined"
                                  }), React.createElement("div", {
                                    style: {
                                      height: "20px"
                                    }
                                  }), React.createElement(Core.Button, {
                                    onClick: (function (param) {
                                        if (!isFormValid(undefined)) {
                                          return ;
                                        }
                                        var prim = getInfo(undefined) + ("Feedback:\n" + feedback);
                                        var prim$1 = Util$Yaos.prettifyText(getFormattedInfo(undefined) + ("<b>Feedback:</b>\n" + feedback));
                                        ClipboardJs.default(prim$1, prim);
                                        
                                      }),
                                    style: {
                                      width: "100%"
                                    },
                                    children: "Copy to clipboard",
                                    color: "primary",
                                    variant: "contained"
                                  }), React.createElement("div", {
                                    style: {
                                      height: "10px"
                                    }
                                  }))
                        }))));
}

var make = TextArea;

exports.copyToClipboard = copyToClipboard;
exports.make = make;
/* react Not a pure module */
