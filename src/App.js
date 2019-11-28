import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";
import Zoeken from "./views/Zoeken";
import Item from "./views/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Productie build naar server subfoler /dfi-react/
//https://skryvets.com/blog/2018/09/20/an-elegant-solution-of-deploying-react-app-into-a-subdirectory/
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

class App extends Component {
  state = {
    loading: true,
    cats: [],
    catsChecked: [],
    itemsFetch: [],
    items: [],
    itemDetailsFetch: [],
    searchInput: ""
  };
  componentDidMount() {
    fetch("https://designforinterior.com/api/getCats")
      .then(response => response.json())
      .then(json => {
        this.setState({
          cats: json
        });
      });
    fetch("https://designforinterior.com/api/getItems")
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          itemsFetch: json,
          items: json
        });
      });
  }
  handleCatCheckChange = catId => {
    const catsChecked = this.state.catsChecked;
    const items = this.state.itemsFetch;
    if (!catsChecked.includes(catId)) {
      catsChecked.push(catId);
    } else {
      const index = catsChecked.indexOf(catId);
      if (index > -1) {
        catsChecked.splice(index, 1);
      }
    }
    var itemsNew = items.filter(i => catsChecked.includes(i.catId));
    if (itemsNew.length === 0) {
      itemsNew = this.state.itemsFetch;
    }
    const searchInput = this.state.searchInput;
    if (searchInput) {
      itemsNew = itemsNew.filter(i =>
        i.titel.toLowerCase().includes(searchInput)
      );
    }
    this.setState({ items: itemsNew, catsChecked });
  };
  handleCatClick = catId => {
    const catsChecked = [catId];
    const items = this.state.itemsFetch;
    var itemsNew = items.filter(i => catsChecked.includes(i.catId));
    const searchInput = this.state.searchInput;
    if (searchInput) {
      itemsNew = itemsNew.filter(i =>
        i.titel.toLowerCase().includes(searchInput)
      );
    }
    this.setState({ items: itemsNew, catsChecked });
  };
  handleInputChange = e => {
    const searchInput = e.target.value.toLowerCase();
    const items = this.state.itemsFetch;
    var itemsNew = items.filter(i =>
      i.titel.toLowerCase().includes(searchInput)
    );
    const catsChecked = this.state.catsChecked;
    if (catsChecked.length) {
      itemsNew = itemsNew.filter(i => catsChecked.includes(i.catId));
    }
    this.setState({ items: itemsNew, searchInput });
  };
  addToItemDetailsFetch = json => {
    this.state.itemDetailsFetch.push(json);
  };
  render() {
    return (
      <div
        className="App"
        style={{ minHeight: document.documentElement.clientHeight }}
      >
        <Router history={history}>
          <ScrollToTop>
            <Menu cats={this.state.cats} handleCatClick={this.handleCatClick} />
            <main className="container bg-white main">
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => (
                    <Zoeken
                      items={this.state.items}
                      cats={this.state.cats}
                      catsChecked={this.state.catsChecked}
                      searchInput={this.state.searchInput}
                      loading={this.state.loading}
                      handleCatCheckChange={this.handleCatCheckChange}
                      handleInputChange={this.handleInputChange}
                    />
                  )}
                />
                <Route
                  path="/item:id"
                  component={props => (
                    <Item
                      {...props}
                      itemDetailsFetch={this.state.itemDetailsFetch}
                      addToItemDetailsFetch={this.addToItemDetailsFetch}
                    />
                  )}
                />
              </Switch>
            </main>
          </ScrollToTop>
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
