import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import NumberContainer from '../game/NumberContainer'

const generateRandomNumberBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
    var initialGuess = generateRandomNumberBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver();
        }
    }, [currentGuess, props.userNumber, props.onGameOver])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < props.userNumber) || (direction === 'greater' && currentGuess > props.userNumber)) {
            Alert.alert("Don't lie!", "You know that the number is wrong", [{
                text: 'Sorry!',
                style: 'cancel'
            }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            </View>
            {/* <View>
                <Text>LOG ROUNDS</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        marginTop: 20,
        alignItems: 'center'
    },

})

export default GameScreen