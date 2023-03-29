import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chats from './screens/Chats';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        options={{
          headerBackVisible: false,
        }}
        name="Chats"
        component={Chats}
      />
    </Stack.Navigator>
  );
}
