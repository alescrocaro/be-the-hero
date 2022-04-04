import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text stty={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>X casos</Text>.
        </Text>
      </View>  
      <Text style={styles.title}>Bem-vinda!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Coisa muito triste...</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>700</Text>

          <TouchableOpacity 
            style={styles.detailsButton}
            onPress={() => {}}
          >
            <Text style={styles.detailsButtonText}>Mais detalhes</Text>
            <Feather name="arrow-right" size={16} color='#E02041'></Feather>
          </TouchableOpacity>  
        </View>
      </View>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Coisa muito triste...</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>700</Text>

          <TouchableOpacity 
            style={styles.detailsButton}
            onPress={() => {}}
          >
            <Text style={styles.detailsButtonText}>Mais detalhes</Text>
            <Feather name="arrow-right" size={16} color='#E02041'></Feather>
          </TouchableOpacity>  
        </View>
      </View>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Coisa muito triste...</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>700</Text>

          <TouchableOpacity 
            style={styles.detailsButton}
            onPress={() => {}}
          >
            <Text style={styles.detailsButtonText}>Mais detalhes</Text>
            <Feather name="arrow-right" size={16} color='#E02041'></Feather>
          </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}