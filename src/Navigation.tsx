import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai/react';
import ChatDetail from './screens/ChatDetail';
import Chats from './screens/Chats';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { isLoggedIn } from './state/state';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const isLogged = useAtomValue(isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {
        isLogged ? (
          <>
            <Stack.Screen name="Chats" component={Chats}/>
            <Stack.Screen name="ChatDetail" component={ChatDetail}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )
      }
    </Stack.Navigator>
  );
}
