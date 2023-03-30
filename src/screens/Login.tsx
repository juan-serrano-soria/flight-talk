import { signInWithEmailAndPassword } from "firebase/auth";
import { useSetAtom } from "jotai/react";
import { useState } from "react";
import { Text, View, TextInput, Alert } from "react-native";
import { auth } from "../firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import { currentUserData, isLoggedIn } from "../state/state";

const Login = ({ navigation }) => {
  const setIsLoggedIn = useSetAtom(isLoggedIn);
  const setCurrentUserData = useSetAtom(currentUserData);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // later see what to do with this
        setIsLoggedIn(true);
        
        // get user info from realtime database
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());

            // find current user
            for (var user in snapshot.val()){
              var currentEmail = snapshot.val()[user]["email"];
              if (currentEmail === email) {
                setCurrentUserData(snapshot.val()[user]);
                break;
              }
            }
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      })
      .catch((error) => {
        Alert.alert("Auth failed\n", error.code + " " + error.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <TextInput
        style={{ padding: 5, borderColor: "white", borderWidth: 1 }}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={{ padding: 5, borderColor: "white", borderWidth: 1 }}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text style={{ padding: 10}} onPress={logIn}>Login</Text>
      <Text style={{ padding: 10}} onPress={goToSignUp}>Sign Up</Text>
    </View>
  )
}

export default Login;
