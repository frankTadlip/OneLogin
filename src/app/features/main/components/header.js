import React from 'react';

import { AppBar, Toolbar, Typography} from '@material-ui/core';

class Header extends React.Component {
    render () {
        return(
            <main>
               <AppBar position="fixed" >
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Header
                        </Typography>
                    </Toolbar>
                </AppBar>
            </main>
        )
    }
}

export default Header;