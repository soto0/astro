const mockServerConfig: import("mock-config-server").MockServerConfig = {
    rest: {
        baseUrl: "/api",
        configs: [
            {
                path: "/search",
                method: "get",
                routes: [
                    {
                        data: [
                            { id: 1, type: "galaxy", name: "Млечный Путь" },
                            { id: 2, type: "galaxy", name: "Андромеда" },
                            { id: 3, type: "galaxy", name: "Большое Магелланово Облако" },
                            { id: 4, type: "galaxy", name: "Барнарда" },
                            { id: 5, type: "planet", name: "Меркурий" },
                            { id: 6, type: "planet", name: "Венера" },
                            { id: 7, type: "planet", name: "Земля" },
                            { id: 8, type: "planet", name: "Марс" },
                            { id: 9, type: "planet", name: "Юпитер" },
                            { id: 10, type: "planet", name: "Сатурн" },
                            { id: 11, type: "planet", name: "Уран" },
                            { id: 12, type: "planet", name: "Нептун" },
                            { id: 13, type: "planet", name: "Плутон" },
                            { id: 14, type: "satellite", name: "Спутник Гагарина" },
                            { id: 15, type: "satellite", name: "GPS IIR-12" },
                            { id: 16, type: "satellite", name: "GOES 16" },
                            { id: 17, type: "satellite", name: "Hubble Space Telescope" },
                            {
                                id: 18,
                                type: "satellite",
                                name: "ISS (Международная космическая станция)"
                            },
                            { id: 19, type: "satellite", name: "Landsat 8" },
                            { id: 20, type: "satellite", name: "NOAA-20" },
                            { id: 21, type: "satellite", name: "Sentinel-2A" },
                            { id: 22, type: "satellite", name: "Tiangong Space Station" },
                            { id: 23, type: "satellite", name: "Спутник Земли-1" },
                            { id: 24, type: "meteorite", name: "Аполлон-11", size: "25.2 кг" },
                            { id: 25, type: "meteorite", name: "Челябинск", size: "440 кг" },
                            {
                                id: 26,
                                type: "meteorite",
                                name: "Гибсон Метеорит",
                                size: "27.22 кг"
                            },
                            { id: 27, type: "meteorite", name: "Энсисхайм", size: "15 кг" },
                            { id: 28, type: "meteorite", name: "Хибиногорск", size: "125 г" },
                            { id: 29, type: "constellation", name: "Орион" },
                            { id: 30, type: "constellation", name: "Большая Медведица" },
                            { id: 31, type: "constellation", name: "Лебедь" },
                            { id: 32, type: "constellation", name: "Скорпион" },
                            { id: 33, type: "constellation", name: "Жираф" },
                            { id: 34, type: "constellation", name: "Кассиопея" },
                            { id: 35, type: "constellation", name: "Геркулес" },
                            { id: 36, type: "constellation", name: "Лев" }
                        ]
                    }
                ]
            }
        ]
    }
};

export default mockServerConfig;
