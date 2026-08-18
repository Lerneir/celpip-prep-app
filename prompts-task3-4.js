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
  },
  {
    id: "sc_014",
    title: "Corporate Office Meeting Room",
    category: "Workplace",
    imageFile: "images/task3_014.jpg",
    description: "A corporate meeting room with a manager presenting charts at a whiteboard to seated colleagues around a conference table with laptops and coffee cups.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a manager is standing at a whiteboard pointing at bar charts and pie graphs.",
      "Around the conference table, four colleagues are seated with laptops open and coffee cups nearby.",
      "Through the glass walls in the background, an open-plan office with other employees is visible.",
      "On the table, printed reports and notebooks are spread out next to a conference phone."
    ],
    predictionTargets: [
      "The manager will finish the presentation and open the floor for questions from the team.",
      "A colleague will stand up to write a new idea on the whiteboard.",
      "The team will take a coffee break before the next agenda item."
    ]
  },
  {
    id: "sc_015",
    title: "Dentist's Office Examination Room",
    category: "Emergency & Health",
    imageFile: "images/task3_015.jpg",
    description: "A dental clinic with a dentist examining a patient in a reclined chair while a hygienist stands nearby with tools.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a dentist wearing a white coat and mask is leaning over a patient in a reclined dental chair.",
      "To the right, a dental hygienist is holding a tray of metal instruments.",
      "In the background, a monitor on the wall displays dental x-ray images.",
      "On the counter, supplies including gloves, cotton rolls, and a small mirror are neatly arranged."
    ],
    predictionTargets: [
      "The dentist will review the x-ray images on the monitor and explain the findings to the patient.",
      "The hygienist will hand the dentist a specific tool from the instrument tray.",
      "The patient will rinse their mouth after the examination is complete."
    ]
  },
  {
    id: "sc_016",
    title: "Family Moving Day in Suburbia",
    category: "Home & Family",
    imageFile: "images/task3_016.jpg",
    description: "A suburban driveway with a family loading boxes and furniture into a large moving truck on a sunny day.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a father is carrying a heavy cardboard box up the ramp of a large moving truck.",
      "To the left, a mother is walking carefully while holding a potted plant with both hands.",
      "Near the front door, a child is carrying a stuffed teddy bear.",
      "On the driveway, furniture including a couch and bookshelf is waiting to be loaded."
    ],
    predictionTargets: [
      "The father will stack the box inside the truck and come back for the furniture pieces.",
      "The mother will place the potted plant safely in the front seat of the family car.",
      "Neighbors will come over to help carry the heavy couch into the moving truck."
    ]
  },
  {
    id: "sc_017",
    title: "Busy Public Beach on a Summer Day",
    category: "Nature & Outdoors",
    imageFile: "images/task3_017.jpg",
    description: "A crowded public beach with families sunbathing, children building sandcastles, a lifeguard tower, and swimmers in the ocean.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, children are building a sandcastle near the water's edge with small plastic shovels.",
      "To the left, a lifeguard is sitting in a tall wooden tower scanning the water.",
      "In the middle ground, families are relaxing on towels and beach chairs under colorful umbrellas.",
      "In the background, a couple is walking along the shoreline with waves rolling in."
    ],
    predictionTargets: [
      "A wave will wash over the sandcastle and the children will start rebuilding it.",
      "The lifeguard will blow a whistle to warn swimmers who are going too far out.",
      "An ice cream vendor will push a cart along the beach and attract a line of customers."
    ]
  },
  {
    id: "sc_018",
    title: "Family Restaurant during Dinner Service",
    category: "Services & Shopping",
    imageFile: "images/task3_018.jpg",
    description: "A casual restaurant interior with a waitress serving food to a family, other diners at nearby tables, and a host stand at the entrance.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a waitress is carrying two plates of food toward a family of four seated at a table.",
      "To the right, other diners are enjoying their meals with wine glasses and menus on the table.",
      "Near the entrance, a host stand with a 'Please Wait to be Seated' sign is visible.",
      "In the background, a brick accent wall displays framed artwork and warm pendant lighting."
    ],
    predictionTargets: [
      "The waitress will set the plates down and ask if the family needs anything else.",
      "The host at the entrance will greet a new group of guests and lead them to a table.",
      "The family will ask for the dessert menu after finishing their main course."
    ]
  },
  {
    id: "sc_019",
    title: "Modern Gym and Fitness Center",
    category: "Sports & Recreation",
    imageFile: "images/task3_019.jpg",
    description: "A modern gym interior with a trainer spotting someone lifting weights, people on treadmills, and a group doing stretching exercises.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a personal trainer is spotting a woman doing bench press with dumbbells.",
      "In the background, a man is running on a treadmill with headphones on.",
      "To the right, a small group is doing stretching exercises on yoga mats.",
      "Along the wall, large mirrors reflect the gym floor and a water bottle station."
    ],
    predictionTargets: [
      "The woman lifting weights will finish her set and sit up to drink from her water bottle.",
      "The personal trainer will adjust the weight amount for the next set of exercises.",
      "The group on yoga mats will transition from stretching to a plank position."
    ]
  },
  {
    id: "sc_020",
    title: "Children's Playground in a Suburban Park",
    category: "Home & Family",
    imageFile: "images/task3_020.jpg",
    description: "A colorful children's playground with kids on slides, swings, and climbing equipment while parents watch from nearby benches.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a toddler is sliding down a yellow slide while a parent waits at the bottom with open arms.",
      "To the left, two children are swinging high on a swing set, pumping their legs.",
      "On a park bench to the right, a mother is sitting and watching while checking her phone.",
      "In the background, trees and green grass surround the play area with a rubber safety surface."
    ],
    predictionTargets: [
      "The parent at the bottom of the slide will catch the toddler and help them climb up again.",
      "One of the children on the swings will jump off at the highest point.",
      "The mother on the bench will call out to her child that it's time to go home."
    ]
  },
  {
    id: "sc_021",
    title: "Cozy Downtown Coffee Shop",
    category: "Services & Shopping",
    imageFile: "images/task3_021.jpg",
    description: "A cozy coffee shop with a barista making latte art, a customer paying at the counter, and students studying at corner tables.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "Behind the counter, a barista is carefully pouring steamed milk to create latte art.",
      "At the register, a customer is tapping their phone to pay for their order.",
      "In the corner, two college students are studying with laptops and textbooks open.",
      "A glass display case near the counter shows pastries, muffins, and croissants."
    ],
    predictionTargets: [
      "The barista will slide the finished latte across the counter and call the customer's name.",
      "The students will order refills and continue studying for their exam.",
      "More customers will arrive during the morning rush and form a line at the counter."
    ]
  },
  {
    id: "sc_022",
    title: "Auto Mechanic Repair Shop",
    category: "Services & Shopping",
    imageFile: "images/task3_022.jpg",
    description: "An auto repair shop with mechanics working on vehicles, one under a car hood and another checking tires on a hydraulic lift.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a mechanic in blue coveralls is leaning under the hood of a sedan using a wrench.",
      "To the right, another mechanic is inspecting tire pressure on a car raised on a hydraulic lift.",
      "On the back wall, tools hang on a pegboard alongside oil cans and diagnostic equipment.",
      "Near the front desk, a customer in casual clothes is speaking to the shop manager."
    ],
    predictionTargets: [
      "The mechanic under the hood will close it and start the engine to test the repair.",
      "The shop manager will hand the customer an invoice and explain the repair costs.",
      "The mechanic on the lift will rotate the tires and lower the car back to the ground."
    ]
  },
  {
    id: "sc_023",
    title: "University Lecture Hall during Class",
    category: "School & Education",
    imageFile: "images/task3_023.jpg",
    description: "A large university lecture hall with a professor presenting slides at a podium while students take notes in tiered seating.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "At the front podium, a professor is pointing at a projection screen showing graphs and data.",
      "In the tiered seats, students are taking notes — some typing on laptops, others writing in notebooks.",
      "In the front row, a student is raising a hand to ask a question.",
      "The large room has acoustic panels on the walls and bright overhead lighting."
    ],
    predictionTargets: [
      "The professor will pause the lecture and call on the student raising their hand.",
      "The professor will advance to the next slide and introduce a new topic.",
      "Students will begin packing up their bags as the class nears its scheduled end time."
    ]
  },
  {
    id: "sc_024",
    title: "Veterinary Clinic Examination Room",
    category: "Emergency & Health",
    imageFile: "images/task3_024.jpg",
    description: "A veterinary clinic with a vet examining a golden retriever on an examination table while the owner comforts the dog.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a veterinarian in a white coat is using a stethoscope to examine a golden retriever on the table.",
      "To the left, the dog's owner is petting the dog gently to keep it calm.",
      "On the counter, medical supplies, a pet scale, and jars of dog treats are arranged.",
      "On the wall behind them, vaccination charts and animal health posters are displayed."
    ],
    predictionTargets: [
      "The veterinarian will give the dog a vaccination shot and offer it a treat from the jar.",
      "The owner will lift the dog off the table and put its leash back on.",
      "The vet will write a prescription and schedule a follow-up appointment."
    ]
  },
  {
    id: "sc_025",
    title: "Fire Station Emergency Response",
    category: "Emergency & Health",
    imageFile: "images/task3_025.jpg",
    description: "A fire station with firefighters responding to an emergency — pulling hoses off a fire truck while the chief coordinates via radio.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a bright red fire truck is parked with its doors open and equipment visible.",
      "Two firefighters in full gear are pulling a hose off the side of the truck.",
      "Near the station entrance, another firefighter is putting on a helmet.",
      "To the right, a fire chief is speaking urgently into a handheld radio."
    ],
    predictionTargets: [
      "The firefighters will connect the hose to a nearby fire hydrant and begin spraying water.",
      "The fire chief will direct the crew toward the location of the emergency.",
      "More firefighters will arrive in a second truck to provide backup support."
    ]
  },
  {
    id: "sc_026",
    title: "Outdoor Garden Wedding Reception",
    category: "Home & Family",
    imageFile: "images/task3_026.jpg",
    description: "An outdoor wedding reception in a garden with the couple cutting a cake, guests clapping, string lights, and a photographer capturing the moment.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a bride and groom are standing together cutting a multi-tier white wedding cake.",
      "Around them, seated guests at round tables decorated with flower centerpieces are clapping.",
      "Overhead, string lights are draped between trees creating a warm golden glow.",
      "To the right, a photographer is kneeling to capture the cake-cutting moment."
    ],
    predictionTargets: [
      "The couple will serve each other the first slice of cake while guests cheer.",
      "The DJ in the corner booth will start playing music for the first dance.",
      "Guests will line up to congratulate the newlyweds and take group photos."
    ]
  }
];
