import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/about';
import Tech from '../routes/tech';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path={process.env.PUBLIC_URL + '/'} />
			<Profile path={process.env.PUBLIC_URL + '/about/'} />
			<Tech path={process.env.PUBLIC_URL + '/tech/'} />
		</Router>
		<Footer />
	</div>
)

export default App;
