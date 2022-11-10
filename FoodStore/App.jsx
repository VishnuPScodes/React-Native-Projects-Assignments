import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,ScrollView,TouchableOpacity,Image} from 'react-native';
import {useEffect ,useState} from 'react'
export default function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((e)=>{
      setData(e.data.meals);
    })
  },[])
 
  return (
    <View>
      <Text>Welcome to food store</Text>
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.idMeal}
          data={data}
          renderItem={({ item }) => {
           
            return (
              <View>
                <TouchableOpacity style={styles.content}> 
                  <Image
                    source={{ uri: item.strMealThumb }}
                    style={{ width: 300, height: 300 ,paddingLeft:10}}
                  />
                  <Text>{item.strMeal}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>

      <Text>Yes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    marginVertical:50,

  },
  content:{
    alignSelf:'centre'
  }

});
