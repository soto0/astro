import { FC } from "react";
import { SafeAreaView } from "react-native";
import { AppBar, Icon, IconButton } from "@react-native-material/core";
import { styles } from "../../../styles";
import { IHeader } from "../../../models/IHeader";

const ItemHeader: FC<IHeader> = (props: IHeader) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <AppBar
                color="white"
                style={styles.header}
                leading={() => (
                    <IconButton
                        onPress={() => {
                            props.item.navigation.goBack();
                        }}
                        icon={() => <Icon name="arrow-left" color="#cdcdfa" size={35} />}
                        color="#cdcdfa"
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default ItemHeader;
