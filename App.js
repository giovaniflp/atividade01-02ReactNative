import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroForms from './screens/cadastroForms';
import LoginForms from './screens/loginForms';

const routes = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <routes.Navigator>
        <routes.Screen name="Login" component={LoginForms} options={{headerTitleAlign:"center",}} ></routes.Screen>
        <routes.Screen name="Cadastro" component={CadastroForms} options={{headerTitleAlign:"center", }}></routes.Screen>
      </routes.Navigator>
    </NavigationContainer>
  );
}
