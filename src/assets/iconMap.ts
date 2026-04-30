import snack from './icons/Snacks.svg';
import Meals from './icons/Meals.svg';
import home from './icons/home.svg';
import menu from './icons/menu.svg';
import orders from './icons/orders.svg';
import help from './icons/help.svg';
import vegan from './icons/vegan.svg';
import drinks from './icons/drinks.svg';
import dessert from './icons/dessert.svg';
import favorites from './icons/favorites.svg';
const iconMap = {
  snack: snack,
  meals: Meals,
  vegan:vegan,
  drinks:drinks,
  dessert:dessert,
  home: home,
  menu:menu,
  orders:orders,
  help:help,
  favorites:favorites


} as const;

export type IconKey = keyof typeof iconMap;
export type IconName = typeof iconMap[IconKey];

export default iconMap;
