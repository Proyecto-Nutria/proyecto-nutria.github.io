import { makeStyles } from '@material-ui/core/styles';

import introLineDark from '../../../assets/imgs/Visitor/intro-line-dark.webp';
import introLineLight from '../../../assets/imgs/Visitor/intro-line-light.webp';
import introWaveDark from '../../../assets/imgs/Visitor/intro-wave-dark.webp';
import introWaveLight from '../../../assets/imgs/Visitor/intro-wave-light.webp';

const introStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'block'
  },
  background: {
    position: 'absolute',
    height: 720,
    top: '-40px',
    right: '-50px',
    width: '55%',
    [theme.breakpoints.up('lg')]: {
      width: '55%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 260,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& img': {
      position: 'absolute',
      right: 0,
      top: 0,
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    '& img': {
      display: 'block'
    }
  },
  text: {
    height: 680,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(20),
      height: 560
    },
    '& p': {
      marginBottom: theme.spacing(12),
      fontSize: 48,
      lineHeight: '72px',
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
        fontSize: 38,
        lineHeight: '60px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      },
    },
    '& h3': {
      marginTop: theme.spacing(12),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(1),
        textAlign: 'center'
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& h5': {
      color: theme.palette.text.secondary,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      },
    },
  },
  btnArea: {
    textAlign: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      }
    }
  },
  decoration: {
    position: 'relative',
    height: '100%',
  },
  decoWave: {
    position: 'absolute',
    top: 40,
    left: -1,
    width: '104%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? introWaveDark : introWaveLight}) no-repeat 0 0`,
    backgroundSize: '100% 720px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100% 240px',
    }
  },
  decoLine: {
    position: 'absolute',
    left: -24,
    top: 10,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? introLineDark : introLineLight}) no-repeat 0 0`,
    backgroundSize: '100% 700px',
  },
  otterIllustration: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      right: theme.spacing(-20),
    },
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(-20),
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
      top: 250,
    },
    [theme.breakpoints.down('xs')]: {
      top: 275,
    },
    '& p': {
      position: 'absolute',
      bottom: '350px',
      fontSize: 48,
      width: '100%',
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down('lg')]: {
        fontSize: 30,
      },
      [theme.breakpoints.down('md')]: {
        width: 600,
        right: -40,
      },
    },
    '& img': {
      position: 'absolute',
      bottom: '250px',
      [theme.breakpoints.down('xs')]: {
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        left: '50%',
        marginLeft: '-300px',
      },
    }
  },
  phone: {
    width: 600,
    right: -40,
    bottom: 0
  },
  widgetTop: {
    width: 150,
    bottom: 330,
    left: 130,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.2s'
    }
  },
  widgetLeft: {
    width: 170,
    bottom: 180,
    left: 110,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.3s'
    }
  },
  widgetRight: {
    width: 170,
    bottom: 240,
    right: 80,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.4s'
    }
  },
  hide: {
    visibility: 'hidden'
  }
}));

export default introStyles;
