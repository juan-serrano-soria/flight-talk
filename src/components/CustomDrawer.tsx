import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useSetAtom } from "jotai";
import { currentUserData, currentUserFriends, currentUserName, isLoggedIn } from "../state/state";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import IconDrawerButton from "./IconDrawerButton";


const CustomDrawer = ( props ) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const setCurrentUserData = useSetAtom(currentUserData);
  const setCurrentUserFriends = useSetAtom(currentUserFriends);
  const setCurrentUserName = useSetAtom(currentUserName);

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Flight Talk!</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.buttonContainer}>
        <IconDrawerButton name="log-out" label="Log Out!" onPress={logOut} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    margin: 10,
    color: 'black',
  },
  buttonContainer: {
    padding: 10,
  }
});

export default CustomDrawer;
