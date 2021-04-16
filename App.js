import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Homepage from './components/Homepage';
import Showcase from './components/Showcase';

const bgColor = '#F59E0B';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={bgColor} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Showcase />
          <Homepage />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
