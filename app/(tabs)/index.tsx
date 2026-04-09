import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View } from 'react-native';

const placeholderImg = require('@/assets/images/background-image.png');
export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer source={placeholderImg} />
			</View>
			<View style={styles.buttonContainer}>
				<Button label='Choose a photo' variant='primary' />
				<Button label='Use this photo' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fad0e7',
		alignItems: 'center',
	},
	imageContainer: {
		flex: 1,
	},

	text: {
		color: '#DA1884',
	},
	buttonContainer: {
		flex: 1 / 3,
		alignItems: 'center',
	},
});
