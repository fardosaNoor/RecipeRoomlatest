// DOM element references
const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeLinks = document.querySelectorAll('.recipe-link');
const addRecipeForm = document.getElementById('addRecipeForm');
const addRecipeSection = document.querySelector('.add-recipe-section');
const addRecipeLink = document.getElementById('addRecipeLink');
const aboutButton = document.getElementById('aboutButton'); // Add a reference to your About button

// File input references for recipe image
const recipeImageUrl = document.getElementById('recipeImageUrl');
const recipeImageFile = document.getElementById('recipeImageFile');
const dragDropArea = document.getElementById('dragDropArea');
const recipePreview = document.getElementById('recipePreview');

// File input reference for recipe PDF
const recipeIngredientsFile = document.getElementById('recipeIngredientsFile');

// Modal references
const recipeModal = document.getElementById('recipeModal');
const modalRecipeName = document.getElementById('modalRecipeName');
const modalRecipeImage = document.getElementById('modalRecipeImage');
const modalRecipeCategory = document.getElementById('modalRecipeCategory');
const modalRecipeIngredients = document.getElementById('modalRecipeIngredients');
const modalRecipeDescription = document.getElementById('modalRecipeDescription');
const modalRecipeCookingProcess = document.getElementById('modalRecipeCookingProcess');
const closeButton = document.querySelector('.close-button');
const addToLibraryButton = document.getElementById('addToLibraryButton');

// Recipe Class
class Recipe {
    constructor(name, imageUrl, ingredients, category, description, cookingProcess) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.category = category;
        this.description = description;
        this.cookingProcess = cookingProcess;
    }
}

// UI Class
class UI {
    static displayRecipes(recipes) {
        console.log('Displaying recipes...');
        recipeGrid.innerHTML = '';
        recipes.forEach((recipe) => UI.addRecipeToList(recipe));
    }

