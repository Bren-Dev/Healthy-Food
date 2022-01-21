import React from "react";
import { ContentRecipes, DivRecipe1, DivRecipe2, RecipeItem, DivRecipeButton } from "./styles";

import food1 from "../../assets/comida_1.svg";
import food2 from "../../assets/comida_2.svg";
import food3 from "../../assets/comida_3.svg";
import food4 from "../../assets/comida_4.svg";

function Recipes() {
  return (
    <ContentRecipes>
      <DivRecipe1>
        <h1>Our Best Recipes</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          <br />
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </DivRecipe1>
      <DivRecipe2>
        <RecipeItem>
          <div>
            <img src={food1} id="" alt="www.google.com" />
          </div>
          <DivRecipeButton>
            <p>
              Broccoli Salad
              <br /> with Bacon
            </p>
            <button>
              <a href="www.google.com">See Recipe</a>
            </button>
          </DivRecipeButton>
        </RecipeItem>
        <RecipeItem>
          <div>
            <img src={food2} id="" alt="www.google.com" />
          </div>
          <DivRecipeButton>
            <p>
            Classic Beef
              <br /> Burgers
            </p>
            <button>
              <a href="www.google.com">See Recipe</a>
            </button>
          </DivRecipeButton>
        </RecipeItem>
        <RecipeItem>
          <div>
            <img src={food3} id="" alt="www.google.com" />
          </div>
          <DivRecipeButton>
            <p>
              Classic Potato
              <br /> Salad
            </p>
            <button>
              <a href="www.google.com" >See Recipe</a>
            </button>
          </DivRecipeButton>
        </RecipeItem>

        <RecipeItem>
          <div>
            <img src={food4} id="" alt="www.google.com" />
          </div>
          <DivRecipeButton>
            <p>
              Cherry Cobbler
              <br /> on the Grill
            </p>
            <button>
              <a href="www.google.com">See Recipe</a>
            </button>
          </DivRecipeButton>
        </RecipeItem>

      </DivRecipe2>
    </ContentRecipes>
  );
}

export default Recipes;
