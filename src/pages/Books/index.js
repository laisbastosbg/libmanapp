import React, { useState, useEffect} from 'react';

import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

const Books = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const { params } = useRoute(); 

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    if(params && params.author_id) {
      api.get(`authors/${params.author_id}/books`).then(response => {
        setBooks(response.data);
      });
    } else {
      api.get('books').then(response => {
        setBooks(response.data);
      });
    }
  }

  function handleDeleteBook(book_id) {
    api.delete(`books/${book_id}`)
    loadData();
  }

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={styles.page}
      >
      <Icon 
        name="navigate-before"
        size={30}
        color="white"
        onPress={navigation.goBack}
      />

      
        <View style={styles.content}>
          {books.map((book, idx) => (
            <View key={idx} style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>{book.title}</Text>
                <Icon 
                  name="close"
                  size={30}
                  color="white"
                  onPress={() => handleDeleteBook(book.id)}
                />
              </View>
              <Text style={styles.text}>{book.synopsis}</Text>
            </View>
          ))}
        </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  parent: {flex:1, backgroundColor:"#333"},
  page: {
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#66ccff",
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    borderRadius: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#f5f5f5',
  },
  content: {
    flex: 1, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Books;