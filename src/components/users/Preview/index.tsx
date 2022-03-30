import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import React, { useState } from "react"
import { useRef } from "react"
import ReactToPrint from "react-to-print"
import ComponentToPrint from "../ComponentToPrint"

export const Preview = () => {
	const ref = useRef(null)
	const [open, setOpen] = useState<boolean>(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Button size="small" color="primary" onClick={handleClickOpen}>
        プレビュー
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"testのプロフィールを印刷しますか？"}</DialogTitle>
				<DialogContent>
					<ComponentToPrint ref={ref} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
            キャンセル
					</Button>
					<ReactToPrint
						trigger={() => (
							<Button size="small" color="primary">
                印刷
							</Button>
						)}
						content={() => ref.current}
					/>
				</DialogActions>
			</Dialog>
		</div>
	)
}
