import AnHui from "../assets/cuisine/anhui.jpg";
import Fujian from "../assets/cuisine/fujian.jpg";
import GuangZhou from "../assets/cuisine/guangzhou.jpg";
import Hunan from "../assets/cuisine/hunan.jpg";
import JiangSu from "../assets/cuisine/jiangsu.jpg";
import ShanDong from "../assets/cuisine/shandong.jpg";
import SiChuan from "../assets/cuisine/sichuan.jpg";
import ZheJiang from "../assets/cuisine/zhejiang.jpg";

const cuisines = [
  {
    title: "Sichuan Cuisine",
    image: SiChuan,
    imageAlt: "Sichuan Cuisine",
    content:
      "Sichuan cuisine is renowned for its bold, pungent flavors. It is characterized by the liberal use of chili peppers, Sichuan peppercorns, and a unique blend of aromatic spices that create a numbing, tingling sensation on the palate.",
    details:
      "Originating from the Sichuan province in southwestern China, is renowned for its bold and pungent flavors. It is characterized by the liberal use of chili peppers, Sichuan peppercorns, and a unique blend of aromatic spices, creating a numbing and tingling sensation on the palate. In addition to the famous Mapo Tofu and Kung Pao Chicken, Sichuan cuisine offers a wide variety of dishes such as Fish-Flavored Pork, Twice-Cooked Pork, and Sichuan Hot Pot, each showcasing the region's rich culinary heritage.",
  },
  {
    title: "Cantonese Cuisine",
    image: GuangZhou,
    imageAlt: "Cantonese Cuisine",
    content:
      "Cantonese cuisine originates from the Guangdong province and is known for its emphasis on the natural flavors of fresh ingredients. Dishes are often lightly seasoned, allowing the inherent taste of the food to shine through. Seafood and dim sum are particularly prominent in Cantonese culinary traditions.",
    details:
      "Originating from the Guangdong province in southeastern China, emphasizes the natural flavors of fresh ingredients and delicate culinary techniques. Dishes are lightly seasoned to allow the true essence of the food to shine through. Apart from the popular dim sum delicacies like steamed dumplings and shrimp dumplings, Cantonese cuisine also boasts signature dishes such as Roast Duck, Sweet and Sour Pork, and Braised Abalone, reflecting the region's coastal influences and diverse culinary traditions.",
  },
  {
    title: "Hunan Cuisine",
    image: Hunan,
    imageAlt: "Hunan Cuisine",
    content:
      "Hunan cuisine, or Xiang cuisine, is renowned for its bold, fiery flavors. It is typified by the abundant use of chili peppers, garlic, and pickled vegetables, creating a harmonious balance of sour, spicy, and savory notes. Hunan dishes are often cooked using smoking, steaming, and dry-frying methods to enhance the natural umami qualities of the ingredients.",
    details:
      "Originating from the Hunan province in south-central China, is renowned for its bold and fiery flavors. It features an abundance of chili peppers, garlic, and pickled vegetables, creating a harmonious balance of sour, spicy, and savory notes. In addition to the famous Hunan Spicy Chicken and Chairman Mao's Red-Braised Pork, Hunan cuisine offers a wide array of dishes such as Dong'an Chicken, Stinky Tofu, and Hot and Sour Fish, each showcasing the region's vibrant and diverse culinary landscape.",
  },
  {
    title: "Zhejiang Cuisine",
    image: ZheJiang,
    imageAlt: "Zhejiang Cuisine",
    content:
      "Zhejiang cuisine, or Zhe cuisine, is characterized by its delicate, refined flavors and focus on freshness. Dishes often feature local produce, seafood, and a light, balanced seasoning. Zhejiang cuisine is renowned for its skilled use of techniques like steaming, poaching, and quick-frying to highlight the natural sweetness and tenderness of the ingredients.",
    details:
      "Originating from the Zhejiang province in eastern China, is characterized by its delicate and refined flavors, as well as its emphasis on freshness and seasonality. Dishes often feature local produce, seafood, and a light, balanced seasoning. In addition to the renowned West Lake Fish in Sweet and Sour Sauce and Dongpo Pork, Zhejiang cuisine offers a variety of dishes such as Beggar's Chicken, Longjing Shrimp, each reflecting the region's rich culinary heritage and cultural diversity.",
  },
  {
    title: "Shandong Cuisine",
    image: ShanDong,
    imageAlt: "Shandong Cuisine",
    content:
      "Shandong cuisine, also known as Lu cuisine, is characterized by its clean, delicate flavors. Dishes often feature high-quality seafood and produce from the Shandong province. The cuisine is known for its skilled use of steaming, braising, and pan-frying techniques to preserve the natural essence of the ingredients.",
    details:
      "Originates from the Shandong province in northeastern China. It is known for its clean and delicate flavors, as well as its emphasis on high-quality ingredients and skilled cooking techniques. Dishes often feature seafood and produce from the region, showcasing the province's rich agricultural resources and coastal influences. In addition to the famous Sweet and Sour Carp and Dezhou Braised Chicken, Shandong cuisine offers a variety of dishes such as Braised Sea Cucumber, Stuffed Treasures of the Sea, and Braised Pork Belly, each highlighting the region's culinary prowess and gastronomic traditions.",
  },
  {
    title: "Anhui Cuisine",
    image: AnHui,
    imageAlt: "Anhui Cuisine",
    content:
      "Anhui cuisine, or Hui cuisine, is known for its use of wild herbs, mountain vegetables, and unique pickling techniques. Dishes often feature a rich, aromatic flavor profile that is achieved through lengthy braising and slow-cooking processes. The cuisine places a strong emphasis on the preservation of natural flavors and the use of high-quality, seasonal ingredients.",
    details:
      "Originating from the Anhui province in eastern China, is known for its use of wild herbs, mountain vegetables, and unique pickling techniques. It features a rich and aromatic flavor profile achieved through lengthy braising and slow-cooking processes. In addition to the famous Stewed Turtle with Ham and Bamboo Shoots Braised with Mushrooms, Anhui cuisine offers a variety of dishes such as Huangshan Braised Pheasant, Smoked Mandarin Fish, and Salted Duck, each showcasing the region's rich culinary heritage and natural abundance.",
  },

  {
    title: "Fujian Cuisine",
    image: Fujian,
    imageAlt: "Fujian Cuisine",
    content:
      "Fujian cuisine, or Min cuisine, is known for its use of seafood and emphasis on umami flavors. Dishes often feature a combination of salty, sweet, and sour notes, with a focus on preserving the natural essence of the ingredients. Fujian cuisine utilizes a variety of cooking methods, including braising, steaming, and quick-frying, to create delicate and harmonious flavors.",
    details:
      "Originating from the Fujian province in southeastern China, emphasizes seafood and umami flavors, as well as a combination of salty, sweet, and sour notes. It features a variety of cooking techniques such as braising, steaming, and quick-frying to create delicate and harmonious flavors. In addition to the famous Buddha Jumps Over the Wall and Fish Balls Soup, Fujian cuisine offers a variety of dishes such as Oyster Omelette, Shacha Mianxing, and Lychee Pork, each reflecting the region's coastal influences and culinary traditions.",
  },
  {
    title: "Jiangsu Cuisine",
    image: JiangSu,
    imageAlt: "Jiangsu Cuisine",
    content:
      "Jiangsu cuisine, also known as Su cuisine, is characterized by its delicate, elegant flavors and innovative culinary techniques. Dishes often feature high-quality seasonal ingredients, including fresh seafood, poultry, and a variety of vegetables. The cuisine is renowned for its skilled use of braising, steaming, and pan-frying to create harmonious and balanced flavor profiles.",
    details:
      "Originating from the Jiangsu province in eastern China, is characterized by its delicate and elegant flavors, as well as its innovative culinary techniques. Dishes often feature high-quality seasonal ingredients such as freshwater fish, poultry, and a variety of vegetables. In addition to the famous Lion's Head Meatballs and Yangzhou Fried Rice, Jiangsu cuisine offers a variety of dishes such as Salted Duck, Crystal Meat, and Duck Blood Soup, each showcasing the region's rich culinary heritage and gastronomic traditions.",
  },
];

export default cuisines;
