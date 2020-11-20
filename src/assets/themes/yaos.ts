const theme = {
  name: "YAOS theme",
  rounding: 4,
  spacing: 20,
  defaultMode: "dark",
  global: {
    colors: {
      brand: {
        dark: "#2786EE",
        light: "background-back",
      },
      background: {
        dark: "#262E4E",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#262E4E",
        light: "#333333",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
      focus: {
        dark: "#50A0D7",
        light: "#ffff",
      },
    },
    font: {
      family: "inter",
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    control: {
      border: {
        radius: "4px",
      },
    },
    drop: {
      border: {
        radius: "4px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "10px",
      xlarge: "20px",
    },
    breakpoints: {
      small: {
        value: 640,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "3px",
          large: "5px",
          xlarge: "10px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "5px",
          medium: "10px",
          large: "20px",
          xlarge: "40px",
        },
        size: {
          xxsmall: "20px",
          xsmall: "40px",
          small: "80px",
          medium: "160px",
          large: "320px",
          xlarge: "640px",
          full: "100%",
        },
      },
      medium: {
        value: 1280,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "5px",
      small: "10px",
      medium: "20px",
      large: "40px",
      xlarge: "80px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "10px",
      weight: 600,
    },
    spacing: "20px",
    size: {
      xxsmall: "40px",
      xsmall: "80px",
      small: "160px",
      medium: "320px",
      large: "640px",
      xlarge: "960px",
      xxlarge: "1280px",
      full: "100%",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  button: {
    border: {
      width: "2px",
      radius: "15px",
    },
    padding: {
      vertical: "3px",
      horizontal: "18px",
    },
  },
  checkBox: {
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "20px",
      size: "40px",
    },
    size: "20px",
  },
  radioButton: {
    size: "20px",
  },
  formField: {
    border: {
      color: "border",
      error: {
        color: {
          dark: "white",
          light: "status-critical",
        },
      },
      position: "inner",
      side: "bottom",
    },
    content: {
      pad: "small",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "dark-3",
      margin: {
        start: "small",
      },
    },
    info: {
      color: "text-xweak",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    margin: {
      bottom: "small",
    },
    round: "4px",
  },
  calendar: {
    small: {
      fontSize: "14.333333333333334px",
      lineHeight: 1.375,
      daySize: "22.86px",
    },
    medium: {
      fontSize: "15px",
      lineHeight: 1.45,
      daySize: "45.71px",
    },
    large: {
      fontSize: "17px",
      lineHeight: 1.11,
      daySize: "91.43px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "7px",
        size: "20px",
      },
      minute: {
        width: "3px",
        size: "10px",
      },
      second: {
        width: "3px",
        size: "8px",
      },
      size: {
        small: "60px",
        medium: "80px",
        large: "120px",
        xlarge: "180px",
        huge: "240px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "13.666666666666666px",
          height: 1.5,
        },
        small: {
          size: "14.333333333333334px",
          height: 1.43,
        },
        medium: {
          size: "15px",
          height: 1.375,
        },
        large: {
          size: "15.666666666666666px",
          height: 1.167,
        },
        xlarge: {
          size: "16.333333333333332px",
          height: 1.1875,
        },
        xxlarge: {
          size: "17.666666666666668px",
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
        medium: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px",
        },
        large: {
          size: "82px",
          height: "88px",
          maxWidth: "1968px",
        },
        xlarge: {
          size: "114px",
          height: "120px",
          maxWidth: "2736px",
        },
      },
      "2": {
        small: {
          size: "30px",
          height: "36px",
          maxWidth: "720px",
        },
        medium: {
          size: "42px",
          height: "48px",
          maxWidth: "1008px",
        },
        large: {
          size: "54px",
          height: "60px",
          maxWidth: "1296px",
        },
        xlarge: {
          size: "66px",
          height: "72px",
          maxWidth: "1584px",
        },
      },
      "3": {
        small: {
          size: "26px",
          height: "32px",
          maxWidth: "624px",
        },
        medium: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
        large: {
          size: "42px",
          height: "48px",
          maxWidth: "1008px",
        },
        xlarge: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px",
        },
      },
      "4": {
        small: {
          size: "22px",
          height: "28px",
          maxWidth: "528px",
        },
        medium: {
          size: "26px",
          height: "32px",
          maxWidth: "624px",
        },
        large: {
          size: "30px",
          height: "36px",
          maxWidth: "720px",
        },
        xlarge: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
      },
      "5": {
        small: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        medium: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        large: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        xlarge: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
      },
      "6": {
        small: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        medium: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        large: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        xlarge: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
      },
    },
  },
  paragraph: {
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px",
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
  },
  text: {
    xsmall: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px",
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
  },
  scale: 0.2,
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
}

export default theme
