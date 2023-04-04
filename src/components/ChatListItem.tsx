import { useNavigation } from '@react-navigation/native';
import { Text, Pressable } from 'react-native';

type ChatListItemProps = {
  name: string,
  chatId: number
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => {navigation.navigate('ChatDetail', { props })}}
    >
      <Text style={{ padding: 20, fontSize: 15 }}>
        {props.name}: {props.chatId}
      </Text>
    </Pressable>
  )
}

export default ChatListItem;
