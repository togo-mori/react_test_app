import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useRef } from "react"
import ReactToPrint from "react-to-print"
import ComponentToPrint from "../ComponentToPrint"
import { Preview } from "../Preview"

export const Profile = () => {
	const ref = useRef(null)

	return (
		<Card>
			<CardMedia />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
          テストだよ〜
				</Typography>
			</CardContent>
			<CardActions>
				<Preview />
				<ReactToPrint
					trigger={() => (
						<Button size="small" color="primary">
              印刷
						</Button>
					)}
					content={() => ref.current}
				/>
				<div style={{ display: "none" }}>
					<ComponentToPrint ref={ref} />
				</div>
			</CardActions>
		</Card>
	)
}
