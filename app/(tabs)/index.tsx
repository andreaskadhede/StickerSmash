import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const placeholderImg = require('@/assets/images/background-image.png');
export default function Index() {
	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		undefined,
	);

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
		} else {
			alert('You did not select any image.');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer source={placeholderImg} selectedImage={selectedImage} />
			</View>
			<View style={styles.buttonContainer}>
				<Button
					label='Choose a photo'
					variant='primary'
					onPress={pickImageAsync}
				/>
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
