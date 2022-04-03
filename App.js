import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Área pix',
  },
  {
    id: '2',
    title: 'Pagar',
  },
  {
    id: '3',
    title: 'Transferir',
  },
  {
    id: '4',
    title: 'Depositar',
  },
  {
    id: '5',
    title: 'Reacarregar Celular',
  }
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.listaOpcao}>
      <TouchableOpacity>
        <Text style={styles.textoOpcao}>{item.title}</Text>
      </TouchableOpacity>
    </View>
    );

  return (
    <SafeAreaView>
      <View style={styles.areaSuperior}>
        <View style={styles.barraSuperior}>
          <View style={styles.circuloPerfil}>
            <Text>O</Text>
          </View>
          <View style={styles.containerIconesSuperior}>
            <Text style={styles.iconesSuperior}>ICONE</Text>
            <Text style={styles.iconesSuperior}>ICONE</Text>
            <Text style={styles.iconesSuperior}>ICONE</Text>
          </View>
        </View>
        <Text style={styles.textoUsuario}>Olá, Felipe</Text>
      </View>
      <View style={styles.containerConta}>
        <View style={styles.containerContaLinha}>
          <Text style={styles.textoConta}>Conta</Text>
          <Text style={styles.textoConta}>ICONE</Text>
        </View>
        <View>
          <Text style={styles.textoSaldoConta}>R$VALOR</Text>
        </View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.containerCartao}>
        <Text style={styles.cartaoTexto}>ICONE Meus cartões</Text>
      </TouchableOpacity>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.cardsNoticias}>
          <Text style={styles.cardTexto}>Invista a partir de R$1m Conheça os fundos Nu Seleção.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardsNoticias}>
          <Text style={styles.cardTexto}>Invista a partir de R$1m Conheça os fundos Nu Seleção.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardsNoticias}>
          <Text style={styles.cardTexto}>Invista a partir de R$1m Conheça os fundos Nu Seleção.</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: '5%',
    marginRight: '5%'
  },
  areaSuperior: {
    height: 150,
    width: '100%',
    backgroundColor: '#7448b1',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  barraSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  circuloPerfil:{
    marginLeft: '3%',
    marginTop: '5%',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerIconesSuperior: {
    flexDirection: 'row',
    marginTop: '5%'
  },
  iconesSuperior: {
    marginRight: 8,
    color: '#fff'
  },
  textoUsuario: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    top: '30%',
    marginLeft: '5%'
  },
  containerConta: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  containerContaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textoConta: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textoSaldoConta: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  listaOpcao: {
    flexDirection: 'row',
    marginTop: 30
  },
  textoOpcao: {
    fontSize: 15,
    fontStyle: 'italic',
    margin: 10
  },
  containerCartao: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ebebeb',
    marginTop: 30
  },
  cartaoTexto: {
    paddingLeft: 10,
    fontSize: 15
  },
  cardsNoticias: {
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    marginTop: 25,
    borderRadius: 10,
    margin: 10
  },
  cardTexto: {
    textAlign: 'left',
    fontSize: 12,
    margin: 5
  }
});
