import clsx from 'clsx';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useText } from './LandingCommonStyle';
import useStyles from './LandingSectionsStyle';

const VisitorSections = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const text = useText();
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <div className={clsx(classes.item)}>
          <div className={classes.title}>
            <Typography variant="h3">
              <strong>{t('sections.title')}</strong>
            </Typography>
          </div>
          <Grid container spacing={6}>
            {!isMobile && <Grid item md={1} xs={12} />}
            <Grid item md={10} xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.workshop.title')}
                  wrapped
                />
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.webinar.title')}
                  wrapped
                />
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.resume.title')}
                  wrapped
                />
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.mock.title')}
                  wrapped
                />
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.english.title')}
                  wrapped
                />
                <Tab
                  classes={{
                    root: classes.tabLabel,
                    selected: classes.selected,
                  }}
                  label={t('sections.activities.community.title')}
                  wrapped
                />
              </Tabs>
              <div className={classes.tabContent}>
                {value === 0 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.workshop.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
                {value === 1 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.webinar.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
                {value === 2 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.resume.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
                {value === 3 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.mock.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
                {value === 4 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.english.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
                {value === 5 && (
                  <React.Fragment>
                    <section>
                      <Typography
                        component="h6"
                        display="block"
                        align="center"
                        className={text.subtitle2}
                      >
                        {t('sections.activities.community.description')}
                      </Typography>
                    </section>
                  </React.Fragment>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default VisitorSections;
