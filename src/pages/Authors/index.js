import React, { useState, useEffect } from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

const Authors = () => {
  const navigation = useNavigation();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api.get('authors').then(response => {
      setAuthors(response.data);
    });
  }, []);

  function handleAuthorNavigation(id) {
    navigation.navigate('Books', {
      author_id: id,
    })
  }

    return (
      <View style={styles.page}>
        <Icon
          name="navigate-before"
          size={30}
          color="white"
          onPress={navigation.goBack}
        /> 
       
         
       {authors.map((author, idx) => (
          <RectButton 
            key={idx} 
            style={styles.container} 
            onPress={() => handleAuthorNavigation(author.id)}
          >            
              <Text style={styles.text}>
              {author.name}
              </Text>
              <Icon
          name="navigate-next"
          size={30}
          color="white"
        /> 
          </RectButton>
       ))}
     </View>
   ) 
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff99cc'
  },
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 1,
    marginTop: 15,
  },
  text: {
    fontSize: 34,
    textAlign: 'center',
    color: '#f5f5f5',
  }
})

export default Authors;