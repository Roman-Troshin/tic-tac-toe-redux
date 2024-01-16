import styles from './Cell.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { selectWinSign, selectIsAllMovesMade, selectCurrentSignMove, selectCellsValues } from '../selectors';
import { setCellsValues, setCurrentSignMove } from '../actions';

const CellsLayout = ({ activateButton }) => {
	const winSign = useSelector(selectWinSign);
	const isAllMovesMade = useSelector(selectIsAllMovesMade);
	const cellsValues = useSelector(selectCellsValues);
	
	const isButtonsBlocked = winSign || isAllMovesMade;

	return (
		<div className={styles.field}>
			{cellsValues.map((value, index) => (
				<button
					key={index}
					className={styles.button}
					disabled={isButtonsBlocked}
					onClick={() => {
						activateButton(index);
					}}
				>
					{value}
				</button>
			))}
		</div>
	);
};

export const CellsContainer = () => {
	const currentSignMove = useSelector(selectCurrentSignMove);
	const cellsValues = useSelector(selectCellsValues);

	const dispatch = useDispatch();

	const activateButton = (index) => {
		const updatedValue = [...cellsValues];
		updatedValue[index] = currentSignMove;
		const nextCurrentSignMove = currentSignMove === 'x' ? 'o' : 'x';

		dispatch(setCellsValues(updatedValue));
		dispatch(setCurrentSignMove(nextCurrentSignMove));
	};

	return <CellsLayout activateButton={activateButton} />;
};
