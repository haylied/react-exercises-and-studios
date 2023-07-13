import logo from "./logo.svg";
import "./App.css";
import RecipeDecription from "./components/Description.js";
import RecipeIngredients from "./components/Ingredients";
import RecipePhoto from "./components/Photo.js";

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div>
          <RecipeDecription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
