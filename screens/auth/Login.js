import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import InputBox from "../../components/forms/Inputbox";
import SubmitButton from "../../components/forms/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/AuthContext";

const Login = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // function
  // btn function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "http://192.168.29.161:8081/api/v1/auth/login",
        { email, password }
      );
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);

      navigation.navigate("Home");
      console.log("Login Data===> ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("local : ", data);
  };
  getLocalStorageData();
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 40, justifyContent: "center", textAlign: "center" }}
      >
        Login
      </Text>

      <View>
        <InputBox
          inputTitle={"Email"}
          inputPlaceholder={"Enter Your Email"}
          keyboardType="email-Password"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          inputPlaceholder={"Enter Your Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <View>
        <SubmitButton
          BtnTitle="Login"
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <Text style={styles.linkText}>
          Please Register Your Account
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#af9f85",
  },

  name: {
    borderWidth: 2,
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
    marginLeft: 15,
    marginRight: 15,
  },
  btn: {
    backgroundColor: "#af9f85",
    borderRadius: 10,
    width: 120,
    marginLeft: 140,
    marginRight: 30,
    marginTop: 20,
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
    textAlign: "center",
  },
});
