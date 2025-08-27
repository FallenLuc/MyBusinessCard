import { ApartmentOutlined, GithubOutlined, ScheduleOutlined } from "@ant-design/icons"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, List, Typography } from "antd"
import classNames from "classnames"
import type { dataProjectType } from "../../types/dataProjectType"
import styles from "./ProjectDetailedCard.module.scss"

type ProjectDetailedCardProps = {
	className?: string
	item: dataProjectType
}

const { Title, Text } = Typography

export const ProjectDetailedCard = TypedMemo((props: ProjectDetailedCardProps) => {
	const {
		className,
		item: { tasks, link, title, technologies }
	} = props

	return (
		<Flex
			className={classNames(className)}
			vertical
		>
			<Title level={4}>{title}</Title>
			<List bordered={false}>
				<List.Item>
					<Flex
						vertical={false}
						gap={"small"}
						wrap="wrap"
						align={"center"}
					>
						<ScheduleOutlined className={styles.icon} />
						<Text strong>Задачи:</Text>

						{tasks.map((task, i) => {
							if (i !== tasks?.length - 1) {
								return <Text key={i}>{task},</Text>
							}

							return <Text key={i}>{task}</Text>
						})}
					</Flex>
				</List.Item>
				<List.Item>
					<Flex
						vertical={false}
						gap={"small"}
						align={"center"}
					>
						<GithubOutlined className={styles.icon} />
						<Text strong>GitHub:</Text>

						<a
							href={link}
							target={"_blank"}
							rel="noreferrer"
						>
							{link}
						</a>
					</Flex>
				</List.Item>
				<List.Item>
					<Flex
						vertical={false}
						gap={"small"}
						align={"center"}
					>
						<ApartmentOutlined className={styles.icon} />
						<Text strong>Технологии:</Text>
						{technologies.map((tech, i) => {
							if (i !== technologies?.length - 1) {
								return <Text key={i}>{tech},</Text>
							}

							return <Text key={i}>{tech}</Text>
						})}
					</Flex>
				</List.Item>
			</List>
		</Flex>
	)
})
