import { FlatList } from "react-native";
import { useAtomValue } from "jotai/react";
import MessageListItem from "./MessageListItem";
import { currentUserData } from "../state/state";


type MessageListProps = {
  messages,
}

const MessageList = (props: MessageListProps) => {

  const DATA = Object.keys(props.messages).map(key => ({
    from: props.messages[key]["from"],
    message: props.messages[key]["message"],
    type: props.messages[key]["type"],
  }));

  return (
    <FlatList
      data={DATA}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => { return <MessageListItem from={item.from} message={item.message} type={item.type}/>}}
    />
  )
}

export default MessageList;