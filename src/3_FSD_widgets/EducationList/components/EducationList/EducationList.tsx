import { ReadOutlined } from "@ant-design/icons"
import { type dataEducation } from "@entities/Education"
import { menuItems } from "@features/Menu"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, List, Typography } from "antd"
import classNames from "classnames"
import { type ReactNode, useCallback } from "react"
import { educationListConstant } from "../../constant/educationList.constant"
import styles from "./EducationList.module.scss"

type EducationListProps = {
	className?: string
}

const { Title } = Typography

export const EducationList = TypedMemo((props: EducationListProps) => {
	const { className } = props

	const renderFunction: (item: dataEducation, i: number) => ReactNode = useCallback(
		item => (
			<List.Item>
				<List.Item.Meta
					avatar={<ReadOutlined className={styles.icon} />}
					title={item.title}
					description={item.description}
				/>
			</List.Item>
		),
		[]
	)

	return (
		<Flex
			className={classNames(className, "section")}
			vertical
			id={menuItems.education.key}
			component={"section"}
			gap={"middle"}
		>
			<Title level={2}>Образование</Title>

			<Flex vertical>
				<Title level={3}>Основное образование:</Title>

				<List bordered>
					<List.Item>
						<List.Item.Meta
							avatar={<ReadOutlined className={styles.icon} />}
							title={"2016-2019 МТУ Москва (бывш МИРЭА)"}
							description={
								"«Информационные системы и технологии» - бакалавр (неоконченное)"
							}
						/>
					</List.Item>
				</List>
			</Flex>

			<Flex vertical>
				<Title level={3}>Курсы, тренинги:</Title>

				<List
					bordered
					dataSource={educationListConstant}
					renderItem={renderFunction}
				/>
			</Flex>

			<Flex vertical>
				<Title level={3}>Дополнительная информация:</Title>

				<List bordered>
					<List.Item>
						<List.Item.Meta
							avatar={<ReadOutlined className={styles.icon} />}
							title={"Иностранный язык"}
							description={"Английский язык (B1 — Intermediate)"}
						/>
					</List.Item>
				</List>
			</Flex>
		</Flex>
	)
})
