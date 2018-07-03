import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from "./features/main/components/main";
import Home from "./features/home/components/home";
import Message from "./features/message/components/message";

class AppRoute extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route path="/" component={Main} exact />
                        <Route path="/home" component={Home} />
                        <Route path="/message" component={Message} />
                    </Switch>
                </main>
          </BrowserRouter>
        );
    }
}

export default AppRoute;