[@react.component]
let make =
    (
      ~time: Time.t,
      ~endTime: Time.t,
      ~onUpdate: (~newTime: Time.t, ~newEndTime: Time.t) => unit,
      ~onPlay: unit => unit,
      ~onPause: unit => unit,
      ~onReset: unit => unit,
    ) => {
  open MaterialUi;
  let (isOnPause, setIsOnPause) = React.useState(() => true);
  let (isSettingsDialogOpen, setIsSettingsDialogOpen) =
    React.useState(() => false);

  let play = () => {
    onPlay();
    setIsOnPause(_ => false);
  };

  let pause = () => {
    onPause();
    setIsOnPause(_ => true);
  };

  let reset = () => {
    onReset();
    setIsOnPause(_ => true);
  };

  let togglePlayPause = () =>
    if (isOnPause) {
      play();
    } else {
      pause();
    };

  let openSettings = () => {
    pause();
    setIsSettingsDialogOpen(_ => true);
  };

  let saveSettings = (~newTime: Time.t, ~newEndTime: Time.t): unit => {
    onUpdate(~newTime, ~newEndTime);
    setIsSettingsDialogOpen(_ => false);
  };

  <Card style={ReactDOM.Style.make(~width="98%", ())}>
    <CardContent style={ReactDOM.Style.make(~paddingBottom="8px", ())}>
      <div
        style={ReactDOM.Style.make(
          ~height="100px",
          ~display="flex",
          ~justifyContent="center",
          ~justifyItems="center",
          ~alignItems="center",
          ~alignContent="center",
          (),
        )}>
        <div style={ReactDOM.Style.make(~display="flex", ())}>
          <IconButton color=`Primary onClick={_ => togglePlayPause()}>
            <Icon> {isOnPause ? "play_arrow" : "pause"} </Icon>
          </IconButton>
        </div>
        <div style={ReactDOM.Style.make(~width="10px", ())} />
        <div style={ReactDOM.Style.make(~display="flex", ())}>
          <CircularProgressWithLabel
            progress={min(
              100,
              Time.percentage(~current=time, ~total=endTime),
            )}
            label={Time.format(time)}
          />
        </div>
        <div style={ReactDOM.Style.make(~width="10px", ())} />
        <div
          style={ReactDOM.Style.make(
            ~height="120%",
            ~display="flex",
            ~flexDirection="column",
            ~justifyContent="space-between",
            (),
          )}>
          <IconButton onClick={_ => openSettings()}>
            <Icon> "settings" </Icon>
          </IconButton>
          <IconButton color=`Secondary onClick={_ => reset()}>
            <Icon> "replay" </Icon>
          </IconButton>
        </div>
      </div>
      <div style={ReactDOM.Style.make(~height="10px", ())} />
      <SettingsDialog
        _open=isSettingsDialogOpen
        onSave=saveSettings
        currentTime=time
        currentEndTime=endTime
      />
    </CardContent>
  </Card>;
};
