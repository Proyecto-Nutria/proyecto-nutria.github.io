[@react.component]
let make = () => {
  let (gTime, setGTime) = React.useState(() => Time.newDuration());
  let (endTime, setEndTime) =
    React.useState(() => ({minutes: 45, seconds: 0}: Time.t));
  let (startingPointInTime, setStartingPointInTime) =
    React.useState(() => Js.Date.now());
  let (isTimerActive, setIsTimerActive) = React.useState(() => false);
  let (isDarkTheme, setDarkTheme) = React.useState(() => true);

  React.useEffect3(
    () => {
      let intervalId: Pervasives.ref(option(Js.Global.intervalId)) =
        ref(None);
      if (isTimerActive) {
        intervalId :=
          Some(
            Js.Global.setInterval(
              () => {
                let newTime =
                  Time.normalize({
                    minutes: 0,
                    seconds:
                      int_of_float(
                        (Js.Date.now() -. startingPointInTime) /. 1000.0,
                      ),
                  });
                setGTime(_ => newTime);
              },
              1000,
            ),
          );
      } else if (!isTimerActive) {
        let _ =
          switch (intervalId^) {
          | Some(a) => Some(() => {Js.Global.clearInterval(a)})
          | None => None
          };
        ();
      };

      switch (intervalId^) {
      | Some(a) => Some(() => Js.Global.clearInterval(a))
      | None => None
      };
    },
    (isTimerActive, setGTime, startingPointInTime)
  );

  let onPlay = (): unit => {
    if (gTime == Time.newDuration()) {
      setStartingPointInTime(_ => Js.Date.now());
    } else {
      setStartingPointInTime(_ =>
        Js.Date.now() -. float_of_int(Time.toMilliseconds(gTime))
      );
    };
    setIsTimerActive(_ => true);
  };
  let onPause = (): unit => setIsTimerActive(_ => false);

  let onReset = (): unit => {
    onPause();
    setGTime(_ => Time.newDuration());
  };

  let updateTimes = (~newTime: Time.t, ~newEndTime: Time.t): unit => {
    setGTime(_ => newTime);
    setEndTime(_ => newEndTime);
  };
  open MaterialUi;
  let themeOptions = ref(ThemeOptions.make());
  if (isDarkTheme) {
    let primary = ThemeOptions.Primary.make(~main="#EA80FC", ());
    let secondary = ThemeOptions.Secondary.make(~main="#ffbd69", ());
    let paletteOptions =
      ThemeOptions.PaletteOptions.make(
        ~_type="dark",
        ~primary,
        ~secondary,
        (),
      );
    themeOptions := ThemeOptions.make(~palette=paletteOptions, ());
  };
  let theme = Theme.create(themeOptions^);
  <ThemeProvider theme>
    <div
      style={ReactDOM.Style.make(
        ~width="100%",
        ~height="100%",
        ~display="flex",
        ~flexDirection="column",
        ~alignItems="center",
        ~alignContent="center",
        ~overflowY="auto",
        ~background=isDarkTheme ? "#575757" : "#A9A9A9",
        (),
      )}>
      <TimerView
        onUpdate=updateTimes
        endTime
        time=gTime
        onPlay
        onPause
        onReset
      />
      <Switch checked=isDarkTheme onChange={_ => setDarkTheme(old => !old)}>
        "switch theme"->React.string
      </Switch>
      <TextArea time=gTime />
      <div style={ReactDOM.Style.make(~height="15px", ())} />
    </div>
  </ThemeProvider>;
};
