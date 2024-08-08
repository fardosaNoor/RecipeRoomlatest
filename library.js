
// DOM element references
const libraryGrid = document.getElementById('libraryGrid');
const editRecipeModal = document.getElementById('editRecipeModal');
const closeBtn = document.querySelector('.close-button');
const editRecipeForm = document.getElementById('editRecipeForm');
const editRecipeName = document.getElementById('editRecipeName');
const editRecipeImageUrl = document.getElementById('editRecipeImageUrl');
const editRecipeIngredients = document.getElementById('editRecipeIngredients');
const editRecipeDescription = document.getElementById('editRecipeDescription');
const editRecipeCookingProcess = document.getElementById('editRecipeCookingProcess');

let currentRecipeIndex;

// UI Class
class UI {
    static displayLibraryRecipes() {
        const libraryRecipes = Store.getLibraryRecipes();
        libraryGrid.innerHTML = '';
        libraryRecipes.forEach((recipe, index) => UI.addRecipeToLibraryList(recipe, index));
    }

    static addRecipeToLibraryList(recipe, index) {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.imageUrl}" alt="${recipe.name}">
            </div>
            <div class="recipe-details">
                <div class="recipe-category">${recipe.category}</div>
                <div class="recipe-name">${recipe.name}</div>
                <div class="recipe-ingredients">${recipe.ingredients}</div>
                <div class="recipe-description">${recipe.description}</div>
                <div class="recipe-cookingProcess">${recipe.cookingProcess}</div>
            </div>
            <div class="recipe-actions">
                <button class="edit-recipe" data-index="${index}">Edit</button>
                <button class="delete-recipe" data-index="${index}">Delete</button>
            </div>
        `;
        libraryGrid.appendChild(recipeDiv);
    }

    static fillEditForm(recipe) {
        editRecipeName.value = recipe.name;
        editRecipeImageUrl.value = recipe.imageUrl;
        editRecipeIngredients.value = recipe.ingredients;
        editRecipeDescription.value = recipe.description;
        editRecipeCookingProcess.value = recipe.cookingProcess;
    }
}

// Store Class
class Store {
    static getLibraryRecipes() {
        let libraryRecipes = localStorage.getItem('libraryRecipes');
        return libraryRecipes ? JSON.parse(libraryRecipes) : [];
    }

    static updateRecipe(index, updatedRecipe) {
        const recipes = Store.getLibraryRecipes();
        recipes[index] = updatedRecipe;
        localStorage.setItem('libraryRecipes', JSON.stringify(recipes));
    }

    static deleteRecipe(index) {
        const recipes = Store.getLibraryRecipes();
        recipes.splice(index, 1);
        localStorage.setItem('libraryRecipes', JSON.stringify(recipes));
    }
}

// Display library recipes on DOM load
document.addEventListener('DOMContentLoaded', UI.displayLibraryRecipes);

// Close modal
closeBtn.addEventListener('click', () => {
    editRecipeModal.style.display = 'none';
});

// Edit and Delete button functionality
libraryGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-recipe')) {
        currentRecipeIndex = e.target.getAttribute('data-index');
        const recipes = Store.getLibraryRecipes();
        const recipeToEdit = recipes[currentRecipeIndex];
        UI.fillEditForm(recipeToEdit);
        editRecipeModal.style.display = 'block';
    } else if (e.target.classList.contains('delete-recipe')) {
        const index = e.target.getAttribute('data-index');
        Store.deleteRecipe(index);
        UI.displayLibraryRecipes();
    }
});

// Handle Edit Recipe form submission
editRecipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedRecipe = {
        name: editRecipeName.value,
        imageUrl: editRecipeImageUrl.value,
        ingredients: editRecipeIngredients.value,
        description: editRecipeDescription.value,
        cookingProcess: editRecipeCookingProcess.value,
        category: Store.getLibraryRecipes()[currentRecipeIndex].category // Keep the original category
    };
    Store.updateRecipe(currentRecipeIndex, updatedRecipe);
    editRecipeModal.style.display = 'none';
    UI.displayLibraryRecipes();
});