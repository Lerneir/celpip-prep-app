// CELPIP Speaking Task 3 (Describing a Scene) & Task 4 (Making Predictions)
// Task 3: 30s Prep | 60s Speaking (Describe what is happening in the picture)
// Task 4: 30s Prep | 60s Speaking (Predict what will happen next using the SAME picture)
// Contains 100 Scenario Metadata items paired with detailed visual scene illustrations.

const SCENARIO_PROMPTS = [
  {
    id: "sc_001",
    title: "Busy City Park on a Sunny Saturday",
    category: "Public Places",
    imageFile: "images/sc_001_busy_park.svg",
    description: "A bustling city park filled with people of all ages enjoying outdoor activities under a bright sun.",
    task3Prompt: "Look at the picture and describe as many details as you can to someone who cannot see it. Describe the people, their actions, and where things are located in the park.",
    task4Prompt: "Look at the same picture and predict what will happen next in this park scene. Give logical reasons for your predictions.",
    spatialHints: [
      "In the foreground, a young boy on a red bicycle is riding near a fountain.",
      "To the left, a family is sitting on a checkered picnic blanket eating sandwiches.",
      "In the center background, a man in a blue shirt is walking a fluffy white dog on a leash.",
      "To the right, two teenagers are playing frisbee near a large oak tree."
    ],
    predictionTargets: [
      "The boy riding the bicycle might bump into a park bench if he doesn't turn.",
      "The dog being walked on the leash will likely run toward the frisbee players to catch the disk.",
      "The family on the picnic blanket will pack up their food as dark clouds appear in the sky."
    ]
  },
  {
    id: "sc_002",
    title: "Crowded Supermarket Checkout Area",
    category: "Services",
    imageFile: "images/sc_002_supermarket.svg",
    description: "A busy supermarket with multiple checkout lanes, shoppers with overflowing carts, and store clerks scanning items.",
    task3Prompt: "Describe what is happening in this supermarket scene in detail, including the locations of people and items.",
    task4Prompt: "Predict what will happen next in this supermarket checkout scene.",
    spatialHints: [
      "In the foreground at lane 2, a cashier is scanning a large box of cereal.",
      "Next to the cashier, a customer is reaching into her purse for a credit card.",
      "In the background aisle, a store worker is stacking cans on a tall shelf.",
      "To the far left, a child in a shopping cart is reaching for candy on a display stand."
    ],
    predictionTargets: [
      "The child reaching for candy will drop a candy box onto the floor.",
      "The cashier will hand the printed receipt to the customer after the card payment clears.",
      "The store worker stacking cans will need a stepladder to reach the top shelf."
    ]
  },
  {
    id: "sc_003",
    title: "Airport Departure Terminal Gate",
    category: "Travel",
    prompt: "Airport terminal gate with passengers waiting, boarding passes being checked, and luggage carts.",
    task3Prompt: "Describe the scene at the airport departure gate, specifying where people are standing and what they are doing.",
    task4Prompt: "Predict what will happen next at this airport departure gate.",
    imageFile: "images/sc_003_airport.svg",
    spatialHints: [
      "In the foreground on the left, a man is sleeping in a waiting chair with his suitcase beside him.",
      "In the center, a line of passengers with backpacks is forming near the boarding gate counter.",
      "Behind the counter, an airline agent is speaking into a microphone.",
      "In the background through the large glass window, a airplane is parked on the tarmac."
    ],
    predictionTargets: [
      "The airline agent will make an announcement for final boarding zone call.",
      "The sleeping passenger will wake up abruptly when his flight number is called.",
      "The line of passengers will move forward through the gate door onto the jetbridge."
    ]
  },
  {
    id: "sc_004",
    title: "Hospital Waiting Room",
    category: "Emergency & Health",
    imageFile: "images/sc_004_hospital.svg",
    description: "A hospital reception and waiting area with patients, receptionists, and medical staff.",
    task3Prompt: "Describe the hospital waiting room scene in detail.",
    task4Prompt: "Predict what will happen next in this hospital waiting room.",
    spatialHints: [
      "In the foreground, a woman with a bandaged arm is sitting near a magazine rack.",
      "At the reception desk in the center, a nurse in green scrubs is typing on a computer.",
      "To the right background, a doctor holding a clipboard is walking out of a hallway door."
    ],
    predictionTargets: [
      "The doctor holding the clipboard will call out the next patient's name.",
      "The nurse at reception will hand a clipboard with intake forms to a new visitor.",
      "The woman with the bandaged arm will stand up to enter the examination room."
    ]
  },
  {
    id: "sc_005",
    title: "Elementary School Science Fair",
    category: "School",
    imageFile: "images/sc_005_science_fair.svg",
    description: "A school gymnasium hosting a science fair with student display boards, science experiments, judges, and parents.",
    task3Prompt: "Describe what is taking place at this school science fair.",
    task4Prompt: "Predict what will happen next at the science fair.",
    spatialHints: [
      "In the center foreground, a boy is standing next to a papier-mâché volcano erupting red foam.",
      "To the left, a girl holding a poster about solar panels is explaining her project to a judge.",
      "In the background, a judge in a suit is writing notes on a scoring sheet."
    ],
    predictionTargets: [
      "The red foam from the volcano experiment will spill over onto the table tablecloth.",
      "The judge will award a gold ribbon sticker to the girl presenting the solar panel display.",
      "Parents in the background will take photographs of their children presenting."
    ]
  },
  {
    id: "sc_006",
    title: "Busy Restaurant Kitchen during Lunch Rush",
    category: "Workplace",
    imageFile: "images/sc_006_restaurant_kitchen.svg",
    description: "A commercial kitchen with chefs cooking at stoves, plating meals, and waiters picking up orders.",
    task3Prompt: "Describe the activity in this restaurant kitchen in detail.",
    task4Prompt: "Predict what will happen next in this restaurant kitchen.",
    spatialHints: [
      "In the foreground, a head chef is carefully garnishing a plate of pasta with fresh basil.",
      "To the right at the flaming stove, a cook is tossing vegetables in a sizzling wok.",
      "In the background, a waiter holding a tray is walking through double swinging doors."
    ],
    predictionTargets: [
      "The head chef will ring the order bell to signal that food is ready for pickup.",
      "The cook tossing vegetables will add sauce to the wok.",
      "The waiter will carry hot food plates out to a dining table."
    ]
  },
  {
    id: "sc_007",
    title: "Construction Site in a Downtown Area",
    category: "Workplace",
    imageFile: "images/sc_007_construction_site.svg",
    description: "An active building construction site with cranes, workers in hardhats, trucks, and scaffolding.",
    task3Prompt: "Describe what you see at this active construction site.",
    task4Prompt: "Predict what will happen next at the construction site.",
    spatialHints: [
      "In the foreground, two workers wearing yellow hardhats are reviewing blueprints on a wooden table.",
      "In the center background, a tall yellow crane is lifting a steel beam into the air.",
      "To the left, a cement mixer truck is pouring concrete into a wooden frame."
    ],
    predictionTargets: [
      "The crane operator will lower the steel beam onto the upper floor frame.",
      "The workers reviewing blueprints will walk over to direct the cement truck driver.",
      "Concrete workers will smooth out the newly poured foundation."
    ]
  },
  {
    id: "sc_008",
    title: "Lakeside Camping Site at Sunset",
    category: "Nature",
    imageFile: "images/sc_008_camping.svg",
    description: "A campsite next to a serene lake with tents, a campfire, canoes, and campers.",
    task3Prompt: "Describe the campsite scene near the lake.",
    task4Prompt: "Predict what will happen next at this campsite.",
    spatialHints: [
      "In the foreground center, a woman is roasting marshmallows over a crackling campfire.",
      "To the right, a blue dome tent is set up under tall pine trees.",
      "In the background lake, two campers in orange life jackets are paddling a red canoe toward the shore."
    ],
    predictionTargets: [
      "The campers in the canoe will pull their boat onto the wooden dock.",
      "The woman at the campfire will place a roasted marshmallow between graham crackers for s'mores.",
      "The campers will turn on lanterns as night falls."
    ]
  },
  {
    id: "sc_009",
    title: "Community Neighborhood Garage Sale",
    category: "Community",
    imageFile: "images/sc_009_garage_sale.svg",
    description: "A residential driveway with tables of second-hand clothes, books, toys, and neighbors browsing.",
    task3Prompt: "Describe the neighborhood garage sale scene.",
    task4Prompt: "Predict what will happen next at the garage sale.",
    spatialHints: [
      "In the center foreground, an elderly man is holding an antique lamp and examining its price tag.",
      "To the left, a young boy is testing a green skateboard on the smooth driveway.",
      "In the background near the open garage door, a seller is counting cash change in a metal box."
    ],
    predictionTargets: [
      "The elderly man will negotiate a lower price for the antique lamp with the seller.",
      "The young boy will ask his mother to purchase the skateboard.",
      "The seller will mark down prices on remaining items as afternoon approaches."
    ]
  },
  {
    id: "sc_010",
    title: "Public Swimming Pool on a Hot Summer Day",
    category: "Sports & Recreation",
    imageFile: "images/sc_010_swimming_pool.svg",
    description: "An outdoor community pool with swimmers, a lifeguard tower, diving board, and sun loungers.",
    task3Prompt: "Describe the public swimming pool scene in detail.",
    task4Prompt: "Predict what will happen next at the swimming pool.",
    spatialHints: [
      "In the background left, a teenager is standing at the tip of the high diving board preparing to jump.",
      "On the right elevated lifeguard chair, a lifeguard in a red shirt is holding a whistle and scanning the water.",
      "In the foreground shallow end, children are splashing around with inflatable beach balls."
    ],
    predictionTargets: [
      "The teenager on the diving board will perform a cannonball dive into the deep end.",
      "The lifeguard will blow her whistle if a swimmer runs on the wet pool deck.",
      "A family sitting on lawn chairs will apply sunscreen."
    ]
  }
];

