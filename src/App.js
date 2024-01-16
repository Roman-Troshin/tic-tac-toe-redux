import styles from './App.module.css';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { WIN_CASES } from './constants/winCases';

import { selectWinSign, selectIsAllMovesMade, selectCellsValues } from './selectors';

import { checkIsGameOver } from './help-functions/checkIsGameOver';
import { checkIsSomeoneWin } from './help-functions/checkIsSomeoneWin';
import { resetGame } from './help-functions/resetGame';

import { GameHeaderInformationContainer } from './game-header-information/GameHeaderInformation';
import { CellsContainer } from './cells-field/Cell';

const AppLayout = () => {
	const dispatch = useDispatch();

	return (
		<button className={styles.button} onClick={() => resetGame(dispatch)}>
			Начать сначала
		</button>
	);
};

export const AppContainer = () => {
	const winSign = useSelector(selectWinSign);
	const isAllMovesMade = useSelector(selectIsAllMovesMade);
	const cellsValues = useSelector(selectCellsValues);

	const dispatch = useDispatch();

	useEffect(() => {
		checkIsSomeoneWin(WIN_CASES, winSign, dispatch, cellsValues);
		checkIsGameOver(cellsValues, isAllMovesMade, dispatch);
	}, [winSign, dispatch, cellsValues, isAllMovesMade]);

	return (
		<div className={styles.mainContainer}>
			<GameHeaderInformationContainer />

			<CellsContainer />

			<AppLayout />
		</div>
	);
};
