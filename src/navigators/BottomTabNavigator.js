import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';
import AccountScreen from '../containers/AccountScreen';
import NotiScreen from '../containers/NotiScreen';
import BillScreen from '../containers/BillScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scale, scaleVertical } from '../configs/Scale';
import { ACCOUNT, DEPOSIT, HOME, NOTIFICATION } from './RouteName';
import { Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === HOME) {
                        iconName = 'store-alt';
                    } else if (route.name === NOTIFICATION) {
                        iconName = 'bell';
                    }
                    else if (route.name === DEPOSIT) {
                        iconName = 'scroll';
                    }
                    else if (route.name === ACCOUNT) {
                        iconName = 'user-circle';
                    }
                    return <Icon name={iconName} size={scale(14)} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#ff0681',
                inactiveTintColor: 'gray',
                style: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 15,

                }
            }}
        >
            <Tab.Screen name={HOME} component={HomeScreen} options={{ tabBarLabel: 'Trang chủ' }} />
            <Tab.Screen name={NOTIFICATION} component={NotiScreen} options={{ tabBarLabel: 'Thông báo' }} />
            <Tab.Screen name={DEPOSIT} component={BillScreen} options={{ tabBarLabel: 'Nạp tiền' }} />
            <Tab.Screen name={ACCOUNT} component={AccountScreen} options={{ tabBarLabel: 'Tài khoản' }} />
        </Tab.Navigator>
    );
}
a