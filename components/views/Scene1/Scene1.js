import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from "react-360";

export default class Scene1 extends Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { counter: 0 };
    this._changeBackground = this._changeBackground.bind(this);
  }

  // This method increments our count, triggering a re-render
  _changeBackground = () => {
    Environment.setBackgroundImage(asset("tienda.jpg"));
  };

  render() {
    const display = this.props.flag ? { display: "none" } : { display: "flex" };
    return (
      <View style={display}>
        <VrButton
          onClick={(e) => this.props.changeView()}
          style={styles.greetingBox}
        >
          <Text style={styles.greeting}>{`display 0`}</Text>
        </VrButton>
        <VrButton onClick={this._changeBackground} style={styles.greetingBox}>
          <Text style={styles.greeting}>{`Count: ${
            this.state.count + 1
          }`}</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    //width: 1000,
    //height: 600,
    //backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
