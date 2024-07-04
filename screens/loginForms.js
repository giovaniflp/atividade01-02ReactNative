import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../axiosConfig';

export default function LoginForms() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation();

  const login = async () =>{
  
      const login = await axiosInstance.get("/users",{
        email: email,
        password: password,
      }).then(response=>{
        const auth = response.data
        console.log(auth)
        if(auth){
          navigation.navigate('ListaScreen')
        }
      })
    }
  

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
