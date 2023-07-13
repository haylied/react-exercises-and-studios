import React from "react";
import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <img
      src="https://www.allrecipes.com/thmb/hz--Dm4jMRFfQVZynHfGG27fNJs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2289556-0981629410f0446d9bec11f0a9ece43c.jpg"
      alt="Fruit Salad"
      className={styles.imageUpdates}
    />
  );
}
