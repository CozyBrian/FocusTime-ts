import React, {useState, useEffect} from 'react';
import { SafeArea } from './src/utils/SafeArea';
import { Focus } from './src/components/Focus/focus';
import { FocusType } from './src/components/modal';
import { Timer } from './src/components/Timer/timer';
import { FocusHistory } from './src/components/Focus/focusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string|null>(null);
  const [focusHistory, setFocusHistory] = useState<FocusType[]>([]);

  const addFocusSubjectHistoryWithState = (subject: string, status: number) => {
    setFocusHistory([...focusHistory, { key: String(focusHistory.length + 1), subject, status }]);
  };

  const clear = (fs: string) => {
    addFocusSubjectHistoryWithState(fs, STATUSES.CANCELLED);
    setFocusSubject(null);
  }
  const end = (fs: string) => {
    addFocusSubjectHistoryWithState(fs, STATUSES.COMPLETE);
    setFocusSubject(null);
  }

  const saveFocusHistory = async () => {
    try {
      AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);


  return (
    <SafeArea>
      {focusSubject ? (
        <Timer 
          focusSubject={focusSubject} 
          clearSubject={() => clear(focusSubject)}
          onTimerEnd={() => end(focusSubject)}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject}/>
          <FocusHistory focusHistory={focusHistory}/>
        </>
      )}
    </SafeArea>
  );
}
