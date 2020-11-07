import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Tech = () => (
	<div class={style.container}>
		<h1 class={style.profile}>Tech</h1>
		<section class={style.sectionBorder}></section>
		<section class={style.iconContainer}>
			<div class={style.iconBlock}>
				<img alt="Preact" class={style.icon} src="../../assets/tech/preact.svg" loading="lazy" />
				<p>Preact</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Angular" class={style.icon} src="../../assets/tech/angular.svg" loading="lazy" />
				<p>Angular</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="JavaScript" class={style.icon} src="../../assets/tech/javascript.svg" loading="lazy" />
				<p>JavaScript</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Node.js" class={style.icon} src="../../assets/tech/nodejs.svg" loading="lazy" />
				<p>Node.js</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Python" class={style.icon} src="../../assets/tech/python.svg" loading="lazy" />
				<p>Python</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Git" class={style.icon} src="../../assets/tech/git.svg" loading="lazy" />
				<p>Git</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="GitHub" class={style.icon} src="../../assets/tech/github.svg" loading="lazy" />
				<p>GitHub</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="PostgreSQL" class={style.icon} src="../../assets/tech/postgresql.svg" loading="lazy" />
				<p>PostgreSQL</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Oracle Database" class={style.icon} src="../../assets/tech/oracle.svg" loading="lazy" />
				<p>Oracle Database</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Visual Studio Code" class={style.icon} src="../../assets/tech/vscode.svg" loading="lazy" />
				<p>Visual Studio Code</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="Visual Studio" class={style.icon} src="../../assets/tech/vs2019.svg" loading="lazy" />
				<p>Visual Studio</p>
			</div>
			<div class={style.iconBlock}>
				<img alt="C#" class={style.icon} src="../../assets/tech/csharp.svg" loading="lazy" />
				<p>C#</p>
			</div>
			<div class={style.iconBlock}>
				<img alt=".NET" class={style.icon} src="../../assets/tech/dotnet.svg" loading="lazy" />
				<p>.NET</p>
			</div>
		</section>
	</div>
);

export default Tech;
