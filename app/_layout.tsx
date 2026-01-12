import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";


export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="page2" options={{ title: "Page 2" }} />
      </Stack>
    </Provider>
  );
}
