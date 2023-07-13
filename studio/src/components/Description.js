import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
  const authorName = "Nicole Holley";
  const authorLink =
    "https://www.allrecipes.com/recipe/214947/perfect-summer-fruit-salad/";
  const authorPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgxQgSy8P_kBlw37Het-QnPRgGK7nJTDyzA&usqp=CAU";
  return (
    <div className={styles.recipesAuthorBlock}>
      <h2>{authorName}</h2>
      <img
        src={authorPhoto}
        alt="Photo of Author"
        className={styles.imageUpdates}
      />
      <a href={authorLink}>Recipe Blog</a>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Fruit Salad</h1>
          <p>A Year Round Delicious Fruit Dish</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
