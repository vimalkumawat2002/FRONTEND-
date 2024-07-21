import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import FooterMenu from "../components/Menus/FooterMenu";
const about = () => {
  const { state } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> Home</Text>
      <Text> {JSON.stringify(state, null, 4)}</Text>
      <FooterMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 40,
  },
});
export default about;
