import { tBankIconUrl, noxerIconUrl } from "@assets/index"
import type { dataWorkType } from "@entities/Work"

export const workInformation: dataWorkType[] = [
	{
		position: "Frontend-разработчик",
		nameCompany: "Noxer",
		date: "10.2024 – настоящее время",
		iconCompany: noxerIconUrl,
		workItems: [
			"Проектирование архитектуры фронтенда по методологии Feature-Sliced Design с нуля",
			"Разработка кастомизируемого UI-кита компонентов",
			"Реализация ключевых продуктовых механик: Process Validation и Change Tracker",
			"Перевод слоя API на Redux Toolkit Query — унификация работы с серверными данными",
			"Настройка инфраструктуры: Vite, ESLint, Stylelint, Prettier, Husky, lint-staged",
			"Участие в настройке CI/CD на Jenkins и Docker",
			"Внедрение юнит-тестирования (Jest + React Testing Library)",
			"Настройка мониторинга через Grafana и GlitchTip",
			"Проектирование общей архитектуры по доменным сущностям совместно с бэкендом",
			"Менторство двух junior-разработчиков: код-ревью, разбор PR, наставничество",
			"Настройка Jira, планирование спринтов, оценка задач"
		]
	},
	{
		position: "Ведущий разработчик, Разработка сценариев голосовых роботов",
		nameCompany: "Т-Банк",
		date: "04.2023 – настоящее время",
		iconCompany: tBankIconUrl,
		workItems: [
			"Разработка backend-фич бота на Python",
			"Разработка сценариев для голосового и чат-бота инвестиций",
			"Интеграция LLM в работу ботов (промптирование с нуля)",
			"Связка внутренних систем с API на JavaScript",
			"Запуск A/B-тестов гипотез, анализ продуктовых метрик",
			"Ведение технической документации, проведение тех-микрофонов",
			"Работа в Agile (Jira): daily, спринты, планирования, кросс-командные проекты"
		]
	}
]
