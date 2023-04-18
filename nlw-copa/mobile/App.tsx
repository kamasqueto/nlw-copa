import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider, VStack, Text} from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
    <Center flex={1} bgColor={'black'} >
      <Text color="white" fontSize={24}>Hello React NATIVE!</Text>
      <StatusBar style="auto" />
    </Center>
    </NativeBaseProvider>
  );
}

