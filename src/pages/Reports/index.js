import React from 'react';
import {View, Picker, Button, StyleSheet } from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

const Reports = () => {
  return (
    <View style={styles.container}>
      <EntryLabel />
      <View>
          <Picker>
              <Picker.Item label="Todas Categorias" ></Picker.Item>
          </Picker>
          <Picker>
          <Picker.Item label="Últmos 7 Dias" ></Picker.Item>
          </Picker>
      </View>
      <EntrySumary />
      <EntryList />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: ''
    }
});

export default Reports;
