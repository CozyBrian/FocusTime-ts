import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../constants';
import { Button } from '../../utils/Button';

const ButtonView = styled.View`
  flex: 1;
  align-items: center;
`;

type Props = {
  onChangeTime: (min: number) => void,
}

export const Timing = ({onChangeTime}: Props) => {
  return (
    <>
    <ButtonView>
      <Button title="10" bc={colors.Secondary} onPress={() => onChangeTime(10)}/>
    </ButtonView>
    <ButtonView>
      <Button title="15" bc={colors.Secondary} onPress={() => onChangeTime(15)}/>
    </ButtonView>
    <ButtonView>
      <Button title="20" bc={colors.Secondary} onPress={() => onChangeTime(20)}/>
    </ButtonView>
    </>
  )
}
