import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {colors} from './src/global/Styles';
import {Icon} from 'react-native-elements';
import SignInCreen from './src/screens/authScreens/SignInCreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <SignInCreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
