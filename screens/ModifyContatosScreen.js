import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {useState, useEffect} from "react";
import axios from "axios";

export default function ModifyContatosScreen({route}){

    const id = route.params.id;
    const nome = route.params.nome;
    const telefone = route.params.telefone;
    const email = route.params.email;

    const removeApi = async () => {
        await axios.delete("http://192.168.16.5:3000/listaContatos/" + id);
        alert("Contato removido com sucesso!");
    }

    const [nomeInput, setNomeInput] = useState(nome);
    const [telefoneInput, setTelefoneInput] = useState(telefone);
    const [emailInput, setEmailInput] = useState(email);

    const patchApi = async () => {
        await axios.patch("http://192.168.16.5:3000/listaContatos/" + id,{
            nome: nomeInput,
            telefone: telefoneInput,
            email: emailInput
        });
        alert("Contato atualizado com sucesso!");
    }

    return(
        <View className="h-full">
            <Text>{id}</Text>
            <View className="flex p-2">
                <Text className="p-2 text-black">Nome</Text>
                <TextInput value={nomeInput} onChangeText={setNomeInput} className="border-2 rounded-lg p-1 text-black"></TextInput>
            </View>
            <View className="flex p-2">
                <Text className="p-2 text-black">Email</Text>
                <TextInput value={emailInput} onChangeText={setEmailInput} className="border-2 rounded-lg p-1 text-black"></TextInput>
            </View>
            <View className="flex p-2">
                <Text className="p-2 text-black">Telefone</Text>
                <TextInput value={telefoneInput} onChangeText={setTelefoneInput} className="border-2 rounded-lg p-1 text-black"></TextInput>
            </View>
            <TouchableOpacity className="bg-blue-600 rounded-lg p-4 mx-2 mt-4" onPress={patchApi}>
                <Text className="text-center">Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-600 rounded-lg p-4 mx-2 mt-4" onPress={removeApi}>
                <Text className="text-center">Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}