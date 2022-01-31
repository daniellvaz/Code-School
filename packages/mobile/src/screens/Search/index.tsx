import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, View } from 'react-native';
import LinearGradient from '../../components/LinearGradient';

import { styles } from './styles';
import SearchCard from '../../components/SearchCard';
import api from '../../service/api';
import { Courses } from '../../../@types/courses';
import { courses } from '../../data/courses';

const Search = () => {
  const [currentCourses, setCurrentCourses] = useState<Courses[]>([]);
  const [inputValue, setInputValue] = useState("")

  async function handleCourses() {
    try {
      const response = await api.get<Courses[]>('/courses', courses);

      if(!response?.data) {
        throw new Error('No courses found')
      }
      
      setCurrentCourses(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  function search(value: string) {

    if(value.length <= 0) {
      handleCourses();
    }
    
    const data = currentCourses.filter(item => item.title.match(value));

    setCurrentCourses(data);
  }

  useEffect(() => {
    handleCourses()
  }, []);  

  return (
    <LinearGradient>
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Buscar..." 
              placeholderTextColor="#e2e2e2" 
              style={styles.input} 
              onChangeText={(e) => setInputValue(e)}
            />
            <Feather 
              name="search" 
              size={24} 
              color="#e2e2e2"
              onPress={() => search(inputValue)}
            />
          </View>
          {
            currentCourses.length < 0 ?
            <Text>Carregando informações...</Text> :
            currentCourses.map(item => (
              <SearchCard 
                key={item.id} 
                title={item.title}
                description={item.description}
                hours={item.hours}
                uri={item.image}
                slug={item.slug}
                price={item.price}
              />
            ))
          }
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export default Search;