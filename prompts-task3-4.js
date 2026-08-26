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
  }
];


