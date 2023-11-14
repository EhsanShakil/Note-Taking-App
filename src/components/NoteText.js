import { TextInput, StyleSheet } from "react-native";
import React from "react";

const NoteText = ({ setNoteText, noteText }) => {
  return (
    <TextInput
      value={noteText}
      onChangeText={(text) => setNoteText(text)}
      style={styles.text}
      placeholder={"Enter your note"}
      placeholderTextColor="black"
    />
  );
};

export default NoteText;

const styles = StyleSheet.create({
  text: {
    height: 35,
    paddingLeft: 10,
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 15,
  },
});
