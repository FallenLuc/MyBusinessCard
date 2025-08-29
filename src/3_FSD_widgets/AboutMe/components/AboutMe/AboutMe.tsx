import { AvatarImage } from "@assets/index"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Image, Typography } from "antd"

import classNames from "classnames"
import { useMemo } from "react"
import { Contacts } from "../Contacts/Contacts"
import styles from "./AboutMe.module.scss"

type AboutMeProps = {
	className?: string
}

const { Title, Text } = Typography

export const AboutMe = TypedMemo((props: AboutMeProps) => {
	const { className } = props

	const placeholder = useMemo(() => <div className={styles.placeholder} />, [])
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
						Мне 27 лет. У меня есть опыт работы в продуктовой команде Т-Банка (Agile,
						Daily, Planning, Sprints) по разработке голосового робота. Я легко
						адаптируюсь к новым задачам и эффективно работаю в кросс‑функциональных
						командах. В Т‑Банке проводил обучение сотрудников, ревью, участвовал в
						переговорах с разными командами, проводил встречи по итогам кварталов.
					</Text>
					<Text>
						Я умею разрабатывать SPA на React + TypeScript с использованием архитектуры
						по методологии Feature-Sliced Design. У меня есть опыт по настройке рабочего
						окружения, такого как Webpack. Умею работать со state manager Redux (Redux
						Toolkit) + RTK Query. Пишу тесты на Jest, и понимаю для чего их пишу.
					</Text>
					<Text>Я быстрообучаемый, ответственный, заинтересованный специалист.</Text>
				</Flex>

				<Contacts />
			</Flex>

			<div className={styles.wrapper}>
				<Image
					preview={false}
					className={styles.image}
					placeholder={placeholder}
					width={"100%"}
					alt={"Аватар"}
					src={AvatarImage}
				/>
			</div>
		</Flex>
	)
})
