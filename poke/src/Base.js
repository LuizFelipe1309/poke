import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, FlatList, View} from "react-native";


export default function Base() {

  const [poke, setpoke] = useState([
    { id: 1, name: 'Bulbassaur', img: require('../assets/sprite.png'), type1: 'Grass', type2: 'Poison'},
    { id: 2, name: 'Ivyssaur', img: require('../assets/sprite.png'), },
    { id: 3, name: 'Venossaur', img: require('../assets/sprite.png'), },
    { id: 4, name: 'Charmander', img: require('../assets/sprite.png'), },
    { id: 5, name: 'Charmeleon', img: require('../assets/sprite.png'), },
    { id: 6, name: 'Charizard', img: require('../assets/sprite.png'), },
    { id: 7, name: 'Squirtle', img: require('../assets/sprite.png'), },
    { id: 8, name: 'Wartortle', img: require('../assets/sprite.png'), },
    { id: 9, name: 'Blastoise', img: require('../assets/sprite.png'), },
    { id: 10, name: 'Caterpi', img: require('../assets/sprite.png'), },
    { id: 11, name: 'Metapod', img: require('../assets/sprite.png'), },
    { id: 12, name: 'Butterfree', img: require('../assets/sprite.png'), },
  ])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image style={styles.img} source={require('../assets/pokeback.jpeg')} />

      <SafeAreaView style={styles.flatview}>
        <FlatList
        showsVerticalScrollIndicator = {false}
        data={poke}
        renderItem={ ({item}) => <Pokemon data={item}/>}
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

function Pokemon(props){
  return(
    <View>
    <View style={{flexDirection:'row', width: '100%'}}>
      <Text style={styles.textpoke1}>#{props.data.id}</Text>
      <Text style={styles.textpoke2}>{props.data.name}</Text>
    </View>
    
    <View style={{flexDirection:'row'}}>
      <Image style={styles.imgpoke} source={props.data.img}/>
      <Text style={styles.textpoke3}>{props.data.type1}</Text>
      <Text style={styles.textpoke3}>{props.data.type2}</Text>
    </View>
    </View>
  )
}
