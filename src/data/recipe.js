import cucumber_salad from "../assets/recipe/cucumber_salad.jpg";
import okra_salad from "../assets/recipe/okra_salad.jpeg";
import osmanthus_candied_lotus_root from "../assets/recipe/osmanthus_candied_lotus_root.jpeg";
import braised_pork_belly from "../assets/recipe/braised_pork_belly.jpg";
import mapo_tofu from "../assets/recipe/mapo_tofu.jpg";
import oil_blanched_gai_lan from "../assets/recipe/oil_blanched_gai_lan.jpg";
import homestyle_stir_fried_pork from "../assets/recipe/homestyle_stir_fried_pork.jpeg";
import sweet_sour_pork_pineapple from "../assets/recipe/sweet_sour_pork_pineapple.jpeg";
import yangzhou_fried_rice from "../assets/recipe/yangzhou_fried_rice.jpg";
import spicy_sichuan_noodles from "../assets/recipe/spicy_sichuan_noodles.jpg";
import fried_dumplings from "../assets/recipe/fried_dumplings.jpeg";
import shumai from "../assets/recipe/shumai.jpeg";
import hargow from "../assets/recipe/hargow.jpeg";
import spring_rolls from "../assets/recipe/spring_rolls.jpeg";
import green_bean_soup from "../assets/recipe/green_bean_soup.jpeg";
import double_skin_milk_pudding from "../assets/recipe/double_skin_milk_pudding.jpeg";

