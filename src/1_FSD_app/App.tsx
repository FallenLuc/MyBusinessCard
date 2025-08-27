import { MainPage } from "@pages/MainPage"
import { ConfigProvider } from "antd"
import { memo, useMemo } from "react"

const App = memo(() => {
	const theme = useMemo(
		() => ({
			token: {
				colorPrimary: "#a90202"
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
