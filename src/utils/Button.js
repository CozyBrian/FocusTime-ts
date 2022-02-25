import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  style = {},
  textStlye = {},
  size = 50,
  sw = 2,
  br = 4.5,
  bc = "#1C4670",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size, sw, br, bc).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStlye]}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, sw, br, bc) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / br,
      width: size * sw,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bc,

      shadowColor: "#000",
      shadowOffset: {height:0, width: 1},
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    text: { color: "#fff", fontSize: size / 2.5 },
  });
