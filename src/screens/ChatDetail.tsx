import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import MessageList from "../components/MessageList";
import { database } from "../firebase";

const ChatDetail = ({ route, navigation }) => {
  const { name, chatId } = route.params.props;
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    console.log("Hago stuff con: " + 'chats/' + chatId);
    const chatRef = ref(database, 'chats/' + chatId);
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data["messages"])
    });
  }, []);

  const onSendTextMessage = () => {
    // send message to firebase

    setCurrentMessage("");
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
          <Button onPress={() => {}} title="+"/>
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
