import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySumaryChart from './EntrySumaryChart';
import EntrySumaryList from './EntrySumaryList';

const EntrySumary = () => {
  return (
    <View style={styles.container}>
      <EntrySumaryChart />
      <EntrySumaryList /> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
       // flex: 1,
    }
});

export default EntrySumary;
