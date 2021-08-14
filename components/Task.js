import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View styles={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>

            <View styles={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {
        maxWidth: "80%",
    },

    circular: {
        width: 15,
        height: 15,
        borderColor: "#55BCF6",
        borderWidth: 4,
        borderRadius: 5,
    },
});

export default Task;
