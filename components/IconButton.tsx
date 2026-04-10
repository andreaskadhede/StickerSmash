import { Pressable, StyleSheet, Text } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IconButtonProps = {
	icon: keyof typeof MaterialIcons.glyphMap;
	label: string;
	onPress?: () => void;
};

export default function IconButton({ onPress, icon, label }: IconButtonProps) {
	return (
		<Pressable style={styles.iconButton} onPress={onPress}>
			<MaterialIcons name={icon} size={38} color='#DA1884' />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	iconButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconButtonLabel: {
		color: '#DA1884',
		marginTop: 12,
	},
});
