import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, TextInput} from 'react-native';
import {setUserInput} from '../store/index';

export default function Counter() {
  const [textInput, setTextInput] = useState('');
  const count = useSelector((state: any) => state.count);
  const usertext = useSelector((state: any) => state.userInput);
  const dispatch = useDispatch();

  const handleInputChange = (value: string) => {
    setTextInput(value);
    dispatch(setUserInput(value));
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
      <TextInput value={textInput} onChangeText={handleInputChange} />
      <Button title="Your Name" onPress={() => dispatch({type: 'none'})} />
      <Text>You typed: {usertext}</Text>
    </View>
  );
}
