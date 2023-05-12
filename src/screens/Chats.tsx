import { useAtomValue } from "jotai/react";
import { useState, useEffect } from "react"; 
import { Text, View, StyleSheet, Pressable } from "react-native";
import ChatList from "../components/ChatList";
import { database } from "../firebase";
import { currentUserName } from "../state/state";
import { onValue, ref } from "firebase/database";
import Feather from "react-native-vector-icons/Feather";
import AddFriendSearchBox from "../components/AddFriendSearchBox";

const Chats = () => {

  const [friends, setFriends] = useState({});
  const [addFriend, setAddFriend] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);

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

  const onShowFriend = () => {
    showAddFriend ? setShowAddFriend(false) : setShowAddFriend(true);
    setAddFriend("");
  }

  const onAddFriend = () => {
    if (!addFriend.replace(/\s/g, '').length) {
      setAddFriend("");
      return
    }
    console.log(addFriend);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chats</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable
            android_ripple={styles.ripple}
            style={styles.pressable}
            onPress={onShowFriend}
          >
            <Feather name={'user-plus'} size={30} color={"#A0A0A0"} />
          </Pressable>
        </View>
      </View>
      { showAddFriend
        ? 
          <View style={{padding: 10}}>
            <AddFriendSearchBox currentText={addFriend} onChangeText={setAddFriend} onSearch={onAddFriend} />
          </View>
        :
          <></>
      }
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
  titleContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },
  title: {
    fontSize: 40,
    marginLeft: 15,
  },
  iconContainer: {
    height: '80%',
    width: '15%',
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    color: '#737373',
    borderless: true,
  },
  pressable: {
    borderWidth: 0,
    borderRadius: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Chats;
