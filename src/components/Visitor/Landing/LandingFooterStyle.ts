import { makeStyles, fade } from '@material-ui/core/styles';
import footerBackground from './../../../assets/imgs/Visitor/footer-background.png';

const footerStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(15),
    background: theme.palette.primary.dark,
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.primary.contrastText,
        '&:hover': {
          opacity: 0.7
        }
      }
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
  },
  footerDeco: {
    position: 'relative',
    background: theme.palette.primary.dark,
    marginTop: theme.spacing(20),
    '&:before': {
      content: '""',
      background: theme.palette.primary.dark,
      position: 'absolute',
      left: '-10%',
      borderRadius: '50%',
      top: -80,
      width: '120%',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        height: 120,
      }
    },
  },
  footerAfter: {
    background: `url(${footerBackground}) repeat-x bottom center`,
    content: '""',
    position: 'absolute',
    left: 0,
    opacity: 0.1,
    bottom: -20,
    width: '100%',
    height: 150,
  },
  textColor: {
    color: theme.palette.primary.contrastText,
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    },
    '& img': {
      width: 48,
      marginRight: theme.spacing(),
    },
    '& h6': {
      color: theme.palette.primary.contrastText,
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    color: theme.palette.primary.contrastText,
  },
  contactText: {
    color: theme.palette.primary.contrastText,
    '& a': {
      color: fade(theme.palette.primary.contrastText, 0.6),
    }
  },
  socmed: {
    display: 'flex',
    marginBottom: theme.spacing(4),
    justifyContent: 'center',
    '& button': {
      margin: theme.spacing(2),
      background: 'rgba(0, 0, 0, 0.12)',
      width: 45,
      height: 45,
      '& i': {
        color: theme.palette.secondary.main
      }
    },
    '& i': {
      fontSize: 26,
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    width: 212,
    display: 'inherit',
    margin: '16px auto 48px',
    color: theme.palette.primary.contrastText,
    '& $icon': {
      top: 21,
      position: 'relative',
    },
    '& svg': {
      color: theme.palette.secondary.main,
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.secondary.main} !important`,
      color: theme.palette.secondary.main,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.secondary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    '& svg': {
      fill: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
        fill: theme.palette.primary.contrastText
      }
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.primary.contrastText
    },
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  notionLogo: {
    fill: theme.palette.secondary.main, 
    width: '26px', 
    height: '26px', 
    display: 'block', 
    flexShrink: 0, 
    backfaceVisibility: 'hidden'
  },
  divider: {
    background: theme.palette.divider,
    margin: '1rem 0'
  }
}));

export default footerStyles;
