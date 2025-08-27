import type { dataProjectType } from "@entities/Project"

export const projects: dataProjectType[] = [
	{
		title: "Диплом Нетология: « Ресурс для оформление ЖД билетов »",
		link: "https://github.com/FallenLuc/RailwayTicketBookingSystem",
		tasks: [
			"Выбор ЖД билета",
			"поиск билетов с фильтром",
			"полноценное оформление жд билета (многостраничная форма)"
		],
		technologies: [
			"React",
			"Typescript",
			"Redux",
			"RTK Query",
			" работа с Api",
			"Jest",
			"Webpack",
			"Git",
			"Eslint",
			"StyleLint",
			"GithubActions"
		]
	},
	{
		title: "Платформа для блогинга",
		link: "https://github.com/FallenLuc/Advanced-Frontend-Project",
		tasks: [
			"Поиск статей",
			"личный кабинет с редактированием",
			"авторизация",
			"регистрация",
			"комментарии",
			"рейтинг",
			"несколько языков",
			"несколько цветовых тем",
			"сервер на Node JS"
		],
		technologies: [
			"React",
			"Typescript",
			"Redux",
			"RTK Query",
			" работа с Api",
			"Jest",
			"Webpack",
			"i18next",
			"Git",
			"Eslint",
			"StyleLint",
			"GithubActions"
		]
	}
]
