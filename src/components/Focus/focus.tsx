import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
`
const TextView = styled.View`
  margin: 8px;
`

const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`

type Props = {
  addSubject: React.Dispatch<React.SetStateAction<string>>;
}
 
export const Focus: React.FC<Props> = ({addSubject}: Props) => {
  return (
    <Container>
      <TextView>
        <Text>What would you like to focus on?</Text>
      </TextView>
    </Container>
  )
}
