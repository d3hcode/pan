import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial(props) {
    return (
        <View style={styles.container}>

            <View style={styles.container02} >
                <Text style={styles.textos}>LOGIN</Text>

  <View style={styles.container03} >
                <label style={styles.textos}>E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" style={{ width: 250, height: 40, marginBottom: 20, borderRadius: 5, padding: 10 }} />

                <label style={styles.textos}>Senha</label>
                <input type="password" placeholder="Digite sua senha" style={{ width: 250, height: 40, marginBottom: 20, borderRadius: 5, padding: 10 }} />

                <Button title="ENTRAR" onPress={() => props.navigation.navigate("Tela2")} color="#532e03ff" />



            </View>
            </View>
          

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ede1d5",
        justifyContent: "center",
        alignItems: "center",
    },
    container02: {
        backgroundColor: "#412402",
        padding: 20,
        borderRadius: 10,
        width: 300,
        height: 500,

        alignItems: "center",
    },


    textos: {
        color: "#fffefcff",
        fontSize: 31,
        fontFamily: "Playfair",
        marginBottom: 20,
        textAlign: "",

    },



});

