import React, { Component } from 'react';
import {View , Text} from 'react-native';
import {H1} from 'native-base';
import { CardSection, Input, Button } from './common';


class Medcheck extends Component {

  render(){
    return(
          <View style={styles.container}>
    		<H1 style={styles.h1}>Have You Taken Your Medecine?</H1>
    		<View style={styles.form}>
    			<Button style={styles.button}>Yes</Button>
    			<Button style={styles.button}>No</Button>
    		</View>
    		
    		
    		      	
 	
          </View>
    );
  }
}

const styles ={
	container:{
      	flex: 1,
      	backgroundColor: 'white'
	},
	h1:{
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 80,
	},
	form:{
		flexDirection: 'row',
		padding: 60
	},
	button:{
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 70

	}
}


export default Medcheck;

