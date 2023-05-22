import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatItemScreen } from '../screens/ChatItemScreen';
import { RootStackParamList } from '../interfaces/navigation';
import { MainScreen } from './BottomTabNav';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='ChatItem' component={ChatItemScreen} />
    </Stack.Navigator>
  );
};
