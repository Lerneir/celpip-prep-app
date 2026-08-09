// CELPIP Speaking Task 3 (Describing a Scene) & Task 4 (Making Predictions)
// Official Standard Test Prompts:
// Task 3: 30s Prep | 60s Speaking ("Look at the picture and describe as many details as you can to someone who cannot see it.")
// Task 4: 30s Prep | 60s Speaking ("Look at the same picture and predict what will happen next in this scene.")
// ONLY includes scenarios with high-resolution realistic AI-generated JPG images.

const OFFICIAL_TASK3_PROMPT_TEXT = "Look at the picture and describe as many details as you can to someone who cannot see it. You have 30 seconds to prepare your response and 60 seconds to speak.";
const OFFICIAL_TASK4_PROMPT_TEXT = "Look at the same picture and predict what will happen next in this scene. You have 30 seconds to prepare your response and 60 seconds to speak.";

const SCENARIO_PROMPTS = [
  {
    id: "sc_001",
    title: "Busy City Park on a Sunny Saturday",
    category: "Public Places",
    imageFile: "images/task3_001.jpg",
    description: "A bustling city park filled with people enjoying outdoor activities. Features a fountain, picnic area, bicycle rider, dog walker, and teenagers playing frisbee.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a young boy on a red bicycle is riding near a stone fountain.",
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
    category: "Services & Shopping",
    imageFile: "images/task3_002.jpg",
    description: "A busy supermarket with multiple checkout lanes, cashiers scanning items, customers paying, and store clerks stocking shelves.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground at lane 2, a cashier is scanning a large box of cereal.",
      "Next to the cashier, a customer is reaching into her purse for a credit card.",
      "In the background aisle, a store worker is stacking canned food on a high shelf.",
      "To the far left, a child sitting in a shopping cart is reaching for candy on a display stand."
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
    imageFile: "images/task3_003.jpg",
    description: "An airport departure gate with waiting passengers, boarding line, airline agents, and a parked airplane outside the window.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground on the left, a man is sleeping in a waiting chair with his suitcase beside him.",
      "In the center, a line of passengers with backpacks is forming near the boarding gate counter.",
      "Behind the counter, an airline agent is speaking into a microphone.",
      "In the background through the large glass window, a commercial jet is parked on the tarmac."
    ],
    predictionTargets: [
      "The airline agent will make an announcement for final boarding zone call.",
      "The sleeping passenger will wake up abruptly when his flight number is called.",
      "The line of passengers will move forward through the gate door onto the jetbridge."
    ]
  },
  {
    id: "sc_004",
    title: "Hospital Reception Waiting Room",
    category: "Emergency & Health",
    imageFile: "images/task3_004.jpg",
    description: "A hospital reception and waiting area with patients, receptionists, medical staff, and examination room doors.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a woman with a bandaged arm is sitting near a magazine rack.",
      "At the reception desk in the center, a nurse in green scrubs is typing on a computer.",
      "To the right background, a doctor holding a clipboard is stepping out of an examination room door."
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
    category: "School & Education",
    imageFile: "images/task3_005.jpg",
    description: "A school gymnasium hosting a science fair with student display boards, science experiments, scoring judges, and parents.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
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
    imageFile: "images/task3_006.jpg",
    description: "A commercial kitchen with chefs cooking at stoves, garnishing meals, tossing woks, and waiters picking up food trays.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a head chef is carefully garnishing a plate of pasta with fresh basil.",
      "To the right at the flaming stove, a cook is tossing vegetables in a sizzling wok.",
      "In the background, a waiter holding a tray is pushing through swinging kitchen doors."
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
    imageFile: "images/task3_007.jpg",
    description: "An active building construction site with cranes, workers in hardhats reviewing blueprints, and a cement truck.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, two workers wearing yellow hardhats are reviewing blueprints on a wooden table.",
      "In the center background, a tall yellow crane is lifting a steel beam into the air.",
      "To the left, a cement mixer truck is pouring concrete into a foundation frame."
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
    category: "Nature & Outdoors",
    imageFile: "images/task3_008.jpg",
    description: "A campsite next to a serene lake with tents, a campfire, canoes, and campers enjoying the sunset.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
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
    category: "Home & Family",
    imageFile: "images/task3_009.jpg",
    description: "A residential driveway with tables of second-hand clothes, antique lamps, toys, a boy on a skateboard, and neighbors browsing.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
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
    imageFile: "images/task3_010.jpg",
    description: "An outdoor community pool with swimmers, a lifeguard tower, high diving board, and children splashing.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
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
  },
  {
    id: "sc_011",
    title: "Subway Station during Evening Commute",
    category: "Public Places",
    imageFile: "images/task3_011.jpg",
    description: "A busy underground subway platform with arriving train, waiting passengers behind safety lines, and ticket machines.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, passengers are waiting behind the yellow safety line on the concrete platform.",
      "To the left, a silver subway train is pulling into the station with lights shining.",
      "In the background near the ticket machines, a commuter is checking a route map on his phone."
    ],
    predictionTargets: [
      "The subway doors will slide open and waiting passengers will step inside.",
      "The commuter checking his phone will walk toward the boarding area.",
      "An automated announcement will sound over the station speakers."
    ]
  },
  {
    id: "sc_012",
    title: "Farmers Market in Town Square",
    category: "Services & Shopping",
    imageFile: "images/task3_012.jpg",
    description: "An outdoor farmers market with wooden stalls filled with fresh produce, flowers, bread, and shoppers carrying tote bags.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, a shopper carrying a cloth tote bag is inspecting fresh red apples.",
      "To the left stall, a farmer is weighing tomatoes on a hanging metal scale.",
      "To the right, a bakery vendor is arranging freshly baked loaves of sourdough bread."
    ],
    predictionTargets: [
      "The shopper inspecting apples will buy a bag of fruit from the vendor.",
      "The farmer will place the weighed tomatoes into a paper bag.",
      "More local residents will gather as lunchtime approaches."
    ]
  },
  {
    id: "sc_013",
    title: "Public Library Quiet Study Area",
    category: "School & Education",
    imageFile: "images/task3_013.jpg",
    description: "A quiet university library reading hall with students studying at wooden desks with laptops, and a librarian shelving books.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, a student is typing on a laptop with open textbooks scattered around.",
      "To the left, another student is taking handwritten notes with a pen.",
      "In the background, a librarian pushing a book cart is placing books onto tall wooden shelves."
    ],
    predictionTargets: [
      "The student typing on the laptop will close her textbook and take a study break.",
      "The librarian will finish returning all books to the shelves.",
      "A student will walk to the front counter to check out a stack of books."
    ]
  }
];
