import { Text } from 'react-native';

type ChatListItemProps = {
  name: string,
  chatId: number
};

const ChatListItem = (props: ChatListItemProps) => {
  return (
    <Text style={{ padding: 20, fontSize: 15 }}>
      {props.name}: {props.chatId}
    </Text>
  )
}

export default ChatListItem;
