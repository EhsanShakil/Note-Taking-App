import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const DropDown = ({ placeholder, setCategoryPlaceholder, data }) => {
  const [show, setShow] = useState(false);
  const showData = data.categories || data.clients;
  return (
    <>
      <Pressable onPress={() => setShow(!show)} style={styles.pressable}>
        <TextInput
          style={styles.text}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor="black"
        />
        <Pressable onPress={() => setShow(!show)}>
          <Entypo name="chevron-down" size={24} color="black" />
        </Pressable>
      </Pressable>
      <View style={styles.dropdown}>
        {show &&
          showData.map((item) => (
            <Pressable
              onPress={() => {
                setShow(!show);
                setCategoryPlaceholder(item.category || item.client);
              }}
              style={styles.dropdownOption}
            >
              <Text style={styles.dropdownText}>
                {item.category || item.client}
              </Text>
            </Pressable>
          ))}
      </View>
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    height: 35,
    paddingLeft: 10,
  },
  dropdown: {
    width: "100%",
    marginTop: 10,
  },
  dropdownOption: {
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  dropdownText: {
    textAlign: "center",
  },
});
