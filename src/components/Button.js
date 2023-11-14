import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useContext, useId } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NameContext } from "../global/context";

const Button = ({
  categoryPlaceholder,
  clientPlaceholder,
  noteText,
  setModalVisible,
  modalVisible,
}) => {
  const [data, setData] = useContext(NameContext);
  const id = useId();

  //   useEffect(() => {
  //     const storeValue = async () => {
  //       if (data?.length != 0) {
  //         const jsonValue = JSON.stringify(data);
  //         await AsyncStorage.setItem("my-key", jsonValue);
  //       }
  //     };
  //     storeValue();
  //   }, [data?.length]);

  return (
    <TouchableOpacity
      onPress={async () => {
        setData([
          { id, categoryPlaceholder, clientPlaceholder, noteText },
          ...data,
        ]);
        setModalVisible(!modalVisible);
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add Note</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "black",
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
