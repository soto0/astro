import { FC } from "react";
import { ActivityIndicator } from "@react-native-material/core";

const Loader: FC = () => {
    return <ActivityIndicator size="large" color="#cdcdfa" style={{ marginTop: "50%" }} />;
};

export default Loader;
