import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from "react-native-vector-icons/Feather";

type ChatDetailHeaderProps = {
  name: string,
  navigation: any,
}

const ChatDetailHeader = (props: ChatDetailHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Pressable
          android_ripple={styles.ripple}
          style={styles.pressable}
          onPress={() => {props.navigation.navigate("Chats")}}
        >
          <Feather name={'chevron-left'} size={30} color={"grey"} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  iconContainer: {
    width: 50,
    height: '100%',
    borderRadius: 15,
    margin: 0,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  ripple: {
    color: '#737373',
    borderless: true,
  },
  pressable: {
    borderWidth: 0,
    borderRadius: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatDetailHeader;
