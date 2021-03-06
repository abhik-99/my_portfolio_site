/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useTheme } from '@mui/system';
import {
	Typography,
	List,
	ListItem,
	ListItemText,
	Paper,
	Container,
	ListItemIcon
} from '@mui/material';


import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const TabPanelView = (props) => {
	const { title, dataList } = props;
	const theme = useTheme();
	return (
		<Paper css={css`
		border-radius: ${theme.shape.borderRadius};
		padding-top: ${theme.spacing(1)}
		`}>
			<Container>
			<Typography variant="h4">{title}</Typography>

			<List>
				{
					dataList.map((each, index) =>

					<ListItem key={'research-'+index} disablePadding>
						<ListItemIcon>
							<SendOutlinedIcon fontSize="small" color="warning" />
						</ListItemIcon>
						<ListItemText css={css`
						word-wrap: break-word;
						`}>
							{
								each.patent &&
								<b>(Patent) </b>
							}
							{
								each.copyright &&
								<b>(Copyright) </b>
							}
							{
								(each.patent || each.copyright) &&
								`Registration Number: ${each.regNumber} | `
							}
							{each.citation}
						</ListItemText>
					</ListItem>
					)
				}
				{
					dataList.length === 0 &&
					<ListItem key={`research-none-${title}`} disablePadding>
						<ListItemText>
							No current works under this category. Check back later :)
						</ListItemText>
					</ListItem>
				}

			</List>
			</Container>
		</Paper>
	)
}

export default TabPanelView
