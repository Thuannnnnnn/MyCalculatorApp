import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Calculator />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlexRow: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default HomeScreen;
