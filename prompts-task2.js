// CELPIP Speaking Task 2: Talking about a Personal Experience (100 Prompts)
// Preparation Time: 30 seconds | Speaking Time: 60 seconds
// Standard Official CELPIP Format: 2 sentences (1: Situation, 2: "Maybe you can talk about...")

const TASK2_PROMPTS = [
  {
    "id": "t2_001",
    "title": "A Memorable Family Trip",
    "category": "Travel",
    "prompt": "Talk about a memorable trip or vacation you took with your family or friends. Maybe you can talk about where you went, what you did there, who you were with, and why it was memorable."
  },
  {
    "id": "t2_002",
    "title": "Overcoming a Difficult Challenge",
    "category": "Life Lessons",
    "prompt": "Talk about a difficult challenge or obstacle you faced in the past. Maybe you can talk about when it happened, what made it challenging, how you handled it, and what you learned from the experience."
  },
  {
    "id": "t2_003",
    "title": "A Time You Helped a Stranger",
    "category": "Social",
    "prompt": "Talk about a time when you helped a stranger or someone in need. Maybe you can talk about when and where it happened, who the person was, what you did to help, and how you felt afterward."
  },
  {
    "id": "t2_004",
    "title": "An Important Decision You Made",
    "category": "Personal Growth",
    "prompt": "Talk about an important decision you had to make in your life. Maybe you can talk about what the choice was, why you had to make it, how you decided, and how it affected your life."
  },
  {
    "id": "t2_005",
    "title": "A Time You Learned a New Skill",
    "category": "Education",
    "prompt": "Talk about a time when you learned a new skill or hobby. Maybe you can talk about what skill you learned, why you chose to learn it, how you practiced, and how you felt about your progress."
  },
  {
    "id": "t2_006",
    "title": "A Surprise Celebration",
    "category": "Events",
    "prompt": "Talk about a surprise party or special celebration you attended or organized. Maybe you can talk about what the celebration was for, who was there, what happened, and why it was memorable."
  },
  {
    "id": "t2_007",
    "title": "A Mistake You Learned From",
    "category": "Life Lessons",
    "prompt": "Talk about a mistake you made in the past at work, school, or home. Maybe you can talk about when it happened, what went wrong, how you resolved the situation, and what you learned from it."
  },
  {
    "id": "t2_008",
    "title": "An Exciting First Day",
    "category": "Work & School",
    "prompt": "Talk about your first day at a new job or school. Maybe you can talk about when it was, how you felt before going, who you met, and what happened during the day."
  },
  {
    "id": "t2_009",
    "title": "A Time You Lost Something Valuable",
    "category": "Personal Experience",
    "prompt": "Talk about a time when you lost something important or valuable. Maybe you can talk about what you lost, when and where it happened, what you did to find it, and how the situation turned out."
  },
  {
    "id": "t2_010",
    "title": "A Special Dining Experience",
    "category": "Food",
    "prompt": "Talk about a special meal or dining experience you had in the past. Maybe you can talk about where you ate, who you were with, what you ate, and why it was memorable."
  },
  {
    "id": "t2_011",
    "title": "A Time You Worked in a Team",
    "category": "Career",
    "prompt": "Talk about a time when you worked with a group of people to complete a task or project. Maybe you can talk about what the project was, who was on your team, what your role was, and how the project turned out."
  },
  {
    "id": "t2_012",
    "title": "An Unexpected Weather Event",
    "category": "Nature",
    "prompt": "Talk about a time when you experienced extreme weather or bad weather conditions. Maybe you can talk about when and where it happened, what the weather was like, what you did, and how you felt."
  },
  {
    "id": "t2_013",
    "title": "A Time You Tried Something Scary",
    "category": "Adventure",
    "prompt": "Talk about a time when you did something that made you feel nervous or scared. Maybe you can talk about what you did, why you decided to do it, what happened, and how you felt afterward."
  },
  {
    "id": "t2_014",
    "title": "A Special Gift You Received",
    "category": "Relationships",
    "prompt": "Talk about a special gift you received in the past. Maybe you can talk about what the gift was, who gave it to you, what the occasion was, and why it was important to you."
  },
  {
    "id": "t2_015",
    "title": "A Childhood Friendship",
    "category": "Memories",
    "prompt": "Talk about a close friend from your childhood or school days. Maybe you can talk about how you met, what activities you enjoyed doing together, and a memorable experience you shared."
  },
  {
    "id": "t2_016",
    "title": "A Time You Stood Up for Something",
    "category": "Personal Growth",
    "prompt": "Talk about a time when you stood up for a belief, a rule, or another person. Maybe you can talk about what the situation was, why you decided to speak up, what happened, and how you felt."
  },
  {
    "id": "t2_017",
    "title": "An Interesting Concert or Show",
    "category": "Entertainment",
    "prompt": "Talk about a live concert, play, or cultural performance you attended in the past. Maybe you can talk about where it took place, who you went with, what the performance was like, and why you enjoyed it."
  },
  {
    "id": "t2_018",
    "title": "A Time You Experienced Travel Delays",
    "category": "Travel",
    "prompt": "Talk about a trip or journey where you experienced long delays or travel problems. Maybe you can talk about where you were going, what caused the delay, what you did while waiting, and how you felt."
  },
  {
    "id": "t2_019",
    "title": "A Favorite Childhood Hobby",
    "category": "Memories",
    "prompt": "Talk about a hobby or activity you enjoyed doing when you were younger. Maybe you can talk about what the activity was, who you did it with, why you liked it, and why you remember it fondly."
  },
  {
    "id": "t2_020",
    "title": "A Time You Saved Money for a Goal",
    "category": "Finance",
    "prompt": "Talk about a time when you saved money to buy or do something special. Maybe you can talk about what you were saving for, how you managed to save the money, what challenges you faced, and how you felt when you reached your goal."
  },
  {
    "id": "t2_021",
    "title": "A Time You Changed Your Opinion",
    "category": "Life Lessons",
    "prompt": "Talk about a time when you changed your mind or opinion about something or someone. Maybe you can talk about what your initial opinion was, what caused you to change your mind, and how you feel about it now."
  },
  {
    "id": "t2_022",
    "title": "A Memorable Birthday",
    "category": "Celebrations",
    "prompt": "Talk about a memorable birthday celebration you had in the past. Maybe you can talk about which birthday it was, who was there with you, what you did to celebrate, and why you remember it."
  },
  {
    "id": "t2_023",
    "title": "A Time You Adapted to a Big Change",
    "category": "Adaptability",
    "prompt": "Talk about a major change you went through in your life. Maybe you can talk about what the change was, how you adapted to it, what difficulties you faced, and how it influenced your life."
  },
  {
    "id": "t2_024",
    "title": "A Time You Got Lost",
    "category": "Adventure",
    "prompt": "Talk about a time when you got lost in an unfamiliar place or city. Maybe you can talk about where you were, how you got lost, what you did to find your way back, and how you felt."
  },
  {
    "id": "t2_025",
    "title": "A Teacher Who Inspired You",
    "category": "Education",
    "prompt": "Talk about a teacher or instructor who had a positive influence on you. Maybe you can talk about who the teacher was, what subject they taught, what made them special, and how they influenced you."
  },
  {
    "id": "t2_026",
    "title": "A Time You Fixed Something Broken",
    "category": "Home & DIY",
    "prompt": "Talk about a time when you repaired something that was broken or not working properly. Maybe you can talk about what was broken, how you figured out how to fix it, what you did, and how you felt when it was fixed."
  },
  {
    "id": "t2_027",
    "title": "A Disappointing Purchase",
    "category": "Shopping",
    "prompt": "Talk about a time when you bought something that did not meet your expectations. Maybe you can talk about what you bought, why you bought it, what was wrong with it, and what you did about it."
  },
  {
    "id": "t2_028",
    "title": "A Time You Volunteered",
    "category": "Community",
    "prompt": "Talk about a time when you volunteered or participated in a community activity. Maybe you can talk about what the event or activity was, what you did to help, who you worked with, and how you felt about the experience."
  },
  {
    "id": "t2_029",
    "title": "A Memorable Holiday Tradition",
    "category": "Culture",
    "prompt": "Talk about a memorable holiday or festival you celebrated with family or friends. Maybe you can talk about what holiday it was, what traditions you followed, who was there, and why it was special to you."
  },
  {
    "id": "t2_030",
    "title": "A Time You Delivered Difficult News",
    "category": "Relationships",
    "prompt": "Talk about a time when you had to share difficult or disappointing news with someone. Maybe you can talk about who you spoke to, what the news was, how you delivered it, and how the person reacted."
  },
  {
    "id": "t2_031",
    "title": "A Creative Project You Completed",
    "category": "Creative",
    "prompt": "Talk about a creative project, craft, or piece of work you completed yourself. Maybe you can talk about what you created, why you decided to make it, how you made it, and how you felt about the result."
  },
  {
    "id": "t2_032",
    "title": "An Outdoor Activity You Enjoyed",
    "category": "Nature",
    "prompt": "Talk about a memorable outdoor activity you took part in, such as hiking, camping, or skiing. Maybe you can talk about where you went, who you were with, what you did, and why it was memorable."
  },
  {
    "id": "t2_033",
    "title": "A Time You Missed a Deadline",
    "category": "Career",
    "prompt": "Talk about a time when you missed an important deadline or appointment. Maybe you can talk about what the deadline was, why you were late or missed it, how you handled the situation, and what the outcome was."
  },
  {
    "id": "t2_034",
    "title": "A Time You Received Unexpected Good News",
    "category": "Life Events",
    "prompt": "Talk about a time when you received surprising or wonderful news. Maybe you can talk about what the news was, where you were when you heard it, how you reacted, and how you celebrated."
  },
  {
    "id": "t2_035",
    "title": "A Time You Cared for an Animal",
    "category": "Pets",
    "prompt": "Talk about a pet you had or an animal you took care of in the past. Maybe you can talk about what kind of animal it was, what you did to care for it, and a memorable moment you shared with it."
  },
  {
    "id": "t2_036",
    "title": "A Time You Won a Competition or Award",
    "category": "Achievement",
    "prompt": "Talk about a time when you won a prize, award, or competition. Maybe you can talk about what the competition was, what you did to prepare, how you felt when you won, and how people around you reacted."
  },
  {
    "id": "t2_037",
    "title": "A Visit to a Museum or Landmark",
    "category": "Culture",
    "prompt": "Talk about a memorable visit to a museum, historical landmark, or tourist attraction. Maybe you can talk about where you went, who was with you, what you saw there, and what made the visit interesting."
  },
  {
    "id": "t2_038",
    "title": "A Communication Misunderstanding",
    "category": "Language",
    "prompt": "Talk about a situation where a misunderstanding or language difficulty occurred. Maybe you can talk about when and where it happened, what caused the confusion, how you resolved it, and how you felt afterward."
  },
  {
    "id": "t2_039",
    "title": "A Time You Had a Very Busy Schedule",
    "category": "Productivity",
    "prompt": "Talk about a time when you were extremely busy with many responsibilities at once. Maybe you can talk about what you had to do, how you managed your time, what difficulties you encountered, and how you felt when it was over."
  },
  {
    "id": "t2_040",
    "title": "A Time You Cooked for Others",
    "category": "Food",
    "prompt": "Talk about a time when you prepared a meal for family or friends. Maybe you can talk about what occasion it was, what dishes you made, how the meal turned out, and how your guests reacted."
  },
  {
    "id": "t2_041",
    "title": "A Memorable Road Trip",
    "category": "Travel",
    "prompt": "Talk about a memorable road trip or car journey you took in the past. Maybe you can talk about where you were traveling to, who you were with, what happened along the way, and why you remember it."
  },
  {
    "id": "t2_042",
    "title": "A Time an Appliance Broke Down",
    "category": "Home",
    "prompt": "Talk about a time when an important machine or household appliance stopped working. Maybe you can talk about what broke, how it affected your daily routine, what you did to fix or replace it, and how it was resolved."
  },
  {
    "id": "t2_043",
    "title": "A Time You Attended a Sporting Event",
    "category": "Sports",
    "prompt": "Talk about a live sporting event or match you attended in the past. Maybe you can talk about what sport it was, who was playing, what the atmosphere was like, and why you enjoyed it."
  },
  {
    "id": "t2_044",
    "title": "A Time You Spoke in Public",
    "category": "Career",
    "prompt": "Talk about a speech or presentation you gave in front of an audience. Maybe you can talk about what topic you spoke about, who was in the audience, how you prepared, and how you felt during the presentation."
  },
  {
    "id": "t2_045",
    "title": "An Emergency Situation",
    "category": "Safety",
    "prompt": "Talk about a sudden emergency or unexpected crisis you experienced in the past. Maybe you can talk about what happened, where you were, what steps you took to stay safe, and how the situation was resolved."
  },
  {
    "id": "t2_046",
    "title": "Meeting Someone Inspiring",
    "category": "Social",
    "prompt": "Talk about a time when you met an inspiring or well-known person. Maybe you can talk about where you met them, what you talked about, what impressed you about them, and how you felt afterward."
  },
  {
    "id": "t2_047",
    "title": "A Great Bargain You Found",
    "category": "Shopping",
    "prompt": "Talk about a time when you found a great deal or discount on something you wanted. Maybe you can talk about what you bought, where you found it, how much you saved, and why you were pleased with the purchase."
  },
  {
    "id": "t2_048",
    "title": "A Memorable Seasonal Activity",
    "category": "Lifestyle",
    "prompt": "Talk about a memorable seasonal activity or outing you participated in during the past year. Maybe you can talk about what activity it was, who you were with, what you did, and why you enjoyed it."
  },
  {
    "id": "t2_049",
    "title": "Great Customer Service You Received",
    "category": "Consumer",
    "prompt": "Talk about a time when you received outstanding customer service at a store, restaurant, or business. Maybe you can talk about where you were, what service was provided, why it stood out to you, and how it made you feel."
  },
  {
    "id": "t2_050",
    "title": "Overcoming a Bad Habit",
    "category": "Self-Improvement",
    "prompt": "Talk about a habit you decided to change or overcome in the past. Maybe you can talk about what the habit was, why you wanted to change it, what steps you took, and how your life changed afterward."
  },
  {
    "id": "t2_051",
    "title": "A Visit to a Park or Nature Reserve",
    "category": "Nature",
    "prompt": "Talk about a memorable visit you made to a park, garden, or natural scenic area. Maybe you can talk about where you went, what you saw there, who you were with, and why you found it enjoyable."
  },
  {
    "id": "t2_052",
    "title": "Organizing a Group Outing",
    "category": "Social",
    "prompt": "Talk about a time when you planned or organized an activity for a group of friends or colleagues. Maybe you can talk about what the activity was, what you had to organize, what happened during the outing, and how everyone enjoyed it."
  },
  {
    "id": "t2_053",
    "title": "A Memorable Job Interview",
    "category": "Career",
    "prompt": "Talk about a job interview you had that was particularly memorable or challenging. Maybe you can talk about what job you applied for, what happened during the interview, how you felt, and what the result was."
  },
  {
    "id": "t2_054",
    "title": "Learning About Another Culture",
    "category": "Culture",
    "prompt": "Talk about a time when you learned about the customs, food, or traditions of another culture. Maybe you can talk about what you learned, how you learned about it, what surprised you, and how you felt about the experience."
  },
  {
    "id": "t2_055",
    "title": "A Technology Problem You Faced",
    "category": "Technology",
    "prompt": "Talk about a time when a computer, phone, or internet failure caused an issue for you. Maybe you can talk about what you were trying to do, what went wrong, how you handled the problem, and how you resolved it."
  },
  {
    "id": "t2_056",
    "title": "Reconnecting with an Old Friend",
    "category": "Relationships",
    "prompt": "Talk about a time when you reconnected with a friend you had not seen or spoken to for a long time. Maybe you can talk about who the friend was, how you got in touch, what you talked about, and how you felt."
  },
  {
    "id": "t2_057",
    "title": "A Meaningful Gift You Gave",
    "category": "Relationships",
    "prompt": "Talk about a thoughtful gift you gave to someone special in the past. Maybe you can talk about who you gave it to, what the gift was, why you chose it, and how the person reacted when they received it."
  },
  {
    "id": "t2_058",
    "title": "Learning to Drive",
    "category": "Life Events",
    "prompt": "Talk about your experience learning to drive or passing a driving test. Maybe you can talk about who taught you, what was difficult about learning, a memorable moment behind the wheel, and how you felt when you learned."
  },
  {
    "id": "t2_059",
    "title": "Moving to a New Home",
    "category": "Relocation",
    "prompt": "Talk about a time when you moved into a new house or apartment. Maybe you can talk about why you moved, what moving day was like, what challenges you encountered, and how you felt in your new home."
  },
  {
    "id": "t2_060",
    "title": "Helping Someone Who Was Ill",
    "category": "Relationships",
    "prompt": "Talk about a time when you took care of a family member, friend, or roommate who was sick. Maybe you can talk about who you helped, what you did to care for them, how long it lasted, and how they recovered."
  },
  {
    "id": "t2_061",
    "title": "A Movie or Book That Influenced You",
    "category": "Media",
    "prompt": "Talk about a movie, book, or story that left a strong impression on you. Maybe you can talk about what it was about, when you saw or read it, what message it conveyed, and why it influenced you."
  },
  {
    "id": "t2_062",
    "title": "Trying an Exciting Adventure Sport",
    "category": "Sports",
    "prompt": "Talk about a time when you tried an exciting or adventurous sport or activity. Maybe you can talk about what activity you tried, where you did it, how you felt before and during the activity, and what the experience was like."
  },
  {
    "id": "t2_063",
    "title": "Returning an Item to a Store",
    "category": "Shopping",
    "prompt": "Talk about a time when you had to return or exchange an item at a store. Maybe you can talk about what item you returned, why you returned it, what happened with customer service, and what the outcome was."
  },
  {
    "id": "t2_064",
    "title": "Experiencing a Power Outage",
    "category": "Home",
    "prompt": "Talk about a time when the electrical power went out where you were living or working. Maybe you can talk about when it happened, what you were doing at the time, how you passed the time without electricity, and how you felt."
  },
  {
    "id": "t2_065",
    "title": "Making a New Friend at Work or School",
    "category": "Workplace",
    "prompt": "Talk about a time when you made a good friend at your job or in school. Maybe you can talk about how you met, what you had in common, what activities you did together, and why you became close."
  },
  {
    "id": "t2_066",
    "title": "Preparing for an Important Exam",
    "category": "Education",
    "prompt": "Talk about an important exam or test you studied hard for in the past. Maybe you can talk about what exam it was, how you prepared for it, how you felt on test day, and what the result was."
  },
  {
    "id": "t2_067",
    "title": "A Memorable Wedding You Attended",
    "category": "Events",
    "prompt": "Talk about a memorable wedding ceremony or reception you attended. Maybe you can talk about whose wedding it was, where it took place, what happened during the celebration, and why it was memorable."
  },
  {
    "id": "t2_068",
    "title": "Solving a Difficult Problem",
    "category": "Problem Solving",
    "prompt": "Talk about a mysterious or difficult problem you had to solve at home or work. Maybe you can talk about what the issue was, how you investigated it, what solution you found, and how you felt afterward."
  },
  {
    "id": "t2_069",
    "title": "Managing on a Tight Budget",
    "category": "Finance",
    "prompt": "Talk about a period in your life when you had to manage your money very carefully. Maybe you can talk about why money was tight, what changes you made to your spending, how you coped, and what you learned from the experience."
  },
  {
    "id": "t2_070",
    "title": "Training a New Colleague",
    "category": "Career",
    "prompt": "Talk about a time when you trained, helped, or showed a new employee around at work. Maybe you can talk about what job it was, what you taught them, what challenges came up, and how they progressed."
  },
  {
    "id": "t2_071",
    "title": "A Visit to an Amusement Park",
    "category": "Recreation",
    "prompt": "Talk about a memorable visit to an amusement park, fair, or theme park. Maybe you can talk about who you went with, what rides or attractions you tried, what happened, and why you enjoyed it."
  },
  {
    "id": "t2_072",
    "title": "A Bumpy Flight Experience",
    "category": "Travel",
    "prompt": "Talk about a flight or journey where you experienced rough travel conditions or bad turbulence. Maybe you can talk about where you were flying, what happened during the flight, how people reacted, and how you felt."
  },
  {
    "id": "t2_073",
    "title": "Trying an Unfamiliar Food",
    "category": "Food",
    "prompt": "Talk about a time when you tried an unusual or unfamiliar dish for the first time. Maybe you can talk about what food it was, where you tried it, what you thought of the taste, and whether you would eat it again."
  },
  {
    "id": "t2_074",
    "title": "Attending a Local Festival",
    "category": "Culture",
    "prompt": "Talk about a street festival, community fair, or parade you attended in the past. Maybe you can talk about where it was held, who you were with, what activities or entertainment you saw, and why you liked it."
  },
  {
    "id": "t2_075",
    "title": "An Uncomfortable Travel Experience",
    "category": "Travel",
    "prompt": "Talk about a long bus, train, or airplane ride that was uncomfortable or difficult. Maybe you can talk about where you were going, what made the journey unpleasant, how you passed the time, and how you felt when you arrived."
  },
  {
    "id": "t2_076",
    "title": "Starting a Home Garden",
    "category": "Home",
    "prompt": "Talk about a time when you planted flowers, vegetables, or plants at home. Maybe you can talk about what you decided to grow, what you did to care for them, what happened over time, and how you felt about your garden."
  },
  {
    "id": "t2_077",
    "title": "Forgetting an Important Item",
    "category": "Memories",
    "prompt": "Talk about a time when you forgot to bring something important when leaving home. Maybe you can talk about what you forgot, where you were going, what you did when you realized it, and how the situation was resolved."
  },
  {
    "id": "t2_078",
    "title": "Dealing with a Home Maintenance Issue",
    "category": "Home Maintenance",
    "prompt": "Talk about a plumbing, electrical, or repair issue that occurred in your home. Maybe you can talk about what went wrong, what you did to handle it, who helped you fix it, and how it was resolved."
  },
  {
    "id": "t2_079",
    "title": "Keeping a Secret for Someone",
    "category": "Relationships",
    "prompt": "Talk about a time when you had to keep an important secret or surprise for someone. Maybe you can talk about what the secret was, who it was for, how you managed to keep it, and what happened when it was revealed."
  },
  {
    "id": "t2_080",
    "title": "Working Late on a Project",
    "category": "Career",
    "prompt": "Talk about a time when you had to work late or put in extra hours to complete a task. Maybe you can talk about what project you were working on, why you had to stay late, who worked with you, and how you felt when it was finished."
  },
  {
    "id": "t2_081",
    "title": "Winning a Prize or Game",
    "category": "Entertainment",
    "prompt": "Talk about a time when you won a raffle, game, contest, or prize. Maybe you can talk about what event it was, what you won, how you felt when your name was announced, and what you did with the prize."
  },
  {
    "id": "t2_082",
    "title": "Baking Something Special",
    "category": "Food",
    "prompt": "Talk about a time when you baked a cake, dessert, or special dish for someone. Maybe you can talk about what you baked, what the occasion was, how the preparation went, and how people liked it."
  },
  {
    "id": "t2_083",
    "title": "Ordering Food in a Foreign Country",
    "category": "Travel",
    "prompt": "Talk about a time when you ordered food in a restaurant where you did not speak the language well. Maybe you can talk about where you were, how you communicated what you wanted, what dish you received, and how the meal was."
  },
  {
    "id": "t2_084",
    "title": "Participating in a Charity Event",
    "category": "Community",
    "prompt": "Talk about a time when you took part in a charity walk, run, or community fundraiser. Maybe you can talk about what cause the event supported, what you did during the event, who was there, and how you felt about participating."
  },
  {
    "id": "t2_085",
    "title": "Painting or Decorating a Room",
    "category": "Home",
    "prompt": "Talk about a time when you repainted or redecorated a room in your home. Maybe you can talk about which room you worked on, what changes you made, what the work involved, and how the room looked when you finished."
  },
  {
    "id": "t2_086",
    "title": "Helping a Lost Pet",
    "category": "Pets",
    "prompt": "Talk about a time when you found a lost or stray pet in your neighborhood. Maybe you can talk about what animal it was, where you found it, what you did to help find its owner, and what happened in the end."
  },
  {
    "id": "t2_087",
    "title": "Assembling Furniture",
    "category": "Home",
    "prompt": "Talk about a time when you put together a piece of furniture by yourself. Maybe you can talk about what you were building, what tools or instructions you used, what difficulties you ran into, and how satisfied you were with the result."
  },
  {
    "id": "t2_088",
    "title": "Attending an Informative Workshop",
    "category": "Education",
    "prompt": "Talk about a workshop, seminar, or training course you attended in the past. Maybe you can talk about what the topic was, who gave the presentation, what you learned from it, and how useful it was."
  },
  {
    "id": "t2_089",
    "title": "Experiencing a Flat Tire",
    "category": "Travel",
    "prompt": "Talk about a time when a bicycle or car tire went flat while you were traveling. Maybe you can talk about where you were going, what happened when the tire went flat, what you did to fix it, and how your journey continued."
  },
  {
    "id": "t2_090",
    "title": "Meeting a New Neighbor",
    "category": "Community",
    "prompt": "Talk about a time when you met a new neighbor for the first time. Maybe you can talk about where and how you met, what you talked about, what impression you had of them, and how your relationship developed."
  },
  {
    "id": "t2_091",
    "title": "An Unexpected Visitor",
    "category": "Social",
    "prompt": "Talk about a time when an unexpected guest or visitor arrived at your home. Maybe you can talk about who visited, why they came unexpectedly, what you did to welcome them, and how the visit went."
  },
  {
    "id": "t2_092",
    "title": "Watching a Night Sky Event",
    "category": "Nature",
    "prompt": "Talk about a time when you watched a meteor shower, eclipse, or unusual night sky phenomenon. Maybe you can talk about where you were, who you were with, what you saw, and how you felt looking at the sky."
  },
  {
    "id": "t2_093",
    "title": "Receiving Praise at Work",
    "category": "Career",
    "prompt": "Talk about a time when a boss, teacher, or client gave you genuine praise for your work. Maybe you can talk about what project or task you accomplished, who praised you, what they said, and how it made you feel."
  },
  {
    "id": "t2_094",
    "title": "Practicing a Musical Instrument",
    "category": "Hobbies",
    "prompt": "Talk about a time when you practiced playing a musical instrument. Maybe you can talk about what instrument it was, how you practiced, what challenges you faced, and how you felt about your playing."
  },
  {
    "id": "t2_095",
    "title": "A Day at the Beach or Lake",
    "category": "Recreation",
    "prompt": "Talk about a memorable day you spent at a beach, lake, or riverside. Maybe you can talk about where you went, who was with you, what you did there, and why you enjoyed the day."
  },
  {
    "id": "t2_096",
    "title": "Hosting a Game Night",
    "category": "Social",
    "prompt": "Talk about a time when you hosted a game night or gathering for friends or family. Maybe you can talk about who came over, what games you played, what food or snacks you shared, and why it was fun."
  },
  {
    "id": "t2_097",
    "title": "Making a Career Change",
    "category": "Career",
    "prompt": "Talk about a time when you switched jobs, fields of study, or career paths. Maybe you can talk about why you made the change, what was difficult about the transition, what you did to adapt, and how you felt about your decision."
  },
  {
    "id": "t2_098",
    "title": "Falling Sick While Traveling",
    "category": "Travel",
    "prompt": "Talk about a time when you felt unwell or got sick while on vacation or traveling. Maybe you can talk about where you were, what happened, how you managed to get help or medicine, and how you recovered."
  },
  {
    "id": "t2_099",
    "title": "Crafting a Handmade Gift",
    "category": "Creative",
    "prompt": "Talk about a time when you made a handmade item or card for someone special. Maybe you can talk about what you made, who you made it for, what the occasion was, and how the person reacted when you gave it to them."
  },
  {
    "id": "t2_100",
    "title": "A Walk on a Winter Day",
    "category": "Nature",
    "prompt": "Talk about a time when you experienced bad weather or a very snowy day. Maybe you can talk about when it happened, who you were with, what you did, and how you felt about the situation."
  }
];
