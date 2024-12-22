export const users = [
    {
        id: 1,
        lastname: 'A',
        firstname: 'Nguyen Van',
        email: 'nguyenvana@example.com',
        password: '123',
        age: 28,
        address: '123 Le Loi, Ho Chi Minh City',
        avatar: 'https://example.com/avatars/nguyenvana.jpg',
        isBanned: false,
        balance: 1000.50,
    },
    {
        id: 2,
        name: 'Tran Thi B',
        email: 'tranthib@example.com',
        age: 32,
        address: '456 Nguyen Trai, Hanoi',
        avatar: 'https://example.com/avatars/tranthib.jpg',
        isBanned: true,
        balance: 250.75,
    },
    {
        id: 3,
        lastname: 'C',
        firstname: 'Nguyen Van',
        email: 'levanc@example.com',
        age: 24,
        address: '789 Hai Ba Trung, Da Nang',
        avatar: 'https://example.com/avatars/levanc.jpg',
        isBanned: false,
        balance: 500.00,
    },
    {
        id: 4,
        name: 'Pham Thi D',
        email: 'phamthid@example.com',
        age: 29,
        address: '101 Le Duan, Can Tho',
        avatar: 'https://example.com/avatars/phamthid.jpg',
        isBanned: false,
        balance: 750.25,
    },
    {
        id: 5,
        name: 'Hoang Van E',
        email: 'hoangvane@example.com',
        age: 35,
        address: '202 Tran Hung Dao, Hue',
        avatar: 'https://example.com/avatars/hoangvane.jpg',
        isBanned: true,
        balance: 300.00,
    }
];

