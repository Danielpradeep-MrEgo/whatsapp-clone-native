import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ChatRoom } from "../.././types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};
const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View>
        <Text>{user.name}</Text>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
      </View>
      <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  );
};

export default ChatListItem;

// const styles = StyleSheet.create({});
