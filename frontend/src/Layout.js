import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';


function Layout(props) {
    return (
        <React.Fragment>
            <div>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Typography variant={"h6"}>
                            Chris Brighton : Tech Test
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;