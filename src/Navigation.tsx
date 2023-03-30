import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai/react';
import Chats from './screens/Chats';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { isLoggedIn } from './state/state';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const isLogged = useAtomValue(isLoggedIn);

  return (
    <Stack.Navigator>
      {
        isLogged ? (
          <>
            <Stack.Screen
              options={{
                headerBackVisible: false,
              }}
              name="Chats"
              component={Chats}
            />
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
