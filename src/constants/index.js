export const RESTAURANT_INFO = {
    name: "L’AMORE",
    tagline: "Italian Restaurant",
    phone: "+1 781 567 43 54",
    email: "reservations@lamore.net",
    address: "123 Washington Street, Boston, MA",
};

export const NAV_LINKS = [
    { id: "menu", name: "Menu", path: "/menu" },
    { id: "story", name: "Our Story", path: "/about" },
    { id: "atmosphere", name: "Atmosphere", path: "/atmosphere" },
    { id: "testimonials", name: "Testimonials", path: "/reviews" }, 
    { id: "contact", name: "Contact", path: "/contact" },
];

export const HERO_TEXT = {
    title: "EXQUISITE TASTE WITH UNIQUE PRESENTATION",
    subtitle: "L’AMORE RESTAURANT",
    description:
        "Order a main course and get a 15% discount on our curated wine selection.",
};

export const CONTACT_DATA = {
    title: "Visit us",
    addressLabel: "Address",
    hoursLabel: "Hours",
    phoneLabel: "Phone",
    hoursValue: "3pm - 12am daily",
};

export const MENU_CATEGORIES = [
    {
        title: "Starters",
        items: [
            {
                name: "Truffle Arancini",
                price: "18",
                description:
                    "Crispy risotto balls, wild mushrooms, truffle aioli.",
                image: "https://plus.unsplash.com/premium_photo-1664205766159-e39d04b2b943?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Burrata & Heirloom",
                price: "22",
                description:
                    "Creamy burrata, balsamic pearls, tomatos, basil oil.",
                image: "https://images.unsplash.com/photo-1580638149300-65f0b9e8fbff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
    {
        title: "Main Course",
        items: [
            {
                name: "Wagyu Ribeye",
                price: "65",
                description: "Grade A5, smoked sea salt, baked potatos",
                image: "https://images.unsplash.com/photo-1720701247839-9b8433398385?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Lobster Risotto",
                price: "48",
                description: "Butter-poached Atlantic lobster, saffron, pasta.",
                image: "https://images.unsplash.com/photo-1498603273107-62080b9e4963?q=80&w=660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Wild Salmon",
                price: "38",
                description:
                    "Pan-seared salmon, asparagus spears, lemon-butter velouté.",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Truffle Tagliatelle",
                price: "34",
                description:
                    "Fresh hand-cut pasta, black winter truffle, aged parmesan.",
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Herb Lamb Racks",
                price: "52",
                description:
                    "Grass-fed lamb, herb crust, red wine jus, baby carrots.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        title: "Salads",
        items: [
            {
                name: "Mediterranean Octopus",
                price: "28",
                description: "Grilled octopus, veggies, lemon zest.",
                image: "https://plus.unsplash.com/premium_photo-1719611418707-cec3416a530b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Quinoa & Roasted Gorgonzola",
                price: "19",
                description:
                    "Gorgonzola, red onion, honey mustard vinaigrette.",
                image: "https://images.unsplash.com/photo-1623428187442-b633f414aedc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Tuscan Kale Caesar",
                price: "17",
                description:
                    "Garlic focaccia croutons, 24-month aged parmesan.",
                image: "https://plus.unsplash.com/premium_photo-1664478283448-94d7b72a23ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
    {
        title: "Desserts",
        items: [
            {
                name: "Signature Tiramisu",
                price: "14",
                description:
                    "Mascarpone cream, espresso-soaked ladyfingers, gold leaf.",
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600",
            },
            {
                name: "Deconstructed Cheesecake",
                price: "16",
                description: "Wild berry compote, almond crumble, yuzu gel.",
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600",
            },
            {
                name: "Dark Chocolate Fondant",
                price: "15",
                description:
                    "Molten lava center, Madagascar vanilla bean gelato.",
                image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600",
            },
        ],
    },
    {
        title: "Drinks",
        items: [
            {
                name: "Amarone della Valpolicella",
                price: "22",
                description:
                    "Rich, velvety red wine with notes of dried black cherry.",
                image: "https://images.unsplash.com/photo-1775215237032-54e9f5a67e40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "L'Amore Signature Martini",
                price: "18",
                description: "Premium gin, elderflower liqueur, fresh orange.",
                image: "https://images.unsplash.com/photo-1629386587303-3cb98e8a1512?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                name: "Sparkling Hibiscus Tea",
                price: "9",
                description:
                    "Hand-crafted non-alcoholic infusion with rose petals.",
                image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600",
            },
        ],
    },
];

export const BOOKING_PAGE_DATA = {
    title: "RESERVE A TABLE",
    subtitle: "Our manager will call you shortly to confirm your booking.",
    submitButton: "RESERVE",
    disclaimer:
        "By clicking the button, you agree to the processing of personal data.",
};

export const TESTIMONIALS_DATA = [
    {
        name: "Alexander Wright",
        date: "March 2026",
        rating: 5,
        text: "The Wagyu Ribeye was transcendental. The gold-leaf detail on the Tiramisu shows a level of dedication to craft that is rare even in Boston's finest establishments.",
    },
    {
        name: "Elena Rossi",
        date: "February 2026",
        rating: 5,
        text: "Authentic Italian soul with a modern, luxurious twist. Chef Marco's touch is evident in every bite. A truly exquisite experience.",
    },
    {
        name: "David Chen",
        date: "January 2026",
        rating: 5,
        text: "L’AMORE isn't just a restaurant; it's a sensory journey. The atmosphere, the wine selection, and the service are simply unparalleled.",
    },
];

