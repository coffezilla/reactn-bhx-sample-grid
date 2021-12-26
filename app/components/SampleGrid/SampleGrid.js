import { View, ScrollView, Dimensions } from 'react-native';

// wrapper
export const SampleGrid = ({
	children,
	gap = 0,
	offset = 0,
	cols = 1,
	gapBottom = gap,
}) => {
	const gapBox = gap;
	const gapBoxBottom = gapBottom;
	const screenOffset = offset;
	const boxPerGrid = cols;

	const screenWidth = Dimensions.get('window').width;
	const screenWidthUsefull = gapBox * (boxPerGrid - 1) + screenOffset * 2;
	const boxGridWidth = (screenWidth - screenWidthUsefull) / boxPerGrid;

	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignSelf: 'flex-start',
					paddingHorizontal: screenOffset,
				}}
			>
				{children.map((child, index) => {
					if ((index + 1) % boxPerGrid === 0) {
						return (
							<GridItem
								key={index}
								gap={gap}
								gapBottom={gapBoxBottom}
								offset={offset}
								width={boxGridWidth}
								position='last'
							>
								{child}
							</GridItem>
						);
					}

					return (
						<GridItem
							key={index}
							gap={gap}
							gapBottom={gapBoxBottom}
							offset={offset}
							width={boxGridWidth}
							position='middle'
						>
							{child}
						</GridItem>
					);
				})}
			</View>
		</ScrollView>
	);
};

// single item
const GridItem = ({ children, gap, gapBottom, width, position = 'middle' }) => {
	return (
		<>
			<View
				style={{
					width: width,
					marginBottom: gapBottom,
					marginRight: position === 'last' ? 0 : gap,
				}}
			>
				{children}
			</View>
		</>
	);
};
