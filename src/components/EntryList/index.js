import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Últimos Lançamentos</Text>

      <FlatList
        data={entries}
        renderItem={({item}) => <Text> {item.description} - ${item.amount} </Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
