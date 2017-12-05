import React, { Component } from 'react';
import { View} from 'react-native';
import { Thumbnail} from 'native-base';
import ProfileForm from './ProfileForm';



class Profile extends Component{

  render(){
    return(
    	<View style={{flex:1}}>
		   	<ProfileForm/>
		</View>
    );
  }
}


export default Profile;

