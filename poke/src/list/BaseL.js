import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, FlatList, View } from "react-native";


export default function BaseL() {

  const [poke, setpoke] = useState([
    { id: 1, name: 'Bulbassaur', img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png', type1: 'Grass', type2: 'Poison' },
    { id: 2, name: 'Ivyssaur', img: 'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png', },
    { id: 3, name: 'Venossaur', img: 'https://img.pokemondb.net/sprites/black-white/normal/venusaur.png', },
    { id: 4, name: 'Charmander', img: 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png', },
    { id: 5, name: 'Charmeleon', img: 'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png', },
    { id: 6, name: 'Charizard', img: 'https://img.pokemondb.net/sprites/black-white/normal/charizard.png', },
    { id: 7, name: 'Squirtle', img: 'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png', },
    { id: 8, name: 'Wartortle', img: 'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png', },
    { id: 9, name: 'Blastoise', img: 'https://img.pokemondb.net/sprites/black-white/normal/blastoise.png', },
    { id: 10, name: 'Caterpie', img: 'https://img.pokemondb.net/sprites/black-white/normal/caterpie.png', },
    { id: 11, name: 'Metapod', img: 'https://img.pokemondb.net/sprites/black-white/normal/metapod.png', },
    { id: 12, name: 'Butterfree', img: 'https://img.pokemondb.net/sprites/black-white/normal/butterfree.png', },
  ])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.img} source={require('../../assets/pokeback.jpeg')} />

      <SafeAreaView style={styles.flatview}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={poke}
          renderItem={({ item }) => <Pokemon data={item} />}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    position: "absolute",
  },
  flatview: {
    top: -6,
    height: '81%',
    width: '100%',
    alignItems: "center"
  },
  textpoke1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textpoke2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingBottom: 5,
  },
  textpoke3: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
    paddingTop: 10,
    right: 10
  },
  imgpoke: {
    width: 50,
    height: 50,
    marginBottom: 10,
  }
});

function Pokemon(props) {
  return (
    <View>
      <View style={{ flexDirection: 'row', width: '100%', top: 15 }}>
        <Text style={styles.textpoke1}>#{props.data.id}</Text>
        <Text style={styles.textpoke2}>{props.data.name}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.imgpoke} source={{ uri: props.data.img }} />
        <Text style={styles.textpoke3}>{props.data.type1}</Text>
        <Text style={styles.textpoke3}>{props.data.type2}</Text>
      </View>
    </View>
  )
}
