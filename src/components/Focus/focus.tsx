import React, {useState} from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Button } from '../../utils/Button';
import { colors } from '../../constants';

const Container = styled.View`
padding: 12px;
`
const TextView = styled.View`
  margin: 8px;
`
const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.Text};
`
const InputTextBox = styled.View`
  height: 50px;
  background-color: ${colors.White};
  border-radius: 15px;

  shadow-color: #000;
  shadow-offset:  0px 4px;
  shadow-opacity: 0.37;
  shadow-radius: 3.2px;

  elevation: 8;
`;

type Props = {
  addSubject: React.Dispatch<React.SetStateAction<string|null>>;
}
 
export const Focus: React.FC<Props> = ({addSubject}: Props) => {
  const [subject, setSubject] = useState<string>("")


  return (
    <Container>
      <TextView>
        <Text>What would you like to focus on?</Text>
      </TextView>
      <InputTextBox>
      <TextInput
        value={subject}
        onChangeText={setSubject}
        style={{flex: 1, padding: 10, fontSize: 18}}
      />
      </InputTextBox>
      <Button 
        title="Focus"
        bc={colors.Secondary}
        onPress={() => addSubject(subject)}
        style={{marginTop: 14, alignSelf: "flex-end"}}/>
    </Container>
  )
}
