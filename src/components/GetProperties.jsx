import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import Button from "Scheduler/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:3001', headers: { Authorization: `Bearer V5KfR9f8DUlZ28usrPuf3WLf9GVEczZJs6UUGHncgWA`} })
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function GetProperties(props) {
  const classes = useStyles();

  const signIn = async (e) => {
    e.preventDefault()
    const params = {
      user_id : e.target.user_id.value
    }

    const res = await API.get(`http://localhost:3001/api/v2/properties?user_id=${params.user_id}&property_listing=not_archived&query=&page=1&primary_device=&type=`);
    console.log(res);

    // window.parent.postMessage('requestSignin', body)
    // fetch(' /api/v2/authentication/signin').then(res => console.log(res));
  }

  return (
    <ThemeProvider theme={props.theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Get Properties
          </Typography>
          <form className={classes.form} noValidate onSubmit={signIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_id"
              label="User Id"
              name="propeties"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            > Get Properties
            </Button>
            
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
