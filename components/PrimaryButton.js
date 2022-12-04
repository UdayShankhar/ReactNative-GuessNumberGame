import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer} >
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: '#000' }} >
                <Text
                    style={styles.buttonText}> {children} </Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton