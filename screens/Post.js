import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { PostContext } from "@/context/postContext";

const Post = ({ navigation }) => {
  const [posts, setPosts] = useContext(PostContext);
  // local state
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");
  const [loading, setLoading] = useState(false);

  //handle form data post DATA
  const handlePost = async () => {
    try {
      setLoading(true);
      if (!title) {
        alert("Please add post title ");
      }

      if (!description) {
        alert("Please add post  description");
      }
      const { data } = await axios.post(
        "http://192.168.29.161:8081/api/v1/post/create-post",
        {
          title,
          description,
        }
      );
      setLoading(false);
      setPosts([...posts, data?.posts]);
      alert(data?.message);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.response.data.message || error.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Create a post</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="add post title"
            placeholderTextColor={"gray"}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="add post description"
            placeholderTextColor={"gray"}
            multiline={true}
            numberOfLines={6}
            value={description}
            onChangeText={(text) => setDecription(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
            <Text style={styles.postBtnText}>
              <FontAwesome5 name="plus-square" size={18} /> {"  "}
              Create post
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#af9f85",
  },
  container_1: {
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    textAlignVertical: "top",
    paddingTop: 10,
    width: 320,
    marginTop: 30,
    fontSize: 16,
    paddingLeft: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  postBtn: {
    backgroundColor: "black",
    width: 300,
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Post;
