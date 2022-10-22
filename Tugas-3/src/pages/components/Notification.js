import { StyleSheet, View } from "react-native";
import { Component } from "react";

class Notification extends Component {
  render() {
    return <View style={styles.wrapper}></View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    backgroundColor: "#7DE5ED",
  },
});

export default Notification;
