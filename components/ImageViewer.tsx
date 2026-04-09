import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type ImageViewerProps = {
	source: ImageSourcePropType;
};

export default function ImageViewer({ source }: ImageViewerProps) {
	return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});
