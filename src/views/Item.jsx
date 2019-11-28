import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Item.css";

class Item extends Component {
  state = {
    loading: true,
    item: {},
    bla: ""
  };
  componentDidMount() {
    const itemId = this.props.match.params.id;
    const itemDetailsFetch = this.props.itemDetailsFetch;
    if (!itemDetailsFetch.find(x => x.id === itemId)) {
      fetch("https://designforinterior.com/api/getItemDetails?item=" + itemId)
        .then(response => response.json())
        .then(json => {
          this.props.addToItemDetailsFetch(json);
          this.setState({
            loading: false,
            item: json
          });
        });
    } else {
      this.setState({
        loading: false,
        item: itemDetailsFetch.find(x => x.id === itemId)
      });
    }
  }
  formatPrijs = prijs => {
    const fprijs = prijs
      .toFixed(2)
      .toString()
      .replace(".", ",")
      .replace(",00", ",-");
    return fprijs;
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div>
          <div className="dfi-a-terug-wrapper">
            <NavLink to="/" className="dfi-a-terug">
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp;TERUG
            </NavLink>
          </div>
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="dfi-bekijk-product-prijs">
                €&nbsp;{this.formatPrijs(this.state.item.prijs)}
              </div>
              <div className="dfi-foto-wrapper">
                <img
                  src={this.state.item.img}
                  alt={this.state.item.titel}
                  className="img-fluid dfi-gallery"
                />
              </div>
              <br />
              <br />
            </div>
            <div className="col-lg-6">
              <h2>
                {this.state.item.titel} {this.props.match.params.id}
              </h2>
              <table className="dfi-item-info-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Geplaatst</strong>
                    </td>
                    <td>{this.state.item.geplaatstDt}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Conditie</strong>
                    </td>
                    <td>{this.state.item.conditie} </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Verkoper</strong>
                    </td>
                    <td>{this.state.item.verkoper}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Lid sinds</strong>
                    </td>
                    <td>{this.state.item.verkoperSinds}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Woonplaats</strong>&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>{this.state.item.woonplaats}</td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                  </tr>
                </tbody>
              </table>
              <strong>Omschrijving</strong>
              <br />
              <p>
                {this.state.item.oms}
                <br />
              </p>
              <br />
            </div>
          </div>

          <hr />

          <br />
          <br />
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://designforinterior.com/assets/img/logo-dfi.svg"
                className="dfi-logo-item-page"
                alt="Design For Interior"
              />
              <br />
              <br />
              <br />
            </div>
            <div className="col-md-8">
              <h2>Koop &amp; verkoop jouw design items</h2>
              <p>
                Design For Interior is er voor interieurprofessionals en
                consumenten die blij worden van design items. Voor diegenen die
                een liefde hebben voor stijlvolle &amp; elegante interieurs.
                Jij, Wij, Iedereen. Design For Interior maakt daarom de koop
                &amp; verkoop van deze design items mogelijk. Vind via dit
                platform dat unieke kunstwerk of meubel om jouw inrichting
                compleet te maken. Ontdek iedere dag iets nieuws, iets anders,
                iets bijzonders!
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Item;
