import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaScreen(){

    const [contatos, setContatos] = useState([]);
    
    const FetchApi = async () => {
        try {
            const response = await axios.get('http://192.168.16.4:3000/listaContatos');
            setContatos(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        FetchApi();
    }, []);

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
        </View>
    )
}