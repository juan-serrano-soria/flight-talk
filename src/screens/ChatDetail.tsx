import { Button, StyleSheet, Text, View } from "react-native";

const ChatDetail = ({ route, navigation }) => {
  const { name, chatId } = route.params.props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{"Chat with " + name}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => {navigation.navigate("Chats")}} title="<-"/>
      </View>
      <Text>{chatId}</Text>
      <Text>Here there would be the FlatList of messages</Text>
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
