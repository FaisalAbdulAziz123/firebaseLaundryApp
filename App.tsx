import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyLaundryScreen from './src/screens/MyLaundryScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'My Laundry') {
                        iconName = focused ? 'shirt' : 'shirt-outline';
                    } else if (route.name === 'Schedule') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // Return icon component
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2C6A67',
                tabBarInactiveTintColor: 'gray',
                headerShown: false, // Remove header from Tab screens
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="My Laundry" component={MyLaundryScreen} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, // Remove header from Stack screens
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Main" component={MainTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