    static addRecipeToList(recipe) {
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
                <div class="recipe-cooking-process">${recipe.cookingProcess}</div>
            </div>
            <div class="recipe-actions">
                <button class="view-recipe">View Recipe</button>
            </div>
        `;
        recipeGrid.appendChild(recipeDiv);
    }

    static deleteRecipe(el) {
        if (el.classList.contains('delete-recipe')) {
            const recipeName = el.parentElement.previousElementSibling.querySelector('.recipe-name').textContent;
            el.parentElement.parentElement.remove();
            Store.removeRecipe(recipeName);
            UI.showAlert('Recipe Removed', 'success');
        }
    }

    static clearFields() {
        document.querySelector('#recipeName').value = '';
        document.querySelector('#recipeImageUrl').value = '';
        document.querySelector('#recipeIngredients').value = '';
        document.querySelector('#recipeCategory').value = '';
        document.querySelector('#recipeDescription').value = '';
        document.querySelector('#recipeCookingProcess').value = '';
    }

    static showAlert(message, className) {
        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        document.body.appendChild(alert);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Store Class
class Store {
    static getRecipes() {
        let recipes = localStorage.getItem('recipes');
        return recipes ? JSON.parse(recipes) : [];
    }

    static addRecipe(recipe) {
        const recipes = Store.getRecipes();
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    
        static saveAllRecipes(recipes) {
            localStorage.setItem('recipes', JSON.stringify(recipes));
        }
    
        static removeRecipe(name) {
            const recipes = Store.getLibraryRecipes();
            const filteredRecipes = recipes.filter(recipe => recipe.name !== name);
            localStorage.setItem('recipes', JSON.stringify(filteredRecipes));
        }
    
    

    static getLibraryRecipes() {
        let libraryRecipes = localStorage.getItem('libraryRecipes');
        return libraryRecipes ? JSON.parse(libraryRecipes) : [];
    }

    static addLibraryRecipe(recipe) {
        const libraryRecipes = Store.getLibraryRecipes();
        libraryRecipes.push(recipe);
        localStorage.setItem('libraryRecipes', JSON.stringify(libraryRecipes));
    }


}

// Track if PDF ingredients are provided
let pdfIngredientsProvided = false;

// Display sample recipes or from local storage
document.addEventListener('DOMContentLoaded', () => {
    UI.displayRecipes(sampleRecipes);
    displayRecipesByCategory("Explore", sampleRecipes); // Default category

    // Event listeners for category links
    document.querySelectorAll('.recipe-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.textContent;
            displayRecipesByCategory(category, sampleRecipes);
            document.querySelector('.recipe-links .active')?.classList.remove('active');
            e.target.classList.add('active');
        });
    });

    // Event listener for search button
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Event listener for add recipe form
    addRecipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#recipeName').value;
        const imageUrl = document.querySelector('#recipeImageUrl').value;
        const ingredients = document.querySelector('#recipeIngredients').value;
        const category = document.querySelector('#recipeCategory').value;
        const description = document.querySelector('#recipeDescription').value;
        const cookingProcess = document.querySelector('#recipeCookingProcess').value;

        console.log('Recipe data:', { name, imageUrl, ingredients, category, description, cookingProcess });


        // Ensure ingredients have been updated if PDF was uploaded
        if (pdfIngredientsProvided) {
            pdfIngredientsProvided = false;
        }

        if (name === '' || category === '') {
            UI.showAlert('Please fill in all fields', 'danger');
        } else if (ingredients === '' && !recipeIngredientsFile) {
            UI.showAlert('Please fill in all fields', 'danger');
        } else {
            const recipe = new Recipe(name, imageUrl, ingredients, category, description, cookingProcess);
            UI.addRecipeToList(recipe);
            Store.addRecipe(recipe);
            displayRecipesByCategory(category,sampleRecipes);
            UI.showAlert('Recipe Added', 'success');
            UI.clearFields();
            document.querySelector('#recipeIngredientsFile').value = ''; // Clear the file input
        }
    });

    // After adding a recipe
console.log('Stored recipes:', Store.getRecipes());


    // Event listener for recipe grid
recipeGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-recipe')) {
        const recipeName = e.target.parentElement.previousElementSibling.querySelector('.recipe-name').textContent;
        
        // Check if the recipe is from sampleRecipes or local storage
        let recipe = sampleRecipes.find(r => r.name === recipeName);
        
        if (!recipe) {
            // Recipe not found in sampleRecipes, check local storage
            const localRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
            recipe = localRecipes.find(r => r.name === recipeName);
        }

        // Show the recipe modal if the recipe is found
        if (recipe) {
            showRecipeModal(recipe);
        } else {
            console.error('Recipe not found:', recipeName);
        }
    }
    
    // Handle deletion of recipes
    if (e.target.classList.contains('delete-recipe')) {
        UI.deleteRecipe(e.target);
    }
});


    // Event listener for add recipe link
    addRecipeLink.addEventListener('click', (event) => showAddRecipeForm(event));

    // Event listeners for drag and drop
    dragDropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragDropArea.classList.add('drag-over');
    });

    dragDropArea.addEventListener('dragleave', () => {
        dragDropArea.classList.remove('drag-over');
    });

    dragDropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dragDropArea.classList.remove('drag-over');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                recipeImageUrl.value = e.target.result;
                recipePreview.src = e.target.result;
                recipePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle URL input for recipe image preview
    recipeImageUrl.addEventListener('input', () => {
        const url = recipeImageUrl.value;
        if (url) {
            recipePreview.src = url;
            recipePreview.style.display = 'block';
        } else {
            recipePreview.style.display = 'none';
        }
    });

    // Handle file upload
    recipeImageFile.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                recipeImageUrl.value = e.target.result;
                recipePreview.src = e.target.result;
                recipePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });


        async function handlePdfUpload(e) {
            const file = e.target.files[0];
            if (file) {
                console.log('File selected:', file);
                console.log('PDF.js version:', pdfjsLib.version);

                try {
                    const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
                    let text = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const content = await page.getTextContent();
                        content.items.forEach(item => {
                            text += item.str + ' ';
                        });
                    }
                    document.querySelector('#recipeIngredients').value = text.trim();
                    pdfIngredientsProvided = true; // Indicate that PDF was used to provide ingredients
                } catch (error) {
                    console.error('Error extracting text from PDF:', error);
                }
            }
        }


        // Add event listener to recipeIngredientsFile if it exists
    if (recipeIngredientsFile) {
        recipeIngredientsFile.addEventListener('change', handlePdfUpload);
    } else {
        console.error('PDF file input not found');
    }
});

// Function to display recipes based on selected category
function displayRecipesByCategory(category) {
    console.log('Displaying recipes for category:', category);
    recipeGrid.innerHTML = '';

    let recipes;
    if (category === 'Explore') {
        // Show 4 random recipes from all recipes
        recipes = Store.getRecipes().concat(sampleRecipes).sort(() => 0.5 - Math.random()).slice(0, 4);
    } else {
        // Show recipes of each category from local storage
        recipes = Store.getRecipes().concat(sampleRecipes).filter(recipe => recipe.category === category);
    }

    console.log('Recipes to display:', recipes);
    recipes.forEach(recipe => UI.addRecipeToList(recipe));
}


// Search function
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipes = Store.getRecipes().concat(sampleRecipes);
    recipeGrid.innerHTML = '';
    const results = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));
    if (results.length > 0) {
        results.forEach(recipe => UI.addRecipeToList(recipe));
    } else {
        recipeGrid.innerHTML = '<p>No recipes found.</p>';
    }
}

// Show or hide the add recipe form
function showAddRecipeForm(event) {
    event.preventDefault();
    addRecipeSection.scrollIntoView({ behavior: 'smooth' });
    if (addRecipeSection.classList.contains('hidden')) {
        addRecipeSection.classList.remove('hidden');
        addRecipeSection.classList.add('open');
        addRecipeSection.style.maxHeight = addRecipeSection.scrollHeight + "px";
        window.scrollTo({ top: addRecipeSection.offsetTop, behavior: 'smooth' });
    } else {
        addRecipeSection.classList.remove('open');
        addRecipeSection.classList.add('hidden');
        addRecipeSection.style.maxHeight = null;
    }
}

// Function to display one random recipe from each category
function displayRandomRecipeFromEachCategory() {
    const recipes = Store.getRecipes().concat(sampleRecipes);
    const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks'];
    const randomRecipes = [];

    categories.forEach(category => {
        const categoryRecipes = recipes.filter(recipe => recipe.category === category);
        if (categoryRecipes.length > 0) {
            const randomRecipe = categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
            randomRecipes.push(randomRecipe);
        }
    });

    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';
    randomRecipes.forEach(recipe => {
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.innerHTML = `
        <div class="recipe">
            <div class="recipe-image">
                <img src="${recipe.imageUrl}" alt="${recipe.name}">
            </div>
            <div class="recipe-details">
                <div class="recipe-category">${recipe.category}</div>
                <div class="recipe-name">${recipe.name}</div>
                <div class="recipe-ingredients">${recipe.ingredients}</div>
                <div class="recipe-description">${recipe.description}</div>
                <div class="recipe-cooking-process">${recipe.cookingProcess}</div>
            </div>
            <div class="recipe-actions">
                <button class="view-recipe">View Recipe</button>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealElement);
    });
    recipeGrid.innerHTML = '';
    randomRecipes.forEach(recipe => UI.addRecipeToList(recipe));
}

