import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function ModifyContatosScreen({route}){

    const nome = route.params.nome;
    const numero = route.params.numero;

    return(
        <View className="h-full">
            <View className="flex p-2">
                <Text className="p-2 text-black">Nome</Text>
                <TextInput className="border-2 rounded-lg p-1 text-black">{nome}</TextInput>
            </View>
            <View className="flex p-2">
                <Text className="p-2 text-black">Email</Text>
                <TextInput className="border-2 rounded-lg p-1 text-black">{numero}</TextInput>
            </View>
            <View className="flex p-2">
                <Text className="p-2 text-black">Telefone</Text>
                <TextInput className="border-2 rounded-lg p-1 text-black"></TextInput>
            </View>
            <TouchableOpacity className="bg-blue-600 rounded-lg p-4 mx-2 mt-4">
                <Text className="text-center">Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-600 rounded-lg p-4 mx-2 mt-4">
                <Text className="text-center">Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}