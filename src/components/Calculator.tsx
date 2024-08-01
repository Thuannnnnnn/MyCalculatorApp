import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//var RNFS = require('react-native-fs');

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    setResult(result + value);
  };

  const calculate = async () => {
    try {
      setResult(eval(result).toString());

      //const path = RNFS.DocumentDirectoryPath + '/calculationHistory.json';
      const logEntry = {
        result: result,
        timestamp: new Date().toISOString(),
      };
      //console.log(logEntry+" ,"+path);
    } catch (e) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="C" onPress={clear} />
        <Button title="=" onPress={calculate} />
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10
  },
});

export default Calculator;
