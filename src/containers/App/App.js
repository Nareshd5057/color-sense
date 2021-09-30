import React, { Component } from 'react'
import { Button } from 'reactstrap'
import logo from './logo.svg'
import './App.css'
import jsonData from '../../color_data.json'
import MainLayout from '../../component/MainLayout/MainLayout'
import { Provider } from 'mobx-react'
import MainStore from '../../stores/MainStore'
import Header from '../../component/Header/Header'

let mainStore = new MainStore()

class App extends Component {
	componentDidMount() {
		console.log(jsonData)
	}
	render() {
		return (
			<Provider mainStore={mainStore}>
				<div className="App">
					<Header />
					<MainLayout />
				</div>
			</Provider>
		)
	}
}

export default App
