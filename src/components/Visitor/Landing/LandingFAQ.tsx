import clsx from 'clsx';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './LandingFAQStyle';

type questionType = {
    question: string;
    answer: string;
};

function VisitorFAQ() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const setAlign = () => isMobile ? classes.center : classes.left;
  const [expanded, setExpanded] = useState(0);
  const { t } = useTranslation();
  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div className={clsx(classes.title, setAlign())}>
              <Typography variant="h3">
                <strong>
                    {t('faq.title')}
                </strong>
              </Typography>
            </div>
            <Typography className={classes.text} align={isMobile ? 'center' : 'left'} component="p">
                {t('faq.text')}
            </Typography>
            <Hidden smDown>
              <div className={classes.illustration}>
                <div className={classes.figuresWrap}>
                  <div className={classes.innerWrap}>
                    <svg className={classes.plus}>
                      <use xlinkHref="/images/Intro/plus.svg#main" />
                    </svg>
                    <svg className={classes.circle}>
                      <use xlinkHref="/images/Intro/circle.svg#main" />
                    </svg>
                    <svg className={classes.zigzag}>
                      <use xlinkHref="/images/Intro/zigzag.svg#main" />
                    </svg>
                  </div>
                </div>
                <img src='/images/Intro/faq.webp' alt="illustration" />
              </div>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={6} className={classes.accordionWrap}>
            <div className={classes.accordion}>
              {t<questionType[]>('faq.questions', { returnObjects: true }).map((question: questionType, index: any) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{question.question}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {question.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default VisitorFAQ;
