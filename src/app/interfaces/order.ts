import { Article } from "./article";

export interface Order {
    key?: string;
    status: boolean;
    customerName: string;
    customerAddress: string;
    list: Article[];
}
