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
		console.log(panel, event, newExpanded)
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Grid container>
			<Grid item xs={12} md={4} lg={2} align="center">
				<Paper css={css`background: ${theme.palette.primary.main}; color: ${theme.palette.primary.contrastText}; height: 100%; display: flex; align-items: center; justify-content: center`}>
					<Typography variant="h6">{title}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={8} lg={10}>
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
									<Typography variant='h6' color='primary'>{each.name}</Typography>
									{expanded !== index &&
									<>
										<Typography variant='subtitle1' >{each.position}</Typography>
										<Typography variant='subtitle2' >{each.term}</Typography>
									</>
									}
								</Container>

							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={2} style={{ paddingLeft: theme.spacing(3), paddingRight: theme.spacing(2)}} align='left'>
									<Grid item xs={12} md={5}>
										<Typography >
											<b>{each.position}</b>
										</Typography>
									</Grid>
									<Grid item xs={12} md={7}>
										<Typography >
												<i>{each.term}</i>
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography >
												{each.startDate} - {each.endDate}
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
			</Grid>
		</Grid>
	)
}

export default TabPanelView;
