import React from "react"
import { Grid, Paper, TextField, Typography } from "@mui/material"
import { Component } from "react"

// export const ComponentToPrint = () => {
//   return (
//     <span>このコンポーネントを印刷するやで</span>
//   )
// }

interface Props {
  label: string
  value: string
}

const CustomTextField = (props: Props) => {
	return (
		<TextField
			label={props.label}
			value={props.value}
			fullWidth
			margin="normal"
			variant="outlined"
		/>
	)
}

class ComponentToPrint extends Component {
	render() {
		return (
			<Paper>
				<Typography variant="h5" component="h3">
          プロフィール
				</Typography>

				<Grid container spacing={3}>
					<Grid item xs={9}>
						<Grid container spacing={3}>
							<Grid item xs={10}>
								<CustomTextField label="氏名" value="test太郎" />
							</Grid>
							<Grid item xs={7}>
								<CustomTextField label="生年月日" value="2000年01月01日" />
							</Grid>
							<Grid item xs={3}>
								<CustomTextField label="性別" value="男性" />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<img src={`${process.env.PUBLIC_URL}/images/おはよ.png`} alt='test' style={{ width: "100%" }} />
					</Grid>
					<Grid item xs={9}>
						<CustomTextField label="住所" value="日本" />
					</Grid>
					<Grid item xs={3}>
						<CustomTextField label="電話番号" value="09099999999" />
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default ComponentToPrint
