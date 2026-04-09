import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonProps = {
	label: string;
	variant?: 'primary';
};

export default function Button({ label, variant }: ButtonProps) {
	if (variant === 'primary') {
		return (
			<View
				style={[
					styles.buttonContainer,
					{ borderColor: '#fff', borderWidth: 4, borderRadius: 18 },
				]}>
				<Pressable
					style={[styles.button, { backgroundColor: '#DA1884' }]}
					onPress={() => alert(`You pressed "${label}" button.`)}>
					<FontAwesome
						name='picture-o'
						size={18}
						color='#25292e'
						style={styles.buttonIcon}
					/>
					<Text style={styles.buttonLabel}>{label}</Text>
				</Pressable>
			</View>
		);
	}

	return (
		<View style={styles.buttonContainer}>
			<Pressable
				style={styles.button}
				onPress={() => alert(`You pressed "${label}" button.`)}>
				<Text style={styles.buttonLabel}>{label}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	buttonLabel: {
		color: '#fff',
		fontSize: 24,
	},
	buttonIcon: {
		color: '#fff',
		paddingRight: 8,
	},
});