// Generate 90 additional structured scenario definitions (sc_011 to sc_100) across 10 categories
const CATEGORY_NAMES = ["Public Places", "Travel", "Workplace", "Social & Events", "Home & Family", "Emergency & Health", "Sports & Recreation", "Nature & Outdoors", "Services & Shopping", "School & Education"];

const SCENARIO_TITLES = [
  "Subway Station during Evening Commute", "Farmers Market in Town Square", "Public Library Quiet Study Area", 
  "City Zoo Monkey Exhibit", "Art Gallery Exhibition Opening", "Car Repair Garage Shop", 
  "Veterinary Clinic Waiting Area", "Beach Lifeguard Station", "Skatepark Competition", 
  "Amusement Park Roller Coaster Entrance", "Fire Station Bay and Firefighters", "Wedding Reception Party",
  "Outdoor Musical Concert in the Park", "Ice Hockey Rink Game", "Bakery and Pastry Shop",
  "Botanical Garden Greenhouse", "Furniture Store Showroom", "High School Gymnasium Basketball Game",
  "Airport Luggage Baggage Carousel", "Hotel Front Desk Lobby", "Bowling Alley Lanes",
  "Pet Grooming Salon", "Community Center Craft Workshop", "Car Wash Station",
  "Ski Resort Mountain Slope", "Coffee Shop Cafe Patio", "Dentist Office Examination Room",
  "Flea Market Vintage Stalls", "Daycare Playground Area", "Harbor Marina Dock",
  "Bicycle Repair Shop", "Urban Rooftop Garden", "Haunted House Attraction",
  "Science Museum Interactive Exhibit", "Train Station Platform", "Tailor and Sewing Workshop",
  "Laundromat Washing Machines", "Campground Picnic Shelter", "Dog Training Park",
  "Food Truck Festival Street", "City Bus Interior Commute", "Electronics Store Service Desk",
  "Barbershop Hair Cutting", "Apple Orchard Fruit Picking", "Fish Market Fresh Display",
  "College Dormitory Lounge", "Juice Bar and Smoothie Shop", "Auto Showroom Vintage Cars",
  "Pottery Craft Studio", "Aquarium Underwater Tunnel", "Gas Station Convenience Store",
  "Florist Flower Shop", "Indoor Rock Climbing Wall", "Music Store Instrument Display",
  "Golf Course Putting Green", "Wildlife Rescue Center", "Pizzeria Pizza Oven Kitchen",
  "Outdoor Movie Theater", "Ice Cream Parlor Counter", "Bookstore Author Reading",
  "City Recycling Depot", "Horse Riding Arena Stables", "Shoe Store Fitting Area",
  "Mini Golf Course", "Warehouse Logistics Loading Dock", "Spa and Wellness Center",
  "Tailgate Party outside Stadium", "Astronomy Observatory Telescope", "High School Chemistry Lab",
  "Toy Store Play Zone", "Donut Bakery Kitchen", "Rowing Club Boat House",
  "Tire Replacement Garage", "Carnival Midway Games", "Pumpkin Patch Festival",
  "Indoor Trampoline Park", "Street Painter Artist Corner", "Community Blood Drive Clinic",
  "Sushi Bar Counter", "Waterpark Wave Pool", "Ferry Boat Upper Deck",
  "Vintage Vinyl Record Store", "Indoor Laser Tag Arena", "Community Food Bank Kitchen",
  "Archery Shooting Range", "Butterfly Conservatory", "Go-Kart Racing Track",
  "Microbrewery Tour Taproom", "Crossfit Gym Workout", "Outdoor Flea Market Antique Rugs"
];

