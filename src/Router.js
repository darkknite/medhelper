import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Help from './components/Help';
import MedCheck from './components/MedCheck';
import Profile from './components/Profile';



const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65}}>			
			<Scene key="main">
				<Scene 
					key="medcheck" 
					component={MedCheck} 
					title="MedCheck"
					initial 
					titleStyle={{color: 'black', fontSize: 25, fontWeight: 'bold'}}
					navigationBarStyle={{backgroundColor:'white'}}
					navBarButtonColor="white"
					onRight={() => Actions.Helpers()}
					rightTitle= "Helpers"
					onLeft={() => Actions.profile()}
					leftTitle="Profile"
					leftButtonTextStyle={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
					rightButtonTextStyle={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
					
				/>
				
				<Scene 
					key="profile" 
					component={Profile} 
					title='Profile'
					titleStyle={{color: 'black', fontSize: 25, fontWeight: 'bold'}}
					navigationBarStyle={{backgroundColor:'white'}}
				/>
				
				<Scene 
					key="Helpers" 
					component={Help} 
					title="Helpers"
					titleStyle={{color: 'black', fontSize: 25, fontWeight: 'bold'}}
					navigationBarStyle={{backgroundColor:'white'}}
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;