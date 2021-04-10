import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Últimos Lançamentos</Text>

      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text> {item.key} </Text>}
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
