import { StyledPlatformButton } from './styles';

const Platforms = ({
	platforms,
	activePlatform,
	setActivePlatform,
	changeActivePlatform
}) => {
	return platforms.map((platform, index) => (
		<StyledPlatformButton
			key={platform.id}
			$active={activePlatform === index}
			onClick={() => changeActivePlatform(index, setActivePlatform)}
		>
			{platform.name}
		</StyledPlatformButton>
	));
};

export default Platforms;
