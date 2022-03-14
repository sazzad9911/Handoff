
import { SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import DrawerApp from './routes/Drawer';
const App = () => {
  return (
    <DrawerApp/>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
    paddingTop: 25
  },
  SafeAppContainer: {
    height: '100%',
    width: '100%',
  },
})