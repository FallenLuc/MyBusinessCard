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
						Frontend-инженер с 2 годами коммерческого опыта и любовью к
						архитектуре. Стек: React + TypeScript, Redux Toolkit, RTK Query,
						Feature-Sliced Design.
					</Text>
					<Text>
						Строю переиспользуемые UI-киты и универсальные процессы
						(валидация, отслеживание изменений), рефакторю легаси, покрываю код
						тестами. Умею работать с LLM и интегрировать их в проекты.
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
