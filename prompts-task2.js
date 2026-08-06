// CELPIP Speaking Task 2: Talking about a Personal Experience (100 Prompts)
// Preparation Time: 30 seconds | Speaking Time: 60 seconds

const TASK2_PROMPTS = [
  {
    id: "t2_001",
    title: "A Memorable Family Trip",
    category: "Travel",
    prompt: "Talk about a memorable trip or vacation you took with your family or friends. What made it special, where did you go, and what happened during the trip?"
  },
  {
    id: "t2_002",
    title: "Overcoming a Difficult Challenge",
    category: "Life Lessons",
    prompt: "Talk about a difficult challenge or obstacle you faced in your personal life or career. Describe what the challenge was, how you handled it, and what you learned from the experience."
  },
  {
    id: "t2_003",
    title: "A Time You Helped a Stranger",
    category: "Social",
    prompt: "Talk about a time when you helped a stranger or someone in need. Describe the situation, what kind of help you offered, and how you felt afterward."
  },
  {
    id: "t2_004",
    title: "An Important Decision You Made",
    category: "Personal Growth",
    prompt: "Talk about an important decision you had to make in your life. Explain what options you had, why you made your final choice, and how it impacted your future."
  },
  {
    id: "t2_005",
    title: "A Time You Learned a New Skill",
    category: "Education",
    prompt: "Talk about a time when you set out to learn a new skill or hobby. Describe what skill it was, why you wanted to learn it, how you practiced, and how long it took to master."
  },
  {
    id: "t2_006",
    title: "A Surprise Celebration",
    category: "Events",
    prompt: "Talk about a time when you attended or organized a surprise party or event. Describe who the surprise was for, how it was planned, and how the person reacted."
  },
  {
    id: "t2_007",
    title: "A Mistake You Learned From",
    category: "Life Lessons",
    prompt: "Talk about a mistake you made in the past at work, school, or home. Describe what went wrong, how you fixed or handled the situation, and what lesson you took away."
  },
  {
    id: "t2_008",
    title: "An Exciting First Day",
    category: "Work & School",
    prompt: "Talk about your first day at a new job or a new school. Describe how you felt in the morning, who you met, and what memorable event happened on that day."
  },
  {
    id: "t2_009",
    title: "A Time You Lost Something Valuable",
    category: "Personal Experience",
    prompt: "Talk about a time when you lost something valuable or important to you (e.g., keys, phone, wallet, or luggage). Describe how you lost it, how you searched, and whether you recovered it."
  },
  {
    id: "t2_010",
    title: "A Great Meal or Special Dining Experience",
    category: "Food",
    prompt: "Talk about a special meal or restaurant experience that you thoroughly enjoyed. Describe where you ate, who you were with, what dish you ordered, and why it was memorable."
  },
  {
    id: "t2_011",
    title: "A Time You Had to Work in a Team",
    category: "Career",
    prompt: "Talk about a time when you had to work closely with a group of people to complete a project or task. Describe the project goal, your role, and how the team collaborated."
  },
  {
    id: "t2_012",
    title: "An Unexpected Weather Event",
    category: "Nature",
    prompt: "Talk about an unexpected storm, severe snow, heavy rain, or extreme weather event you experienced. Describe where you were, what happened, and how you coped with it."
  },
  {
    id: "t2_013",
    title: "A Time You Tried Something Scary",
    category: "Adventure",
    prompt: "Talk about a time when you did something that scared you or pushed you out of your comfort zone (e.g. public speaking, roller coaster, moving abroad). Describe your feelings and the result."
  },
  {
    id: "t2_014",
    title: "A Special Gift You Received",
    category: "Relationships",
    prompt: "Talk about a special gift you received from someone meaningful in your life. Describe what the gift was, who gave it to you, on what occasion, and why it holds emotional value."
  },
  {
    id: "t2_015",
    title: "A Childhood Friendship",
    category: "Memories",
    prompt: "Talk about a close friend from your childhood or school days. Describe how you met, what activities you enjoyed together, and a fond memory you share."
  },
  {
    id: "t2_016",
    title: "A Time You Stood Up for Something",
    category: "Personal Growth",
    prompt: "Talk about a time when you stood up for a belief, a rule, or another person. Describe what the situation was, why you decided to speak up, and what happened as a result."
  },
  {
    id: "t2_017",
    title: "An Interesting Concert or Show",
    category: "Entertainment",
    prompt: "Talk about a live concert, theatrical play, sports match, or cultural performance you attended. Describe the event venue, atmosphere, and what made the performance unforgettable."
  },
  {
    id: "t2_018",
    title: "A Time You Experienced Flight Delays",
    category: "Travel",
    prompt: "Talk about a travel journey where you experienced long flight delays, missed connections, or lost baggage. Describe what happened at the airport and how you managed the inconvenience."
  },
  {
    id: "t2_019",
    title: "A Favorite Childhood Hobby",
    category: "Memories",
    prompt: "Talk about a favorite pastime, sport, or hobby you were passionate about when you were younger. Describe how you got started, how often you practiced, and why you loved it."
  },
  {
    id: "t2_020",
    title: "A Time You Saved Money for Something Special",
    category: "Finance",
    prompt: "Talk about a time when you disciplined yourself to save money for a specific goal (e.g. buying a car, laptop, or trip). Describe how long it took, what sacrifices you made, and how it felt to achieve it."
  },
  {
    id: "t2_021",
    title: "A Time You Changed Your Opinion",
    category: "Life Lessons",
    prompt: "Talk about a topic, activity, or person about whom you completely changed your opinion over time. Explain your initial view, what caused you to rethink, and your current perspective."
  },
  {
    id: "t2_022",
    title: "A Memorable Birthday",
    category: "Celebrations",
    prompt: "Talk about one of the most memorable birthday celebrations you have ever had. Describe how old you were turning, who was there, and what made that day stick out in your memory."
  },
  {
    id: "t2_023",
    title: "A Time You Had to Adapt to a Big Change",
    category: "Adaptability",
    prompt: "Talk about a major change in your life (e.g., moving to a new country, changing jobs, or starting college). Describe how you adapted to the new environment and what proved to be hardest."
  },
  {
    id: "t2_024",
    title: "A Time You Got Lost",
    category: "Adventure",
    prompt: "Talk about a time when you got lost while driving, hiking, or exploring a unfamiliar city. Describe how it happened, how you found your way back, and how you felt."
  },
  {
    id: "t2_025",
    title: "A Teacher Who Inspired You",
    category: "Education",
    prompt: "Talk about a teacher, professor, or instructor who had a positive influence on your life. Describe what subject they taught, their teaching style, and why they left a lasting impression."
  },
  {
    id: "t2_026",
    title: "A Time You Fixed Something Broken",
    category: "Home & DIY",
    prompt: "Talk about a time when you repaired a broken device, car part, household item, or piece of furniture yourself. Describe what was broken, how you figured out how to fix it, and the end result."
  },
  {
    id: "t2_027",
    title: "A Disappointing Product or Purchase",
    category: "Shopping",
    prompt: "Talk about a time when you bought an item or service that turned out to be very disappointing. Describe what you bought, why it failed your expectations, and what you did about it."
  },
  {
    id: "t2_028",
    title: "A Time You Volunteer Worked",
    category: "Community",
    prompt: "Talk about a time when you participated in a community volunteer event, charity drive, or clean-up day. Describe what work you performed, who you worked with, and why it was meaningful."
  },
  {
    id: "t2_029",
    title: "A Memorable Holiday Season Tradition",
    category: "Culture",
    prompt: "Talk about a traditional holiday or festival your family celebrates every year (e.g., Thanksgiving, New Year, Diwali, Christmas). Describe the preparations, traditional food, and festivities."
  },
  {
    id: "t2_030",
    title: "A Time You Had to Give Bad News",
    category: "Relationships",
    prompt: "Talk about a situation where you had to deliver difficult or disappointing news to a friend, family member, or colleague. Describe how you approached the conversation and how the person reacted."
  },
  {
    id: "t2_031",
    title: "A Time You Carried Out a DIY Project",
    category: "Creative",
    prompt: "Talk about a craft, painting, woodworking, or home improvement project you completed yourself. Describe the tools you used, the step-by-step process, and how happy you were with the finished work."
  },
  {
    id: "t2_032",
    title: "An Unforgettable Outdoor Activity",
    category: "Nature",
    prompt: "Talk about an outdoor experience such as camping, kayaking, hiking, or skiing. Describe the location, weather conditions, the scenic views, and what made the experience thrilling."
  },
  {
    id: "t2_033",
    title: "A Time You Missed an Important Deadline",
    category: "Career",
    prompt: "Talk about a time when you missed a school assignment deadline, work deadline, or appointment. Describe why you missed it, how you communicated with the party involved, and how it was resolved."
  },
  {
    id: "t2_034",
    title: "A Time You Received Unexpected Good News",
    category: "Life Events",
    prompt: "Talk about a day when you received surprising, wonderful news (e.g. passing a difficult test, job offer, visa approval). Describe where you were when you heard and how you celebrated."
  },
  {
    id: "t2_035",
    title: "A Time You Cared for an Animal",
    category: "Pets",
    prompt: "Talk about a pet you owned or an animal you looked after for a friend or relative. Describe the animal’s personality, daily care duties, and a memorable moment you shared."
  },
  {
    id: "t2_036",
    title: "A Time You Won a Competition or Award",
    category: "Achievement",
    prompt: "Talk about a time when you won a trophy, medal, academic award, or workplace recognition. Describe what the competition was, how much effort you put in, and how you felt receiving it."
  },
  {
    id: "t2_037",
    title: "A Special Visit to a Museum or Landmark",
    category: "Culture",
    prompt: "Talk about a visit to a historical landmark, national museum, art gallery, or famous monument. Describe what exhibits you saw and what interesting facts you learned."
  },
  {
    id: "t2_038",
    title: "A Time You Had a Communication Breakdown",
    category: "Language",
    prompt: "Talk about a situation where a language barrier or misunderstanding caused a humorous or confusing problem. Describe what happened and how you finally clarified the situation."
  },
  {
    id: "t2_039",
    title: "A Time You Managed a Busy Schedule",
    category: "Productivity",
    prompt: "Talk about a period in your life when you were extremely busy balancing multiple responsibilities simultaneously. Describe how you managed your daily time and kept your sanity."
  },
  {
    id: "t2_040",
    title: "A Time You Cooked for Others",
    category: "Food",
    prompt: "Talk about a time when you prepared a lunch or dinner for a group of friends or family members. Describe what dishes you cooked, how long prep took, and if the guests enjoyed the meal."
  },
  {
    id: "t2_041",
    title: "A Memorable Car Drive or Road Trip",
    category: "Travel",
    prompt: "Talk about a road trip journey across scenic highways or countryside. Describe who you traveled with, stops you made along the way, and why the drive stands out."
  },
  {
    id: "t2_042",
    title: "A Time You Dealt with a Broken Appliance",
    category: "Home",
    prompt: "Talk about a time when an essential home appliance (fridge, heater, washing machine) broke down suddenly. Describe how it impacted your routine and how you got it repaired."
  },
  {
    id: "t2_043",
    title: "A Time You Attended a Sports Event",
    category: "Sports",
    prompt: "Talk about attending a live sporting match in a stadium or arena (hockey, soccer, basketball, baseball). Describe the atmosphere, fan energy, and dramatic game highlights."
  },
  {
    id: "t2_044",
    title: "A Time You Had to Speak in Public",
    category: "Career",
    prompt: "Talk about a speech or presentation you gave in front of an audience at work or school. Describe how you prepared, your nervousness beforehand, and how the presentation went."
  },
  {
    id: "t2_045",
    title: "A Time You Faced an Emergency Situation",
    category: "Safety",
    prompt: "Talk about a sudden emergency situation you witnessed or experienced (e.g. power outage, medical emergency, car breakdown). Describe the actions you took to keep calm and stay safe."
  },
  {
    id: "t2_046",
    title: "A Time You Met Someone Famous or Inspiring",
    category: "Social",
    prompt: "Talk about a time when you met a famous personality, an author, an executive, or a highly inspiring individual. Describe the setting, what you talked about, and your impression."
  },
  {
    id: "t2_047",
    title: "A Time You Made a Great Shopping Deal",
    category: "Shopping",
    prompt: "Talk about a time when you found an extraordinary discount, bargain, or clearance deal on something you really wanted. Describe what the item was, where you found it, and how much you saved."
  },
  {
    id: "t2_048",
    title: "A Favorite Seasonal Activity",
    category: "Lifestyle",
    prompt: "Talk about your favorite seasonal activity (e.g., apple picking in autumn, ice skating in winter, beach outings in summer). Describe why you look forward to this activity every year."
  },
  {
    id: "t2_049",
    title: "A Time You Received Great Customer Service",
    category: "Consumer",
    prompt: "Talk about a time when an employee, receptionist, or technician went above and beyond to provide exceptional service. Describe the situation and why you were impressed."
  },
  {
    id: "t2_050",
    title: "A Time You Overcame Bad Habits",
    category: "Self-Improvement",
    prompt: "Talk about a habit you successfully quit or changed (e.g., junk food, staying up late, spending too much time gaming). Describe the challenges you faced and how your life improved."
  },
  {
    id: "t2_051",
    title: "A Time You Visited a Park or Nature Reserve",
    category: "Nature",
    prompt: "Talk about a trip to a national park, nature reserve, or botanical garden. Describe the landscape, wildlife or plants you observed, and how peaceful you felt."
  },
  {
    id: "t2_052",
    title: "A Time You Organized a Group Outing",
    category: "Social",
    prompt: "Talk about planning an excursion or activity for a group of friends or coworkers (e.g. escape room, bowling, picnic). Describe the planning steps and how everyone enjoyed it."
  },
  {
    id: "t2_053",
    title: "A Memorable Job Interview",
    category: "Career",
    prompt: "Talk about a job interview that was particularly memorable, unusual, or challenging. Describe the questions asked by the panel, how you responded, and whether you got the job offer."
  },
  {
    id: "t2_054",
    title: "A Time You Learned About Another Culture",
    category: "Culture",
    prompt: "Talk about an opportunity where you learned deeply about customs, food, or traditions of a different culture. Describe how you learned about it and what surprised you most."
  },
  {
    id: "t2_055",
    title: "A Time You Had a Technology Glitch",
    category: "Technology",
    prompt: "Talk about a time when a computer crash, deleted file, or internet failure right before a critical task caused panic. Describe how you dealt with the tech breakdown."
  },
  {
    id: "t2_056",
    title: "A Time You Reconnected with an Old Friend",
    category: "Relationships",
    prompt: "Talk about meeting or contacting a friend after years of lost touch. Describe how you reconnected, what you caught up on, and how it felt to talk again."
  },
  {
    id: "t2_057",
    title: "A Memorable Gift You Gave to Someone",
    category: "Relationships",
    prompt: "Talk about a thoughtful gift you selected and gave to a friend or relative. Describe why you chose that particular item, how you presented it, and their emotional reaction."
  },
  {
    id: "t2_058",
    title: "A Time You Learned to Drive",
    category: "Life Events",
    prompt: "Talk about your experience learning how to drive a car. Describe your driving instructor or parent who taught you, your first time behind the wheel, and passing your test."
  },
  {
    id: "t2_059",
    title: "A Time You Moved House",
    category: "Relocation",
    prompt: "Talk about a time you packed up your belongings and moved to a new home. Describe the packing chaos, moving day logistics, and setting up your new bedroom/living room."
  },
  {
    id: "t2_060",
    title: "A Time You Had to Care for a Sick Friend",
    category: "Relationships",
    prompt: "Talk about a time when a friend or roommate was sick and relied on you for help. Describe what symptoms they had, how you looked after them, and how they recovered."
  },
  {
    id: "t2_061",
    title: "A Book or Movie That Changed Your Perspective",
    category: "Media",
    prompt: "Talk about a inspiring book, documentary, or movie that left a strong impression on you. Describe the plot theme and what profound message affected your thinking."
  },
  {
    id: "t2_062",
    title: "A Time You Tried an Extreme Sport",
    category: "Sports",
    prompt: "Talk about trying a thrilling activity like ziplining, white-water rafting, skiing, or scuba diving. Describe the safety instructions, adrenaline rush, and overall experience."
  },
  {
    id: "t2_063",
    title: "A Time You Had to Return a Purchase",
    category: "Shopping",
    prompt: "Talk about returning a clothing item or electronic device to a store due to wrong size or defect. Describe your conversation with customer service and the outcome."
  },
  {
    id: "t2_064",
    title: "A Time You Experienced a Power Outage",
    category: "Home",
    prompt: "Talk about an evening when the electrical power went out in your neighborhood for hours. Describe what you did without lights or internet, and how you passed the time."
  },
  {
    id: "t2_065",
    title: "A Time You Made a New Friend at Work",
    category: "Workplace",
    prompt: "Talk about meeting someone at your job who became a good personal friend outside of work. Describe how you bonded and shared common interests."
  },
  {
    id: "t2_066",
    title: "A Time You Prepared for an Important Exam",
    category: "Education",
    prompt: "Talk about a high-stakes exam you studied hard for in school or university. Describe your study routine, late-night reviews, and how you performed on test day."
  },
  {
    id: "t2_067",
    title: "A Memorable Wedding You Attended",
    category: "Events",
    prompt: "Talk about a memorable wedding ceremony and reception you attended. Describe the venue decorations, music, traditional dances, and food served."
  },
  {
    id: "t2_068",
    title: "A Time You Solved a Mystery or Problem",
    category: "Problem Solving",
    prompt: "Talk about a strange problem or mysterious noise/issue at work or home that you investigated and solved. Describe the clues you followed and the solution."
  },
  {
    id: "t2_069",
    title: "A Time You Managed a Tight Budget",
    category: "Finance",
    prompt: "Talk about a month or period when money was very tight and you had to strictly control every dollar spent. Describe how you cut costs and managed groceries and bills."
  },
  {
    id: "t2_070",
    title: "A Time You Trained a Co-worker",
    category: "Career",
    prompt: "Talk about training or onboarding a new employee at your workplace. Describe how you explained office procedures, answered their questions, and helped them succeed."
  },
  {
    id: "t2_071",
    title: "A Memorable Amusement Park Visit",
    category: "Recreation",
    prompt: "Talk about visiting a theme park or fun fair with rides and games. Describe your favorite roller coasters, fair treats, and fun moments with companions."
  },
  {
    id: "t2_072",
    title: "A Time You Experienced Flight Turbulence",
    category: "Travel",
    prompt: "Talk about a flight where you encountered rough weather turbulence. Describe the cabin reaction, flight attendants' instructions, and how you felt during the bumpy ride."
  },
  {
    id: "t2_073",
    title: "A Time You Tried a Weird or Exotic Food",
    category: "Food",
    prompt: "Talk about tasting an unusual dish or exotic street food for the very first time. Describe the appearance, taste, texture, and whether you would eat it again."
  },
  {
    id: "t2_074",
    title: "A Time You Attended a Local Festival",
    category: "Culture",
    prompt: "Talk about attending a street festival, farmer's market, or cultural parade in your city. Describe the lively crowd, food stalls, art, and music."
  },
  {
    id: "t2_075",
    title: "A Time You Had an Uncomfortable Seat on Travel",
    category: "Travel",
    prompt: "Talk about a long bus, train, or airplane journey where seating conditions were cramped or uncomfortable. Describe how you coped during the long travel hours."
  },
  {
    id: "t2_076",
    title: "A Time You Created a Home Garden",
    category: "Home",
    prompt: "Talk about planting flowers, herbs, or vegetables in pots or a garden bed. Describe tending to the soil, watering, and seeing the first sprouts grow."
  },
  {
    id: "t2_077",
    title: "A Time You Forgot Something Crucial",
    category: "Memories",
    prompt: "Talk about forgetting an important item like a passport, wallet, ticket, or key right when you needed it most. Describe the scramble to fix the situation."
  },
  {
    id: "t2_078",
    title: "A Time You Had a Plumbing Issue",
    category: "Home Maintenance",
    prompt: "Talk about a clogged drain or overflowing toilet situation at your place. Describe the emergency cleanup effort and calling a plumber."
  },
  {
    id: "t2_079",
    title: "A Time You Kept a Secret",
    category: "Relationships",
    prompt: "Talk about keeping a major secret for a friend or family member (e.g. surprise gift, proposal). Describe how hard it was to keep quiet until the big reveal."
  },
  {
    id: "t2_080",
    title: "A Time You Had to Work Late",
    category: "Career",
    prompt: "Talk about an evening when an urgent project required you to stay late at the office past midnight. Describe the atmosphere and finishing the assignment."
  },
  {
    id: "t2_081",
    title: "A Time You Won a Game of Chance or Raffle",
    category: "Entertainment",
    prompt: "Talk about winning a door prize, lottery ticket, board game, or raffle contest. Describe what prize you won and your reaction when your name was called."
  },
  {
    id: "t2_082",
    title: "A Time You Baked Something Special",
    category: "Food",
    prompt: "Talk about baking a cake, pie, or batch of cookies for a special occasion. Describe gathering ingredients, decorating, and tasting the final baked dessert."
  },
  {
    id: "t2_083",
    title: "A Time You Navigated a Foreign Language Menu",
    category: "Travel",
    prompt: "Talk about ordering food in a foreign country where the menu was in a language you didn't understand. Describe how you pointed or guessed, and what dish arrived."
  },
  {
    id: "t2_084",
    title: "A Time You Participated in a Charity Walk",
    category: "Community",
    prompt: "Talk about joining a 5k charity walk or run for a health awareness cause. Describe the energetic crowd, marching along the route, and finishing."
  },
  {
    id: "t2_085",
    title: "A Time You Repainted a Room",
    category: "Home",
    prompt: "Talk about picking a new paint color for your bedroom or office. Describe taping edges, rolling paint, and how fresh the room looked afterward."
  },
  {
    id: "t2_086",
    title: "A Time You Rescued a Stray Pet",
    category: "Pets",
    prompt: "Talk about finding a lost or stray cat/dog in your neighborhood. Describe catching the animal, checking for a collar tag, and reuniting it with its owner."
  },
  {
    id: "t2_087",
    title: "A Time You Assembled Flat-Pack Furniture",
    category: "Home",
    prompt: "Talk about assembling a bookshelf, desk, or wardrobe with complex instruction manuals and screws. Describe the time it took and final satisfaction."
  },
  {
    id: "t2_088",
    title: "A Time You Attended a Workshop or Seminar",
    category: "Education",
    prompt: "Talk about attending a professional development seminar or hands-on workshop. Describe the speaker, key key takeaways, and practical exercises."
  },
  {
    id: "t2_089",
    title: "A Time You Had a Flat Tire",
    category: "Travel",
    prompt: "Talk about experiencing a flat car tire on a highway or road. Describe pulling over safely, getting out the jack and spare tire, or waiting for roadside assistance."
  },
  {
    id: "t2_090",
    title: "A Time You Met a Neighbor for the First Time",
    category: "Community",
    prompt: "Talk about introducing yourself to a new neighbor moving into your hallway or street. Describe your conversation and welcoming them."
  },
  {
    id: "t2_091",
    title: "A Time You Handled an Unexpected Visitor",
    category: "Social",
    prompt: "Talk about an unexpected visitor dropping by your house unannounced when your place was messy. Describe how you welcomed them and entertained them."
  },
  {
    id: "t2_092",
    title: "A Time You Watched a Meteor Shower or Eclipse",
    category: "Nature",
    prompt: "Talk about watching a night sky phenomenon like shooting stars, a lunar eclipse, or northern lights. Describe the view and feeling of awe."
  },
  {
    id: "t2_093",
    title: "A Time You Received a Compliment at Work",
    category: "Career",
    prompt: "Talk about a time when a supervisor or client gave you sincere praise for your work quality. Describe what project you completed and how it boosted your morale."
  },
  {
    id: "t2_094",
    title: "A Time You Learned an Instrument",
    category: "Hobbies",
    prompt: "Talk about practicing a musical instrument like guitar, piano, or drums. Describe reading notes, practicing chords, and playing your first full song."
  },
  {
    id: "t2_095",
    title: "A Time You Visited a Beach",
    category: "Recreation",
    prompt: "Talk about spending a sunny day at the ocean or lake beach. Describe walking in the sand, swimming in the water, and relaxing in the sun."
  },
  {
    id: "t2_096",
    title: "A Time You Hosted a Game Night",
    category: "Social",
    prompt: "Talk about inviting friends over for board games, card games, or trivia. Describe competitive moments, laughs, and snacks shared."
  },
  {
    id: "t2_097",
    title: "A Time You Made a Big Career Switch",
    category: "Career",
    prompt: "Talk about leaving one job sector to start in a completely different line of work. Describe your motivation, transition period, and satisfaction."
  },
  {
    id: "t2_098",
    title: "A Time You Got Sick While Traveling",
    category: "Travel",
    prompt: "Talk about getting a fever, cold, or food poisoning while away on vacation. Describe finding a pharmacy or doctor in an unfamiliar place."
  },
  {
    id: "t2_099",
    title: "A Time You Crafted a Handmade Gift",
    category: "Creative",
    prompt: "Talk about making a knitted scarf, photo album, wooden box, or card for someone special. Describe creating it and their reaction upon opening it."
  },
  {
    id: "t2_100",
    title: "A Time You Took a Winter Walk",
    category: "Nature",
    prompt: "Talk about walking through a snowy park or forest on a crisp winter day. Describe the quiet snow, fresh cold air, warm clothing, and hot chocolate afterward."
  }
];
