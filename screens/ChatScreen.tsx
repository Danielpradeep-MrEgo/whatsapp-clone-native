import * as React from "react";
import { StyleSheet,FlatList } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatItems";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import chatRooms from "../constants/data/ChatRooms";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={chatRooms[0]} /> */}
      <FlatList style={{width:"100%"}} data={chatRooms} renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
