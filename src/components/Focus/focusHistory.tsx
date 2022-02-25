import React from 'react';
import { colors } from '../../constants';
import { SettingsIcon } from '../../utils';
import styled from 'styled-components/native';
import { FocusType } from '../modal';
import { FocusItem } from './focus-item';
import { FlatList } from 'react-native';

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

const ItemList = styled.View`
  flex: 1;
`;

type Props = {
  focusHistory: FocusType[]
}

export const FocusHistory: React.FC<Props> = ({focusHistory}: Props) => {
  return (
    <Container>
      <Header>
        <HeaderText>Focus</HeaderText>
        <SettingsIcon onPress={null}/>
      </Header>
      <ItemList>
        <FlatList
          data={focusHistory}
          renderItem={(item) => {
            return (
              <FocusItem subject={item.subject}/>
            )
          }}
        />
      </ItemList>
    </Container>
  )
}
