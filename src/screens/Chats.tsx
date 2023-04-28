import { signOut } from "firebase/auth";
import { useSetAtom, useAtomValue } from "jotai/react";
import { useState, useEffect } from "react"; 
import { Text, View, StyleSheet, Button } from "react-native";
import ChatList from "../components/ChatList";
import { auth, database } from "../firebase";
import { isLoggedIn, currentUserData, currentUserFriends, currentUserName } from "../state/state";
import { onValue, ref } from "firebase/database";

const Chats = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const setCurrentUserData = useSetAtom(currentUserData);
  const setCurrentUserFriends = useSetAtom(currentUserFriends);
  const setCurrentUserName = useSetAtom(currentUserName);

  const [friends, setFriends] = useState({});

  const logOut = () => {
    signOut(auth).then(() => {
      setCurrentUserData({});
      setCurrentUserFriends({});
      setCurrentUserName("");
      setIsLoggedIn(false);
    }).catch((error) => {
      console.log("Log out error\n", error.errorCode + " " + error.errorMessage);
    });
  };

  const currentUser = useAtomValue(currentUserName);

  useEffect(() => {
    const friendsRef = ref(database, 'users/' + currentUser + '/friends');
    onValue(friendsRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setFriends(data);
      }
    });
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={logOut} title="Log Out"/>
      </View>
      <View style={{ width: '100%' }}>
        <ChatList chats={friends} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#303030'
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
