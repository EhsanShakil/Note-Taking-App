import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { NameContext } from "../global/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  const [data, setData] = useContext(NameContext);

  const localStorage = async () => {
    if (data?.length != 0) {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("my-key", jsonValue);
    }
    const value = await AsyncStorage.getItem("my-key");
    if (data?.length === 0) {
      setData(JSON.parse(value));
    }
  };

  useEffect(() => {
    localStorage();
  }, [data?.length]);

  const deleteNote = (id) => {
    const _data = data?.filter((item) => item.id !== id);
    setData(_data);
    const storeValue = async () => {
      if (data?.length != 0) {
        const jsonValue = JSON.stringify(_data);
        await AsyncStorage.setItem("my-key", jsonValue);
      }
    };
    storeValue();
  };

  return (
    <View>
      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>No data found</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.headingDirection}>
              <Text style={styles.headingText}>{`${index + 1}) ${
                item.noteText
              }`}</Text>
              <TouchableOpacity
                onPress={() => deleteNote(item.id)}
                style={styles.deleteIcon}
              >
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.direction}>
                <Text style={styles.font}>{"Note Text: "}</Text>
                <Text>{item.noteText}</Text>
              </View>
              <View style={styles.direction}>
                <Text style={styles.font}>{"Category: "}</Text>
                <Text>{item.categoryPlaceholder}</Text>
              </View>
              <View style={styles.direction}>
                <Text style={styles.font}>{"Client: "}</Text>
                <Text>{item.clientPlaceholder}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  direction: {
    flexDirection: "row",
    marginVertical: 5,
  },
  font: {
    fontSize: 14,
    fontWeight: "bold",
  },
  headingDirection: { flexDirection: "row", justifyContent: "space-between" },
  headingText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  deleteIcon: {
    alignItems: "flex-end",
  },
});
