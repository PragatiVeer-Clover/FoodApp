
import { img } from "../assets";
import RecommendMenu from "../screens/Home/components/RecommendMenu";
import { BestSellerItem, MenuItem, RecommendMenuItem } from "../screens/Home/types";
import { onbordingProps } from "../screens/OnBording/types";

export const OnbordingData: onbordingProps[] = [
  { id: '1', image: 'file-text', title: 'Order for Food', description: 'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { id: '2', image: 'credit-card', title: 'Easy Payment', description: 'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { id: '3', image: 'truck', title: 'Fast Delivery', description: 'Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
];

export const bottomTabList = [
  { name: 'Home', icon: 'home' },
  { name: 'Menu', icon: 'menu' },
  { name: 'Favorites', icon: 'favorites' },
  { name: 'Orders', icon: 'orders' },
  { name: 'Help', icon: 'help' }
];

export const menuList: readonly MenuItem[] = [
  { name: 'Snacks', icon: 'snack' },
  { name: 'Meals', icon: 'meals' },
  { name: 'Vegan', icon: 'vegan' },
  { name: 'Dessert', icon: 'dessert' },
  { name: 'Drinks', icon: 'drinks' },
] as const;

export const bestSellerList: readonly BestSellerItem[] = [
  { id: 1, image: img.food1, price: 12.99, name: 'Classic Burger' },
  { id: 2, image: img.food2, price: 15.50, name: 'Sushi Platter' },
  { id: 3, image: img.food3, price: 9.75, name: 'Pesto Pasta' },
  { id: 4, image: img.food4, price: 8.20, name: 'Fruit Salad' },
] as const;

export const RecommendMenuList: readonly RecommendMenuItem[] = [
  { id: 1, image: img.food5, price: 14.99, rating: 4.8, fav: true },
  { id: 2, image: img.food6, price: 10.50, rating: 4.5, fav: false },
  { id: 3, image: img.food1, price: 11.25, rating: 4.2, fav: false },
  { id: 4, image: img.food2, price: 13.50, rating: 4.7, fav: true },
] as const;