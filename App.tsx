import { StatusBar } from 'expo-status-bar';
import Router from '~/router';

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}

