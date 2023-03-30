import { signInWithEmailAndPassword } from "firebase/auth";
import { useSetAtom } from "jotai/react";
import { useState } from "react";
import { Text, View, TextInput, Alert } from "react-native";
import { auth } from "../firebase";
import isLoggedIn from "../state/state";

const Login = ({ navigation }) => {

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const setIsLoggedIn = useSetAtom(isLoggedIn);

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // later see what to do with this
        setIsLoggedIn(true);
      })
      .catch((error) => {
        Alert.alert("Auth failed\n" + error.code + " " + error.message);
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
