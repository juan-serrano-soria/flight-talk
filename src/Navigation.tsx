import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai/react';
import ChatDetail from './screens/ChatDetail';
import Chats from './screens/Chats';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { isLoggedIn } from './state/state';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchImages from './screens/SearchImages';
import CustomDrawer from './components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEdgeWidth: 200,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      >
      <Drawer.Screen
        name="Chats"
        component={Chats}
      />
      <Drawer.Screen
        name="Search Images"
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
