import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	<footer class={style.footer}>
		<p>{ "\u00A9" } 2017-{ new Date().getFullYear() } David Brown</p>
	</footer>
);

export default Footer;
