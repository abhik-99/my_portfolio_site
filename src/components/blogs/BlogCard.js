import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BlogCard(props) {
  const { title, link, imgLink } = props
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardActionArea href={link} target="_blank" rel="no-referrer">
        <CardMedia
          component="img"
          alt="Medium"
          height="140"
          image={imgLink}
        />
        <CardContent align="center">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
