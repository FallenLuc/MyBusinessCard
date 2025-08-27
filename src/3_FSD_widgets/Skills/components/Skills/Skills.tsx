import checkIconUrl from "@assets/icons/check.svg?url"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Avatar, Flex, List, Typography } from "antd"
import classNames from "classnames"
import { competencies } from "../../constants/competencies.constant"
import { Stack } from "../Stack/Stack"

type SkillsProps = {
	className?: string
}

const { Title } = Typography
const { Item } = List

export const Skills = TypedMemo((props: SkillsProps) => {
	const { className } = props

	return (
		<Flex
			className={classNames(className)}
			vertical={true}
			id={menuItems.skills.key}
			component={"section"}
			gap={"middle"}
		>
			<Title level={2}>{menuItems.skills.title}</Title>

			<Stack />

			<Flex vertical>
				<Title level={3}>{"Ключевые компетенции"}</Title>
				<List>
					{competencies.map((item, i) => (
						<Item key={i}>
							<Item.Meta
								title={item.title}
								avatar={<Avatar src={checkIconUrl} />}
							/>
						</Item>
					))}
				</List>
			</Flex>
		</Flex>
	)
})
