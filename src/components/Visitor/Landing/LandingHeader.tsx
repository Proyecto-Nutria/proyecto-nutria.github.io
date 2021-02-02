import React from "react"
import { AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function VisitorHeader() {
  const classes = useStyles()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Nutria
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contributors</Button>
      </Toolbar>
    </AppBar>
  )
}