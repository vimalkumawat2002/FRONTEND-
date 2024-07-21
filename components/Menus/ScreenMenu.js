import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import Home from "../../screens/Home";
import { AuthContext } from "@/context/AuthContext";
import HeaderMenu from "../../components/Menus/HeaderMenu";
import post from "../../screens/Post";
import Account from "../../screens/Account";
import Myposts from "../../screens/MyPosts";

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);

  const authenticatedUser = state?.user && state?.token;

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "full Satck App",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={post}
            options={{
              headerBackTitle: "back",
              headerRight: () => <HeaderMenu />,
            }}
          />

          <Stack.Screen
            name="Myposts"
            component={Myposts}
            options={{
              headerBackTitle: "back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerBackTitle: "back",
              headerRight: () => <HeaderMenu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
