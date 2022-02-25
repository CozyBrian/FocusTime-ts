import React from 'react';
import { colors } from '../../constants';
import { SettingsIcon } from '../../utils';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.White};
  padding: 12px;
  shadow-color: #000;
  shadow-offset:  0px 1px;
  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
  elevation: 3;
`;
const HeaderText = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const FocusHistory: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Focus</HeaderText>
        <SettingsIcon onPress={null}/>
      </Header>
    </Container>
  )
}
