import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderMenu = () => {
  const [state, setState] = useContext(AuthContext);

  // logout

  const handlelogout = async () =>{

    setState({token:'',user: null})
    await AsyncStorage.removeItem('@auth')
    alert('logout successfully');
  }
  return (
    <View>
      <TouchableOpacity onPress={handlelogout}>
        <FontAwesome5
          style={styles.iconStyle}
          name="sign-out-alt"
          color={"red"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});
