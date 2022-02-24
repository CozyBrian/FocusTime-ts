import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Focus } from './src/components/focus';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Focus/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#208fda',
  },
});