export const foods = [
    {
        id: 1,
        name: "Pho",
        description: "Traditional Vietnamese noodle soup",
        price: "$10",
        image: "pho.jpg",
        Category_ID: 1,
        Origin: "Vietnam",
        WayCooking: [
            "Prepare the broth by simmering beef bones, onion, and ginger in water for several hours. Add spices like star anise, cloves, and cinnamon for flavor.",
            "Cook the rice noodles according to the package instructions. Drain and set aside.",
            "Thinly slice the beef. It should be very thin so it cooks quickly in the hot broth.",
            "Assemble the bowls by placing a portion of noodles in each bowl. Top with the raw beef slices.",
            "Pour the hot broth over the beef and noodles. The heat from the broth will cook the beef.",
            "Garnish with fresh herbs like cilantro and basil, bean sprouts, and a squeeze of lime. Serve immediately."
        ]
    },
    {
        id: 2,
        name: "Banh Mi",
        description: "Vietnamese sandwich",
        price: "$5",
        image: "banhmi.jpg",
        Category_ID: 2,
        Origin: "Vietnam",
        WayCooking: [
            "Prepare the bread by baking it until it's crispy.",
            "Slice the bread lengthwise and spread a layer of pate on one side.",
            "Add slices of cold cuts, pickled vegetables, cilantro, and chili slices.",
            "Drizzle some soy sauce and mayonnaise over the fillings.",
            "Close the sandwich and serve."
        ]
    },
    {
        id: 3,
        name: "Spring Rolls",
        description: "Fresh spring rolls with shrimp and vegetables",
        price: "$7",
        image: "springrolls.jpg",
        Category_ID: 3,
        Origin: "Vietnam",
        WayCooking: [
            "Soak rice paper in warm water until soft.",
            "Place a piece of lettuce on the rice paper, add some cooked shrimp, vermicelli noodles, and fresh herbs.",
            "Roll the rice paper tightly around the filling.",
            "Serve with peanut dipping sauce."
        ]
    },
    {
        id: 4,
        name: "Bun Cha",
        description: "Grilled pork with noodles",
        price: "$8",
        image: "buncha.jpg",
        Category_ID: 4,
        Origin: "Vietnam",
        WayCooking: [
            "Marinate the pork with fish sauce, sugar, garlic, and pepper.",
            "Grill the pork until fully cooked.",
            "Cook vermicelli noodles according to the package instructions. Drain and set aside.",
            "Serve the grilled pork with noodles, fresh herbs, and dipping sauce."
        ]
    },
    {
        id: 5,
        name: "Goi Cuon",
        description: "Vietnamese fresh spring rolls",
        price: "$6",
        image: "goicuon.jpg",
        Category_ID: 5,
        Origin: "Vietnam",
        WayCooking: [
            "Soak rice paper in warm water until soft.",
            "Place a piece of lettuce on the rice paper, add some cooked shrimp, vermicelli noodles, and fresh herbs.",
            "Roll the rice paper tightly around the filling.",
            "Serve with peanut dipping sauce."
        ]
    },
    {
        id: 6,
        name: "Com Tam",
        description: "Broken rice with grilled pork",
        price: "$9",
        image: "comtam.jpg",
        Category_ID: 6,
        Origin: "Vietnam",
        WayCooking: [
            "Cook broken rice until tender.",
            "Marinate the pork with fish sauce, sugar, garlic, and pepper.",
            "Grill the pork until fully cooked.",
            "Serve the rice with grilled pork, pickled vegetables, and fish sauce."
        ]
    },
    {
        id: 7,
        name: "Banh Xeo",
        description: "Vietnamese savory crepe",
        price: "$7",
        image: "banhxeo.jpg",
        Category_ID: 7,
        Origin: "Vietnam",
        WayCooking: [
            "Prepare the batter with rice flour, turmeric, and coconut milk.",
            "Pour a thin layer of batter onto a hot skillet.",
            "Add shrimp, pork, and bean sprouts on one side of the crepe.",
            "Fold the crepe in half and cook until crispy.",
            "Serve with fresh herbs and dipping sauce."
        ]
    },
    {
        id: 8,
        name: "Ca Kho To",
        description: "Caramelized fish in clay pot",
        price: "$12",
        image: "cakhoto.jpg",
        Category_ID: 8,
        Origin: "Vietnam",
        WayCooking: [
            "Marinate the fish with fish sauce, sugar, garlic, and pepper.",
            "Caramelize sugar in a clay pot until golden brown.",
            "Add the marinated fish and cook until the fish is fully cooked and the sauce is thickened.",
            "Serve with rice."
        ]
    },
    {
        id: 9,
        name: "Bun Bo Hue",
        description: "Spicy beef noodle soup",
        price: "$11",
        image: "bunbohue.jpg",
        Category_ID: 9,
        Origin: "Vietnam",
        WayCooking: [
            "Prepare the broth by simmering beef bones, lemongrass, and chili in water for several hours.",
            "Cook the rice noodles according to the package instructions. Drain and set aside.",
            "Thinly slice the beef and pork.",
            "Assemble the bowls by placing a portion of noodles in each bowl. Top with the beef and pork slices.",
            "Pour the hot broth over the meat and noodles.",
            "Garnish with fresh herbs and lime."
        ]
    },
    {
        id: 10,
        name: "Cha Gio",
        description: "Vietnamese fried spring rolls",
        price: "$6",
        image: "chagio.jpg",
        Category_ID: 10,
        Origin: "Vietnam",
        WayCooking: [
            "Prepare the filling with ground pork, shrimp, mushrooms, and vermicelli noodles.",
            "Soak rice paper in water until soft.",
            "Place a spoonful of filling on the rice paper and roll tightly.",
            "Fry the spring rolls until golden brown.",
            "Serve with lettuce, herbs, and dipping sauce."
        ]
    }
];

