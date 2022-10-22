import Ionicons from "react-native-vector-icons/Ionicons.js";
import { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome.js";
import info from "../../copyright/info.js";

class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor="#81C6E8"
          style={styles.iconWrapper}
        >
          <Ionicons style={styles.icon} name="menu" size={30} />
        </TouchableHighlight>
        <View>
          <Text style={styles.title}>{info.title}</Text>
        </View>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor="#81C6E8"
          style={styles.iconWrapper}
        >
          <FontAwesome style={styles.icon} name="user" size={26} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: "center",
    height: 46,
    alignItems: "center",
    width: 46,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
    color: "#FFF",
  },
  icon: {
    color: "#FFF",
  },
  wrapper: {
    position: "absolute",
    left: 0,
    marginTop: 28,
    width: "100%",
    marginBottom: 0,
    alignItems: "center",
    backgroundColor: "#7DE5ED",
    top: 0,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
});

export default Header;
