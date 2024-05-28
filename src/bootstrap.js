import * as React from 'react';
import * as ReactDOM from "react-dom";

// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

import App from './App';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <ThemeProvider theme={theme}> */}
//       {/* <CssBaseline /> */}
//       <App />
//     {/* </ThemeProvider> */}
//   </React.StrictMode>
// );

const root = document.getElementById('root');

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
 root);
