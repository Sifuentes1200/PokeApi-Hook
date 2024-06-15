import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from './Card';

export function Home({ navigation }) {

    const pageLimit = 10;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);

    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    function handleClick() {
        setLimit(pageLimit);
    }

    return (
    <View style={styles.background}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {list.map((element, index) => (
                    <Card key={index} data={element} navigation={navigation} />
                ))}
            </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E90FF', 
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF8DC',
    },
    scrollContainer: {
        paddingBottom: 30, 
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 10, 
    },
}

