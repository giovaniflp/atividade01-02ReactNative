import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from "../axiosConfig";

import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebaseConfig";

export default function ListaScreen(){

    const [contatos, setContatos] = useState([]);

    const auth = getAuth(app);
    const logout = async () => {
        try {
            await signOut(auth);
            alert('Deslogado com sucesso');
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    }
    
    const FetchApi = async () => {
        try {
            const response = await axiosInstance.get('/listaContatos');
            setContatos(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        FetchApi();
    });

    const navigation = useNavigation();

    return(
        <View className="flex h-full">
            <View className="flex flex-row bg-blue-600 p-2 justify-between items-center">
                <Text>Lista de Contatos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroContatoScreen')}>
                    <Image source={require("../public/add.png")}></Image>
                </TouchableOpacity>
            </View>
            <View>
                {contatos.map((contato, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('ModifyContatosScreen',
                    {
                        nome: contato.nome,
                        telefone: contato.telefone,
                        email: contato.email,
                        id: contato.id
                    }
                    )}>
                        <View className="flex flex-row bg-green-500 justify-center items-center border-b-2 p-2">
                            <Image className="w-20 h-20" source={require("../public/profile.png")}></Image>
                            <View key={index} className="flex">
                                <Text className="text-2xl">{contato.nome}</Text>
                                <Text className="text-2xl">{contato.telefone}</Text>
                                <Text className="text-2xl">{contato.email}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View className="flex items-center">
                <TouchableOpacity className="flex items-center bg-red-500 w-40 p-2 rounded-lg mt-10" onPress={logout}>
                    <Text>Deslogar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}