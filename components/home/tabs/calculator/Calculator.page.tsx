import React, { useState } from "react";
import { Dimensions, Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import CalculatorForm from "./Calculator.form";
import Person from "../../../../domain/Person";

import measure from "../../../../assets/raster.jpeg";

function Result({person, keyboardOpen}) {
    if (keyboardOpen) return null;
    
    return (
        <View style={styles.result}>
            <View style={[styles.container, styles.result]}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <Image source={measure} style={styles.image} />
                        <View style={styles.resultText}>
                            <View>
                                <Text style={styles.title}>IMC Calculado: { person?.imc?.toFixed(2) }</Text>
                                <Text style={styles.regularText}>{ person?.imcDescription }</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

function registerKeyboardListeners(setter: (val: boolean) => void) {
    Keyboard.addListener('keyboardDidShow', () => setter(true));
    Keyboard.addListener('keyboardDidHide', () => setter(false));
}

export default function Calculator() {
    const [person, setPerson] = useState(new Person(0, 0));
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    registerKeyboardListeners(setKeyboardOpen);

    return (
        <View style={styles.container}>
            <CalculatorForm setPerson={setPerson} person={person} />
            <Result person={person} keyboardOpen={keyboardOpen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    result: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        flex: 5,
        justifyContent: "space-around",
        backgroundColor: "#eeeeee",
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        width: Dimensions.get("screen").width * 0.95,
    },
    resultText: {
        flex: 2,
        alignItems: "flex-start",
        justifyContent: "center",
        width: Dimensions.get("window").width * 0.85,
    },
    title: {
        fontWeight: "600",
        fontSize: 32,
    },
    regularText: {
        fontSize: 14,
        lineHeight: 24,
        color: "#AAAAAA",
    },
});