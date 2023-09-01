const mockServerConfig: import("mock-config-server").MockServerConfig = {
    rest: {
        baseUrl: "/api",
        configs: [
            {
                path: "/space",
                method: "get",
                routes: [
                    {
                        data: [
                            {
                                id: 1,
                                type: "galaxy",
                                viewType: "Галактика",
                                name: "Млечный Путь",
                                image: "https://images.ctfassets.net/cnu0m8re1exe/76iARqWFwf5VQeHcy7FsYB/75246efbd9ac79410b75b5c0211723ba/shutterstock_738535111.jpg",
                                description: "Спиральная галактика",
                                text: "Млечный Путь - это наша домашняя галактика, в которой находится Солнечная система. Это спиральная галактика, которая состоит из миллиардов звезд, планет и межзвездного вещества. Млечный Путь виден на небе как светлая полоса и находится в созвездии Скорпиона. Расстояние от Солнца до Млечного Пути составляет около 27 000 световых лет.",
                                tableInfo: [
                                    { id: 1, title: "Тип", text: "Спиральная галактика" },
                                    { id: 2, title: "Размер", text: "100 000 световых лет" },
                                    { id: 3, title: "Совездие", text: "Скорпиона" },
                                    {
                                        id: 4,
                                        title: "Расстояние до солнца",
                                        text: "27 000 световых лет"
                                    },
                                    {
                                        id: 5,
                                        title: "Обозначения",
                                        text: "Галактика Млечный Путь, Наша Галактика"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                type: "galaxy",
                                viewType: "Галактика",
                                name: "Андромеда",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/800px-Andromeda_Galaxy_%28with_h-alpha%29.jpg",
                                description: "Спиральная галактика",
                                text: "Андромеда - это ближайшая к нам спиральная галактика и она также является членом Местной группы галактик. Ее диаметр составляет около 220 000 световых лет. Андромеда находится в созвездии Андромеда и на расстоянии примерно в 2,5 миллиона световых лет от Солнца.",
                                tableInfo: [
                                    { id: 1, title: "Тип", text: "Спиральная галактика" },
                                    {
                                        id: 2,
                                        title: "Размер",
                                        text: "220 000 световых лет"
                                    },
                                    { id: 3, title: "Созвездие", text: "Андромеда" },
                                    {
                                        id: 4,
                                        title: "Расстояние до солнца",
                                        text: "2,5 миллиона световых лет"
                                    },
                                    {
                                        id: 5,
                                        title: "Обозначения",
                                        text: "M31, NGC 224"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                type: "galaxy",
                                viewType: "Галактика",
                                name: "Большое Магелланово Облако",
                                image: "https://cdn.eso.org/images/screen/magellan-ch17-bardon-cc.jpg",
                                description: "Неправильная галактика",
                                text: "Большое Магелланово Облако - это неправильная галактика, которая является спутником Млечного Пути. Ее диаметр составляет около 14 000 световых лет, и она находится в созвездии Дорадо, на расстоянии примерно в 160 000 световых лет от Солнца.",
                                tableInfo: [
                                    { id: 1, title: "Тип", text: "Неправильная галактика" },
                                    {
                                        id: 2,
                                        title: "Размер",
                                        text: "14 000 световых лет"
                                    },
                                    { id: 3, title: "Созвездие", text: "Дорадо" },
                                    {
                                        id: 4,
                                        title: "Расстояние до солнца",
                                        text: "160 000 световых лет"
                                    },
                                    {
                                        id: 5,
                                        title: "Обозначения",
                                        text: "LMC, NGC 1976"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                type: "galaxy",
                                viewType: "Галактика",
                                name: "Барнарда",
                                image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Barnard%27s_Galaxy.jpg",
                                description: "Неправильная галактика",
                                text: "Барнарда - это неправильная галактика, которая находится в созвездии Золотая Рыба. Ее диаметр составляет около 60 000 световых лет, и она находится на расстоянии примерно в 180 000 световых лет от Солнца.",
                                tableInfo: [
                                    { id: 1, title: "Тип", text: "Неправильная галактика" },
                                    {
                                        id: 2,
                                        title: "Размер",
                                        text: "60 000 световых лет"
                                    },
                                    { id: 3, title: "Созвездие", text: "Золотая Рыба" },
                                    {
                                        id: 4,
                                        title: "Расстояние до солнца",
                                        text: "180 000 световых лет"
                                    },
                                    {
                                        id: 5,
                                        title: "Обозначения",
                                        text: "NGC 6822"
                                    }
                                ]
                            },

                            {
                                id: 5,
                                type: "planet",
                                viewType: "Планета",
                                name: "Меркурий",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/CW0131775256F_Kuiper_Crater.png/450px-CW0131775256F_Kuiper_Crater.png",
                                description: "4,50 миллиарда лет"
                            },
                            {
                                id: 6,
                                type: "planet",
                                viewType: "Планета",
                                name: "Венера",
                                image: "https://icdn.lenta.ru/images/2022/11/15/11/20221115112851842/square_1280_15d3c670349fcb7a84ae750119782bff.jpeg",
                                description: "4,50 миллиарда лет"
                            },
                            {
                                id: 7,
                                type: "planet",
                                viewType: "Планета",
                                name: "Земля",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/NASA_Earth_America_2002.jpg/1200px-NASA_Earth_America_2002.jpg",
                                description: "4,54 миллиарда лет"
                            },
                            {
                                id: 8,
                                type: "planet",
                                viewType: "Планета",
                                name: "Марс",
                                image: "https://avatars.dzeninfra.ru/get-zen_doc/1572663/pub_5e16e4223642b600afd38f7c_5e16e521fe289100b00066b2/scale_1200",
                                description: "4,60 миллиарда лет"
                            },
                            {
                                id: 9,
                                type: "planet",
                                viewType: "Планета",
                                name: "Юпитер",
                                image: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/299/355/6.jpg",
                                description: "4,60 миллиарда лет"
                            },
                            {
                                id: 10,
                                type: "planet",
                                viewType: "Планета",
                                name: "Сатурн",
                                image: "https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg",
                                description: "4,50 миллиарда лет"
                            },
                            {
                                id: 11,
                                type: "planet",
                                viewType: "Планета",
                                name: "Уран",
                                image: "https://naked-science.ru/wp-content/uploads/2016/05/field_image_pia18182-16_0.jpg",
                                description: "4,50 миллиарда лет"
                            },
                            {
                                id: 12,
                                type: "planet",
                                viewType: "Планета",
                                name: "Нептун",
                                image: "https://naked-science.ru/wp-content/uploads/2016/04/article_imageneptune_full-1024x1024.jpg",
                                description: "4,50 миллиарда лет"
                            },
                            {
                                id: 13,
                                type: "planet",
                                viewType: "Планета",
                                name: "Плутон",
                                image: "https://cdnn21.img.ria.ru/images/7e4/2/5/1564269868_0:0:1280:720_1920x0_80_0_0_119256ae8832f767d0d9b4f46a961c84.jpg",
                                description: "4,60 миллиарда лет"
                            },
                            {
                                id: 14,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Спутник Гагарина",
                                image: "https://icdn.lenta.ru/images/2021/04/09/14/20210409144409632/pic_f240b3d5df74e0d31804d1fa2ecf6bb8.jpg",
                                description: "12 апреля 1961 год"
                            },
                            {
                                id: 15,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "GPS IIR-12",
                                image: "https://bastion-opk.ru/VVT/GPS_KA_160209_02.jpg",
                                description: "20 ноября 2006 год"
                            },
                            {
                                id: 16,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "GOES 16",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Early_GOES_Spac0174.jpg/1200px-Early_GOES_Spac0174.jpg",
                                description: "19 января 2016 год"
                            },
                            {
                                id: 17,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Hubble Space Telescope",
                                image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg",
                                description: "24 апреля 1990 год"
                            },
                            {
                                id: 18,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "ISS (Международная космическая станция)",
                                image: "https://s0.rbk.ru/v6_top_pics/media/img/2/48/755999011167482.jpg",
                                description: "20 января 1998 год"
                            },
                            {
                                id: 19,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Landsat 8",
                                image: "https://infuture.ru/filemanager/578319main_20110809-ldcm-lrg.jpeg",
                                description: "11 февраля 2011 год"
                            },
                            {
                                id: 20,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "NOAA-20",
                                image: "https://safavia.ru/wp-content/uploads/2020/04/noaa-20-photo.png",
                                description: "18 января 2017 год"
                            },
                            {
                                id: 21,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Sentinel-2A",
                                image: "https://www.techcult.ru/content/2015/2823/sentinel-2a_1_src.jpg",
                                description: "23 июня 2015 год"
                            },
                            {
                                id: 22,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Tiangong Space Station",
                                image: "https://images.techinsider.ru/upload/img_cache/1c6/1c6a179d5bf63c820add6533d6eaf4b5_ce_1100x733x50x0.jpg",
                                description: "29 апреля 2021 год"
                            },
                            {
                                id: 23,
                                type: "satellite",
                                viewType: "Спутник",
                                name: "Спутник Земли-1",
                                image: "https://kosmoved.ru/im/sputnik-1.jpg",
                                description: "4 октября 1957 год"
                            },
                            {
                                id: 24,
                                type: "meteorite",
                                viewType: "Метеорит",
                                name: "Аполлон-11",
                                image: "https://m.4glaza.ru/images/articles/lunnyj-meteorit.jpg",
                                description: "25.2 кг"
                            },
                            {
                                id: 25,
                                type: "meteorite",
                                viewType: "Метеорит",
                                name: "Челябинск",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Chelyabinsk_meteorite_Historical_Museum_1.jpg/1200px-Chelyabinsk_meteorite_Historical_Museum_1.jpg",
                                description: "440 кг"
                            },
                            {
                                id: 26,
                                type: "meteorite",
                                viewType: "Метеорит",
                                name: "Гибсон Метеорит",
                                image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Gibeon-meteorite-in-Post-Street-Mall.jpg",
                                description: "27.22 кг"
                            },
                            {
                                id: 27,
                                type: "meteorite",
                                viewType: "Метеорит",
                                name: "Энсисхайм",
                                image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Ensisheim_meteorit_donnerstein_1_vss2007.jpg",
                                description: "15 кг"
                            },
                            {
                                id: 28,
                                type: "meteorite",
                                viewType: "Метеорит",
                                name: "Хибиногорск",
                                image: "https://n1s2.hsmedia.ru/0a/bc/15/0abc15a48f3837642f9bee77f8d9d631/728x485_1_7cb0b72dd646cd894fb24c9b0c5d7ac3@3200x2133_0xac120003_6879228651672473917.jpeg",
                                description: "125 г"
                            },
                            {
                                id: 29,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Орион",
                                image: "https://elementy.ru/images/kartinka_dnya/picture_of_the_day_orion_1_703.jpg",
                                description: "594 кв. градуса"
                            },
                            {
                                id: 30,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Большая Медведица",
                                image: "https://imgtest.mir24.tv/uploaded/images/crops/2021/February/870x489_0x1_detail_crop_20210210112124_83885ed5_e6065371eab2470a67bfde41854d7d2bf81ef0000a614773e04430f2c380c28d.jpg",
                                description: "1280 кв. градусов"
                            },
                            {
                                id: 31,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Лебедь",
                                image: "https://star-hunter.ru/wp-content/uploads/2018/09/3_5nr_7-3-35.jpg",
                                description: "804 кв. градуса"
                            },
                            {
                                id: 32,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Скорпион",
                                image: "https://spacegid.com/wp-content/uploads/2013/10/Skoplenie-Babochka-M6.jpg",
                                description: "497 кв. градусов"
                            },
                            {
                                id: 33,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Жираф",
                                image: "https://spacegid.com/wp-content/uploads/2015/03/CS-ZHirafa.jpg",
                                description: "757 кв. градусов"
                            },
                            {
                                id: 34,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Кассиопея",
                                image: "https://ic.pics.livejournal.com/photophren/62018626/334210/334210_original.jpg",
                                description: "598 кв. градусов"
                            },
                            {
                                id: 35,
                                type: "constellation",
                                viewType: "Созвездие",
                                name: "Геркулес",
                                image: "https://i.ytimg.com/vi/xuiqRltnvfo/maxresdefault.jpg",
                                description: "1225,1 кв. градуса"
                            }
                        ]
                    }
                ],
                interceptors: {
                    response: (data: Array<any>, { request }) => {
                        if (request.query.type) {
                            return data.filter((item) => item.type === request.query.type);
                        } else if (request.query.id) {
                            return data.find((item) => item.id === Number(request.query.id));
                        } else {
                            return data.filter((item) => item.name.includes(request.query.q));
                        }
                    }
                }
            },
            {
                path: "/news",
                method: "get",
                routes: [
                    {
                        data: [
                            {
                                id: 1,
                                title: "Космическая Миссия «Пределы Вселенной»",
                                text: "Космическое агентство проводит амбициозную миссию, направленную на изучение границ Вселенной. Межпланетарные зонды отправлены к краям нашей солнечной системы, где они будут исследовать взаимодействие солнечного ветра и межзвездной среды.",
                                image: "https://avatars.dzeninfra.ru/get-zen_doc/3769340/pub_603b7566732f3c7f62ffe2f7_603b82386cd9133fa64c189e/scale_1200",
                                reading: 7,
                                themes: [
                                    { id: 1, label: "Апполон" },
                                    { id: 2, label: "Млечный путь" },
                                    { id: 3, label: "Миссия на Астероид" }
                                ]
                            },
                            {
                                id: 2,
                                title: "Роботизированная Миссия на Астероид",
                                text: "Космическая агентство запустило миссию робота-исследователя на ближайший астероид. Ожидается, что робот соберет образцы поверхности астероида и принесет их на Землю для дальнейших исследований.",
                                image: "https://www.vesvks.ru/public/wysiwyg/images/Screenshot_6(43).jpg",
                                themes: [
                                    { id: 1, label: "Марс" },
                                    { id: 2, label: "Шатл" },
                                    { id: 3, label: "Пределы Вселенной" },
                                    { id: 4, label: "Необычный метеор" }
                                ]
                            },
                            {
                                id: 3,
                                title: "Новый Пилотируемый Рейс на Марс",
                                text: "Спустя несколько лет после первой успешной пилотируемой миссии на Марс, космическое агентство планирует отправить новый экипаж на красную планету. Миссия будет включать более длительное пребывание на поверхности и более широкий спектр научных исследований.",
                                image: "https://www.ixbt.com/img/n1/news/2022/11/1/maxresdefault_large.jpg",
                                reading: 5,
                                themes: [
                                    { id: 1, label: "Плутон" },
                                    { id: 2, label: "Илон Маск" },
                                    { id: 3, label: "Пределы Вселенной" },
                                    { id: 4, label: "SpaceX" },
                                    { id: 5, label: "Роскосмос" }
                                ]
                            },
                            {
                                id: 4,
                                title: "Развитие Туризма в Космосе",
                                text: "Частные компании активно работают над развитием космического туризма. Первые коммерческие полеты в космос уже стали реальностью, и ожидается, что в ближайшие годы космический туризм станет более доступным для широкой аудитории.",
                                image: "https://tourlib.net/statti_tourism/images/space-tourism1.jpg",
                                reading: 7,
                                themes: [
                                    { id: 1, label: "Новый мир" },
                                    { id: 2, label: "Илон Маск" },
                                    { id: 3, label: "Звёзды" },
                                    { id: 4, label: "SpaceX" },
                                    { id: 5, label: "Природа" }
                                ]
                            },
                            {
                                id: 5,
                                title: "Поиски Внеземных Сигналов",
                                text: "Астрономы продолжают искать потенциальные сигналы от других цивилизаций. Недавно был зафиксирован интересный радиосигнал, который вызвал дискуссии в научных кругах.",
                                image: "https://1prof.by/wp-content/uploads/2020/06/nasa-2306.jpg",
                                reading: 8,
                                themes: [
                                    { id: 1, label: "Марс" },
                                    { id: 2, label: "Миссия на луну" }
                                ]
                            },
                            {
                                id: 6,
                                title: "Разработка Новой Генерации Космических Летательных Аппаратов",
                                text: "Инженеры работают над новыми технологиями для космических миссий. Ожидается, что новая генерация ракет и зондов сможет достичь дальних уголков космоса и сделает более сложные миссии возможными.",
                                image: "https://overclockers.ru/st/legacy/blog/396911/287648_O.png",
                                reading: 10,
                                themes: [
                                    { id: 1, label: "Луна" },
                                    { id: 2, label: "Солнце нагрелось;)" }
                                ]
                            }
                        ]
                    }
                ],
                interceptors: {
                    response: (data: Array<any>, { request }) => {
                        if (request.query.id) {
                            return data.find((item) => item.id === Number(request.query.id));
                        } else {
                            return data;
                        }
                    }
                }
            }
        ]
    }
};

export default mockServerConfig;
