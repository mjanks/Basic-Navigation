import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/home";
import SavedScreen from "../screens/saved";
import ProfileScreen from "../screens/profile";

const HStack = createStackNavigator(); // creates the stack navigator 'HStack'
const SaveStack = createStackNavigator();
const ProfStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <HStack.Navigator 
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
        headerMode='none'
      >
        <HStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }}
        />

        {/* <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          // options={{ title: 'Details Screen' }}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        /> */}

      </HStack.Navigator>
  );
}

function ProfileStack() {
  return (
    <ProfStack.Navigator 
        initialRouteName='Profile'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='none'
      >
        <ProfStack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile Screen' }}
        />

      </ProfStack.Navigator>
  );
}

function SavedStack() {
  return (
    <SaveStack.Navigator 
        initialRouteName='Saved'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='none'
      >
        <SaveStack.Screen 
          name="Saved" 
          component={SavedScreen} 
          options={{ title: 'Saved Screen' }}
        />

      </SaveStack.Navigator>
  );
}


function MainStackNav() {
  return (
    <NavigationContainer>
      {/* Top level screen configuration. Add new screens here, then configure their 
      details in separate js files in the screens folder */}

      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#ff0000',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
          <Tab.Screen
          name="SaveStack"
          component={SavedStack}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="ProfStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
      
    </NavigationContainer>

    
  );
}

export default MainStackNav;