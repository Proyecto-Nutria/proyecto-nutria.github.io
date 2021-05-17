import { makeStyles } from '@material-ui/core/styles';

const teamStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(20, 0, 20),
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(15, 0, 10),
    }
  },
  title: {},
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& div': {
      width: 300
    }
  },
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
    '& $title': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  arrow: {
    marginTop: 300,
    textAlign: 'left',
    position: 'relative',
    zIndex: 10,
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      marginTop: 560
    },
  },
  defaultCard: {
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
        minWidth: '100%'
      }
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
      borderRadius: '20px 0 0 0'
    },
    '& h6': {
      marginBottom: theme.spacing(2),
    },
    '& p': {
      height: 70,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  text: {
    padding: theme.spacing(0, 2.5)
  },
  button: {},
  linkButton: {
    color: 'white',
  },
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350,
    },
    '& h3': {
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
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
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '80px !important',
    '-webkit-text-stroke': `2px ${theme.palette.primary.main}`,
    display: 'block',
    margin: theme.spacing(18, 0, 3),
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  capsul: {
    width: 900,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    opacity: 0.75,
    top: 100,
    backgroundImage: theme.palette.type === 'light' ? `linear-gradient(144deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` : `linear-gradient(144deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    right: -250,
    transform: 'rotate(-30deg)'
  },
  circle: {
    width: 700,
    height: 700,
    top: 70,
    right: 10,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}`,
    position: 'absolute',
  }
}));

export default teamStyles;