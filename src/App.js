import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { Home2 } from "./Home2";
import { NotFound } from "./404";
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <DirectionProvider direction={DIRECTIONS.RTL}>
            <Switch>
              <Route path='/' component={Home2} />
              <Route component={NotFound} />
            </Switch>
          </DirectionProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
