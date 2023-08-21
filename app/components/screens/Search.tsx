import { FC, useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../../styles";
import SearchBar from "react-native-general-searchbar";
import { Box, Chip, Flex, VStack } from "@react-native-material/core";

const Search: FC = () => {
    const [value, setValue] = useState<string | undefined>();

    const onChange = (values: string | undefined) => {
        setValue(values);
    };

    const onSubmit = () => {
        console.log("submitted");
    };

    const chips = [
        { id: 1, name: "Галактики" },
        { id: 2, name: "Планеты" },
        { id: 3, name: "Спутники" },
        { id: 4, name: "Метеориты" },
        { id: 5, name: "Созвездия" }
    ];

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Box style={styles.defaultBox}>
                <VStack spacing={50}>
                    <Box>
                        <SearchBar
                            placeholder="Поиск..."
                            onChangeText={onChange}
                            onSubmitEditing={onSubmit}
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
                                        onSubmit();
                                    }}
                                />
                            );
                        })}
                    </Flex>
                </VStack>
            </Box>
        </SafeAreaView>
    );
};

export default Search;
