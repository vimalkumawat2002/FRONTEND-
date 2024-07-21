import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";

const Account = () => {
  // state
  const [state, setState] = useContext(AuthContext);
  const { user } = state;
  // local state
  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [email] = useState(user?.email);
  const [loading, setLoading] = useState(false);

  //handle update user data
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        " http://192.168.29.161:8081/api/v1/auth/update-user",
        {
          name,
          password,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${state?.token}`,
          },
        }
      );
      setLoading(false);
      let UD = JSON.stringify(data);
      setState({ ...state, user: UD?.updatedUser });
      alert(data && data.message);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            }}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <Text style={styles.warningtext}>
          Currently You Can Only Update Your Name And Password*
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            value={name}
            style={styles.inputBox}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput value={email} style={styles.inputBox} editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            value={password}
            style={styles.inputBox}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Role</Text>
          <TextInput
            value={state?.user.role}
            style={styles.inputBox}
            editable={false}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
            <Text style={styles.updateBtnText}>
              {loading ? "Please Wait" : "Update Profile"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.container_1}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#af9f85",
    height: "100%",
    width: "100%",
  },
  container_1: {
    flex: 1,
    justifyContent: "flex-end",
  },
  warningtext: {
    fontSize: 13,
    color: "red",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontWeight: "bold",
    width: 70,
    color: "#000",
  },
  inputBox: {
    width: 250,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 5,
  },
  updateBtn: {
    backgroundColor: "black",
    color: "white",
    height: 40,
    width: 250,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  updateBtnText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
