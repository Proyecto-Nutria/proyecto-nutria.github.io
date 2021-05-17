import React from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './vendors/animate-slider.css';
import useStyles from './LandingAboutStyle';
import { useTranslation } from 'react-i18next';

const sliderData = [
  {
    image: '/images/About/about-1.webp',
    namespace: 'who',
    title: 'Who we are?',
  },
  {
    image: '/images/About/about-3.webp',
    namespace: 'mission',
    title: 'Our Mission',
  },
  {
    image: '/images/About/about-2.webp',
    namespace: 'why',
    title: 'Why do we do this?',
  },
];

const VisitorAbout = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <div className={classes.sliderWrap}>
      <Slider
        className="slider-wrapper"
        previousButton={(
          <NextIcon />
        )}
        nextButton={(
          <NextIcon />
        )}
      >
        {sliderData.map((item, index) => (
          <div className={classes.item} key={index.toString()}>
            <Grid container>
              <Grid item xs={12} lg={4}>
                &nbsp;
              </Grid>
              <Grid item xs={12} lg={7}>
                <Hidden mdDown>
                  <div className={classes.imgWrap}>
                    <div className={classes.decoration}>
                      <svg>
                        <use xlinkHref="/images/About/about-deco.svg#main" />
                      </svg>
                    </div>
                    <figure className={classes.image}>
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                </Hidden>
                <Paper className={classes.paper}>
                  <Typography variant="h1">
                    <ButtonBase>
                      {t('about.'+item.namespace+'.title')}
                    </ButtonBase>
                  </Typography>
                  <Typography component="p">
                    {t('about.'+item.namespace+'.text')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)}

export default VisitorAbout
