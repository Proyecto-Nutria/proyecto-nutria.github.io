import { fade, makeStyles } from '@material-ui/core/styles';

const progressStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 100,
    paddingTop: theme.spacing(11),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
    },
    '& blockquote': {
      fontSize: 20,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      margin: theme.spacing(5, 4, 0),
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(2),
        borderLeft: '4px solid',
        borderLeftColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#D8D8D8',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'fit-content',
        paddingTop: theme.spacing(2),
        borderTop: '4px solid',
        borderTopColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#D8D8D8',
        textAlign: 'center',
        margin: 'auto',
      },
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    }
  },
  title: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4)
    }
  },
  bgImg: {
    backgroundImage: `url('/images/Intro/progress_bg.webp')`,
  },
  numsWrap: {
    alignSelf: 'center',
  },
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  textDeco: {
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
    },
    '& h3': {
      overflow: 'hidden',
      color: 'rgba(255, 255, 255, 0.7)',
      padding: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 48,
      fontWeight: theme.typography.fontWeightBold,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      '&$bgImg': {
        '&:before': {
          content: '""',
          height: '100%',
          width: '100%',
          background: fade(theme.palette.primary.main, 0.8),
          opacity: 0.38,
          position: 'absolute',
          top: 0,
          left: 0,
        }
      },
      '& span': {
        position: 'relative'
      },
      [theme.breakpoints.up('md')]: {
        width: 380,
        height: 380,
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px'
      },
    },
    '&:before': {
      content: '""',
      width: 400,
      height: 400,
      top: -10,
      left: -10,
      border: `1px solid ${theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.dark}`,
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
  },
  deco: {
    '&:after': {
      content: '""',
      borderLeft: `1px solid ${theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.main}`,
      width: 50,
      height: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.background.paper : theme.palette.background.default,
      top: 1,
      right: -20,
      transform: theme.direction === 'ltr' ? 'skew(-30deg, 0)' : 'skew(30deg, 0)',
      [theme.breakpoints.down('sm')]: {
        right: -50
      }
    },
    '& p': {
      backgroundColor: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.main,
      color: 'rgba(0, 0, 0, 0.38)',
    }
  },
  text: {},
  counterItemWrap: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'fit-content'
    },
  },
  counterItem: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: 22,
      borderRadius: '40px 0 0 40px',
      minWidth: 150,
      padding: theme.spacing(0, 2, 0, 2),
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
      },
      [theme.breakpoints.down('md')]: {
        minWidth: 100,
        fontSize: 16,
        padding: theme.spacing(0, 4, 0, 1),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 2, 0, 1),
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& $text': {
      textAlign: 'center',
      '& h3': {
        fontSize: 36
      },
      '& h2': {
        fontSize: 62
      },
      '& h2, & h3': {
        position: 'relative',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('md')]: {
          fontSize: 30
        }
      }
    }
  }
}));

export default progressStyles;
