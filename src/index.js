/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const addEntry = () => {
    meuAlerta();
  };

  const meuAlerta = () => {
    // eslint-disable-next-line no-alert
    alert('Abrir tela de adiconar lançamento.');
    console.log('Olá, estou no console meu!!!!');
  };

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button onPress={addEntry} title="Adicionar" />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>

      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text> {item.key} </Text>}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        ùltimos Lançamentos
      </Text>

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

const styles = StyleSheet.create({});

export default App;
