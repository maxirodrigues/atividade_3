import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './Formatacao';

const App = () => {

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {

    if (nome && peso) {
    
    const tempNome = nome;
    
    const tempPeso = parseFloat(peso);
 
        if (tempPeso <= 2){
          setResultado(tempNome + ' deve consumir 200g de ração por dia');
        }
        if (tempPeso >=3 && tempPeso <=5){
          setResultado(tempNome + ' deve consumir 250g de ração por dia');
        }
        if (tempPeso >=6 && tempPeso <=7){
          setResultado(tempNome + ' deve consumir 300g de ração por dia');
        }
        if (tempPeso >=8 && tempPeso <=10){
          setResultado(tempNome + ' deve consumir 350g de ração por dia');
        } 
        if (tempPeso >=11 && tempPeso <=15){
          setResultado(tempNome + ' deve consumir 550g de ração por dia');
        }
        if (tempPeso >=16 && tempPeso <=20){
          setResultado(tempNome + ' deve consumir 700g de ração por dia');
        }
        if (tempPeso >=26 && tempPeso <=30){
          setResultado(tempNome + ' deve consumir 1kg de ração por dia');
        }
        if (tempPeso >=31 && tempPeso <=35){
          setResultado(tempNome + ' deve consumir 1.2kg de ração por dia');
        }
        if (tempPeso >=36 && tempPeso <=40){
          setResultado(tempNome + ' deve consumir 1.3kg de ração por dia');
        }
        if (tempPeso >=41){
          setResultado(tempNome + ' deve consumir 1.5kg de ração por dia');
        }
        setNome('');
        setPeso('');
    } else {
          alert('Digite o nome e o peso do seu cão');
          setNome('');
          setPeso('');
        }
     
  }//fim calcular

  return(
          <ImageBackground 
            style={styles.img}
            source ={{
            uri:'https://static1.casapraticaqualita.com.br/articles/1/24/51/@/2767-para-alimentar-cachorro-sem-dente-apost-article_content_img-3.jpg'
          }}>

           <Text style={styles.text1}>Nutrição Canina</Text>
           <Text style={styles.text2}>Verifique a quantidade de ração diária ideal para o seu cão</Text>

           <TextInput 
            value={nome}
            onChangeText={(value) => setNome(value)}
            placeholder='Digite aqui o nome do seu cão'
            keyboardType='default'
            style={styles.textinput1}/>

           <TextInput 
            value={peso}
            onChangeText={(value) => setPeso(value)}
            placeholder='Digite aqui o peso do seu cão'
            keyboardType='numeric'
            style={styles.textinput2}/>

           <TouchableOpacity onPress={calcula}>
             <Text style={styles.texttouchableopacity}>Calcular</Text>
           </TouchableOpacity>

           <Text 
            style={styles.textresultado}>{resultado}</Text>

          </ImageBackground>
  )
}

export default App;
