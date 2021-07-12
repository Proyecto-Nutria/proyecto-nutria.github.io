import { makeStyles } from '@material-ui/core/styles';

const collaboratorsStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(9),
    position: 'relative',
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5),
    },
  },
  sliderHandle: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  title: {
    display: 'block',
    marginBottom: theme.spacing(9),
    position: 'relative',
    textAlign: 'center',
    '& h3': {
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px',
      },
    },
    '&:after': {
      left: '50%',
      marginLeft: -35,
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      background: theme.palette.primary.main,
      position: 'absolute',
    },
    '& strong': {
      color: theme.palette.text.primary,
    },
  },
  sliderWrap: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2),
    },
    '& div.slick-slider': {
      '&:after, &:before': {
        content: '""',
        borderRadius: 12,
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        height: 150,
        position: 'absolute',
      },
      '&:after': {
        zIndex: -1,
        width: '90%',
        bottom: 5,
        left: '50%',
        transform: 'translate(-50%, 0)',
      },
      '&:before': {
        zIndex: -2,
        width: '80%',
        bottom: -15,
        left: '50%',
        transform: 'translate(-50%, 0)',
      },
    },
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none',
    },
  },
  slideContent: {
    animationDuration: '1s',
    animationFillMode: 'both',
  },
  slide: {
    background: 'none',
  },
  future: {
    '& $slideContent': {
      animation: 'fadeInUp',
      animationDuration: '1s',
      animationDelay: '0.1s',
      animationFillMode: 'both',
    },
  },
  past: {
    '& $slideContent': {
      animation: 'fadeOutUp',
      animationDuration: '1s',
      animationFillMode: 'both',
    },
  },
  nav: {
    position: 'absolute',
    border: 'none',
    zIndex: 12,
    top: '48%',
    width: 50,
    height: 64,
    padding: 0,
    minWidth: 0,
    backgroundSize: '100%',
    backgroundColor: theme.palette.background.default,
    borderRadius: '30%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& i': {
      color: theme.palette.text.secondary,
      position: 'relative',
      fontSize: 26,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      opacity: 0.6,
    },
  },
  prev: {
    left: 56,
    '& svg': {
      right: 2,
      marginTop: 3,
    },
  },
  next: {
    right: 56,
    '& svg': {
      left: 2,
      marginTop: 3,
    },
  },
  current: {},
  active: {},
  pagination: {
    zIndex: 22,
    position: 'relative',
    paddingTop: theme.spacing(2),
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-12),
      '& li': {
        display: 'inline-block',
        width: 'auto',
        height: 'auto',
        margin: '0 7.5px',
        padding: '0',
        cursor: 'pointer',
        transition: 'all 0.5s ease-out',
        verticalAlign: 'middle',
        position: 'initial',
        '&$active button': {
          boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.35)',
          animationName: 'bounce-1',
          animationTimingFunction: 'linear',
          animationDuration: '2s',
          animationIterationCount: 'infinite',
          transformOrigin: 'bottom',
          border: `4px solid ${theme.palette.primary.main}`,
        },
        [theme.breakpoints.up('lg')]: {
          '&:nth-child(1) button': {
            width: 105,
            height: 105,
            left: '-5vw',
            bottom: 525,
          },
          '&:nth-child(2) button': {
            width: 85,
            height: 85,
            left: '7vw',
            bottom: 425,
          },
          '&:nth-child(3) button': {
            width: 75,
            height: 75,
            left: '-9vw',
            bottom: 182,
          },
          '&:nth-child(4) button': {
            width: 95,
            height: 95,
            left: '13vw',
            bottom: -15,
          },
          '&:nth-child(5) button': {
            width: 75,
            height: 75,
            bottom: 542,
            right: '-5vw',
          },
          '&:nth-child(6) button': {
            width: 95,
            height: 95,
            bottom: 437,
            right: '6vw',
          },
          '&:nth-child(7) button': {
            width: 85,
            height: 85,
            bottom: 287,
            right: '-9vw',
          },
          '&:nth-child(8) button': {
            width: 105,
            height: 105,
            bottom: 19,
            right: '-8vw',
          },
        },
        [theme.breakpoints.up(1500)]: {
          '&:nth-child(1) button': {
            left: '-7vw',
          },
          '&:nth-child(2) button': {
            left: '6vw',
          },
          '&:nth-child(3) button': {
            left: '-11vw',
          },
          '&:nth-child(4) button': {
            left: '11vw',
          },
          '&:nth-child(5) button': {
            right: '-13vw',
          },
          '&:nth-child(6) button': {
            right: '5vw',
          },
          '&:nth-child(7) button': {
            right: '-11vw',
          },
          '&:nth-child(8) button': {
            right: '-7vw',
          },
        },
        '& button': {
          fontSize: '0',
          lineHeight: 'normal',
          display: 'block',
          width: 70,
          height: 70,
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'transparent',
          border: '4px solid transparent',
          borderRadius: 200,
          outline: 'none',
          background: 'transparent no-repeat center',
          backgroundSize: 'cover',
          position: 'initial',
          [theme.breakpoints.up('lg')]: {
            position: 'absolute',
          },
        },
      },
    },
  },
  caption: {
    marginTop: theme.spacing(3),
    display: 'block',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  paper: {
    height: 250,
    margin: theme.spacing(3, 0),
    textAlign: 'center',
    border: '1px solid transparent',
    transition: 'border 0.4s ease-out',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 15),
    },
    '&$active': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  text: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: 80,
    fontSize: 18,
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      '-webkit-line-clamp': 4,
    },
  },
  avatar: {
    boxShadow: theme.shadows[8],
    width: 80,
    height: 80,
    margin: '-32px auto 32px',
    [theme.breakpoints.up('sm')]: {
      margin: '-96px auto 32px',
    },
  },
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10,
    marginTop: 150,
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      left: -240,
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.primary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35,
        },
        '& button': {
          opacity: 0,
        },
      },
    },
  },
  carouselItem: {
    '&:focus': {
      outline: 'none',
    },
  },
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    position: 'relative',
    width: 240,
    height: 380,
    margin: theme.spacing(3, 2),
    '& figure': {
      borderRadius: '0 0 50px 0',
      overflow: 'hidden',
      height: 170,
      margin: 0,
      marginBottom: theme.spacing(3),
      '& img': {
        height: '100%',
        minWidth: '100%',
      },
    },
    '& $button': {
      padding: 0,
      width: '50%',
      marginLeft: '50%',
      height: 43,
      lineHeight: '44px',
      position: 'absolute',
      right: 0,
      bottom: 0,
      boxShadow: theme.shadows[10],
      borderRadius: '20px 0 0 0',
    },
    '& h6': {
      marginBottom: theme.spacing(2),
    },
    '& p': {
      height: 70,
      overflow: 'hidden',
      marginBottom: theme.spacing(3),
    },
  },
  cardText: {
    padding: theme.spacing(0, 2.5),
  },
  button: {},
  carouselProp: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    '& div': {
      width: theme.direction === 'ltr' ? 300 : 480,
    },
  },
  carouselTitle: {},
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10),
    },
    '& $carouselTitle': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5),
      },
    },
  },
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350,
    },
    '& h3': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.dark,
      textTransform: 'capitalize',
      width: 200,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 48,
      lineHeight: '62px',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px',
      },
    },
  },
  icon: {
    position: 'relative',
    fontSize: '80px !important',
    color: 'transparent',
    '-webkit-text-stroke': `2px ${theme.palette.primary.main}`,
    display: 'block',
    margin: theme.spacing(18, 0, 3),
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  capsul: {
    width: 900,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    opacity: 0.75,
    top: 80,
    backgroundImage:
      theme.palette.type === 'light'
        ? `linear-gradient(144deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`
        : `linear-gradient(144deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    right: -250,
    transform: theme.direction === 'rtl' ? 'rotate(30deg)' : 'rotate(-30deg)',
  },
  circle: {
    width: 700,
    height: 700,
    top: 50,
    right: 10,
    borderRadius: '50%',
    border: `1px solid ${
      theme.palette.type === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark
    }`,
    position: 'absolute',
  },
}));

export default collaboratorsStyles;
