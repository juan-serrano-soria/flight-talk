import { Text } from 'react-native';

type ChatListItemProps = {
  name: string,
  chatId: number
};

const ChatListItem = (props: ChatListItemProps) => {
  return (
    <Text>
      {props.name}: {props.chatId}
    </Text>
  )
}

export default ChatListItem;
