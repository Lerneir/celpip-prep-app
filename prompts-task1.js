// CELPIP Speaking Task 1: Giving Advice (100 Prompts)
// Preparation Time: 30 seconds | Speaking Time: 90 seconds

const TASK1_PROMPTS = [
  {
    id: "t1_001",
    title: "Choosing a University Major",
    category: "Education",
    prompt: "Your friend Sarah is undecided between studying Computer Science and Graphic Design at university. She asked for your advice. Explain which major she should choose, what factors she should consider, and how she can make the final decision."
  },
  {
    id: "t1_002",
    title: "Planning a First Trip to Canada",
    category: "Travel",
    prompt: "Your colleague Alex is planning his first vacation to Canada during the winter season. He has never experienced cold weather before. Advise him on what clothing to pack, which cities to visit, and what safety precautions to take in winter."
  },
  {
    id: "t1_003",
    title: "Preparing for a Job Interview",
    category: "Career",
    prompt: "Your cousin David has an important interview for a management position next week and feels very nervous. Give him advice on how to prepare, what to wear, and how to stay calm during the interview."
  },
  {
    id: "t1_004",
    title: "Adopting a Pet Dog",
    category: "Lifestyle",
    prompt: "Your neighbor Maria lives in a small apartment and is thinking about adopting a large energetic dog. Give her advice regarding whether this is a good idea, what responsibilities are involved, and what alternative pets she might consider."
  },
  {
    id: "t1_005",
    title: "Starting a Fitness Routine",
    category: "Health",
    prompt: "Your friend John wants to get into shape after being inactive for years. He is considering buying expensive gym equipment for his home. Advise him on whether he should buy equipment or join a local gym, how to start safely, and how to maintain consistency."
  },
  {
    id: "t1_006",
    title: "Buying vs. Renting an Apartment",
    category: "Finance",
    prompt: "Your friend Elena just moved to a new city and cannot decide whether to rent an apartment or buy a condo. Advise her on the financial factors to consider, the lifestyle implications, and how she should make her decision."
  },
  {
    id: "t1_007",
    title: "Learning a New Language",
    category: "Education",
    prompt: "Your coworker Michael wants to learn French within six months for a job promotion. Give him advice on effective study methods, recommended resources or apps, and how to practice speaking daily."
  },
  {
    id: "t1_008",
    title: "Dealing with Workplace Stress",
    category: "Career",
    prompt: "Your friend Jessica is feeling overwhelmed by her heavy workload and tight deadlines at work. Give her advice on how to manage stress, how to communicate with her supervisor, and how to maintain work-life balance."
  },
  {
    id: "t1_009",
    title: "Organizing a Surprise Birthday Party",
    category: "Social",
    prompt: "Your younger brother wants to plan a surprise 50th birthday party for your parents on a tight budget. Advise him on choosing a venue, managing the guest list, and keeping it a surprise."
  },
  {
    id: "t1_010",
    title: "Switching Careers",
    category: "Career",
    prompt: "Your friend Tom has been working in accounting for 10 years but wants to transition into software development. Give him advice on gaining new skills, networking in a new industry, and managing financial risk during the transition."
  },
  {
    id: "t1_011",
    title: "Reducing Household Energy Expenses",
    category: "Lifestyle",
    prompt: "Your neighbor Sam noticed a big increase in his monthly electricity and heating bills. Advise him on simple habit changes, home energy-saving upgrades, and how to monitor electricity usage."
  },
  {
    id: "t1_012",
    title: "Moving to a New City",
    category: "Relocation",
    prompt: "Your friend Lisa is moving to Toronto next month for work. Advise her on finding short-term vs long-term accommodation, getting around using public transport, and making new friends in a big city."
  },
  {
    id: "t1_013",
    title: "Saving Money for a House Down Payment",
    category: "Finance",
    prompt: "Your colleague Ryan wants to save money for his first house down payment over the next two years. Give him advice on cutting daily expenses, creating a monthly budget, and setting up automatic savings."
  },
  {
    id: "t1_014",
    title: "Improving Cooking Skills",
    category: "Lifestyle",
    prompt: "Your friend Chris relies heavily on fast food and wants to start cooking healthy meals at home. Give him advice on beginner recipes, essential kitchen tools, and meal prepping for the week."
  },
  {
    id: "t1_015",
    title: "Handling a Conflict with a Roommate",
    category: "Relationships",
    prompt: "Your friend Anna is frustrated because her roommate consistently forgets to do dishes and keep common areas clean. Give her advice on how to address the issue calmly, establish household ground rules, and resolve the conflict."
  },
  {
    id: "t1_016",
    title: "Starting a Small Online Business",
    category: "Business",
    prompt: "Your cousin Karen makes handmade jewelry and wants to start selling online. Advise her on choosing an e-commerce platform, marketing her products on social media, and managing customer shipping."
  },
  {
    id: "t1_017",
    title: "Preparing for a Public Speaking Presentation",
    category: "Career",
    prompt: "Your coworker Paul has to deliver a presentation to 200 colleagues next week and is terrified of public speaking. Advise him on structuring his presentation, practicing effectively, and handling stage fright."
  },
  {
    id: "t1_018",
    title: "Planning a Budget Family Vacation",
    category: "Travel",
    prompt: "Your friend Mark wants to take his family of four on a week-long summer vacation without spending too much money. Give him advice on affordable destinations, finding flight/hotel deals, and saving on meals."
  },
  {
    id: "t1_019",
    title: "Overcoming Procrastination in Studies",
    category: "Education",
    prompt: "Your younger sister is struggling to study for her final college exams because she keeps getting distracted by her phone. Advise her on time management techniques, creating a study environment, and minimizing digital distractions."
  },
  {
    id: "t1_020",
    title: "Buying a Used Car",
    category: "Finance",
    prompt: "Your friend Brian wants to buy his first used car from a private seller. Advise him on what mechanical checks to perform, how to research fair prices, and what legal paperwork to inspect before paying."
  },
  {
    id: "t1_021",
    title: "Improving Sleep Quality",
    category: "Health",
    prompt: "Your coworker Rachel complains about staying awake for hours every night and feeling exhausted at work. Advise her on bedtime habits, sleep environment adjustments, and lifestyle changes to improve sleep quality."
  },
  {
    id: "t1_022",
    title: "Creating a Community Garden",
    category: "Community",
    prompt: "Your neighbor Wants to start a small vegetable garden in your neighborhood shared park. Advise him on getting permission from local authorities, organizing volunteers, and selecting easy vegetables to grow."
  },
  {
    id: "t1_023",
    title: "Dealing with a Difficult Boss",
    category: "Career",
    prompt: "Your friend Laura feels her boss micromanages her daily tasks and rarely acknowledges good work. Advise her on how to build trust with her manager, document her achievements, and communicate effectively."
  },
  {
    id: "t1_024",
    title: "Choosing between Public Transport vs Driving",
    category: "Lifestyle",
    prompt: "Your colleague Steven just got a new job downtown and is deciding whether to commute by car or take the train. Advise him on comparing commuting costs, travel times, stress levels, and parking convenience."
  },
  {
    id: "t1_025",
    title: "Helping a Shy Child Make Friends",
    category: "Parenting",
    prompt: "Your friend Sophia is worried because her 7-year-old son is very shy and struggles to interact with kids at his new school. Advise her on extracurricular activities, playdates, and confidence-building techniques."
  },
  {
    id: "t1_026",
    title: "Preparing for Winter Driving in Canada",
    category: "Safety",
    prompt: "Your friend Kevin recently moved to Canada and has never driven on icy roads. Advise him on winter tires, emergency car kits, and safe driving techniques on snow."
  },
  {
    id: "t1_027",
    title: "Volunteering for a Local Charity",
    category: "Community",
    prompt: "Your cousin Amanda wants to do volunteer work on weekends but doesn't know which organization to join. Give her advice on choosing a cause matching her interests, balancing volunteer hours, and getting involved."
  },
  {
    id: "t1_028",
    title: "Renovating an Old Kitchen",
    category: "Home",
    prompt: "Your neighbor Robert wants to update his 20-year-old kitchen. He is unsure whether to hire contractors or do DIY work. Advise him on budgeting, deciding which projects to DIY, and choosing durable materials."
  },
  {
    id: "t1_029",
    title: "Managing Personal Credit Card Debt",
    category: "Finance",
    prompt: "Your friend Justin has accumulated credit card debt on three cards and feels stressed. Advise him on repayment strategies (e.g. avalanche vs snowball), negotiating interest rates, and avoiding unnecessary spending."
  },
  {
    id: "t1_030",
    title: "Planning a Remote Work Setup",
    category: "Workplace",
    prompt: "Your colleague Claire was approved to work remotely full-time. Advise her on setting up an ergonomic home office, maintaining professional boundaries with family, and avoiding work burnout."
  },
  {
    id: "t1_031",
    title: "Choosing a Cell Phone Plan",
    category: "Technology",
    prompt: "Your friend Dan is paying too much for his cell phone contract and wants a cheaper alternative. Advise him on comparing mobile providers, evaluating data needs, and deciding between bring-your-own-device vs contract plans."
  },
  {
    id: "t1_032",
    title: "Preparing for a Marathon",
    category: "Sports",
    prompt: "Your brother is planning to run his first 10k marathon in 3 months. Advise him on training schedules, nutrition and hydration, and avoiding running injuries."
  },
  {
    id: "t1_033",
    title: "Handling Bad Customer Service",
    category: "Consumer",
    prompt: "Your friend Julia bought a defective laptop online, and customer support refuses to issue a refund. Advise her on escalation steps, writing a formal complaint letter, and consumer rights options."
  },
  {
    id: "t1_034",
    title: "Organizing a Backyard BBQ Party",
    category: "Social",
    prompt: "Your neighbor Gary wants to host a summer BBQ for 30 neighbors. Advise him on food prep, accommodating dietary restrictions (vegetarian/halal/gluten-free), and keeping guests entertained."
  },
  {
    id: "t1_035",
    title: "Applying for Permanent Residency in Canada",
    category: "Immigration",
    prompt: "Your colleague Victor is preparing his Express Entry application for Canadian Permanent Residency. Advise him on gathering language certificates, organizing work experience credentials, and double-checking application details."
  },
  {
    id: "t1_036",
    title: "Digital Detox for Better Focus",
    category: "Mental Health",
    prompt: "Your friend Sarah spends 5 hours a day on social media and finds it difficult to read books or focus on work. Give her advice on screen time limits, app blockers, and replacing screen habits with offline hobbies."
  },
  {
    id: "t1_037",
    title: "Taking Up Photography as a Hobby",
    category: "Hobbies",
    prompt: "Your cousin Matt wants to take up photography. He wonders if he should buy a high-end DSLR camera right away. Advise him on equipment choices, learning fundamental composition skills, and free online tutorials."
  },
  {
    id: "t1_038",
    title: "Handling Noise Complaints from Neighbors",
    category: "Housing",
    prompt: "Your friend Chloe moved into a building where the upstairs neighbor plays loud music late at night. Advise her on how to approach the neighbor politely, when to notify building management, and legal noise guidelines."
  },
  {
    id: "t1_039",
    title: "Writing an Effective Resume (CV)",
    category: "Career",
    prompt: "Your brother recently graduated and has sent out 50 resumes without getting any interview callbacks. Advise him on tailoring his resume to job descriptions, formatting bullet points, and writing cover letters."
  },
  {
    id: "t1_040",
    title: "Hosting an International Exchange Student",
    category: "Family",
    prompt: "Your friend Peter and his family are considering hosting a high school exchange student from Japan for one semester. Advise him on preparing the guest bedroom, helping the student adapt, and cultural sharing."
  },
  {
    id: "t1_041",
    title: "Dealing with a Canceled Flight",
    category: "Travel",
    prompt: "Your coworker Brenda's flight to Europe was canceled 3 hours before departure. Advise her on dealing with airline staff, claiming compensation/vouchers, and rebooking emergency travel arrangements."
  },
  {
    id: "t1_042",
    title: "Choosing a High School for a Teenager",
    category: "Parenting",
    prompt: "Your friend Mark is deciding whether to send his 14-year-old daughter to a public high school or a specialized IB (International Baccalaureate) program. Advise him on key evaluation factors."
  },
  {
    id: "t1_043",
    title: "Starting an Indoor Houseplant Collection",
    category: "Home",
    prompt: "Your neighbor Nancy wants to add houseplants to her apartment but has killed every plant she owned in the past. Advise her on low-maintenance indoor plants, watering schedules, and proper lighting."
  },
  {
    id: "t1_044",
    title: "Balancing Work and College Studies",
    category: "Education",
    prompt: "Your friend Leo is working 30 hours a week while taking 4 university courses. He feels constantly tired. Give him advice on academic workload management, prioritizing tasks, and communicating with professors."
  },
  {
    id: "t1_045",
    title: "Learning How to Invest in Stocks",
    category: "Finance",
    prompt: "Your colleague Tim has saved $5,000 and wants to start investing in the stock market. Advise him on risk management, starting with index funds vs individual stocks, and financial education resources."
  },
  {
    id: "t1_046",
    title: "Planning a Camping Trip",
    category: "Recreation",
    prompt: "Your friend Sam wants to go on his first weekend wilderness camping trip in a provincial park. Give him advice on essential camping gear, wildlife safety (bears/insects), and park reservation booking."
  },
  {
    id: "t1_047",
    title: "Asking for a Pay Raise",
    category: "Career",
    prompt: "Your coworker Hannah believes she is underpaid after taking on major new responsibilities over the past year. Give her advice on timing her request, gathering performance data, and negotiating professionally."
  },
  {
    id: "t1_048",
    title: "Dealing with Food Allergies in the Family",
    category: "Health",
    prompt: "Your friend George's 5-year-old son was recently diagnosed with a severe peanut allergy. Advise him on home kitchen safety, informing the child's school, and carrying emergency medication (EpiPen)."
  },
  {
    id: "t1_049",
    title: "Choosing a Reliable Internet Service Provider",
    category: "Technology",
    prompt: "Your neighbor Alice moved in and needs high-speed internet for remote work and streaming. Give her advice on checking connection types (fiber vs cable), comparing speed packages, and avoiding hidden contract fees."
  },
  {
    id: "t1_050",
    title: "Caring for an Elderly Parent at Home",
    category: "Family",
    prompt: "Your friend Richard's 80-year-old mother is moving into his house. Advise him on home accessibility modifications (handrails, bath chairs), balancing caregiving duties, and seeking professional home care support."
  },
  {
    id: "t1_051",
    title: "Improving Public Speaking Skills",
    category: "Self-Improvement",
    prompt: "Your friend Ben was elected president of his local community club and must run monthly public meetings. Advise him on Toastmasters clubs, practicing speech delivery, and engaging the audience."
  },
  {
    id: "t1_052",
    title: "Choosing a Bicycle for Daily Commuting",
    category: "Transport",
    prompt: "Your colleague Derek wants to commute 8 kilometers to work by bicycle. Give him advice on choosing between a road bike, hybrid bike, or e-bike, essential safety gear, and route planning."
  },
  {
    id: "t1_053",
    title: "Handling a Disagreeable Team Member",
    category: "Workplace",
    prompt: "Your friend Maria is leading a group project where one team member refuses to submit work on time. Advise her on how to hold a one-on-one meeting, set clear deliverables, and escalate if necessary."
  },
  {
    id: "t1_054",
    title: "Preparing a Car for a Long Road Trip",
    category: "Travel",
    prompt: "Your brother is planning a 2,000 km cross-country road trip with friends. Give him advice on vehicle maintenance checks, route planning, emergency supplies, and driver rest rotations."
  },
  {
    id: "t1_055",
    title: "Adopting Sustainable Living Habits",
    category: "Environment",
    prompt: "Your neighbor Wants to reduce his family's household waste and carbon footprint. Advise him on composting, single-use plastic reduction, energy conservation, and eco-friendly shopping."
  },
  {
    id: "t1_056",
    title: "Planning a Wedding on a Budget",
    category: "Events",
    prompt: "Your friend Emily is getting married next year and wants a memorable celebration for 100 guests under $10,000. Advise her on venue selection, catering alternatives, and saving on decor/invitations."
  },
  {
    id: "t1_057",
    title: "Studying for the CELPIP Exam",
    category: "Test Prep",
    prompt: "Your colleague Gabriel has 4 weeks left before taking his official CELPIP test. Advise him on daily practice schedules, tackling weak areas, taking timed mock tests, and managing test-day anxiety."
  },
  {
    id: "t1_058",
    title: "Dealing with a Stolen Smartphone",
    category: "Security",
    prompt: "Your friend Eric had his smartphone stolen while taking a bus downtown. Advise him on immediate security actions (remotely locking device, changing passwords), reporting to police/carrier, and file backups."
  },
  {
    id: "t1_059",
    title: "Upgrading a Home Security System",
    category: "Home Safety",
    prompt: "Your neighbor Carla is concerned about recent package thefts in the neighborhood. Advise her on smart doorbell cameras, motion sensor lighting, secure package delivery options, and community watch."
  },
  {
    id: "t1_060",
    title: "Choosing a Career Path for a Graduate",
    category: "Career",
    prompt: "Your younger cousin just graduated with a general Bachelor of Arts degree and doesn't know what career path to pursue. Give her advice on informational interviews, career counseling, internships, and skill development."
  },
  {
    id: "t1_061",
    title: "Learning How to Swim as an Adult",
    category: "Sports",
    prompt: "Your friend Jason is 35 years old and feels embarrassed because he never learned how to swim. Give him advice on finding adult swimming lessons, overcoming fear of deep water, and building confidence."
  },
  {
    id: "t1_062",
    title: "Organizing an Office Garage/Storage Cleanout",
    category: "Organization",
    prompt: "Your coworker Wants to declutter his packed garage overflowing with 10 years of boxes. Advise him on sorting categories (keep, donate, sell, trash), hosting a garage sale, and installing storage shelving."
  },
  {
    id: "t1_063",
    title: "Handling Homesickness in a New Country",
    category: "Wellbeing",
    prompt: "Your friend Priya moved abroad 3 months ago and misses her family and traditional food deeply. Advise her on connecting with cultural communities, staying in touch with home, and establishing local routines."
  },
  {
    id: "t1_064",
    title: "Choosing a Daycare for a Toddler",
    category: "Parenting",
    prompt: "Your colleague Sarah is returning to work from maternity leave and needs a daycare for her 18-month-old daughter. Advise her on key questions to ask staff, safety inspections, and registration waiting lists."
  },
  {
    id: "t1_065",
    title: "Preparing for a Job Fair",
    category: "Career",
    prompt: "Your friend Kevin is attending a massive regional employment job fair next week with over 50 hiring companies. Give him advice on researching companies beforehand, elevator pitches, and following up."
  },
  {
    id: "t1_066",
    title: "Managing Time with Multiple Hobbies",
    category: "Lifestyle",
    prompt: "Your cousin Mark loves music, painting, cycling, and gaming, but feels frustrated because he never finishes any project. Give him advice on goal setting, scheduling dedicated hobby time, and focusing on one priority."
  },
  {
    id: "t1_067",
    title: "Choosing a Laptop for College",
    category: "Technology",
    prompt: "Your niece is starting university engineering courses and needs a new laptop under $1,200. Advise her on operating systems (Windows vs Mac), essential hardware specs (RAM, CPU), and student discounts."
  },
  {
    id: "t1_068",
    title: "Fixing a Weak WiFi Signal at Home",
    category: "Technology",
    prompt: "Your neighbor Luke complains that internet disconnects constantly in his second-floor bedroom. Advise him on router positioning, WiFi range extenders or mesh systems, and Ethernet wiring alternatives."
  },
  {
    id: "t1_069",
    title: "Planning a Retirement Savings Strategy",
    category: "Finance",
    prompt: "Your colleague Dave turned 40 and realizes he hasn't saved enough for retirement. Advise him on employer matching programs (RRSP/401k), automated investments, and consulting a financial advisor."
  },
  {
    id: "t1_070",
    title: "Handling Imposter Syndrome at Work",
    category: "Career",
    prompt: "Your friend Lisa was promoted to senior team lead but feels inadequate and worries she will fail. Advise her on dealing with self-doubt, focusing on past successes, and seeking mentorship."
  },
  {
    id: "t1_071",
    title: "Transitioning to a Plant-Based Diet",
    category: "Nutrition",
    prompt: "Your brother wants to switch to a vegetarian diet for health reasons but worries about getting enough protein and iron. Advise him on balanced meal prep, essential nutrients, and gradual dietary changes."
  },
  {
    id: "t1_072",
    title: "Preparing for an Academic IELTS / CELPIP Test Day",
    category: "Test Prep",
    prompt: "Your friend Nina is taking her English proficiency exam tomorrow morning. Give her advice on evening rest, test-day morning routine, necessary ID documents, and managing time during the test."
  },
  {
    id: "t1_073",
    title: "Resolving a Dispute with a Contractor",
    category: "Home",
    prompt: "Your neighbor hired a home painter who finished only half the job and is demanding full payment. Advise your neighbor on reviewing written contracts, documenting work progress, and negotiating resolution."
  },
  {
    id: "t1_074",
    title: "Choosing a Health Insurance Plan",
    category: "Health",
    prompt: "Your colleague Alex is choosing between two health insurance packages offered by his new employer. Advise him on comparing premiums, deductibles, prescription coverage, and dental/vision benefits."
  },
  {
    id: "t1_075",
    title: "Helping an Anxious Friend Before a Driving Test",
    category: "Relationships",
    prompt: "Your friend Sam failed his road driving test once and is retaking it this Friday. Give him advice on overcoming test anxiety, practicing tricky driving maneuvers, and reviewing traffic laws."
  },
  {
    id: "t1_076",
    title: "Starting a Book Club in the Neighborhood",
    category: "Social",
    prompt: "Your neighbor Wants to create a monthly book club for adults in the building. Advise her on picking the first book, choosing meeting locations (library/living room), and hosting discussions."
  },
  {
    id: "t1_077",
    title: "Planning a DIY Home Painting Project",
    category: "Home Improvement",
    prompt: "Your friend Peter wants to repaint his living room walls himself over the weekend. Give him advice on surface preparation, selecting paint finishes (matt vs satin), and essential painting tools."
  },
  {
    id: "t1_078",
    title: "Navigating Public Transit in a Major City",
    category: "Transport",
    prompt: "Your cousin visiting Vancouver is nervous about taking subways and buses alone. Advise her on using transit mobile apps, buying reloadable fare cards, and asking station staff for help."
  },
  {
    id: "t1_079",
    title: "Choosing a Dog Trainer",
    category: "Pets",
    prompt: "Your friend Chloe adopted a puppy that barks constantly at strangers. Advise her on positive reinforcement methods, evaluating professional dog trainers, and daily behavioral practice."
  },
  {
    id: "t1_080",
    title: "Managing Time when Working Two Jobs",
    category: "Career",
    prompt: "Your colleague Ryan works a full-time office job and a part-time evening shift to pay off debt. Advise him on scheduling rest days, preventing exhaustion, and setting long-term career goals."
  },
  {
    id: "t1_081",
    title: "Organizing a Fundraiser for a Local Shelter",
    category: "Community",
    prompt: "Your friend Julia wants to raise $2,000 for a local animal shelter. Advise her on event ideas (bake sale, car wash, online campaign), promoting the event, and collecting transparent donations."
  },
  {
    id: "t1_082",
    title: "Buying First Ergonomic Office Chair",
    category: "Health",
    prompt: "Your coworker Ben suffers from lower back pain after sitting all day at his desk. Advise him on lumbar support features, seat adjustments, and incorporating standing desk breaks."
  },
  {
    id: "t1_083",
    title: "Preparing for a Solo Backpacking Trip",
    category: "Travel",
    prompt: "Your sister wants to go on a solo 2-week backpacking trip across Europe. Advise her on safety measures, hostel bookings, staying connected with family, and lightweight packing."
  },
  {
    id: "t1_084",
    title: "Handling Overspending During Holidays",
    category: "Finance",
    prompt: "Your friend Tom spent too much money on gifts during December and is struggling to pay January bills. Advise him on creating a post-holiday recovery plan, cutting non-essentials, and setting gift budgets next year."
  },
  {
    id: "t1_085",
    title: "Starting a Podcasting Hobby",
    category: "Media",
    prompt: "Your colleague Mark wants to record a weekly podcast about tech trends. Advise him on choosing USB microphones, free audio editing software (Audacity), and publishing audio platforms."
  },
  {
    id: "t1_086",
    title: "Choosing an Online Master's Degree",
    category: "Education",
    prompt: "Your friend Elena is considering an online Master’s degree vs an in-person university program. Advise her on accreditation checks, self-discipline requirements, and networking opportunities."
  },
  {
    id: "t1_087",
    title: "Dealing with Water Damage at Home",
    category: "Home Maintenance",
    prompt: "Your neighbor discovered a minor pipe leak under his bathroom sink causing floor moisture. Advise him on shutting off main water valves, contacting insurance, and drying out affected areas."
  },
  {
    id: "t1_088",
    title: "Improving English Pronunciation and Accent Clarity",
    category: "Language",
    prompt: "Your friend Carlos speaks fluent English grammar but feels native listeners sometimes misunderstand his pronunciation. Advise him on shadowing techniques, recording his voice, and phonetics practice."
  },
  {
    id: "t1_089",
    title: "Planning a Sustainable Gardening System",
    category: "Environment",
    prompt: "Your neighbor wants to install a rainwater collection barrel and compost bin in his backyard. Give him advice on local water permits, setup locations, and winter maintenance."
  },
  {
    id: "t1_090",
    title: "Selecting a Car Insurance Provider",
    category: "Finance",
    prompt: "Your brother bought a new car and received vastly different insurance quotes. Advise him on comprehensive vs collision coverage, raising deductibles to lower premiums, and bundling policies."
  },
  {
    id: "t1_091",
    title: "Navigating Career Advancement in a Large Company",
    category: "Career",
    prompt: "Your friend Sarah has been in an entry-level position for two years and wants to climb the corporate ladder. Advise her on finding an internal mentor, volunteering for cross-department projects, and setting goals."
  },
  {
    id: "t1_092",
    title: "Managing Screen Time for Children",
    category: "Parenting",
    prompt: "Your colleague Mark is worried his 10-year-old son spends 4 hours daily playing video games after school. Advise him on setting household screen rules, offering engaging alternatives, and encouraging outdoor play."
  },
  {
    id: "t1_093",
    title: "Choosing a Gym Membership",
    category: "Fitness",
    prompt: "Your friend Julia is comparing a low-cost 24/7 gym with a boutique fitness studio offering group classes. Advise her on matching gym features to her personal goals, contract cancellation policies, and trial passes."
  },
  {
    id: "t1_094",
    title: "Preparing for a Home Inspection Before Buying",
    category: "Real Estate",
    prompt: "Your brother made an offer on a 30-year-old house subject to inspection. Advise him on finding a certified home inspector, checking critical structural elements (roof, foundation, wiring), and negotiating repairs."
  },
  {
    id: "t1_095",
    title: "Handling Workplace Cultural Differences",
    category: "Career",
    prompt: "Your friend David started working in a diverse multinational office and feels unsure about communication etiquette. Advise him on active listening, observing office customs, and asking open questions."
  },
  {
    id: "t1_096",
    title: "Organizing digital photos and cloud backup",
    category: "Technology",
    prompt: "Your friend Anna has 10,000 photos scattered across old phones and memory cards. Give her advice on organizing photos by year/event, choosing cloud backup solutions (Google Drive/iCloud), and external hard drives."
  },
  {
    id: "t1_097",
    title: "Caring for a Sick Family Member at Home",
    category: "Health",
    prompt: "Your coworker's spouse has severe flu and needs home care for a week. Advise your coworker on isolating germs, managing hydration/medication, and asking for temporary flexible work hours."
  },
  {
    id: "t1_098",
    title: "Choosing a College Dorm vs Off-Campus Apartment",
    category: "Education",
    prompt: "Your cousin is starting freshman year at university and deciding between living in a campus dorm or renting an apartment off-campus. Advise him on social connections, living costs, and meal plans."
  },
  {
    id: "t1_099",
    title: "Planning an Eco-Friendly Birthday Party for Kids",
    category: "Lifestyle",
    prompt: "Your friend Laura wants to host a 6th birthday party for her daughter without single-use plastic cups, balloons, or excess trash. Advise her on reusable party tableware, eco-friendly activities, and party favors."
  },
  {
    id: "t1_100",
    title: "Creating a Personal Emergency Preparedness Kit",
    category: "Safety",
    prompt: "Your neighbor realized his home has no emergency supplies in case of severe storms or power outages. Give him advice on assembling a 72-hour emergency kit (water, non-perishable food, flashlight, first aid, power bank)."
  }
];
