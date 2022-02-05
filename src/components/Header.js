import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/Styles';
import {Icon} from 'react-native-elements';

export default function Header({title, type}) {
  return (
    <View style={styles.header}>
      <Icon
        type="material"
        name={type}
        color={colors.headerText}
        size={28}
        onPress={() => {}}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
