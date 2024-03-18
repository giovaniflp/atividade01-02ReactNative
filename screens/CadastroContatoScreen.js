import { View, TouchableOpacity, Text, TextInput, } from "react-native";
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function CadastroContatoScreen(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const PostApi = async () => {
        await axios.post("http://192.168.16.5:3000/listaContatos", {
            nome: nome,
            email: email,
            telefone: telefone
        });
        alert("Contato cadastrado com sucesso!");
    }

    return(
        <View className="flex h-full bg-white">
                <View className="flex p-2">
                    <Text className="p-2">Nome</Text>
                    <TextInput value={nome} onChangeText={setNome} className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <View className="flex p-2">
                    <Text className="p-2">Email</Text>
                    <TextInput value={email} onChangeText={setEmail} className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <View className="flex p-2">
                    <Text className="p-2">Telefone</Text>
                    <TextInput value={telefone} onChangeText={setTelefone} className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <TouchableOpacity className="bg-blue-600 rounded-lg p-4 mx-2 mt-4" onPress={PostApi}>
                    <Text className="text-center">Salvar</Text>
                </TouchableOpacity>
        </View>
    )
}