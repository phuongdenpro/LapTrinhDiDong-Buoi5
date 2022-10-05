import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.top1}>
          <Text style={[{color:'#fff', fontSize:20, fontWeight:'bold'}]}>Chat</Text>
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
                  imgUrl: require("./img/ca_nau_lau.png"),
                },
                {
                  name: "1KG KHÔ GÀ BƠ TỎI",
                  shopName: "LTD Foot",
                  imgUrl: require("./img/ga_bo_toi.png"),
                },
                {
                  name: "Xe cần cẩu đa năng",
                  shopName: "Thế giới đồ chơi",
                  imgUrl: require("./img/xa_can_cau.png"),
                },
                {
                  name: "Đồ chơi dạng mô hình",
                  shopName: "Thế giới đồ chơi",
                  imgUrl: require("./img/do_choi_dang_mo_hinh.png"),
                },
                {
                  name: "Lãnh đạo giản đơn",
                  shopName: "Minh Long Book",
                  imgUrl: require("./img/lanh_dao_gian_don.png"),
                },
                {
                  name: "Hiểu lòng con trẻ",
                  shopName: "Minh Long Book",
                  imgUrl: require("./img/hieu_long_con_tre.png"),
                },
                {
                  name: "Donal Trump Thiên tài lãnh đạo",
                  shopName: "Minh Long Book",
                  imgUrl: require("./img/trump1.png"),
                },
              ]}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <View style={styles.img}>
                    <Image source={item.imgUrl}></Image>
                  </View>
                  <View style={styles.text}>
                    <Text style={[{color:'black', fontSize:15}]}>{item.name}</Text>
                    <Text style={[{color:'red', fontWeight:'bold'}]}>Shop {item.shopName}</Text>
                  </View>
                  <TouchableOpacity
                    style={[{ backgroundColor: "red" }, styles.button]}
                  >
                    <Text>Chat</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={[{color:'#fff', fontSize:20, fontWeight:'bold'}]}>Home</Text>
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
  item: {
    marginTop: 15,
    flexDirection: "row",
    flex: 1,
  },
   img: { flex: 1 },
  text: {
    marginTop:10,
    flex: 2,
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:30,
    height:50
  }
});
