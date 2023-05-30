import { useState } from 'react'
import Select from 'react-select'
import styles from './app.module.css'
// import logo from './logo.svg'
// import PropTypes from 'prop-types'
// import { useState } from 'react'

//! Котролируемое поле формы imput в react
// export const App = () => {
// 	const [value, setValue] = useState('')
// 	return (
// 		<div className={styles.app}>
// 			<input
// 				type="text"
// 				value={value}
// 				onChange={({ target }) => setValue(target.value)}
// 			/>
// 		</div>
// 	)
// }

//! Не котролируемое поле формы imput в react
// export const App = () => {
// 	return (
// 		<div className={styles.app}>
// 			<input type="text" />
// 		</div>
// 	)
// }

//! Котроль поля imput при помощи css см. app.module.css
// export const App = () => {
// 	return (
// 		<div className={styles.app}>
// 			<input type="checkbox" />
// 			<div className={styles.content}>Любой контент</div>
// 		</div>
// 	)
// }

//! Хранение состояния формы в котором больше 1 поля:
//! 1). Создание состояний для каждого поля
// const sendData = (formData) => {
// 	console.log(formData)
// }

// export const App = () => {
// 	const [email, setEmail] = useState('')
// 	const [login, setLogin] = useState('')
// 	const [password, setPassword] = useState('')

// 	const onSubmit = (e) => {
// 		e.preventDefault()
// 		sendData({ email, login, password })
// 	}

// 	return (
// 		<div className={styles.app}>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					type="email"
// 					name="email"
// 					value={email}
// 					placeholder="Почта"
// 					onChange={({ target }) => setEmail(target.value)}
// 				/>
// 				<input
// 					type="text"
// 					name="login"
// 					value={login}
// 					placeholder="Логин"
// 					onChange={({ target }) => setLogin(target.value)}
// 				/>
// 				<input
// 					type="password"
// 					name="password"
// 					value={password}
// 					placeholder="Пароль"
// 					onChange={({ target }) => setPassword(target.value)}
// 				/>
// 				<button type="submit">Отправить</button>
// 			</form>
// 		</div>
// 	)
// }

//! 2). Создание одного состояния с объектом для всех полей (оптимальный вариант)
// const initialState = {
// 	email: '',
// 	login: '',
// 	password: '',
// }

// const useStore = () => {
// 	const [state, setState] = useState(initialState)

// 	return {
// 		getState: () => state,
// 		upDateState: (fieldName, newValue) => {
// 			setState({ ...state, [fieldName]: newValue })
// 		},
// 		resetState: () => {
// 			setState(initialState)
// 		},
// 	}
// }

// const sendData = (formData) => {
// 	console.log(formData)
// }

// export const App = () => {
// 	const { getState, upDateState, resetState } = useStore()

// 	const onSubmit = (e) => {
// 		e.preventDefault()
// 		sendData(getState())
// 	}

// 	const { email, login, password } = getState()

// 	const onChange = ({ target }) => upDateState(target.name, target.value)

// 	return (
// 		<div className={styles.app}>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					type="email"
// 					name="email"
// 					value={email}
// 					placeholder="Почта"
// 					onChange={onChange}
// 				/>
// 				<input
// 					type="text"
// 					name="login"
// 					value={login}
// 					placeholder="Логин"
// 					onChange={onChange}
// 				/>
// 				<input
// 					type="password"
// 					name="password"
// 					value={password}
// 					placeholder="Пароль"
// 					onChange={onChange}
// 				/>
// 				<button type="reset" onClick={resetState}>Сброс</button>
// 				<button type="submit">Отправить</button>
// 			</form>
// 		</div>
// 	)
// }

//! Создание контроллируемого (с атрибутами value и onChange) одиночного селекта и мульти селекта
// export const App = () => {
// 	const [selectedProduct, setSelectedProduct] = useState('tv')
// 	const [selectedColors, setSelectedColors] = useState(['black', 'silver'])

// 	const onSelectedProductChange = ({ target }) =>
// 		setSelectedProduct(target.value)

// 	const onSelectedColorsChange = ({ target }) => {
// 		const newSelectedColors = [...target.selectedOptions].map(
// 			(selectedTarget) => selectedTarget.value
// 		)
// 		setSelectedColors(newSelectedColors)
// 	}

// 	return (
// 		<div className={styles.app}>
// 			<select value={selectedProduct} onChange={onSelectedProductChange}>
// 				<option value="tv">Телевизор</option>
// 				<option value="smartphone">Смартфон</option>
// 				<option value="laptop">Ноутбук</option>
// 			</select>
// 			<select
// 				multiple={true}
// 				value={selectedColors}
// 				onChange={onSelectedColorsChange}
// 			>
// 				<option value="black">Чёрный</option>
// 				<option value="silver">Серебристый</option>
// 				<option value="white">Белый</option>
// 			</select>
// 		</div>
// 	)
// }

//! Библиотека React Select
//! установи: npm i --save react-select
//! импортируй: import Select from 'react-select'
//! https://react-select.com/props#api
const productOptions = [
	{ value: 'tv', label: 'Телевизор' },
	{ value: 'smartphone', label: 'Смартфон' },
	{ value: 'laptop', label: 'Ноутбук' },
]

const colorOptions = [
	{ value: 'black', label: 'Чёрный' },
	{ value: 'silver', label: 'Серебристый' },
	{ value: 'white', label: 'Белый' },
]

export const App = () => {
	return (
		<div className={styles.app}>
			<Select options={productOptions} defaultValue={productOptions[0]} />
			<Select
				isMulti
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[1]]}
			/>
		</div>
	)
}
