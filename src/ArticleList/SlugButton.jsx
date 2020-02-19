import React from "react";
import PropTypes from "prop-types";
import styles from "./SlugButton.module.css";

const SlugButton = props => {
  return (
    <div>
      <button
        className={styles.slugButton}
        onClick={() => alert(`${props.slug}`)}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

SlugButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};
export default SlugButton;
