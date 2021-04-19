import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
  const currentBalance = 2065.35;
  return (
    <View style={styles.container}>
      <BalanceLabel currencyBalance={currentBalance} />

      <View>
        <TextInput styles={styles.input} />
        <TextInput styles={styles.input} />
        <Button title="GPS" />
        <Button title="camera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 100, 
  width: 100, 
    borderWidth: 1, 
    borderColor: 'black',
  },
});

export default NewEntry;
