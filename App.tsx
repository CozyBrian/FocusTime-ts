import React, {useState, useEffect} from 'react';
import { SafeArea } from './src/utils/SafeArea';
import { Focus } from './src/components/Focus/focus';
import { FocusType } from './src/components/modal';
import { Timer } from './src/components/Timer/timer';
import { FocusHistory } from './src/components/Focus/focusHistory';

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
    console.log("cleard");
  }
  const end = (fs: string) => {
    addFocusSubjectHistoryWithState(fs, STATUSES.COMPLETE);
    setFocusSubject(null);
    console.log("end");
  }



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
