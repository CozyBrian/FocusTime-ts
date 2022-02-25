import React, {useState} from "react";
import { colors } from "../../constants";
import styled from "styled-components";
import { Countdown } from "./countdown";

const Container = styled.View`
  flex: 1;
`;

const CountdownView = styled.View`

`;

const DEFAULT_TIME = 0.1;

export const Timer = () => {
  const [minutes, setMinutes] = useState<number>(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    //onTimerEnd();
  };

  return (
    <Container>
      <CountdownView>
        <Countdown minutes={minutes} onProgress={onProgress} onEnd={onEnd} isPaused={!isStarted} />
      </CountdownView>
    </Container>
  )
}