import { Text,View, TextInput, Button, Pressable, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from "../components/Title"

function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = enteredNumber
        console.log(chosenNumber);
        if (chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number',
                'Number should be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        props.onConfirmNumber(enteredNumber)
    }

    return (
        <View style={styles.rootContainer} >
            <Title>Guess My Number</Title>
            <View style={styles.inputContainer} >
                <Text style={styles.instructionText} >Enter a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    keyboardType='numeric'
                    maxLength={2}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChange={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttons} >
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        backgroundColor: '#aa92c2',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        color: '#000',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        color: '#000',
        fontSize: 24
    }
})

export default StartGameScreen;