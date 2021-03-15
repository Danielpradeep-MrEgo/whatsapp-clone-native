import moment from "moment";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom } from "../.././types";
import styles from "./style";
import {useNavigation} from "@react-navigation/native"
import ChatRoomScreen from "../../screens/ChatRoomScreen"

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};
const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[0];
  const navigation = useNavigation()
  const onClick = () => {
    navigation.navigate("ChatRoomScreen")
  }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={1} style={styles.lastMessage} ellipsizeMode="tail">{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text  style={styles.timestamp}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;

// const styles = StyleSheet.create({});
