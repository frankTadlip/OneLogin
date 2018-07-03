import React from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';

// *** React Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// *** Route
import Route from './routes';

// *** Set Theme here
const theme = createMuiTheme({
    palette: {
    //   primary: { main: purple[500] }, // Purple and green play nicely together.
    //   secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  });

class App extends React.Component {

    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <Helmet titleTemplate="One Login - %s" />
                <Route />
            </MuiThemeProvider>
        )
    }
}

render(<App />, document.getElementById('app'));