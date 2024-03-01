import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginForms() {

const navigation = useNavigation();

  return (
    <View className="flex justify-center items-center h-screen w-screen bg-white">
      <StatusBar />
      <Image className="w-20 h-20" source={{uri: "https://img.icons8.com/ios-filled/50/businessman.png"}}></Image>
      <View>
        <Text>Email</Text>
        <TextInput placeholder="Insira seu email" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
      </View>
      <View className="my-2">
        <Text>Senha</Text>
        <TextInput placeholder="Insira sua senha" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
      </View>
      <View className="flex w-60 mt-4">
        <Button title="Logar" onPress={() => navigation.navigate('ListaScreen')}></Button>
      </View>
      <View className="flex w-60 my-4">
        <Button title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')}></Button>
      </View>
    </View>
  );
}
