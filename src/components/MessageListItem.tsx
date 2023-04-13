import { useAtomValue } from 'jotai';
import { Image, StyleSheet, Text, View } from 'react-native';
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
        {props.type === "text" ? 
          (<Text style={styles.text}>
            {props.message}
          </Text>)
          :
          (<Image  style={styles.image} source={{uri: `data:image/png;base64,${props.message}`}}/>)
        }
    </View>
  )
}

const styles = StyleSheet.create({
  boxSelf: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#005F00',
    maxWidth: 200,
    borderRadius: 25,
  },
  boxFriend: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#00405F',
    maxWidth: 200,
    borderRadius: 25,
  },
  text: {
    padding: 10,
    fontSize: 15,
    marginHorizontal: 5,
  },
  image: {
    height: 128,
    width: 128,
    resizeMode: 'cover',
    margin: 5,
    borderRadius:25,
  }
});

export default MessageListItem;