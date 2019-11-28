import React, { Component } from "react";
import ZoekFiltersTextSearch from "../components/ZoekFiltersTextSearch";
import ZoekFiltersCats from "../components/ZoekFiltersCats";
import "./ZoekFilters.css";

class ZoekFilters extends Component {
  render() {
    return (
      <div className="filtersWrapper">
        <ZoekFiltersTextSearch
          searchInput={this.props.searchInput}
          handleInputChange={this.props.handleInputChange}
        />
        <ZoekFiltersCats
          cats={this.props.cats}
          catsChecked={this.props.catsChecked}
          handleCatCheckChange={this.props.handleCatCheckChange}
        />
      </div>
    );
  }
}

export default ZoekFilters;
