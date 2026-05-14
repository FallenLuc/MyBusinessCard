import { AvatarImage } from "@assets/index"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Image, Skeleton, Typography } from "antd"

import classNames from "classnames"
import { useCallback, useState } from "react"
import { Contacts } from "../Contacts/Contacts"
import styles from "./AboutMe.module.scss"

type AboutMeProps = {
	className?: string
}

const { Title, Text } = Typography

export const AboutMe = TypedMemo((props: AboutMeProps) => {
	const { className } = props
	const [loaded, setLoaded] = useState(false)

	const onLoad = useCallback(() => setLoaded(true), [])
	return (
		<Flex
			className={classNames(styles.AboutMe, className)}
			id={menuItems.about.key}
			justify={"space-between"}
			align={"center"}
			gap={"middle"}
			component={"section"}
		>
			<Flex
				vertical={true}
				className={styles.rightSide}
				gap={"middle"}
			>
				<Title level={2}>{menuItems.about.title}</Title>
				<Flex
					vertical={true}
					gap={"small"}
				>
					<Text>
						Frontend-разработчик, специализируюсь на построении масштабируемых SPA на
						React + TypeScript с архитектурой Feature-Sliced Design.
					</Text>
					<Text>
						В коммерческом проекте Noxer с нуля выстроил архитектуру фронтенда по FSD,
						перевёл API на RTK Query, собрал кастомный UI-кит, внедрил юнит-тесты (Jest
						+ RTL), настроил CI/CD на Jenkins и мониторинг через Grafana и GlitchTip.
						Курирую двух junior-разработчиков на код-ревью, участвую в планировании и
						проектировании общих сущностей с бэкендом.
					</Text>
					<Text>
						Параллельно в Т-Банке развиваю голосового и чат-бота для инвестиций:
						разрабатываю backend-фичи на Python, пишу сценарии, интегрирую LLM, связываю
						внутренние системы с API на JavaScript. Работаю в Agile: daily, спринты,
						планирования, Jira.
					</Text>
				</Flex>

				<Contacts />
			</Flex>

			<div className={styles.wrapper}>
				{!loaded && (
					<Skeleton.Image
						active
						className={styles.skeleton}
					/>
				)}
				<Image
					preview={false}
					className={classNames(styles.image, { [styles.hidden]: !loaded })}
					width={"100%"}
					alt={"Аватар"}
					src={AvatarImage}
					onLoad={onLoad}
				/>
			</div>
		</Flex>
	)
})
