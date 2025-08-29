import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Anchor } from "antd"
import type { AnchorLinkItemProps } from "antd/lib/anchor/Anchor"
import { useMemo } from "react"
import { menuItems } from "../../constants/menuItems.constant"
import styles from "./Menu.module.scss"

export const Menu = TypedMemo(() => {
	const items: AnchorLinkItemProps[] = useMemo(() => Object.values(menuItems), [])

	return (
		<Anchor
			bounds={100}
			targetOffset={50}
			className={styles.Menu}
			direction="horizontal"
			items={items}
			replace={true}
		/>
	)
})
