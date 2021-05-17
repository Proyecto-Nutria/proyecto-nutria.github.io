import React, { useState, useRef } from 'react';
import Carousel, { Settings } from 'react-slick';
import './vendors/slick/slick.css';
import './vendors/slick/slick-theme.css';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { COLLABORATORS } from '../../../utils/constants/landing';
import { useTranslation } from 'react-i18next';
import { useText } from './LandingCommonStyle';
import useStyle from './LandingCollaboratorsStyle';

type collaboratorType = {
  name: string;
  text: string;
  avatar: string;
  title: string;
};

type teamType = {
  name: string;
  text: string;
  avatar: string;
  title: string;
};

const getCollaborators = () => {
  const arr = COLLABORATORS;
  let result = new Array(8);
  let len = 8
  let taken = new Array(8);
  for (let i = len-1; i >= 0; i--) {
      var x = Math.floor(Math.random() * len);
      result[i] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const VisitorCollaborator = () => {
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();
  const collaborators = useRef(getCollaborators());
  let slider: Carousel | undefined = undefined;
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);

  const settingsSlider: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    afterChange: (current: any) => setActive(current),
    beforeChange: (current: any, next: any) => setActiveTransition(next),
  };

  const slideState = (index: number) => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <div className={classes.title}>
          <Typography variant="h3">
            <strong>
                {t('collaborators.title')}
            </strong>
          </Typography>
        </div>
        <Typography className={text.subtitle2} align="center" component="p">
            {t('collaborators.text')}
        </Typography>
        <Grid container spacing={6} justify="center">
          <Grid item md={10} xs={12}>
            <div className={classes.sliderHandle}>
              <div className={classes.sliderWrap}>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.prev)}
                  onClick={() => slider?.slickPrev()}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <Carousel ref={(component: Carousel) => { slider = component; }} {...settingsSlider}>
                  {collaborators.current.map((item: collaboratorType, index: number) => (
                    <div key={index.toString()} className={clsx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <Paper className={clsx(classes.paper, index === active ? classes.active : '')}>
                          {isMobile && <Avatar src={item.avatar} className={classes.avatar} alt="avatar" />}
                          <Typography className={classes.text} display="block">{item.text}</Typography>
                          <Typography variant="caption" className={classes.caption}>
                            {item.name}
                            &nbsp;-&nbsp;
                            {item.title}
                          </Typography>
                        </Paper>
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.next)}
                  onClick={() => slider?.slickNext()}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
                {isTablet &&
                  <div className={classes.pagination}>
                    <ul>
                      {collaborators.current.map((item: collaboratorType, index: number) => (
                        <li
                          key={index.toString()}
                          className={index === active ? classes.active : ''}
                        >
                          <button type="button" onClick={() => slider?.slickGoTo(index)} style={{backgroundImage: `url(${item.avatar})`}}>{index}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
)}

export default VisitorCollaborator