import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroForms from './screens/cadastroForms';
import LoginForms from './screens/loginForms';
import ListaScreen from './screens/ListaScreen';
import CadastroUsuarioScreen from './screens/CadastroContatoScreen';
import CadastroContatoScreen from './screens/CadastroContatoScreen';
import ModifyContatosScreen from './screens/ModifyContatosScreen';

const routes = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <routes.Navigator>
        <routes.Screen name="Login" component={LoginForms} options={{headerTitleAlign:"center", }} ></routes.Screen>
        <routes.Screen name="Cadastro" component={CadastroForms} options={{headerTitleAlign:"center", }}></routes.Screen>
        <routes.Screen name="ListaScreen" component={ListaScreen} options={{headerTitleAlign:"center", }}></routes.Screen>
        <routes.Screen name="CadastroUsuarioScreen" component={CadastroUsuarioScreen} options={{headerTitleAlign:"center", }}></routes.Screen>
        <routes.Screen name="CadastroContatoScreen" component={CadastroContatoScreen} options={{headerTitleAlign:"center", }}></routes.Screen>
        <routes.Screen name="ModifyContatosScreen" component={ModifyContatosScreen} options={{headerTitleAlign:"center", }}></routes.Screen>
      </routes.Navigator>
    </NavigationContainer>
  );
}
