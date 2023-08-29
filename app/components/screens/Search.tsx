import { FC, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "../../styles";
import SearchBar from "react-native-general-searchbar";
import { Avatar, Box, Chip, Flex, ListItem, VStack } from "@react-native-material/core";
import { spaceAPI } from "../../services/search";
import Loader from "../ui/loader";

const Search: FC = () => {
    const [value, setValue] = useState<string | undefined>();
    const [trigger, { data: list, isLoading }] = spaceAPI.useLazyGetSpaceDataQuery();

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
                                    label={item.name}
                                    color="#9191ff"
                                    onPress={() => {
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

export default Search;
