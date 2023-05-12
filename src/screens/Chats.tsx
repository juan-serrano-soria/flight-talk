import { useAtomValue } from "jotai/react";
import { useState, useEffect } from "react"; 
import { Text, View, StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import { database } from "../firebase";
import { currentUserName } from "../state/state";
import { onValue, ref } from "firebase/database";

const Chats = () => {

  const [friends, setFriends] = useState({});

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
});

export default Chats;
