import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AboutMe } from "@widgets/AboutMe"
import { EducationList } from "@widgets/EducationList"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { Projects } from "@widgets/Projects"
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
				<Projects />
				<EducationList />
				<Footer />
			</Flex>
		</div>
	)
})
