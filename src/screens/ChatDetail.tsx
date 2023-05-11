import { StyleSheet, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import MessageList from "../components/MessageList";
import { database } from "../firebase";
import { useAtomValue } from "jotai";
import { currentUserName } from "../state/state";
import { launchImageLibrary } from "react-native-image-picker";
import ChatDetailHeader from "../components/ChatDetailHeader";
import ChatInputBox from "../components/ChatInputBox";

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

    if (!currentMessage.replace(/\s/g, '').length) {
      setCurrentMessage("");
      return
    }
  
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
      <ChatDetailHeader name={"Chat with " + name} navigation={navigation}/>
      <View style={{ width: '100%', flex: 1 }}>
        <MessageList messages={messages} />
      </View>
      <ChatInputBox onSendImage={onSendImageMessage} currentText={currentMessage} onChangeText={setCurrentMessage} onSendText={onSendTextMessage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#303030'
  },
});

export default ChatDetail;
