import { signOut } from "firebase/auth";
import { useSetAtom } from "jotai/react";
import { Alert, Text, View } from "react-native";
import { auth } from "../firebase";
import isLoggedIn from "../state/state";

const Chats = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);

  const logOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    }).catch((error) => {
      Alert.alert("Log out error\n" + error.errorCode + " " + error.errorMessage);
    });
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Here are the chats</Text>
      <Text  style={{ padding: 10}} onPress={logOut}>Log out</Text>
    </View>
  )
}

export default Chats;
