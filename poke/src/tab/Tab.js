import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BaseL from '../list/BaseL';
import BaseB from '../one/BaseB';

export default function tab() {

    const Tab = createBottomTabNavigator()
    
 return (
   <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="lista" component={BaseL}/>
        <tab.Screen name="One" component={BaseB}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}