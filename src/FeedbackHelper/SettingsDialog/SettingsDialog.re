[@react.component]
let make =
    (
      ~_open: bool,
      ~currentTime: Time.t,
      ~currentEndTime: Time.t,
      ~onSave: (~newTime: Time.t, ~newEndTime: Time.t) => unit,
    ) => {
  let (newTime, setNewTime) = React.useState(() => currentTime);
  let (newEndTime, setNewEndTime) = React.useState(() => currentEndTime);
  React.useEffect5(
    () => {
      setNewTime(_ => currentTime);
      setNewEndTime(_ => currentEndTime);
      None;
    },
    (_open, setNewTime, setNewEndTime, currentEndTime, currentTime)
  );
  MaterialUi.(
    <Dialog _open onClose={(_, _) => onSave(~newTime, ~newEndTime)}>
      <DialogTitle> "Timer Settings" </DialogTitle>
      <DialogContent>
        "Start Time:"->React.string
        <br />
        <br />
        <div
          style={ReactDOM.Style.make(
            ~display="flex",
            ~width="100%",
            ~justifyContent="center",
            (),
          )}>
          <TextField
            _type="number"
            label={"Minutes"->React.string}
            variant=`Outlined
            style={ReactDOM.Style.make(~display="flex", ~width="150px", ())}
            defaultValue={TextField.DefaultValue.int(currentTime.minutes)}
            onChange={event => {
              ReactEvent.Form.persist(event);
              setNewTime(old =>
                {
                  minutes:
                    abs(Util.int_from_string(
                      ReactEvent.Form.target(event)##value,
                    )),
                  seconds: old.seconds,
                }
              );
            }}
          />
          <div style={ReactDOM.Style.make(~width="15px", ())} />
          <TextField
            _type="number"
            label={"Seconds"->React.string}
            variant=`Outlined
            style={ReactDOM.Style.make(~display="flex", ~width="150px", ())}
            defaultValue={TextField.DefaultValue.int(currentTime.seconds)}
            onChange={event => {
              ReactEvent.Form.persist(event);
              setNewTime(old =>
                {
                  seconds:
                    abs(Util.int_from_string(
                      ReactEvent.Form.target(event)##value,
                    )),
                  minutes: old.minutes,
                }
              );
            }}
          />
        </div>
        <br />
        "End Time:"->React.string
        <br />
        <br />
        <div
          style={ReactDOM.Style.make(
            ~display="flex",
            ~width="100%",
            ~justifyContent="center",
            (),
          )}>
          <TextField
            _type="number"
            label={"Minutes"->React.string}
            variant=`Outlined
            style={ReactDOM.Style.make(~display="flex", ~width="150px", ())}
            onChange={event => {
              ReactEvent.Form.persist(event);
              setNewEndTime(old =>
                {
                  minutes:
                    abs(Util.int_from_string(
                      ReactEvent.Form.target(event)##value,
                    )),
                  seconds: old.seconds,
                }
              );
            }}
            defaultValue={TextField.DefaultValue.int(currentEndTime.minutes)}
          />
          <div style={ReactDOM.Style.make(~width="15px", ())} />
          <TextField
            _type="number"
            label={"Seconds"->React.string}
            variant=`Outlined
            style={ReactDOM.Style.make(~display="flex", ~width="150px", ())}
            defaultValue={TextField.DefaultValue.int(currentEndTime.seconds)}
            onChange={event => {
              ReactEvent.Form.persist(event);
              setNewEndTime(old =>
                {
                  seconds:
                    abs(Util.int_from_string(
                      ReactEvent.Form.target(event)##value,
                    )),
                  minutes: old.minutes,
                }
              );
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={_ =>
            onSave(~newTime=currentTime, ~newEndTime=currentEndTime)
          }
          color=`Secondary>
          "Cancel"
        </Button>
        <Button onClick={_ => onSave(~newTime, ~newEndTime)} color=`Primary>
          "Save"
        </Button>
      </DialogActions>
    </Dialog>
  );
};
