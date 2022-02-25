import React from "react";
import { colors } from "../../constants";
import styled from "styled-components";

const Container = styled.View`
  height: 50px;
  background-color: ${colors.White};
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  shadow-color: #000;
  shadow-offset:  0px 3px;
  shadow-opacity: 0.37;
  shadow-radius: 3.2px;

  elevation: 8;
`;

const CardText = styled.Text`
  padding-left: 12px;
  font-size: 20px;
`;
type Props = {
  subject: string,
}

export const FocusItem: React.FC<Props> = ({subject}: Props) => {

  const Status = styled.View`
    height: 50px;
    width: 5%;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #aa0000;
  `;

  return (
    <Container>
      <CardText>Hello</CardText>
      <Status/>
    </Container>
  )
}