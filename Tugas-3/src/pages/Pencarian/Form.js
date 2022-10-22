import FontAwesome from "react-native-vector-icons/FontAwesome5.js";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Component } from "react";

class Form extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.iconWrapper}>
            <FontAwesome style={styles.icon} size={20} name={this.props.icon} />
          </View>
          <TextInput
            placeholder={this.props.placeholder}
            style={styles.input}
            onChangeText={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: "center",
    position: "absolute",
    width: 40,
  },
  inputWrapper: {
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
  },
  input: {
    borderColor: "#7a7a7a",
    paddingLeft: 38,
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    flex: 1,
    padding: 10,
  },

  icon: {
    color: "#7DE5ED",
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
  },
});

export default Form;
