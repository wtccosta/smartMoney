import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;
  
  //()=>navigation.navigate('NewEntry')
  
  const save = () => {
    saveEntry();
  };

  const entriesGrouped = [
    {key: 1, description: 'Alimentação', amount: '$201'},
    {key: 2, description: 'Combustível', amount: '$12'},
    {key: 3, description: 'Aluguel', amount: '$120'},
    {key: 4, description: 'Lazer', amount: '$250'},
    {key: 5, description: 'Outros', amount: '$1200'},
  ]

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 291},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button title="Adicionar" onPress={ save } />
      <EntrySumary entries={entriesGrouped}/>
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default Main;
