import { makeStyles } from '@material-ui/core/styles';

const faqStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(9),
    paddingBottom: 30,
  },
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0,
    },
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35,
    },
  },
  title: {
    display: 'block',
    marginBottom: theme.spacing(9),
    position: 'relative',
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
  text: {
    position: 'relative',
    zIndex: 20,
  },
  figuresWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  innerWrap: {
    height: 400,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& svg': {
      position: 'absolute',
    },
  },
  plus: {
    left: -20,
    top: 0,
    width: 100,
    height: 100,
    transform: 'scale(0.5)',
  },
  circle: {
    right: 70,
    top: 20,
    width: 120,
    height: 120,
    transform: 'scale(0.5)',
  },
  zigzag: {
    left: 90,
    bottom: 50,
    width: 250,
    height: 75,
    transform: 'scale(0.5)',
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280,
    },
  },
  accordionWrap: {
    margin: 'auto',
  },
  accordion: {
    position: 'relative',
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `12px !important`,
    overflow: 'hidden',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2),
    },
  },
  expanded: {
    background: theme.palette.primary.main,
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0,
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)',
    },
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
  },
  icon: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.primary.light
        : theme.palette.primary.main,
  },
}));

export default faqStyles;
