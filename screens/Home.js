import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { PostContext } from "@/context/postContext";
import PostCard from "../components/PostCard";
import FooterMenu from "@/components/Menus/FooterMenu";

const Home = () => {
  const [posts] = useContext(PostContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
        {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
      </ScrollView>
      <View style={styles.container_1}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#af9f85",
  },
  container_1: {
    backgroundColor: "#fff",
  },
});
