import React from "react";
import styles from './Card.module.scss'

let Card = ({ id, onFavorite, title, imageUrl, price, onPlus, favorited = false}) => {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price})
    setIsFavorite(!isFavorite)
  }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img width={20} height={20} src={isFavorite ? "/img/liked.png" : '/img/unliked.png'}></img>
            </div>
            <img width={133} height={112} src={app.map(imageUrl)}></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>{price}</b>
              </div>
              <button className="button" onClick={onClickPlus}>
                <img width={11} height={11} src={isAdded ? "/img/galochka.png" : ''}></img>
              </button>
            </div>
          </div>
    )
}

export default Card;