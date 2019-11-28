import React, { Component } from "react";

class ZoekFiltersTextSearch extends Component {
  focusInput = component => {
    if (component) {
      //console.log(component);
      component.focus();
    }
  };
  render() {
    return (
      <div className="m-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control dfi-search-input"
            placeholder="Zoeken"
            aria-describedby="zoeken"
            value={this.props.searchInput}
            onChange={this.props.handleInputChange}
            ref={this.focusInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="zoeken"
              style={{
                backgroundColor: "white",
                border: "1px solid #ced4da",
                color: "grey"
              }}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ZoekFiltersTextSearch;
