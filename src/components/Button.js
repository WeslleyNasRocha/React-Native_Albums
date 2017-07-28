/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Button = ({}) => (
  <View style={styles.container}>
    <Text>I'm Button</Text>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
