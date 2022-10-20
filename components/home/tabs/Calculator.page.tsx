import React from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

import { Picker } from '@react-native-picker/picker';

function renderIOS() {
    return <Picker
            prompt="sexo"
            mode="dialog"
        >
            <Picker.Item value="NA" label="Não responder" />
            <Picker.Item value="M" label="Masculino" />
            <Picker.Item value="F" label="Feminino" />
    </Picker>;
}

export default function Calculator(props: any) {
    const { navigation } = props;

    return <View>
        <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            autoCapitalize="none"
            allowFontScaling={true}
        />
        <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            autoCapitalize="none"
            allowFontScaling={true}
        />

        { renderIOS() }        
        
    </View>;
}

const styles = StyleSheet.create({
    fields: {
        display: "flex",
        flex: 2,
        flexDirection: "column",
        justifyContent:  "center"
    },
    input: {
        width: Dimensions.get("screen").width * 0.9,
    }
});