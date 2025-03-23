import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const buttons = ['C', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=' ];  

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  
const styles = StyleSheet.create({
  result: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80,
  },
  text: {
    color: '#2b2b2c',
    fontSize: 20,
  },
  resultText: {
    fontWeight: '100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});

 return (
  <View>
     <View style={styles.result}>
       <Text style={styles.historyText}>{lastNumber}</Text>
       <Text style={styles.resultText}>{currentNumber}</Text>
     </View>
     <View style={styles.buttons}>
      {buttons.map((button) => {
        return (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={styles.text}>{button}</Text>
          </TouchableOpacity>
        );
      })}
     </View>
  </View>
 );

 function handleInput(buttonPressed: string) {
  console.log(buttonPressed);
   if(buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
     setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
     return;
   }
   if(buttonPressed === 'DEL') {
     console.log('DEL');
      setCurrentNumber(currentNumber.substr(0, currentNumber.length - 1));
    return;
   }
    if(buttonPressed === '.') {
      setCurrentNumber(currentNumber + '.');
      return;
    }
    if(buttonPressed === '+/-') {
      return;
    }
    if(buttonPressed === 'C') {
      setCurrentNumber('');
      setLastNumber('');
      return;
    }
    if(buttonPressed === '=') {
      setLastNumber(currentNumber + ' = ');
      calculate();
      return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  function calculate() {
    const splitNumbers = currentNumber.split(' ');
    const operator = splitNumbers[1];
    console.log(splitNumbers);
    if(operator === '*'){
      setCurrentNumber((parseInt(splitNumbers[0]) * parseInt(splitNumbers[2])).toString());
      return;
    }
    if(operator === '/'){
      setCurrentNumber((parseInt(splitNumbers[0]) / parseInt(splitNumbers[2])).toString());
      return;
    }
    if(operator === '+'){
      setCurrentNumber((parseInt(splitNumbers[0]) + parseInt(splitNumbers[2])).toString());
      return;
    }
    if(operator === '-'){
      setCurrentNumber((parseInt(splitNumbers[0]) - parseInt(splitNumbers[2])).toString());
      return;
    }
  }
}