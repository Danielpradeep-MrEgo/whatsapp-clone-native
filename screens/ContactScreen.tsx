import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import ChatListItem from "../components/ChatItems";
import EditScreenInfo from "../components/EditScreenInfo";
import NewMessage from "../components/NewMessageButton/NewMessage";
import { Text, View } from "../components/Themed";
import chatRooms from "../constants/data/ChatRooms";
import user from "../constants/data/Users";

export default function ContactScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={chatRooms}
				renderItem={({ item }) => <ChatListItem user={item} />}
				keyExtractor={(item) => item.id}
			/>
			<NewMessage />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
