import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeArea } from './src/utils/SafeArea';
import { Focus } from './src/components/Focus/focus';
import { FocusHistory } from './src/components/Focus/focusHistory';


export default function App() {
  const [focusSubject, setFocusSubject] = useState<string>("");

  return (
    <>
      <StatusBar style="auto" />
      <SafeArea>
        <Focus addSubject={setFocusSubject}/>
        <FocusHistory />
      </SafeArea>
    </>
  );
}
