import React, { Component } from 'react';
import glassesData from '../dataGlasses.json';

export default class Content extends Component {
  state = {
    glassesDisplay: null,
    glassesInfo: null,
  };

  renderGlasses = () => {
    return glassesData.map((item) => (
      <div className="col-2" key={item.id}>
        <div
          className="glassesItem"
          onClick={() => this.handleChooseGlasses(item)}
        >
          <img src={item.url} alt="glasses" width={'100%'} />
        </div>
      </div>
    ));
  };

  handleChooseGlasses = (item) => {
    this.setState({
      glassesDisplay: item.url,
      glassesInfo: item,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="models">
          <div className="model left">
            <img src="./glassesImage/model.jpg" alt="model" />
            {this.state.glassesDisplay && (
              <div className="glassesDisplay">
                <img src={this.state.glassesDisplay} alt="glasses" />
              </div>
            )}
            {this.state.glassesInfo && (
              <div className="glassesInfo">
                <h3>{this.state.glassesInfo?.name}</h3>
                <p>{this.state.glassesInfo?.desc}</p>
              </div>
            )}
          </div>
          <div className="model right">
            <img src="./glassesImage/model.jpg" alt="model" />
          </div>
        </div>
        <div className="glassesContainer">
          <div className="row">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
