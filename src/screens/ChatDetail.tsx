import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import MessageList from "../components/MessageList";

const ChatDetail = ({ route, navigation }) => {
  const { name, chatId } = route.params.props;

  const testMessages = {
    "1680258796213": {
      "from": "testUser1",
      "message": "1Hello! This is a long ass message to try max width",
      "type": "text"
    },
    "1680258776213": {
      "from": "testUser2",
      "message": "2How are you?",
      "type": "text"
    },
    "1680258676213": {
      "from": "testUser2",
      "message": "3Hello",
      "type": "text"
    },
    "1680258596213": {
      "from": "testUser1",
      "message": "4Hello!",
      "type": "text"
    },
    "1680258476213": {
      "from": "testUser2",
      "message": "5How are you?",
      "type": "text"
    },
    "1680258376213": {
      "from": "testUser2",
      "message": "6Hello World!",
      "type": "text"
    },
    "1680258296213": {
      "from": "testUser1",
      "message": "7Hello!",
      "type": "text"
    },
    "1680258176213": {
      "from": "testUser2",
      "message": "8How are you?",
      "type": "text"
    },
    "1680258076213": {
      "from": "testUser2",
      "message": "9Hello World!",
      "type": "text"
    },
    "1680257076213": {
      "from": "testUser2",
      "message": "10Hello World!",
      "type": "text"
    },
    "1680256096213": {
      "from": "testUser1",
      "message": "11Hello!",
      "type": "text"
    },
    "1680255076213": {
      "from": "testUser2",
      "message": "12How are you?",
      "type": "text"
    },
    "1680254076213": {
      "from": "testUser2",
      "message": "13Hello World!",
      "type": "text"
    },
    "1680253076213": {
      "from": "testUser2",
      "message": "14Hello World!",
      "type": "text"
    },
    "1680252096213": {
      "from": "testUser1",
      "message": "15Hello!",
      "type": "text"
    },
    "1680251076213": {
      "from": "testUser2",
      "message": "16How are you?",
      "type": "text"
    },
    "1680250076213": {
      "from": "testUser2",
      "message": "17Hello Pepe!",
      "type": "text"
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{"Chat with " + name}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => {navigation.navigate("Chats")}} title="<-"/>
      </View>
      <View style={{ width: '100%', flex: 1 }}>
        <MessageList messages={testMessages} />
      </View>
      <View style={styles.inputBoxContainer}>
        <View style={styles.selectImage}>
          <Button onPress={() => {}} title="+"/>
        </View>
        <TextInput 
          style={styles.input}
        />
        <View style={styles.selectImage}>
          <Button onPress={() => {}} title=">"/>
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
