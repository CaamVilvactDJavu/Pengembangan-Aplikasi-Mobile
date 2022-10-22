import { Component } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome.js";
import info from "../../copyright/info.js";
import Ionicons from "react-native-vector-icons/Ionicons.js";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

class Header extends Component {
  backToSearch() {
    this.props.navigation.navigate("Search");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          style={styles.iconWrapper}
          underlayColor="#81C6E8"
          onPress={() => this.backToSearch()}
        >
          <Ionicons style={styles.icon} name="arrow-back" size={30} />
        </TouchableHighlight>
        <View>
          <Text style={styles.title}>{info.title}</Text>
        </View>
        <TouchableHighlight
          underlayColor="#81C6E8"
          style={styles.iconWrapper}
          onPress={() => {}}
        >
          <FontAwesome style={styles.icon} name="user" size={26} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  iconWrapper: {
    justifyContent: "center",
    width: 46,
    height: 46,
    alignItems: "center",
  },
  wrapper: {
    marginBottom: 0,
    marginTop: 28,
    width: "100%",
    top: 0,
    zIndex: 2,
    backgroundColor: "#7DE5ED",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    left: 0,
  },

  icon: {
    color: "#FFF",
  },
});

export default Header;
