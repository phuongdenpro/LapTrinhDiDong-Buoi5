import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  // const array = [
  //   {
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   },{
  //     name: "Ca nấu lẩu, nấu mì mini...",
  //     shopName: "Devang",
  //     imgUrl: "./img/ca_nau_lau.png",
  //   }]
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.top1}>
          <Text>Chat</Text>
        </View>

        <View style={styles.top2}>
          <Text style={styles.textTop}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
          <View style={styles.flatlist}>
            <FlatList
              data={[
                {
                  name: "Ca nấu lẩu, nấu mì mini...",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "1KG KHÔ GÀ BƠ TỎI",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "Xe cần cẩu đa năng",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "Đồ chơi dạng mô hình",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "Lãnh đạo giản đơn",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "Hiểu lòng con trẻ",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
                {
                  name: "Donal Trump Thiên tài lãnh đạo",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },{
                  name: "Donal Trump Thiên tài lãnh đạo",
                  shopName: "Devang",
                  imgUrl: require('./img/ca_nau_lau.png'),
                },
              ]}
              renderItem={({ item }) => (
                <View>
                  <Image source={item.imgUrl}></Image>
                  <Text style={styles.item}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text>Home</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerBody: {
    flex: 1,
    marginTop: 30,
  },
  top1: {
    backgroundColor: "#1BA9FF",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  top2: {
    marginHorizontal: 20,
  },
  textTop: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    //  textAlign: 'left'
  },
  flatlist: {
    marginTop: 0,
  },
  bottom: {
    backgroundColor: "#1BA9FF",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
