import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { RS, wp, hp } from '../../../styles/scaling';

interface Props {
  data: any,
  index?: number
}

const Pagination: FC<Props> = ({ data, index }) => {
  return (
    <View style={styles.container}>
      {data?.map?.((_: any, i: number) => (
        <View
          key={i}
          style={[
            styles.dot,
            i === index ? styles.activeDot : styles.inactiveDot
          ]}
        />
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  dot: {
    width: wp(8),
    height: hp(0.5),
    borderRadius: RS(15),
    backgroundColor: colors.black,
    margin: 5,
  },
  activeDot: {
    backgroundColor: colors.orangeBase
  },
  inactiveDot: {
    backgroundColor: colors.yellow2
  }
});

export default Pagination;