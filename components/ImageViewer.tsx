import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type ImageViewerProps = {
	source: ImageSourcePropType;
	selectedImage?: string;
};

export default function ImageViewer({
	source,
	selectedImage,
}: ImageViewerProps) {
	const imageSource = selectedImage ? { uri: selectedImage } : source;

	return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});
