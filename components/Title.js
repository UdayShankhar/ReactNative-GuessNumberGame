import { View, Text, StyleSheet } from 'react-native'

function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
        maxWidth: '80%'
    }
})

export default Title