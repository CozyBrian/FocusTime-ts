import React, {useState} from "react";
import { colors } from "../../constants";
import { Vibration, Platform } from "react-native";
import styled from "styled-components/native";
import {ProgressBar} from "react-native-paper";
import { Timing } from "./timing";
import { Button } from "../../utils/Button";
import { Countdown } from "./countdown";

const Container = styled.View`
  flex: 1;
`;
const CountdownView = styled.View`
  flex: 0.5;
  justify-content: center;
`;
const ButtonWrapper = styled.View`
  flex: 0.3;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;
const SubjectView = styled.View`
  
`;
const FText = styled.Text`
  color: ${colors.White};
  text-align: center;
`;
const SText = styled.Text`
  color: ${colors.White};
  text-align: center;
  font-weight: bold;
`;
const ClearView = styled.View`
  padding-bottom: 20px;
  padding-left: 20px;
`;

const DEFAULT_TIME = 1;

type Props = {
  focusSubject: string | null,
  clearSubject: () => void,
  onTimerEnd: () => void,
}

export const Timer = ({focusSubject, clearSubject, onTimerEnd}:Props) => {
  const [minutes, setMinutes] = useState<number>(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(2000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min: number) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <Container>
      <CountdownView>
        <Countdown minutes={minutes} onProgress={onProgress} onEnd={onEnd} isPaused={!isStarted} />
        <ProgressBar progress={progress} color={colors.White} style={{height: 7.5}} />
      </CountdownView>
      <SubjectView>
        <FText>Focusing on:</FText>
        <SText>{focusSubject}</SText>
      </SubjectView>
      <ButtonWrapper>
        <Timing onChangeTime={changeTime}/>
      </ButtonWrapper>
      <ButtonWrapper>
        {isStarted ? (
          <Button title="pause" size={80} onPress={() => setIsStarted(false)}/>
        ) : ( 
          <Button title="play" size={80} onPress={() => setIsStarted(true)}/>
        )}
      </ButtonWrapper>
      <ClearView>
        <Button title="stop" onPress={() => clearSubject()}/>
      </ClearView>
    </Container>
  )
}