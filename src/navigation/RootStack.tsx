import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './BottomTabNav';
import { ChatItemScreen } from '../screens/ChatItemScreen';
import { NewChatScreen } from '../screens/NewChatScreen';
import { NewGroupScreen } from '../screens/NewGroupScreen';
import { GroupChatItemScreen } from '../screens/GroupChatItemScreen';
import { RootStackParamList } from '../interfaces/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='ChatItem' component={ChatItemScreen} />
      <Stack.Screen name='GroupChatItem' component={GroupChatItemScreen} />
      <Stack.Screen name='NewChat' component={NewChatScreen} />
      <Stack.Screen name='NewGroup' component={NewGroupScreen} />
    </Stack.Navigator>
  );
};
