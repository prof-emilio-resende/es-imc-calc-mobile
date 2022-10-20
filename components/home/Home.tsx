import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Calculator from "./tabs/Calculator.page";

export function More(props: any) {
    const { navigation } = props;

    return <View>
        <Text>One page...</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text>Go login...</Text>
        </TouchableOpacity>
    </View>
}

export function ProfileComponent() {
    return <View>
        <Text>Three page...</Text>
    </View>
}

export default function Home() {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator initialRouteName="Calculator">
        <Tab.Screen
            name="More"
            component={More}
            options={{
                tabBarLabel: "Saiba mais",
                tabBarIcon: ({ focused }) => 
                    focused ?
                    (<Ionicons 
                        name="md-apps"
                        size={24}
                        color="#8A8A8A"
                    />)
                    :
                    (<Ionicons 
                        name="md-apps"
                        size={24}
                        color="##00AED8"
                    />)
            }}
        />
        <Tab.Screen
            name="Calculator"
            component={Calculator}
            options={{
                tabBarLabel: "Calculadora",
                tabBarIcon: ({ focused }) => 
                    focused ?
                    (<Ionicons 
                        name="md-calculator-outline"
                        size={24}
                        color="#8A8A8A"
                    />)
                    :
                    (<Ionicons 
                        name="md-calculator-outline"
                        size={24}
                        color="##00AED8"
                    />)
            }}
        />
        <Tab.Screen
            name="Perfil"
            component={ProfileComponent}
            options={{
                tabBarLabel: "Perfil",
                tabBarIcon: ({ focused }) => 
                    focused ?
                    (<Ionicons 
                        name="person-circle-outline"
                        size={24}
                        color="#8A8A8A"
                    />)
                    :
                    (<Ionicons 
                        name="person-circle-outline"
                        size={24}
                        color="##00AED8"
                    />)
            }}
        />
    </Tab.Navigator>
}
  
const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});