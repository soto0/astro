import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "../components/screens/News";
import Map from "../components/screens/Map";
import Weather from "../components/screens/Weather";
import { Icon } from "@react-native-material/core";
import SpaceObjects from "../components/screens/SpaceObjects";

const Tab = createBottomTabNavigator();

const Tabs: FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 95, paddingTop: 20 },
                tabBarLabelStyle: { fontSize: 16 }
            }}
        >
            <Tab.Screen
                name="Космические объекты"
                options={{
                    title: "",
                    tabBarActiveTintColor: "#8e8efa",
                    tabBarIcon: ({ color }) => <Icon name="text-search" size={30} color={color} />
                }}
                component={SpaceObjects}
            />
            <Tab.Screen
                name="Новости"
                options={{
                    title: "",
                    tabBarActiveTintColor: "#8e8efa",
                    tabBarIcon: ({ color }) => (
                        <Icon name="newspaper-variant-multiple-outline" size={30} color={color} />
                    )
                }}
                component={News}
            />
            <Tab.Screen
                name="Карта"
                options={{
                    title: "",
                    tabBarActiveTintColor: "#8e8efa",
                    tabBarIcon: ({ color }) => <Icon name="map" size={30} color={color} />
                }}
                component={Map}
            />
            <Tab.Screen
                name="Погода"
                options={{
                    title: "",
                    tabBarActiveTintColor: "#8e8efa",
                    tabBarIcon: ({ color }) => (
                        <Icon name="weather-cloudy" size={30} color={color} />
                    )
                }}
                component={Weather}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
