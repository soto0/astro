import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../components/screens/Search";
import News from "../components/screens/News";
import Map from "../components/screens/Map";
import Weather from "../components/screens/Weather";
import { Icon } from "@react-native-material/core";

const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { height: 95, paddingTop: 20 },
                    tabBarLabelStyle: { fontSize: 16 }
                }}
            >
                <Tab.Screen
                    name="Поиск"
                    options={{
                        title: "",
                        tabBarActiveTintColor: "#8e8efa",
                        tabBarIcon: ({ color }) => (
                            <Icon name="text-search" size={30} color={color} />
                        )
                    }}
                    component={Search}
                />
                <Tab.Screen
                    name="Новости"
                    options={{
                        title: "",
                        tabBarActiveTintColor: "#8e8efa",
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name="newspaper-variant-multiple-outline"
                                size={30}
                                color={color}
                            />
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
        </NavigationContainer>
    );
};

export default Navigation;
