import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ListaScreen(){

    const navigation = useNavigation();

    const contatos = [
        {
            nome: "Giovani",
            numero: 81994606666
        },
        {
            nome: "Roberto",
            numero: 81994607578
        },
        {
            nome: "Cleiton",
            numero: 81994609014
        },
    ]

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
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('ModifyContatosScreen',{
                        nome: contato.nome,
                        numero: contato.numero
                    })}>
                        <View className="flex flex-row bg-green-500 justify-center items-center border-b-2 p-2">
                            <Image className="w-20 h-20" source={require("../public/profile.png")}></Image>
                            <View key={index} className="flex">
                                <Text className="text-2xl">{contato.nome}</Text>
                                <Text className="text-2xl">{contato.numero}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}