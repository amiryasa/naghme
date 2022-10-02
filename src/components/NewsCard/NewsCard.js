import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useNavigate } from 'react-router-dom';


import './NewsCard.css';

const NewsCard = (props) => {

  const navigator = useNavigate();

  return (
    <Card sx={{ display: 'flex' }} className="newsCardCard" onClick={() => navigator('/newsDetail')}>
        <CardMedia
        component="img"
        image={props.image}
        className="newsCardMedia"
        />  
        <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className="newsCardTitle">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" className="newsCardDescription">
          {props.description}
          </Typography>
          <Typography component="div" variant="h7" className="newsCardDate">
            {props.date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export { NewsCard };
