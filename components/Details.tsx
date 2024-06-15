import useFetchOneData from '@/hooks/useFetchPokemon';
import { StyleSheet, Text, Image, ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';

export function Details({ navigation, route }) {

    const { pokemon, loading, error } = useFetchOneData(route.params.name);

    useEffect(() => {
      console.log(pokemon, loading, error?.message);
    }, [loading]);

    if (loading) {
      return <ActivityIndicator style={styles.loading} />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textName}>NAME: {pokemon.name}</Text>
          <Text style={styles.text}># Pokedex: {pokemon.id}</Text>
          <Image
            source={{ URL: pokemon.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.textInfo}>Height: {pokemon.height}</Text>
          <Text style={styles.textInfo}>Weight: {pokemon.weight}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4B538',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#F43838',
    padding: 20,
    borderWidth: 10,
    borderColor: '#69665E',
    alignItems: 'center',
  },
  textName: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Courier New',
    fontWeight: '600',
    marginVertical: 10,
  },
});

