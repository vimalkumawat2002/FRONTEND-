import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/forms/Inputbox";
import SubmitButton from "../../components/forms/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "http://192.168.29.161:8081/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      alert(data && data.message);
      navigation.navigate("Login");
      console.log("Register Data===> ", { name, email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 40, justifyContent: "center", textAlign: "center" }}
      >
        Register
      </Text>

      <View>
        <InputBox
          inputTitle={"Name"}
          inputPlaceholder={"Enter Your Name"}
          value={name}
          setValue={setName}
        />
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
          BtnTitle="Register"
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <Text style={styles.linkText}>
          Already Register Please{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.link}
          >
            LOGIN
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

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
  },
});
