import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,

  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
import { SafeAreaView } from 'react-native-safe-area-context';
// ── Types ──────────────────────────────────────────────────────────────────────
interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: { uri: string };
}

interface Category {
  id: string;
  label: string;
  emoji: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  { id: 'snacks',  label: 'Snacks',  emoji: '🍟' },
  { id: 'meal',    label: 'Meal',    emoji: '🍽️' },
  { id: 'vegan',   label: 'Vegan',   emoji: '🥦' },
  { id: 'dessert', label: 'Dessert', emoji: '🧁' },
  { id: 'drinks',  label: 'Drinks',  emoji: '🥤' },
];

const FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Mexican Appetizer',
    description: 'Tortilla Chips With Toppins',
    price: 15.0,
    rating: 5.0,
    image: { uri: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80' },
  },
  {
    id: '2',
    name: 'Pork Skewer',
    description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
    price: 12.99,
    rating: 4.0,
    image: { uri: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80' },
  },
  {
    id: '3',
    name: 'Cheese Nachos',
    description: 'Crispy nachos loaded with melted cheddar and jalapeños.',
    price: 9.99,
    rating: 4.5,
    image: { uri: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?w=800&q=80' },
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <View style={styles.ratingBadge}>
    <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    <Text style={styles.ratingStar}>⭐</Text>
  </View>
);

const CategoryPill: React.FC<{
  category: Category;
  active: boolean;
  onPress: () => void;
}> = ({ category, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[styles.categoryPill, active && styles.categoryPillActive]}
  >
    <View style={[styles.categoryIcon, active && styles.categoryIconActive]}>
      <Text style={styles.categoryEmoji}>{category.emoji}</Text>
    </View>
    <Text style={[styles.categoryLabel, active && styles.categoryLabelActive]}>
      {category.label}
    </Text>
  </TouchableOpacity>
);

const FoodCard: React.FC<{ item: FoodItem }> = ({ item }) => (
  <TouchableOpacity activeOpacity={0.92} style={styles.foodCard}>
    <Image source={item.image} style={styles.foodImage} resizeMode="cover" />
    <View style={styles.foodInfo}>
      <View style={styles.foodRow}>
        <Text style={styles.foodName}>{item.name}</Text>
        <View style={styles.dot} />
        <StarRating rating={item.rating} />
        <Text style={styles.foodPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.foodDesc} numberOfLines={2}>
        {item.description}
      </Text>
    </View>
    <View style={styles.divider} />
  </TouchableOpacity>
);

// ── Nav icons (emoji stand-ins) ────────────────────────────────────────────────
const NAV_ITEMS = [
  { icon: '🏠', label: 'Home' },
  { icon: '🍽️', label: 'Menu' },
  { icon: '❤️', label: 'Saved' },
  { icon: '📋', label: 'Orders' },
  { icon: '🎧', label: 'Support' },
];

// ── Main Screen ────────────────────────────────────────────────────────────────
const FoodApp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('snacks');
  const [activeNav, setActiveNav] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.yellow} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#aaa"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
            <Text style={styles.actionIcon}>🛍️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
            <Text style={styles.actionIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
            <Text style={styles.actionIcon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Categories Band ── */}
      <View style={styles.categoriesBand}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map(cat => (
            <CategoryPill
              key={cat.id}
              category={cat}
              active={activeCategory === cat.id}
              onPress={() => setActiveCategory(cat.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* ── Body ── */}
      <View style={styles.body}>
        {/* Sort row */}
        <View style={styles.sortRow}>
          <Text style={styles.sortLabel}>
            Sort By <Text style={styles.sortValue}>Popular</Text>
          </Text>
          <TouchableOpacity style={styles.sortIcon} activeOpacity={0.8}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Food list */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContent}>
          {FOOD_ITEMS.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      </View>

      {/* ── Bottom Nav ── */}
      <View style={styles.bottomNav}>
        {NAV_ITEMS.map((nav, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => setActiveNav(idx)}
          >
            <Text style={[styles.navIcon, activeNav === idx && styles.navIconActive]}>
              {nav.icon}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

// ── Colors ─────────────────────────────────────────────────────────────────────
const COLORS = {
  yellow:     '#F5C842',
  orange:     '#E05A1A',
  orangeLight:'#F07030',
  white:      '#FFFFFF',
  offWhite:   '#F9F6F0',
  black:      '#1A1A1A',
  gray:       '#888',
  lightGray:  '#E8E8E8',
};

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.yellow,
  },

  // Header
  header: {
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    paddingHorizontal: 14,
    height: 44,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.black,
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 18,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 6,
  },
  actionBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 18,
  },

  // Categories band (orange pill)
  categoriesBand: {
    backgroundColor: COLORS.orange,
    paddingTop: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  categoryPill: {
    alignItems: 'center',
    gap: 6,
  },
  categoryPillActive: {},
  categoryIcon: {
    width: 62,
    height: 72,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIconActive: {
    backgroundColor: COLORS.offWhite,
  },
  categoryEmoji: {
    fontSize: 26,
  },
  categoryLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  categoryLabelActive: {
    color: COLORS.white,
    fontWeight: '700',
  },

  // Body
  body: {
    flex: 1,
    backgroundColor: COLORS.offWhite,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -1,
    paddingTop: 14,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  sortLabel: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '500',
  },
  sortValue: {
    color: COLORS.orange,
    fontWeight: '700',
  },
  sortIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    paddingHorizontal: 16,
  },

  // Food card
  foodCard: {
    marginBottom: 4,
  },
  foodImage: {
    width: '100%',
    height: 210,
    borderRadius: 18,
    backgroundColor: COLORS.lightGray,
  },
  foodInfo: {
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  foodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  foodName: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.black,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.orange,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 3,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: '700',
  },
  ratingStar: {
    fontSize: 11,
  },
  foodPrice: {
    marginLeft: 'auto',
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.black,
  },
  foodDesc: {
    fontSize: 13,
    color: COLORS.gray,
    marginTop: 4,
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0D8CC',
    marginVertical: 10,
  },

  // Bottom nav
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  navIconActive: {
    opacity: 1,
  },
});

export default FoodApp;