import { FC } from "react";
import { SafeAreaView, Image, ScrollView } from "react-native";
import { newsAPI } from "../../services/news";
import { VStack, Text, Box, Icon, Stack, Chip } from "@react-native-material/core";
import { styles } from "../../styles";
import { IThemes } from "../../models/IThemes";

const New: FC = ({ route }: any) => {
    const { data: item } = newsAPI.useGetNewDataQuery(route.params.id);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <Box style={styles.defaultBox}>
                    <VStack style={styles.newsItemStack}>
                        <Image
                            style={{
                                ...styles.newsImage,
                                width: "85%",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                            source={{ uri: item?.image }}
                        />
                        <Stack direction="row" spacing={5} style={styles.newsTime}>
                            <Icon name="clock" color="#cdcdfa" size={20} />
                            <Text variant="subtitle1">{item?.reading} мин.</Text>
                        </Stack>
                        <Text
                            variant="h5"
                            style={{ ...styles.newsTitle, fontSize: 22, paddingTop: 5 }}
                        >
                            {item?.title}
                        </Text>
                        <Text variant="body1" style={styles.newsText}>
                            {item?.text}
                        </Text>
                        <Stack spacing={10} style={{ marginTop: 50 }}>
                            <Box>
                                <Text variant="h6">Связаные темы:</Text>
                            </Box>
                            <Stack items="start" direction="row" wrap spacing={4}>
                                {item?.themes.map((item: IThemes) => {
                                    return (
                                        <Chip
                                            key={item.id}
                                            label={item.label}
                                            color="#9191ff"
                                            labelStyle={styles.newsChipLabel}
                                            style={styles.newsChip}
                                        />
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </VStack>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default New;
