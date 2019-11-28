import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ItemTegel.css";

class ItemTegel extends Component {
  render() {
    return (
      <div className="flex-item">
        <NavLink to={`/item${this.props.item.id}`}>
          <div className="item-img-wrapper">
            <img
              src={this.props.item.img}
              className="item-img"
              alt={this.props.item.titel}
            />
          </div>
          <div className="item-details-wrapper">
            <div className="item-titel">{this.props.item.titel}</div>
            <div
              className="item-prijs"
              dangerouslySetInnerHTML={{
                __html: this.formatPrijs(this.props.item.prijs)
              }}
            ></div>
            <div className="item-muted">
              {this.formatDatum(this.props.item.datum)}
              <br />
              {this.props.item.plaats}
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
  formatPrijs = prijs => {
    const fprijs = prijs
      .toFixed(2)
      .toString()
      .replace(".", ",")
      .replace(",00", ",-");
    return "&euro;&nbsp;" + fprijs;
  };
  formatDatum = datum => {
    const fdatum = new Date(datum);
    return fdatum.toLocaleDateString("nl-NL");
  };
}

export default ItemTegel;
