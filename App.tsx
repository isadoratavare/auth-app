import { NavigationContainer } from "@react-navigation/native";

import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";

const Stack = createNativeStackNavigator();

async function getData() {
  //const users = await firestore().collection("Users").get();
  const data = await firestore().collection("Users").get();
  auth()
    .signInWithEmailAndPassword("isadora@gmail.com", "123456")
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
}

export default function App() {
  getData();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
