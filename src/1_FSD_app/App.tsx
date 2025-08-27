import { ACCENT_COLOR } from "@constants/colors.constant"
import { MainPage } from "@pages/MainPage"
import { ConfigProvider } from "antd"
import { memo, useMemo } from "react"

const App = memo(() => {
	const theme = useMemo(
		() => ({
			token: {
				colorPrimary: ACCENT_COLOR
			}
		}),
		[]
	)

	return (
		<div className={"app"}>
			<ConfigProvider theme={theme}>
				<MainPage />
			</ConfigProvider>
		</div>
	)
})

export default App
