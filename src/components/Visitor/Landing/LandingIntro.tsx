import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useText } from './LandingCommonStyle';
import useStyles from './LandingIntroStyle';

const VisitorIntro = (props: any) => {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();
  
  return (
  <div className={classes.root}>
    <div className={classes.background}>
      <div className={classes.gradient}>
        <div className={classes.decoWave} />
        <Hidden smDown>
          <div className={classes.decoLine} />
        </Hidden>
        <div className={classes.decoInner}>
          <canvas id="particle_art_mobile" width="500px" height="700px" />
        </div>
      </div>
    </div>
    <Container fixed={isDesktop}>
      <Grid container>
        <Grid item md={7} xs={12}>
          <div className={classes.text}>
            {isMobile && (
              <Typography variant="body1" align="center">
                {'Welcome to'}
                <br/>
                <strong>
                  {'Proyecto Nutria'}
                </strong>
              </Typography>
            )}
            <Typography variant="h3" className={text.title}>
              {'Believe in your'}
              &nbsp;
              <strong>
                {'otter side'}
              </strong>
            </Typography>
            <Typography variant="h5" className={text.subtitle}>
              {t('header.phrase')}
            </Typography>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <div className={classes.decoration}>
            <div className={classes.otterIllustration}>
                {!isMobile && (
                  <Typography variant="body1" align="center">
                    {t('header.intro')}
                    <br/>
                    <strong>
                      {'Proyecto Nutria'}
                    </strong>
                  </Typography>
                )}
              <img src={'/images/Intro/intro_header.webp'} className={classes.phone} alt="illustration" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
)}

export default VisitorIntro
