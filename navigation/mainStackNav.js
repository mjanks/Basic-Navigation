import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import Settings from "../screens/settings";

const Stack = createStackNavigator(); // creates the stack navigator 'Stack'

function MainStackNav() {
  return (
    <NavigationContainer>
      {/* Top level screen configuration. Add new screens here, then configure their 
      details in separate js files in the screens folder */}
      <Stack.Navigator 
        // set initial route, default is the first screen in the list below, 
        // which is usually Home.
        initialRouteName='Home'
        // 'screenOptions' lets you apply common styles to the header across 
        // the navigator
        screenOptions={{
          // allows swipe from left to right to go back one screen on Android, 
          // IOS this is default behavior
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          // makes the back button title invisible on IOS,
          // Android only shows the arrow so it's ok.
          headerBackTitleVisible: false
        }}
        headerMode='float'
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }}
        />

        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{ title: 'Settings' }}
        />

        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          // options={{ title: 'Details Screen' }}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNav;