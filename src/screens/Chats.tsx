import { useSetAtom } from "jotai/react";
import { Text, View } from "react-native";
import isLoggedIn from "../state/state";

const Chats = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Here are the chats</Text>
      <Text  style={{ padding: 10}} onPress={logOut}>Log out</Text>
    </View>
  )
}

export default Chats;
