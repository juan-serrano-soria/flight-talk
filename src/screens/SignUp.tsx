import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";

const SignUp = ({ navigation }) => {

  const signUp = () => {
    if (password !== repeatPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    navigation.navigate('Login');
  };

  const cancel = () => {
    navigation.navigate('Login');
  };

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          onChangeText={setUser}
          value={user}
          placeholder="Username"
        />
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
        <TextInput
          style={styles.input}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
          placeholder="Repeat password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={signUp} title="Sign Up"/>
      </View>
      <View style={styles.button}>
        <Button onPress={cancel} title="Cancel" color="#cf142b"/>
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

export default SignUp;
