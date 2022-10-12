import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsBar from './components/TabsBar';
//import ProfileSelectPage from './pages/ProfileSelectPage';
import MyChildAndMePage from './pages/MyChildAndMePage';
import EmotionsCheckInPage from './pages/EmotionsCheckInPage';
import EmotionsDiaryPage from './pages/EmotionsDiaryPage';
import NamingYourFeelingsPage from './pages/NamingYourFeelingsPage';
import HelpWithEmotionsPage from './pages/HelpWithEmotionsPage';
import CopingStrategiesPage from './pages/CopingStrategiesPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="My Child And Me">
        <Stack.Screen name="My Child And Me" component={MyChildAndMePage} />
        <Stack.Screen name="Emotions Check In" component={EmotionsCheckInPage} />
        <Stack.Screen name="Emotions Diary" component={EmotionsDiaryPage} />
        <Stack.Screen name="Help With Emotions" component={HelpWithEmotionsPage} />
        <Stack.Screen name="Naming Your Feelings" component={NamingYourFeelingsPage} />
        <Stack.Screen name="Coping Strategies" component={CopingStrategiesPage} />
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
