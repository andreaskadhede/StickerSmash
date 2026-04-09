import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
			<Link href='/about' style={styles.button}>
				{' '}
				Go to About screen
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fad0e7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#DA1884',
	},
	button: {
		fontSize: 18,
		textDecorationLine: 'underline',
		color: '#DA1884',
	},
});
