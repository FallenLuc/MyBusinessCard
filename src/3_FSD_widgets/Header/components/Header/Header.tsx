import { Menu } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import classNames from "classnames"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
}

const { Title, Text } = Typography

export const Header = TypedMemo((props: HeaderProps) => {
	const { className } = props

	return (
		<Flex
			className={classNames(styles.Header, className)}
			vertical={false}
			align={"center"}
			wrap={"wrap"}
			gap={"middle"}
			justify={"space-between"}
			component={"header"}
		>
			<Flex
				vertical={true}
				gap={"small"}
			>
				<Title
					level={1}
					className={styles.title}
				>
					Никита Кувашов
				</Title>
				<Text italic>Frontend Developer</Text>
			</Flex>
			<Menu />
		</Flex>
	)
})
