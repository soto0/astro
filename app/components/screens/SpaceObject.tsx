import { FC } from "react";
import { SafeAreaView, ScrollView, Image } from "react-native";
import { styles } from "../../styles";
import { Box, VStack, Wrap, Text, Flex } from "@react-native-material/core";
import { spaceObjectsAPI } from "../../services/spaceObjects";

const SpaceObject: FC = ({ route }: any) => {
    const { data: spaceItem } = spaceObjectsAPI.useGetSpaceObjectQuery(route.params.id);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <Box style={styles.defaultBox}>
                    <VStack spacing={20}>
                        <Image style={styles.spaceObjectImage} source={{ uri: spaceItem?.image }} />
                        <Wrap>
                            {spaceItem?.tableInfo.map((item, index) => {
                                const backgroundColor = index % 2 === 0 ? "#8181cc" : "#cdcdfa";
                                let borderRadius = {};

                                if (index === 0) {
                                    borderRadius = {
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10
                                    };
                                } else if (index === spaceItem.tableInfo.length - 1) {
                                    borderRadius = {
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10
                                    };
                                }

                                return (
                                    <Flex
                                        key={item.id}
                                        direction="row"
                                        center
                                        style={{
                                            ...styles.spaceObjectInfoFlex,
                                            backgroundColor: backgroundColor,
                                            ...borderRadius
                                        }}
                                    >
                                        <Text
                                            style={{ ...styles.spaceObjectInfoText, width: 150 }}
                                            variant="subtitle2"
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            style={styles.spaceObjectInfoText}
                                            variant="subtitle2"
                                        >
                                            {item?.text}
                                        </Text>
                                    </Flex>
                                );
                            })}
                        </Wrap>
                        <Text variant="body1" style={styles.newsText}>
                            {spaceItem?.text}
                        </Text>
                    </VStack>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SpaceObject;
