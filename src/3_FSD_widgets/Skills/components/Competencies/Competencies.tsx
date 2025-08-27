import { checkIconUrl } from "@assets/index"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Avatar, Flex, List, Typography } from "antd"
import { competencies } from "../../constants/competencies.constant"
import styles from "./Competencies.module.scss"

const { Title } = Typography
const { Item } = List

export const Competencies = TypedMemo(() => {
	return (
		<Flex vertical>
			<Title level={3}>{"Ключевые компетенции"}</Title>
			<List>
				{competencies.map((item, i) => (
					<Item key={i}>
						<Item.Meta
							className={styles.item}
							title={item.title}
							avatar={<Avatar src={checkIconUrl} />}
						/>
					</Item>
				))}
			</List>
		</Flex>
	)
})
