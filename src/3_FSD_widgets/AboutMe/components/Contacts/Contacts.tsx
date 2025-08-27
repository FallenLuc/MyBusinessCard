import { GithubOutlined, MailOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Flex, Typography } from "antd"
import styles from "./Contacts.module.scss"

type ContactsProps = {
	className?: string
}

const { Title, Text } = Typography
export const Contacts = TypedMemo((props: ContactsProps) => {
	const { className } = props

	return (
		<Flex
			vertical
			className={className}
		>
			<Title level={3}>Контакты:</Title>
			<Flex
				gap={"small"}
				vertical
			>
				<a
					href={"tg://resolve?domain=fallenLuc"}
					className={styles.link}
				>
					<SendOutlined className={styles.icon} />
					<Text className={styles.text}>Telegram</Text>
				</a>
				<a
					href={"tel:+79254102724"}
					className={styles.link}
				>
					<PhoneOutlined
						rotate={90}
						className={styles.icon}
					/>
					<Text className={styles.text}>Телефон</Text>
				</a>
				<a
					href={"mailto:fallen.luc.private@meridiansteam.com"}
					className={styles.link}
				>
					<MailOutlined className={styles.icon} />
					<Text className={styles.text}>Почта</Text>
				</a>

				<a
					href={"https://github.com/FallenLuc"}
					className={styles.link}
				>
					<GithubOutlined className={styles.icon} />
					<Text className={styles.text}>Портфолио</Text>
				</a>
			</Flex>
		</Flex>
	)
})
