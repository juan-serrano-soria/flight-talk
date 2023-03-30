import { signOut } from "firebase/auth";
import { useSetAtom, useAtomValue } from "jotai/react";
import { Alert, Text, View } from "react-native";
import { auth } from "../firebase";
import { isLoggedIn, currentUserData } from "../state/state";

const Chats = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const getCurrentUserData = useAtomValue(currentUserData);

  const logOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    }).catch((error) => {
      Alert.alert("Log out error\n", error.errorCode + " " + error.errorMessage);
    });
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Current user data:</Text>
      <Text style={{ padding: 10}}>{JSON.stringify(getCurrentUserData)}</Text>
      <Text  style={{ padding: 10}} onPress={logOut}>Log out</Text>
    </View>
  )
}

export default Chats;
