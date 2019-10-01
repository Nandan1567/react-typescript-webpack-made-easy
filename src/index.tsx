import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App/App';
import Not_found from './Not_found/Not_found';
import Myservice from './Myservice/Myservice';
import Guru from './Guru/Guru';
let route_link
try {
   let all_routes=require("./Routes/Routes").default
    route_link=<Route path="/routes" component={all_routes} />
} catch (error) {
    
}
    

// ReactDOM.render(<App />, document.getElementById('root'));

const history = createBrowserHistory()


ReactDOM.render((
    <Router history={history}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/App" component={App} />
                <Route path="/myservice" component={Myservice} />
				<Route path="/guru" component={Guru} />
                {route_link}
                <Route component={Not_found} />
            </Switch>
        </HashRouter>
    </Router>


), document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();