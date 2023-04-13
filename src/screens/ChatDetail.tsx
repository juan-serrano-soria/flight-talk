import { Button, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import MessageList from "../components/MessageList";
import { database } from "../firebase";
import { useAtomValue } from "jotai";
import { currentUserName } from "../state/state";
import { launchImageLibrary } from "react-native-image-picker";

const ChatDetail = ({ route, navigation }) => {
  const { name, chatId } = route.params.props;
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState({});
  const currentUser = useAtomValue(currentUserName);

  useEffect(() => {
    const chatRef = ref(database, 'chats/' + chatId);
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data["messages"])
    });
  }, []);

  const onSendTextMessage = () => {
    const timeStamp = Date.now();

    set(ref(database, 'chats/' + chatId + "/messages/" + timeStamp), {
      from: currentUser,
      message: currentMessage,
      type: "text"
    });

    setCurrentMessage("");
  };

  const onSendImageMessage = async () => {

    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: true,
      maxHeight: 512,
      maxWidth: 512,
    });

    if (!result.didCancel) {
      const timeStamp = Date.now();

      set(ref(database, 'chats/' + chatId + "/messages/" + timeStamp), {
        from: currentUser,
        message: result.assets[0].base64,
        type: "image"
      });
    } else {
      Alert.alert('Warning!', 'You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{"Chat with " + name}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => {navigation.navigate("Chats")}} title="<-"/>
      </View>
      <View style={{ width: '100%', flex: 1 }}>
        <MessageList messages={messages} />
      </View>
      <View style={styles.inputBoxContainer}>
        <View style={styles.selectImage}>
          <Button onPress={onSendImageMessage} title="+"/>
        </View>
        <TextInput 
          style={styles.input}
          onChangeText={setCurrentMessage}
          value={currentMessage}
        />
        <View style={styles.selectImage}>
          <Button onPress={onSendTextMessage} title=">"/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  button: {
    width: "70%",
    margin: 5,
  },
  input: {
    height: 40,
    width: '70%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  selectImage: {
    paddingTop: 7.5,
    width: '10%',
  },
  inputBoxContainer: {
    flexDirection: 'row',
  },
});

export default ChatDetail;
