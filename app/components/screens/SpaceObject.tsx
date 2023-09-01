import { FC } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "../../styles";
import { Box } from "@react-native-material/core";

const SpaceObject: FC = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <Box style={styles.defaultBox}></Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SpaceObject;
