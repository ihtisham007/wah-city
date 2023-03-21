import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import {
  Login,
  Register,
  ForgotPassword,
  ChooseAccount,
  SetPassword,
  Home,
  //VistingPlaces,
} from '../Screens';
import VisitingPlaces from '../Screens/VisitingPlaces/VisitingPlaces';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.REGISTER} component={Register} />
      <Stack.Screen
        name={navigationString.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen
        name={navigationString.CHOOSE_ACCOUNT}
        component={ChooseAccount}
      />
      <Stack.Screen name={navigationString.HOME} component={Home} />
      <Stack.Screen
        name={navigationString.RESET_PASSWORD}
        component={SetPassword}
      />
      <Stack.Screen
        name={navigationString.VISITING_PLACE}
        component={VisitingPlaces}
      />
    </Stack.Navigator>
  );
}
