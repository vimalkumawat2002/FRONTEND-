import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const FooterMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5 name="home" style={styles.iconstyle} />
        <Text style={{ marginHorizontal: 5 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <FontAwesome5 name="plus-square" style={styles.iconstyle} />
        <Text>post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Myposts")}>
        <FontAwesome5 name="list" style={styles.iconstyle} />
        <Text>MyPosts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwesome5 name="user" style={styles.iconstyle} />
        <Text style={{ marginHorizontal: 5 }}>account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 6,
    backgroundColor: "skyblue",
    borderRadius: 10,
    height: 70,
  },
  iconstyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 8,
  },
});

export default FooterMenu;
