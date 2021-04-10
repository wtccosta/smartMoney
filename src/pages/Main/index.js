import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList'

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySumary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    padding: 10,
  }
});

export default Main;
