import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export interface IProduct{
    name: string
    category: string
    weight: string
    id: number
}

const ProductComponent = (props: IProduct) =>{
    return (
    <View style={styles.mainContainer}>
        <Text style={{fontSize: 20}}>{props.name}</Text>
        <Text>{props.category}</Text>
        <Text>{props.weight}</Text>
        <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{color: 'black'}}>Add to Bag</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    mainContainer:{
        // flex: 1,
        // display: 'flex',
        backgroundColor: "#cef5d8",
        height: 120,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        flex: 1,
        borderColor: "red",
        borderWidth: 5,
    },
    infoContainer:{
        flex: 2,
        borderColor: "red",
        borderWidth: 5,
    },
    buttonStyle:{
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 2,
        paddingLeft: 2,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#1ad64c'
    }
})
export default ProductComponent;