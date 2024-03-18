import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import app from '../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForms() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const auth = getAuth(app);
  
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logado com sucesso')
      navigation.navigate('ListaScreen');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  const navigation = useNavigation();

  return (
    <View className="flex justify-center items-center h-screen w-screen bg-white">
      <StatusBar />
      <Image className="w-20 h-20" source={{uri: "https://img.icons8.com/ios-filled/50/businessman.png"}}></Image>
      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Insira seu email" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
      </View>
      <View className="my-2">
        <Text>Senha</Text>
        <TextInput value={password} onChangeText={setPassword} placeholder="Insira sua senha" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
      </View>
      <View className="flex w-60 mt-4">
        <Button title="Logar" onPress={login}></Button>
      </View>
      <View className="flex w-60 my-4">
        <Button title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')}></Button>
      </View>
    </View>
  );
}
