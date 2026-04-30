import { IconKey } from "../../assets/iconMap";

export type MenuItem = {
    name: string;
    icon: IconKey;
};


export type BestSellerItem = {
    id: number | string;
    image: any;
    price: number;
    name: string;
};
export type RecommendMenuItem = {
    id: number | string;
    image: any;
    price: number;
    rating: number;
    fav: boolean;
    name: string;
};
export type SearchItem = {
    image: string;
};