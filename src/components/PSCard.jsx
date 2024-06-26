import { Checkbox } from "@mui/material";
import { Card, CardContent, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const PSCard = ({ text, handleCheckChange }) => {
	return (
		<Card sx={{ width: "100%", borderRadius: 6.2, boxShadow: 3 }}>
			<CardContent sx={{ display: "flex", alignItems: "center" }}>
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: "primary.main",
								"&.Mui-checked": {
									color: "primary.main",
								},
								borderRadius: "50%",
							}}
							onChange={() => {
								handleCheckChange(text);
							}}
						/>
					}
					label={
						<Typography variant="body1" sx={{ mt: 1, color: "#8e8e8e" }}>
							{text}
						</Typography>
					}
					sx={{ flex: 1, margin: 0 }}
				/>
			</CardContent>
		</Card>
	);
};

export default PSCard;