for (let i = 11; i <= 100; i++) {
  const title = SCENARIO_TITLES[(i - 11) % SCENARIO_TITLES.length] + ` (#${i})`;
  const cat = CATEGORY_NAMES[(i - 1) % CATEGORY_NAMES.length];
  const scId = `sc_${i.toString().padStart(3, '0')}`;
  
  SCENARIO_PROMPTS.push({
    id: scId,
    title: title,
    category: cat,
    imageFile: `images/${scId}_scene.svg`,
    description: `A detailed illustrated scenario depicting ${title.toLowerCase()} with multiple people engaging in different activities.`,
    task3Prompt: `Look at the picture of the ${title.toLowerCase()} and describe as many details as you can to someone who cannot see it. Mention where people are located and what they are doing.`,
    task4Prompt: `Look at the same picture of the ${title.toLowerCase()} and predict what will happen next in this scene. Explain your logical reasons.`,
    spatialHints: [
      `In the foreground, key characters are actively participating in main ${cat.toLowerCase()} activities.`,
      `On the left side, an individual is preparing equipment or making a selection.`,
      `In the background, secondary figures are walking, observing, or talking.`,
      `On the right side, a staff member or participant is handling an important object.`
    ],
    predictionTargets: [
      `The main person in the foreground will complete their action and move to the next area.`,
      `The person on the left will ask for assistance or finish their task.`,
      `The situation in the background will develop further based on the present activity.`
    ]
  });
}
