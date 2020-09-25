[@bs.module "./Clipboard.js"]
external copyToClipboard: (~formattedText: string, ~plainText: string) => unit =
  "default";

type score = {
  id: string,
  value: int,
  description: string,
};

[@react.component]
let make = (~time: Time.t) => {
  let (feedback, setFeedback) = React.useState(_ => "");
  let (interviewerName, setInterviewerName) = React.useState(_ => "");
  let (problems, setProblems) = React.useState(_ => "");
  let (score, setScore) = React.useState(_ => (-1));
  let scoresArray = [|
    {id: "0", value: 0, description: "No Hire"},
    {id: "1", value: 1, description: "Undetermined"},
    {id: "2", value: 2, description: "Hire"},
    {id: "3", value: 3, description: "Strongly Hire"},
  |];
  open Webapi;

  let scrollableDiv = React.createRef();

  let fullScrollBottom = (): unit => {
    let nullableCurrElem = Js.Nullable.toOption(scrollableDiv.current);
    switch (nullableCurrElem) {
    | Some(currElem) =>
      Dom.Element.setScrollTop(
        currElem,
        float_of_int(Dom.Element.scrollHeight(currElem)),
      )
    | None => ()
    };
  };

  let getValueOf = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.target(e)##value;
  };

  let handleChange = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.persist(e);
    fullScrollBottom();
    let timeFormat = (rawTime: Time.t) =>
      "[" ++ Time.format(rawTime) ++ "] ";
    let currText: string = getValueOf(e);
    let length = String.length(currText);
    let lastLine = ref("");
    let lastEnterPos = ref(-1);

    if (String.contains(currText, '\n')) {
      lastEnterPos := String.rindex(currText, '\n');
      if (lastEnterPos^ == length - 1) {
        lastLine := "";
      } else {
        lastLine :=
          String.sub(currText, lastEnterPos^ + 1, length - 1 - lastEnterPos^); // includes enter
      };
    } else {
      lastLine := currText;
    };

    if (Util.exactMatch("\\[\\d+:\\d+\\]", lastLine^)) {
      if (lastEnterPos^ == (-1)) {
        setFeedback(_ => "");
      } else {
        setFeedback(_ => String.sub(currText, 0, lastEnterPos^));
      };
    } else if (length == 1) {
      setFeedback(_ => String.concat("", [timeFormat(time), currText]));
    } else if (length > 0 && currText.[length - 1] == '\n') {
      setFeedback(_ => String.concat("", [currText, timeFormat(time)]));
    } else {
      setFeedback(_ => currText);
    };
  };

  let getInfo = (): string => {
    let problemsFormatted =
      Js.Array.joinWith("\n", Js.String.split(";", problems));
    "Interviewer: "
    ++ interviewerName
    ++ "\n\n"
    ++ "Verdict: "
    ++ scoresArray[score].description
    ++ "\n\n"
    ++ "Problems: \n"
    ++ problemsFormatted
    ++ "\n\n";
  };

  let getFormattedInfo = (): string => {
    let problemsArray = Js.String.split(";", problems);
    for (i in 0 to Array.length(problemsArray) - 1) {
      if (Util.isUrl(problemsArray[i])) {
        problemsArray[i] =
          "<li>" ++ Util.urlFormat(problemsArray[i]) ++ "</li>";
      } else {
        problemsArray[i] = "<li>" ++ problemsArray[i] ++ "</li>";
      };
    };
    let problemsFormatted =
      "<ol>" ++ Js.Array.joinWith("", problemsArray) ++ "</ol>";
    "<b>Interviewer:</b> "
    ++ interviewerName
    ++ "\n\n"
    ++ "<b>Verdict:</b> "
    ++ scoresArray[score].description
    ++ "\n\n"
    ++ "<b>Problems:</b>\n"
    ++ problemsFormatted
    ++ "\n\n";
  };

  let isFormValid = (): bool => {
    let output = ref("");
    if (interviewerName == "") {
      output := output^ ++ "-> Interviewer Name is a required field\n";
    };
    if (problems == "") {
      output := output^ ++ "-> Problems is a required field\n";
    };
    if (score == (-1)) {
      output := output^ ++ "-> Score is a required field\n";
    };
    if (feedback == "") {
      output := output^ ++ "-> Feedback is a required field\n";
    };
    if (output^ == "") {
      true;
    } else {
      output := "Error:\n" ++ output^;
      Dom.Window.alert(output^, Dom.window);
      false;
    };
  };

  let submit = () =>
    if (isFormValid()) {
      copyToClipboard(
        ~formattedText=
          Util.prettifyText(
            getFormattedInfo() ++ "<b>Feedback:</b>\n" ++ feedback,
          ),
        ~plainText=getInfo() ++ "Feedback:\n" ++ feedback,
      );
    };

  let instructions = {|
  Prepend your comment with "+" if it is a positive comment or with "-" if it is a negative comment

  Example:

  [02:00] + Interesting introduction of herself
  [05:00] / At this point I finished explaining the problem to the interviewee
  [06:20] - Gave an idea before asking fundamental questions
  |};
  MaterialUi.(
    <div
      style={ReactDOM.Style.make(
        ~display="flex",
        ~flex="1",
        ~width="98%",
        ~overflowY="auto",
        ~alignItems="center",
        ~flexDirection="column",
        ~minHeight="0",
        (),
      )}>
      <div
        ref={ReactDOMRe.Ref.domRef(scrollableDiv)}
        style={ReactDOM.Style.make(
          ~display="flex",
          ~flex="1",
          ~overflowY="auto",
          ~minHeight="0",
          ~width="100%",
          ~justifyContent="center",
          (),
        )}>
        <div style={ReactDOM.Style.make(~width="100%", ())}>
          <Card>
            <CardContent>
              <div
                style={ReactDOM.Style.make(
                  ~display="flex",
                  ~flex="1",
                  ~flexWrap="wrap",
                  ~paddingBottom="5px",
                  (),
                )}>
                <div
                  style={ReactDOM.Style.make(
                    ~display="flex",
                    ~flexGrow="1",
                    ~justifyContent="center",
                    ~alignItems="center",
                    ~padding="2px 3px 7px 3px",
                    (),
                  )}>
                  <TextField
                    value={TextField.Value.string(interviewerName)}
                    onChange={e => {
                      ReactEvent.Form.persist(e);
                      setInterviewerName(_ => getValueOf(e));
                    }}
                    label={"Interviewer"->React.string}
                    variant=`Outlined
                    placeholder="Nutria"
                    style={ReactDOM.Style.make(
                      ~flex="1",
                      ~display="flex",
                      (),
                    )}
                  />
                </div>
                <div
                  style={ReactDOM.Style.make(
                    ~display="flex",
                    ~flexGrow="50",
                    ~justifyContent="center",
                    ~alignItems="center",
                    ~padding="2px 3px 7px 3px",
                    (),
                  )}>
                  <TextField
                    value={TextField.Value.string(problems)}
                    onChange={e => {
                      ReactEvent.Form.persist(e);
                      setProblems(_ => getValueOf(e));
                    }}
                    label={"Problems"->React.string}
                    variant=`Outlined
                    placeholder="link1;link2;my own description (separate with semicolon)"
                    style={ReactDOM.Style.make(
                      ~display="flex",
                      ~flex="1",
                      (),
                    )}
                  />
                </div>
                <div
                  style={ReactDOM.Style.make(
                    ~display="flex",
                    ~flexGrow="10",
                    ~minWidth="100px",
                    ~justifyContent="center",
                    ~alignItems="center",
                    ~padding="2px 3px 7px 3px",
                    (),
                  )}>
                  <TextField
                    value={score->TextField.Value.int}
                    label={"score"->React.string}
                    variant=`Outlined
                    select=true
                    style={ReactDOM.Style.make(
                      ~display="flex",
                      ~flex="1",
                      (),
                    )}
                    onChange={e => {setScore(_ => getValueOf(e))}}>
                    <MenuItem value={MenuItem.Value.int(-1)}>
                      <em> "Select Score"->React.string </em>
                    </MenuItem>
                    {React.array(
                       Array.map(
                         interviewScore => {
                           <MenuItem
                             key={"score" ++ interviewScore.id}
                             value={MenuItem.Value.int(interviewScore.value)}>
                             {interviewScore.description}
                           </MenuItem>
                         },
                         scoresArray,
                       ),
                     )}
                  </TextField>
                </div>
              </div>
              <TextField
                style={ReactDOM.Style.make(~width="100%", ())}
                label={"Feedback"->React.string}
                variant=`Outlined
                multiline=true
                onChange=handleChange
                value={TextField.Value.string(feedback)}
                placeholder=instructions
              />
              <div style={ReactDOM.Style.make(~height="20px", ())} />
              <Button
                onClick={_ => submit()}
                variant=`Contained
                color=`Primary
                style={ReactDOM.Style.make(~width="100%", ())}>
                "Copy to clipboard"
              </Button>
              <div style={ReactDOM.Style.make(~height="10px", ())} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
