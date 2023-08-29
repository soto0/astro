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
    },
    newsStack: {
        paddingTop: 30,
        paddingBottom: 30
    },
    newsWrapper: {
        borderRadius: 20,
        padding: 20,
        paddingBottom: 50,
        backgroundColor: "#f5f5ff",
        shadowColor: "#cdcdfa",
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    newsImage: {
        width: "100%",
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    newsTitle: {
        paddingTop: 25,
        fontSize: 16,
        fontWeight: "bold"
    },
    newsText: {
        paddingTop: 10
    }
});
