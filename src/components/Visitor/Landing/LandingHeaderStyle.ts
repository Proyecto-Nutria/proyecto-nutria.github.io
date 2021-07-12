import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  },
  fixed: {},
  openDrawer: {},
  header: {
    height: 'auto',
    color: theme.palette.text.primary,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    position: 'fixed',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
    },
    '& nav': {
      transition: 'all 0.5s ease-out',
    },
    '&$fixed': {
      position: 'fixed',
      top: 0,
      boxShadow: theme.shadows[4],
      background: theme.palette.background.paper,
      zIndex: 1000,
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
          '& span': {
            display: 'none',
          },
        },
        '& img': {
          height: 64,
          width: 64,
          margin: 0,
        },
      },
      '& $bar': {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary,
          },
        },
      },
      '& nav': {
        padding: theme.spacing(0.5, 0),
      },
      '& $navMenu': {
        [theme.breakpoints.up('sm')]: {
          padding: '14px 8px',
        },
      },
      '& $navAuth': {
        '& a': {
          color:
            theme.palette.type === 'dark'
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
        },
        '& $deco': {
          display: 'none',
        },
      },
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  headerContent: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      height: 'auto',
    },
  },
  logo: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 'normal',
      '& span': {
        display: 'none',
      },
    },
    '& img': {
      margin: `0 auto ${theme.spacing()}px`,
      display: 'block',
      transition: 'all 0.3s ease-out',
      width: 64,
      height: 64,
      [theme.breakpoints.down('xs')]: {
        height: 48,
        width: 48,
      },
    },
  },
  navLogo: {
    padding: theme.spacing(),
  },
  text: {
    position: 'relative',
    zIndex: 1,
  },
  navMenu: {
    padding: theme.spacing(3, 1),
    '& > *': {
      margin: 0,
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(0, 1),
      },
    },
    '& ul': {
      listStyle: 'none',
      '& li': {
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(0, 2),
        },
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          marginTop: theme.spacing(0.5),
          textTransform: 'capitalize',
          fontSize: 18,
          fontWeight: theme.typography.fontWeightMedium,
          background: 'none !important',
          boxShadow: 'none',
          position: 'relative',
          padding: '6px',
          margin: theme.spacing(0, 1),
          minWidth: 0,
          '&:after': {
            content: "''",
            height: 5,
            borderRadius: 5,
            background:
              theme.palette.type === 'light'
                ? theme.palette.secondary.main
                : theme.palette.secondary.light,
            width: 0,
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            '&:after': {
              width: '60%',
              left: 8,
              borderBottomColor: theme.palette.secondary.light,
            },
          },
        },
        '&[class="active"]': {
          '& a': {
            color:
              theme.palette.type === 'light'
                ? theme.palette.secondary.dark
                : theme.palette.secondary.light,
            '&:after': {
              width: '60%',
              left: 8,
            },
          },
        },
      },
    },
  },
  navAuth: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    padding: '28px 24px 28px 0',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
    '& a': {
      fontSize: 16,
      margin: theme.spacing(0, 1.5),
    },
  },
  textBtn: {
    paddingTop: '4px !important',
    paddingBottom: '4px !important',
    color: theme.palette.common.white,
  },
  btnWhite: {
    border: `1px solid ${theme.palette.primary.main}`,
    lineHeight: '21px',
    background: theme.palette.common.white,
    color: theme.palette.primary.dark + '!important',
    width: theme.spacing(20),
  },
  deco: {
    width: 500,
    height: 300,
    borderRadius: 40,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    transform: 'rotate(-10deg)',
    position: 'absolute',
    right: -140,
    top: -190,
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary,
      },
    },
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(4),
      overflow: 'auto',
      top: theme.spacing(12),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 180px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease',
      },
    },
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24,
    },
  },
  dividerSidebar: {
    background: theme.palette.divider,
    margin: '1rem 0',
  },
}));

export default headerStyles;
