import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';


const GoalItem = prop =>{
    return(
        <TouchableOpacity onPress={prop.onDelete}>
            <View  style={styles.goalListItems} >
                 <Text >{prop.data.item.value ? prop.data.item.value: ''}</Text>
            </View>
       </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({

    goalListItems: {
      margin: 10,
       padding: 10,
       borderWidth: 1,
       width: '80%',
       borderColor: 'black',
       backgroundColor: 'gray'
     }
     
  });

export default GoalItem;

