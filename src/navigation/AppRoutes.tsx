import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import Splashscreen from '../screens/Splashscreen/Splashscreen';
import OnBordingscreen from '../screens/OnBording/OnBordingscreen';
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import SetPassword from '../screens/SetPassword/SetPassword';
import Home from '../screens/Home/Home';
import Menu from '../screens/Menu/Menu';
import Favorites from '../screens/Favorites/Favorites';
import Orders from '../screens/Orders/Orders';
import Help from '../screens/Help/Help';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTab';
import { bottomTabList } from '../utils/helper';
import IconByVariant from '../components/IconByVariant';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const componentMap: Record<string, React.ComponentType<any>> = {
    Home,
    Menu,
    Favorites,
    Orders,
    Help,
};

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <BottomTab {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            {bottomTabList.map(({ name, icon }) => {
                const Component = componentMap[name];
                if (!Component) return null;
                console.log("Help data", name)
                return (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={Component}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <IconByVariant name={icon as any} size={24} color={color} />
                            ),
                            tabBarLabel: () => null,
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
};

const AppRoutes: FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" component={Splashscreen} />
            <Stack.Screen name="OnBording" component={OnBordingscreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SetPassword" component={SetPassword} />
            <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>

    )
};

export default AppRoutes;