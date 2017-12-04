import React, { Component } from 'react';
import { View} from 'react-native';
import { Thumbnail} from 'native-base';
import ProfileForm from './ProfileForm';



class Profile extends Component{

  render(){
    return(
    	<View style={{flex:1}}>
		    <View style={styles.container}>
		    	<Thumbnail 
		    		large 
		    		source={{uri: 'https://secure.gravatar.com/avatar/984805ec0f2415841b9f8fe9b0bc3263'}} 
		    		style={styles.tn}
		    	/> 
		   	</View>
		   	<ProfileForm/>
		</View>
    );
  }
}

const styles ={
	tn:{
		justifyContent: 'center',
		alignSelf: 'center',
		padding: 10,
		

	},
	container:{
      	justifyContent: 'center',
		alignItems: 'center',
      	flex: 1,
      	paddingTop: 65,
      	// paddingBottom: 35,
      	margin: 5,
      	backgroundColor: 'white',
      	
	}
}

export default Profile;

