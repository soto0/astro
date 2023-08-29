import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import New from "../components/screens/New";
import ItemHeader from "../components/layout/header/itemHeader";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Tabs} />
                <Stack.Screen
                    name="New"
                    options={{
                        header: (props) => <ItemHeader item={props} />
                    }}
                    component={New}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
