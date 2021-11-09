/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';

import { useTheme } from '@mui/system';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  Typography,
  Container
} from "@mui/material";

import { ExpandMoreTwoTone } from "@mui/icons-material";


const TabPanelView = (props) => {
	const { title, dataList} = props;
	const theme = useTheme();
  const [expanded, setExpanded] = React.useState(-1);

  const handleAccordionChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Container>
			{dataList.map((each, index)=>{
				// console.log(index);
				return (
					<Accordion expanded={expanded === index} onChange={handleAccordionChange(index)} key={"experience"+title+index}>
						<AccordionSummary
						expandIcon={<ExpandMoreTwoTone color='warning'/>}
						aria-controls="panel1a-content"
						id="panel1a-header"
						>
							<Container align='left'>
								<Typography variant='h6' color='primary'>{each.title}</Typography>
								{expanded !== index &&
								<>
									<Typography variant='subtitle1' >{each.year}</Typography>
									<Typography variant='subtitle2' >{each.from}</Typography>
								</>
								}
							</Container>

						</AccordionSummary>
						<AccordionDetails>
							<Grid container spacing={2} style={{ paddingLeft: theme.spacing(3), paddingRight: theme.spacing(2)}} align='left'>
								<Grid item xs={12} md={9}>
									<Typography >
										<b>{each.from}</b>
									</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Typography >
											<i>{each.year}</i>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography >
											{each.description}
									</Typography>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</Container>
	)
}

export default TabPanelView;
