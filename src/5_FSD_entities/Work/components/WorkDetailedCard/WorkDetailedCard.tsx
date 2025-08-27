import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Image, List, Typography } from "antd"
import classNames from "classnames"
import type { dataWorkType } from "../../types/dataWork.type"

type WorkDetailedCardProps = {
	className?: string
	card: dataWorkType
}

const { Title, Text } = Typography

export const WorkDetailedCard = TypedMemo((props: WorkDetailedCardProps) => {
	const {
		className,
		card: { nameCompany, iconCompany, workItems, date, position }
	} = props

	return (
		<Flex
			vertical
			className={classNames(className)}
			gap={"middle"}
		>
			<Flex
				align={"center"}
				gap={"middle"}
			>
				<Flex
					vertical={false}
					align={"center"}
					gap={"small"}
				>
					<Image
						width={200}
						src={iconCompany}
						alt={nameCompany}
					/>
				</Flex>

				<Flex vertical>
					<Title level={4}>{position}</Title>
					<Text italic>{date}</Text>
				</Flex>
			</Flex>

			<List
				bordered
				size={"large"}
			>
				{workItems.map((item, i) => (
					<List.Item key={i}>{item}</List.Item>
				))}
			</List>
		</Flex>
	)
})
