import React from 'react';
import {StyleSheet,View,TextInput,Button,Modal} from 'react-native';


const GoalInput = prop =>{


  
    return(
      <Modal visible={prop.visible} animationType="slide" >
      <View style={styles.inputContainer} >
      <TextInput
        placeholder="Course Goal"
        onChangeText={prop.changeText}
        style={styles.input}
        value={prop.data ? prop.data : ''}
      />
      <View style={styles.buttonContainer}>
      <Button title="Cancel" color="red" onPress={prop.onCancel}></Button>
     <Button title="ADD" onPress={prop.press} ></Button>
     </View>

     </View>
     </Modal>
    );
    
}

const styles = StyleSheet.create({

  inputContainer: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  }
     
  });

export default GoalInput;

