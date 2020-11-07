import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Profile = () => (
	<div class={style.container}>
		<h1 class={style.profile}>About Me</h1>
		<section class={style.sectionBorder}></section>
		<p class={style.blockText}>
			I'm a software developer at Zycron with Nashville Electric Service. I'm passionate about software craftsmanship, open source software, and helping others solve problems with technical solutions. I always welcome a good challenge and an opportunity to learn something new. I look forward to the many years ahead of me in this industry.
		</p>
	</div>
);

export default Profile;
