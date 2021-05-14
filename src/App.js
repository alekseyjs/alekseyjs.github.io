import { Route } from 'react-router-dom'
import './App.css'
import Docs from './Comps/Docs'
import Home from './Comps/Home'
import About from './Comps/About'
import Nav from './Comps/Nav'

function App () {
	setTimeout(() => {
		console.log('window.inner.width', window.innerWidth)
	}, 100)
	return (
		<div className={'App'}>
			<Nav/>
			<Route exact path={'/'} render={() => <Home/>}/>
			<Route exact path={'/about'} render={props => <About {...props}/>}/>
			<Route exact path={'/docs'} render={props => <Docs {...props}/>}/>
		</div>
	)
}

export default App
