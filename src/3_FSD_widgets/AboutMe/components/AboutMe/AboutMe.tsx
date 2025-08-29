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
						Мне 27 лет. В настоящее время работаю в Т-Банке. Разрабатываю сценарии для
						голосового и чатового робота инвестиций, в том числе, с интеграцией с LLM.
					</Text>
					<Text>
						Имею неоконченное высшее образование в МИРЭА, по направлению информационные
						системы и технологии. Прошел различные курсы по профессиональной
						переподготовке по Frontend разработке, в том числе, курсы в
						онлайн-университете «Нетология» и др.
					</Text>
					<Text>Я быстрообучаемый, ответсвенный, заинтересованный специалист.</Text>
					<Text>Решил продолжить развитие карьеры в Frontend.</Text>
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
