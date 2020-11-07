import { h, Component, render } from 'preact';
import style from './style.css';
import Typed from '../../../node_modules/typed.js/lib/typed.min.js';

class TypedReactDemo extends Component {
	componentDidMount() {
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const { strings } = this.props;
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 2000,
			startDelay: 200,
			loop: true
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		return (
			<div class={style.typed}>
				<span
					ref={(el) => { this.el = el; }}
				/>
				<span class={style.typing}>
					Developer
				</span>
			</div>
		);
	}
}

const Home = () => (
	<div class={style.home}>
		<div class={style.center}>
			<img src="../../assets/images/portrait.jpg" alt="self portrait" loading="eager" class={style.portrait} width="300" height="300"></img>
		</div>
		<section class={style.center}>
			<h1>David Brown</h1>
		</section>
		<section class={style.center}>
			<TypedReactDemo
				strings={[
					"Web", "JavaScript", "Python", "C#", "SQL"
				]}
			/>
		</section>
		
		<div class={style.iconContainer}>
			<div class={style.iconBlock}>
				<a href="https://github.com/Adobe-Android">
					<img title="GitHub" alt="GitHub" class={style.icon} src="../../assets/contact/github.svg" loading="lazy" />
				</a>
				<p>GitHub</p>
			</div>

			<div class={style.iconBlock}>
				<a href="https://www.linkedin.com/in/david-brown-811bab99">
					<img title="LinkedIn" alt="LinkedIn" class={style.icon} src="../../assets/contact/linkedin.svg" loading="lazy" />
				</a>
				<p>LinkedIn</p>
			</div>

			<div class={style.iconBlock}>
				<a href="mailto:dbrownproit@gmail.com">
					<img title="Email" alt="Email" class={style.icon} src="../../assets/contact/email.svg" loading="lazy" />
				</a>
				<p>Email</p>
			</div>
			
		</div>
	</div>
);

export default Home;
