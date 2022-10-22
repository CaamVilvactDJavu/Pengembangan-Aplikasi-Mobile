import Form from "./Form.js";
import { StyleSheet, Button, View } from "react-native";
import { Component } from "react";

class CardForms extends Component {
  search() {
    this.props.navigation.navigate("SearchResult");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <View style={[styles.mb3]}>
            <Form
              placeholder="Masukkan lokasi keberangkatan"
              icon="plane-departure"
              label="Lokasi Keberangkatan"
            />
          </View>
          <View style={[styles.mb3]}>
            <Form
              icon="plane-arrival"
              placeholder="Masukan lokasi tujuan"
              label="Lokasi Tujuan"
            />
          </View>
          <View style={[styles.mb3]}>
            <Form
              placeholder="Masukan tanggal keberangkatan"
              icon="calendar"
              label="Tanggal Keberangkatan"
            />
          </View>
          <View style={[styles.mb3]}>
            <Button
              color="#3C4048"
              onPress={() => this.search()}
              title="Cari"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mb3: {
    marginBottom: 18,
  },
  card: {
    padding: 18,
    shadowColor: "#000",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowOffset: {
      height: 3,
      width: 3,
    },
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  wrapper: {
    marginTop: 88,
    paddingHorizontal: 34,
  },
});

export default CardForms;
