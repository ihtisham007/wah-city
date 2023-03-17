import React, {useState} from 'react';
import axios from 'axios';
import tw from 'twrnc';
import {Text, ScrollView, Button, View, TextInput} from 'react-native';
// import Logo from '../../core/logo';
// import Header from '../../core/theme';
const baseUrl = 'http://10.0.2.2:8000/api/';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [result, setResult] = useState(true);

  //For sign-up
  const handleRegistration = async () => {
    try {
      const response = await axios.post(`${baseUrl}register.php`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      console.log(response.data);
      // Display success message to user
    } catch (error) {
      console.log(error);
      // Display error message to user
    }
  };
  //search user by email
  const searchUserByEmail = async () => {
    try {
      const response = await axios.post(`${baseUrl}search.php`, {
        email: email,
      });
      console.log(response.data.data.data);
      // Display success message to user
    } catch (error) {
      console.log(error);
      // Display error message to user
      setResult(false);
    }
  };

  return (
    <ScrollView>
      {/* <Logo />
      <Header>Welcome back.</Header> */}
      {/* <Header title="Home" /> */}
      <View style={tw`p-4 android:p-8  dark:bg-black text-center`}>
        <Text>Sign up</Text>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Register" onPress={handleRegistration} />

        <Text>Search User By Email</Text>
        <TextInput
          placeholder="Email for search"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Search" onPress={searchUserByEmail} />
        <Text>Result!!</Text>
        <Text>{result ? 'found' : 'notFound'}</Text>
      </View>
    </ScrollView>
  );
};
export default Registration;
