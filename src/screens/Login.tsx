import { Text, View } from "react-native";

const Login = ({ navigation }) => {

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const logIn = () => {
    navigation.navigate('Chats');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Email</Text>
      <Text style={{ padding: 10}}>Password</Text>
      <Text style={{ padding: 10}} onPress={logIn}>Login</Text>
      <Text  style={{ padding: 10}} onPress={goToSignUp}>Sign Up</Text>
    </View>
  )
}

export default Login;
