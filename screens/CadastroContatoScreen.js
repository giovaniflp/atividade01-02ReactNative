import { View, TouchableOpacity, Text, TextInput, } from "react-native";

export default function CadastroContatoScreen(){
    return(
        <View className="flex h-full bg-white">
                <View className="flex p-2">
                    <Text className="p-2">Nome</Text>
                    <TextInput className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <View className="flex p-2">
                    <Text className="p-2">Email</Text>
                    <TextInput className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <View className="flex p-2">
                    <Text className="p-2">Telefone</Text>
                    <TextInput className="border-2 rounded-lg p-1"></TextInput>
                </View>
                <TouchableOpacity className="bg-blue-600 rounded-lg p-4 mx-2 mt-4">
                    <Text className="text-center">Salvar</Text>
                </TouchableOpacity>
        </View>
    )
}