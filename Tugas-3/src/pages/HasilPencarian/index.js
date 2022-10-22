import Header from "./Header.js";
import { Component } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import CardItems from "./CardItems.js";
import Notification from "../components/Notification.js";
import Footer from "../components/Footer.js";

class HasilPencarian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jadwal: [
        {
          id: "J-01",
          bandaraKodeKeberangkatan: "B-01",
          bandaraKodeTujuan: "B-02",
          maskapaiId: "M-03",
          berangkat: "12-11-2001 12:11 PM",
        },
        {
          id: "J-02",
          bandaraKodeKeberangkatan: "B-03",
          bandaraKodeTujuan: "B-02",
          maskapaiId: "M-02",
          berangkat: "12-11-2001 12:20 PM",
        },
        {
          id: "J-03",
          bandaraKodeKeberangkatan: "B-02",
          bandaraKodeTujuan: "B-01",
          maskapaiId: "M-04",
          berangkat: "12-11-2001 20:12 PM",
        },
      ],
      maskapai: [
        { id: "M-01", nama: "All Nippon Japan" },
        { id: "M-02", nama: "ANA Wings" },
        { id: "M-03", nama: "Air Busan" },
        { id: "M-04", nama: "Air Seoul" },
      ],
      bandara: [
        { kode: "B-01", nama: "Bandara Toshima" },
        { kode: "B-02", nama: "Bandara Gunsan" },
        { kode: "B-03", nama: "Bandara Gwangju" },
      ],
    };
  }

  renderList({ item }) {
    return <CardItems data={item} />;
  }

  getDaftarKeberangakatan() {
    const daftarKeberangkatan = [];
    const { jadwal, maskapai, bandara } = this.state;
    jadwal.forEach((dataJadwal) => {
      const data = { ...dataJadwal };
      data.keberangkatan = bandara.find(
        (item) => item.kode === data.bandaraKodeKeberangkatan
      );
      data.tujuan = bandara.find(
        (item) => item.kode === data.bandaraKodeTujuan
      );
      data.maskapai = maskapai.find((item) => item.id === data.maskapaiId);
      daftarKeberangkatan.push(data);
    });
    return daftarKeberangkatan;
  }

  render() {
    const daftarKeberangkatan = this.getDaftarKeberangakatan();
    return (
      <View style={styles.wrapper}>
        <Notification />
        <Header navigation={this.props.navigation} />
        <View style={styles.head}>
          <Text style={[styles.textWhite, styles.textCenter]}>
            Hasil Pencarian Keberangkatan
          </Text>
          <Text style={[styles.textWhite, styles.textCenter]}>12-11-2022</Text>
        </View>
        <SafeAreaView style={{ padding: 12 }}>
          <FlatList
            data={daftarKeberangkatan}
            renderItem={this.renderList}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#7DE5ED",
    marginTop: 46,
    paddingVertical: 18,
    borderBottomRightRadius: 8,
    textAlign: "center",
    borderBottomLeftRadius: 8,
  },
  wrapper: {
    backgroundColor: "#F0F0F0",
    position: "relative",
    flex: 1,
  },
  textCenter: {
    textAlign: "center",
  },
  textWhite: {
    color: "#fff",
  },
});

export default HasilPencarian;
