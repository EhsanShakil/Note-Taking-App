import {
  View,
  Text,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DropDown from "./DropDown";
import categories from "../data/categories.json";
import clients from "../data/clients.json";
import NoteText from "./NoteText";
import Button from "./Button";
import { Entypo } from "@expo/vector-icons";

const CustomModal = ({ modalVisible, setModalVisible }) => {
  const [categoryPlaceholder, setCategoryPlaceholder] = useState("Categories");
  const [clientPlaceholder, setClientPlaceholder] = useState("Clients");
  const [noteText, setNoteText] = useState("");
  return (
    <Modal
      style={{ margin: 0 }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <KeyboardAvoidingView behavior={"padding"} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.heading}>
            <Text style={styles.text}>Add a Note</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Entypo name="circle-with-cross" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <NoteText noteText={noteText} setNoteText={setNoteText} />
          <DropDown
            placeholder={categoryPlaceholder}
            setCategoryPlaceholder={setCategoryPlaceholder}
            data={categories}
          />
          <DropDown
            placeholder={clientPlaceholder}
            setCategoryPlaceholder={setClientPlaceholder}
            data={clients}
          />
          <Button
            categoryPlaceholder={categoryPlaceholder}
            clientPlaceholder={clientPlaceholder}
            noteText={noteText}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    margin: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
