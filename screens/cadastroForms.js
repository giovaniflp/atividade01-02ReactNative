import React from 'react';
import { Button, Text, View, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CadastroForms(){

    const navigation = useNavigation();

    return(
        <View className="flex justify-center items-center h-screen w-screen bg-white">
            <View>
                <Text>Nome</Text>
                <TextInput placeholder="Insira seu nome" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="my-2">
                <Text>Email</Text>
                <TextInput placeholder="Insira seu email" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="my-2">
                <Text>Senha</Text>
                <TextInput placeholder="Insira sua senha" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="flex w-60 my-4">
                <Button title="Cadastrar" onPress={() => navigation.navigate('Login')}></Button>
            </View>
        </View>
    )
}