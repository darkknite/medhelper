import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { H1 } from 'native-base';
import { CardSection, Input, Button } from './common';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class ProfileForm extends Component{
	render(){
		return(
		<View style={{flex: 1}}>
			
				<ScrollView style={{ flex: 1, position: 'absolute'}}>
					<View style={styles.container}>
					
					
						<CardSection style={styles.form}>
							<Input
								label="Name"
								placeholder="Nancy"
							/>
						</CardSection>
						<CardSection style={styles.form}>
							<Input
								label="Medicine"
								placeholder="Abilify 5mg"
							/>
						</CardSection>
						<CardSection style={styles.form}>
							<Input
								label="Times a day"
								placeholder="1"
							/>
						</CardSection>
						<CardSection style={styles.form}>
							<Input
								label="Time Taken"
								placeholder="7am"
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

export default ProfileForm;