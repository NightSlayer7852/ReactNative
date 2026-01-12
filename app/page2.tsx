import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Page2 = () => {
    const count = useSelector((state: any) => state.counter.value);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Page 2</Text>
            <Text>Count: {count}</Text>

        </View>
    );
}

export default Page2;