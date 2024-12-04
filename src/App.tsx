import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

interface Pelmeni {
	id: string;
	title: string;
	content: string;
}
const App: React.FC = () => {
	const [steps, setSteps] = useState<Pelmeni[]>(data);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const nextHandler = () => {
		setActiveIndex(activeIndex + 1);
	};
	const backHandler = () => {
		setActiveIndex(activeIndex - 1);
	};
	const newStartHandler = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((val, i) => (
							<li
								key={val.id}
								className={
									i <= activeIndex
										? styles['steps-item'] + ' ' + styles.done
										: styles['steps-item']
								}
							>
								{' '}
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(i)}
								>
									{i + 1}
								</button>
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={activeIndex === 0}
							onClick={backHandler}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								data.length === activeIndex + 1
									? newStartHandler
									: nextHandler
							}
						>
							{data.length === activeIndex + 1 ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
