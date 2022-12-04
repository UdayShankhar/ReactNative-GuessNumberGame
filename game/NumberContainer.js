import { View, Text, StyleSheet, Dimensions } from "react-native"

function NumberContainer({ children }) {
    return (
        <View style={styles.container} >
            <Text style={styles.numberText} >{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#000',
        padding: deviceWidth < 450 ? 12 : 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#000',
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer