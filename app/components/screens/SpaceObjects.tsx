import { FC, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "../../styles";
import SearchBar from "react-native-general-searchbar";
import { Avatar, Box, Chip, Flex, ListItem, VStack } from "@react-native-material/core";
import { spaceObjectsAPI } from "../../services/spaceObjects";
import Loader from "../ui/loader";

const SpaceObjects: FC = ({ navigation }: any) => {
    const [value, setValue] = useState<string | undefined>();
    const [chipType, setChipType] = useState<string>();
    const [trigger, { data: list, isLoading }] = spaceObjectsAPI.useLazyGetSpaceObjectsQuery();

    useEffect(() => {
        trigger({ q: "" });
    }, []);

    const onChange = (values: string | undefined) => {
        setValue(values);
    };

    const onSearchSubmit = () => {
        trigger({ q: value });
    };

    const onChipsSubmit = (values: { type: string }) => {
        setValue(undefined);
        trigger(values);
    };

    const chips = [
        { id: 1, name: "Галактики", type: "galaxy" },
        { id: 2, name: "Планеты", type: "planet" },
        { id: 3, name: "Спутники", type: "satellite" },
        { id: 4, name: "Метеориты", type: "meteorite" },
        { id: 5, name: "Созвездия", type: "constellation" }
    ];

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Box style={styles.defaultBox}>
                <VStack spacing={50}>
                    <Box>
                        <SearchBar
                            placeholder="Поиск..."
                            onChangeText={onChange}
                            onSubmitEditing={onSearchSubmit}
                            searchText={value}
                            style={{
                                inputView: styles.searchInputView,
                                searchImage: styles.searchInputImage
                            }}
                        />
                    </Box>
                    <Flex direction="row" wrap="wrap" style={styles.chipsFlex}>
                        {chips.map((item) => {
                            return (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    color={chipType == item.type ? "#4545f7" : "#9191ff"}
                                    onPress={() => {
                                        setChipType(item.type);
                                        onChipsSubmit({ type: item.type });
                                    }}
                                />
                            );
                        })}
                    </Flex>
                    <ScrollView>
                        {!isLoading ? (
                            <Flex direction="column" style={styles.listFlex}>
                                {list?.map((item) => {
                                    return (
                                        <ListItem
                                            key={item.id}
                                            overline={item?.viewType}
                                            title={item?.name}
                                            secondaryText={item?.description}
                                            leadingMode="image"
                                            leading={
                                                <Avatar
                                                    image={{ uri: `${item?.image}` }}
                                                    size={80}
                                                />
                                            }
                                            onPress={() => {
                                                navigation.navigate("SpaceObject", { id: item.id });
                                            }}
                                        />
                                    );
                                })}
                            </Flex>
                        ) : (
                            <Loader />
                        )}
                    </ScrollView>
                </VStack>
            </Box>
        </SafeAreaView>
    );
};

export default SpaceObjects;
