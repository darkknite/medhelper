import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Card, CardSection, Input, Button } from './common';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class Help extends Component{
	render(){
		return(
		<View style={{flex: 1}}>
			
				<ScrollView style={{ flex: 1, position: 'absolute'}}>
					<View style={styles.container}>		
						<CardSection style={styles.form}>
								<Input
									label="Helper"
									placeholder="Adam"
								/>
						</CardSection>
						<CardSection style={styles.form}>
							<Input
								label="Phone"
								placeholder="333-333-3333"
							/>
						</CardSection>
						<CardSection style={styles.form2}>
							<Input
								label="Helper"
								placeholder="Nick"
							/>
						</CardSection>
						<CardSection style={styles.form}>
							<Input
								label="Phone"
								placeholder="333-345-2343"
							/>
						</CardSection>
						<CardSection style={styles.form2}>
							<Button style={styles.Button}>
								Save
							</Button>
						</CardSection>
					</View>
				</ScrollView>
		</View>


		)
	}

}

const styles ={
	container:{
      	flex: 1,
      	height: height,
      	width: width,
      	paddingTop: 60
	},
	form:{
		justifyContent: 'center',
		alignItems: 'center',
	},
	form2:{
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 60
	},
	Button:{
      	justifyContent: 'center',
		alignItems: 'center',
		
	}
}

export default Help;

