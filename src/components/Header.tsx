import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Calculator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Header;
