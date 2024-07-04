import React, {useEffect, useState} from 'react';
import { Button, Text, View, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../axiosConfig';

export default function CadastroForms(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerApi = async () => {
        await axiosInstance.post("/users", {
            name: name,
            email: email,
            password: password
        })
        alert("Cadastrado com sucesso")
    }

    const navigation = useNavigation();

    return(
        <View className="flex justify-center items-center h-screen w-screen bg-white">
            <View>
                <Text>Nome</Text>
                <TextInput value={name} onChangeText={setName} placeholder="Insira seu nome" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="my-2">
                <Text>Email</Text>
                <TextInput value={email} onChangeText={setEmail} placeholder="Insira seu email" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="my-2">
                <Text>Senha</Text>
                <TextInput value={password} onChangeText={setPassword} placeholder="Insira sua senha" className="border-black border-2 w-60 rounded-md p-1"></TextInput>
            </View>
            <View className="flex w-60 my-4">
                <Button title="Cadastrar" onPress={registerApi}></Button>
            </View>
            <View className="flex w-60">
                <Button title="Voltar" onPress={() => navigation.navigate('Login')}></Button>
            </View>
        </View>
    )
}