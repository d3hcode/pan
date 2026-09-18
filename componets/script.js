import React, { useState } from 'react';
import React, { TouchableOpacity } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
    const [palpite, setPalpite] = useState('');
    const [rodadaAtual, setRodadaAtual] = useState('1');
    const [pontuacaoTotal, setPontuacaoTotal] = useState('0');
    const [pontosRodada, setPontoRodada] = useState('--');
    const [numeroSorteado, setNumeroSorteado] = useState('?');
    const [mensagemValidacao, setMensagemValidacao] = useState('');
    const [mensagemResultado, setMensagemResultado] = useState('Escolha um número para começar');
    const realizarRodada = () => {
        const palpiteNumerico = Number(palpite);

        if ((palpite === '')) {
            setMensagemValidacao('Por favor, escolha um número!');
            return;
        }
        else if (palpiteNumerico < 0) {
            setMensagemValidacao('Por favor, escolha um número positivo!');
            return;
        }
        else if (palpiteNumerico > 99) {
            setMensagemValidacao('Por favor, escolha um número entre 0 e 99!');
            return;
        }
        else if (isNaN(palpiteNumerico)) {
            setMensagemValidacao('Por favor, escolha um número válido!');
            return;
        }
        setMensagemValidacao('');
        const numeroSorteado = Math.floor(Math.random() * 100);
        setNumeroSorteado(numeroSorteado);
        
        const pontos = 100 - Math.abs(palpiteNumerico - numeroSorteado);
    }
    return (
        <View>
            <Text>Jogo dos Números</Text>
            <Text>Rodada Atual: {rodadaAtual}</Text>
            <Text>Número Sorteado: {numeroSorteado}</Text>
            <Text>Último número sorteado: {numeroSorteado}</Text>
            <TextInput
                placeholder="Qual número será sorteado?"
                keyboardType="numeric"
                value={palpite}
                onChangeText={setPalpite}
            />
            <TouchableOpacity onPress={realizarRodada}>
                <Text>Sortear Número</Text>
                <Text>{mensagemValidacao}</Text>
            </TouchableOpacity>
        </View>
    );
}

