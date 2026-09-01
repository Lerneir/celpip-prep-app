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
  },
  {
    id: "sc_027",
    title: "City Bus Stop & Street Corner Rush Hour",
    category: "Public Places",
    imageFile: "images/task3_027.jpg",
    description: "A busy city street corner during morning rush hour with a bus approaching, commuters waiting at the shelter, a newsstand, and a crosswalk.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a commuter with a stroller is crossing the street at the pedestrian crosswalk.",
      "To the right, a line of commuters is waiting inside and outside the glass bus shelter.",
      "In the background, a large municipal transit bus is approaching the curb with its signal lights on.",
      "To the left, a newsstand vendor is handing a folded newspaper to a businessman."
    ],
    predictionTargets: [
      "The bus will pull up to the stop, open its doors, and passengers will board.",
      "The businessman will pay the newsstand vendor and continue walking to work.",
      "The pedestrian with the stroller will safely reach the opposite sidewalk."
    ]
  },
  {
    id: "sc_028",
    title: "Community Center Painting & Art Class",
    category: "School & Education",
    imageFile: "images/task3_028.jpg",
    description: "A bright art studio class with an instructor demonstrating painting on canvas while students practice on easels and pottery wheels.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, an art instructor is pointing to a canvas easel while explaining brushwork to students.",
      "Around the room, three students are holding paint palettes and adding color to their canvases.",
      "In the background, another student is shaping a clay vase on a pottery wheel.",
      "Art supplies, color mixing trays, and finished paintings are arranged on tables and walls."
    ],
    predictionTargets: [
      "The instructor will walk over to check the students' individual paintings and give advice.",
      "The student at the pottery wheel will use a sponge to smooth the clay surface.",
      "Students will wash their brushes in water jars at the end of class."
    ]
  },
  {
    id: "sc_029",
    title: "Hardware Store Home Improvement Aisle",
    category: "Services & Shopping",
    imageFile: "images/task3_029.jpg",
    description: "A hardware store paint aisle with a worker mixing paint on a shaker machine, customers checking swatches, and a flatbed cart with lumber.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a store clerk in a green apron is operating a paint mixing machine.",
      "To the right, a couple is comparing color swatches against a wood sample board.",
      "In the aisle, a customer is pushing a heavy flatbed cart loaded with wooden boards.",
      "High metal shelves are filled with paint cans, brushes, and home improvement tools."
    ],
    predictionTargets: [
      "The clerk will hand the mixed paint can to the waiting customer.",
      "The couple will select a paint shade and ask the employee to mix two gallons.",
      "The customer with the flatbed cart will head toward the checkout register."
    ]
  },
  {
    id: "sc_030",
    title: "Busy Public Post Office",
    category: "Services & Shopping",
    imageFile: "images/task3_030.jpg",
    description: "A busy post office with a postal clerk weighing packages at the counter, a line of customers, self-service kiosks, and P.O. boxes.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "At the counter, a postal clerk is placing a cardboard package on a digital scale.",
      "A customer across the counter is holding shipping labels and a wallet.",
      "In the main lobby, a queue of people holding envelopes and boxes is waiting.",
      "Along the back wall, rows of metal post office boxes and self-service kiosks are visible."
    ],
    predictionTargets: [
      "The clerk will affix postage stamps to the package and place it on a conveyor belt.",
      "The next customer in line will step forward to the vacant service counter.",
      "A customer at the automated kiosk will print a shipping label."
    ]
  },
  {
    id: "sc_031",
    title: "Outdoor Winter Ice Skating Rink",
    category: "Sports & Recreation",
    imageFile: "images/task3_031.jpg",
    description: "An outdoor winter ice rink with skaters enjoying the ice, a beginner holding the railing, parents helping kids, and spectators drinking hot cocoa.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center of the rink, experienced skaters are gliding smoothly across the ice.",
      "Along the edge, a beginner skater is holding tightly onto the wooden safety railing.",
      "To the left, a parent is holding both hands of a small child learning to skate.",
      "On benches outside the rink, spectators wearing winter coats are sipping hot cocoa."
    ],
    predictionTargets: [
      "The beginner skater will let go of the railing and take a few independent steps.",
      "The small child will glide forward with the parent's encouragement.",
      "Skaters will clear the rink when the ice resurfacing Zamboni machine enters."
    ]
  },
  {
    id: "sc_032",
    title: "Department Store Clothing Section",
    category: "Services & Shopping",
    imageFile: "images/task3_032.jpg",
    description: "A clothing store with shoppers browsing coat racks, a mannequin near a sale sign, fitting room queue, and checkout counter.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a customer is checking the price tag on a winter coat on a rack.",
      "Near a promotional sign, a mannequin is dressed in a stylish jacket and scarf display.",
      "To the left, a line of shoppers carrying clothes on hangers is waiting outside the fitting rooms.",
      "In the background, a cashier is scanning items and folding clothes into shopping bags."
    ],
    predictionTargets: [
      "The customer checking the coat will try it on in front of a nearby mirror.",
      "A shopper exiting the fitting room will purchase the items that fit well.",
      "The cashier will hand a receipt and shopping bag to the customer."
    ]
  },
  {
    id: "sc_033",
    title: "Community Neighborhood Garden Allotment",
    category: "Nature & Outdoors",
    imageFile: "images/task3_033.jpg",
    description: "A lively community garden with volunteers tending raised vegetable beds, watering plants, pushing soil wheelbarrows, and harvesting produce.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a gardener is using a green watering can to water tomato plants in a raised bed.",
      "To the right, a volunteer is pushing a wheelbarrow filled with rich compost soil.",
      "In the center background, an elderly gardener is picking ripe red tomatoes into a basket.",
      "Tool sheds, trellises with climbing beans, and colorful flower beds border the garden pathways."
    ],
    predictionTargets: [
      "The volunteer pushing the wheelbarrow will dump the compost into a new garden bed.",
      "The gardener harvesting tomatoes will take the fresh produce home.",
      "Other community members will arrive with gardening tools to weed their plots."
    ]
  },
  {
    id: "sc_034",
    title: "Busy Pet Grooming Salon",
    category: "Services & Shopping",
    imageFile: "images/task3_034.jpg",
    description: "A pet grooming salon with groomers washing a dog in a stainless tub, trimming a poodle's fur, and pets waiting in carriers.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the washing area, a groomer in an apron is lathering soap suds on a large golden retriever in a tub.",
      "On an elevated grooming table, another groomer is using scissors to trim a poodle's coat.",
      "On a bench near the entrance, a cat carrier sits while an owner waits.",
      "Shelves on the wall hold shampoos, blow dryers, clippers, and pet bandanas."
    ],
    predictionTargets: [
      "The groomer will rinse the retriever and dry its coat with a specialized pet blow dryer.",
      "The poodle will receive a decorative bandana after its haircut is finished.",
      "The owner in the waiting area will pick up their groomed pet."
    ]
  },
  {
    id: "sc_035",
    title: "Outdoor Town Square Street Food Festival",
    category: "Public Places",
    imageFile: "images/task3_035.jpg",
    description: "A bustling street food festival with food trucks selling meals, visitors dining at picnic tables, a musician performing on stage, and recycling stations.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "Along the perimeter, colorful food trucks are serving tacos, burgers, and ice cream to lines of customers.",
      "In the center area, families and friends are sitting at wooden picnic tables enjoying food.",
      "On a small wooden stage in the background, a acoustic guitarist is singing into a microphone.",
      "Decorative string lights and flags hang above recycling and waste sorting bins."
    ],
    predictionTargets: [
      "A customer at the taco truck will receive their food tray and search for an open seat.",
      "Applauding audience members will throw coins into the street musician's guitar case.",
      "Festival workers will clear empty food containers from the picnic tables."
    ]
  },
  {
    id: "sc_036",
    title: "Train Station Ticket Concourse",
    category: "Travel",
    imageFile: "images/task3_036.jpg",
    description: "A high-ceiling train station concourse with travelers looking up at departure boards, buying tickets at kiosks, and walking with luggage.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "High on the wall, a large digital departure schedule screen displays train status and gate numbers.",
      "Below the board, travelers with rolling suitcases are looking up to find their platform.",
      "To the left, passengers are purchasing tickets using touchscreen self-service machines.",
      "Near the center, an information booth attendant is giving directions to a tourist holding a map."
    ],
    predictionTargets: [
      "When a platform gate number is posted, a group of passengers will head toward the turnstiles.",
      "The ticket machine will print a paper ticket and receipt for the traveler.",
      "The tourist will walk toward the platform pointed out by the information attendant."
    ]
  },
  {
    id: "sc_037",
    title: "Backyard Children's Birthday Party",
    category: "Home & Family",
    imageFile: "images/task3_037.jpg",
    description: "A festive backyard birthday party with kids playing party games, a cake table with balloons, a parent at the grill, and stacked gifts.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the grass, a blindfolded child is trying to pin a paper tail on a donkey poster while friends cheer.",
      "At a decorated outdoor table, a multi-layer birthday cake with candles sits next to juice cups and balloons.",
      "Near the patio, a parent wearing an apron is flipping hot dogs on a barbecue grill.",
      "A pile of colorful wrapped gift boxes is arranged on a table beside party hats."
    ],
    predictionTargets: [
      "The blindfolded child will pin the tail onto the poster, causing everyone to laugh.",
      "The parent will gather the children around the table to blow out the birthday candles.",
      "The birthday child will open the wrapped presents after eating cake."
    ]
  },
  {
    id: "sc_038",
    title: "Interactive Children's Science Museum",
    category: "School & Education",
    imageFile: "images/task3_038.jpg",
    description: "A hands-on science museum with kids interacting with glowing plasma globes, a dinosaur skeleton exhibit, space suit model, and museum guide.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, children are touching a glowing glass plasma ball and watching light tendrils follow their fingers.",
      "In the center background, a museum educator is explaining a towering T-Rex dinosaur skeleton model to students.",
      "To the right, a replica astronaut suit is displayed inside a protective glass casing.",
      "Interactive levers, pulleys, and digital screens are positioned along the gallery walls."
    ],
    predictionTargets: [
      "The educator will ask the students a question about dinosaur fossils.",
      "A child will press a button on the astronaut display to hear an audio explanation.",
      "The group will move on to the physics and energy exhibit section."
    ]
  },
  {
    id: "sc_039",
    title: "Hotel Lobby Reception & Concierge",
    category: "Travel",
    imageFile: "images/task3_039.jpg",
    description: "A grand hotel lobby with guests checking in at the marble reception desk, a bellhop pushing a brass luggage cart, and plush seating areas.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "At the marble front desk, a receptionist is handing room keycards to a newly arrived couple.",
      "Beside them, a bellhop in uniform is loading heavy suitcases onto a brass luggage cart.",
      "To the left, a concierge is pointing at a city map while answering questions for a guest.",
      "In the lobby center, guests are relaxing on plush velvet armchairs around a glass coffee table."
    ],
    predictionTargets: [
      "The bellhop will push the luggage cart toward the elevator bank to escort guests to their room.",
      "The receptionist will offer the couple assistance with dinner reservations or spa bookings.",
      "The guest speaking to the concierge will take the city map and head out the front entrance."
    ]
  },
  {
    id: "sc_040",
    title: "Outdoor Farmers Market & Artisan Stalls",
    category: "Services & Shopping",
    imageFile: "images/task3_040.jpg",
    description: "A lively outdoor weekend farmers market with wooden stalls selling fresh apples and local cheeses, shoppers with tote bags, and a violinist musician.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, an elderly female vendor in an apron is weighing red apples on a metal scale for a customer.",
      "To the right, a violinist is sitting on a stool playing music with an open instrument case for tips.",
      "At the artisan cheese stall on the right, a vendor is offering a cheese sample to a shopper.",
      "In the background, shoppers holding canvas bags are strolling between colorful canopy stalls."
    ],
    predictionTargets: [
      "The customer buying apples will place the fruit into her cloth tote bag after paying.",
      "A passerby will drop cash into the violinist's open instrument case.",
      "The cheese vendor will wrap a block of cheddar for the shopper."
    ]
  },
  {
    id: "sc_041",
    title: "Airport Security Screening Checkpoint",
    category: "Travel",
    imageFile: "images/task3_041.jpg",
    description: "An airport security area with travelers placing laptops into plastic bins on a conveyor belt while security officers monitor x-ray screens.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a businesswoman is placing her laptop and shoes into a grey plastic security bin.",
      "To the right, a seated security officer is carefully watching dual x-ray monitors showing luggage scans.",
      "Behind the conveyor, a passenger in a mask is walking through a metal detector archway.",
      "In the background through the window, an airplane is visible on the runway tarmac."
    ],
    predictionTargets: [
      "The conveyor belt will carry the grey bins into the x-ray machine for screening.",
      "The security officer at the metal detector will signal the passenger that they may proceed.",
      "The businesswoman will collect her belongings at the end of the belt and put her shoes on."
    ]
  },
  {
    id: "sc_042",
    title: "Indoor Family Bowling Alley",
    category: "Sports & Recreation",
    imageFile: "images/task3_042.jpg",
    description: "An indoor bowling alley with a bowler releasing a ball down the lane, a family eating pizza at a table, shoe rental desk, and overhead score screens.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center foreground, a man in a striped shirt is releasing a black bowling ball down lane 4.",
      "To the left, a family of four is seated at a table eating slices of pizza from a box.",
      "Overhead, an electronic monitor displays current scores for players Jame and Cople.",
      "In the background right, an employee behind the shoe rental counter is holding bowling shoes."
    ],
    predictionTargets: [
      "The bowling ball will roll down the wooden lane and knock down ten pins.",
      "The electronic scoreboard will update with a strike symbol.",
      "The family will finish eating pizza and take turns taking their bowling shots."
    ]
  },
  {
    id: "sc_043",
    title: "Community Bottle & Recycling Depot",
    category: "Public Places",
    imageFile: "images/task3_043.jpg",
    description: "A recycling drop-off center where workers and residents sort glass bottles, aluminum cans, and plastics into large color-coded bins.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, people are sorting green glass bottles and plastic jugs into large blue and green recycling bins.",
      "To the right, a worker in a high-visibility safety vest is operating a yellow cardboard box baling machine.",
      "In the background, a garbage truck is unloading recyclable paper products.",
      "Signage above the sorting bay indicates accepted materials including glass, plastic, and aluminum."
    ],
    predictionTargets: [
      "The worker operating the baler will compress the cardboard into a tight bundle.",
      "The woman sorting glass bottles will empty her cardboard box into the green bin.",
      "The recycling truck will lower its hydraulic bed after dumping recyclable materials."
    ]
  },
  {
    id: "sc_044",
    title: "Lakeside Campground Dock & Canoe Launch",
    category: "Nature & Outdoors",
    imageFile: "images/task3_044.jpg",
    description: "A lakeside camping area with people fishing off a wooden dock, two campers launching a red canoe, and tents set up under pine trees.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground right, a man and woman are launching a red canoe into the clear blue lake water.",
      "To the left on the wooden dock, an older man and child are holding fishing rods over the water.",
      "In the background right, smoke rises from a crackling campfire near green camping tents.",
      "Across the lake, forest-covered hills under a cloudy sky frame the peaceful nature scene."
    ],
    predictionTargets: [
      "The campers in the red canoe will paddle across the lake toward the far shore.",
      "The child fishing on the dock will feel a tug on the fishing line and reel in a fish.",
      "The people by the campfire will add another log to keep the fire burning."
    ]
  },
  {
    id: "sc_045",
    title: "Dental Hygiene Training Laboratory",
    category: "School & Education",
    imageFile: "images/task3_045.jpg",
    description: "A dental hygiene vocational lab where students in scrubs practice techniques on mannequin heads while an instructor evaluates with a clipboard.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, dental students in blue scrubs are practicing with dental tools on mannequin heads mounted on chairs.",
      "In the center, an instructor wearing glasses is taking notes on a clipboard while watching a student.",
      "Overhead dental lamps illuminate each work station equipped with tray tools and mouth mirrors.",
      "Educational anatomical charts showing tooth structure are hanging on the classroom wall."
    ],
    predictionTargets: [
      "The instructor will point out proper tool angle to the student and provide feedback.",
      "The student will adjust the overhead dental lamp to get a better view of the mannequin's teeth.",
      "Students will sanitize their instruments in cold tray solution when the practice session ends."
    ]
  },
  {
    id: "sc_046",
    title: "City Zoo Underwater Penguin Exhibit",
    category: "Public Places",
    imageFile: "images/task3_046.jpg",
    description: "A city zoo exhibit with children watching penguins dive underwater through a large glass wall while a zookeeper feeds fish from a rock ledge.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, children and parents are pressed against a large glass window watching penguins swim rapidly underwater.",
      "To the right on a rocky outcrop, a zookeeper in uniform is tossing fish from a metal bucket to penguins.",
      "A schedule board on the wall shows 'Feeding Time: 11:00 AM & 2:00 PM'.",
      "In the background, outdoor walking paths through the zoo park are visible."
    ],
    predictionTargets: [
      "A penguin standing on the rock will dive into the water to catch a fish tossed by the keeper.",
      "The children watching through the glass will cheer and follow the swimming penguin with their eyes.",
      "The zookeeper will finish emptying the fish bucket and answer questions from the crowd."
    ]
  },
  {
    id: "sc_047",
    title: "Bakery Commercial Kitchen & Front Counter",
    category: "Services & Shopping",
    imageFile: "images/task3_047.jpg",
    description: "A dual-view bakery showing a baker pulling warm croissants from an oven on the left, and a cashier serving a customer at the pastry case on the right.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "On the left in the kitchen area, a baker in a white hat is pulling a metal tray of golden croissants from a large oven.",
      "On the right at the front counter, a smiling cashier is handing a bakery box to an elderly customer.",
      "The glass display case below is filled with chocolate cakes, fruit pies, and cinnamon rolls.",
      "Menu boards on the wall list prices for hot coffee, tea, croissants, and fresh bread loaves."
    ],
    predictionTargets: [
      "The baker will transfer the hot croissants onto cooling racks in the kitchen area.",
      "The customer will pay for her pastry box and thank the cashier.",
      "The cashier will restock the display case with newly baked goods."
    ]
  },
  {
    id: "sc_048",
    title: "Outdoor Flea Market & Vintage Books",
    category: "Public Places",
    imageFile: "images/task3_048.jpg",
    description: "A vibrant outdoor school flea market with tables of grandfather clocks, vinyl records, retro denim jackets, and shoppers browsing goods.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, tables are displayed with wooden antique clocks and stacks of vintage hardcover books.",
      "In the center, a shopper is browsing through crates labeled 'Rock' and 'Jazz' vinyl records.",
      "To the right, two young shoppers are examining denim and leather coats on a standing clothing rack.",
      "In the background, colorful vendor tents line the grassy lawn in front of a school building."
    ],
    predictionTargets: [
      "The shopper browsing vinyl records will choose an album to buy from the vendor.",
      "The teenager trying on the retro jacket will ask for the price.",
      "The vendor will wrap the antique clock in bubble wrap for a customer."
    ]
  },
  {
    id: "sc_049",
    title: "Automated Drive-Through Car Wash",
    category: "Services & Shopping",
    imageFile: "images/task3_049.jpg",
    description: "An automated car wash tunnel where a sedan is covered in white soap suds under large rotating blue foam brushes, with an attendant spraying high-pressure water.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a blue sedan is moving along the conveyor belt through rotating blue foam wash brushes.",
      "Thick white soap suds cover the hood and windshield of the vehicle.",
      "To the right, a car wash attendant in a yellow safety vest is spraying the wheels with a high-pressure water hose.",
      "In the background, a line of cars is waiting outside the entrance under a 'Wash in Progress' digital sign."
    ],
    predictionTargets: [
      "The sedan will move into the drying zone where high-powered air blowers will dry the vehicle.",
      "The next car in line will pull forward onto the automated conveyor track.",
      "The attendant will signal the driver to put their car in neutral."
    ]
  },
  {
    id: "sc_050",
    title: "Children's Library Storytime Corner",
    category: "School & Education",
    imageFile: "images/task3_050.jpg",
    description: "A cozy children's section in a public library where kids sit on an alphabet rug listening to a librarian read a picture book aloud.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center left, a librarian with glasses is holding open a large picture book and reading to children.",
      "In the center, young children are sitting cross-legged on a colorful alphabet rug listening attentively.",
      "To the right, parents are sitting on small chairs watching their kids.",
      "The background features bookshelves organized by 'Fiction' and 'Non-Fiction', stuffed animal bears, and a forest wall mural."
    ],
    predictionTargets: [
      "The librarian will turn the page of the storybook and ask the kids what they think happens next.",
      "The children will raise their hands to answer the librarian's question.",
      "After storytime finishes, the kids will pick out books to borrow and bring home."
    ]
  },
  {
    id: "sc_052",
    title: "High School Basketball Gymnasium Match",
    category: "Sports & Recreation",
    imageFile: "images/task3_052.jpg",
    description: "An energetic high school basketball game with players in red and blue jerseys dribbling down court, a referee blowing a whistle, and packed bleachers.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground court area, a player in a red jersey (#8) is dribbling the basketball past a defender in a blue jersey (#12).",
      "To the right, a referee in a striped shirt is blowing his whistle and signaling with raised arms.",
      "In the background bleachers, a large crowd of cheering fans and students in team colors are waving banners.",
      "High on the back wall, an electronic scoreboard displays 'HOME 54 - GUEST 52' with 1:48 remaining."
    ],
    predictionTargets: [
      "The player in the red jersey will pass the basketball to a teammate near the key for a shot.",
      "The crowd in the bleachers will cheer loudly if the team scores a basket.",
      "The referee will signal a foul call and award free throws."
    ]
  },
  {
    id: "sc_051",
    title: "Indoor Botanical Garden Glass Greenhouse",
    category: "Nature & Outdoors",
    imageFile: "images/task3_051.jpg",
    description: "A lush indoor greenhouse with visitors walking on a stone path admiring orchids and palm trees, a gardener pruning leaves, and a koi fish pond with a waterfall.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground left, a small stone waterfall flows into a pond filled with orange and white koi fish.",
      "To the right, a gardener wearing a green cap and apron is using shears to prune potted tropical plant leaves.",
      "Along the stone pathway in the center, visitors are walking and admiring vibrant pink and yellow orchid displays.",
      "Overhead, a tall curved glass greenhouse ceiling frames lush palm trees and hanging tropical flora."
    ],
    predictionTargets: [
      "The gardener will collect the trimmed leaves in a bucket and move to the next potted plant.",
      "The visitors will pause to take photos of the vibrant orchid flowers.",
      "The koi fish will swim toward the edge of the pond as a visitor leans closer."
    ]
  },
  {
    id: "sc_053",
    title: "Annual School Robotics Challenge Arena",
    category: "School & Education",
    imageFile: "images/task3_053.jpg",
    description: "A school gymnasium hosting a robotics competition with students controlling small robots on an obstacle mat, judges taking notes, and cheering spectators.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center foreground, student teams with remote controllers are maneuvering small motorized robots on a colorful obstacle course mat.",
      "To the right, judges wearing official vests are taking notes on clipboards near the finish ramp.",
      "In the background bleachers, classmates and parents are holding 'GO TEAMS!' signs and waving flags.",
      "Banners above the exit doors read 'ANNUAL SCHOOL ROBOTICS CHALLENGE' and 'SCIENCE & INNOVATION FAIR'."
    ],
    predictionTargets: [
      "The robot negotiating the ramp will successfully reach the finish zone mat.",
      "The judges will tally the completion times and record score points.",
      "The cheering crowd in the bleachers will stand up and applaud when Team A wins."
    ]
  },
  {
    id: "sc_054",
    title: "Airport Baggage Claim Carousel",
    category: "Travel",
    imageFile: "images/task3_054.jpg",
    description: "An airport luggage carousel hall with arriving passengers picking up suitcases from the revolving belt, and a traveler asking at the missing luggage counter.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, passengers are standing along a circular revolving metal luggage carousel pulling off colorful suitcases.",
      "Overhead digital flight monitors show 'BAGGAGE BELT 3 - FLIGHT AC 123 BAGGAGE ARRIVED'.",
      "To the right, a young male traveler is pointing at a desk marked 'MISSING LUGGAGE' while speaking to an airline agent.",
      "In the background through large terminal glass windows, a commercial airplane is parked on the tarmac."
    ],
    predictionTargets: [
      "The passenger reaching for the black suitcase will lift it off the carousel onto her luggage cart.",
      "The agent at the missing luggage counter will look up the passenger's tracking number on her computer.",
      "More suitcases will emerge from the rubber flap opening onto the conveyor belt."
    ]
  },
  {
    id: "sc_055",
    title: "Community Health Clinic Reception & Triage",
    category: "Emergency & Health",
    imageFile: "images/task3_055.jpg",
    description: "A community medical clinic lobby with a nurse checking a patient's blood pressure at a triage desk, patients waiting in chairs, and a glass reception window.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, a nurse in blue scrubs is using a blood pressure cuff to check an elderly female patient's arm.",
      "To the right behind a glass protective partition, a receptionist in a green shirt is answering a phone call.",
      "To the left in the waiting area, seated patients of various ages are reading newspapers and health magazines.",
      "On the wall, health posters promote 'STAY HEALTHY' tips and 'VACCINATION CLINIC' schedules."
    ],
    predictionTargets: [
      "The nurse will note down the patient's blood pressure reading on an intake chart.",
      "The receptionist will call out the next waiting patient's name for their appointment.",
      "The patient getting checked will walk into an examination room with the doctor."
    ]
  },
  {
    id: "sc_056",
    title: "Public Park Dog Training & Agility Arena",
    category: "Nature & Outdoors",
    imageFile: "images/task3_056.jpg",
    description: "A fenced dog park agility course with trainers guiding dogs over hurdles and through tunnels, owners chatting on benches, and a pet drinking fountain.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "Inside the fenced enclosure, a trainer on the left is guiding a small dog over blue jump hurdles.",
      "To the right, a border collie is running out of a yellow agility tunnel guided by its owner.",
      "In the foreground right, a pet-friendly water station features drinking bowls at ground level.",
      "Outside the fence, dog owners holding leashes are standing on the sidewalk chatting."
    ],
    predictionTargets: [
      "The border collie exiting the tunnel will jump over the next hurdle in the course.",
      "The dog owner will reward their pet with a treat after completing the hurdle jump.",
      "A dog owner will lead their pet to the water station for a drink."
    ]
  },
  {
    id: "sc_057",
    title: "Underground City Subway Station Platform",
    category: "Travel",
    imageFile: "images/task3_057.jpg",
    description: "A modern underground subway platform with a train arriving with glowing headlights, commuters waiting behind safety lines, and station maps.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "On the left, a silver modern subway train is pulling into the station with headlights illuminated.",
      "Along the tiled platform, commuters wearing coats and backpacks are standing behind a yellow tactile safety line.",
      "Above the platform, an electronic sign displays 'LINE 1 - DOWNTOWN - TRAIN ARRIVING'.",
      "On the right wall, a large framed billboard advertises 'VISIT VANCOUVER!' alongside a subway route map."
    ],
    predictionTargets: [
      "The subway train will come to a complete stop and its automated doors will slide open.",
      "Waiting commuters will allow arriving passengers to step off before boarding.",
      "An automated station announcement will chime over the loudspeaker system."
    ]
  },
  {
    id: "sc_058",
    title: "Supermarket Delicatessen & Cheese Counter",
    category: "Services & Shopping",
    imageFile: "images/task3_058.jpg",
    description: "A busy supermarket deli counter with a clerk slicing roast beef on an electric meat slicer and a customer pointing at gourmet cheeses behind glass.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "Behind the stainless counter on the left, a deli clerk wearing a hairnet is operating an electric slicer to cut roast beef.",
      "On the right, a customer with a backpack is pointing at gourmet cheese wheels inside a refrigerated curved glass display case.",
      "Hanging wooden signboards overhead display prices for 'ROAST BEEF $19.99/lb' and 'IMPORTED CHEESE'.",
      "Trays of sliced ham, turkey, olives, and pastrami are arranged neatly inside the refrigerated counter."
    ],
    predictionTargets: [
      "The deli clerk will weigh the sliced roast beef on a digital scale and wrap it in butcher paper.",
      "The clerk will cut a wedge of cheddar cheese selected by the customer.",
      "The customer will take the price-labeled packages and place them into her shopping cart."
    ]
  },
  {
    id: "sc_059",
    title: "Suburban Car Dealership Showroom",
    category: "Services & Shopping",
    imageFile: "images/task3_059.jpg",
    description: "A modern car dealership showroom with a salesperson demonstrating a new red sedan to a couple, and a reception desk with promotional banners.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a smiling car salesperson in a blue tie is explaining features to a couple next to a new red sedan.",
      "The female customer is sitting in the driver's seat testing the steering wheel while her partner listens.",
      "To the right foreground, a desk is stacked with 'FINANCE AGREEMENT' paperwork and a laptop.",
      "Large glass window walls show park-like dealership lots with promotional 'SPRING SALE!' hanging banners."
    ],
    predictionTargets: [
      "The salesperson will invite the couple to take the red sedan on a test drive.",
      "The couple will sit down at the desk to review auto financing options.",
      "The receptionist at the desk will hand sales brochures to new visitors entering the showroom."
    ]
  },
  {
    id: "sc_060",
    title: "High School Chemistry Laboratory Class",
    category: "School & Education",
    imageFile: "images/task3_060.jpg",
    description: "A high school chemistry lab where students wearing safety goggles pour colorful liquid solutions into beakers while a teacher assists.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground left, two students wearing safety goggles are carefully pouring blue liquid solution into a glass beaker.",
      "In the foreground center, a student is measuring yellow liquid from a flask over a Bunsen burner flame.",
      "To the right, a female science teacher in a lab coat is observing and guiding two students at a lab bench.",
      "On the brick back wall, a large 'Periodic Table of the Elements' chart and lab safety posters are displayed."
    ],
    predictionTargets: [
      "The blue liquid mixture will react and change color in the beaker.",
      "The teacher will demonstrate how to record chemical reaction data in a lab notebook.",
      "Students will turn off the Bunsen burner flame and clean their glassware at the sink."
    ]
  },
  {
    id: "sc_061",
    title: "Downtown City Marathon Finish Line",
    category: "Sports & Recreation",
    imageFile: "images/task3_061.jpg",
    description: "A festive city marathon finish line on a downtown street with a runner crossing the tape, cheering spectators holding signs, and water station volunteers.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a male runner (#148) with raised arms is breaking through a yellow 'FINISH LINE' tape banner.",
      "To the left behind metal security barriers, cheering spectators are holding 'GO RUNNERS!' and 'YOU DID IT!' signs.",
      "To the right, race volunteers in 'STAFF' vests are handing water bottles and silver thermal foil blankets to finishers.",
      "Overhead, an electronic timer gantry displays official race time '2:45:12'."
    ],
    predictionTargets: [
      "The finishing runner will celebrate, catch his breath, and accept a finisher medal.",
      "Volunteers will wrap a thermal blanket around the runner and offer a water bottle.",
      "The next group of runners will cross the finish line right behind him."
    ]
  },
  {
    id: "sc_062",
    title: "Suburban Campground Night Fire Pit",
    category: "Nature & Outdoors",
    imageFile: "images/task3_062.jpg",
    description: "A cozy nighttime campsite under a starry crescent moon sky where friends sit around a crackling campfire roasting marshmallows on sticks.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, four campers sitting on wooden log benches are holding long wooden sticks roasting marshmallows over a stone fire pit.",
      "To the left on a wooden picnic table, a glowing oil lantern, mugs, and a box of graham crackers are set up.",
      "In the background, two dome camping tents (blue and green) are pitched beneath tall evergreen pine trees.",
      "Above the campsite, a clear night sky features a crescent moon and twinkling stars."
    ],
    predictionTargets: [
      "The campers will place the golden roasted marshmallows between chocolate and graham crackers to make s'mores.",
      "Someone will tell a campfire story while sitting around the fire.",
      "The campers will extinguish the fire pit embers before heading into their tents to sleep."
    ]
  },
  {
    id: "sc_063",
    title: "University Historic Library Reading Room",
    category: "School & Education",
    imageFile: "images/task3_063.jpg",
    description: "A grand university library reading hall with students studying at long wooden tables with laptops and textbooks, and a librarian on a wooden ladder shelving books.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center table, students are studying — one typing on a laptop, another taking notes in a journal, and one reading an open textbook.",
      "To the right, an elderly librarian with glasses is standing on a rolling wooden ladder putting a book on a high shelf.",
      "Along the left wall, large arched stained glass windows illuminate individual study cubbies.",
      "Tall dark oak bookshelves line the walls filled with thousands of leather-bound volumes."
    ],
    predictionTargets: [
      "The student taking notes will close her textbook and pack her notebook into her backpack.",
      "The librarian will climb down the ladder and push a cart of returned books down the aisle.",
      "A student at the window cubby will stand up to stretching after a long study session."
    ]
  },
  {
    id: "sc_064",
    title: "Suburban RV Motorhome Campsite Park",
    category: "Nature & Outdoors",
    imageFile: "images/task3_064.jpg",
    description: "An RV campground with a family setting up folding chairs under a motorhome awning, a child riding a bicycle, and a smoking barbecue grill.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center foreground, a couple is unfolding navy camp chairs under the retractable awning of a white motorhome RV.",
      "To the right, a young boy wearing a helmet is riding a red bicycle along a gravel driveway.",
      "To the left, smoke rises from a round charcoal barbecue grill cooking hamburger patties.",
      "In the background, tall pine trees and mountain peaks surround the RV campground lot."
    ],
    predictionTargets: [
      "The couple will sit down in their folding chairs and enjoy cold drinks.",
      "The mother will flip the burgers on the barbecue grill when cooked.",
      "The child riding the bicycle will park it next to the picnic table."
    ]
  },
  {
    id: "sc_065",
    title: "High School Cafeteria Lunch Hour Line",
    category: "School & Education",
    imageFile: "images/task3_065.jpg",
    description: "A high school cafeteria during lunch hour with students carrying food trays, selecting salads with tongs, and paying at the cash register counter.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground left, a student is tapping a student ID card at a cash register counter to pay for a meal tray.",
      "To the right along the serving line, students are using metal tongs to select fresh salad vegetables.",
      "In the background dining hall, packed tables of students are chatting, eating lunches, and drinking milk cartons.",
      "A 'LUNCH MENU' poster and 'GO WILDCATS' banner are displayed on the cafeteria wall."
    ],
    predictionTargets: [
      "The cashier will confirm the lunch payment and the student will carry his tray to a table.",
      "The student at the salad bar will close her plastic container and move toward the register.",
      "More students will enter the cafeteria as the lunch bell rings."
    ]
  },
  {
    id: "sc_066",
    title: "Community Fire Station Open House Event",
    category: "Public Places",
    imageFile: "images/task3_066.jpg",
    description: "A fire station open house where a firefighter helps a child sit in a red fire truck cab, and families examine fire safety equipment on display tables.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a firefighter in uniform is assisting a young boy wearing a plastic red helmet into the driver's seat of a fire truck.",
      "To the right, display tables are set up with fire extinguishers, helmets, and 'FIRE PREVENTION' educational pamphlets.",
      "Families with children are browsing the tables and talking to firefighters.",
      "A large banner hanging over the bay doors announces 'OPEN HOUSE TODAY!'."
    ],
    predictionTargets: [
      "The firefighter will let the child honk the fire truck's horn.",
      "A family will pick up fire safety coloring books and stickers from the display table.",
      "A firefighter will demonstrate how to properly operate a fire extinguisher."
    ]
  },
  {
    id: "sc_067",
    title: "City Electronic Waste Recycling Drop-Off Yard",
    category: "Public Places",
    imageFile: "images/task3_067.jpg",
    description: "An e-waste recycling yard where residents unload old televisions, computer monitors, and appliances from car trunks into large metal collection bins.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a woman is unloading an old boxy television from her car trunk into a large metal bin labeled 'E-WASTE COLLECTION'.",
      "To the right, a man is carrying a microwave appliance toward another bin designated for small electronics.",
      "In the background, a facility worker wearing a high-visibility vest is directing incoming vehicle traffic with a stop sign paddle.",
      "A large sign on the chain-link fence lists accepted items including TVs, computers, and household appliances."
    ],
    predictionTargets: [
      "The woman will place the television securely inside the bin and return to her car.",
      "The traffic worker will signal the next waiting car to pull forward to an open drop-off bay.",
      "A forklift will arrive to transport full e-waste bins into the recycling warehouse."
    ]
  },
  {
    id: "sc_068",
    title: "Winter Ski Resort Lodge & Chairlift Queue",
    category: "Sports & Recreation",
    imageFile: "images/task3_068.jpg",
    description: "A snowy ski resort lodge with skiers wearing helmets lining up for the chairlift, and guests drinking hot beverages on a wooden sun deck.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "To the right, skiers carrying poles and snowboards are queuing in line to board a quad chairlift.",
      "To the left on the elevated wooden lodge deck, visitors are sitting at picnic tables sipping hot drinks from mugs.",
      "Ski racks filled with colorful skis stand near the entrance of 'SKI LODGE CAFÉ'.",
      "In the background, snow-covered mountain peaks and pine trees extend under a clear blue sky."
    ],
    predictionTargets: [
      "The next pair of skiers in line will glide onto the loading carpet and sit on the chairlift seat.",
      "The people on the lodge deck will finish their hot drinks and put on their ski gloves.",
      "A skier on the mountain slope will carve a turn down toward the lodge."
    ]
  },
  {
    id: "sc_069",
    title: "Hospital Emergency Room Stretcher Entrance",
    category: "Emergency & Health",
    imageFile: "images/task3_069.jpg",
    description: "A hospital ER waiting hall where paramedics wheel an elderly patient on a mobile stretcher through double doors while a nurse types on a computer.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, two paramedics in green uniforms are pushing a patient on a wheeled stretcher through double doors marked 'EMERGENCY / AMBULANCE ENTRANCE'.",
      "In the foreground right, a triage nurse at a reception desk is typing patient records into a computer monitor.",
      "To the left in blue waiting room chairs, anxious visitors are seated waiting for updates.",
      "A wall monitor displays 'WAIT TIMES: approx. 45 mins'."
    ],
    predictionTargets: [
      "The paramedics will guide the stretcher into an acute examination room.",
      "The triage nurse will print an ID wristband for the arriving patient.",
      "A doctor will walk out into the waiting area to speak with a family member."
    ]
  },
  {
    id: "sc_070",
    title: "Public Beach Boardwalk & Lifeguard Tower",
    category: "Nature & Outdoors",
    imageFile: "images/task3_070.jpg",
    description: "A sunny ocean boardwalk where pedestrians push strollers and ride bicycles past a tall wooden lifeguard tower scanning the beach.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a lifeguard in a red uniform stands on an elevated wooden tower looking through binoculars.",
      "On the wooden boardwalk in the center, a mother is pushing a stroller while a man rides a yellow bicycle alongside.",
      "To the right, a beach snack bar with colorful umbrellas serves ice cream and cold drinks to seated customers.",
      "In the background, sand dunes, beach umbrellas, and ocean waves stretch into the distance under a red flag."
    ],
    predictionTargets: [
      "The lifeguard will lower the binoculars and watch a group of swimmers near the shore.",
      "The cyclist will slow down to let pedestrians cross the boardwalk path.",
      "A child at the snack bar table will enjoy an ice cream cone."
    ]
  },
  {
    id: "sc_071",
    title: "University Science Fair Poster Session",
    category: "School & Education",
    imageFile: "images/task3_071.jpg",
    description: "A university research poster hall where students present scientific findings at trifold poster boards to judges taking notes on scoring sheets.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a male student is presenting a poster titled 'SOLAR ENERGY EFFICIENCY' to a female judge holding a clipboard.",
      "To the right, a judge in a suit is evaluating a student's poster on 'WATER PURIFICATION' while filling out a scoring sheet.",
      "Down the long hall aisle, rows of colorful poster booths feature topics like 'ALGAE BIOFUEL' and 'PLASTICS DEGRADATION'.",
      "Banners hanging overhead display 'UNIVERSITY SCIENCE FAIR 2024 - INNOVATION & RESEARCH'."
    ],
    predictionTargets: [
      "The judge will ask the student a follow-up question about his data analysis charts.",
      "The student will explain her experimental methodology and hand the judge a handout.",
      "The judges will compare scoring sheets after visiting all poster stations."
    ]
  },
  {
    id: "sc_072",
    title: "City Transit Bus Interior Commute",
    category: "Travel",
    imageFile: "images/task3_072.jpg",
    description: "A city transit bus interior during morning commute with seated and standing passengers holding handrails, and a passenger tapping a smart fare card.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a female commuter is tapping her green smart transit card at the fare box near the front door.",
      "Along the aisle, standing passengers are holding onto yellow overhead handrails and vertical grab poles.",
      "Seated passengers are listening to headphones, reading books, or looking out windows at city traffic.",
      "Signs overhead indicate 'PRIORITY SEATING' and route map diagrams."
    ],
    predictionTargets: [
      "The fare box will chime green and the passenger will move down the aisle to find a standing spot.",
      "The bus driver will close the front doors and pull away from the bus stop.",
      "A seated passenger will press the 'STOP REQUESTED' cord before the next stop."
    ]
  },
  {
    id: "sc_073",
    title: "Suburban Garden Nursery Outdoor Yard",
    category: "Nature & Outdoors",
    imageFile: "images/task3_073.jpg",
    description: "A garden nursery yard where shoppers load heavy bags of potting soil onto flatbed carts, and a worker waters hanging flower baskets under a greenhouse frame.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a man in a blue shirt is lifting a heavy brown bag of potting soil off a wooden pallet onto a metal handcart.",
      "To the right, a nursery employee in a green apron is using a watering can to water hanging petunia baskets.",
      "In the background, rows of potted tomato plants, fruit trees, and lavender bushes line display benches.",
      "A metal greenhouse frame displays 'GARDEN NURSERY' signage over rows of garden supplies."
    ],
    predictionTargets: [
      "The man will load two more bags of soil onto his cart and push it toward the cash register.",
      "The nursery employee will refill his watering can at a outdoor hose station.",
      "A customer browsing the fruit trees will select a potted apple tree to purchase."
    ]
  },
  {
    id: "sc_074",
    title: "Public Library Public Computer Room",
    category: "School & Education",
    imageFile: "images/task3_074.jpg",
    description: "A public library computer room with patrons working at desktop stations, a user operating a multi-function printer, and a librarian helping an elderly man.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, a woman is pressing the touchscreen menu on a large multi-function printer machine.",
      "To the right, a female librarian wearing a name tag is leaning over to assist an elderly gentleman with typing on a keyboard.",
      "Along the wooden computer desks, patrons of various ages are seated at numbered desktop monitors (stations 1–8).",
      "Posters on the back wall display 'LEARN', 'CONNECT', and 'GROW' alongside bookshelves."
    ],
    predictionTargets: [
      "The printer machine will print out the woman's multi-page document into the output tray.",
      "The librarian will help the senior citizen log into his email account.",
      "A patron at station 3 will insert a USB flash drive into the computer tower."
    ]
  },
  {
    id: "sc_075",
    title: "Indoor Community Swimming Pool Lap Lanes",
    category: "Sports & Recreation",
    imageFile: "images/task3_075.jpg",
    description: "An indoor swimming pool with swimmers practicing freestyle in lanes marked by floating ropes, and a swim coach holding a stopwatch and clipboard.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the pool, three swimmers wearing goggles and swim caps are swimming freestyle down lanes marked by red and blue floating ropes.",
      "On the right pool deck, a swim coach in a tracksuit is standing holding a stopwatch and a clipboard with lap times.",
      "Beside the coach, colorful foam kickboards are neatly stacked in red, green, and blue piles.",
      "In the background, starter diving blocks (numbered 1–4) and a tall lifeguard chair are positioned by the tile wall."
    ],
    predictionTargets: [
      "The lead swimmer will reach the end wall, touch the tile, and perform a flip turn.",
      "The coach will press the stopwatch button and record the lap split time on her clipboard.",
      "The coach will blow her whistle to signal the end of the warm-up set."
    ]
  },
  {
    id: "sc_076",
    title: "Suburban Veterinary Surgery Suite",
    category: "Emergency & Health",
    imageFile: "images/task3_076.jpg",
    description: "A sterile veterinary operating room where a vet surgeon in mask performs surgery on a golden retriever while a technician monitors a heart rate screen.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a vet surgeon wearing blue scrubs, a surgical mask, and cap is operating on a dog under bright dual surgical lamps.",
      "To the right, a veterinary assistant in green scrubs is monitoring a glowing heart rate ECG screen.",
      "A stainless steel tray in the foreground holds surgical scalpels, clamps, and sterile gauze.",
      "On the wall, an anatomical chart of canine organ systems is mounted next to a wall clock showing 2:00."
    ],
    predictionTargets: [
      "The surgeon will ask the assistant for a specific suture needle from the instrument tray.",
      "The assistant will adjust the IV fluid drip rate on the monitor pole.",
      "Once the surgery completes, the team will transfer the dog into a recovery kennel."
    ]
  },
  {
    id: "sc_077",
    title: "Apple Orchard Harvest & Cider Press Stand",
    category: "Nature & Outdoors",
    imageFile: "images/task3_077.jpg",
    description: "An apple orchard cider stand where a worker pours fresh cider from a wooden press into jugs while families pick red apples from orchard trees.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground right, a farm worker in an apron is pouring fresh cider into glass jugs from a heavy wooden cider press.",
      "To the left, a mother and daughter are picking ripe red apples from low tree branches into wooden bushel baskets.",
      "In the background, rows of apple trees stretch up rolling green hills under a bright autumn sky.",
      "A wooden signboard near the press displays 'FRESH APPLE CIDER - LOCAL CIDER $8'."
    ],
    predictionTargets: [
      "The farm worker will cap the cider jug and hand it to a waiting customer.",
      "The mother and daughter will carry their full apple basket to the weighing station.",
      "More visitors will walk into the orchard rows carrying empty baskets."
    ]
  },
  {
    id: "sc_078",
    title: "Outdoor Community Theatre Park Rehearsal",
    category: "Public Places",
    imageFile: "images/task3_078.jpg",
    description: "An outdoor park amphitheater where actors in historical costumes rehearse on stage while the director calls out instructions from the seating area.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "On the wooden stage on the right, actors dressed in Renaissance costumes are rehearsing dramatic gestures.",
      "In the seating area on the left, a male director holding an open script notebook calls out directions with a speech bubble.",
      "Audience members and townspeople are seated on wooden amphitheater benches watching the rehearsal.",
      "A banner tied between trees above the stage reads 'SPRING PLAY REHEARSAL'."
    ],
    predictionTargets: [
      "The actors will stop line delivery and listen to the director's feedback.",
      "The lead actress will repeat her entrance from stage left with more emotion.",
      "The crew will adjust the stage lights mounted on vertical metal poles."
    ]
  },
  {
    id: "sc_079",
    title: "High School Track & Field High Jump Event",
    category: "Sports & Recreation",
    imageFile: "images/task3_079.jpg",
    description: "A track and field high jump event where an athlete arches over the crossbar onto a blue foam landing mat while an official measures height.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a female athlete in a red 'WESTVIEW HIGH' uniform is arching back mid-air over a high jump crossbar.",
      "Below the bar, a large blue foam crash landing pad is positioned to catch the jumper.",
      "To the left, an official in a cap holding a clipboard and measuring tape monitors the crossbar height marks (1.65m - 1.75m).",
      "To the right, cheering teammates sitting on the grass are waving 'GO WESTVIEW!' signs."
    ],
    predictionTargets: [
      "The athlete will clear the crossbar safely without knocking it off the uprights.",
      "The official will raise a white flag to signal a successful jump clearance.",
      "Teammates on the grass will cheer loudly as she lands on the blue cushion mat."
    ]
  },
  {
    id: "sc_080",
    title: "Hotel Breakfast Buffet Dining Room",
    category: "Services & Shopping",
    imageFile: "images/task3_080.jpg",
    description: "A hotel breakfast buffet hall with guests serving scrambled eggs and pancakes from stainless steel chafing dishes, and a chef cooking omelets.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, guests are using metal tongs to serve scrambled eggs, pancakes, and sausage from stainless steel chafing dishes.",
      "To the right behind the counter, a chef in a white chef hat is cooking fresh omelets over a flat-top grill.",
      "On the left counter, glass pitchers of orange juice and coffee urns are available at the beverage station.",
      "In the background, diners are seated at wooden tables eating breakfast and talking."
    ],
    predictionTargets: [
      "The guest with the tongs will place pancakes onto his plate and head to the syrup dispenser.",
      "The chef will flip the omelet and slide it onto the customer's waiting plate.",
      "A server will replenish the hot scrambled eggs dish with a fresh tray from the kitchen."
    ]
  },
  {
    id: "sc_081",
    title: "City Park Ice Cream Cart & Splash Pad",
    category: "Nature & Outdoors",
    imageFile: "images/task3_081.jpg",
    description: "A park ice cream cart where a vendor scoops waffle cones for children in line next to a ground splash pad with shooting water jets.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "On the left, an ice cream cart vendor in a green cap is handing a double-scoop waffle cone to a girl at the head of a queue.",
      "To the right, children in swimwear are running and playing through shooting water jets on a colorful round splash pad.",
      "Park benches along the paved trail are occupied by parents watching their kids.",
      "Signs overhead advertise 'CITY PARK TREATS - ICE CREAM' and 'SPLASH PAD - PLAY SAFELY'."
    ],
    predictionTargets: [
      "The next child in line will order a chocolate ice cream cone.",
      "A child playing in the splash pad will run under the center water jet.",
      "The vendor will restock the ice cream tub from the freezer chest."
    ]
  },
  {
    id: "sc_082",
    title: "Auto Body Repair Shop Spray Paint Booth",
    category: "Services & Shopping",
    imageFile: "images/task3_082.jpg",
    description: "A specialized auto body paint booth where a technician in a protective hazmat suit spray paints a car door under infrared drying lamps.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a body shop technician wearing a full white hazmat suit and respirator mask is using a spray gun to apply yellow paint to a car door on a stand.",
      "To the right, a stand of glowing red infrared heat lamps is drying another painted section.",
      "On the left metal cart, paint cans, thinners, and masking tape rolls are organized neatly.",
      "Bright overhead fluorescent lights illuminate the sealed white paint booth room."
    ],
    predictionTargets: [
      "The technician will apply an even clear-coat layer over the yellow car door.",
      "The technician will turn on the exhaust ventilation fan to clear paint fumes.",
      "The dried car door will be inspected under the light before reassembly."
    ]
  },
  {
    id: "sc_083",
    title: "Public Library Children's Craft Workshop",
    category: "School & Education",
    imageFile: "images/task3_083.jpg",
    description: "A library children's craft area where kids cut construction paper and glue glitter onto decorative masks while a children's librarian assists.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground at low wooden tables, young children are using safety scissors, glue sticks, and glitter to make decorative animal masks.",
      "To the right, a female children's librarian in glasses is helping a young girl attach feathers to her mask.",
      "Around the room, bookshelves are filled with children's picture books and colorful wall posters ('READ!', 'CREATIVITY ZONE').",
      "A poster on the cabinet reads 'CRAFT WORKSHOP TODAY!'."
    ],
    predictionTargets: [
      "The child using scissors will cut out star shapes from blue construction paper.",
      "The librarian will display the completed masks on a bulletin board.",
      "The children will clean up their paper scraps and place scissors into supply bins."
    ]
  },
  {
    id: "sc_084",
    title: "Community Park Volunteer Tree Planting Drive",
    category: "Nature & Outdoors",
    imageFile: "images/task3_084.jpg",
    description: "A park tree planting event where volunteers dig holes with shovels, plant young saplings, spread mulch, and water new trees.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground left, two volunteers wearing 'VOLUNTEER' t-shirts are using metal shovels to dig a planting hole in the lawn.",
      "In the center, a volunteer team is securing a young sapling with wooden stakes and green garden ties.",
      "To the right, bags of brown mulch, soil, green watering cans, and a garden hose are arranged on the grass.",
      "A wooden park sign reads 'COMMUNITY TREE PLANTING DAY - PARK GREENING PROJECT'."
    ],
    predictionTargets: [
      "The volunteers will place the sapling root ball into the dug hole and cover it with soil.",
      "A volunteer will pour water from the green watering can over the newly planted tree base.",
      "The team will spread a layer of wood mulch around the tree base to retain moisture."
    ]
  },
  {
    id: "sc_085",
    title: "Outdoor Street Festival Handmade Crafts Booth",
    category: "Services & Shopping",
    imageFile: "images/task3_085.jpg",
    description: "An outdoor artisan craft market booth where a jeweler explains beaded necklaces to shoppers examining displays under festive hanging lights.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "Inside a wooden canopy booth, an artisan vendor in a scarf is gesturing while explaining handmade beaded necklaces to two female shoppers.",
      "In the foreground table, black velvet busts display colorful beaded necklaces, bracelets, and earrings.",
      "Hanging overhead, festive pennant banners and string lights decorate the cobblestone festival street.",
      "The booth sign reads 'THE BEADED BORDER - HANDMADE JEWELRY'."
    ],
    predictionTargets: [
      "The shopper examining the blue necklace will try it on in front of a small tabletop mirror.",
      "The vendor will package the selected necklace in a gift box and accept payment.",
      "More street festival attendees will stop by the booth to browse the jewelry."
    ]
  },
  {
    id: "sc_086",
    title: "Airport Departure Gate Baggage Weight Counter",
    category: "Travel",
    imageFile: "images/task3_086.jpg",
    description: "An airport check-in desk where a traveler places a heavy duffel bag on a digital scale while an airline agent types on a computer to print baggage tags.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a female traveler is lifting a green duffel bag onto a digital floor scale displaying '32.5 kg OVERWEIGHT'.",
      "To the right behind the counter, an airline agent ('MARK') is typing on a computer monitor while a label printer generates luggage tags.",
      "Flight departure monitors overhead show 'UA456 LONDON BOARDING' and 'AC123 PARIS DELAYED'.",
      "A 'NO CASH' sign is mounted on the front of the customer check-in desk."
    ],
    predictionTargets: [
      "The agent will inform the traveler that the bag exceeds the weight limit.",
      "The traveler will open the duffel bag to transfer heavy items to her carry-on luggage.",
      "The agent will attach the printed barcode luggage tag to the duffel handle."
    ]
  },
  {
    id: "sc_087",
    title: "Suburban Laundromat Washing & Drying Facility",
    category: "Services & Shopping",
    imageFile: "images/task3_087.jpg",
    description: "A bright self-service laundromat where patrons load clothes into front-load washing machines and fold clean towels on wooden tables.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a young woman is loading colorful clothes from a plastic basket into a front-loading washing machine.",
      "To the right, a male patron at a wooden folding table is neatly folding stacks of white clean bath towels.",
      "In the center, an elderly man is inserting a laundry payment card into a washing machine control panel.",
      "Overhead shelves store large bottles of detergent and fabric softener under signs for 'WASHERS' and 'DRYERS'."
    ],
    predictionTargets: [
      "The woman will add liquid detergent, close the door, and start the wash cycle.",
      "The man folding towels will place them into his canvas laundry bag.",
      "The washer cycle timer will count down until the spin cycle completes."
    ]
  },
  {
    id: "sc_088",
    title: "Community Ice Rink Youth Hockey Practice",
    category: "Sports & Recreation",
    imageFile: "images/task3_088.jpg",
    description: "An indoor ice rink where young hockey players practice drills on skates while a coach points with a marker at a strategy board on the glass barrier.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "On the right, a female hockey coach on skates is using a marker to explain play diagrams on a white strategy board mounted to the glass barrier.",
      "In the foreground center, young players in red ('WARRIORS #21') and blue ('HAWKS #14') jerseys are listening attentively on the ice.",
      "In the background, a goalie in full pads guards a hockey net while other players skate with pucks.",
      "Banners on the wall display 'COMMUNITY ICE RINK' and 'YOUTH HOCKEY'."
    ],
    predictionTargets: [
      "The coach will finish explaining the drill and blow her whistle for players to start skating.",
      "The players will line up at the blue line to practice passing the puck.",
      "The goalie will get into stance as a player takes a wrist shot on net."
    ]
  },
  {
    id: "sc_089",
    title: "Public Park Outdoor Yoga Class",
    category: "Nature & Outdoors",
    imageFile: "images/task3_089.jpg",
    description: "A sunny park lawn where a yoga instructor demonstrates warrior pose on a colorful mat while participants follow along in a group session.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the right foreground, a female yoga instructor in green activewear is demonstrating warrior pose on a striped rainbow yoga mat.",
      "Across the lawn, male and female participants of diverse ages are spread out on blue, red, and purple mats following her posture.",
      "In the background, a paved park path winds past green shade trees, wooden benches, and a gazebo.",
      "A park visitor is walking a dog along the path in the distance."
    ],
    predictionTargets: [
      "The instructor will transition the class into a peaceful child's pose.",
      "Participants will take deep breaths as they hold the pose balance.",
      "A park passerby on the path will pause to watch the yoga session."
    ]
  },
  {
    id: "sc_090",
    title: "City Bus Terminal Ticket & Information Counter",
    category: "Travel",
    imageFile: "images/task3_090.jpg",
    description: "A city intercity bus terminal hall where travelers with suitcases line up at glass ticket counter windows under an electronic schedule screen.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a male traveler with a backpack is receiving a paper ticket from a female clerk behind a glass ticket window.",
      "To the right, passengers carrying rolling suitcases and duffels are standing in a stanchion line labeled 'QUEUE'.",
      "Overhead, a digital departure screen lists times, destinations ('TORONTO', 'OTTAWA', 'MONTREAL'), gate numbers, and 'BOARDING' status.",
      "In the background, travelers are walking through double glass doors toward Gate 1."
    ],
    predictionTargets: [
      "The passenger with the ticket will proceed through Gate 1 to board his bus.",
      "The next traveler in the queue will step forward to ticket window 2.",
      "The departure screen will update with gate assignment changes."
    ]
  },
  {
    id: "sc_091",
    title: "High School Woodworking & Carpentry Workshop",
    category: "School & Education",
    imageFile: "images/task3_091.jpg",
    description: "A high school carpentry lab where students wearing safety goggles operate table saws and sanders, while a teacher guides a student with a ruler.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground left, a male student wearing safety goggles is guiding a wooden board through a green table saw.",
      "In the center, a male shop teacher is leaning over a workbench showing a female student how to mark timber with a tape measure and square.",
      "To the right foreground, a student is using a power palm sander, creating sawdust on a wooden board.",
      "Pegboards on the wall hold hammers, hand saws, levels, and safety signs ('THINK SAFETY', 'WEAR GOGGLES')."
    ],
    predictionTargets: [
      "The student at the table saw will finish the cut and turn off the power switch.",
      "The student receiving guidance will use a pencil to mark the cut line on the wood.",
      "The student sanding will wipe away sawdust to inspect the smooth finish."
    ]
  },
  {
    id: "sc_092",
    title: "Supermarket Seafood & Fresh Fish Market Counter",
    category: "Services & Shopping",
    imageFile: "images/task3_092.jpg",
    description: "A supermarket seafood department where a fishmonger wraps fresh salmon fillet in paper over a crushed ice display case for an elderly customer.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center, a fishmonger wearing an apron and hairnet is wrapping a salmon fillet in white butcher paper for a female customer in a green coat.",
      "The curved glass display case in front is filled with crushed ice holding fresh mackerel, cod fillets, and whole salmon.",
      "To the left, a glass tank holds live lobsters beneath price placards ('SALMON $21.99/lb', 'LIVE LOBSTERS $29.99/lb').",
      "Overhead, a large lit blue sign reads 'SEAFOOD & FRESH FISH'."
    ],
    predictionTargets: [
      "The fishmonger will weigh the wrapped package on a digital scale and attach a price label.",
      "The customer will accept the seafood package and place it into her shopping cart.",
      "The fishmonger will scoop fresh crushed ice onto the display tray."
    ]
  },
  {
    id: "sc_093",
    title: "Outdoor Autumn Festival Pumpkin Patch",
    category: "Nature & Outdoors",
    imageFile: "images/task3_093.jpg",
    description: "A festive farm pumpkin patch where families pick large orange pumpkins from straw fields near a tractor hayride and scarecrow display.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, a father, mother, and two children are lifting large round orange pumpkins off a field of yellow straw.",
      "To the right, a red tractor pulling a wooden hayride wagon filled with smiling kids is driving past a barn.",
      "Beside the barn, three friendly scarecrows wearing plaid shirts and straw hats stand near cornstalk bundles.",
      "In the background, colorful autumn trees in orange, red, and yellow line the farm hills."
    ],
    predictionTargets: [
      "The family will roll their chosen pumpkins to a wheelbarrow to haul to their car.",
      "The tractor driver will stop the hayride wagon at the pumpkin unloading station.",
      "Children will pose for photos next to the scarecrow display."
    ]
  },
  {
    id: "sc_094",
    title: "Suburban Car Repair Garage Tire Bay",
    category: "Services & Shopping",
    imageFile: "images/task3_094.jpg",
    description: "An auto repair shop bay where a mechanic uses a pneumatic impact wrench to install a tire on a blue car raised on a hydraulic lift.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center right, a mechanic wearing safety glasses and a blue jumpsuit is kneeling with a pneumatic air wrench tightening lug nuts on a car tire.",
      "The blue hatchback car is raised on a red two-post hydraulic vehicle lift.",
      "To the left foreground, a stack of four brand new rubber tires rests on the concrete garage floor.",
      "A red multi-drawer tool chest, oil drums, and air hose reel line the white cinderblock shop wall."
    ],
    predictionTargets: [
      "The mechanic will finish tightening all five wheel lug nuts with the wrench.",
      "He will lower the hydraulic lift using the wall control lever.",
      "He will check the air pressure in all four tires with a digital gauge."
    ]
  },
  {
    id: "sc_095",
    title: "University Campus Student Union Info Desk",
    category: "School & Education",
    imageFile: "images/task3_095.jpg",
    description: "A university student union lobby where a staff member at an information counter points at a campus map for two new freshmen holding orientation folders.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center foreground, a student union staff member in a blue polo shirt is using a pen to point out buildings on a large campus map.",
      "Across the desk, a male student with a backpack and a female student with a purse are listening attentively while holding yellow orientation packets.",
      "Behind the desk, bulletin boards display posters for 'ACADEMIC SERVICES', 'CLUBS & ACTIVITIES', and 'HOUSING'.",
      "Overhead banners welcome students with 'STUDENT UNION & INFORMATION' and 'UNIVERSITY ORIENTATION WEEK'."
    ],
    predictionTargets: [
      "The staff worker will hand a folded campus map brochure to the students.",
      "The students will thank the worker and walk toward their first orientation seminar building.",
      "Other freshmen will queue at the counter to ask questions about student ID cards."
    ]
  },
  {
    id: "sc_096",
    title: "Children's Indoor Trampoline Play Park",
    category: "Sports & Recreation",
    imageFile: "images/task3_096.jpg",
    description: "An indoor trampoline park where children bounce on interconnected trampoline beds while a staff supervisor monitors safety near a foam pit.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground, children wearing grip socks are mid-air jumping on yellow-framed trampoline mats surrounded by black safety netting.",
      "To the right, a staff supervisor in a green shirt and whistle is standing near a foam pit filled with colorful foam cubes.",
      "In the background, a climbing wall with colorful handholds is mounted next to a 'JUMP ZONE' banner.",
      "Parents are sitting on benches in a glassed-in observation café area."
    ],
    predictionTargets: [
      "A child will do a flip off the trampoline into the foam cube pit.",
      "The staff supervisor will blow his whistle to enforce the one-jumper-per-trampoline safety rule.",
      "Kids will move to the climbing wall section of the play park."
    ]
  },
  {
    id: "sc_097",
    title: "City Center Bicycle Share & Repair Station",
    category: "Travel",
    imageFile: "images/task3_097.jpg",
    description: "A city bike-share station where a commuter unlocks a blue rental bike using a mobile app while a mechanic pumps a tire at an adjacent repair stand.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the left foreground, a female commuter with a green jacket is holding her smartphone to scan a QR code on a blue rental bicycle dock.",
      "To the right, a male bike mechanic in a black apron is using a floor air pump at a public 'BIKE REPAIR' stand with hanging tools.",
      "An automated touch screen kiosk displays instructions under a round 'CITY BIKE SHARE' pillar sign.",
      "In the background, city street traffic, a bike lane, and storefronts are visible under clear skies."
    ],
    predictionTargets: [
      "The bike dock mechanism will unlatch with a green LED light and the commuter will pull out the bicycle.",
      "The mechanic will check the tire pressure gauge before handing the repaired bike to its owner.",
      "Another rider will dock a rental bike into an open empty bay."
    ]
  },
  {
    id: "sc_098",
    title: "Public Art Gallery Sculpture Exhibition",
    category: "Public Places",
    imageFile: "images/task3_098.jpg",
    description: "A brightly lit art gallery room where visitors holding brochures admire modern bronze and glass sculptures on white pedestals, guided by a gallery curator.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the center foreground, a female gallery curator in a blue blazer is speaking and gesturing toward an abstract glass sculpture on a white pedestal.",
      "To the left, a couple holding gallery exhibition guidebooks is admiring a twisted bronze sculpture.",
      "To the right, a small group of visitors is listening to the curator's explanation.",
      "Polished hardwood floors reflect track spotlights and large framed artworks mounted on white gallery walls."
    ],
    predictionTargets: [
      "The curator will answer a visitor's question about the artist's sculpting technique.",
      "The couple will turn the page of their brochure to read about the next artwork display.",
      "The group will follow the curator into the painting exhibition room."
    ]
  },
  {
    id: "sc_099",
    title: "Suburban Greenhouse Plant Nursery Sales Desk",
    category: "Services & Shopping",
    imageFile: "images/task3_099.jpg",
    description: "A plant nursery sales desk where a customer pays cash for potted ferns while an employee places potted purple orchids into a cardboard carrier box.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the foreground center, a female customer in a scarf is handing paper currency to a staff member across a wooden checkout counter.",
      "To the right, a male employee in a green apron is placing two potted purple orchids into a cardboard box carrier.",
      "Potted ferns, succulents, ceramic pots, and plant care pamphlets are arranged on the sales counter.",
      "In the background through glass greenhouse walls, rows of hanging potted plants and nursery shelves are visible."
    ],
    predictionTargets: [
      "The employee will hand cash change and a receipt to the customer.",
      "The customer will pick up the boxed orchid carrier and potted ferns to take to her car.",
      "The employee will wipe down the checkout counter before serving the next customer."
    ]
  },
  {
    id: "sc_100",
    title: "Community Center Culinary & Cooking Class",
    category: "School & Education",
    imageFile: "images/task3_100.jpg",
    description: "A community kitchen cooking class where adult students in aprons chop fresh vegetables while a chef instructor demonstrates flipping a stir-fry in a pan.",
    task3Prompt: OFFICIAL_TASK3_PROMPT_TEXT,
    task4Prompt: OFFICIAL_TASK4_PROMPT_TEXT,
    spatialHints: [
      "In the background center, a female chef instructor in a white chef coat is flipping sauteed vegetables mid-air in a pan over a commercial gas stove flame.",
      "In the foreground, diverse adult students wearing navy aprons are slicing bell peppers, onions, and carrots on wooden cutting boards.",
      "Surrounding the island counter, bowls of fresh herbs, olive oil bottles, knives, and kitchen utensils are neatly organized.",
      "A chalkboard on the back wall reads 'WEEKLY CLASS: VEGETABLE STIR-FRY - Frying Pan Flip Technique'."
    ],
    predictionTargets: [
      "The instructor will demonstrate how to season the stir-fry with soy sauce and sesame oil.",
      "Students will add their chopped vegetables into individual hot skillets.",
      "The class will plate their cooked stir-fry dishes for tasting and evaluation."
    ]
  }
];






