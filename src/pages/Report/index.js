import React from 'react';
import {View, Picker, Button, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

const Report = () => {

  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: 1, description: 'Alimentação', amount: '$201'},
    {key: 2, description: 'Combustível', amount: '$12'},
    {key: 3, description: 'Aluguel', amount: '$120'},
    {key: 4, description: 'Lazer', amount: '$250'},
    {key: 5, description: 'Outros', amount: '$1200'},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 291},
  ];


  return (
    <View style={styles.container}>
      <BalanceLabel currencyBalance={currentBalance} />
      <View>
          <Picker>
              <Picker.Item label="Todas Categorias" ></Picker.Item>
          </Picker>
          <Picker>
          <Picker.Item label="Últmos 7 Dias" ></Picker.Item>
          </Picker>
      </View>
      <EntrySumary entries={entriesGrouped} />
      <EntryList entries={entries} />
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

export default Report;
