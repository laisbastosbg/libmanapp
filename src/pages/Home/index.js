import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  function handleAuthorsNavigation() {
    navigation.navigate('Authors')
  }

  function handleBooksNavigation() {
    navigation.navigate('Books')
  }

  return(
    <View style={styles.page}>
      
      <RectButton
        style={styles.button}
        onPress={handleAuthorsNavigation}
      >
        <Text style={styles.text}>
          Autores
        </Text>
      </RectButton>
      <RectButton
        style={styles.button}
        onPress={handleBooksNavigation}
      >
        <Text style={styles.text}>
          Livros
        </Text>
      </RectButton>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9999ff'
  },
  text: {
    fontSize: 34,
    textAlign: 'center'
  },
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 1,
    marginTop: 15,
  }
})

export default Home;