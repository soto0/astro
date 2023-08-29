import { FC } from "react";
import { SafeAreaView, Image, View, ImageBackground } from "react-native";
import { newsAPI } from "../../services/news";
import { VStack, Text, Box } from "@react-native-material/core";
import { styles } from "../../styles";
import LinearGradient from "react-native-linear-gradient";

const New: FC = ({ route }: any) => {
    const { data: item } = newsAPI.useGetNewDataQuery(route.params.id);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Box style={styles.defaultBox}>
                <VStack style={styles.newsItemStack}>
                    <Image style={styles.newsImage} source={{ uri: item?.image }} />
                    <Text variant="overline" style={{ ...styles.newsTitle, fontSize: 18 }}>
                        {item?.title}
                    </Text>
                    <Text
                        variant="subtitle2"
                        style={{
                            ...styles.newsText,
                            fontSize: 15
                        }}
                    >
                        {item?.text}
                    </Text>
                </VStack>
            </Box>
        </SafeAreaView>
    );
};

export default New;
