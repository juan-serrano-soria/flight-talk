import { Text } from 'react-native';

type MessageListItemProps = {
  from: string,
  message: string,
  type: string
};

const MessageListItem = (props: MessageListItemProps) => {
  return (
    <Text style={{ padding: 20, fontSize: 15 }}>
      {props.from}: {props.message}
    </Text>
  )
}

export default MessageListItem;