import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  navigation: any;
};

const AboutScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>About this Calculator App</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default AboutScreen;
