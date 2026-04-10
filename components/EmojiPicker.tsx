import { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type EmojiPickerProps = PropsWithChildren<{
	isVisible: boolean;
	onClose: () => void;
}>;

export default function EmojiPicker({
	isVisible,
	onClose,
	children,
}: EmojiPickerProps) {
	return (
		<View>
			<Modal animationType='slide' transparent={true} visible={isVisible}>
				<View style={styles.modalContent}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Choose a sticker</Text>
						<Pressable onPress={onClose}>
							<MaterialIcons name='close' size={22} color='#fff' />
						</Pressable>
					</View>
					{children}
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		height: '25%',
		width: '100%',
		backgroundColor: '#fdacd9',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: 'absolute',
		bottom: 0,
	},
	titleContainer: {
		height: '16%',
		backgroundColor: '#DA1884',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: '#fff',
		fontSize: 16,
	},
});
