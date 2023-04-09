import { Button, StyleSheet, Text, View } from "react-native";
import MessageList from "../components/MessageList";

const ChatDetail = ({ route, navigation }) => {
  const { name, chatId } = route.params.props;

  const testMessages = {
    "1680258796213": {
      "from": "testUser1",
      "message": "Hello!",
      "type": "text"
    },
    "1680258776213": {
      "from": "testUser2",
      "message": "How are you?",
      "type": "text"
    },
    "1680258676213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680258596213": {
      "from": "testUser1",
      "message": "Hello!",
      "type": "text"
    },
    "1680258476213": {
      "from": "testUser2",
      "message": "How are you?",
      "type": "text"
    },
    "1680258376213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680258296213": {
      "from": "testUser1",
      "message": "Hello!",
      "type": "text"
    },
    "1680258176213": {
      "from": "testUser2",
      "message": "How are you?",
      "type": "text"
    },
    "1680258076213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680257076213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680256096213": {
      "from": "testUser1",
      "message": "Hello!",
      "type": "text"
    },
    "1680255076213": {
      "from": "testUser2",
      "message": "How are you?",
      "type": "text"
    },
    "1680254076213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680253076213": {
      "from": "testUser2",
      "message": "Hello World!",
      "type": "text"
    },
    "1680252096213": {
      "from": "testUser1",
      "message": "Hello!",
      "type": "text"
    },
    "1680251076213": {
      "from": "testUser2",
      "message": "How are you?",
      "type": "text"
    },
    "1680250076213": {
      "from": "testUser2",
      "message": "Hello World!",
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
      <View style={{ width: '100%' }}>
        <MessageList messages={testMessages} />
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
  }
});

export default ChatDetail;
