import { Text, View, Pressable} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "@/store/slices/counterSlice";
import { Link } from "expo-router";

export default function Index() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Count: {count}</Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text
          style={{ marginHorizontal: 10, fontSize: 20 }}
          onPress={() => dispatch(increment())}
        >
          +
        </Text>
        <Text
          style={{ marginHorizontal: 10, fontSize: 20 }}
          onPress={() => dispatch(decrement())}
        >
          -
        </Text>
        <Text
          style={{ marginHorizontal: 10, fontSize: 20 }}
          onPress={() => dispatch(reset())}
        >
          Reset
        </Text>
        <Link href="/page2" style={{ marginHorizontal: 10, fontSize: 20 }}>
          <Pressable >Go to Page 2</Pressable>
        </Link>
      </View>
    </View>
  );
}
