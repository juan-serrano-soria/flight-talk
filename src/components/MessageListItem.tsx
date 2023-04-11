import { useAtomValue } from 'jotai';
import { StyleSheet, Text, View } from 'react-native';
import { currentUserData } from '../state/state';

type MessageListItemProps = {
  from: string,
  message: string,
  type: string
};

const MessageListItem = (props: MessageListItemProps) => {

  const currentUser = useAtomValue(currentUserData)["user"];

  return (
    <View style={ props.from === currentUser ? styles.boxSelf : styles.boxFriend }>
        <Text style={styles.text}>
          {props.message}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxSelf: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    maxWidth: 200,
    borderRadius: 25,
  },
  boxFriend: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    maxWidth: 200,
    borderRadius: 25,
  },
  text: {
    padding: 10,
    fontSize: 15,
  }
});

export default MessageListItem;