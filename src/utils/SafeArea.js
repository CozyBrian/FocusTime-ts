import styled from "styled-components";
import { colors } from "../constants";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.Primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
