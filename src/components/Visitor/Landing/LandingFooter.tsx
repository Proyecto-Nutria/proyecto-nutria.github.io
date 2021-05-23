import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LangIcon from '@material-ui/icons/Language';

import logo from '../../../assets/imgs/logo.svg';
import useStyles from './LandingFooterStyle';

function Copyright({ text }: {text: string}) {
  const dt = new Date();
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {`Proyecto Nutria - ${text} ${dt.getFullYear()}`}
    </Typography>
  );
}

const footers = [
  {
    description: ['Feedback Helper', 'Resume Checker', 'Otter-guides', 'Nutria System'],
    link: ['https://proyectonutria.com/feedback-helper/', 'https://github.com/Proyecto-Nutria/resume-checker', 'https://proyectonutria.com/otter-guides/', 'https://github.com/Proyecto-Nutria/nutria-system-v2'],
  },
  {
    description: ['Facebook', 'YouTube', 'LinkedIn', 'Twitter', 'Instagram'],
    link: ['https://www.facebook.com/ProyectoNutria/', 'https://www.youtube.com/c/ProyectoNutria', 'https://www.linkedin.com/company/proyecto-nutria', 'https://twitter.com/ProyectoNutria', 'https://www.instagram.com/proyectonutria/'],
  },
];

const VisitorFooter = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const [values, setValues] = useState({
    lang: 'en',
  });

  useEffect(() => {
    setValues({ lang: i18n.language.split('-')[0] });
  }, [i18n.language]);

  const handleChange = (event: any) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={classes.footerDeco}>
      <Container
        maxWidth="lg"
        component="footer"
        className={classes.footer}
      >
        <Grid container spacing={isDesktop ? 4 : 2}>
          {/* First Column - Proyecto Nutria Info */}
          <Grid item xs={12} md={3}>
            <Box mr={-2} mt={-2} className={classes.textColor}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" />
                <Typography variant="h6">
                  {"Proyecto Nutria"}
                </Typography>
              </div>
              <Typography className={classes.footerDesc} gutterBottom align="center">
                {"Believe in your otter side!"}
              </Typography>
              <Typography className={classes.contactText} gutterBottom align="center">
                {t('contact.text')}
                <Link href={'mailto:contact@proyectonutria.com'} variant="subtitle1">
                  {'contact@proyectonutria.com'}
                </Link>
              </Typography>
              <Divider className={classes.divider} />
              {isDesktop && <Copyright text={t('contact.copyright')}/>}
            </Box>
          </Grid>
          {/* Middle Columns */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={isTablet ? 1 : 4} justify="space-evenly">
              {footers.map((footer, index) => (
                <Grid item xs={12} md={3} key={index} className={classes.siteMapItem}>
                  {isDesktop && (
                    <div>
                      <Typography variant="h6" className={classes.title} gutterBottom>
                        {t('contact.sections.'+index)}
                      </Typography>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link href={footer.link[index]} variant="subtitle1" color="textSecondary" target="_blank" rel="noreferrer">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isMobile && (
                    <ExpansionPanel
                      square
                      classes={{
                        root: classes.accordionRoot,
                      }}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        classes={{
                          content: classes.accordionContent,
                        }}
                      >
                        <strong>
                        {t('contact.sections.'+index)}
                        </strong>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <ul>
                          {footer.description.map((item, index) => (
                            <li key={item}>
                              <Link href={footer.link[index]} variant="subtitle1" color="textSecondary" target="_blank" rel="noreferrer">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Last Column */}
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <Link href="https://discord.gg/CJHxp3PZ9t" target="_blank" rel="noreferrer">
                <IconButton aria-label="DI" size="small">
                  <i className="fab fa-discord"></i>
                </IconButton>
              </Link>
              <Link href="https://github.com/proyecto-nutria" target="_blank" rel="noreferrer">
                <IconButton aria-label="GH" size="small">
                  <i className="fab fa-github"></i>
                </IconButton>
              </Link>
              <Link href="https://www.notion.so/Proyecto-Nutria-4e1b2ba24d4a46188207c2ca10acea5f" target="_blank" rel="noreferrer">
                <IconButton aria-label="NO" size="small">
                  <svg viewBox="0 0 120 126" className={classes.notionLogo}><path d="M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z" /></svg>
                </IconButton>
              </Link>
            </div>
            <Select
              value={values.lang}
              onChange={handleChange}
              startAdornment={(
                <InputAdornment className={classes.icon} position="start">
                  <LangIcon />
                </InputAdornment>
              )}
              className={classes.selectLang}
              input={<OutlinedInput labelWidth={200} name="lang" id="outlined-lang-simple" />}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </Grid>
        </Grid>
      {isMobile && (
        <Box p={4} className={classes.textColor}>
          <Copyright text={t('contact.copyright')}/>
        </Box>
      )}
      </Container>
      <div className={classes.footerAfter}></div>
    </div>
  );
}

export default VisitorFooter
