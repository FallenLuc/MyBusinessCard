import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import classNames from "classnames"
import dayjs from "dayjs"
import styles from "./Footer.module.scss"

type FooterProps = {
	className?: string
}

const { Title, Text } = Typography

export const Footer = TypedMemo((props: FooterProps) => {
	const { className } = props

	return (
		<Flex
			className={classNames(styles.Footer, className)}
			vertical
			component={"footer"}
			align={"center"}
			justify={"center"}
		>
			<Flex
				vertical
				align={"center"}
			>
				<Title
					level={5}
					italic
				>
					Created By Nikita Kuvashov
				</Title>
				<Text italic>{dayjs().year()}</Text>
			</Flex>
		</Flex>
	)
})
