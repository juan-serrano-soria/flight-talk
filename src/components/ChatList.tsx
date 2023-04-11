import { FlatList } from "react-native";
import { useAtomValue } from "jotai/react";
import ChatListItem from "./ChatListItem";
import { currentUserData, currentUserFriends } from "../state/state";


const ChatList = () => {

  const friends = useAtomValue(currentUserFriends);

  const DATA = Object.keys(friends).map(key => ({
    name: key,
    chatId: friends[key]
  }));

  return (
    <FlatList
      data={DATA}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => { return <ChatListItem name={item.name} chatId={item.chatId} />}}
    />
  )
}

export default ChatList;
