import { makeStyles } from '@material-ui/core/styles';
import pattern from './../../../assets/imgs/Visitor/about-background.webp';

const aboutStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(9),
    position: 'relative',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    },
  },
  sliderWrap: {
    paddingTop: theme.spacing(1),
    background: `url(${pattern}) repeat ${theme.palette.primary.dark}`,
    backgroundSize: '8%',
    '& a[class*="previousButton"]': {
      right: 120,
      left: 'auto',
      top: 200,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& a[class*="nextButton"]': {
      left: 'auto',
      top: 140,
      right: 120,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& > div': {
      height: 500,
      [theme.breakpoints.down('sm')]: {
        height: 450
      },
      '& > a': {
        background: theme.palette.background.paper,
        borderRadius: '50%',
        width: 40,
        height: 40,
        transition: 'all 0.3s ease',
        position: 'absolute',
        zIndex: 11,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        '&:hover': {
          backgroundImage: 'none'
        },
        '& svg': {
          width: 35,
          height: 35,
          position: 'absolute',
          left: 3,
          top: 3,
          fill: theme.palette.text.secondary
        }
      }
    }
  },
  paper: {},
  hexa: {},
  item: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    maxHeight: 500,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8),
    },
    '& svg': {
      width: 450,
      height: 450
    },
    '& section': {
      position: 'relative',
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(40px)',
      transition: 'all 0.5s ease',
    },
    '&[class*="current"]': {
      '& section': {
        transform: 'translateX(0px)',
        opacity: 1
      },
    },
    '& figure': {
      margin: 0,
      lineHeight: '450px',
      width: 450,
      height: 450,
      textAlign: 'center',
      left: 0,
      top: 17,
      position: 'absolute',
      transition: 'none !important',
      '& img': {
        transition: 'none',
        verticalAlign: 'middle',
        width: 350,
        height: 393,
        opacity: 1
      }
    },
    '& $paper': {
      position: 'relative',
      padding: theme.spacing(9, 6, 9, 16),
      borderRadius: 24,
      [theme.breakpoints.up('lg')]: {
        left: -80,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 60,
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 80px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6),
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: theme.spacing(2),
      },
      '& button': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        }
      },
      '& h1': {
        color: theme.palette.secondary.main,
      },
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      lineHeight: '42px',
      '& button': {
        textAlign: 'left',
        fontSize: 36,
        display: 'block',
        maxWidth: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'Lato',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('md')]: {
          width: '100%',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          lineHeight: '28px',
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      },
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        fontSize: 14,
      }
    },
    '& $time': {
      '& h6': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  imgWrap: {
    position: 'relative',
    top: -24,
    left: -400
  },
  decoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: '0.5 !important',
    fill: theme.palette.secondary.main
  },
  image: {
    top: '17px',
    left: '0',
    width: '450px',
    height: '450px',
    margin: '0',
    position: 'absolute',
    textAlign: 'center',
    transition: 'none !important',
    zIndex: 1,
    lineHeight: '450px',
  },
}));

export default aboutStyles;
