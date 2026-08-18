// CELPIP Speaking Task 5: Comparing and Persuading (100 Prompts)
// Preparation Time: 60 seconds | Speaking Time: 60 seconds

const TASK5_PROMPTS = [
  {
    "id": "t5_001",
    "title": "Apartment Rental Selection",
    "category": "Housing & Living",
    "context": "You and your partner Chris are looking to rent an apartment in the city.",
    "targetAudience": "Your partner, Chris",
    "partnerChoiceName": "Downtown Modern Studio",
    "partnerRationale": "Chris wants the downtown studio because it is steps away from nightlife, bars, and has an indoor fitness center.",
    "optionA": {
      "id": "opt_a",
      "name": "Suburban 2-Bedroom Townhouse",
      "price": "$1,850 / month (All Utilities Included)",
      "location": "Quiet Suburb (30 min commuter train to core)",
      "specs": "950 sq. ft. \u2022 2 Bed, 1.5 Bath",
      "features": [
        "Private fenced backyard with patio & BBQ area",
        "Dedicated garage parking included for free",
        "In-suite laundry room with full-size washer & dryer",
        "Quiet residential community with parks and grocery stores"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Midtown 1-Bedroom Condo",
      "price": "$2,100 / month (+ Hydro & Internet)",
      "location": "Midtown Hub (15 min direct subway to core)",
      "specs": "620 sq. ft. \u2022 1 Bed, 1 Bath",
      "features": [
        "Floor-to-ceiling windows with skyline views",
        "24/7 Concierge and secure refrigerated parcel lockers",
        "Rooftop terrace and shared resident party lounge",
        "Underground heated parking available ($100/mo extra)"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Downtown Modern Studio",
      "price": "$2,350 / month (+ Hydro & Parking)",
      "location": "Downtown Entertainment District (Steps to subway)",
      "specs": "450 sq. ft. \u2022 Open Studio, 1 Bath",
      "features": [
        "Walking distance to downtown offices and trendy clubs",
        "State-of-the-art rooftop pool, sauna, and 24/7 gym",
        "Designer European stainless steel appliances",
        "No parking, no balcony, minimal storage space"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Chris's desire for nightlife, but contrast the usable living area (950 sq. ft vs 450 sq. ft).",
      "Emphasize total monthly savings ($500+ less with all utilities and parking included).",
      "Mention lifestyle benefits: private backyard, quiet sleeping environment, and second bedroom for home office."
    ]
  },
  {
    "id": "t5_002",
    "title": "Home Purchase: Detached vs. Semi-Detached",
    "category": "Housing & Living",
    "context": "You and your spouse Alex are deciding on your first home purchase.",
    "targetAudience": "Your spouse, Alex",
    "partnerChoiceName": "Modern High-Rise Penthouse Condo",
    "partnerRationale": "Alex prefers the penthouse condo for its luxury finishings, skyline view, and zero yard maintenance.",
    "optionA": {
      "id": "opt_a",
      "name": "Mature Detached House with Large Lot",
      "price": "$720,000 (Low property taxes)",
      "location": "Established neighborhood near top-ranked schools",
      "specs": "1,600 sq. ft. \u2022 3 Bed, 2 Bath \u2022 50ft Lot",
      "features": [
        "Spacious private backyard with mature fruit trees",
        "Double private driveway with attached 2-car garage",
        "No monthly condo or maintenance fees ever",
        "Solid brick construction with room to expand or renovate"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Brand New Semi-Detached with Finished Basement",
      "price": "$750,000 (Builder warranty included)",
      "location": "New master-planned suburban community",
      "specs": "1,850 sq. ft. (incl. basement) \u2022 3 Bed, 3 Bath",
      "features": [
        "EnergyStar certified with heat pump & smart thermostat",
        "Finished basement with separate entrance for rental income",
        "Modern open-concept kitchen with quartz island",
        "Tarion new home warranty protection for 7 years"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Modern High-Rise Penthouse Condo",
      "price": "$790,000 ($850/mo condo maintenance fee)",
      "location": "Downtown Core (Steps to financial hub)",
      "specs": "1,050 sq. ft. \u2022 2 Bed, 2 Bath \u2022 1 Parking",
      "features": [
        "Wrap-around glass balcony with panoramic city views",
        "Full building amenities (valet, gym, indoor pool)",
        "Zero exterior maintenance or lawn mowing required",
        "High monthly maintenance fees that increase annually"
      ]
    },
    "persuasionGuidance": [
      "Highlight the long-term appreciation and freedom of land ownership with zero monthly condo fees ($850/mo savings).",
      "Explain the family growth potential with multiple bedrooms, yard, and private parking.",
      "Address future resale value compared to depreciating condo fees."
    ]
  },
  {
    "id": "t5_003",
    "title": "Student Housing for Academic Year",
    "category": "Housing & Living",
    "context": "You and your university friend Liam need to choose accommodation for your upcoming academic year.",
    "targetAudience": "Your friend, Liam",
    "partnerChoiceName": "Luxury Private Student Studio",
    "partnerRationale": "Liam wants the private luxury studio because he wants complete privacy and his own private gaming room.",
    "optionA": {
      "id": "opt_a",
      "name": "Off-Campus Shared 3-Bedroom Flat",
      "price": "$750 / month per room (Heat & Water included)",
      "location": "10-minute walk to university main campus",
      "specs": "Shared flat with 2 other quiet engineering students",
      "features": [
        "Spacious furnished bedroom with large study desk",
        "Shared full kitchen, living room, and high-speed Wi-Fi",
        "Very low cost allowing savings for textbooks and food",
        "Friendly study group atmosphere with fellow students"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "On-Campus Traditional Dormitory",
      "price": "$1,100 / month (Includes Meal Plan)",
      "location": "Right in the center of campus next to library",
      "specs": "Single occupancy dorm room with shared floor bathroom",
      "features": [
        "Unlimited access to university dining hall meals",
        "2-minute walk to morning lectures and library",
        "Residence advisor support and campus social activities",
        "All maintenance, cleaning, and security provided"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Luxury Private Student Studio",
      "price": "$1,850 / month (+ Electricity & Internet)",
      "location": "Downtown building (25 min bus ride to campus)",
      "specs": "Private self-contained studio apartment",
      "features": [
        "Private kitchen and private bathroom with laundry",
        "Building games room, cinema room, and gym",
        "High rent requiring a large student loan",
        "Long winter commute by public transit every day"
      ]
    },
    "persuasionGuidance": [
      "Point out the massive cost difference ($750 vs $1,850/mo), saving over $10,000 during the school year.",
      "Highlight the convenience of walking to campus in 10 minutes vs a cold 25-minute winter bus commute.",
      "Explain that sharing an apartment provides a balanced study environment while keeping independence."
    ]
  },
  {
    "id": "t5_004",
    "title": "Retirement Community for Aging Parents",
    "category": "Housing & Living",
    "context": "You and your sibling Priya are helping your retired parents choose their next living arrangement.",
    "targetAudience": "Your sibling, Priya",
    "partnerChoiceName": "Isolated Rural Lake Bungalow",
    "partnerRationale": "Priya thinks our parents would enjoy the peace, fishing, and quiet nature of a rural bungalow.",
    "optionA": {
      "id": "opt_a",
      "name": "Active Independent Seniors Community",
      "price": "$2,800 / month (Includes 1 meal/day & housekeeping)",
      "location": "Suburban area (5 min to hospital and clinic)",
      "specs": "Spacious 1-Bedroom Suite with safety features",
      "features": [
        "Daily social calendar, craft classes, and group excursions",
        "24/7 on-site emergency call response staff",
        "Weekly housekeeping and linen laundry service included",
        "Shuttle bus to shopping centers and grocery stores"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Accessible Ground-Floor Condominium",
      "price": "$420,000 Purchase ($450/mo maintenance)",
      "location": "Centrally located across from community park",
      "specs": "2-Bedroom, 2-Bath with zero stairs",
      "features": [
        "Completely step-free layout with walk-in shower",
        "Extra guest bedroom for family visits and grandchildren",
        "Maintains full independence and home equity ownership",
        "Building features heated underground parking and garden"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Isolated Rural Lake Bungalow",
      "price": "$480,000 Purchase (+ High heating & upkeep)",
      "location": "Rural lake district (45 min drive to nearest hospital)",
      "specs": "3-Bedroom rustic bungalow on 2 acres",
      "features": [
        "Peaceful lake views and large garden area",
        "Requires heavy winter snow shoveling and lawn mowing",
        "Far away from emergency medical care and specialists",
        "Parents cannot drive in harsh winter storms"
      ]
    },
    "persuasionGuidance": [
      "Address safety concerns: rural isolation makes winter driving and medical emergency access dangerous.",
      "Highlight the ease of living with accessible features, nearby healthcare, and zero property maintenance burdens.",
      "Show how an active community or accessible condo keeps them socially connected without exhausting physical chores."
    ]
  },
  {
    "id": "t5_005",
    "title": "Vacation Property Rental for Summer",
    "category": "Housing & Living",
    "context": "You and your family are choosing a 2-week vacation rental property for July in Ontario.",
    "targetAudience": "Your brother, Marcus",
    "partnerChoiceName": "Remote Backcountry Cabin without Electricity",
    "partnerRationale": "Marcus wants an off-grid wilderness cabin to experience authentic survival camping and complete digital detox.",
    "optionA": {
      "id": "opt_a",
      "name": "Lake Muskoka Waterfront Cottage",
      "price": "$2,600 / week (Split between families)",
      "location": "Muskoka Lakefront (Private dock & beach)",
      "specs": "4-Bedroom, 2-Bath traditional cottage",
      "features": [
        "Private sandy beach with kayaks, canoe, and paddleboards",
        "Large wrap-around deck with propane BBQ and firepit",
        "Full modern kitchen, high-speed Wi-Fi, and air conditioning",
        "10-minute drive to town for groceries and restaurants"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Mont-Tremblant Resort Townhome",
      "price": "$2,200 / week (Resort amenities included)",
      "location": "Pedestrian village near hiking trails and lake",
      "specs": "3-Bedroom, 3-Bath luxury townhome",
      "features": [
        "Access to resort swimming pools, hot tubs, and tennis courts",
        "Steps to gondola rides, mountain bike trails, and cafes",
        "Modern luxury finishes with gas fireplace and scenic views",
        "Organized daily kids activities and evening live music"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Remote Backcountry Cabin (Off-Grid)",
      "price": "$1,400 / week",
      "location": "Deep forest (Accessible only by 30-minute boat ride)",
      "specs": "2-Bedroom rustic cabin with wood stove",
      "features": [
        "Total isolation with no cell service or electricity",
        "Requires bringing all potable water, ice, and food supplies",
        "Outdoor outhouse with no indoor shower or refrigeration",
        "Difficult and uncomfortable for young kids and grandparents"
      ]
    },
    "persuasionGuidance": [
      "Explain that with young children and elders, having electricity, clean running water, and a modern kitchen is essential.",
      "Show that the Lake Muskoka cottage still offers pristine nature, private dock, and canoeing while maintaining comfort.",
      "Point out the safety risk of being 30 minutes away by boat in case of medical issues or severe thunderstorms."
    ]
  },
  {
    "id": "t5_006",
    "title": "Basement Suite vs. High-Rise Condo Rental",
    "category": "Housing & Living",
    "context": "You and your colleague Ryan are relocating for a 1-year contract and looking for a rental place.",
    "targetAudience": "Your colleague, Ryan",
    "partnerChoiceName": "High-End Downtown Loft",
    "partnerRationale": "Ryan prefers the trendy downtown loft for its 14-foot ceilings, exposed brick, and proximity to trendy pubs.",
    "optionA": {
      "id": "opt_a",
      "name": "Legal 2-Bedroom Walkout Basement Suite",
      "price": "$1,400 / month (High-speed Wi-Fi & Heat included)",
      "location": "Quiet residential avenue near express bus line",
      "specs": "800 sq. ft. \u2022 Large above-ground windows",
      "features": [
        "Full private walkout entrance facing a sunny garden",
        "Newly renovated kitchen with full-size appliances",
        "Free driveway parking spot and shared laundry access",
        "Save $1,000 every month towards financial goals"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Bright High-Rise 1-Bedroom Condo",
      "price": "$1,950 / month (+ Hydro)",
      "location": "Transit station hub (Direct access to train)",
      "specs": "580 sq. ft. \u2022 1 Bed, 1 Bath \u2022 18th Floor",
      "features": [
        "Private balcony with unobstructed morning sunshine",
        "In-building gym, co-working lounge, and 24-hr security",
        "En-suite stacked washer and dryer",
        "Underground secure bike storage"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "High-End Downtown Loft",
      "price": "$2,600 / month (+ Hydro, Parking & Internet)",
      "location": "Trendy Arts District (Noisy weekend streets)",
      "specs": "650 sq. ft. \u2022 Open loft concept",
      "features": [
        "Exposed brick walls, wood beams, and tall ceilings",
        "Surrounded by trendy bars, cafes, and art galleries",
        "High utility costs due to drafty vintage windows",
        "Very expensive rent consuming over 50% of monthly income"
      ]
    },
    "persuasionGuidance": [
      "Highlight the immense annual savings (saving over $14,000 across our 1-year contract).",
      "Point out that the walkout suite has full above-ground windows, private entrance, and free parking.",
      "Explain that spending less on rent allows frequent travel, dining out, and stress-free living."
    ]
  },
  {
    "id": "t5_007",
    "title": "Sublet Choice for Summer Internship",
    "category": "Housing & Living",
    "context": "You and your classmate Maya have 4-month summer internships in Vancouver and need short-term housing.",
    "targetAudience": "Your classmate, Maya",
    "partnerChoiceName": "Downtown Extended-Stay Hotel Suite",
    "partnerRationale": "Maya wants to book an extended-stay hotel because daily housekeeping and fresh towels are provided.",
    "optionA": {
      "id": "opt_a",
      "name": "Fully Furnished 2-Bedroom University Sublet",
      "price": "$1,600 / month Total ($800 each, all-inclusive)",
      "location": "Near UBC campus (Quick bus to downtown)",
      "specs": "Fully furnished 2-Bed apartment with study desks",
      "features": [
        "Fully equipped kitchen with all cookware and dishes",
        "High-speed fiber internet and utilities included",
        "Close to Pacific Spirit Park trails and beaches",
        "Flexible 4-month exact lease matching our internship dates"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Furnished Yaletown 1-Bedroom + Den Sublet",
      "price": "$2,400 / month Total ($1,200 each, utilities incl.)",
      "location": "Yaletown Downtown (5 min walk to office)",
      "specs": "1 Bedroom + Den with sofa-bed, 1 Bath",
      "features": [
        "Walking distance to both our internship offices",
        "Modern high-rise with gym and rooftop pool",
        "In-suite laundry and dishwasher",
        "Safe neighborhood with grocery stores on the block"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Downtown Extended-Stay Hotel Suite",
      "price": "$4,200 / month Total ($2,100 each)",
      "location": "Downtown Core",
      "specs": "Small hotel room with kitchenette and 2 queen beds",
      "features": [
        "Daily housekeeping and front desk service",
        "Extremely high cost exceeding our internship stipends",
        "Cramped living area with no proper desks for study/work",
        "Limited cooking equipment with only a mini-fridge and microwave"
      ]
    },
    "persuasionGuidance": [
      "Contrast the cost: $800\u2013$1,200 each for a real furnished apartment vs $2,100 each for a cramped hotel room.",
      "Highlight having a proper full kitchen to cook healthy meals instead of eating expensive restaurant takeout.",
      "Emphasize having dedicated private bedrooms with study desks for remote work and privacy."
    ]
  },
  {
    "id": "t5_008",
    "title": "Townhouse vs. Detached House in Calgary",
    "category": "Housing & Living",
    "context": "You and your spouse Jordan are deciding between two properties to purchase in Calgary.",
    "targetAudience": "Your spouse, Jordan",
    "partnerChoiceName": "Suburban Mega-Mansion Far from City",
    "partnerRationale": "Jordan likes the massive 3,500 sq. ft. home because of the huge basement and home theatre room.",
    "optionA": {
      "id": "opt_a",
      "name": "Modern 3-Story Inner-City Townhouse",
      "price": "$460,000 ($180/mo maintenance)",
      "location": "Inner-City SW (10 min to Downtown / LRT station)",
      "specs": "1,550 sq. ft. \u2022 3 Bed, 2.5 Bath \u2022 Double Garage",
      "features": [
        "Private rooftop patio with downtown skyline and mountain views",
        "Modern quartz finishes, 9ft ceilings, and gas fireplace",
        "Zero snow shoveling or landscaping chores (handled by HOA)",
        "Short 15-minute commute to work, restaurants, and rivers"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Detached 2-Story Home in Established Community",
      "price": "$510,000 (No maintenance fees)",
      "location": "Established NW neighborhood near parks and schools",
      "specs": "1,800 sq. ft. \u2022 3 Bed, 2.5 Bath \u2022 Fenced Yard",
      "features": [
        "Large private backyard with deck and mature trees",
        "Unfinished basement ready for custom home theatre",
        "Walking distance to elementary school and shopping plaza",
        "Attached 2-car heated garage"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Suburban Mega-Mansion (Far Out)",
      "price": "$620,000 (+ High property taxes and utility bills)",
      "location": "Far outskirts (55-minute drive to downtown in traffic)",
      "specs": "3,500 sq. ft. \u2022 5 Bed, 4 Bath \u2022 Huge lot",
      "features": [
        "Massive space with built-in cinema and gym room",
        "Exhausting 2-hour daily commute in winter road conditions",
        "Enormous monthly gas heating bills during winter (-30\u00b0C)",
        "Requires hours of weekend maintenance and lawn care"
      ]
    },
    "persuasionGuidance": [
      "Point out that a 2-hour daily commute severely drains quality of life, family time, and fuel budget.",
      "Highlight that the inner-city townhouse or established home provides the perfect balance of modern luxury and proximity.",
      "Show how utility and heating costs for a 3,500 sq. ft. home in Alberta winters are substantially higher."
    ]
  },
  {
    "id": "t5_009",
    "title": "Choosing Room in Shared House",
    "category": "Housing & Living",
    "context": "You and your friend Kevin are signing a lease for a shared 4-bedroom house and deciding on room allocations.",
    "targetAudience": "Your friend, Kevin",
    "partnerChoiceName": "Private 1-Bedroom Condo Downtown Alone",
    "partnerRationale": "Kevin is considering backing out to rent a private 1-bedroom condo downtown for complete autonomy.",
    "optionA": {
      "id": "opt_a",
      "name": "Master Bedroom with Private Ensuite Bathroom",
      "price": "$950 / month (Share utilities 4 ways)",
      "location": "Top floor of bright spacious house",
      "specs": "Large 16x14 ft room with walk-in closet",
      "features": [
        "Private 4-piece bathroom attached to the room",
        "Space for queen bed, sofa, and double study desks",
        "Direct access to shared backyard, full kitchen, and living room",
        "Save $800/month compared to living in a private condo"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Standard Upper Room with Shared Bath",
      "price": "$750 / month (Share utilities 4 ways)",
      "location": "Quiet corner of upper floor facing garden",
      "specs": "12x11 ft room with double closet",
      "features": [
        "Bright sunny window with garden view",
        "Shared bathroom with only 1 other clean roommate",
        "Ultra-low monthly expenses allowing max savings",
        "Access to whole house amenities and free driveway parking"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Private 1-Bedroom Condo Downtown Alone",
      "price": "$1,900 / month (+ $150 Hydro & Internet)",
      "location": "Downtown Core",
      "specs": "500 sq. ft. compact unit",
      "features": [
        "Complete solitary living with no roommates",
        "Extremely high living cost taking 60% of monthly take-home pay",
        "No private yard or extra space for hosting friends",
        "High financial stress with zero buffer for emergencies"
      ]
    },
    "persuasionGuidance": [
      "Highlight the immense savings of living in the shared house (saving almost $1,200 every single month).",
      "Explain that taking the Master Bedroom gives him total bathroom privacy and ample space like a studio.",
      "Point out the social benefits and shared chores of living with good friends rather than being isolated."
    ]
  },
  {
    "id": "t5_010",
    "title": "Rural Acreage vs. Suburban Family Home",
    "category": "Housing & Living",
    "context": "You and your partner Taylor are deciding where to settle down with your future family.",
    "targetAudience": "Your partner, Taylor",
    "partnerChoiceName": "Isolated 10-Acre Hobby Farm",
    "partnerRationale": "Taylor dreams of raising horses, chickens, and having 10 acres of open countryside.",
    "optionA": {
      "id": "opt_a",
      "name": "Suburban Home on Quiet Cul-de-Sac",
      "price": "$680,000 (City water, sewage, and high-speed fiber)",
      "location": "Suburban neighborhood (20 min to city center)",
      "specs": "2,200 sq. ft. \u2022 4 Bed, 3 Bath \u2022 Fenced Yard",
      "features": [
        "Safe neighborhood street where kids can ride bikes safely",
        "5-minute walk to elementary school, parks, and library",
        "City services: reliable snow plows, city water, and trash pickup",
        "Easy commute to workplaces and healthcare facilities"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Semi-Rural 1-Acre Property Near Town",
      "price": "$710,000 (Municipal services & private lot)",
      "location": "Edge of town (7 min drive to schools and stores)",
      "specs": "2,000 sq. ft. Bungalow \u2022 3 Bed, 2 Bath \u2022 1 Acre",
      "features": [
        "Spacious 1-acre lot with room for a large organic garden and workshop",
        "Connected to municipal water and high-speed internet",
        "Scenic nature views while being close to grocery stores",
        "Attached 2-car garage plus detached storage shed"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Isolated 10-Acre Hobby Farm",
      "price": "$750,000 (+ High upkeep, septic, well & machinery)",
      "location": "Remote rural area (50 min to city, no school bus)",
      "specs": "Old 1,700 sq. ft. Farmhouse with barns",
      "features": [
        "Large open land for livestock and total seclusion",
        "Requires expensive farm equipment, tractors, and constant maintenance",
        "Relies on septic tank and well water with potential winter freeze",
        "Far from pediatric clinics, emergency services, and kid activities"
      ]
    },
    "persuasionGuidance": [
      "Address the heavy physical and financial burden of managing a 10-acre farm alongside full-time careers.",
      "Show how the 1-acre semi-rural property or suburban home provides plenty of space and gardens without overwhelming maintenance.",
      "Highlight the practical safety of having nearby schools, emergency medical care, and reliable city snow clearing."
    ]
  },
  {
    "id": "t5_011",
    "title": "Daily Commute Vehicle",
    "category": "Automotive & Transportation",
    "context": "You and Your partner are deciding on daily commute vehicle.",
    "targetAudience": "Your partner, Daniel",
    "partnerChoiceName": "Gas V8 7-Passenger Minivan",
    "partnerRationale": "Daniel likes the minivan because of maximum cargo space for occasional hardware store runs.",
    "optionA": {
      "id": "opt_a",
      "name": "Compact Electric Hatchback (EV)",
      "price": "$38,000 ($5,000 Federal EV Rebate)",
      "location": "400 km Battery Range",
      "specs": "Zero Emissions \u2022 5-Seater",
      "features": [
        "Save $2,500 annually on gasoline",
        "Free home Level 2 charging installation rebate",
        "High safety rating with automated emergency braking",
        "Eligible for green vehicle HOV carpool lane access"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "AWD Compact SUV with Winter Package",
      "price": "$35,000",
      "location": "All-Wheel Drive System",
      "specs": "32 MPG Hwy \u2022 5-Seater",
      "features": [
        "Superb handling in deep snow and ice conditions",
        "Heated steering wheel, heated seats, and remote engine start",
        "High ground clearance for Canadian winter roads",
        "Proven reliability and low maintenance costs"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Gas V8 7-Passenger Minivan",
      "price": "$48,000",
      "location": "Heavy V8 Gas Engine",
      "specs": "16 MPG City \u2022 7-Seater",
      "features": [
        "Huge cargo capacity and sliding doors",
        "Very expensive fuel bills for daily commuting",
        "Difficult to park in tight underground city garages",
        "High insurance premiums and depreciation"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Compact Electric Hatchback (EV) or AWD Compact SUV with Winter Package over Gas V8 7-Passenger Minivan.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_012",
    "title": "Car Purchase: Certified Pre-Owned vs. Lease",
    "category": "Automotive & Transportation",
    "context": "You and Your spouse are deciding on car purchase: certified pre-owned vs. lease.",
    "targetAudience": "Your spouse, Claire",
    "partnerChoiceName": "Brand New Luxury Sports Coupe",
    "partnerRationale": "Claire wants a luxury sports coupe for speed and prestige on weekend drives.",
    "optionA": {
      "id": "opt_a",
      "name": "Certified Pre-Owned 3-Year-Old Sedan",
      "price": "$22,000 Total Purchase",
      "location": "Low mileage (35,000 km)",
      "specs": "Comprehensive 5-Year Warranty",
      "features": [
        "Depreciation already absorbed by previous owner",
        "Reliable 4-cylinder engine with low insurance cost",
        "Full ownership with zero mileage limits or return fees",
        "Passed 150-point certified dealer inspection"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "3-Year Fixed Lease on New Crossover",
      "price": "$340 / month ($0 Down Payment)",
      "location": "Brand new vehicle",
      "specs": "Full Factory Bumper-to-Bumper Warranty",
      "features": [
        "Drive a brand-new car with latest driver-assist safety tech",
        "Fixed monthly payment covering all major mechanical repairs",
        "Option to purchase or upgrade at lease end",
        "Predictable monthly budgeting without repair surprises"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Brand New Luxury Sports Coupe",
      "price": "$62,000 ($850/mo financing + high insurance)",
      "location": "High-performance turbo engine",
      "specs": "2-Seater \u2022 RWD",
      "features": [
        "Eye-catching design and high top speed",
        "Extremely high fuel consumption (Premium 91 gas required)",
        "Poor handling on snowy and icy Canadian roads",
        "High monthly insurance rates ($350+/month)"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Certified Pre-Owned 3-Year-Old Sedan or 3-Year Fixed Lease on New Crossover over Brand New Luxury Sports Coupe.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_013",
    "title": "City Transportation: Transit Pass vs. E-Bike",
    "category": "Automotive & Transportation",
    "context": "You and Your coworker are deciding on city transportation: transit pass vs. e-bike.",
    "targetAudience": "Your coworker, Sam",
    "partnerChoiceName": "Daily Uber & Taxi Rides",
    "partnerRationale": "Sam prefers taking Uber every morning because he gets door-to-door dropoff without walking.",
    "optionA": {
      "id": "opt_a",
      "name": "Annual Unlimited Public Transit Pass",
      "price": "$1,450 / year ($120/month)",
      "location": "Unlimited bus, subway & light rail",
      "specs": "Presto / Compass Card",
      "features": [
        "Unlimited trips anytime including weekends and rush hour",
        "Dedicated bus/subway lanes bypass rush hour gridlock",
        "Zero parking costs, maintenance, or gas expenses",
        "Tax credit eligible under green commuter programs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "All-Weather Commuter E-Bike",
      "price": "$1,800 One-time Purchase",
      "location": "65 km Battery Range \u2022 32 km/h",
      "specs": "Fat-tire snow/rain ready",
      "features": [
        "Door-to-door flexibility with zero wait times for transit",
        "Built-in cargo rack and pannier bags for groceries",
        "Pedal-assist gives great low-impact cardio exercise",
        "Annual operating cost is under $30 in electricity"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Daily Uber & Taxi Rides",
      "price": "$25\u2013$35 / day ($600+/month)",
      "location": "On-demand rideshare app",
      "specs": "Door-to-door service",
      "features": [
        "Convenient direct pickup at door",
        "Costs over $7,000 annually consuming savings",
        "Surge pricing during snowstorms and heavy rain",
        "Vulnerable to driver delays and cancellations"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Annual Unlimited Public Transit Pass or All-Weather Commuter E-Bike over Daily Uber & Taxi Rides.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_014",
    "title": "Family Road Trip Vehicle",
    "category": "Automotive & Transportation",
    "context": "You and Your spouse are deciding on family road trip vehicle.",
    "targetAudience": "Your spouse, Elena",
    "partnerChoiceName": "Flying and Renting Compact Cars",
    "partnerRationale": "Elena suggests booking flights and renting compact rental cars at each destination.",
    "optionA": {
      "id": "opt_a",
      "name": "Rented Class-C RV Motorhome",
      "price": "$1,800 for 10 Days",
      "location": "Sleeps 5 comfortably",
      "specs": "Kitchenette, Bathroom & Beds",
      "features": [
        "Combines accommodation and transportation in one cost",
        "Cook fresh healthy meals anywhere without restaurant bills",
        "Freedom to camp at scenic national and provincial parks",
        "Unforgettable bonding road trip experience for the kids"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Family Minivan Rental + Motel Stays",
      "price": "$1,400 Total ($700 van + $700 motels)",
      "location": "Spacious 7-seater minivan",
      "specs": "Air-conditioned comfort",
      "features": [
        "Easy to drive and park in standard parking spots",
        "Quiet, air-conditioned hotel rooms with hot showers every night",
        "Reliable highway fuel economy compared to large RVs",
        "Flexibility to change hotel reservations easily"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Flying and Renting Compact Cars",
      "price": "$3,600 Total (Airfare for 4 + Rental car)",
      "location": "Economy flights + small car",
      "specs": "Cramped travel",
      "features": [
        "Saves driving time on the highway",
        "Extremely high ticket prices and baggage fees",
        "Cramped compact car with no room for camping gear",
        "Rigid flight schedules with zero scenic road stops"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Rented Class-C RV Motorhome or Family Minivan Rental + Motel Stays over Flying and Renting Compact Cars.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_015",
    "title": "Winter Commute Tire Strategy",
    "category": "Automotive & Transportation",
    "context": "You and Your coworker are deciding on winter commute tire strategy.",
    "targetAudience": "Your coworker, Brian",
    "partnerChoiceName": "Standard All-Season Tires All Year",
    "partnerRationale": "Brian thinks standard all-season tires are good enough to save money on tire changes.",
    "optionA": {
      "id": "opt_a",
      "name": "Dedicated Studded Winter Tires",
      "price": "$850 (Set of 4 mounted on steel rims)",
      "location": "Severe snow & ice rated (Mountain snowflake)",
      "specs": "Tread depth optimized for sub-zero temps",
      "features": [
        "Reduces braking distance on black ice by up to 40%",
        "Steel rims protect expensive alloy wheels from road salt",
        "Insurance companies offer 5% winter tire discounts",
        "Lasts 4-5 seasons when swapped seasonally"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Premium All-Weather 4-Season Tires",
      "price": "$720 (Set of 4 tires)",
      "location": "True 4-season with winter snowflake symbol",
      "specs": "Can stay on vehicle all 12 months",
      "features": [
        "Meets legal Canadian winter tire standards without tire swaps",
        "Saves $150/year in seasonal tire installation and storage fees",
        "Excellent grip on wet roads, slush, and moderate snow",
        "No need for extra wheel storage in apartment lockers"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard All-Season Tires All Year",
      "price": "$0 upfront (Using existing factory tires)",
      "location": "Hard compound in cold weather",
      "specs": "Not rated for severe snow",
      "features": [
        "Saves money upfront on buying new tires",
        "Rubber compound hardens below 7\u00b0C, losing traction",
        "High risk of sliding into intersections on ice",
        "Higher collision risk leading to costly insurance deductibles"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Dedicated Studded Winter Tires or Premium All-Weather 4-Season Tires over Standard All-Season Tires All Year.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_016",
    "title": "Rideshare / Delivery Side-Gig Car",
    "category": "Automotive & Transportation",
    "context": "You and Your friend are deciding on rideshare / delivery side-gig car.",
    "targetAudience": "Your friend, Victor",
    "partnerChoiceName": "Full-Size V8 Pickup Truck",
    "partnerRationale": "Victor suggests using a V8 pickup truck because it looks tough and can carry heavy items.",
    "optionA": {
      "id": "opt_a",
      "name": "Compact Hybrid Sedan",
      "price": "$24,000 (Certified Used)",
      "location": "50 MPG (4.7 L/100km)",
      "specs": "Reliable hybrid powertrain",
      "features": [
        "Ultra-low fuel costs maximize delivery and rideshare profits",
        "Smooth, quiet ride earns high passenger ratings",
        "Exceptional reliability with low brake and engine wear",
        "Affordable replacement tires and standard maintenance"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Subcompact AWD Crossover",
      "price": "$26,000 (New)",
      "location": "34 MPG Hwy",
      "specs": "All-Wheel Drive \u2022 Hatchback cargo",
      "features": [
        "All-weather traction ensures safe deliveries in winter storms",
        "Hatchback trunk easily accommodates large grocery orders",
        "High seating position provides great visibility in city traffic",
        "Compact dimensions make parallel parking effortless"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Full-Size V8 Pickup Truck",
      "price": "$45,000",
      "location": "14 MPG City (17 L/100km)",
      "specs": "Heavy truck platform",
      "features": [
        "High towing power and durable steel bed",
        "Consumes almost all side-gig earnings in fuel expenses",
        "Very difficult to maneuver and park in downtown streets",
        "High tire replacement and oil change costs"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Compact Hybrid Sedan or Subcompact AWD Crossover over Full-Size V8 Pickup Truck.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_017",
    "title": "First Car for Teenage Driver",
    "category": "Automotive & Transportation",
    "context": "You and Your spouse are deciding on first car for teenage driver.",
    "targetAudience": "Your spouse, Rachel",
    "partnerChoiceName": "Sporty 2-Door Coupe",
    "partnerRationale": "Rachel thinks a sporty 2-door coupe would be fun for our teenager's confidence.",
    "optionA": {
      "id": "opt_a",
      "name": "Reliable 8-Year-Old 4-Door Sedan",
      "price": "$9,500 Total Purchase",
      "location": "Proven safety record",
      "specs": "140 HP 4-Cylinder Engine",
      "features": [
        "Lowest insurance rates for young novice drivers",
        "Top safety crash-test ratings and 8 airbags",
        "Affordable spare parts and straightforward maintenance",
        "Moderate horsepower prevents reckless speeding"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "5-Year-Old Hatchback with Driver-Assist",
      "price": "$13,500 Total Purchase",
      "location": "Equipped with lane keep & collision warning",
      "specs": "Hatchback practicality",
      "features": [
        "Equipped with backup camera, blind-spot monitor & auto braking",
        "Fold-flat rear seats carry sports equipment and moving boxes",
        "Great fuel economy (6.5 L/100km)",
        "Modern reliability with low mileage"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Sporty 2-Door Coupe",
      "price": "$18,000",
      "location": "260 HP Rear-Wheel Drive",
      "specs": "Sports suspension",
      "features": [
        "Aggressive sporty styling and fast acceleration",
        "Astronomical insurance costs for teenagers ($400+/mo)",
        "Poor traction and high spin-out risk on winter ice",
        "Expensive high-performance tires and premium fuel"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Reliable 8-Year-Old 4-Door Sedan or 5-Year-Old Hatchback with Driver-Assist over Sporty 2-Door Coupe.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_018",
    "title": "Utility Vehicle for Home Renovation Business",
    "category": "Automotive & Transportation",
    "context": "You and Your business partner are deciding on utility vehicle for home renovation business.",
    "targetAudience": "Your business partner, Dave",
    "partnerChoiceName": "Heavy-Duty Diesel Dually Truck",
    "partnerRationale": "Dave wants a heavy-duty diesel dually truck for heavy highway presence.",
    "optionA": {
      "id": "opt_a",
      "name": "Enclosed Commercial Cargo Van",
      "price": "$36,000",
      "location": "High roof with built-in tool shelving",
      "specs": "Lockable cargo bay",
      "features": [
        "All tools and materials stay 100% dry and secure from theft",
        "Shelving system keeps inventory organized and professional",
        "Side sliding door allows quick access in tight driveways",
        "Large exterior panels ideal for business advertising wraps"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Heavy-Duty Utility Trailer + V6 SUV",
      "price": "$28,000 Total ($7k trailer + $21k SUV)",
      "location": "6x12 ft enclosed tandem axle trailer",
      "specs": "Detachable trailer flexibility",
      "features": [
        "Disconnect trailer on weekends to use SUV as family vehicle",
        "Lower fuel consumption when driving without trailer",
        "Trailer can be left on job sites as a locked mobile workshop",
        "Lower insurance and registration costs than commercial vans"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Heavy-Duty Diesel Dually Truck",
      "price": "$68,000",
      "location": "Dual rear wheels \u2022 High towing",
      "specs": "Open truck bed",
      "features": [
        "Massive towing capability for heavy excavators",
        "Tools in open bed are vulnerable to rain, snow, and theft",
        "Expensive diesel fuel, maintenance, and DEF fluid costs",
        "Too wide to fit in standard residential customer driveways"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your business partner's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Enclosed Commercial Cargo Van or Heavy-Duty Utility Trailer + V6 SUV over Heavy-Duty Diesel Dually Truck.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_019",
    "title": "Long-Distance Work Commute",
    "category": "Automotive & Transportation",
    "context": "You and Your partner are deciding on long-distance work commute.",
    "targetAudience": "Your partner, Nina",
    "partnerChoiceName": "Driving Alone Every Day in Gas Car",
    "partnerRationale": "Nina prefers driving alone in a gas car for complete radio control and solitude.",
    "optionA": {
      "id": "opt_a",
      "name": "Commuter Train (GO Transit) Monthly Pass",
      "price": "$280 / month",
      "location": "Express train to downtown core (45 min)",
      "specs": "Wi-Fi & quiet work coach",
      "features": [
        "Transform 90 daily commuting minutes into productive work/reading",
        "Zero traffic stress or dangerous winter highway driving",
        "Arrive relaxed directly at downtown central station",
        "Save over $400/month on gas, highway tolls, and downtown parking"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Carpooling with 3 Coworkers",
      "price": "$75 / month (Split fuel 4 ways)",
      "location": "Rotating weekly driving schedule",
      "specs": "Uses highway HOV lanes",
      "features": [
        "Bypasses highway congestion using designated HOV carpool lanes",
        "Extremely cheap commute splitting fuel and parking 4 ways",
        "Drive only 1 week out of every month",
        "Social connection and camaraderie with colleagues"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Driving Alone Every Day in Gas Car",
      "price": "$550 / month (Gas $300 + Parking $250)",
      "location": "Single-occupant gas vehicle",
      "specs": "Highway rush-hour traffic",
      "features": [
        "Complete privacy and personal music selection",
        "Stuck in 90 minutes of stressful bumper-to-bumper gridlock daily",
        "High wear and tear adding 25,000 km/year to personal vehicle",
        "Expensive downtown parking garage fees"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Commuter Train (GO Transit) Monthly Pass or Carpooling with 3 Coworkers over Driving Alone Every Day in Gas Car.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_020",
    "title": "Urban Summer Commute",
    "category": "Automotive & Transportation",
    "context": "You and Your friend are deciding on urban summer commute.",
    "targetAudience": "Your friend, Kyle",
    "partnerChoiceName": "Vintage Convertible Sports Car",
    "partnerRationale": "Kyle wants to buy a 25-year-old convertible sports car to cruise with the top down.",
    "optionA": {
      "id": "opt_a",
      "name": "Electric Commuter Scooter / E-Bike",
      "price": "$950",
      "location": "Top speed 32 km/h \u2022 45 km range",
      "specs": "Lightweight & foldable",
      "features": [
        "Zero gas, zero parking tickets, and zero insurance costs",
        "Fold and store inside office closet or apartment hallway",
        "Utilize city bike lanes to bypass downtown traffic",
        "Charged overnight from standard household electrical outlet for pennies"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern 150cc Commuter Motor Scooter",
      "price": "$3,200",
      "location": "85 MPG \u2022 100 km/h top speed",
      "specs": "Under-seat helmet storage",
      "features": [
        "Fast and agile through city streets with legal highway capability",
        "Very low annual insurance and registration fees",
        "Under-seat storage box carries groceries and backpack",
        "Easy parking in designated free motorcycle zones"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Vintage Convertible Sports Car",
      "price": "$12,000 (+ High repairs)",
      "location": "25-year-old engine",
      "specs": "Manual soft-top roof",
      "features": [
        "Fun retro open-air driving experience",
        "Frequent mechanical breakdowns and hard-to-find spare parts",
        "High gas consumption and expensive collector car insurance",
        "Cannot be driven in rain or Canadian winter conditions"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Electric Commuter Scooter / E-Bike or Modern 150cc Commuter Motor Scooter over Vintage Convertible Sports Car.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_021",
    "title": "Family Summer Vacation",
    "category": "Vacation & Travel",
    "context": "You and Your spouse are deciding on family summer vacation.",
    "targetAudience": "Your spouse, Maria",
    "partnerChoiceName": "Las Vegas Casino Strip Resort",
    "partnerRationale": "Maria wants to go to Las Vegas for the bright lights, luxury shopping, and casino shows.",
    "optionA": {
      "id": "opt_a",
      "name": "All-Inclusive Beach Resort in Cancun",
      "price": "$3,200 Total (Flights, Meals & Drinks included)",
      "location": "Direct 4-hour flight",
      "specs": "Kids waterpark & private beach",
      "features": [
        "Fixed total budget with unlimited meals, snacks, and beverages",
        "Supervised kids club and waterpark lets parents relax",
        "Direct private beach access with snorkeling and water sports",
        "Zero stress about currency exchange or dining planning"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Algonquin Park Lakeside Cottage",
      "price": "$2,200 Total (Rental, Food & Parks Pass)",
      "location": "Scenic 3-hour drive from Toronto",
      "specs": "Waterfront cabin with canoe",
      "features": [
        "Tranquil nature setting with pristine swimming and starry skies",
        "Includes private dock, canoe, kayaks, and campfire pit",
        "Dog-friendly accommodation so the family pet can join",
        "Affordable vacation saving over $1,000 for other family goals"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Las Vegas Casino Strip Resort",
      "price": "$4,800 Total (Airfare, Hotel, Shows & Food)",
      "location": "Flight + Taxi",
      "specs": "Casino hotel strip",
      "features": [
        "Vibrant nightlife and world-class live entertainment",
        "Extremely expensive meals, resort fees, and show tickets",
        "Not kid-friendly with smoking casino floors and adult nightlife",
        "Intense desert heat exceeding 42\u00b0C in summer"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of All-Inclusive Beach Resort in Cancun or Algonquin Park Lakeside Cottage over Las Vegas Casino Strip Resort.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_022",
    "title": "Canadian Winter Holiday Getaway",
    "category": "Vacation & Travel",
    "context": "You and Your friend are deciding on canadian winter holiday getaway.",
    "targetAudience": "Your friend, Eric",
    "partnerChoiceName": "Caribbean 7-Day Cruise",
    "partnerRationale": "Eric prefers booking a Caribbean cruise for hot tropical sunshine.",
    "optionA": {
      "id": "opt_a",
      "name": "Banff & Jasper Ski & Hot Springs Resort",
      "price": "$2,100 Total",
      "location": "Canadian Rocky Mountains",
      "specs": "World-class ski slopes & natural hot springs",
      "features": [
        "Iconic Canadian winter scenery with snow-capped mountain peaks",
        "Skiing, snowboarding, ice-skating on Lake Louise, and sleigh rides",
        "Relaxing natural outdoor mineral hot springs surrounded by snow",
        "Supports local Canadian national parks and mountain communities"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Quebec City Winter Carnival & Ice Hotel",
      "price": "$1,600 Total",
      "location": "Historic Old Quebec City",
      "specs": "European cobblestone charm",
      "features": [
        "World-famous Winter Carnival with ice sculptures and parades",
        "Stay or tour the stunning architectural Hotel de Glace (Ice Hotel)",
        "Traditional French-Canadian cuisine and maple sugar shacks",
        "Easily accessible by VIA Rail train without airport customs"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Caribbean 7-Day Cruise",
      "price": "$3,800 Total (Flights, Cabin & Excursions)",
      "location": "Port departure in Florida",
      "specs": "Mega cruise ship",
      "features": [
        "Warm tropical weather and ocean views",
        "Very expensive peak winter airfare to Florida cruise port",
        "Crowded tourist ports with rushed 4-hour shore excursions",
        "Hidden gratuities, drink packages, and port service charges"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Banff & Jasper Ski & Hot Springs Resort or Quebec City Winter Carnival & Ice Hotel over Caribbean 7-Day Cruise.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_023",
    "title": "European Exploration Holiday",
    "category": "Vacation & Travel",
    "context": "You and Your travel partner are deciding on european exploration holiday.",
    "targetAudience": "Your travel partner, Chloe",
    "partnerChoiceName": "5-Star Luxury Resort in Santorini",
    "partnerRationale": "Chloe wants to stay at an ultra-luxury cliffside hotel in Santorini and relax by infinity pools.",
    "optionA": {
      "id": "opt_a",
      "name": "Backpacking Eurail Pass across 4 Countries",
      "price": "$2,400 Total",
      "location": "France, Switzerland, Austria & Italy",
      "specs": "Scenic high-speed trains",
      "features": [
        "Explore 8 historic European cities and picturesque mountain villages",
        "Total freedom and flexibility to hop on trains across borders",
        "Rich cultural immersion visiting world-famous museums and cafes",
        "Stay in charming boutique hostels and family-run guesthouses"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Guided Small-Group Coach Tour of Italy",
      "price": "$3,100 Total",
      "location": "Rome, Florence, Tuscany & Venice",
      "specs": "All hotels, transport & local guides",
      "features": [
        "All landmark entrance tickets and skip-the-line passes included",
        "Professional local historian guides explain culture and art",
        "Curated wine tastings and authentic regional culinary dinners",
        "Comfortable air-conditioned private coach between cities"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "5-Star Luxury Resort in Santorini",
      "price": "$6,500 Total",
      "location": "Single Greek island location",
      "specs": "Luxury cliffside suite",
      "features": [
        "Stunning caldera sunsets and private plunge pools",
        "Extremely high price tag for a single destination",
        "Overcrowded tourist island with long waits for photos",
        "Misses out on European historic diversity and varied culture"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your travel partner's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Backpacking Eurail Pass across 4 Countries or Guided Small-Group Coach Tour of Italy over 5-Star Luxury Resort in Santorini.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_024",
    "title": "Wedding Anniversary Weekend",
    "category": "Vacation & Travel",
    "context": "You and Your spouse are deciding on wedding anniversary weekend.",
    "targetAudience": "Your spouse, David",
    "partnerChoiceName": "Backcountry Camping at Sandbanks",
    "partnerRationale": "David wants to pitch a tent in a provincial park campground to save money.",
    "optionA": {
      "id": "opt_a",
      "name": "Niagara Wine Country Romantic B&B",
      "price": "$850 Total",
      "location": "Historic Niagara-on-the-Lake",
      "specs": "Charming heritage inn with fireplace",
      "features": [
        "Intimate romantic atmosphere with gourmet homemade breakfast",
        "Guided bicycle tour through award-winning vineyards and wineries",
        "World-class fine dining and evening theatre at the Shaw Festival",
        "Short scenic drive along the Niagara River parkway"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Downtown Toronto Theatre & Michelin Dining",
      "price": "$950 Total",
      "location": "Luxury boutique hotel downtown",
      "specs": "King-size suite with spa bath",
      "features": [
        "Front-row tickets to an acclaimed Broadway musical",
        "Gourmet multi-course tasting dinner at a Michelin-rated restaurant",
        "Luxury hotel spa massage and late checkout on Sunday",
        "Walking distance to art galleries, shopping, and harborfront"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Backcountry Camping at Sandbanks",
      "price": "$250 Total",
      "location": "Outdoor campground tent site",
      "specs": "Shared park facilities",
      "features": [
        "Very low cost",
        "Requires packing heavy gear, setting up tents, and cooking on camp stove",
        "No romantic privacy with crowded adjacent campsites",
        "Vulnerable to rainstorms, mosquitoes, and humid weather"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Niagara Wine Country Romantic B&B or Downtown Toronto Theatre & Michelin Dining over Backcountry Camping at Sandbanks.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_025",
    "title": "Group Friends Mountain Getaway",
    "category": "Vacation & Travel",
    "context": "You and Your friend are deciding on group friends mountain getaway.",
    "targetAudience": "Your friend, Jason",
    "partnerChoiceName": "Budget Roadside Motel",
    "partnerRationale": "Jason suggests booking 4 separate rooms in a cheap highway roadside motel.",
    "optionA": {
      "id": "opt_a",
      "name": "Private 6-Bedroom Mountain Chalet",
      "price": "$350 / person Total ($2,100 split 6 ways)",
      "location": "Minutes to mountain trails",
      "specs": "Luxury chalet with outdoor hot tub",
      "features": [
        "Spacious communal living room with wood-burning stone fireplace",
        "Private outdoor hot tub with mountain views under the stars",
        "Full gourmet kitchen to cook group dinners and breakfasts together",
        "Game room with pool table and foosball for evening entertainment"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Boutique Resort Condo Suites",
      "price": "$420 / person Total",
      "location": "Resort village center",
      "specs": "Adjacent 2-bedroom luxury suites",
      "features": [
        "Access to resort amenities: heated indoor/outdoor pool and sauna",
        "Steps to village restaurants, craft pubs, and mountain gondola",
        "Daily housekeeping ensures nobody is stuck doing cleaning chores",
        "Comfortable private bedrooms and modern bathrooms"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Budget Roadside Motel",
      "price": "$250 / person Total",
      "location": "Highway commercial strip (20 min drive to trails)",
      "specs": "Standard two-queen motel rooms",
      "features": [
        "Saves $100 per person",
        "Zero communal space for the group to sit, cook, and hang out together",
        "Depressing view of parking lot and noisy highway traffic",
        "Must eat every single meal at expensive roadside restaurants"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Private 6-Bedroom Mountain Chalet or Boutique Resort Condo Suites over Budget Roadside Motel.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_026",
    "title": "International Flight Booking",
    "category": "Vacation & Travel",
    "context": "You and Your travel companion are deciding on international flight booking.",
    "targetAudience": "Your travel companion, Sam",
    "partnerChoiceName": "Cheapest 2-Layover 26-Hour Flight",
    "partnerRationale": "Sam wants to book a flight with two 8-hour layovers in different airports to save $120.",
    "optionA": {
      "id": "opt_a",
      "name": "Direct Non-Stop Flight (National Carrier)",
      "price": "$950 Round-trip",
      "location": "7.5 hours direct flight time",
      "specs": "Includes checked bag & meals",
      "features": [
        "Arrive energized and ready to explore on day one without jet lag",
        "Zero risk of missed connecting flights or stranded baggage",
        "Includes full hot meal service, seat selection, and carry-on",
        "Save 18 hours of exhausting airport waiting time"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Premium Airline with One Short 90-Min Layover",
      "price": "$820 Round-trip",
      "location": "10.5 hours total travel time",
      "specs": "Top-rated international airline",
      "features": [
        "Saves $130 while maintaining a smooth and efficient flight route",
        "Renowned airline service with award-winning entertainment systems",
        "Clean, modern transit hub with comfortable connection gates",
        "Generous baggage allowance included in ticket"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cheapest 2-Layover 26-Hour Flight",
      "price": "$700 Round-trip",
      "location": "26 hours travel time (2 long layovers)",
      "specs": "Budget ultra-low-cost carrier",
      "features": [
        "Saves only $120 compared to one-stop flight",
        "Exhausting 26-hour transit leading to severe fatigue and lost vacation day",
        "High risk of delayed connection resulting in overnight airport sleeping",
        "Heavy extra fees for carry-on bags, seat selection, and water"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your travel companion's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Direct Non-Stop Flight (National Carrier) or Premium Airline with One Short 90-Min Layover over Cheapest 2-Layover 26-Hour Flight.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_027",
    "title": "Eco-Adventure Travel Destination",
    "category": "Vacation & Travel",
    "context": "You and Your spouse are deciding on eco-adventure travel destination.",
    "targetAudience": "Your spouse, Jessica",
    "partnerChoiceName": "Generic All-Inclusive Beach Resort",
    "partnerRationale": "Jessica wants to book a standard all-inclusive hotel in the Dominican Republic.",
    "optionA": {
      "id": "opt_a",
      "name": "Guided Rainforest Eco-Tour in Costa Rica",
      "price": "$2,800 Total",
      "location": "Manuel Antonio & Arenal Volcano",
      "specs": "Eco-lodges nestled in rainforest",
      "features": [
        "Spot sloths, monkeys, toucans, and exotic wildlife in natural habitat",
        "Zip-lining through cloud forest canopy and hiking volcano trails",
        "Stay at sustainable solar-powered eco-lodges with volcanic hot springs",
        "Support local conservation efforts and ethical wildlife sanctuaries"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Self-Drive 4x4 Iceland Ring Road Expedition",
      "price": "$3,200 Total",
      "location": "Iceland Ring Road",
      "specs": "Camper 4x4 vehicle with sleeping gear",
      "features": [
        "Witness roaring waterfalls, massive glaciers, geysers, and black sand beaches",
        "Freedom to chase Northern Lights and soak in geothermal hot springs",
        "Breathtaking volcanic landscapes unlike anywhere else on Earth",
        "Safe country with modern infrastructure and scenic campgrounds"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Generic All-Inclusive Beach Resort",
      "price": "$2,600 Total",
      "location": "Enclosed resort compound",
      "specs": "Standard poolside room",
      "features": [
        "Unlimited buffet food and standard poolside lounging",
        "Trapped inside resort gates with zero cultural immersion",
        "Miss out on once-in-a-lifetime wildlife and adventure experiences",
        "Identical to every other Caribbean beach vacation"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Guided Rainforest Eco-Tour in Costa Rica or Self-Drive 4x4 Iceland Ring Road Expedition over Generic All-Inclusive Beach Resort.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_028",
    "title": "Maritime Canadian Road Trip",
    "category": "Vacation & Travel",
    "context": "You and Your family member are deciding on maritime canadian road trip.",
    "targetAudience": "Your family member, Robert",
    "partnerChoiceName": "Large Mega-Cruise Ship",
    "partnerRationale": "Robert prefers booking a mega-cruise ship that stops at Maritime ports for 4 hours each.",
    "optionA": {
      "id": "opt_a",
      "name": "Nova Scotia Cabot Trail Camper Van Trip",
      "price": "$1,900 Total",
      "location": "Cape Breton Island & Halifax",
      "specs": "Furnished compact camper van",
      "features": [
        "Drive the world-famous Cabot Trail along ocean cliffs at your own pace",
        "Camp directly on ocean bluffs and enjoy fresh boiled lobster dinners",
        "Immerse in authentic Celtic live fiddle music and coastal heritage",
        "Flexibility to stop at hidden beaches, lighthouses, and hiking trails"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Prince Edward Island Cottage Rental",
      "price": "$1,800 Total",
      "location": "Cavendish & Charlottetown, PEI",
      "specs": "Traditional seaside cottage",
      "features": [
        "Steps to iconic red sand beaches and warm ocean waters",
        "Fresh local seafood, oysters, and farm-to-table culinary experiences",
        "Explore Anne of Green Gables heritage and coastal cycling trails",
        "Peaceful, relaxing atmosphere ideal for family bonding"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Large Mega-Cruise Ship",
      "price": "$3,400 Total",
      "location": "Maritime ocean cruise",
      "specs": "Interior windowless cabin",
      "features": [
        "Multiple onboard restaurants and Broadway-style stage shows",
        "Only 4-5 rushed hours in each port before mandatory ship re-boarding",
        "Very expensive shore excursions and crowded buffet lines",
        "Misses the true culture, hiking trails, and authentic Maritime hospitality"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your family member's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Nova Scotia Cabot Trail Camper Van Trip or Prince Edward Island Cottage Rental over Large Mega-Cruise Ship.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_029",
    "title": "Scenic Expedition Cruise",
    "category": "Vacation & Travel",
    "context": "You and Your partner are deciding on scenic expedition cruise.",
    "targetAudience": "Your partner, Simon",
    "partnerChoiceName": "European Mega-River Barge",
    "partnerRationale": "Simon wants a slow European river barge tour that visits historic churches.",
    "optionA": {
      "id": "opt_a",
      "name": "Alaska Glacier Wilderness Expedition Cruise",
      "price": "$2,600 / person",
      "location": "Inside Passage & Glacier Bay",
      "specs": "Balcony stateroom on expedition vessel",
      "features": [
        "Up-close views of calving tidewater glaciers and towering icebergs",
        "Spot humpback whales, orcas, grizzly bears, and bald eagles",
        "Expert naturalist lectures and guided zodiac boat excursions",
        "Private balcony to enjoy pristine Alaskan fjord scenery in comfort"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Western Caribbean Island Hopper Cruise",
      "price": "$1,800 / person",
      "location": "Cozumel, Belize & Roatan",
      "specs": "Oceanview stateroom",
      "features": [
        "Swim with stingrays and snorkel world-glass coral barrier reefs",
        "Explore ancient Mayan ruins hidden in tropical jungles",
        "Sunny warm tropical weather with pristine turquoise waters",
        "Extremely affordable price point with all meals included"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "European Mega-River Barge",
      "price": "$4,500 / person",
      "location": "Rhine / Danube River",
      "specs": "Compact river cabin",
      "features": [
        "Slow leisurely sailing past European castles and vineyards",
        "Very high cost per person with limited evening activities",
        "Shallow river water levels frequently force bus transfers",
        "Catering primarily to older retirees with sedentary itineraries"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Alaska Glacier Wilderness Expedition Cruise or Western Caribbean Island Hopper Cruise over European Mega-River Barge.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_030",
    "title": "Solo Cultural Adventure",
    "category": "Vacation & Travel",
    "context": "You and Your friend are deciding on solo cultural adventure.",
    "targetAudience": "Your friend, Mark",
    "partnerChoiceName": "Sedentary Beach Resort Lounge",
    "partnerRationale": "Mark thinks you should just lie on a beach chair in Cuba for 7 days doing nothing.",
    "optionA": {
      "id": "opt_a",
      "name": "Guided Trekking Expedition in Peru (Inca Trail)",
      "price": "$2,200 Total",
      "location": "Cusco, Sacred Valley & Machu Picchu",
      "specs": "Guided trekking with licensed porters",
      "features": [
        "Hike the iconic Inca Trail through cloud forests to the Sun Gate",
        "Marvel at the ancient archaeological wonder of Machu Picchu",
        "Experience vibrant Quechua indigenous culture and mountain hospitality",
        "Rewarding physical challenge creating lifelong memories and pride"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Self-Guided Cultural Tour of Tokyo & Kyoto",
      "price": "$2,600 Total",
      "location": "Japan High-Speed Shinkansen Bullet Train",
      "specs": "Modern pod & boutique hotels",
      "features": [
        "Ultra-safe country with world-class public transit and bullet trains",
        "Explore historic Kyoto shrines, tranquil bamboo forests, and Tokyo tech districts",
        "World-renowned culinary culture from street ramen to sushi masterclasses",
        "Fascinating blend of cutting-edge technology and ancient traditions"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Sedentary Beach Resort Lounge",
      "price": "$1,600 Total",
      "location": "Enclosed resort in Varadero",
      "specs": "Standard resort room",
      "features": [
        "Cheap beach lounging with rum drinks",
        "Zero cultural learning, history, or memorable personal growth",
        "Repetitive buffet meals and boring sedentary routine",
        "Miss out on an enriching international adventure while young and active"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's points, but contrast value, convenience, and long-term satisfaction.",
      "Emphasize the practical advantages of Guided Trekking Expedition in Peru (Inca Trail) or Self-Guided Cultural Tour of Tokyo & Kyoto over Sedentary Beach Resort Lounge.",
      "Highlight overall cost efficiency, reliability, and superior user experience."
    ]
  },
  {
    "id": "t5_031",
    "title": "Company Team Building Event",
    "category": "Workplace & Career",
    "context": "You and Your colleague are deciding on company team building event.",
    "targetAudience": "Your colleague, Priya",
    "partnerChoiceName": "Virtual Zoom Trivia with Gift Cards",
    "partnerRationale": "Priya wants virtual Zoom trivia so everyone stays at home.",
    "optionA": {
      "id": "opt_a",
      "name": "Indoor Escape Room & Dinner",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Outdoor High-Ropes Challenge Park",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Virtual Zoom Trivia with Gift Cards",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your colleague's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Virtual Zoom Trivia with Gift Cards.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_032",
    "title": "Office Workstation Setup",
    "category": "Workplace & Career",
    "context": "You and Your office manager are deciding on office workstation setup.",
    "targetAudience": "Your office manager, Frank",
    "partnerChoiceName": "Open Hot-Desking Benches",
    "partnerRationale": "Frank wants open hot-desking benches to save floor space.",
    "optionA": {
      "id": "opt_a",
      "name": "Dual-Monitor Standing Desk",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private Ergonomic Executive Cubicle",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Open Hot-Desking Benches",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your office manager's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Open Hot-Desking Benches.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_033",
    "title": "Career Job Offer Decision",
    "category": "Workplace & Career",
    "context": "You and Your mentor are deciding on career job offer decision.",
    "targetAudience": "Your mentor, Susan",
    "partnerChoiceName": "Mid-Size Traditional Marketing Agency",
    "partnerRationale": "Susan recommends the marketing agency for steady client variety.",
    "optionA": {
      "id": "opt_a",
      "name": "Stable Government Public Sector Role",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "High-Growth Tech Startup with Equity",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Mid-Size Traditional Marketing Agency",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your mentor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Mid-Size Traditional Marketing Agency.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_034",
    "title": "Professional Skill Upskilling",
    "category": "Workplace & Career",
    "context": "You and Your manager are deciding on professional skill upskilling.",
    "targetAudience": "Your manager, Dave",
    "partnerChoiceName": "Watching Free Random YouTube Videos",
    "partnerRationale": "Dave thinks self-studying free videos is enough.",
    "optionA": {
      "id": "opt_a",
      "name": "6-Month Intensive Coding Bootcamp",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "2-Year Part-Time University Diploma",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Watching Free Random YouTube Videos",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your manager's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Watching Free Random YouTube Videos.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_035",
    "title": "Work Schedule Policy",
    "category": "Workplace & Career",
    "context": "You and Your team lead are deciding on work schedule policy.",
    "targetAudience": "Your team lead, Arthur",
    "partnerChoiceName": "100% In-Office 5 Days a Week",
    "partnerRationale": "Arthur wants everyone in the office 5 days a week at 9 AM.",
    "optionA": {
      "id": "opt_a",
      "name": "4-Day 10-Hour Compressed Workweek",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Flexible 5-Day Hybrid Model (2 days office)",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "100% In-Office 5 Days a Week",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your team lead's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to 100% In-Office 5 Days a Week.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_036",
    "title": "Corporate Holiday Celebration",
    "category": "Workplace & Career",
    "context": "You and Event committee member are deciding on corporate holiday celebration.",
    "targetAudience": "Event committee member, Nina",
    "partnerChoiceName": "Casual Bowling Alley & Pizza",
    "partnerRationale": "Nina wants casual bowling and pizza.",
    "optionA": {
      "id": "opt_a",
      "name": "Downtown Rooftop Cocktail Reception",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Formal Sit-Down Dinner with Live Band",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Casual Bowling Alley & Pizza",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Event committee member's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Casual Bowling Alley & Pizza.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_037",
    "title": "Enterprise Software Upgrade",
    "category": "Workplace & Career",
    "context": "You and IT Director are deciding on enterprise software upgrade.",
    "targetAudience": "IT Director, Greg",
    "partnerChoiceName": "Legacy On-Premise Email System",
    "partnerRationale": "Greg wants to keep using the 15-year-old on-premise system.",
    "optionA": {
      "id": "opt_a",
      "name": "Integrated Cloud Collaboration Suite",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Custom In-House Proprietary Software",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Legacy On-Premise Email System",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge IT Director's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Legacy On-Premise Email System.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_038",
    "title": "Client Appreciation Gifts",
    "category": "Workplace & Career",
    "context": "You and Your coworker are deciding on client appreciation gifts.",
    "targetAudience": "Your coworker, Sandra",
    "partnerChoiceName": "Company Branded Plastic Pens and Mugs",
    "partnerRationale": "Sandra wants cheap branded pens and mugs to save budget.",
    "optionA": {
      "id": "opt_a",
      "name": "Canadian Gourmet Artisan Food Basket",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "High-End Wireless Noise-Cancelling Earbuds",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Company Branded Plastic Pens and Mugs",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Company Branded Plastic Pens and Mugs.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_039",
    "title": "Company Office Relocation",
    "category": "Workplace & Career",
    "context": "You and Your CEO are deciding on company office relocation.",
    "targetAudience": "Your CEO, Mr. Vance",
    "partnerChoiceName": "WeWork Shared Coworking Floor",
    "partnerRationale": "Mr. Vance prefers temporary WeWork hot desks.",
    "optionA": {
      "id": "opt_a",
      "name": "Downtown Financial Core High-Rise",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Suburban Tech Campus with Free Parking",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "WeWork Shared Coworking Floor",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your CEO's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to WeWork Shared Coworking Floor.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_040",
    "title": "Annual Industry Conference",
    "category": "Workplace & Career",
    "context": "You and Your colleague are deciding on annual industry conference.",
    "targetAudience": "Your colleague, Tom",
    "partnerChoiceName": "Virtual Recorded Stream Only",
    "partnerRationale": "Tom wants to only watch the recorded stream online.",
    "optionA": {
      "id": "opt_a",
      "name": "In-Person Major Expo in Vancouver",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Specialized Regional Seminar in Ottawa",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Virtual Recorded Stream Only",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your colleague's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Virtual Recorded Stream Only.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_041",
    "title": "Child Summer Camp Program",
    "category": "Education & Training",
    "context": "You and Your spouse are deciding on child summer camp program.",
    "targetAudience": "Your spouse, Karen",
    "partnerChoiceName": "Musical Theatre Performance Camp",
    "partnerRationale": "Karen wants musical theatre camp.",
    "optionA": {
      "id": "opt_a",
      "name": "STEM Robotics & Coding Camp",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Wilderness Nature & Sports Camp",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Musical Theatre Performance Camp",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Musical Theatre Performance Camp.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_042",
    "title": "Post-Secondary Education Path",
    "category": "Education & Training",
    "context": "You and Your parent are deciding on post-secondary education path.",
    "targetAudience": "Your parent, Robert",
    "partnerChoiceName": "Taking a Gap Year with No Job",
    "partnerRationale": "Robert suggests taking an unstructured gap year.",
    "optionA": {
      "id": "opt_a",
      "name": "4-Year Bachelor of Science Degree",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "2-Year Applied Diploma with Paid Co-op",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Taking a Gap Year with No Job",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your parent's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Taking a Gap Year with No Job.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_043",
    "title": "Second Language Study Method",
    "category": "Education & Training",
    "context": "You and Your friend are deciding on second language study method.",
    "targetAudience": "Your friend, Sarah",
    "partnerChoiceName": "Weekly 1-on-1 Grammar Tutor",
    "partnerRationale": "Sarah prefers a private grammar tutor.",
    "optionA": {
      "id": "opt_a",
      "name": "In-Person Immersion Language School",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Interactive AI Language Learning App",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Weekly 1-on-1 Grammar Tutor",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Weekly 1-on-1 Grammar Tutor.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_044",
    "title": "High School Choice for Teen",
    "category": "Education & Training",
    "context": "You and Your spouse are deciding on high school choice for teen.",
    "targetAudience": "Your spouse, Mike",
    "partnerChoiceName": "Standard Local Neighborhood High School",
    "partnerRationale": "Mike wants the standard neighborhood high school.",
    "optionA": {
      "id": "opt_a",
      "name": "Public High School with French Immersion",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Arts & Technology Specialty Magnet School",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Local Neighborhood High School",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Standard Local Neighborhood High School.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_045",
    "title": "Early Childhood Daycare Center",
    "category": "Education & Training",
    "context": "You and Your partner are deciding on early childhood daycare center.",
    "targetAudience": "Your partner, Jenny",
    "partnerChoiceName": "Hiring a Full-Time Live-In Nanny",
    "partnerRationale": "Jenny wants a full-time live-in nanny.",
    "optionA": {
      "id": "opt_a",
      "name": "Licensed Home Daycare with 1:4 Ratio",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Montessori Early Learning Centre",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Hiring a Full-Time Live-In Nanny",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Hiring a Full-Time Live-In Nanny.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_046",
    "title": "Music Education for Child",
    "category": "Education & Training",
    "context": "You and Your child are deciding on music education for child.",
    "targetAudience": "Your child, Leo",
    "partnerChoiceName": "Self-Taught Free Online Videos",
    "partnerRationale": "Leo wants to just watch free guitar videos online.",
    "optionA": {
      "id": "opt_a",
      "name": "Classical Piano Studio Lessons",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Acoustic Guitar Group Classes",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Self-Taught Free Online Videos",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your child's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Self-Taught Free Online Videos.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_047",
    "title": "Academic Math Tutoring",
    "category": "Education & Training",
    "context": "You and Your teen's teacher are deciding on academic math tutoring.",
    "targetAudience": "Your teen's teacher, Mrs. Gable",
    "partnerChoiceName": "Self-Study Printed Workbooks",
    "partnerRationale": "Mrs. Gable recommends basic self-study workbooks.",
    "optionA": {
      "id": "opt_a",
      "name": "1-on-1 Math Specialist Tutoring",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Group Homework Enrichment Club",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Self-Study Printed Workbooks",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your teen's teacher's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Self-Study Printed Workbooks.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_048",
    "title": "University Study Abroad Term",
    "category": "Education & Training",
    "context": "You and Your academic advisor are deciding on university study abroad term.",
    "targetAudience": "Your academic advisor, Dr. Lee",
    "partnerChoiceName": "Staying on Home Campus All 4 Years",
    "partnerRationale": "Dr. Lee advises staying on home campus.",
    "optionA": {
      "id": "opt_a",
      "name": "Exchange Semester in London, UK",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Co-op Tech Internship in Tokyo, Japan",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Staying on Home Campus All 4 Years",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your academic advisor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Staying on Home Campus All 4 Years.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_049",
    "title": "University Student Accommodation",
    "category": "Education & Training",
    "context": "You and Your parent are deciding on university student accommodation.",
    "targetAudience": "Your parent, Helen",
    "partnerChoiceName": "Living at Home and Commuting 90 min",
    "partnerRationale": "Helen wants you to live at home and commute 90 min each way.",
    "optionA": {
      "id": "opt_a",
      "name": "On-Campus Residence Hall",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Off-Campus Shared Student Flat",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Living at Home and Commuting 90 min",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your parent's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Living at Home and Commuting 90 min.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_050",
    "title": "Driver Education Program",
    "category": "Education & Training",
    "context": "You and Your friend are deciding on driver education program.",
    "targetAudience": "Your friend, Jason",
    "partnerChoiceName": "Learning Informally from Relatives",
    "partnerRationale": "Jason thinks parents should just teach for free in parking lots.",
    "optionA": {
      "id": "opt_a",
      "name": "Certified Driving Academy with Simulator",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private Driving Lessons (10 Hours)",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Learning Informally from Relatives",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Learning Informally from Relatives.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_051",
    "title": "Fitness Gym Membership",
    "category": "Fitness & Recreation",
    "context": "You and Your friend are deciding on fitness gym membership.",
    "targetAudience": "Your friend, Ryan",
    "partnerChoiceName": "$250/mo Extreme CrossFit Box",
    "partnerRationale": "Ryan wants to join an expensive CrossFit box.",
    "optionA": {
      "id": "opt_a",
      "name": "24/7 Boutique Weightlifting Gym",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Community Recreation Centre with Pool & Rink",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "$250/mo Extreme CrossFit Box",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to $250/mo Extreme CrossFit Box.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_052",
    "title": "Home Workout Equipment",
    "category": "Fitness & Recreation",
    "context": "You and Your spouse are deciding on home workout equipment.",
    "targetAudience": "Your spouse, Lisa",
    "partnerChoiceName": "Commercial Grade Giant Treadmill",
    "partnerRationale": "Lisa wants a giant commercial treadmill in the living room.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Interactive Exercise Bike",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Adjustable Dumbbells & Folding Bench",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Commercial Grade Giant Treadmill",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Commercial Grade Giant Treadmill.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_053",
    "title": "Wellness & Studio Class",
    "category": "Fitness & Recreation",
    "context": "You and Your coworker are deciding on wellness & studio class.",
    "targetAudience": "Your coworker, Maya",
    "partnerChoiceName": "Casual Neighborhood Jogging Club",
    "partnerRationale": "Maya suggests just jogging outdoors on sidewalks.",
    "optionA": {
      "id": "opt_a",
      "name": "Hot Yoga & Reformer Pilates Studio",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Martial Arts & Brazilian Jiu-Jitsu",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Casual Neighborhood Jogging Club",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Casual Neighborhood Jogging Club.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_054",
    "title": "Adult Recreational Sports League",
    "category": "Fitness & Recreation",
    "context": "You and Your friend are deciding on adult recreational sports league.",
    "targetAudience": "Your friend, Matt",
    "partnerChoiceName": "Casual Ultimate Frisbee Pickup",
    "partnerRationale": "Matt prefers casual ultimate frisbee in the park.",
    "optionA": {
      "id": "opt_a",
      "name": "Co-Ed Indoor Volleyball League",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Community Soccer League",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Casual Ultimate Frisbee Pickup",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Casual Ultimate Frisbee Pickup.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_055",
    "title": "Nutrition & Meal Prep Strategy",
    "category": "Fitness & Recreation",
    "context": "You and Your partner are deciding on nutrition & meal prep strategy.",
    "targetAudience": "Your partner, Eric",
    "partnerChoiceName": "Daily Fast-Casual Takeout Bowls",
    "partnerRationale": "Eric wants to buy daily takeout salads and bowls.",
    "optionA": {
      "id": "opt_a",
      "name": "Weekly Organic Fresh Meal-Kit Delivery",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Bulk Sunday Meal Prepping at Home",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Daily Fast-Casual Takeout Bowls",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Daily Fast-Casual Takeout Bowls.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_056",
    "title": "Winter Sports Recreation Pass",
    "category": "Fitness & Recreation",
    "context": "You and Your friend are deciding on winter sports recreation pass.",
    "targetAudience": "Your friend, Brad",
    "partnerChoiceName": "Indoor Winter Squash League",
    "partnerRationale": "Brad prefers playing indoor squash.",
    "optionA": {
      "id": "opt_a",
      "name": "Downhill Skiing & Snowboard Season Pass",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Cross-Country Skiing & Snowshoe Club",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Indoor Winter Squash League",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Indoor Winter Squash League.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_057",
    "title": "Physical Therapy & Body Recovery",
    "category": "Fitness & Recreation",
    "context": "You and Your trainer are deciding on physical therapy & body recovery.",
    "targetAudience": "Your trainer, Sam",
    "partnerChoiceName": "DIY Foam Rolling at Home",
    "partnerRationale": "Sam says foam rolling on the carpet is enough.",
    "optionA": {
      "id": "opt_a",
      "name": "Registered Massage Therapy & Physio Clinic",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Infrared Sauna & Cold Plunge Spa",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "DIY Foam Rolling at Home",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your trainer's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to DIY Foam Rolling at Home.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_058",
    "title": "Water Sports Gear Purchase",
    "category": "Fitness & Recreation",
    "context": "You and Your sibling are deciding on water sports gear purchase.",
    "targetAudience": "Your sibling, Laura",
    "partnerChoiceName": "Renting Gear at Beach Rental Shacks",
    "partnerRationale": "Laura thinks renting hourly at the beach is better.",
    "optionA": {
      "id": "opt_a",
      "name": "Inflatable Stand-Up Paddleboard (iSUP)",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "2-Person Inflatable Touring Kayak",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Renting Gear at Beach Rental Shacks",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your sibling's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Renting Gear at Beach Rental Shacks.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_059",
    "title": "Orthodontic Dental Treatment",
    "category": "Fitness & Recreation",
    "context": "You and Your dentist are deciding on orthodontic dental treatment.",
    "targetAudience": "Your dentist, Dr. Wong",
    "partnerChoiceName": "Traditional Metal Lingual Braces",
    "partnerRationale": "Dr. Wong suggests metal braces behind the teeth.",
    "optionA": {
      "id": "opt_a",
      "name": "Clear Invisible Aligners (Invisalign)",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Ceramic Subtle Braces",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Traditional Metal Lingual Braces",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your dentist's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Traditional Metal Lingual Braces.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_060",
    "title": "Stress Relief & Mental Wellness",
    "category": "Fitness & Recreation",
    "context": "You and Your friend are deciding on stress relief & mental wellness.",
    "targetAudience": "Your friend, Rachel",
    "partnerChoiceName": "One-Day Luxury Spa Massage",
    "partnerRationale": "Rachel suggests a 1-day luxury spa massage.",
    "optionA": {
      "id": "opt_a",
      "name": "Weekend Mountain Mindfulness Retreat",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "8-Week Guided Stress Reduction Course",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "One-Day Luxury Spa Massage",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to One-Day Luxury Spa Massage.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_061",
    "title": "Personal Laptop Upgrade",
    "category": "Electronics & Appliances",
    "context": "You and Your roommate are deciding on personal laptop upgrade.",
    "targetAudience": "Your roommate, Dan",
    "partnerChoiceName": "12.9-inch Tablet with Keyboard Case",
    "partnerRationale": "Dan thinks a tablet with keyboard is sufficient.",
    "optionA": {
      "id": "opt_a",
      "name": "14-inch Lightweight M-Series Ultrabook",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "High-Performance Custom Desktop PC",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "12.9-inch Tablet with Keyboard Case",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your roommate's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to 12.9-inch Tablet with Keyboard Case.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_062",
    "title": "Kitchen Refrigerator Upgrade",
    "category": "Electronics & Appliances",
    "context": "You and Your spouse are deciding on kitchen refrigerator upgrade.",
    "targetAudience": "Your spouse, Emily",
    "partnerChoiceName": "Retro Style Compact Designer Fridge",
    "partnerRationale": "Emily likes the retro designer fridge.",
    "optionA": {
      "id": "opt_a",
      "name": "French-Door Smart Fridge with Ice Maker",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "EnergyStar High-Efficiency Bottom-Freezer",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Retro Style Compact Designer Fridge",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Retro Style Compact Designer Fridge.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_063",
    "title": "Home Coffee Brewing Machine",
    "category": "Electronics & Appliances",
    "context": "You and Your partner are deciding on home coffee brewing machine.",
    "targetAudience": "Your partner, Luke",
    "partnerChoiceName": "Automatic Basic Drip Coffee Pot",
    "partnerRationale": "Luke wants a cheap drip coffee pot.",
    "optionA": {
      "id": "opt_a",
      "name": "Semi-Automatic Espresso Machine with Wand",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Multi-Capsule Nespresso Pod Machine",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Automatic Basic Drip Coffee Pot",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Automatic Basic Drip Coffee Pot.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_064",
    "title": "Smart Home Automation Bundle",
    "category": "Electronics & Appliances",
    "context": "You and Your roommate are deciding on smart home automation bundle.",
    "targetAudience": "Your roommate, Alex",
    "partnerChoiceName": "Keeping Standard Manual Switches",
    "partnerRationale": "Alex wants to keep old manual switches to save money.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Thermostat & Smart Lighting Hub",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Video Doorbell & Outdoor Camera System",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Keeping Standard Manual Switches",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your roommate's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Keeping Standard Manual Switches.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_065",
    "title": "Smartphone Upgrade Choice",
    "category": "Electronics & Appliances",
    "context": "You and Your friend are deciding on smartphone upgrade choice.",
    "targetAudience": "Your friend, Kyle",
    "partnerChoiceName": "Buying a Used 4-Year-Old Phone",
    "partnerRationale": "Kyle recommends buying a used 4-year-old phone.",
    "optionA": {
      "id": "opt_a",
      "name": "Latest Flagship Smartphone with Pro Camera",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Mid-Range Long-Battery Android Phone",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Buying a Used 4-Year-Old Phone",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Buying a Used 4-Year-Old Phone.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_066",
    "title": "Home Entertainment Display",
    "category": "Electronics & Appliances",
    "context": "You and Your spouse are deciding on home entertainment display.",
    "targetAudience": "Your spouse, Tara",
    "partnerChoiceName": "50-inch Budget LED TV",
    "partnerRationale": "Tara wants a budget 50-inch LED TV.",
    "optionA": {
      "id": "opt_a",
      "name": "75-inch 4K OLED HDR Smart TV",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "4K Ultra-Short-Throw Laser Projector",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "50-inch Budget LED TV",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to 50-inch Budget LED TV.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_067",
    "title": "Laundry Washer-Dryer Pair",
    "category": "Electronics & Appliances",
    "context": "You and Your landlord are deciding on laundry washer-dryer pair.",
    "targetAudience": "Your landlord, Mr. Chen",
    "partnerChoiceName": "All-in-One Combination Washer-Dryer",
    "partnerRationale": "Mr. Chen wants to buy an all-in-one combo unit.",
    "optionA": {
      "id": "opt_a",
      "name": "Front-Loading Ultra-Quiet Washer & Dryer",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Top-Loading Heavy Duty Agitator Washer",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "All-in-One Combination Washer-Dryer",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your landlord's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to All-in-One Combination Washer-Dryer.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_068",
    "title": "Home Cleaning Technology",
    "category": "Electronics & Appliances",
    "context": "You and Your partner are deciding on home cleaning technology.",
    "targetAudience": "Your partner, Chris",
    "partnerChoiceName": "Heavy Corded Canister Vacuum",
    "partnerRationale": "Chris wants a traditional heavy corded canister vacuum.",
    "optionA": {
      "id": "opt_a",
      "name": "Robotic Vacuum with Auto-Empty & Mop",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Lightweight Cordless Stick Vacuum",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Heavy Corded Canister Vacuum",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Heavy Corded Canister Vacuum.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_069",
    "title": "Living Room Sound System",
    "category": "Electronics & Appliances",
    "context": "You and Your roommate are deciding on living room sound system.",
    "targetAudience": "Your roommate, Josh",
    "partnerChoiceName": "Portable Bluetooth Speaker on Shelf",
    "partnerRationale": "Josh thinks a portable Bluetooth speaker is fine.",
    "optionA": {
      "id": "opt_a",
      "name": "Dolby Atmos Wireless Soundbar & Subwoofer",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Hi-Fi Stereo Bookshelf Active Speakers",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Portable Bluetooth Speaker on Shelf",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your roommate's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Portable Bluetooth Speaker on Shelf.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_070",
    "title": "Kitchen Countertop Cooking Device",
    "category": "Electronics & Appliances",
    "context": "You and Your spouse are deciding on kitchen countertop cooking device.",
    "targetAudience": "Your spouse, Sarah",
    "partnerChoiceName": "Standard Countertop Microwave",
    "partnerRationale": "Sarah wants a standard microwave only.",
    "optionA": {
      "id": "opt_a",
      "name": "Multi-Function Air Fryer Toaster Oven",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Digital Multi-Cooker (Instant Pot)",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Countertop Microwave",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Standard Countertop Microwave.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_071",
    "title": "Colleague Retirement Gift",
    "category": "Milestones & Celebrations",
    "context": "You and Your coworker are deciding on colleague retirement gift.",
    "targetAudience": "Your coworker, Priya",
    "partnerChoiceName": "Engraved Traditional Gold Watch",
    "partnerRationale": "Priya wants an engraved gold watch.",
    "optionA": {
      "id": "opt_a",
      "name": "Premium Automated Espresso Machine",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Weekend Luxury Spa & Wine Getaway Voucher",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Engraved Traditional Gold Watch",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Engraved Traditional Gold Watch.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_072",
    "title": "Wedding Gift for Close Friends",
    "category": "Milestones & Celebrations",
    "context": "You and Your friend are deciding on wedding gift for close friends.",
    "targetAudience": "Your friend, Mark",
    "partnerChoiceName": "Department Store Generic Gift Card",
    "partnerRationale": "Mark wants to give a department store gift card.",
    "optionA": {
      "id": "opt_a",
      "name": "Cast-Iron French Dutch Oven Cookware Set",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Contribution to Honeymoon Adventure Fund",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Department Store Generic Gift Card",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Department Store Generic Gift Card.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_073",
    "title": "Child 10th Birthday Party",
    "category": "Milestones & Celebrations",
    "context": "You and Your co-parent are deciding on child 10th birthday party.",
    "targetAudience": "Your co-parent, Jordan",
    "partnerChoiceName": "Video Game Sleepover in Basement",
    "partnerRationale": "Jordan wants a video game sleepover in the basement.",
    "optionA": {
      "id": "opt_a",
      "name": "Indoor Trampoline Park & Arcade Party",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Outdoor Laser Tag & Pizza in Park",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Video Game Sleepover in Basement",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your co-parent's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Video Game Sleepover in Basement.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_074",
    "title": "Parents' 30th Wedding Anniversary",
    "category": "Milestones & Celebrations",
    "context": "You and Your sibling are deciding on parents' 30th wedding anniversary.",
    "targetAudience": "Your sibling, David",
    "partnerChoiceName": "Buying Them a New Kitchen Appliance",
    "partnerRationale": "David wants to buy them a new microwave.",
    "optionA": {
      "id": "opt_a",
      "name": "Surprise Historic Manor Family Dinner",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Professional Multi-Generation Photo Album",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Buying Them a New Kitchen Appliance",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your sibling's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Buying Them a New Kitchen Appliance.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_075",
    "title": "High School Graduation Gift",
    "category": "Milestones & Celebrations",
    "context": "You and Your relative are deciding on high school graduation gift.",
    "targetAudience": "Your relative, Uncle Bob",
    "partnerChoiceName": "Buying a Used Older Car",
    "partnerRationale": "Uncle Bob wants to buy an older used car.",
    "optionA": {
      "id": "opt_a",
      "name": "Modern Laptop for University",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Financial Contribution to European Trip",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Buying a Used Older Car",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your relative's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Buying a Used Older Car.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_076",
    "title": "Wedding Reception Dinner Style",
    "category": "Milestones & Celebrations",
    "context": "You and Your fianc\u00e9 are deciding on wedding reception dinner style.",
    "targetAudience": "Your fianc\u00e9, Liam",
    "partnerChoiceName": "Family-Style Shared Platters on Tables",
    "partnerRationale": "Liam wants family-style shared platters.",
    "optionA": {
      "id": "opt_a",
      "name": "4-Course Plated Fine Dining Dinner",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Gourmet Live Chef Carving Buffet",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Family-Style Shared Platters on Tables",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your fianc\u00e9's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Family-Style Shared Platters on Tables.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_077",
    "title": "Baby Shower Celebration Venue",
    "category": "Milestones & Celebrations",
    "context": "You and Your sister are deciding on baby shower celebration venue.",
    "targetAudience": "Your sister, Emily",
    "partnerChoiceName": "Rented Empty Community Center Hall",
    "partnerRationale": "Emily wants to rent an empty community hall.",
    "optionA": {
      "id": "opt_a",
      "name": "Afternoon High Tea at Heritage Tea Room",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Backyard Garden Picnic BBQ",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Rented Empty Community Center Hall",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your sister's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Rented Empty Community Center Hall.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_078",
    "title": "Company Milestone Employee Reward",
    "category": "Milestones & Celebrations",
    "context": "You and Your coworker are deciding on company milestone employee reward.",
    "targetAudience": "Your coworker, Alan",
    "partnerChoiceName": "Company Branded Winter Jacket",
    "partnerRationale": "Alan wants company branded winter jackets.",
    "optionA": {
      "id": "opt_a",
      "name": "Charitable Donation in Employee's Name",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Tech Store Electronic Gift Cards",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Company Branded Winter Jacket",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Company Branded Winter Jacket.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_079",
    "title": "Milestone 30th Birthday Celebration",
    "category": "Milestones & Celebrations",
    "context": "You and Your friend are deciding on milestone 30th birthday celebration.",
    "targetAudience": "Your friend, Tyler",
    "partnerChoiceName": "VIP Nightclub Bottle Service Table",
    "partnerRationale": "Tyler wants a VIP bottle service table at a nightclub.",
    "optionA": {
      "id": "opt_a",
      "name": "Lakeside Cabin Weekend with 10 Friends",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "3-Day Trip to Montreal Jazz Festival",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "VIP Nightclub Bottle Service Table",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to VIP Nightclub Bottle Service Table.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_080",
    "title": "Housewarming Gift for New Homeowners",
    "category": "Milestones & Celebrations",
    "context": "You and Your friend are deciding on housewarming gift for new homeowners.",
    "targetAudience": "Your friend, Zoe",
    "partnerChoiceName": "Hardware Store Gift Certificate",
    "partnerRationale": "Zoe wants a hardware store gift certificate.",
    "optionA": {
      "id": "opt_a",
      "name": "Custom Hardwood Charcuterie Board & Wine",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Air-Purifying Indoor Plants in Ceramic Pots",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Hardware Store Gift Certificate",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Hardware Store Gift Certificate.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_081",
    "title": "Home Heating System Upgrade",
    "category": "Home Improvement",
    "context": "You and Your contractor are deciding on home heating system upgrade.",
    "targetAudience": "Your contractor, Steve",
    "partnerChoiceName": "Standard Electric Baseboard Heaters",
    "partnerRationale": "Steve suggests keeping electric baseboard heaters.",
    "optionA": {
      "id": "opt_a",
      "name": "Cold-Climate High-Efficiency Heat Pump",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modulating High-Efficiency Gas Furnace",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Electric Baseboard Heaters",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your contractor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Standard Electric Baseboard Heaters.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_082",
    "title": "Backyard Patio Deck Material",
    "category": "Home Improvement",
    "context": "You and Your partner are deciding on backyard patio deck material.",
    "targetAudience": "Your partner, Alex",
    "partnerChoiceName": "Paved Concrete Slab Patio",
    "partnerRationale": "Alex wants a plain concrete slab patio.",
    "optionA": {
      "id": "opt_a",
      "name": "Low-Maintenance Composite Decking",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Natural Western Red Cedar Wood",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Paved Concrete Slab Patio",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Paved Concrete Slab Patio.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_083",
    "title": "Flooring Renovation Material",
    "category": "Home Improvement",
    "context": "You and Your spouse are deciding on flooring renovation material.",
    "targetAudience": "Your spouse, Jessica",
    "partnerChoiceName": "Polished Ceramic Porcelain Tile",
    "partnerRationale": "Jessica wants ceramic tile throughout the whole house.",
    "optionA": {
      "id": "opt_a",
      "name": "Engineered White Oak Hardwood",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "100% Waterproof Luxury Vinyl Plank (LVP)",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Polished Ceramic Porcelain Tile",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Polished Ceramic Porcelain Tile.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_084",
    "title": "Kitchen Countertop Material",
    "category": "Home Improvement",
    "context": "You and Your contractor are deciding on kitchen countertop material.",
    "targetAudience": "Your contractor, Mike",
    "partnerChoiceName": "Butcher Block Solid Wood Countertop",
    "partnerRationale": "Mike prefers butcher block wood countertops.",
    "optionA": {
      "id": "opt_a",
      "name": "Engineered Quartz Stone Slabs",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Natural Polished Granite Countertops",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Butcher Block Solid Wood Countertop",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your contractor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Butcher Block Solid Wood Countertop.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_085",
    "title": "Home Energy Efficiency Project",
    "category": "Home Improvement",
    "context": "You and Your partner are deciding on home energy efficiency project.",
    "targetAudience": "Your partner, David",
    "partnerChoiceName": "Geothermal Ground-Source Loop",
    "partnerRationale": "David wants a geothermal ground-source loop.",
    "optionA": {
      "id": "opt_a",
      "name": "Rooftop Solar Panel System with Battery",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Triple-Pane Argon Windows & Attic Insulation",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Geothermal Ground-Source Loop",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Geothermal Ground-Source Loop.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_086",
    "title": "Front Yard Landscaping Style",
    "category": "Home Improvement",
    "context": "You and Your neighbor are deciding on front yard landscaping style.",
    "targetAudience": "Your neighbor, Frank",
    "partnerChoiceName": "Synthetic Artificial Plastic Turf",
    "partnerRationale": "Frank suggests artificial plastic turf.",
    "optionA": {
      "id": "opt_a",
      "name": "Drought-Tolerant Native Eco-Garden",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Traditional Emerald Green Sod Lawn with Sprinklers",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Synthetic Artificial Plastic Turf",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your neighbor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Synthetic Artificial Plastic Turf.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_087",
    "title": "Kitchen Cabinet Remodel Approach",
    "category": "Home Improvement",
    "context": "You and Your spouse are deciding on kitchen cabinet remodel approach.",
    "targetAudience": "Your spouse, Laura",
    "partnerChoiceName": "Painting Old Cabinets DIY on Weekend",
    "partnerRationale": "Laura wants to paint the 20-year-old cabinets DIY.",
    "optionA": {
      "id": "opt_a",
      "name": "Complete Custom Cabinet Replacement",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Cabinet Door Refacing & New Hardware",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Painting Old Cabinets DIY on Weekend",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Painting Old Cabinets DIY on Weekend.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_088",
    "title": "Driveway Paving Material",
    "category": "Home Improvement",
    "context": "You and Your contractor are deciding on driveway paving material.",
    "targetAudience": "Your contractor, Tony",
    "partnerChoiceName": "Standard Black Asphalt Paving",
    "partnerRationale": "Tony recommends standard black asphalt.",
    "optionA": {
      "id": "opt_a",
      "name": "Interlocking Concrete Stone Pavers",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Exposed Aggregate Poured Concrete",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Black Asphalt Paving",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your contractor's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Standard Black Asphalt Paving.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_089",
    "title": "Basement Renovation Purpose",
    "category": "Home Improvement",
    "context": "You and Your spouse are deciding on basement renovation purpose.",
    "targetAudience": "Your spouse, Kevin",
    "partnerChoiceName": "Home Gym & Workshop",
    "partnerRationale": "Kevin wants a private gym and workshop.",
    "optionA": {
      "id": "opt_a",
      "name": "Home Cinema & Family Recreation Lounge",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Legal Secondary Income Rental Suite",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Home Gym & Workshop",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Home Gym & Workshop.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_090",
    "title": "Bathroom Remodel Feature",
    "category": "Home Improvement",
    "context": "You and Your partner are deciding on bathroom remodel feature.",
    "targetAudience": "Your partner, Sarah",
    "partnerChoiceName": "Standard Acrylic Tub-Shower Combo Unit",
    "partnerRationale": "Sarah wants a basic acrylic tub-shower combo unit.",
    "optionA": {
      "id": "opt_a",
      "name": "Frameless Walk-In Glass Spa Shower",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Freestanding Deep Soaking Tub with Wand",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Acrylic Tub-Shower Combo Unit",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Standard Acrylic Tub-Shower Combo Unit.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_091",
    "title": "Client Business Dinner Venue",
    "category": "Dining & Social Gatherings",
    "context": "You and Your colleague are deciding on client business dinner venue.",
    "targetAudience": "Your colleague, Marcus",
    "partnerChoiceName": "Casual Craft Brewery Gastropub",
    "partnerRationale": "Marcus wants a loud casual craft brewery.",
    "optionA": {
      "id": "opt_a",
      "name": "Historic Fine Dining Steakhouse with Private Room",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Fusion Bistro with Open Kitchen",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Casual Craft Brewery Gastropub",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your colleague's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Casual Craft Brewery Gastropub.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_092",
    "title": "Family Sunday Brunch Venue",
    "category": "Dining & Social Gatherings",
    "context": "You and Your family member are deciding on family sunday brunch venue.",
    "targetAudience": "Your family member, Uncle Joe",
    "partnerChoiceName": "Fast-Food All-Day Pancake Diner",
    "partnerRationale": "Uncle Joe wants a fast-food pancake diner.",
    "optionA": {
      "id": "opt_a",
      "name": "Waterfront Buffet with Seafood & Carvery",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Farm-to-Table French Artisan Cafe",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Fast-Food All-Day Pancake Diner",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your family member's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Fast-Food All-Day Pancake Diner.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_093",
    "title": "Neighborhood Block Party Format",
    "category": "Dining & Social Gatherings",
    "context": "You and Event organizer are deciding on neighborhood block party format.",
    "targetAudience": "Event organizer, Mrs. Gable",
    "partnerChoiceName": "Ice Cream Social at Community Hall",
    "partnerRationale": "Mrs. Gable wants an ice cream social in the hall.",
    "optionA": {
      "id": "opt_a",
      "name": "Community Potluck BBQ with Lawn Games",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Rented Food Trucks & Live Acoustic Band",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Ice Cream Social at Community Hall",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Event organizer's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Ice Cream Social at Community Hall.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_094",
    "title": "Dinner Party Catering Solution",
    "category": "Dining & Social Gatherings",
    "context": "You and Your partner are deciding on dinner party catering solution.",
    "targetAudience": "Your partner, Nina",
    "partnerChoiceName": "Cooking a 5-Course Meal From Scratch Alone",
    "partnerRationale": "Nina wants to cook a 5-course meal alone from scratch.",
    "optionA": {
      "id": "opt_a",
      "name": "Private In-Home Chef for 8 Guests",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Gourmet Italian Trattoria Family Platters",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cooking a 5-Course Meal From Scratch Alone",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Cooking a 5-Course Meal From Scratch Alone.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_095",
    "title": "Couple Cooking Class Experience",
    "category": "Dining & Social Gatherings",
    "context": "You and Your partner are deciding on couple cooking class experience.",
    "targetAudience": "Your partner, Chris",
    "partnerChoiceName": "French Macaron Baking Class",
    "partnerRationale": "Chris wants a French macaron baking class.",
    "optionA": {
      "id": "opt_a",
      "name": "Handmade Fresh Pasta & Gelato Masterclass",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Artisanal Sushi & Ramen Workshop",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "French Macaron Baking Class",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your partner's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to French Macaron Baking Class.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_096",
    "title": "Weekly Household Grocery Model",
    "category": "Dining & Social Gatherings",
    "context": "You and Your roommate are deciding on weekly household grocery model.",
    "targetAudience": "Your roommate, Liam",
    "partnerChoiceName": "Supermarket Delivery App Delivery",
    "partnerRationale": "Liam wants to order everything through delivery apps.",
    "optionA": {
      "id": "opt_a",
      "name": "Weekly Farmers' Market & Local Butcher",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Wholesale Club (Costco) Bulk Shopping",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Supermarket Delivery App Delivery",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your roommate's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Supermarket Delivery App Delivery.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_097",
    "title": "Office Lunch & Learn Catering",
    "category": "Dining & Social Gatherings",
    "context": "You and Your coworker are deciding on office lunch & learn catering.",
    "targetAudience": "Your coworker, Sandra",
    "partnerChoiceName": "Individual Fast-Food Pizza Boxes",
    "partnerRationale": "Sandra wants individual pizza boxes.",
    "optionA": {
      "id": "opt_a",
      "name": "Fresh Mediterranean Mezze Bowls",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Gourmet Specialty Sandwiches & Salads",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Individual Fast-Food Pizza Boxes",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your coworker's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Individual Fast-Food Pizza Boxes.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_098",
    "title": "Anniversary Romantic Dinner",
    "category": "Dining & Social Gatherings",
    "context": "You and Your spouse are deciding on anniversary romantic dinner.",
    "targetAudience": "Your spouse, Elena",
    "partnerChoiceName": "Sunset Dinner Boat Cruise",
    "partnerRationale": "Elena wants a crowded sunset dinner boat cruise.",
    "optionA": {
      "id": "opt_a",
      "name": "Revolving Panoramic Tower Restaurant",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "7-Course Chef Tasting Menu in Wine Cellar",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Sunset Dinner Boat Cruise",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your spouse's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Sunset Dinner Boat Cruise.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_099",
    "title": "Social Hobby Group Format",
    "category": "Dining & Social Gatherings",
    "context": "You and Your friend are deciding on social hobby group format.",
    "targetAudience": "Your friend, Paul",
    "partnerChoiceName": "Weekly Pub Trivia Night",
    "partnerRationale": "Paul prefers weekly pub trivia night.",
    "optionA": {
      "id": "opt_a",
      "name": "Monthly Book & Wine Discussion Club",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Strategy Board Game & Social Night",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Weekly Pub Trivia Night",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your friend's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Weekly Pub Trivia Night.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  },
  {
    "id": "t5_100",
    "title": "Remote Work Cafe Session",
    "category": "Dining & Social Gatherings",
    "context": "You and Your colleague are deciding on remote work cafe session.",
    "targetAudience": "Your colleague, Maya",
    "partnerChoiceName": "Public Library Silent Study Desks",
    "partnerRationale": "Maya wants to sit at silent library desks.",
    "optionA": {
      "id": "opt_a",
      "name": "Quiet Artisan Coffee Roastery with Large Tables",
      "price": "Option A Tier",
      "location": "Quality Option",
      "specs": "Key specifications and features",
      "features": [
        "Optimized for quality, durability, and practical value",
        "Higher overall satisfaction and positive reviews",
        "Cost-effective with great long-term return on investment",
        "Convenient and user-friendly design tailored for our needs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Dedicated Co-Working Day Lounge",
      "price": "Option B Tier",
      "location": "Alternative Option",
      "specs": "Key specifications and features",
      "features": [
        "Modern features designed for flexibility and ease of use",
        "Excellent warranty, support, and reliability",
        "Balanced pricing providing high utility",
        "Fits seamlessly into our schedule and lifestyle"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Public Library Silent Study Desks",
      "price": "Partner Choice Tier",
      "location": "Compromise Option",
      "specs": "Partner preferred specs",
      "features": [
        "Selected primarily for niche interest",
        "Higher recurring costs or significant drawbacks",
        "Less practical for day-to-day requirements",
        "Lacks key features available in Option A and Option B"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge Your colleague's reasoning, but point out the superior practical benefits of Option A / Option B.",
      "Highlight the financial savings and higher long-term value compared to Public Library Silent Study Desks.",
      "Explain how your choice better balances convenience, comfort, and mutual satisfaction."
    ]
  }
];
