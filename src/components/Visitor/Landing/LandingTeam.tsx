import './vendors/slick/slick.css';
import './vendors/slick/slick-theme.css';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel, { Settings } from 'react-slick';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';
import GroupIcon from '@material-ui/icons/Group';

import { TEAM } from '../../../utils/constants/landing';
import useStyle from './LandingTeamStyle';

type teamType = {
  name: string;
  text: string;
  avatar: string;
  link: string;
};

const VisitorTeam = () => {
  const classes = useStyle();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();
  let carousel: Carousel | undefined = undefined;

  const settingsCarousel: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(TEAM.length - limit);
      carousel?.slickGoTo(lastSlide);
    }
  }, [carousel, theme.direction]);

  return (
    <div className={classes.root}>
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel
            ref={(component: Carousel) => {
              carousel = component;
            }}
            {...settingsCarousel}
          >
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {TEAM.map((item: teamType, index: number) => (
              <div className={classes.item} key={index.toString()}>
                <Paper className={classes.defaultCard}>
                  <figure>
                    <img src={item.avatar} alt="img" />
                  </figure>
                  <div className={classes.text}>
                    <Typography display="block" variant="h6">
                      {item.name}
                    </Typography>
                    <Typography component="p">{item.text}</Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.linkButton}
                    >
                      {'Social Media'}
                    </Link>
                  </Button>
                </Paper>
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <div className={classes.iconDeco}>
              <div className={classes.capsul} />
              <div className={classes.circle} />
              <GroupIcon className={classes.icon} />
              <Typography variant="h3">{t('collaborators.team')}</Typography>
            </div>
            <nav className={classes.arrow}>
              <Fab
                size="small"
                onClick={() => carousel?.slickNext()}
                aria-label="prev"
              >
                <PrevIcon />
              </Fab>
              <Fab
                size="small"
                onClick={() => carousel?.slickPrev()}
                aria-label="next"
              >
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VisitorTeam;
