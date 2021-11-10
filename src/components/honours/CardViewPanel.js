import { Container, Grid } from '@mui/material'
import React from 'react'
import CustomCard from './CustomCard';

const CardViewPanel = (props) => {
	const { dataList } = props;
	return (
		<Container>
			<Grid container spacing={2}>
				{
					dataList.map(({name, issuedBy, issueDate, expDate, credId, credUrl}, index) =>
					<Grid item xs={12} sm={6} md={4} key={"card-honour-cert"+index}>
						<CustomCard name={name} issuedBy={issuedBy} issueDate={issueDate} expDate={expDate} credId={credId} credUrl={credUrl} />
					</Grid>
					)
				}
			</Grid>
		</Container>
	)
}

export default CardViewPanel
