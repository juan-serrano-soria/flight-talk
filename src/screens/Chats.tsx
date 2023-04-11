import { signOut } from "firebase/auth";
import { useSetAtom, useAtomValue } from "jotai/react";
import { Text, View, StyleSheet, Button } from "react-native";
import ChatList from "../components/ChatList";
import { auth } from "../firebase";
import { isLoggedIn, currentUserData } from "../state/state";

const Chats = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const getCurrentUserData = useAtomValue(currentUserData);

  const logOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    }).catch((error) => {
      console.log("Log out error\n", error.errorCode + " " + error.errorMessage);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={logOut} title="Log Out"/>
      </View>
      <View style={{ width: '100%' }}>
        <ChatList />
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
    fontSize: 40,
    margin: 10,
  },
  button: {
    width: "70%",
    margin: 5,
  }
});

export default Chats;
