import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { black, white } from '../utils/colors';

function Button({ disabled = false, onPress, style = { backgroundColor: black }, text }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && { opacity: 0.7 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    width: 160
  },
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default Button;
