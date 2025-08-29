import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import { stack } from "../../constants/stack.constant"
import styles from "./Stack.module.scss"

const { Title, Text } = Typography

export const Stack = TypedMemo(() => {
	return (
		<Flex vertical>
			<Title level={3}>{"Мой стек"}</Title>
			<Flex
				gap={"middle"}
				wrap={"wrap"}
			>
				{stack.map(({ Icon, text }, i) => (
					<Flex
						vertical
						gap={"small"}
						align={"center"}
						key={i}
					>
						<Icon className={styles.icon} />
						<Text>{text}</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	)
})
