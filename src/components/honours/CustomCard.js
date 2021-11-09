import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function CustomCard(props) {
  const { name, issuedBy, issueDate, expDate, credId, credUrl } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={credUrl} target="_blank" rel="no-referrer">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
					<Typography variant="subtitle" m={2}>
						Issued By: {issuedBy}
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<Typography variant="body1">
							{issueDate}
						</Typography>
						<Typography variant="body1"> - </Typography>
						<Typography variant="body1">
							{expDate}
						</Typography>
					</Box>
          <Typography variant="body2" color="text.secondary" flexWrap>
            Credential ID: {credId}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
