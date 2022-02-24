import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
`
const TextView = styled.View`
  margin: 8px;
`

const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`
 
export const Focus: React.FC = () => {
  return (
    <Container>
      <TextView>
        <Text>What would you like to focus on?</Text>
      </TextView>
    </Container>
  )
}
