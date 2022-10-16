import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import TabsBar from './components/TabsBar';
//import ProfileSelectPage from './pages/ProfileSelectPage';
import MyChildAndMe from './pages/MyChildAndMe';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import EmotionsCheckIn from './pages/EmotionsCheckIn';
//import EmotionsDiary from './pages/EmotionsDiary';
//import NamingYourFeelings from './pages/NamingYourFeelings';
//import HelpWithEmotions from './pages/HelpWithEmotions';
//import CopingStrategies from './pages/CopingStrategies';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="My Child And Me" component={MyChildAndMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  }
});
