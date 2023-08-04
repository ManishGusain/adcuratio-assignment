import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { hot_questions } from '../../api';
import { handleURL } from '../../utils';

export default function QuestionsScreen({ activeTag }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: { items } } = await hot_questions(page, activeTag);
            if (page === 1) {
                setData(items);
            }
            else {
                setData((prevData) => [...prevData, ...items]);
            }
            setLoading(false);
        }
        catch { (err) => { console.log(err); setLoading(false); } }
    };

    const handlePage = () => {
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        fetchData();
    }, [activeTag]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hot Questions</Text>
            <FlatList
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.qContainer}>
                            <Pressable style={styles.qWrapper} onPress={() => handleURL(item?.link)}>
                                <Text>{item?.title}</Text>
                            </Pressable>
                        </View>
                    )
                }}
                keyExtractor={(item) => item?.creation_date?.toString()}
                onEndReached={handlePage}
                onEndReachedThreshold={0.1}
                ListFooterComponent={() => (
                    loading ? <ActivityIndicator size="large" color="blue" /> : null
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    qContainer: {
        alignItems: 'center',
    },
    qWrapper: {
        marginBottom: 10,
        backgroundColor: 'grey',
        padding: 5,
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'rgba(160, 132, 232, 0.4)',
        borderColor: 'rgba(160, 132, 232, 0.2)',
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        minHeight: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    listContent: {
        paddingBottom: 200,
    },
});