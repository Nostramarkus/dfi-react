import React, { Component } from "react";
import ZoekFilters from "../components/ZoekFilters";
import ItemTegel from "../components/ItemTegel";
import Loader from "../components/Loader";
import "./Zoeken.css";

class Zoeken extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-4">
          <br />
          <h2>Filters</h2>
          <br />
          <ZoekFilters
            cats={this.props.cats}
            catsChecked={this.props.catsChecked}
            searchInput={this.props.searchInput}
            handleCatCheckChange={this.props.handleCatCheckChange}
            handleInputChange={this.props.handleInputChange}
          />
        </div>
        <div className="col-xl-8">
          <br />
          <h2>Resultaten</h2>
          <br />
          {this.placeItems()}
        </div>
      </div>
    );
  }
  placeItems() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      return (
        <div className="flex-wapper">
          {this.props.items.map(item => (
            <ItemTegel key={item.id} item={item} />
          ))}
          {this.placeSpacer()}
        </div>
      );
    }
  }
  placeSpacer() {
    const i = this.props.items.length;
    if (i > 0) {
      if (i % 3 !== 0) {
        return <div style={{ width: "30%" }}></div>;
      }
    } else {
      return "Geen items gevonden...";
    }
  }
}

export default Zoeken;
