import { FlatList } from "react-native";
import MessageListItem from "./MessageListItem";


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
      data={DATA.reverse()}
      showsVerticalScrollIndicator={false}
      inverted
      renderItem={({ item }) => { return <MessageListItem from={item.from} message={item.message} type={item.type}/>}}
    />
  )
}

export default MessageList;