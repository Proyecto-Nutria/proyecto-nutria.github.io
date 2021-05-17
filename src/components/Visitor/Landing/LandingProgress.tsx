import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useText, useTextAlign } from './LandingCommonStyle';
import useStyles from './LandingProgressStyle';

const VisitorProgress = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const text = useText();
  const align = useTextAlign();
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={isDesktop ? 6 : 2}>
          <Grid item md={5} xs={12}>
            <div className={align.textCenter}>
              <div>
                <div className={classes.textDeco}>
                  <Typography className={classes.bgImg} variant="h3" >
                    <span>
                      {t('progress.title')}
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12} className={classes.numsWrap}>
            <Typography className={clsx(classes.title, text.subtitle)} variant="h4">
              {t('progress.subtitle')}
            </Typography>
            <div className={classes.counterWrap}>
              <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={2}>
                  <Grid sm={4} item className={classes.counterItemWrap}>
                    <div className={clsx(classes.counterItem, classes.deco)}>
                      <div className={classes.text}>
                        <Typography variant="h3">
                          +390
                        </Typography>
                        <Typography component="p">
                          {t('progress.count1')}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid sm={4} item className={classes.counterItemWrap}>
                    <div className={clsx(classes.counterItem, classes.deco)}>
                      <div className={classes.text}>
                        <Typography variant="h3">
                          +50
                        </Typography>
                        <Typography component="p">
                          {t('progress.count2')}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid sm={4} item className={classes.counterItemWrap}>
                    <div className={classes.counterItem}>
                      <div className={classes.text}>
                        <Typography variant="h3">
                          +400
                        </Typography>
                        <Typography component="p">
                          {t('progress.count3_1')}
                          <br/>
                          {t('progress.count3_2')}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <blockquote>
              {t('progress.quote')}
            </blockquote>
          </Grid>
        </Grid>
      </Container>
    </div>
)}

export default VisitorProgress
