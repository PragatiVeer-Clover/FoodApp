import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import Splashscreen from '../screens/Splashscreen/Splashscreen';
import OnBordingscreen from '../screens/OnBording/OnBordingscreen';


const Stack = createStackNavigator<RootStackParamList>();

const AppRoutes: FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="OnBording"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" component={Splashscreen} />
            <Stack.Screen name="OnBording" component={OnBordingscreen} />
        </Stack.Navigator>

    )
};

export default AppRoutes;