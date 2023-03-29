import { Text, View } from "react-native"

const SignUp = ({ navigation }) => {

  const signUp = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', padding: 10}}>
      <Text style={{ padding: 10}}>Email</Text>
      <Text style={{ padding: 10}}>Password</Text>
      <Text style={{ padding: 10}} onPress={signUp}>Sign Up</Text>
    </View>
  )
}

export default SignUp;
