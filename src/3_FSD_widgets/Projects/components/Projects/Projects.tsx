import { ProjectDetailedCard } from "@entities/Project"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import classNames from "classnames"
import { projects } from "../../constants/projects.constant"

type ProjectsProps = {
	className?: string
}

const { Title } = Typography

export const Projects = TypedMemo((props: ProjectsProps) => {
	const { className } = props

	return (
		<Flex
			component={"section"}
			className={classNames(className, "section")}
			vertical={true}
			gap={"middle"}
			id={menuItems.projects.key}
		>
			<Title level={2}>Основные учебные Frontend проекты</Title>
			<Flex
				vertical
				gap={"large"}
			>
				{projects.map((item, i) => (
					<ProjectDetailedCard
						key={i}
						item={item}
					/>
				))}
			</Flex>
		</Flex>
	)
})
