import { ITable } from "./ITable";

export interface ISpaceObjects {
    id: number;
    name: string;
    image: string;
    description: string;
    viewType: string;
    size: number;
    otherDesignations: string;
    constellation: string;
    text: string;
    tableInfo: ITable[];
}
