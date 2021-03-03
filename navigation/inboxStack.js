import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from "../screens/profile";
import TripsScreen from "../screens/trips";
import InboxScreen from "../screens/inbox";

const InboxStack = createStackNavigator();

export default function TripsStack() {
    return (
      <InboxStack.Navigator 
          initialRouteName='Inbox'
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
          <InboxStack.Screen 
            name="Inbox" 
            component={InboxScreen} 
            options={{ title: 'Trips' }}
          />
  
        </InboxStack.Navigator>
    );
  }