import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import Orders from '../screens/Orders/Orders';
import Profile from '../screens/Profile/Profile';
import { Tabs } from './AppRoutes';
import { colors } from '../styles/colors';
import { img } from '../assets';
import { RF, scale } from '../styles/scaling';

import Feather from '@react-native-vector-icons/feather';

const Drawer = createDrawerNavigator();

const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: colors.white }} />;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ paddingBottom: scale(20) }}>
            <View style={styles.profileSection}>
                <Image source={img.logo} style={styles.profileImage} />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.profileEmail}>john.doe@example.com</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: {
                    backgroundColor: colors.orangeBase,
                    width: '75%',
                },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.white100,
                drawerActiveBackgroundColor: colors.BLACK_OP(0.1),
                drawerLabelStyle: {
                    fontSize: RF(14),
                    fontWeight: '600',
                    marginLeft: scale(10),
                },
                drawerItemStyle: {
                    borderRadius: scale(10),
                    marginVertical: scale(2),
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Tabs}
                options={{
                    drawerIcon: ({ color }) => <Feather name="home" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="My Orders"
                component={Orders}
                options={{
                    drawerIcon: ({ color }) => <Feather name="shopping-bag" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="My Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color }) => <Feather name="user" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Delivery Address"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="map-pin" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Payment Methods"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="credit-card" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Contact Us"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="mail" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Help & FAQs"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="help-circle" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="settings" size={20} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Log Out"
                component={PlaceholderScreen}
                options={{
                    drawerIcon: ({ color }) => <Feather name="log-out" size={20} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    profileSection: {
        padding: scale(20),
        alignItems: 'center',
        marginTop: scale(20),
    },
    profileImage: {
        width: scale(80),
        height: scale(80),
        borderRadius: scale(40),
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.white,
    },
    profileInfo: {
        marginTop: scale(12),
        alignItems: 'center',
    },
    profileName: {
        fontSize: RF(18),
        fontWeight: 'bold',
        color: colors.white,
    },
    profileEmail: {
        fontSize: RF(12),
        color: colors.white100,
        marginTop: scale(4),
    },
    divider: {
        height: 1,
        backgroundColor: colors.white100,
        opacity: 0.3,
        marginHorizontal: scale(20),
        marginVertical: scale(10),
    },
});