import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputBox = ({
  inputTitle,
  inputPlaceholder,
  autoComplete,
  keyboardType,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View>
      <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 18 }}>
        {inputTitle}
      </Text>
      <TextInput
        style={styles.name}
        placeholder={inputPlaceholder}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
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
});
