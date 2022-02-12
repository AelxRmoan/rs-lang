import css from './regAdvCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface RegAdvCard {
  selector: string,
  imgSrc: string,
  title?: string,
  content?: string
}

export const RegAdvCard = ({selector, imgSrc, title, content}: RegAdvCard): JSX.Element => {
  return (
    <li className={`${css.card__Container} ${selector}`} id={title}>
      <Card className={`${css.card}`}>
      <CardActionArea className={`${css.card__actionArea}`}>
        <CardMedia
          component="img"
          image={imgSrc}
          alt="advCard"
        />
        <CardContent className={`${css.card__contentCon}`}>
          <Typography className={`${css.card__h5}`} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className={`${css.card__content}`} variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={`${css.card__linkCon}`}>
      </CardActions>
    </Card>
    </li>
  )
};
