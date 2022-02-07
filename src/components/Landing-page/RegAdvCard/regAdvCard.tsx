import css from './landing-page.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface RegAdvCard {
  selector: string,
  index: string,
  imgSrc?: string,
  title?: string,
  content?: string
}

export const RegAdvCard = ({children, selector, index, imgSrc, title}: RegAdvCard): JSX.Element => {
  return (
    <li className={`${css.card__Container} ${selector}`} id={`${selector}${index}`}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt="advCard"
        />
        <CardContent>
          <Typography className={`${css.card__h5} ${selector}`} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className={`${css.card__content} ${selector}`} variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          GIT
        </Button>
      </CardActions>
    </Card>
    </li>
  )
};

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}