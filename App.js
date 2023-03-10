import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput , ScrollView,FlatList} from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler=(text)=> {
    setGoalInput(text);

  }

  const addValueHandler=(goalInput)=>{
    if(goalInput.length===0){
      return;
    }

    setCourseGoals(courseGoals => [...courseGoals,
       {id : Math.random().toString(), value: goalInput}]
       );
    setIsAddMode(false);
    setGoalInput('')
  };

  const removeValueHandler=(goalId)=>{
    setCourseGoals(courseGoals =>{
      return courseGoals.filter((goal)=>goal.id!==goalId)
    });
  };

  const onCancelHandler = () =>{
    setIsAddMode(false);
  }

  return (
   
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={()=>setIsAddMode(true)} ></Button>
      <GoalInput data={goalInput} changeText={goalInputHandler} press={()=>addValueHandler(goalInput)} visible={isAddMode} onCancel={()=>onCancelHandler()} />

      <FlatList
      keyExtractor={(item, index)=>item.id }
      data={courseGoals}
      renderItem={itemData=>(
         <GoalItem data = {itemData} onDelete={removeValueHandler.bind(this,itemData.item.id)} />
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
 
 

  outputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

 
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
