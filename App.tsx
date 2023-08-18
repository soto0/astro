import React, { FC } from "react";
import { LogBox } from "react-native";
import MainProvider from "./app/store/provider";
import Navigation from "./app/navigation";
import { IconComponentProvider } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const App: FC = () => {
    return (
        <MainProvider>
            <IconComponentProvider IconComponent={Icon}>
                <Navigation />
            </IconComponentProvider>
        </MainProvider>
    );
};

LogBox.ignoreAllLogs();

export default App;
