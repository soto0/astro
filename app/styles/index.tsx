import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: "white",
        height: "100%"
    },
    defaultBox: {
        paddingLeft: 10,
        paddingRight: 10
    },
    searchInputView: {
        marginTop: 80,
        borderWidth: 0,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "white",
        height: 50
    },
    searchInputImage: {
        right: 0,
        position: "absolute",
        marginRight: 20
    },
    chipsFlex: {
        gap: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    listFlex: {
        paddingBottom: 460,
        gap: 10
    }
});
