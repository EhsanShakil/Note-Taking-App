import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomModal from "./CustomModal";

const AddButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.addButton}
      >
        <AntDesign name="pluscircle" size={50} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    //   backgroundColor: "#fff", //need to change
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
