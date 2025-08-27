import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import classNames from "classnames"
import { Competencies } from "../Competencies/Competencies"
import { Stack } from "../Stack/Stack"

type SkillsProps = {
	className?: string
}

const { Title } = Typography

export const Skills = TypedMemo((props: SkillsProps) => {
	const { className } = props

	return (
		<Flex
			className={classNames(className, "section")}
			vertical={true}
			id={menuItems.skills.key}
			component={"section"}
			gap={"middle"}
		>
			<Title level={2}>{menuItems.skills.title}</Title>

			<Flex
				vertical={true}
				gap={"large"}
			>
				<Stack />

				<Competencies />
			</Flex>
		</Flex>
	)
})
