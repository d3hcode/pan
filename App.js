import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './componets/styles';

export default function App() {
    const [palpite, setPalpite] = useState('');
    const [rodadaAtual, setRodadaAtual] = useState(1);
    const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
    const [pontosRodada, setPontoRodada] = useState('--');
    const [numeroSorteado, setNumeroSorteado] = useState('?');
    const [mensagemValidacao, setMensagemValidacao] = useState('');
    const [mensagemResultado, setMensagemResultado] = useState('Escolha um número para começar.');
    const [fimDejogo, setfimDejogo] = useState(false);

    const realizarRodada = (palpite) => {
        const palpiteNumerico = palpite;

        if (palpite === '') {
            setMensagemValidacao('Por favor, escolha um número!');
            return;
        } else if (palpiteNumerico < 0) {
            setMensagemValidacao('Por favor, escolha um número maior que 0!');
            return;
        } else if (palpiteNumerico > 99) {
            setMensagemValidacao('Por favor, escolha um número entre 0 e 99!');
            return;
        } else if (isNaN(palpiteNumerico)) {
            setMensagemValidacao('Por favor, escolha um número válido!');
            return;
        }

        setMensagemValidacao('');

        //se vc tiver 75 ele transforma em 0.75
        const sorteado = Math.floor(Math.random() * 100);
        setNumeroSorteado(sorteado);

        const pontos = 100 - Math.abs(palpiteNumerico - sorteado);
        setPontoRodada(pontos);

        const novaPontuacao = Number(pontuacaoTotal) + pontos;
        setPontuacaoTotal(novaPontuacao);
        setPalpite('');

        if (Number(rodadaAtual) === 5) {
            setfimDejogo(true);
            setMensagemResultado('Fim de jogo!');
        } else {
            setRodadaAtual(valorRoda => valorRoda + 1);
            setMensagemResultado(`Você fez ${pontos} pontos nesta rodada!`);
        }
    };

    const reiniciarJogo = () => {
        setRodadaAtual(1);
        setPontuacaoTotal(0);
        setPontoRodada('--');
        setNumeroSorteado('?');
        setMensagemValidacao('');
        setPalpite('');
        setMensagemResultado('Escolha um número para começar.');
        setfimDejogo(false);
    };

    return (
        //tela final 
        <View style={styles.containerGeral}>
            <View style={styles.header}>
                <Text style={styles.tituloHeader}>Jogo dos Números</Text>
            </View>

            <View style={styles.cardConteudo}>
                {fimDejogo ? (
                    <View style={styles.containerFim}>
                        <Text style={styles.tituloFim}>Fim de Jogo!</Text>

                        <View style={styles.cardPlacarFim}>
                            <Text style={styles.labelPlacar}>PONTUAÇÃO FINAL</Text>
                            <Text style={styles.valorPlacar}>{pontuacaoTotal}</Text>
                            <Text style={styles.subtextPlacar}>/ 500</Text>
                        </View>

                        <TouchableOpacity style={styles.botaoSortear} onPress={reiniciarJogo}>
                            <Text style={styles.textoBotao}>Jogar Novamente</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    //tela inicial 
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <View style={styles.tagRodada}>
                            <Text style={styles.textoTagRodada}>Rodada {rodadaAtual} de 5</Text>
                        </View>

                        <View style={styles.circuloSorteado}>
                            <Text style={styles.labelCirculo}>NÚMERO SORTEADO</Text>
                            <Text style={styles.numeroCirculo}>{numeroSorteado}</Text>
                        </View>

                        <Text style={styles.ultimoSorteadoText}>Último número sorteado: {numeroSorteado}</Text>

                        <View style={styles.containerInput}>
                            <Text style={styles.labelInput}>Qual número será sorteado?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite um número de 0 a 99"
                                placeholderTextColor="#999"
                                keyboardType="numeric"
                                value={palpite}
                                onChangeText={setPalpite}
                            />

                           //vai mostrar um elemiento na tela apenas sob uma condição especifica
                            {mensagemValidacao ? <Text style={styles.textoErro}>{mensagemValidacao}</Text> : null}
 
                            <TouchableOpacity style={styles.botaoSortear} onPress={() => realizarRodada(Number(palpite))}>
                                <Text style={styles.textoBotao}>Sortear Número</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardPontos}>
                            <View style={styles.barraVerde} />
                            <View style={styles.conteudoCard}>
                                <Text style={styles.labelPlacar}>PONTOS DA RODADA</Text>
                                <Text style={styles.valorPlacar}>{pontosRodada}</Text>
                            </View>
                        </View>

                        <View style={styles.cardPontos}>
                            <View style={styles.barraVerde} />
                            <View style={styles.conteudoCard}>
                                <Text style={styles.labelPlacar}>PONTUAÇÃO TOTAL</Text>
                                <Text style={styles.valorPlacar}>{pontuacaoTotal}</Text>
                                <Text style={styles.subtextPlacar}>/ 500</Text>
                            </View>
                        </View>

                        <Text style={styles.mensagemRodape}>{mensagemResultado}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}