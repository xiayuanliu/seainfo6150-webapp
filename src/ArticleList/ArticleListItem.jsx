import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./AritcleImage"

const ArticleListItem = props => {
  return (
      <div className={styles.container}>
        <div className = {styles.image}>
          <ArticleImage url = {props.article.image} title = {props.article.title} />
        </div>
        <div  className={styles.content}>
          <h3 className={styles.title}>{props.article.title}</h3>
          <p className={styles.text}>{props.article.shortText}</p>
          <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
        </div>
        <div className={styles.button}>
          <SlugButton slug={props.article.slug} buttonText={props.article.author} />
        </div>
        <div className={styles.clear}></div>

      </div>
  );
};

export default ArticleListItem;
