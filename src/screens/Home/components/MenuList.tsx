import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../styles/colors';
import { menuList } from '../../../utils/helper';
import IconByVariant from '../../../components/IconByVariant';
import { hp, RS, wp } from '../../../styles/scaling';

const MenuList = () => {
  return (
    <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {menuList.map(item => (
          <TouchableOpacity key={item.name} style={styles.item}>
            <View style={styles.iconContainer}>
              <IconByVariant name={item.icon} size={hp(4.5)} />
            </View>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: hp(2),
    backgroundColor: colors.white100,
    width: '100%',
    alignSelf: 'center',
  },
  item: {
    alignItems: 'center',
    gap: hp(1),
    justifyContent: 'center',
  },
  text: {
    color: colors.black100,
    fontSize: RS(12),
    fontWeight: '500',
  },
  iconContainer: {
    backgroundColor: colors.yellow2,
    width: wp(14),
    height: wp(18),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuList;
