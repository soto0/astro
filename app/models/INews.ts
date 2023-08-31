import { IThemes } from "./IThemes";

export interface INews {
    id: number;
    title: string;
    text: string;
    image: string;
    reading: number;
    themes: IThemes[];
}
