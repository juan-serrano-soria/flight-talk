import { Pressable, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

type ChatInputBoxProps = {
  onSendImage: any,
  currentText: string,
  onChangeText: any,
  onSendText: any,
}

const ChatInputBox = (props: ChatInputBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Pressable
          android_ripple={styles.ripple}
          style={styles.pressable}
          onPress={props.onSendImage}
        >
          <Feather name={'image'} size={30} color={"grey"} />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.currentText}
        />
      </View>
      <View style={styles.iconContainer}>
      <Pressable
        android_ripple={styles.ripple}
        style={styles.pressable}
        onPress={props.onSendText}
      >
        <Feather name={'arrow-right'} size={30} color={"grey"} />
      </Pressable>
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
    width: '15%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    color: '#737373',
    borderless: true,
  },
  pressable: {
    borderWidth: 0,
    borderRadius: 15,
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '70%',
    padding: 0,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 0,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 15,
  },
});

export default ChatInputBox;
