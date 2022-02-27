import React, {useState, useEffect, useRef} from "react";
import { colors } from "../../constants";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  color: ${colors.White};
  background-color: ${colors.Secondary};
  padding: 20px;
`;

type Props = {
  minutes: number,
  isPaused: boolean,
  onEnd: () => void,
  onProgress: (number: number ) => void
}

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const Countdown: React.FC<Props> = ({minutes = 0.1, isPaused = false, onProgress, onEnd}: Props) => {
  const interval = useRef<any>(null);

  const [millis, setMillis] = useState<number|any>(null);
  
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  const countDown = () => {
    setMillis((time: number) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);


  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}