import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Log from "./screenB/components/Log";
import Main from "./screenA/components/Main";
import {View} from "react-native";
const  App = () => {
    const RootStack = createStackNavigator();
    return (
        <View>
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='Registration'
                    component={(props) => <Log {...props}/>}
                />
                <RootStack.Screen
                    name='Main'
                    component={(props) => <Main {...props}/>}
                    />

            </RootStack.Navigator>
        </NavigationContainer>
        </View>
    );
};

export default App;