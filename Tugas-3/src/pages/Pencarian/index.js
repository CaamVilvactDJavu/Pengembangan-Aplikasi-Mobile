import CardForms from "./CardForms.js";
import Footer from "../components/Footer.js";
import Notification from "../components/Notification.js";
import Header from "./Header.js";
import { View, StyleSheet } from "react-native";
import { Component } from "react";

class Pencarian extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.backgroundBanner} />
        <Notification />
        <Header />
        <CardForms navigation={this.props.navigation} />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundBanner: {
    width: "100%",
    height: 450,
    backgroundColor: "#7DE5ED",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: -48,
    position: "absolute",
  },
  wrapper: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    position: "relative",
  },
  textBold: {
    fontWeight: "bold",
  },
});

export default Pencarian;
