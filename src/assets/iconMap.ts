// src/assets/iconMap.ts
import snack from './icons/Snacks.svg';
import meals from './icons/Meals.svg';
import home from './icons/home1.svg';
import menu from './icons/menu.svg';
import orders from './icons/orders.svg';
import help from './icons/help.svg';
import favorites from './icons/f.svg';
import vegan from './icons/Vegan.svg';
import drinks from './icons/Drinks.svg';
import dessert from './icons/Desserts.svg';

const iconMap = {
  snack,
  meals,
  home,
  menu,
  orders,
  help,
  favorites,
  vegan,
  drinks,
  dessert,
} as const;

export type IconKey = keyof typeof iconMap;
export default iconMap;
