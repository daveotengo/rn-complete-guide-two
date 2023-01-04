import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput , ScrollView,FlatList} from 'react-native';
import React, { useState } from 'react';

export default function App2() {
  const [goalInput, setGoalInput] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler=(text)=> {
    setGoalInput(text)
  }

  const addValueHandler=()=>{
    setCourseGoals(courseGoals => [...courseGoals,
       {id : Math.random().toString(), value: goalInput}])
  }

  return (
    <View style={styles.screen}>
      
      

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          style={styles.input}
          value={goalInput ? goalInput : ''}
        ></TextInput>
        <Button title="ADD" onPress={addValueHandler}></Button>
      </View>

      <FlatList
      keyExtractor={(item, index)=>item.id }
      data={courseGoals}
      renderItem={itemData=>(
          <View  style={styles.goalListItems}>
           <Text >{itemData.item.value?itemData.item.value:''}</Text>
          </View>
          )}
          
          >
      </FlatList>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  output: {
    padding: 50
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  outputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  goalListItems: {
    margin: 5,
    padding: 1,
    borderWidth: 1,
    width: '80%',
    borderColor: 'black'
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
