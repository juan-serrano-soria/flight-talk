import { FlatList } from "react-native";
import { useAtomValue } from "jotai/react";
import ChatListItem from "./ChatListItem";
import { currentUserData } from "../state/state";


const ChatList = () => {

  const currentUser = useAtomValue(currentUserData);
  const friends = currentUser[Object.keys(currentUser)[0]]['friends']

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
