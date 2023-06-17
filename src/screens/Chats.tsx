import { useAtomValue } from "jotai/react";
import { useState, useEffect } from "react"; 
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import ChatList from "../components/ChatList";
import { database } from "../firebase";
import { currentUserName } from "../state/state";
import { child, get, onValue, ref, set, update } from "firebase/database";
import Feather from "react-native-vector-icons/Feather";
import AddFriendSearchBox from "../components/AddFriendSearchBox";

const Chats = () => {

  const [myFriends, setFriends] = useState({});
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

    if (addFriend === currentUser) {
      Alert.alert("You cannot add yourself as a friend!");
      setAddFriend("");
      return
    }

    if (myFriends.hasOwnProperty(addFriend)) {
      Alert.alert("Friend already added!");
      setAddFriend("");
      return
    }

    // search for user in database
    const dbRef = ref(database);
    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        var found = false;

        // find current user
        for (var user in snapshot.val()){
          var username = snapshot.val()[user]["user"];
          if (username === addFriend) {
            found = true;
            var chatId = Math.floor(Date.now() + Math.random());
            
            // Add friend to current user
            var curr = JSON.stringify(myFriends).slice(1,-1);
            if(curr === "") {
              var newFriends = '{' + `"${addFriend}": ` + chatId + '}';
              var friends = JSON.parse(newFriends);
            } else {
              var newFriends = '{' + `"${addFriend}": ` + chatId + "," +  curr + '}';
              var friends = JSON.parse(newFriends);
            }
            update(ref(database, 'users/' + currentUser), {
              friends
            });

            // Add current user as friend to new friend
            if (snapshot.val()[user].hasOwnProperty("friends")) {
              var currentFriendsPepe = JSON.stringify(snapshot.val()[user]["friends"]);
              var currFriendsFriend = currentFriendsPepe.slice(1,-1)
              var newFriends = '{' + `"${currentUser}": ` + chatId + "," + currFriendsFriend + '}';
              var friends = JSON.parse(newFriends);
            } else {
              var newFriends = '{' + `"${currentUser}": ` + chatId + '}';
              var friends = JSON.parse(newFriends);
            }
            update(ref(database, 'users/' + addFriend), {
              friends
            });

            // create chat between them
            const timeStamp = Date.now();
            set(ref(database, 'chats/' + chatId + "/messages/"  + timeStamp), {
              from: currentUser,
              message: "Hi! I just added you",
              type: "text"
            });

            setAddFriend("");

            break;
          }
        }
        found ? Alert.alert("Friend added!") : Alert.alert("User not found!")
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
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
        <ChatList chats={myFriends} />
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
    color: '#c1c1c1',
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
