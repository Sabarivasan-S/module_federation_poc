import * as React from 'react';
import {Container, Typography,Box, Link } from "@material-ui/core"
import OnboardingPage from './components/OnboardingPage';
import Routers from './components/Routers';
import GetProperties from './components/GetProperties';
// import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <GetProperties/>
  );
}
