import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export function Card({ data = null, navigation }) {

    function handleClick() {
        navigation.navigate("Details", { name: data?.url });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FEBD32",
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center',
    },
    text: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },
});

