import { StyleSheet, Text, View } from 'react-native';

// swiper
import { SampleGrid } from './components/SampleGrid';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapperCarousel}>
				<SampleGrid cols={3} gap={10} gapBottom={30} offset={20}>
					<View style={styles.itemCarousel}>
						<Text>First</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Second</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Third</Text>
					</View>
					<View style={styles.itemCarousel}>
						<Text>Fourth</Text>
					</View>
				</SampleGrid>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapperCarousel: {
		backgroundColor: 'red',
	},
	itemCarousel: {
		backgroundColor: 'orange',
		aspectRatio: 1 / 1,
	},
});
