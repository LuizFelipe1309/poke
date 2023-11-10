import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, SetImageAsset, Alert } from 'react-native';

export default function BaseB() {
  const [pos, setPos] = useState(0)

  const Grass = require('./types/Grass.png')
  const Poison = require('./types/Poison.png')
  const Fire = require('./types/Fire.png')
  const Flying = require('./types/Flying.png')
  const Water = require('./types/Water.png')
  const Bug = require('./types/Bug.png')
  const Normal = require('./types/Normal.png')

  const pokemon =[
    {id:1, name: 'Bubasaur', type1: Grass, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:2, name: 'Ivysaur', type1: Grass, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:3, name: 'Venosaur', type1: Grass, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:4, name: 'Charmander', type1: Fire, type2: Fire, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:5, name: 'Charmeleon', type1: Fire, type2: Fire, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:6, name: 'Charizard', type1: Fire, type2: Flying, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:7, name: 'Squirtle', type1: Water, type2: Water, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:8, name: 'Wartortle', type1: Water, type2: Water, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:9, name: 'Blastoise', type1: Water, type2: Water, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:10, name: 'Caterpie', type1: Bug, type2: Bug, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:11, name: 'Metapod', type1: Bug, type2: Bug, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:12, name: 'Butterfree', type1: Bug, type2: Flying, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:13, name: 'Weedle', type1: Bug, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:14, name: 'Kakuna', type1: Bug, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:15, name: 'Beedrill', type1: Bug, type2: Poison, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:16, name: 'Pidgey', type1: Normal, type2: Flying, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:17, name: 'Pidegeotto', type1: Normal, type2: Flying, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:18, name: 'Pidgeot', type1: Normal, type2: Flying, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:19, name: 'Rattata', type1: Normal, type2: Normal, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    {id:20, name: 'Raticate', type1: Normal, type2: Normal, img: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',},
    
  ]

  const id = pokemon[pos].id;
  const name = pokemon[pos].name;
  
  const type1 = pokemon[pos].type1;
  const type2 = pokemon[pos].type2;
  
  const pokeimg = pokemon[pos].img;
  

  function antes() {
    if(pos>= 1 && pos<=20) {
      setPos(pos-1);
    }
  }
  
  function depois() {
    if(pos>= 0 && pos<19) {
      setPos(pos+1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image style={styles.img} source={require('../../assets/pokeback.jpeg')} />
      
      
      <SafeAreaView style={styles.mainview}>
        <Image style={styles.mainimg} source={pokeimg}/>
      </SafeAreaView>

      <SafeAreaView style={{flexDirection: 'row'}}>
        <Image style={styles.poketype1} source={type1}/>
        <Image style={styles.poketype2} source={type2}/>
      </SafeAreaView>

      <SafeAreaView style={styles.cont}>
        <Text style={styles.maintext1}>#{id}</Text>
        <Text style={styles.maintext2}>{name}</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.viewbutton1}>

      <TouchableOpacity style={styles.button1} onPress={() => antes()}>
        <Text style={styles.textbnt}>Prev</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => depois()}>
        <Text style={styles.textbnt}>Next</Text>
      </TouchableOpacity>

      </SafeAreaView>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
  },


  viewbutton1: {
    flexDirection: 'row',
    top: 120,
  },
  textbnt: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
  },
  button1: {
    right: 13,
    borderStyle: 'solid',
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: '#ff0000',
  },
  button2: {
    left: 13,
    borderStyle: 'solid',
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: '#ff0000',
  },


  mainview: {
    alignItems: 'center'
  },
  mainimg: {
    width: 250,
    height: 250,
    top: -50,
  },

  poketype1: {
    height: 50,
    width: 130,
    right: 10,

  },
  poketype2: {
    height: 50,
    width: 130,
    left: 10,
  },

  cont: {
    flexDirection: 'row',
  },
  maintext1: {
    top: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingTop: 20,
  },
  maintext2: {
    top: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingTop: 20,
    left: 20,
  },
});