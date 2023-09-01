import { FC } from "react";
import { Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import { newsAPI } from "../../services/news";
import { Wrap, Text, Box, VStack } from "@react-native-material/core";
import { styles } from "../../styles";

const News: FC = ({ navigation }: any) => {
    const { data: list } = newsAPI.useGetNewsDataQuery();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Box style={styles.defaultBox}>
                <ScrollView>
                    <VStack spacing={30} style={styles.newsStack}>
                        {list?.map((item) => {
                            return (
                                <Pressable
                                    key={item.id}
                                    onPress={() => {
                                        navigation.navigate("New", { id: item.id });
                                    }}
                                >
                                    <Wrap style={styles.newsWrapper}>
                                        <Image
                                            style={styles.newsImage}
                                            source={{ uri: item.image }}
                                        />
                                        <Text variant="overline" style={styles.newsTitle}>
                                            {item.title}
                                        </Text>
                                        <Text
                                            ellipsizeMode="tail"
                                            numberOfLines={4}
                                            variant="subtitle2"
                                            style={styles.newsText}
                                        >
                                            {item.text}
                                        </Text>
                                    </Wrap>
                                </Pressable>
                            );
                        })}
                    </VStack>
                </ScrollView>
            </Box>
        </SafeAreaView>
    );
};

export default News;
