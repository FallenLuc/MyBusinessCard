import type { dataProjectType } from "@entities/Project"

export const projects: dataProjectType[] = [
	{
		title: "Диплом Нетология: « Ресурс для оформления ЖД билетов »",
		link: "https://github.com/FallenLuc/RailwayTicketBookingSystem",
		tasks: [
			"Реализовал многошаговую форму оформления билета с валидацией полей и сохранением состояния между шагами (React + RTK Query)",
			"Сделал поиск и фильтрацию билетов с управлением состоянием через Redux Toolkit",
			"Покрыл ключевые сценарии юнит-тестами (Jest)",
			"Настроил CI на GitHub Actions: автолинтинг (ESLint, Stylelint) и прогон тестов на каждый PR"
		],
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"RTK Query",
			"работа с API",
			"Jest",
			"Webpack",
			"Git",
			"ESLint",
			"Stylelint",
			"GitHub Actions"
		]
	},
	{
		title: "Платформа для блогинга",
		link: "https://github.com/FallenLuc/Advanced-Frontend-Project",
		tasks: [
			"Реализовал авторизацию, регистрацию и личный кабинет с редактированием профиля",
			"Собрал ленту статей с поиском, комментариями и рейтингом",
			"Добавил мультиязычность (i18next) и переключение светлой/тёмной тем",
			"Поднял собственный сервер на Node.js для работы с данными",
			"Покрыл логику юнит-тестами (Jest), настроил CI на GitHub Actions"
		],
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"RTK Query",
			"работа с API",
			"Jest",
			"Webpack",
			"i18next",
			"Git",
			"ESLint",
			"Stylelint",
			"GitHub Actions"
		]
	}
]
