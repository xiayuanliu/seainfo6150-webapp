import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <html>
      <ul className={styles.bigBack}>
        {props.articles.map(article => (
          <li key={article.slug} className={styles.smallBack}>
            <ArticleListItem article={article} />
          </li>
        ))}
      </ul>
    </html>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