if (aboutButton) {
    aboutButton.addEventListener('click', displayRandomRecipeFromEachCategory);
} else {
    console.error('About button not found');
}


// Function to handle view button clicks
function handleViewButtonClick(recipeName, isSample) {
    let recipe;

    if (isSample) {
        // Find the sample recipe by name
        recipe = sampleRecipes.find(r => r.name === recipeName);
    } else {
        // Fetch stored recipes from local storage
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipe = storedRecipes.find(r => r.name === recipeName);
    }

    if (recipe) {
        showRecipeModal(recipe);
    } else {
        console.error('Recipe not found');
        // Optionally show an error message or handle the case where the recipe isn't found
    }
}

// Show recipe modal with details
function showRecipeModal(recipe) {
    modalRecipeName.textContent = recipe.name;
    modalRecipeImage.src = recipe.imageUrl;
    modalRecipeCategory.textContent = `Category: ${recipe.category}`;
    modalRecipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;
    modalRecipeDescription.textContent = `Description: ${recipe.description}`;
    modalRecipeCookingProcess.textContent = `Cooking Process: ${recipe.cookingProcess}`;
    recipeModal.style.display = 'block';

    addToLibraryButton.onclick = () => {
        Store.addLibraryRecipe(recipe);
        UI.showAlert('Recipe added to your library!', 'success');
        recipeModal.style.display = 'none';
    };
}

// Close modal when the user clicks on <span> (x)
closeButton.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

// Close modal when the user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Local storage size
function getLocalStorageSize() {
    let totalSize = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const value = localStorage.getItem(key);
            totalSize += key.length + value.length;
        }
    }
    return totalSize;
}

const sizeInBytes = getLocalStorageSize();
console.log(`Local Storage Size: ${sizeInBytes} bytes`);

// Check storage limit
function checkLocalStorageLimit() {
    const testKey = 'test';
    const testValue = 'a'.repeat(1024 * 1024);

    try {
        localStorage.setItem(testKey, testValue);
        console.log('Local Storage has enough space.');
        localStorage.removeItem(testKey);
    } catch (e) {
        console.error('Local Storage is full or the quota has been exceeded.');
    }
}

checkLocalStorageLimit();

const localStorageLimit = 5 * 1024 * 1024;
const remainingSpace = localStorageLimit - sizeInBytes;
console.log(`Estimated Remaining Space: ${remainingSpace} bytes`);

// Error handling for local storage
try {
    localStorage.setItem('test', 'test');
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        console.error('Local storage limit reached.');
    } else {
        console.error('Error using local storage:', e);
    }
}

// Event listener for login link
const loginLink = document.getElementById('loginLink');
loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (loginLink.textContent === 'Login') {
        loginLink.textContent = 'Your Library';
    } else {
        window.location.href = 'library.html';
    }
});

function getRecipesFromLocalStorage() {
    const recipes = Store.getRecipes();
    console.log('Recipes from local storage:', recipes);
    return recipes;
}


