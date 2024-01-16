import styles from './GameHeaderInformation.module.css';

import { useSelector } from 'react-redux';
import { selectWinSign, selectIsAllMovesMade, selectCurrentSignMove } from '../selectors';

const GameHeaderInformationLayout = ({ currentGameInformation }) => (
	<div className={styles.header}>{currentGameInformation}</div>
);

export const GameHeaderInformationContainer = () => {
	
	const winSign = useSelector(selectWinSign);
	const isAllMovesMade = useSelector(selectIsAllMovesMade);
	const currentSignMove = useSelector(selectCurrentSignMove);
	
	const checkCurrentStepOrResult = () => {
		if (winSign) {
			return `Игра окончена, победил: ${winSign}`;
		} else if (isAllMovesMade) {
			return 'Игра окончена, НИЧЬЯ!';
		} else {
			return `Сейчас ходит: ${currentSignMove}`;
		}
	};

	return (
		<GameHeaderInformationLayout currentGameInformation={checkCurrentStepOrResult()} />
	);
};
