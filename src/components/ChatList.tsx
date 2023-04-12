import { FlatList } from "react-native";
import ChatListItem from "./ChatListItem";

type ChatListProps = {
  chats,
}

const ChatList = (props: ChatListProps) => {

  const DATA = Object.keys(props.chats).map(key => ({
    name: key,
    chatId: props.chats[key]
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
