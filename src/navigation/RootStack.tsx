import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './BottomTabNav';
import { ChatItemScreen } from '../screens/ChatItemScreen';
import { NewChatScreen } from '../screens/NewChatScreen';
import { RootStackParamList } from '../interfaces/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='ChatItem' component={ChatItemScreen} />
      <Stack.Screen name='NewChat' component={NewChatScreen} />
    </Stack.Navigator>
  );
};