const recipes = [
  // Cold Dishes
  {
    name: "Cucumber Salad",
    image: cucumber_salad,
    description:
      "A refreshing and crunchy salad made with cucumbers, tossed in a tangy dressing.",
    ingredients:
      "2 cucumbers, thinly sliced; 1/4 cup rice vinegar; 1 tbsp soy sauce; 1 tsp sugar; 1 tsp sesame oil; 1 clove garlic, minced; 1 tsp grated ginger; 1 green onion, thinly sliced; Sesame seeds for garnish",
    instructions:
      "In a small bowl, whisk together rice vinegar, soy sauce, sugar, sesame oil, minced garlic, and grated ginger until sugar is dissolved. In a large bowl, toss sliced cucumbers and green onions with the dressing until well coated. Garnish with sesame seeds before serving. Enjoy chilled!",
    category: "Cold Dishes",
  },
  {
    name: "Okra Salad",
    image: okra_salad,
    description:
      "A refreshing and healthy salad featuring blanched okra tossed in a tangy dressing.",
    ingredients:
      "1/2 lb fresh okra; 2 tomatoes, diced; 1/2 red onion, thinly sliced; 1/4 cup chopped cilantro; 2 tbsp olive oil; 1 tbsp lemon juice; 1 clove garlic, minced; Salt and pepper to taste",
    instructions:
      "Bring a pot of water to a boil. Add the okra and blanch for 2-3 minutes until tender-crisp. Remove the okra from the pot and immediately transfer to a bowl of ice water to stop the cooking process. Drain the okra and pat dry with paper towels. Cut the okra into bite-sized pieces and place in a large bowl. Add the diced tomatoes, sliced red onion, and chopped cilantro to the bowl with the okra. In a small bowl, whisk together the olive oil, lemon juice, minced garlic, salt, and pepper to make the dressing. Pour the dressing over the salad ingredients and toss gently to coat. Serve the okra salad immediately or chill in the refrigerator for a refreshing summer dish.",
    category: "Cold Dishes",
  },
  {
    name: "Osmanthus Candied Lotus Root",
    image: osmanthus_candied_lotus_root,
    description:
      "Crispy lotus root slices coated in a sweet osmanthus syrup, a refreshing and fragrant Chinese dessert.",
    ingredients:
      "1 lotus root, peeled and thinly sliced; 1 cup sugar; 1 cup water; 1/4 cup dried osmanthus flowers; Oil for frying",
    instructions:
      "In a pot, bring water to a boil and blanch the lotus root slices for 3-5 minutes until slightly tender. Drain and set aside. In another pot, combine sugar and water and bring to a simmer until the sugar is dissolved. Add dried osmanthus flowers and simmer for another 5 minutes to infuse the syrup with the fragrance. Heat oil in a deep fryer or pot to 350°F (175°C). Fry the blanched lotus root slices until golden brown and crispy. Drain on paper towels to remove excess oil. Dip the fried lotus root slices into the osmanthus syrup, coating them evenly. Remove from the syrup and let them cool on a wire rack. Serve the osmanthus candied lotus root chilled as a delightful dessert or snack.",
    category: "Cold Dishes",
  },
  // Stir-fries
  {
    name: "Braised Pork Belly",
    image: braised_pork_belly,
    description:
      "Tender chunks of pork belly braised in a savory and aromatic sauce, a classic Chinese comfort food dish.",
    ingredients:
      "600g pork belly, cut into bite-sized chunks; 2 tbsp oil; 2 slices ginger; 2 cloves garlic, minced; 2 green onions, chopped; 2 tbsp Shaoxing wine; 2 tbsp soy sauce; 1 tbsp dark soy sauce; 1 tbsp rock sugar; 1 star anise; 2 dried bay leaves; 1 cup water; Salt and pepper to taste; Chopped green onions for garnish",
    instructions:
      "Heat oil in a wok or large pot over medium heat. Add ginger slices, minced garlic, and chopped green onions. Stir-fry until fragrant. Add pork belly chunks and sear until browned on all sides. Add Shaoxing wine, soy sauce, dark soy sauce, rock sugar, star anise, and dried bay leaves. Stir to coat the pork evenly. Pour in water until the pork is just covered. Bring to a boil, then reduce heat to low and simmer, covered, for 60-90 minutes until pork is tender and sauce has thickened. Check and stir occasionally to prevent burning. Season with salt and pepper to taste. Garnish with chopped green onions before serving. Serve hot with steamed rice or buns.",
    category: "Stir-fries",
  },
  {
    name: "Mapo Tofu",
    image: mapo_tofu,
    description: "A classic Sichuan dish featuring spicy tofu and minced meat.",
    ingredients:
      "1 block (14 oz) firm tofu, diced; 100g minced pork or beef; 2 cloves garlic, minced; 1-inch piece ginger, minced; 2 green onions, chopped; 2 tbsp doubanjiang (spicy bean paste); 1 tbsp chili bean paste; 1 cup chicken or vegetable broth; 1 tbsp soy sauce; 1 tsp sugar; 1 tbsp cornstarch mixed with 2 tbsp water; 2 tbsp vegetable oil; Sichuan peppercorns for garnish (optional); Chopped cilantro for garnish (optional)",
    instructions:
      "Heat vegetable oil in a wok or large skillet over medium heat. Add minced garlic, ginger, and green onions. Stir-fry until fragrant. Add minced meat and cook until browned. Add doubanjiang and chili bean paste. Stir-fry for another minute. Pour in chicken or vegetable broth, soy sauce, and sugar. Stir to combine. Add diced tofu and gently stir to coat with the sauce. Simmer for 5-7 minutes until tofu is heated through and sauce has thickened. Stir in cornstarch mixture to further thicken the sauce. Garnish with Sichuan peppercorns and chopped cilantro if desired. Serve hot with steamed rice.",
    category: "Stir-fries",
  },
  {
    name: "Oil-Blanched Gai Lan with Oyster Sauce",
    image: oil_blanched_gai_lan,
    description:
      "Fresh gai lan (Chinese broccoli) blanched briefly in hot oil and drizzled with savory oyster sauce, a simple and delicious Cantonese vegetable dish.",
    ingredients:
      "1 bunch gai lan (Chinese broccoli); 2 tbsp oil; 2 cloves garlic, minced; 2 tbsp oyster sauce; 1 tsp soy sauce; 1/2 tsp sugar; 1/4 cup water; Salt to taste",
    instructions:
      "Wash and trim the gai lan, removing any tough stems. Heat oil in a wok or large skillet over high heat. Once the oil is hot, carefully add the gai lan and blanch for about 30 seconds, allowing the leaves to wilt slightly. Remove the gai lan from the oil and drain on paper towels. In the same wok or skillet, add minced garlic and stir-fry until fragrant. Add oyster sauce, soy sauce, sugar, and water. Stir to combine and bring to a simmer. Return the blanched gai lan to the wok or skillet and toss to coat evenly with the sauce. Cook for another minute, allowing the gai lan to absorb the flavors of the sauce. Season with salt to taste if needed. Transfer the gai lan to a serving plate and serve hot as a side dish.",
    category: "Stir-fries",
  },
  {
    name: "Homestyle Stir-Fried Pork",
    image: homestyle_stir_fried_pork,
    description:
      "A homestyle Chinese dish featuring tender pork slices stir-fried with vegetables in a savory sauce.",
    ingredients:
      "1/2 lb pork tenderloin or pork belly, thinly sliced; 1 cup mixed vegetables (such as bell peppers, carrots, snow peas); 2 cloves garlic, minced; 1-inch piece ginger, minced; 2 green onions, chopped; 2 tbsp soy sauce; 1 tbsp oyster sauce; 1 tsp sugar; 1/2 tsp cornstarch; 2 tbsp vegetable oil; Salt and pepper to taste",
    instructions:
      "In a small bowl, combine soy sauce, oyster sauce, sugar, and cornstarch. Mix well to make the sauce. Marinate the sliced pork in the sauce for about 15-20 minutes. Heat vegetable oil in a wok or large skillet over high heat. Add minced garlic, minced ginger, and chopped green onions. Stir-fry for a few seconds until fragrant. Add the marinated pork slices to the wok in a single layer. Stir-fry for 2-3 minutes until the pork is lightly browned and almost cooked through. Add the mixed vegetables to the wok. Stir-fry for another 2-3 minutes until the vegetables are tender-crisp and the pork is fully cooked. Season with salt and pepper to taste. Stir well to combine. Serve hot with steamed rice or noodles.",
    category: "Stir-fries",
  },
  {
    name: "Sweet and Sour Pork with Pineapple",
    image: sweet_sour_pork_pineapple,
    description:
      "A classic Chinese dish featuring crispy pork pieces stir-fried with tangy sweet and sour sauce and chunks of pineapple.",
    ingredients:
      "For Pork: 1/2 lb pork tenderloin, cut into bite-sized pieces; 1/2 cup cornstarch; 1 egg, beaten; Salt and pepper to taste; For Sauce: 1/2 cup pineapple juice; 2 tbsp ketchup; 2 tbsp rice vinegar; 2 tbsp brown sugar; 1 tbsp soy sauce; 1/2 cup pineapple chunks; For Stir-Fry: 2 tbsp vegetable oil; 1 bell pepper, diced; 1 onion, diced; 2 cloves garlic, minced; 1-inch piece ginger, minced; 2 green onions, chopped (for garnish)",
    instructions:
      "In a mixing bowl, combine pork pieces, cornstarch, beaten egg, salt, and pepper. Mix well to coat the pork pieces evenly. Heat vegetable oil in a wok or large skillet over medium-high heat. Once the oil is hot, add the coated pork pieces to the wok in batches. Fry for 3-4 minutes until golden brown and crispy. Remove the pork from the wok and set aside on a paper towel-lined plate. In a small bowl, whisk together pineapple juice, ketchup, rice vinegar, brown sugar, and soy sauce to make the sauce. Set aside. In the same wok, add a little more oil if needed. Stir-fry diced bell pepper and onion for 2-3 minutes until slightly softened. Add minced garlic and minced ginger. Stir-fry for another minute until fragrant. Return the fried pork pieces to the wok. Pour the prepared sauce over the pork and vegetables. Add pineapple chunks. Stir well to coat everything evenly in the sauce. Bring the sauce to a simmer and cook for 2-3 minutes until thickened. Garnish with chopped green onions.",
    category: "Stir-fries",
  },
  // Main Dishes
  {
    name: "Yangzhou Fried Rice",
    image: yangzhou_fried_rice,
    description:
      "A classic Chinese fried rice dish with eggs, vegetables, and meat.",
    ingredients:
      "3 cups cooked long-grain rice, chilled; 2 eggs, beaten; 1/2 cup cooked shrimp, peeled and deveined; 1/2 cup diced ham or Chinese sausage; 1/2 cup diced carrots; 1/2 cup frozen peas, thawed; 2 cloves garlic, minced; 2 green onions, chopped; 2 tbsp soy sauce; 1 tbsp oyster sauce; 1/2 tsp sesame oil; Salt and pepper to taste; 2 tbsp vegetable oil for frying; 1/2 cup diced bell peppers (optional); 1/2 cup sliced mushrooms (optional)",
    instructions:
      "Heat vegetable oil in a wok or large skillet over medium-high heat. Add beaten eggs and scramble until just set. Remove from wok and set aside. In the same wok, add a little more oil if needed. Stir-fry garlic and green onions until fragrant. Add diced carrots and cook until slightly softened. Add cooked shrimp, diced ham or Chinese sausage, and thawed peas. Stir-fry until heated through. Add chilled cooked rice and stir-fry, breaking up any clumps, until heated through. Return scrambled eggs to the wok. Drizzle soy sauce, oyster sauce, and sesame oil over the rice. Season with salt and pepper to taste. Stir-fry everything together until well combined and heated through. Garnish with additional chopped green onions if desired. Serve hot as a main dish or side dish.",
    category: "Main Dishes",
  },
  {
    name: "Spicy Sichuan Noodles",
    image: spicy_sichuan_noodles,
    description:
      "A fiery and flavorful noodle dish inspired by the bold flavors of Sichuan cuisine, featuring chewy noodles tossed in a spicy sauce.",
    ingredients:
      "200g dried noodles; 2 tbsp soy sauce; 1 tbsp rice vinegar; 1 tbsp chili oil; 1 tsp sesame oil; 2 cloves garlic, minced; 1-inch piece ginger, minced; 2 green onions, chopped; 1/4 cup chopped peanuts; 1 tbsp sesame seeds; Cilantro for garnish",
    instructions:
      "Cook the noodles according to package instructions until al dente. In a small bowl, mix together soy sauce, rice vinegar, chili oil, and sesame oil. In a skillet, heat some oil over medium heat and sauté minced garlic, ginger, and chopped green onions until fragrant. Add the cooked noodles to the skillet along with the sauce mixture. Toss everything together until well combined. Serve the noodles hot, garnished with chopped peanuts, sesame seeds, and fresh cilantro.",
    category: "Main Dishes",
  },
  {
    name: "Fried Dumplings",
    image: fried_dumplings,
    description:
      "Crispy on the bottom and tender on top, pan-fried dumplings are a popular Chinese dish enjoyed as a snack or appetizer.",
    ingredients:
      "For Dumplings: 1 pack dumpling wrappers; 1/2 lb ground pork or chicken; 1 cup finely chopped cabbage; 2 cloves garlic, minced; 1-inch piece ginger, minced; 2 green onions, finely chopped; 2 tbsp soy sauce; 1 tbsp sesame oil; 1 tsp sugar; Salt and pepper to taste; For Dipping Sauce: 2 tbsp soy sauce; 1 tbsp black vinegar; 1 tsp chili oil (optional); 1 tsp sesame seeds; 1 clove garlic, minced; 1 green onion, finely chopped",
    instructions:
      "In a large mixing bowl, combine ground pork or chicken, chopped cabbage, minced garlic, minced ginger, chopped green onions, soy sauce, sesame oil, sugar, salt, and pepper. Mix well to incorporate all ingredients. Place a spoonful of the filling in the center of each dumpling wrapper. Moisten the edges of the wrapper with water, then fold and pleat to seal the dumplings. Heat a tablespoon of oil in a non-stick skillet over medium heat. Once the oil is hot, arrange the dumplings in the skillet in a single layer, flat side down. Cook for 2-3 minutes until the bottoms are golden brown and crispy. Carefully add water to the skillet, just enough to cover the bottom of the dumplings. Cover the skillet with a lid and reduce heat to low. Allow the dumplings to steam for 8-10 minutes until the filling is cooked through and the wrappers are translucent. Remove the lid and increase heat to medium-high. Cook uncovered for another 2-3 minutes until the water has evaporated and the bottoms are crispy again. In the meantime, prepare the dipping sauce by combining soy sauce, black vinegar, chili oil (if using), sesame seeds, minced garlic, and chopped green onion in a small bowl. Serve the pan-fried dumplings hot with the dipping sauce on the side.",
    category: "Main Dishes",
  },
  // Dim Sum
  {
    name: "Shumai",
    image: shumai,
    description:
      "Delicate open-faced dumplings filled with a savory mixture of shrimp and pork, steamed to perfection and served with a dipping sauce.",
    ingredients:
      "For Dumplings: 200g ground pork; 200g raw shrimp, peeled, deveined, and minced; 1/4 cup chopped green onions; 1/4 cup chopped cilantro; 1 tbsp soy sauce; 1 tbsp sesame oil; 1 tbsp cornstarch; 1 tsp sugar; 1/2 tsp salt; 1/4 tsp ground white pepper; Round dumpling wrappers; For Dipping Sauce: 2 tbsp soy sauce; 1 tbsp rice vinegar; 1 tsp sesame oil; 1 tsp sugar; 1/2 tsp chili oil; Chopped green onions for garnish",
    instructions:
      "In a large bowl, mix together ground pork, minced shrimp, chopped green onions, chopped cilantro, soy sauce, sesame oil, cornstarch, sugar, salt, and ground white pepper until well combined. Place a spoonful of the filling in the center of each dumpling wrapper. Moisten the edges with water, then fold the wrapper over the filling to create a half-moon shape. Pleat the edges to seal tightly. Place the dumplings on a parchment-lined steamer basket. Steam over boiling water for 8-10 minutes until cooked through. In a small bowl, mix together soy sauce, rice vinegar, sesame oil, sugar, and chili oil to make the dipping sauce. Serve the steamed dumplings hot, garnished with chopped green onions, and accompanied by the dipping sauce.",
    category: "Dim Sum",
  },
  {
    name: "Har Gow",
    image: hargow,
    description:
      "Translucent dumplings filled with succulent shrimp and wrapped in a delicate dough, a classic dim sum delicacy.",
    ingredients:
      "For Dumplings: 200g raw shrimp, peeled, deveined, and minced; 1/4 cup bamboo shoots, minced; 2 water chestnuts, minced; 2 green onions, chopped; 1 tbsp soy sauce; 1 tbsp sesame oil; 1/2 tsp sugar; 1/4 tsp salt; Round dumpling wrappers; For Dipping Sauce: 2 tbsp soy sauce; 1 tbsp rice vinegar; 1 tsp sesame oil; 1 tsp sugar; 1/2 tsp chili oil; Chopped green onions for garnish",
    instructions:
      "In a large bowl, mix together minced shrimp, minced bamboo shoots, minced water chestnuts, chopped green onions, soy sauce, sesame oil, sugar, and salt until well combined. Place a spoonful of the filling in the center of each dumpling wrapper. Moisten the edges with water, then fold the wrapper over the filling to create a half-moon shape. Pleat the edges to seal tightly. Place the dumplings on a parchment-lined steamer basket. Steam over boiling water for 8-10 minutes until cooked through. In a small bowl, mix together soy sauce, rice vinegar, sesame oil, sugar, and chili oil to make the dipping sauce. Serve the steamed dumplings hot, garnished with chopped green onions, and accompanied by the dipping sauce.",
    category: "Dim Sum",
  },
  // Snacks
  {
    name: "Spring Rolls",
    image: spring_rolls,
    description:
      "Crispy and golden spring rolls filled with a savory mixture of vegetables, shrimp, and vermicelli noodles, perfect for snacking or as an appetizer.",
    ingredients:
      "6 spring roll wrappers; 1/2 cup shredded cabbage; 1/4 cup shredded carrots; 1/4 cup shredded bell pepper; 50g cooked shrimp, chopped; 50g cooked vermicelli noodles; 2 cloves garlic, minced; 1 tbsp soy sauce; 1 tsp sesame oil; 1/2 tsp sugar; 1/4 tsp ground white pepper; Vegetable oil for frying",
    instructions:
      "In a large bowl, combine shredded cabbage, shredded carrots, shredded bell pepper, chopped cooked shrimp, cooked vermicelli noodles, minced garlic, soy sauce, sesame oil, sugar, and ground white pepper. Mix until well combined. Place a spring roll wrapper on a clean surface. Spoon a portion of the filling onto the bottom third of the wrapper. Fold the bottom of the wrapper over the filling, then fold in the sides, and roll tightly into a cylinder. Moisten the edges with water to seal. Heat vegetable oil in a skillet over medium heat. Fry the spring rolls until golden and crispy on all sides. Drain on paper towels and serve hot with dipping sauce.",
    category: "Snacks",
  },
  // Dessert
  {
    name: "Green Bean Soup",
    image: green_bean_soup,
    description:
      "A sweet and comforting Chinese dessert soup made with green beans, often enjoyed hot or cold.",
    ingredients:
      "1 cup dried green beans (mung beans); 1/2 cup sugar (adjust to taste); 6 cups water; 2 pandan leaves (optional); 1/4 cup sago pearls (optional); 1/4 cup coconut milk (optional)",
    instructions:
      "Rinse the dried green beans under cold water until the water runs clear. In a large pot, combine the green beans, water, and pandan leaves (if using). Bring to a boil over high heat, then reduce the heat to low and simmer, covered, for 1-1.5 hours until the beans are soft and tender. If using sago pearls, soak them in water for about 30 minutes, then drain. Add the soaked sago pearls to the pot during the last 15 minutes of cooking, stirring occasionally to prevent sticking. Once the green beans are soft and the soup has thickened slightly, add sugar to taste and stir until dissolved. If desired, add coconut milk for a creamier texture and flavor. Remove the pandan leaves before serving. Serve the green bean soup hot or chilled, depending on preference.",
    category: "Dessert",
  },
  {
    name: "Double-Skin Milk Pudding",
    image: double_skin_milk_pudding,
    description:
      "A creamy and smooth Chinese dessert made with milk and red beans, featuring a delicate double-layered texture.",
    ingredients:
      "1 cup cooked red beans (adzuki beans); 4 cups milk; 1/2 cup sugar (adjust to taste); 1 tsp vanilla extract (optional); 2 tbsp gelatin powder; 1/4 cup water; Red bean paste (optional, for garnish); Fresh fruit or berries (optional, for garnish)",
    instructions:
      "In a blender, combine cooked red beans, milk, sugar, and vanilla extract (if using). Blend until smooth and well combined. Strain the mixture through a fine mesh sieve to remove any solids. In a small bowl, sprinkle gelatin powder over water and let it bloom for a few minutes. Once bloomed, microwave the gelatin mixture for about 30 seconds until completely dissolved. Stir the dissolved gelatin mixture into the strained red bean milk mixture. Pour the mixture into small bowls or ramekins, filling them about 3/4 full. Refrigerate the bowls for at least 4 hours or until set. Once set, the dessert will form a delicate skin on top and a creamy layer at the bottom. To serve, gently spoon some red bean paste on top of each serving if desired. Garnish with fresh fruit or berries if desired. Enjoy the red bean double skin milk chilled as a refreshing and indulgent dessert.",
    category: "Dessert",
  },
];

const categories = [
  { name: "Cold Dishes" },
  { name: "Stir-fries" },
  { name: "Main Dishes" },
  { name: "Dim Sum" },
  { name: "Snacks" },
  { name: "Dessert" },
];

export { recipes, categories };
