import { WorkDetailedCard } from "@entities/Work"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import classNames from "classnames"
import { workInformation } from "../../constants/workInformation.constant"

type WorkExperienceProps = {
	className?: string
}

const { Title } = Typography

export const WorkExperience = TypedMemo((props: WorkExperienceProps) => {
	const { className } = props

	return (
		<Flex
			className={classNames(className, "section")}
			vertical={true}
			component={"section"}
			id={menuItems.work.key}
		>
			<Title level={2}>Профессиональный опыт</Title>
			{workInformation.map((itemWr, i) => (
				<WorkDetailedCard
					key={i}
					card={itemWr}
				/>
			))}
		</Flex>
	)
})
