import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import { ListItem } from 'react-native-elements'

const ResultList = (props) => {
    const {aItems, sFirstName} = props.romanames;

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            aItems.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <View style={styles.circleContainer}>
                    <Text style={styles.circleText}>{sFirstName} </Text>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={{fontSize: 18}}>{l.name}</ListItem.Title>
                </ListItem.Content>
                <View><Text>{l.score} 회</Text></View>
            </ListItem>
            ))
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ec6335',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleText: {
        color: "#fff",
        fontSize: 16,
        paddingHorizontal: 10
    }
})

export default ResultList;