import React, { useState } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from "react-native";

import { Picker } from '@react-native-picker/picker';

function renderIOS(gender: string, setGender: any) {
    if (Platform.OS !== "ios") return null;
    return <View style={{flex: 2}}>
        <TextInput
            style={[{flex: 5}, styles.pickerInputIos]}
            placeholder="Sexo ..."
            autoCapitalize="none"
            allowFontScaling={true}
            value={gender}
            editable={false}
        />
        <Picker
            prompt="sexo"
            mode="dialog"
            selectedValue={gender}
            onValueChange={(val) => setGender(val)}
        >
            <Picker.Item value="NA" label="Não responder" />
            <Picker.Item value="M" label="Masculino" />
            <Picker.Item value="F" label="Feminino" />
        </Picker>
    </View>;
}

export default function Calculator(props: any) {
    const [gender, setGender] = useState("NA")

    const { navigation } = props;

    return <View style={styles.fields}>
        <View style={{flex: 2}}>
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

            { renderIOS(gender, setGender) }        
        </View>
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
        width: Dimensions.get('screen').width * 0.9,
        flex: 1,
        borderBottomWidth: 1,
        borderBottonColor: '#aaa',
    },
    pickerAreaIos: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    pickerInputIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
    pickerIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
});