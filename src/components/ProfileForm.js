import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { H1, Thumbnail} from 'native-base'; 
import { CardSection, Input, Button } from './common';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class ProfileForm extends Component{
	render(){
		return(
		<View style={{flex: 1}}>
			
				<ScrollView style={{ flex: 1, position: 'absolute'}}>
					 <View>
					 	<Thumbnail 
					 		large 
					 		source={{uri: 'https://secure.gravatar.com/avatar/984805ec0f2415841b9f8fe9b0bc3263'}} 
					 		style={styles.tn}
					 	/> 
					</View>
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
		
	},
	tn:{
		justifyContent: 'center',
		alignSelf: 'center',
		padding: 10,
		

	},
}

export default ProfileForm;