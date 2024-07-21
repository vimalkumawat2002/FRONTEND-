import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const submitButton = ({ handleSubmit, BtnTitle, loading }) => {
    return (
        <View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.btnText}>{loading ? 'Please Wait...' : BtnTitle}</Text>
                
            </TouchableOpacity>
        </View>
    )
}

export default submitButton

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#1e2225',
        height: 50,
        marginHorizontal: 25,
        borderRadius: 80,
        justifyContent: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 24,
        fontWeight: "400",
    }
})