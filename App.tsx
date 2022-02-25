import React, {useState} from 'react';
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
  const [focusSubject, setFocusSubject] = useState<string>("");
  const [focusHistory, setFocusHistory] = useState<FocusType[]>([]);

  const addFocusSubjectHistoryWithState = (subject: string, status: number) => {
    setFocusHistory([...focusHistory, { key: String(focusHistory.length + 1), subject, status }]);
  };

  return (
    <SafeArea>
      {true ? (
        <Timer />
      ) : (
        <>
          <Focus addSubject={setFocusSubject}/>
          <FocusHistory focusHistory={focusHistory}/>
        </>
      )}
    </SafeArea>
  );
}
