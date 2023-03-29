import { Text, View } from "react-native";

const Chats = ({ navigation }) => {

  const logOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Here are the chats</Text>
      <Text  style={{ padding: 10}} onPress={logOut}>Log out</Text>
    </View>
  )
}

export default Chats;
