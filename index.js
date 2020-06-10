import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from "react-360";
import Scene1 from "./components/views/Scene1/Scene1";

export default class Hello360 extends React.Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      count: 0,
      flag: false,
    };
    this._changeBackground = this._changeBackground.bind(this);
    this._changeView = this._changeView.bind(this);
  }

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // This method increments our count, triggering a re-render
  _changeBackground = () => {
    Environment.setBackgroundImage(asset("miami.jpeg"));
  };

  // This method increments our count, triggering a re-render
  _changeView = () => {
    alert("holi");
    const flag2 = this.state.flag;
    this.setState({
      flag: !flag2,
    });
  };

  // Once the component mounts, run the increment method every second
  componentDidMount() {
    //setInterval(this._incrementCount, 1000);
  }

  render() {
    const display2 = !this.state.flag
      ? { display: "none" }
      : { display: "flex" };
    // Reference the count in our UI
    return (
      <View style={styles.panel}>
        <Scene1 flag={this.state.flag} changeView={this._changeView}></Scene1>
        <View style={display2}>
          <VrButton onClick={this._changeView} style={styles.greetingBox}>
            <Text style={styles.greeting}>{`display 1`}</Text>
          </VrButton>
          <VrButton onClick={this._changeBackground} style={styles.greetingBox}>
            <Text style={styles.greeting}>{`Count-holi: ${
              this.state.count + 1
            }`}</Text>
          </VrButton>
        </View>
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

AppRegistry.registerComponent("Hello360", () => Hello360);