export const ingredients = [
    { Ingredient_ID: 1, Name: "Beef", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 2, Name: "Rice Noodles", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 3, Name: "Onion", IsAvailable: true, Measurement: "piece" },
    { Ingredient_ID: 4, Name: "Ginger", IsAvailable: true, Measurement: "piece" },
    { Ingredient_ID: 5, Name: "Cinnamon", IsAvailable: true, Measurement: "stick" },
    { Ingredient_ID: 6, Name: "Star Anise", IsAvailable: true, Measurement: "pieces" },
    { Ingredient_ID: 7, Name: "Cloves", IsAvailable: true, Measurement: "pieces" },
    { Ingredient_ID: 8, Name: "Fish Sauce", IsAvailable: true, Measurement: "tablespoons" },
    { Ingredient_ID: 9, Name: "Bean Sprouts", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 10, Name: "Basil", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 11, Name: "Lime", IsAvailable: true, Measurement: "piece" },
    { Ingredient_ID: 12, Name: "Pate", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 13, Name: "Cold Cuts", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 14, Name: "Pickled Vegetables", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 15, Name: "Cilantro", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 16, Name: "Chili", IsAvailable: true, Measurement: "slices" },
    { Ingredient_ID: 17, Name: "Mayonnaise", IsAvailable: true, Measurement: "tablespoons" },
    { Ingredient_ID: 18, Name: "Shrimp", IsAvailable: true, Measurement: "pieces" },
    { Ingredient_ID: 19, Name: "Vermicelli Noodles", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 20, Name: "Fresh Herbs", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 21, Name: "Pork", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 22, Name: "Rice Flour", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 23, Name: "Turmeric", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 24, Name: "Coconut Milk", IsAvailable: true, Measurement: "ml" },
    { Ingredient_ID: 25, Name: "Lemongrass", IsAvailable: true, Measurement: "sticks" },
    { Ingredient_ID: 26, Name: "Chili", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 27, Name: "Ground Pork", IsAvailable: true, Measurement: "grams" },
    { Ingredient_ID: 28, Name: "Mushrooms", IsAvailable: true, Measurement: "grams" }
];

