import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AboutMe } from "@widgets/AboutMe"
import { Header } from "@widgets/Header"
import { Skills } from "@widgets/Skills"
import { WorkExperience } from "@widgets/WorkExperience"
import { Flex } from "antd"
import classNames from "classnames"

type MainPageProps = {
	className?: string
}

export const MainPage = TypedMemo((props: MainPageProps) => {
	const { className } = props

	return (
		<div className={classNames(className, ".page")}>
			<Flex
				className={"container"}
				vertical={true}
				gap={"large"}
			>
				<Header />
				<AboutMe />
				<Skills />
				<WorkExperience />
			</Flex>
		</div>
	)
})
