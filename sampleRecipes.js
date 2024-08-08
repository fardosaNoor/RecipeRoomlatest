/*const sampleRecipes = [
    {
        id:1,
        name: "Classic Pancakes",
        imageUrl: "images/pancake.jpg",
        ingredients: "Flour, eggs, milk, sugar, butter",
        category: "Breakfast",
        description: "Fluffy classic pancakes perfect for a quick breakfast.",
        cookingProcess: `1. In a large bowl, sift together the flour, baking powder, salt, and sugar.
                          2. Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.
                          3. Heat a lightly oiled griddle or frying pan over medium-high heat.
                          4. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.
                          5. Brown on both sides and serve hot.`
    },
    {
        name: "Omelette",
        imageUrl: "images/omelette.jpg",
        ingredients: "Eggs, cheese, ham, bell pepper, onions",
        category: "Breakfast",
        description: "A delicious and versatile breakfast omelette.",
        cookingProcess: `1. Beat eggs in a bowl and season with salt and pepper.
                          2. Heat oil in a skillet over medium heat.
                          3. Add bell pepper and onions; sauté until softened.
                          4. Pour the beaten eggs into the skillet and cook until the edges start to set.
                          5. Add cheese and ham to one half of the omelette.
                          6. Fold the omelette in half and cook until the cheese is melted and the eggs are fully set.`
    },
    {
        name: "French Toast",
        imageUrl: "images/frenchtoast.jpg",
        ingredients: "Bread, eggs, milk, cinnamon, sugar, syrup",
        category: "Breakfast",
        description: "Classic French toast with a hint of cinnamon.",
        cookingProcess: `1. In a bowl, whisk together the eggs, milk, cinnamon, and sugar.
                          2. Dip each slice of bread into the egg mixture, ensuring both sides are coated.
                          3. Heat butter in a skillet over medium heat.
                          4. Cook the bread slices until golden brown on each side.
                          5. Serve with syrup and a sprinkle of powdered sugar.`
    },
    {
        name: "Breakfast Burrito",
        imageUrl: "images/burrito.jpg",
        ingredients: "Tortilla, eggs, sausage, cheese, salsa",
        category: "Breakfast",
        description: "A hearty breakfast burrito to start your day.",
        cookingProcess: `1. Cook sausage in a skillet until browned and fully cooked.
                          2. Scramble eggs in a separate skillet.
                          3. Place the sausage and scrambled eggs in the center of a tortilla.
                          4. Sprinkle cheese over the eggs and sausage.
                          5. Add a spoonful of salsa.
                          6. Roll up the tortilla, folding in the sides to create a burrito.
                          7. Optional: Grill the burrito in a skillet for a crispier texture.`
    },
    {
        name: "Smoothie Bowl",
        imageUrl: "images/smoothiebowl.jpg",
        ingredients: "Banana, berries, yogurt, granola, honey",
        category: "Breakfast",
        description: "A refreshing smoothie bowl topped with granola.",
        cookingProcess: `1. In a blender, combine the banana, berries, and yogurt; blend until smooth.
                          2. Pour the smoothie mixture into a bowl.
                          3. Top with granola, additional berries, and a drizzle of honey.
                          4. Serve immediately.`
    },
    {
        name: "Caesar Salad",
        imageUrl: "images/caesarsalad.jpg",
        ingredients: "Romaine lettuce, croutons, Caesar dressing, Parmesan cheese",
        category: "Lunch",
        description: "A classic Caesar salad with creamy dressing.",
        cookingProcess: `1. Chop the romaine lettuce and place it in a large bowl.
                          2. Add croutons and grated Parmesan cheese.
                          3. Drizzle Caesar dressing over the salad and toss to coat.
                          4. Serve immediately, optionally with grilled chicken or shrimp.`
    },
    {
        name: "Chicken Wrap",
        imageUrl: "images/chickenwrap.jpg",
        ingredients: "Tortilla, grilled chicken, lettuce, tomato, ranch dressing",
        category: "Lunch",
        description: "A tasty and healthy chicken wrap.",
        cookingProcess: `1. Grill the chicken until fully cooked and slice into strips.
                          2. Place the chicken strips, lettuce, and tomato slices in the center of a tortilla.
                          3. Drizzle ranch dressing over the ingredients.
                          4. Roll up the tortilla tightly to create a wrap.
                          5. Cut in half and serve.`
    },
    {
        name: "BLT Sandwich",
        imageUrl: "images/blt.jpg",
        ingredients: "Bread, bacon, lettuce, tomato, mayo",
        category: "Lunch",
        description: "A classic BLT sandwich with crispy bacon.",
        cookingProcess: `1. Cook the bacon until crispy and drain on paper towels.
                          2. Toast the bread slices.
                          3. Spread mayo on one side of each bread slice.
                          4. Layer bacon, lettuce, and tomato on one slice of bread.
                          5. Top with the other slice of bread, mayo side down.
                          6. Cut the sandwich in half and serve.`
    },
    {
        name: "Grilled Cheese",
        imageUrl: "images/grilledcheese.jpg",
        ingredients: "Bread, butter, cheddar cheese",
        category: "Lunch",
        description: "A simple and delicious grilled cheese sandwich.",
        cookingProcess: `1. Butter one side of each slice of bread.
                          2. Place a slice of cheese between the unbuttered sides of the bread.
                          3. Heat a skillet over medium heat.
                          4. Cook the sandwich until the bread is golden brown and the cheese is melted, flipping once.
                          5. Serve immediately.`
    },
    {
        name: "Quinoa Salad",
        imageUrl: "images/quinoasalad.jpg",
        ingredients: "Quinoa, cucumber, tomatoes, feta cheese, olives",
        category: "Lunch",
        description: "A refreshing quinoa salad with Mediterranean flavors.",
        cookingProcess: `1. Cook the quinoa according to the package instructions and let it cool.
                          2. In a large bowl, combine cooked quinoa, chopped cucumber, tomatoes, olives, and crumbled feta cheese.
                          3. Drizzle with olive oil and lemon juice.
                          4. Season with salt and pepper and toss to combine.
                          5. Serve chilled.`
    },
    {
        name: "Spaghetti Carbonara",
        imageUrl: "images/spaghetti.jpg",
        ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
        category: "Dinner",
        description: "A creamy and rich spaghetti carbonara.",
        cookingProcess: `1. Cook spaghetti according to package instructions. Reserve some pasta water and drain the rest.
                          2. In a skillet, cook pancetta until crispy.
                          3. In a bowl, whisk together eggs and grated Parmesan cheese.
                          4. Add the cooked spaghetti to the skillet with pancetta and toss to combine.
                          5. Remove from heat and quickly stir in the egg mixture, adding reserved pasta water as needed to create a creamy sauce.
                          6. Season with black pepper and serve immediately.`
    },
    {
        name: "Grilled Salmon",
        imageUrl: "images/salmon.jpg",
        ingredients: "Salmon fillets, lemon, dill, olive oil, garlic",
        category: "Dinner",
        description: "A flavorful grilled salmon with lemon and dill.",
        cookingProcess: `1. Marinate salmon fillets with lemon juice, chopped dill, olive oil, and minced garlic for at least 30 minutes.
                          2. Preheat the grill to medium-high heat.
                          3. Grill the salmon fillets skin-side down for about 6-8 minutes per side, or until fully cooked.
                          4. Serve with lemon wedges and a side of vegetables.`
    },
    {
        name: "Steak and Potatoes",
        imageUrl: "images/steak.jpg",
        ingredients: "Steak, potatoes, rosemary, butter, garlic",
        category: "Dinner",
        description: "A hearty steak dinner with roasted potatoes.",
        cookingProcess: `1. Season steak with salt, pepper, and chopped rosemary.
                          2. Heat a skillet over high heat and sear the steak on both sides until desired doneness.
                          3. In a separate pan, melt butter and sauté minced garlic.
                          4. Pour the garlic butter over the steak before serving.
                          5. Roast potatoes with olive oil, salt, and rosemary in a 400°F oven until crispy and golden brown.
                          6. Serve the steak with roasted potatoes.`
    },
    {
        name: "Chicken Alfredo",
        imageUrl: "images/alfredo.jpg",
        ingredients: "Pasta, chicken, Alfredo sauce, Parmesan cheese, parsley",
        category: "Dinner",
        description: "A creamy chicken Alfredo pasta.",
        cookingProcess: `1. Cook pasta according to package instructions and drain.
                          2. Cook chicken in a skillet until golden brown and fully cooked.
                          3. In a saucepan, heat Alfredo sauce and stir in cooked pasta and chicken.
                          4. Sprinkle with grated Parmesan cheese and chopped parsley before serving.`
    },
    {
        name: "Vegetable Stir-fry",
        imageUrl: "images/stirfry.jpg",
        ingredients: "Broccoli, bell peppers, carrots, soy sauce, tofu",
        category: "Dinner",
        description: "A healthy and colorful vegetable stir-fry.",
        cookingProcess: `1. Press and cube the tofu.
                          2. In a wok or large skillet, heat oil and stir-fry tofu until golden brown. Remove and set aside.
                          3. Add broccoli, bell peppers, and carrots to the wok and stir-fry until tender.
                          4. Return tofu to the wok and add soy sauce. Toss to combine and heat through.
                          5. Serve with rice or noodles.`
    },
    {
        name: "Chocolate Chip Cookies",
        imageUrl: "images/cookies.jpg",
        ingredients: "Flour, sugar, chocolate chips, butter, eggs",
        category: "Snacks",
        description: "Classic chocolate chip cookies.",
        cookingProcess: `1. Preheat oven to 350°F (175°C).
                          2. In a large bowl, cream together butter and sugar until light and fluffy.
                          3. Beat in eggs one at a time.
                          4. Stir in flour and chocolate chips until well combined.
                          5. Drop by rounded spoonfuls onto ungreased cookie sheets.
                          6. Bake for 10-12 minutes or until edges are golden brown.`
    },
    {
        name: "Fruit Salad",
        imageUrl: "images/fruitsalad.jpg",
        ingredients: "Mixed fruits, honey, mint",
        category: "Snacks",
        description: "A refreshing fruit salad.",
        cookingProcess: `1. Chop a variety of fresh fruits (e.g., apples, berries, grapes, pineapple, melon).
                          2. In a large bowl, toss the fruits with honey and chopped mint leaves.
                          3. Chill in the refrigerator for at least 30 minutes before serving.`
    },
    {
        name: "Popcorn",
        imageUrl: "images/popcorn.jpg",
        ingredients: "Corn kernels, butter, salt",
        category: "Snacks",
        description: "Simple and buttery popcorn.",
        cookingProcess: `1. Heat a large pot over medium-high heat and add a tablespoon of oil.
                          2. Add corn kernels and cover the pot with a lid.
                          3. Shake the pot occasionally to prevent burning.
                          4. When popping slows, remove from heat.
                          5. Drizzle with melted butter and season with salt.`
    },
    {
        name: "Energy Bars",
        imageUrl: "images/energybars.jpg",
        ingredients: "Oats, peanut butter, honey, nuts, dried fruits",
        category: "Snacks",
        description: "Homemade energy bars.",
        cookingProcess: `1. In a large bowl, combine oats, chopped nuts, and dried fruits.
                          2. In a saucepan, heat peanut butter and honey until melted and smooth.
                          3. Pour the peanut butter mixture over the oats and stir to combine.
                          4. Press the mixture into a baking dish and chill in the refrigerator until firm.
                          5. Cut into bars and serve.`
    },
    {
        name: "Yogurt Parfait",
        imageUrl: "images/parfait.jpg",
        ingredients: "Yogurt, granola, berries, honey",
        category: "Snacks",
        description: "A delicious yogurt parfait.",
        cookingProcess: `1. In a glass, layer yogurt, granola, and fresh berries.
                          2. Repeat the layers as desired.
                          3. Drizzle with honey and serve immediately.`
    },
    {
        name: "Mojito",
        imageUrl: "images/mojito.jpg",
        ingredients: "Rum, lime, mint, sugar, soda water",
        category: "Drinks",
        description: "A refreshing mojito cocktail.",
        cookingProcess: `1. Muddle mint leaves with sugar and lime juice in a glass.
                          2. Fill the glass with ice.
                          3. Add rum and top with soda water.
                          4. Stir gently and garnish with a lime wedge and mint sprig.`
    },
    {
        name: "Lemonade",
        imageUrl: "images/lemonade.jpg",
        ingredients: "Lemons, water, sugar, mint",
        category: "Drinks",
        description: "Classic lemonade.",
        cookingProcess: `1. Squeeze lemons to extract juice and pour into a pitcher.
                          2. Add water and sugar, stirring until the sugar is dissolved.
                          3. Add ice and mint leaves.
                          4. Serve chilled.`
    },
    {
        name: "Smoothie",
        imageUrl: "images/smoothie.jpg",
        ingredients: "Banana, strawberries, yogurt, honey, milk",
        category: "Drinks",
        description: "A delicious fruit smoothie.",
        cookingProcess: `1. In a blender, combine banana, strawberries, yogurt, honey, and milk.
                          2. Blend until smooth.
                          3. Pour into a glass and serve immediately.`
    },
    {
        name: "Iced Coffee",
        imageUrl: "images/icedcoffee.jpg",
        ingredients: "Coffee, milk, ice, sugar",
        category: "Drinks",
        description: "Refreshing iced coffee.",
        cookingProcess: `1. Brew coffee and let it cool to room temperature.
                          2. Fill a glass with ice cubes.
                          3. Pour the cooled coffee over the ice.
                          4. Add milk and sugar to taste.
                          5. Stir and serve.`
    },
    {
        name: "Hot Chocolate",
        imageUrl: "images/hotchocolate.jpg",
        ingredients: "Milk, cocoa powder, sugar, whipped cream",
        category: "Drinks",
        description: "Warm and cozy hot chocolate.",
        cookingProcess: `1. In a saucepan, heat milk over medium heat.
                          2. Whisk in cocoa powder and sugar until fully dissolved.
                          3. Continue to heat until the mixture is hot, but not boiling.
                          4. Pour into a mug and top with whipped cream.
                          5. Serve immediately.`
    }
];*/


const sampleRecipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        imageUrl: "images/pancake.jpg",
        ingredients: "Flour, eggs, milk, sugar, butter",
        category: "Breakfast",
        description: "Fluffy classic pancakes perfect for a quick breakfast.",
        cookingProcess: `1. In a large bowl, sift together the flour, baking powder, salt, and sugar.
                          2. Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.
                          3. Heat a lightly oiled griddle or frying pan over medium-high heat.
                          4. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.
                          5. Brown on both sides and serve hot.`
    },
    {
        id: 2,
        name: "Omelette",
        imageUrl: "images/omelette.jpg",
        ingredients: "Eggs, cheese, ham, bell pepper, onions",
        category: "Breakfast",
        description: "A delicious and versatile breakfast omelette.",
        cookingProcess: `1. Beat eggs in a bowl and season with salt and pepper.
                          2. Heat oil in a skillet over medium heat.
                          3. Add bell pepper and onions; sauté until softened.
                          4. Pour the beaten eggs into the skillet and cook until the edges start to set.
                          5. Add cheese and ham to one half of the omelette.
                          6. Fold the omelette in half and cook until the cheese is melted and the eggs are fully set.`
    },
    {
        id: 3,
        name: "French Toast",
        imageUrl: "images/frenchtoast.jpg",
        ingredients: "Bread, eggs, milk, cinnamon, sugar, syrup",
        category: "Breakfast",
        description: "Classic French toast with a hint of cinnamon.",
        cookingProcess: `1. In a bowl, whisk together the eggs, milk, cinnamon, and sugar.
                          2. Dip each slice of bread into the egg mixture, ensuring both sides are coated.
                          3. Heat butter in a skillet over medium heat.
                          4. Cook the bread slices until golden brown on each side.
                          5. Serve with syrup and a sprinkle of powdered sugar.`
    },
    {
        id: 4,
        name: "Breakfast Burrito",
        imageUrl: "images/burrito.jpg",
        ingredients: "Tortilla, eggs, sausage, cheese, salsa",
        category: "Breakfast",
        description: "A hearty breakfast burrito to start your day.",
        cookingProcess: `1. Cook sausage in a skillet until browned and fully cooked.
                          2. Scramble eggs in a separate skillet.
                          3. Place the sausage and scrambled eggs in the center of a tortilla.
                          4. Sprinkle cheese over the eggs and sausage.
                          5. Add a spoonful of salsa.
                          6. Roll up the tortilla, folding in the sides to create a burrito.
                          7. Optional: Grill the burrito in a skillet for a crispier texture.`
    },
    {
        id: 5,
        name: "Smoothie Bowl",
        imageUrl: "images/smoothiebowl.jpg",
        ingredients: "Banana, berries, yogurt, granola, honey",
        category: "Breakfast",
        description: "A refreshing smoothie bowl topped with granola.",
        cookingProcess: `1. In a blender, combine the banana, berries, and yogurt; blend until smooth.
                          2. Pour the smoothie mixture into a bowl.
                          3. Top with granola, additional berries, and a drizzle of honey.
                          4. Serve immediately.`
    },
    {
        id: 6,
        name: "Caesar Salad",
        imageUrl: "images/caesarsalad.jpg",
        ingredients: "Romaine lettuce, croutons, Caesar dressing, Parmesan cheese",
        category: "Lunch",
        description: "A classic Caesar salad with creamy dressing.",
        cookingProcess: `1. Chop the romaine lettuce and place it in a large bowl.
                          2. Add croutons and grated Parmesan cheese.
                          3. Drizzle Caesar dressing over the salad and toss to coat.
                          4. Serve immediately, optionally with grilled chicken or shrimp.`
    },
    {
        id: 7,
        name: "Chicken Wrap",
        imageUrl: "images/chickenwrap.jpg",
        ingredients: "Tortilla, grilled chicken, lettuce, tomato, ranch dressing",
        category: "Lunch",
        description: "A tasty and healthy chicken wrap.",
        cookingProcess: `1. Grill the chicken until fully cooked and slice into strips.
                          2. Place the chicken strips, lettuce, and tomato slices in the center of a tortilla.
                          3. Drizzle ranch dressing over the ingredients.
                          4. Roll up the tortilla tightly to create a wrap.
                          5. Cut in half and serve.`
    },
    {
        id: 8,
        name: "BLT Sandwich",
        imageUrl: "images/blt.jpg",
        ingredients: "Bread, bacon, lettuce, tomato, mayo",
        category: "Lunch",
        description: "A classic BLT sandwich with crispy bacon.",
        cookingProcess: `1. Cook the bacon until crispy and drain on paper towels.
                          2. Toast the bread slices.
                          3. Spread mayo on one side of each bread slice.
                          4. Layer bacon, lettuce, and tomato on one slice of bread.
                          5. Top with the other slice of bread, mayo side down.
                          6. Cut the sandwich in half and serve.`
    },
    {
        id: 9,
        name: "Grilled Cheese",
        imageUrl: "images/grilledcheese.jpg",
        ingredients: "Bread, butter, cheddar cheese",
        category: "Lunch",
        description: "A simple and delicious grilled cheese sandwich.",
        cookingProcess: `1. Butter one side of each slice of bread.
                          2. Place a slice of cheese between the unbuttered sides of the bread.
                          3. Heat a skillet over medium heat.
                          4. Cook the sandwich until the bread is golden brown and the cheese is melted, flipping once.
                          5. Serve immediately.`
    },
    {
        id: 10,
        name: "Quinoa Salad",
        imageUrl: "images/quinoasalad.jpg",
        ingredients: "Quinoa, cucumber, tomatoes, feta cheese, olives",
        category: "Lunch",
        description: "A refreshing quinoa salad with Mediterranean flavors.",
        cookingProcess: `1. Cook the quinoa according to the package instructions and let it cool.
                          2. In a large bowl, combine cooked quinoa, chopped cucumber, tomatoes, olives, and crumbled feta cheese.
                          3. Drizzle with olive oil and lemon juice.
                          4. Season with salt and pepper and toss to combine.
                          5. Serve chilled.`
    },
    {
        id: 11,
        name: "Spaghetti Carbonara",
        imageUrl: "images/spaghetti.jpg",
        ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
        category: "Dinner",
        description: "A creamy and rich spaghetti carbonara.",
        cookingProcess: `1. Cook spaghetti according to package instructions. Reserve some pasta water and drain the rest.
                          2. In a skillet, cook pancetta until crispy.
                          3. In a bowl, whisk together eggs and grated Parmesan cheese.
                          4. Add the cooked spaghetti to the skillet with pancetta and toss to combine.
                          5. Remove from heat and quickly stir in the egg mixture, adding reserved pasta water as needed to create a creamy sauce.
                          6. Season with black pepper and serve immediately.`
    },
    {
        id: 12,
        name: "Grilled Salmon",
        imageUrl: "images/salmon.jpg",
        ingredients: "Salmon fillets, lemon, dill, olive oil, garlic",
        category: "Dinner",
        description: "A flavorful grilled salmon with lemon and dill.",
        cookingProcess: `1. Marinate salmon fillets with lemon juice, chopped dill, olive oil, and minced garlic for at least 30 minutes.
                          2. Preheat the grill to medium-high heat.
                          3. Grill the salmon fillets skin-side down for about 6-8 minutes per side, or until fully cooked.
                          4. Serve with lemon wedges and a side of vegetables.`
    },
    {
        id: 13,
        name: "Steak and Potatoes",
        imageUrl: "images/steak.jpg",
        ingredients: "Steak, potatoes, rosemary, butter, garlic",
        category: "Dinner",
        description: "A hearty steak dinner with roasted potatoes.",
        cookingProcess: `1. Season steak with salt, pepper, and chopped rosemary.
                          2. Heat a skillet over high heat and sear the steak on both sides until desired doneness.
                          3. In a separate pan, melt butter and sauté minced garlic.
                          4. Pour the garlic butter over the steak before serving.
                          5. Roast potatoes with olive oil, salt, and rosemary in a 400°F oven until crispy and golden brown.
                          6. Serve the steak with roasted potatoes.`
    },
    {
        id: 14,
        name: "Chicken Alfredo",
        imageUrl: "images/alfredo.jpg",
        ingredients: "Chicken breasts, fettuccine, cream, Parmesan cheese, garlic",
        category: "Dinner",
        description: "A creamy and delicious chicken alfredo pasta.",
        cookingProcess: `1. Cook fettuccine according to package instructions.
                          2. In a skillet, cook chicken breasts until golden brown and fully cooked. Slice the chicken.
                          3. In the same skillet, add minced garlic and cook until fragrant.
                          4. Add cream and grated Parmesan cheese, stirring until the sauce thickens.
                          5. Add cooked fettuccine and sliced chicken to the skillet and toss to combine.
                          6. Serve immediately, garnished with additional Parmesan cheese.`
    },
    {
        id: 15,
        name: "Vegetable Stir-Fry",
        imageUrl: "images/stirfry.jpg",
        ingredients: "Broccoli, bell pepper, carrots, soy sauce, ginger, garlic",
        category: "Dinner",
        description: "A quick and easy vegetable stir-fry.",
        cookingProcess: `1. Heat oil in a large skillet or wok over medium-high heat.
                          2. Add minced garlic and ginger, and sauté until fragrant.
                          3. Add chopped vegetables and stir-fry until tender-crisp.
                          4. Add soy sauce and stir to coat the vegetables.
                          5. Serve over steamed rice or noodles.`
    },
    {
        id: 16,
        name: "Chocolate Chip Cookies",
        imageUrl: "images/cookies.jpg",
        ingredients: "Flour, sugar, butter, eggs, chocolate chips, baking soda, vanilla extract",
        category: "Snacks",
        description: "Classic homemade chocolate chip cookies.",
        cookingProcess: `1. Preheat the oven to 350°F (175°C).
                          2. In a bowl, cream together the butter and sugar.
                          3. Beat in the eggs and vanilla extract.
                          4. Combine the flour and baking soda, then gradually add to the butter mixture.
                          5. Stir in the chocolate chips.
                          6. Drop spoonfuls of dough onto ungreased cookie sheets.
                          7. Bake for 8-10 minutes, or until the edges are golden brown.
                          8. Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.`
    },
    {
        id: 17,
        name: "Fruit Smoothie",
        imageUrl: "images/smoothie.jpg",
        ingredients: "Banana, strawberries, yogurt, honey, milk",
        category: "Snacks",
        description: "A refreshing and healthy fruit smoothie.",
        cookingProcess: `1. Combine the banana, strawberries, yogurt, honey, and milk in a blender.
                          2. Blend until smooth.
                          3. Pour into glasses and serve immediately.`
    },
    {
        id: 18,
        name: "Granola Bars",
        imageUrl: "images/granola.jpg",
        ingredients: "Oats, honey, peanut butter, nuts, dried fruit",
        category: "Snacks",
        description: "Homemade granola bars for a healthy snack.",
        cookingProcess: `1. In a large bowl, mix together oats, nuts, and dried fruit.
                          2. In a saucepan, heat honey and peanut butter until melted and combined.
                          3. Pour the honey mixture over the oat mixture and stir to combine.
                          4. Press the mixture into a greased baking dish.
                          5. Refrigerate until firm, then cut into bars.
                          6. Store in an airtight container.`
    },
    {
        id: 19,
        name: "Nachos",
        imageUrl: "images/nachos.jpg",
        ingredients: "Tortilla chips, cheese, jalapeños, salsa, sour cream",
        category: "Snacks",
        description: "A quick and easy nachos recipe.",
        cookingProcess: `1. Preheat the oven to 350°F (175°C).
                          2. Arrange tortilla chips on a baking sheet.
                          3. Sprinkle cheese and jalapeños over the chips.
                          4. Bake in the oven until the cheese is melted.
                          5. Serve with salsa and sour cream.`
    },
    {
        id: 20,
        name: "Veggie Sticks with Hummus",
        imageUrl: "images/veggiesticks.jpg",
        ingredients: "Carrots, celery, bell peppers, hummus",
        category: "Snacks",
        description: "Healthy veggie sticks served with hummus.",
        cookingProcess: `1. Cut carrots, celery, and bell peppers into sticks.
                          2. Arrange the veggie sticks on a plate.
                          3. Serve with a bowl of hummus for dipping.`
    },
    {
        id: 21,
        name: "Mojito",
        imageUrl: "images/mojito.jpg",
        ingredients: "Mint leaves, lime, sugar, rum, soda water",
        category: "Drinks",
        description: "A refreshing minty mojito.",
        cookingProcess: `1. Muddle mint leaves and lime in a glass.
                          2. Add sugar and rum, and stir to combine.
                          3. Fill the glass with ice and top with soda water.
                          4. Garnish with a mint sprig and lime wedge.`
    },
    {
        id: 22,
        name: "Smoothie",
        imageUrl: "images/smoothie.jpg",
        ingredients: "Banana, berries, yogurt, milk, honey",
        category: "Drinks",
        description: "A healthy and delicious fruit smoothie.",
        cookingProcess: `1. Combine banana, berries, yogurt, milk, and honey in a blender.
                          2. Blend until smooth.
                          3. Serve immediately.`
    },
    {
        id: 23,
        name: "Iced Coffee",
        imageUrl: "images/icedcoffee.jpg",
        ingredients: "Coffee, milk, sugar, ice",
        category: "Drinks",
        description: "A refreshing iced coffee.",
        cookingProcess: `1. Brew coffee and let it cool.
                          2. Fill a glass with ice cubes.
                          3. Pour the coffee over the ice.
                          4. Add milk and sugar to taste, and stir well.
                          5. Serve immediately.`
    },
    {
        id: 24,
        name: "Lemonade",
        imageUrl: "images/lemonade.jpg",
        ingredients: "Lemons, sugar, water, ice",
        category: "Drinks",
        description: "A classic homemade lemonade.",
        cookingProcess: `1. Juice the lemons and pour the juice into a pitcher.
                          2. Add sugar and water, and stir until the sugar is dissolved.
                          3. Add ice cubes to the pitcher.
                          4. Serve chilled.`
    },
    {
        id: 25,
        name: "Hot Chocolate",
        imageUrl: "images/hotchocolate.jpg",
        ingredients: "Milk, cocoa powder, sugar, vanilla extract",
        category: "Drinks",
        description: "A warm and cozy hot chocolate.",
        cookingProcess: `1. Heat milk in a saucepan over medium heat.
                          2. Whisk in cocoa powder and sugar until smooth.
                          3. Add vanilla extract and continue to heat until the mixture is hot.
                          4. Pour into mugs and serve with whipped cream, if desired.`
    }
];


// Export the sampleRecipes array
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = sampleRecipes;
} else {
    window.sampleRecipes = sampleRecipes;
}
