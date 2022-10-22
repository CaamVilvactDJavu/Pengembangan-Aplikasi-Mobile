import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";
import info from "../../copyright/info.js";

class Footer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ textAlign: "center" }}>
          © {info.author.nama} - {info.author.nim}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 12,
    flex: 1,
    textAlign: "center",
    width: "100%",
    position: "absolute",
    bottom: 8,
  },
});

export default Footer;
