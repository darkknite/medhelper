import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ style, onPress, children}) => {
	
	const {buttonStyle, textStyle} = styles;
	
	return (
		<TouchableOpacity  onPressIn={onPress} style={[buttonStyle, style]}>
			<Text style={textStyle}> 
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch'
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 20,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10	
	}
};

export { Button };