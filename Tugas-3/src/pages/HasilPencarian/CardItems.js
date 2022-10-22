import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome5.js";

class CardItems extends Component {
  constructor(props) {
    super(props);
    this.jadwal = props.data;
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{ marginBottom: 28, flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>
            {this.jadwal.keberangkatan.nama}
          </Text>
          <Text style={{ marginHorizontal: 12 }}>-</Text>
          <Text style={{ fontWeight: "bold" }}>{this.jadwal.tujuan.nama}</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginBottom: 12,
            flexDirection: "row",
          }}
        >
          <View style={styles.iconWrapper}>
            <FontAwesome size={26} name="plane" color="#7DE5ED" />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {this.jadwal.maskapai.nama}
          </Text>
        </View>

        <View>
          <Text
            style={{ color: "#51519D", fontWeight: "bold", textAlign: "right" }}
          >
            | {this.jadwal.berangkat} |
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    padding: 22,
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    width: 38,
    height: 38,
    transform: [{ rotateZ: "-90deg" }],
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardItems;
