import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View } from 'react-native';

type ChatListItemProps = {
  name: string,
  chatId: number
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        android_ripple={styles.ripple}
        onPress={() => {navigation.navigate('ChatDetail', { props })}}
      >
        <Text style={styles.text}>
          {props.name}
        </Text>
      </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    overflow: 'hidden',
    borderRadius: 0,
  },
  pressable: {
    backgroundColor: "#575757",
  },
  ripple: {
    color: '#A9A9A9',
    borderless: true
  },
  text: {
    padding: 20,
    fontSize: 15,
  }
});

export default ChatListItem;