export const recipe = [
    { R_ID: 1, F_ID: 1, Ingredient_ID: 1, Quantity: 200, Measurement: "grams" }, // Beef for Pho
    { R_ID: 2, F_ID: 1, Ingredient_ID: 2, Quantity: 200, Measurement: "grams" }, // Rice Noodles for Pho
    { R_ID: 3, F_ID: 1, Ingredient_ID: 3, Quantity: 1, Measurement: "piece" }, // Onion for Pho
    { R_ID: 4, F_ID: 1, Ingredient_ID: 4, Quantity: 1, Measurement: "piece" }, // Ginger for Pho
    { R_ID: 5, F_ID: 1, Ingredient_ID: 5, Quantity: 1, Measurement: "stick" }, // Cinnamon for Pho
    { R_ID: 6, F_ID: 1, Ingredient_ID: 6, Quantity: 2, Measurement: "pieces" }, // Star Anise for Pho
    { R_ID: 7, F_ID: 1, Ingredient_ID: 7, Quantity: 4, Measurement: "pieces" }, // Cloves for Pho
    { R_ID: 8, F_ID: 1, Ingredient_ID: 8, Quantity: 2, Measurement: "tablespoons" }, // Fish Sauce for Pho
    { R_ID: 9, F_ID: 1, Ingredient_ID: 9, Quantity: 100, Measurement: "grams" }, // Bean Sprouts for Pho
    { R_ID: 10, F_ID: 1, Ingredient_ID: 10, Quantity: 10, Measurement: "grams" }, // Basil for Pho
    { R_ID: 11, F_ID: 1, Ingredient_ID: 11, Quantity: 1, Measurement: "piece" }, // Lime for Pho

    { R_ID: 12, F_ID: 2, Ingredient_ID: 12, Quantity: 50, Measurement: "grams" }, // Pate for Banh Mi
    { R_ID: 13, F_ID: 2, Ingredient_ID: 13, Quantity: 100, Measurement: "grams" }, // Cold Cuts for Banh Mi
    { R_ID: 14, F_ID: 2, Ingredient_ID: 14, Quantity: 50, Measurement: "grams" }, // Pickled Vegetables for Banh Mi
    { R_ID: 15, F_ID: 2, Ingredient_ID: 15, Quantity: 10, Measurement: "grams" }, // Cilantro for Banh Mi
    { R_ID: 16, F_ID: 2, Ingredient_ID: 16, Quantity: 2, Measurement: "slices" }, // Chili for Banh Mi
    { R_ID: 17, F_ID: 2, Ingredient_ID: 17, Quantity: 1, Measurement: "tablespoons" }, // Mayonnaise for Banh Mi

    { R_ID: 18, F_ID: 3, Ingredient_ID: 18, Quantity: 4, Measurement: "pieces" }, // Shrimp for Spring Rolls
    { R_ID: 19, F_ID: 3, Ingredient_ID: 19, Quantity: 50, Measurement: "grams" }, // Vermicelli Noodles for Spring Rolls
    { R_ID: 20, F_ID: 3, Ingredient_ID: 20, Quantity: 20, Measurement: "grams" }, // Fresh Herbs for Spring Rolls

    { R_ID: 21, F_ID: 4, Ingredient_ID: 21, Quantity: 200, Measurement: "grams" }, // Pork for Bun Cha
    { R_ID: 22, F_ID: 4, Ingredient_ID: 2, Quantity: 200, Measurement: "grams" }, // Rice Noodles for Bun Cha
    { R_ID: 23, F_ID: 4, Ingredient_ID: 20, Quantity: 10, Measurement: "grams" }, // Fresh Herbs for Bun Cha

    { R_ID: 24, F_ID: 5, Ingredient_ID: 18, Quantity: 4, Measurement: "pieces" }, // Shrimp for Goi Cuon
    { R_ID: 25, F_ID: 5, Ingredient_ID: 19, Quantity: 50, Measurement: "grams" }, // Vermicelli Noodles for Goi Cuon
    { R_ID: 26, F_ID: 5, Ingredient_ID: 20, Quantity: 20, Measurement: "grams" }, // Fresh Herbs for Goi Cuon

    { R_ID: 27, F_ID: 6, Ingredient_ID: 2, Quantity: 200, Measurement: "grams" }, // Rice Noodles for Com Tam
    { R_ID: 28, F_ID: 6, Ingredient_ID: 21, Quantity: 200, Measurement: "grams" }, // Pork for Com Tam

    { R_ID: 29, F_ID: 7, Ingredient_ID: 22, Quantity: 100, Measurement: "grams" }, // Rice Flour for Banh Xeo
    { R_ID: 30, F_ID: 7, Ingredient_ID: 23, Quantity: 10, Measurement: "grams" }, // Turmeric for Banh Xeo
    { R_ID: 31, F_ID: 7, Ingredient_ID: 24, Quantity: 200, Measurement: "ml" }, // Coconut Milk for Banh Xeo
    { R_ID: 32, F_ID: 7, Ingredient_ID: 18, Quantity: 4, Measurement: "pieces" }, // Shrimp for Banh Xeo
    { R_ID: 33, F_ID: 7, Ingredient_ID: 21, Quantity: 200, Measurement: "grams" }, // Pork for Banh Xeo

    { R_ID: 34, F_ID: 8, Ingredient_ID: 21, Quantity: 200, Measurement: "grams" }, // Pork for Ca Kho To
    { R_ID: 35, F_ID: 8, Ingredient_ID: 8, Quantity: 2, Measurement: "tablespoons" }, // Fish Sauce for Ca Kho To
    { R_ID: 36, F_ID: 8, Ingredient_ID: 7, Quantity: 4, Measurement: "pieces" }, // Cloves for Ca Kho To

    { R_ID: 37, F_ID: 9, Ingredient_ID: 21, Quantity: 200, Measurement: "grams" }, // Pork for Bun Bo Hue
    { R_ID: 38, F_ID: 9, Ingredient_ID: 25, Quantity: 2, Measurement: "sticks" }, // Lemongrass for Bun Bo Hue
    { R_ID: 39, F_ID: 9, Ingredient_ID: 26, Quantity: 2, Measurement: "grams" }, // Chili for Bun Bo Hue

    { R_ID: 40, F_ID: 10, Ingredient_ID: 27, Quantity: 200, Measurement: "grams" }, // Ground Pork for Cha Gio
    { R_ID: 41, F_ID: 10, Ingredient_ID: 18, Quantity: 4, Measurement: "pieces" }, // Shrimp for Cha Gio
    { R_ID: 42, F_ID: 10, Ingredient_ID: 28, Quantity: 50, Measurement: "grams" }, // Mushrooms for Cha Gio
    { R_ID: 43, F_ID: 10, Ingredient_ID: 19, Quantity: 50, Measurement: "grams" }, // Vermicelli Noodles for Cha Gio
];

