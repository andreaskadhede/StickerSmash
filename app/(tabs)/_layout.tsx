import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#DA1884',
				tabBarInactiveTintColor: '#d887b4',
				headerStyle: { backgroundColor: '#fad0e7' },
				headerShadowVisible: false,
				headerTintColor: '#DA1884',

				tabBarStyle: { backgroundColor: '#fad0e7', borderTopColor: '#DA1884' },
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home-sharp' : 'home-outline'}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='about'
				options={{
					title: 'About',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={
								focused ? 'information-circle' : 'information-circle-outline'
							}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
