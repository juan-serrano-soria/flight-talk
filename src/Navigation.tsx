import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai/react';
import ChatDetail from './screens/ChatDetail';
import Chats from './screens/Chats';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { isLoggedIn } from './state/state';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchImages from './screens/SearchImages';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen
        name="Chats"
        component={Chats}
      />
      <Drawer.Screen
        name="SearchImages"
        component={SearchImages}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const isLogged = useAtomValue(isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {
        isLogged ? (
          <>
            <Stack.Screen name="Chat" component={Home}/>
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
