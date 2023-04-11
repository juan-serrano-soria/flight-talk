import { signInWithEmailAndPassword } from "firebase/auth";
import { useSetAtom } from "jotai/react";
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import { auth } from "../firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import { currentUserData, currentUserFriends, isLoggedIn } from "../state/state";

const Login = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const setCurrentUserData = useSetAtom(currentUserData);
  const setCurrentUserFriends = useSetAtom(currentUserFriends);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // later see what to do with this
        
        // get user info from realtime database
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
          if (snapshot.exists()) {

            // find current user
            for (var user in snapshot.val()){
              var currentEmail = snapshot.val()[user]["email"];
              if (currentEmail === email) {
                setCurrentUserData(snapshot.val()[user]);
                setCurrentUserFriends(snapshot.val()[user]["friends"]);
                break;
              }
            }
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

        setIsLoggedIn(true);
      })
      .catch((error) => {
        Alert.alert("Auth failed\n", error.code + " " + error.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Log In</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={logIn} title="Log In"/>
      </View>
      <View style={styles.button}>
        <Button onPress={goToSignUp} title="Sign Up"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    margin: 10,
  },
  inputContainer: {
    margin: 10,
    width: '70%',
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  button: {
    width: "70%",
    margin: 5,
  }
});

export default Login;
