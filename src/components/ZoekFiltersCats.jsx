import React, { Component } from "react";

class ZoekFiltersCats extends Component {
  checkThis = catId => {
    return this.props.catsChecked.includes(catId) ? true : false;
  };
  render() {
    return (
      <div className="filters">
        <span className="dfi-filter-titel">
          <strong>Categorieën</strong>
          <br />
        </span>
        <div className="dfi-filter-inner">
          {this.props.cats.map(cat => (
            <div key={cat.id} className="chiller_cb">
              <input
                id={cat.id}
                type="checkbox"
                onChange={() => this.props.handleCatCheckChange(cat.id)}
                defaultChecked={this.checkThis(cat.id)}
              />
              <label htmlFor={cat.id}>{cat.name}</label>
              <span></span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ZoekFiltersCats;
