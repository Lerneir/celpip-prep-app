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
      "specs": "950 sq. ft. • 2 Bed, 1.5 Bath",
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
      "specs": "620 sq. ft. • 1 Bed, 1 Bath",
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
      "specs": "450 sq. ft. • Open Studio, 1 Bath",
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
      "specs": "1,600 sq. ft. • 3 Bed, 2 Bath • 50ft Lot",
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
      "specs": "1,850 sq. ft. (incl. basement) • 3 Bed, 3 Bath",
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
      "specs": "1,050 sq. ft. • 2 Bed, 2 Bath • 1 Parking",
      "features": [
        "Wrap-around glass balcony with panoramic city views",
        "Full building amenities (valet, gym, indoor pool)",
        "Zero exterior maintenance or lawn mowing required",
        "High monthly maintenance fees that increase annually"
      ]
    },
    "persuasionGuidance": [
      "Highlight long-term equity growth and freedom of land ownership with zero monthly condo fees ($850/mo savings).",
      "Explain family growth potential with multiple bedrooms, private yard, and 2-car garage.",
      "Address future resale value and predictable costs compared to escalating condo maintenance fees."
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
        "Parents cannot drive safely in harsh winter storms"
      ]
    },
    "persuasionGuidance": [
      "Address safety concerns: rural isolation makes winter driving and medical emergency access dangerous.",
      "Highlight ease of living with accessible features, nearby healthcare, and zero property maintenance burdens.",
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
      "Point out the safety risk of being 30 minutes away by boat in case of medical emergencies or severe thunderstorms."
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
      "specs": "800 sq. ft. • Large above-ground windows",
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
      "specs": "580 sq. ft. • 1 Bed, 1 Bath • 18th Floor",
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
      "specs": "650 sq. ft. • Open loft concept",
      "features": [
        "Exposed brick walls, wood beams, and tall ceilings",
        "Surrounded by trendy bars, cafes, and art galleries",
        "High utility costs due to drafty vintage windows",
        "Very expensive rent consuming over 50% of monthly income"
      ]
    },
    "persuasionGuidance": [
      "Highlight immense annual savings (saving over $14,000 across the 1-year contract).",
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
        "Flexible 4-month exact lease matching internship dates"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Furnished Yaletown 1-Bedroom + Den Sublet",
      "price": "$2,400 / month Total ($1,200 each, utilities incl.)",
      "location": "Yaletown Downtown (5 min walk to office)",
      "specs": "1 Bedroom + Den with sofa-bed, 1 Bath",
      "features": [
        "Walking distance to both internship offices",
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
        "Extremely high cost exceeding student internship stipends",
        "Cramped living area with no proper desks for study/work",
        "Limited cooking equipment with only a mini-fridge and microwave"
      ]
    },
    "persuasionGuidance": [
      "Contrast the cost: $800–$1,200 each for a real furnished apartment vs $2,100 each for a cramped hotel room.",
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
      "specs": "1,550 sq. ft. • 3 Bed, 2.5 Bath • Double Garage",
      "features": [
        "Private rooftop patio with downtown skyline and mountain views",
        "Modern quartz finishes, 9ft ceilings, and gas fireplace",
        "Zero snow shoveling or landscaping chores (handled by HOA)",
        "Short 15-minute commute to work, restaurants, and river pathways"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Detached 2-Story Home in Established Community",
      "price": "$510,000 (No maintenance fees)",
      "location": "Established NW neighborhood near parks and schools",
      "specs": "1,800 sq. ft. • 3 Bed, 2.5 Bath • Fenced Yard",
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
      "specs": "3,500 sq. ft. • 5 Bed, 4 Bath • Huge lot",
      "features": [
        "Massive space with built-in cinema and gym room",
        "Exhausting 2-hour daily commute in winter road conditions",
        "Enormous monthly gas heating bills during winter (-30°C)",
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
      "Highlight immense savings of living in the shared house (saving almost $1,200 every single month).",
      "Explain that taking the Master Bedroom gives him total bathroom privacy and ample space like a studio.",
      "Point out social benefits and shared chores of living with good friends rather than being isolated."
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
      "specs": "2,200 sq. ft. • 4 Bed, 3 Bath • Fenced Yard",
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
      "specs": "2,000 sq. ft. Bungalow • 3 Bed, 2 Bath • 1 Acre",
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
      "Address heavy physical and financial burden of managing a 10-acre farm alongside full-time careers.",
      "Show how the 1-acre semi-rural property or suburban home provides plenty of space and gardens without overwhelming maintenance.",
      "Highlight practical safety of having nearby schools, emergency medical care, and reliable city snow clearing."
    ]
  },
  {
    "id": "t5_011",
    "title": "Daily Commute Vehicle",
    "category": "Automotive & Transportation",
    "context": "You and your partner Daniel are choosing a new vehicle for your daily 30-km city commute to work.",
    "targetAudience": "Your partner, Daniel",
    "partnerChoiceName": "Gas V8 7-Passenger Minivan",
    "partnerRationale": "Daniel likes the minivan because of maximum cargo space for occasional trips to the hardware store.",
    "optionA": {
      "id": "opt_a",
      "name": "Compact Electric Hatchback (EV)",
      "price": "$38,000 ($5,000 Federal EV Rebate eligible)",
      "location": "Local EV Dealership with quick delivery",
      "specs": "400 km Battery Range • Zero Emissions • 5-Seater",
      "features": [
        "Save over $2,500 annually on gasoline and oil changes",
        "Includes free home Level-2 charging station installation rebate",
        "Top safety rating with automated emergency braking and lane assist",
        "Eligible for green vehicle HOV carpool lane access during rush hour"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "AWD Compact SUV with Winter Package",
      "price": "$35,000 (Low financing rate)",
      "location": "Certified Regional Dealership",
      "specs": "32 MPG Hwy • Intelligent AWD • 5-Seater",
      "features": [
        "Superb traction and control on icy and snow-covered Canadian roads",
        "Heated front and rear seats, heated steering wheel, and remote starter",
        "High 8.2-inch ground clearance to easily clear snowdrifts",
        "Proven long-term reliability and low routine maintenance costs"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Gas V8 7-Passenger Minivan",
      "price": "$48,000 (+ High fuel & insurance costs)",
      "location": "Commercial Dealership",
      "specs": "16 MPG City • Heavy Gas V8 • 7-Seater",
      "features": [
        "Huge passenger capacity and power sliding doors",
        "Extremely high monthly gas consumption for single-passenger commuting",
        "Difficult to park and maneuver in tight underground work garages",
        "Higher annual insurance premiums and faster vehicle depreciation"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge the minivan's extra cargo space, but point out that 95% of trips are daily solo work commutes.",
      "Highlight immense annual savings on fuel ($2,500+ saved with EV or efficient compact SUV).",
      "Emphasize ease of parking, maneuverability, and winter driving confidence with AWD or compact EV handling."
    ]
  },
  {
    "id": "t5_012",
    "title": "Car Purchase: Certified Pre-Owned vs. Lease",
    "category": "Automotive & Transportation",
    "context": "You and your spouse Claire need to acquire a reliable car for your growing family.",
    "targetAudience": "Your spouse, Claire",
    "partnerChoiceName": "Brand New Luxury Sports Coupe",
    "partnerRationale": "Claire wants a luxury sports coupe for its prestige, high horsepower, and sleek exterior design.",
    "optionA": {
      "id": "opt_a",
      "name": "Certified Pre-Owned 3-Year-Old Sedan",
      "price": "$22,000 Total Purchase (Low interest financing)",
      "location": "Manufacturer Certified Pre-Owned Dealership",
      "specs": "35,000 km • 4-Cylinder Turbo • 5-Passenger",
      "features": [
        "Includes comprehensive 5-year bumper-to-bumper extended warranty",
        "Vehicle has already absorbed the steep initial 40% depreciation",
        "Full vehicle history report with zero accidents and clean record",
        "Full ownership of an asset with zero ongoing payments once paid off"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "3-Year Fixed Lease on New Crossover",
      "price": "$340 / month ($0 Down Payment)",
      "location": "Direct Manufacturer Showroom",
      "specs": "Brand New • AWD • 5-Passenger Hatchback",
      "features": [
        "Full factory warranty covers all repairs and maintenance for 3 years",
        "Equipped with latest touchscreen navigation and Apple CarPlay",
        "Low fixed monthly payments without taking on major debt",
        "Option to upgrade to a newer model every 3 years without resale hassles"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Brand New Luxury Sports Coupe",
      "price": "$62,000 ($850/mo financing + $300/mo insurance)",
      "location": "High-End Luxury Importer",
      "specs": "2-Seater • RWD • 350 HP V6",
      "features": [
        "Impressive acceleration, leather interior, and status appeal",
        "Only 2 seats with zero room for children, car seats, or groceries",
        "Rear-wheel drive makes winter driving in snow dangerous",
        "Massive insurance premiums and rapid depreciation"
      ]
    },
    "persuasionGuidance": [
      "Explain that a 2-seater sports coupe is completely impractical for a family with grocery and child seating needs.",
      "Point out huge financial burden ($1,150/mo for coupe vs $340/mo lease or $22k owned outright).",
      "Highlight practical year-round usability, safety, and reliability of the sedan or crossover."
    ]
  },
  {
    "id": "t5_013",
    "title": "City Transportation: Transit Pass vs. E-Bike",
    "category": "Automotive & Transportation",
    "context": "You and your roommate Sam are deciding how to commute to your downtown jobs without owning a car.",
    "targetAudience": "Your roommate, Sam",
    "partnerChoiceName": "Daily Uber & Taxi Rides",
    "partnerRationale": "Sam prefers taking daily Uber and taxi rides for on-demand door-to-door convenience.",
    "optionA": {
      "id": "opt_a",
      "name": "Annual Unlimited Public Transit Pass",
      "price": "$1,450 / year ($120 / month)",
      "location": "City Transit Authority (Bus & Subway Network)",
      "specs": "Unlimited subway, streetcar, and bus rides",
      "features": [
        "Zero worry about winter weather, icy roads, or traffic delays",
        "Relax, read books, or work on phone during the daily commute",
        "Pre-tax transit discount eligible for tax credits",
        "Covers all weekend trips and leisure travel across the entire city"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "All-Weather Commuter E-Bike",
      "price": "$1,800 One-time Purchase",
      "location": "Local Bicycle Pro-Shop",
      "specs": "750W Motor • 65 km Range • Fat Tires",
      "features": [
        "Fast, direct commute bypassing all traffic jams and transit delays",
        "Fat puncture-resistant tires handle rain, gravel, and light snow",
        "Removable locking battery charges from standard household wall plug",
        "Provides great daily cardiovascular exercise while saving money"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Daily Uber & Taxi Rides",
      "price": "$25–$35 / day ($600–$800 / month)",
      "location": "Rideshare App on smartphone",
      "specs": "On-demand car service",
      "features": [
        "Picked up directly outside front door",
        "Extremely expensive, totaling over $8,000 annually",
        "Subject to surge pricing and long wait times in bad weather",
        "Contributes to city traffic congestion and carbon footprint"
      ]
    },
    "persuasionGuidance": [
      "Contrast astronomical annual cost: spending $8,000 on Uber vs $1,450 for transit or a one-time $1,800 bike.",
      "Point out reliability: public transit and bike lanes are immune to rush-hour gridlock and surge pricing.",
      "Emphasize personal health and environmental sustainability benefits."
    ]
  },
  {
    "id": "t5_014",
    "title": "Family Road Trip Vehicle",
    "category": "Automotive & Transportation",
    "context": "You and your brother David are planning a 10-day summer road trip across the Rocky Mountains with your families.",
    "targetAudience": "Your brother, David",
    "partnerChoiceName": "Flying and Renting Compact Cars",
    "partnerRationale": "David wants to fly everyone to Calgary and rent two compact cars to avoid long highway driving.",
    "optionA": {
      "id": "opt_a",
      "name": "Rented Class-C RV Motorhome",
      "price": "$1,800 for 10 Days (Split between families)",
      "location": "National RV Rental Depot",
      "specs": "24-ft Motorhome • Sleeps 6 • Full Kitchen & Bath",
      "features": [
        "Camp directly inside national parks next to lakes and hiking trails",
        "Full kitchen allows cooking fresh meals, saving $1,500 on dining out",
        "Complete freedom to adjust travel route and stop anywhere scenic",
        "Kids can nap and play games comfortably while on the road"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "7-Passenger Full-Size Minivan + Hotel Stays",
      "price": "$1,400 Total ($700 van rental + $700 motel rooms)",
      "location": "Airport Car Rental Depot",
      "specs": "7-Seater Luxury Minivan • V6 AWD",
      "features": [
        "Spacious seating with reclining captain chairs and entertainment screens",
        "Easy to park in standard parking spots at scenic viewpoints",
        "Comfortable air-conditioned hotel rooms with hot showers every night",
        "Smooth highway fuel economy compared to heavy motorhomes"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Flying and Renting Compact Cars",
      "price": "$3,600 Total ($2,400 airfare for 6 + $1,200 cars)",
      "location": "Commercial Airline + Airport Hertz",
      "specs": "Economy flights + 2 Compact 4-door cars",
      "features": [
        "Fast travel between major airport hubs",
        "Very expensive tickets taking double the road trip budget",
        "Families are separated into two tiny cars with limited luggage space",
        "Miss out on iconic scenic mountain drives and roadside attractions"
      ]
    },
    "persuasionGuidance": [
      "Point out massive budget savings ($1,400–$1,800 total vs $3,600 flying).",
      "Highlight the unique bonding experience of traveling together in an RV or minivan through scenic Canadian Rockies.",
      "Explain that renting compact cars splits the family up and requires stressful airport security lineups."
    ]
  },
  {
    "id": "t5_015",
    "title": "Winter Commute Tire Strategy",
    "category": "Automotive & Transportation",
    "context": "You and your spouse Maria are preparing your family vehicle for a harsh Canadian winter.",
    "targetAudience": "Your spouse, Maria",
    "partnerChoiceName": "Standard All-Season Tires All Year",
    "partnerRationale": "Maria suggests keeping our worn factory all-season tires to avoid spending any money this year.",
    "optionA": {
      "id": "opt_a",
      "name": "Dedicated Studded Winter Tires with Rims",
      "price": "$850 (Set of 4 mounted on steel rims)",
      "location": "Local Tire & Auto Service Center",
      "specs": "Severe Snow Peak Rated • Metal Studs • Steel Wheels",
      "features": [
        "Unbeatable braking distance on black ice and packed freezing rain",
        "Mounted on dedicated steel rims for fast $30 seasonal tire swaps at home",
        "Qualifies for a mandatory 5% discount on auto insurance premiums",
        "Extends the lifespan of summer tires by only using these 4 months a year"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Premium All-Weather 4-Season Tires",
      "price": "$720 (Set of 4 tires installed)",
      "location": "Major Tire Retailer",
      "specs": "3-Peak Mountain Snowflake Rated • 100,000 km Warranty",
      "features": [
        "Certified for severe Canadian winter driving conditions",
        "Stays on the car all 12 months with zero seasonal swap fees",
        "Hydroplaning-resistant tread channels water and slush effectively",
        "Hassle-free solution with no need to store bulky extra tires in garage"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard All-Season Tires All Year",
      "price": "$0 upfront (Using worn factory tires)",
      "location": "Current vehicle",
      "specs": "Hard rubber compound • Worn tread",
      "features": [
        "Zero upfront financial expense today",
        "Rubber compound hardens below 7°C, losing traction and sliding",
        "Dangerous braking distances on icy bridges and morning highway commutes",
        "High risk of collision resulting in expensive insurance deductibles"
      ]
    },
    "persuasionGuidance": [
      "Address family safety: rubber hardens in sub-zero temps, making worn tires extremely dangerous on Canadian roads.",
      "Highlight that a single minor fender bender deductible ($1,000) costs more than buying proper winter tires.",
      "Show that all-weather tires or dedicated winter tires save money long-term and lower insurance rates."
    ]
  },
  {
    "id": "t5_016",
    "title": "Rideshare / Delivery Side-Gig Car",
    "category": "Automotive & Transportation",
    "context": "You and your brother Jason are buying an affordable vehicle to work evenings doing Uber rides and food delivery.",
    "targetAudience": "Your brother, Jason",
    "partnerChoiceName": "Full-Size V8 Pickup Truck",
    "partnerRationale": "Jason wants a full-size V8 pickup truck because it looks tough and has an aggressive road presence.",
    "optionA": {
      "id": "opt_a",
      "name": "Compact Hybrid Sedan",
      "price": "$24,000 (Certified Pre-Owned)",
      "location": "Hybrid Dealership",
      "specs": "52 MPG (4.5 L/100km) • Reliable Hybrid E-CVT",
      "features": [
        "Outstanding city fuel efficiency cuts monthly gas expenses by 65%",
        "Legendary reliability with minimal brake wear due to regenerative braking",
        "Comfortable 5-passenger seating qualifies for standard Uber & Lyft",
        "High customer satisfaction ratings leading to bigger passenger tips"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Subcompact AWD Crossover",
      "price": "$26,000 (New with Warranty)",
      "location": "Local Auto Mall",
      "specs": "36 MPG Hwy • Intelligent AWD • Hatchback Cargo",
      "features": [
        "Enables driving in winter blizzards when delivery fares and surges are highest",
        "Wide rear hatchback opening makes grocery and package delivery easy",
        "Full 5-year bumper-to-bumper manufacturer warranty coverage",
        "Compact dimensions allow easy parallel parking on busy downtown streets"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Full-Size V8 Pickup Truck",
      "price": "$45,000 (+ $700/mo gas bills)",
      "location": "Truck Center",
      "specs": "14 MPG City (16.5 L/100km) • V8 Engine",
      "features": [
        "Heavy-duty towing power and high commanding ride height",
        "Fuel costs will consume nearly all nightly side-gig earnings",
        "Difficult to find parking in tight downtown apartment zones",
        "Open truck bed cannot keep food deliveries warm or groceries dry"
      ]
    },
    "persuasionGuidance": [
      "Explain that the goal of a side gig is profit: a V8 truck's fuel consumption will erase all earnings.",
      "Highlight that the hybrid sedan saves hundreds in gas monthly while providing passenger comfort.",
      "Point out that the AWD crossover allows lucrative surge-pricing deliveries in winter snowstorms."
    ]
  },
  {
    "id": "t5_017",
    "title": "First Car for Teenage Driver",
    "category": "Automotive & Transportation",
    "context": "You and your spouse are buying a safe, dependable first car for your 17-year-old son Lucas.",
    "targetAudience": "Your spouse, Karen",
    "partnerChoiceName": "High-Powered Sports Coupe",
    "partnerRationale": "Lucas and Karen like the red sports coupe because it looks fast and stylish for high school.",
    "optionA": {
      "id": "opt_a",
      "name": "Reliable 5-Year-Old 4-Door Sedan",
      "price": "$12,500 Total Purchase",
      "location": "Trusted Local Used Car Dealership",
      "specs": "140 HP 4-Cylinder • 5-Star IIHS Safety Pick",
      "features": [
        "Equipped with 8 airbags, anti-lock brakes, and electronic stability control",
        "Low insurance group rating saves over $1,200 annually on teen insurance",
        "Moderate horsepower prevents reckless high-speed driving",
        "Cheap replacement parts and inexpensive routine oil changes"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Certified Hatchback with Driver-Assist Tech",
      "price": "$14,000 Total Purchase",
      "location": "Certified Dealership",
      "specs": "Automatic Emergency Braking • Blind-Spot Camera",
      "features": [
        "Advanced collision avoidance sensors actively prevent parking lot dings",
        "Rearview backup camera and cross-traffic alerts make parking easy",
        "Excellent 38 MPG fuel economy ideal for student part-time budget",
        "Fold-flat rear seats provide room for sports gear and musical instruments"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "High-Powered Sports Coupe",
      "price": "$18,500 (+ Skyrocketing youth insurance)",
      "location": "Private Seller",
      "specs": "280 HP V6 • Rear-Wheel Drive • Sport Suspension",
      "features": [
        "Fast acceleration and aggressive exhaust sound",
        "High accident risk for inexperienced teenage drivers",
        "Astronomical auto insurance rates for young drivers (over $400/month)",
        "Rear-wheel drive leads to fishtailing and sliding in Canadian winter"
      ]
    },
    "persuasionGuidance": [
      "Prioritize teen driver safety over aesthetics: 140 HP sedan or tech hatchback prevents dangerous speeding.",
      "Contrast insurance costs: high-powered sports coupes cost over $4,500/yr for teen drivers vs $2,000 for a sedan.",
      "Highlight winter safety: rear-wheel drive coupe will get stuck or slide on icy roads."
    ]
  },
  {
    "id": "t5_018",
    "title": "Utility Vehicle for Home Renovation Business",
    "category": "Automotive & Transportation",
    "context": "You and your business partner Marco are purchasing a work vehicle for your residential carpentry business.",
    "targetAudience": "Your business partner, Marco",
    "partnerChoiceName": "Heavy-Duty Diesel Dually Truck",
    "partnerRationale": "Marco wants a diesel dually truck for maximum towing power and rugged contractor image.",
    "optionA": {
      "id": "opt_a",
      "name": "Enclosed Commercial Cargo Van",
      "price": "$36,000 (Commercial leasing available)",
      "location": "Commercial Fleet Dealership",
      "specs": "High Roof • 10-ft Cargo Bay • Shelving System Included",
      "features": [
        "Completely weatherproof and lockable storage protects $15,000 of tools",
        "Stand upright inside the cargo area to organize materials and cuts",
        "Exterior side panels provide large mobile billboard space for company branding",
        "Efficient V6 engine delivers lower operating and fuel costs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "AWD Work SUV + Enclosed Utility Trailer",
      "price": "$29,000 Total ($22k SUV + $7k Heavy Trailer)",
      "location": "Regional Equipment Supplier",
      "specs": "V6 Tow Package + 6x12 ft Lockable Trailer",
      "features": [
        "Leave the heavy tool trailer locked on job sites while using SUV for client meetings",
        "Dual functionality: vehicle serves as family SUV on weekends",
        "Cheaper overall initial capital investment for a growing business",
        "AWD ensures easy access to muddy new construction sites"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Heavy-Duty Diesel Dually Truck",
      "price": "$68,000 (+ High diesel fuel & maintenance)",
      "location": "Heavy Truck Center",
      "specs": "6.7L Turbo Diesel • Open 8-ft Bed",
      "features": [
        "Massive 20,000-lb towing capacity and leather cabin",
        "Open truck bed leaves expensive power tools vulnerable to rain and theft",
        "Extremely expensive initial cost ($68k) tying up business cash flow",
        "Difficult to maneuver on narrow residential suburban driveways"
      ]
    },
    "persuasionGuidance": [
      "Address tool security: an enclosed cargo van or trailer protects expensive tools from theft and rain.",
      "Contrast costs: save over $30,000 in capital expenses compared to an overpowered diesel truck.",
      "Explain daily practicality: cargo vans allow standing upright to organize screws, drills, and lumber."
    ]
  },
  {
    "id": "t5_019",
    "title": "Long-Distance Work Commute",
    "category": "Automotive & Transportation",
    "context": "You and your coworker Nathan commute 50 km each way from Barrie to Toronto every weekday.",
    "targetAudience": "Your coworker, Nathan",
    "partnerChoiceName": "Driving Solo in Personal Gas Car",
    "partnerRationale": "Nathan prefers driving alone in his own car so he can listen to loud music and leave whenever he wants.",
    "optionA": {
      "id": "opt_a",
      "name": "Commuter Train (GO Transit) Monthly Pass",
      "price": "$280 / month (Tax deductible)",
      "location": "Regional Transit Rail Station",
      "specs": "Double-Decker Train • Free Wi-Fi • Quiet Zone",
      "features": [
        "Eliminates the stress of gridlock traffic on Highway 400",
        "Comfortable work tables allow completing emails or relaxing during transit",
        "Direct express drop-off at downtown Union Station without parking fees",
        "Saves wear-and-tear of 25,000 km annually on personal vehicles"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "4-Person Coworker Carpool Rotation",
      "price": "$80 / month (Split fuel & 407 toll 4 ways)",
      "location": "Local Highway Carpool Lot",
      "specs": "AWD Crossover • High-Occupancy Vehicle (HOV) Lane",
      "features": [
        "Utilizes express HOV carpool lanes to cut 30 minutes off commute time",
        "You only have to drive your car once every four weeks",
        "Massive financial savings splitting fuel and parking four ways",
        "Social camaraderie and networking with company colleagues"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Driving Solo in Personal Gas Car",
      "price": "$650 / month ($350 gas + $300 downtown parking)",
      "location": "Daily Highway Commute",
      "specs": "Individual driving • Daily rush hour",
      "features": [
        "Total independence over schedule and radio stations",
        "Exhausting 90-minute daily battles with rush-hour traffic jams and blizzards",
        "Extremely costly ($650/month in gas, parking, and maintenance)",
        "Rapid vehicle mileage accumulation causing steep depreciation"
      ]
    },
    "persuasionGuidance": [
      "Highlight huge cost difference: saving nearly $400 to $570 every month compared to driving solo.",
      "Point out mental health benefits: relaxing or working on the train vs suffering 2 hours of daily highway stress.",
      "Emphasize HOV carpool lane speed advantages during morning rush hour."
    ]
  },
  {
    "id": "t5_020",
    "title": "Urban Summer Commute",
    "category": "Automotive & Transportation",
    "context": "You and your colleague Rachel want a fun, affordable way to commute 6 km across the city during summer.",
    "targetAudience": "Your colleague, Rachel",
    "partnerChoiceName": "Vintage Gas Convertible Car",
    "partnerRationale": "Rachel wants to buy a 1995 convertible sports car to enjoy sunny weekend cruising with the top down.",
    "optionA": {
      "id": "opt_a",
      "name": "Electric Commuter Scooter / E-Bike",
      "price": "$950 One-time Purchase",
      "location": "Downtown Micro-Mobility Store",
      "specs": "500W Motor • 45 km Battery Range • Foldable Frame",
      "features": [
        "Glide through protected city bike lanes without getting stuck in traffic",
        "Folds in 3 seconds to store under your work desk or take into apartment",
        "Charges for pennies using a standard wall outlet",
        "Zero parking fees, zero insurance payments, and zero gas costs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "150cc Modern Commuter Motor Scooter",
      "price": "$3,200 (New with 2-Year Warranty)",
      "location": "Urban Powersports Showroom",
      "specs": "150cc 4-Stroke • 90 MPG • Under-Seat Storage",
      "features": [
        "Capable of traveling at 90 km/h on urban arterial roads and bridges",
        "Large lockable under-seat compartment holds backpack and groceries",
        "Ultra-low fuel costs ($10 fills the tank for two weeks of riding)",
        "Easy designated free or discounted motorcycle parking in downtown core"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Vintage Gas Convertible Car",
      "price": "$9,500 (+ High maintenance & repairs)",
      "location": "Used Car Lot",
      "specs": "30-Year-Old Vehicle • Manual Soft Top",
      "features": [
        "Classic vintage style with open-air driving",
        "Frequent mechanical breakdowns, oil leaks, and difficult-to-find parts",
        "Expensive downtown parking permits ($250/mo) and full insurance",
        "Still trapped in the same gridlock city traffic as regular cars"
      ]
    },
    "persuasionGuidance": [
      "Contrast financial reality: $950 e-bike vs $9,500 vintage car with high insurance, gas, and parking fees.",
      "Explain traffic convenience: micro-mobility uses bike lanes to bypass city gridlock effortlessly.",
      "Address mechanical reliability: vintage 30-year-old convertibles will frequently break down and leak in rain."
    ]
  },
  {
    "id": "t5_021",
    "title": "Family Summer Vacation",
    "category": "Vacation & Travel",
    "context": "You and your spouse Sarah are planning a 7-day summer vacation for your family of four, including two young children.",
    "targetAudience": "Your spouse, Sarah",
    "partnerChoiceName": "Las Vegas Strip Casino Hotel",
    "partnerRationale": "Sarah thinks Las Vegas would be fun for the dazzling night lights, world-famous magic shows, and pool parties.",
    "optionA": {
      "id": "opt_a",
      "name": "All-Inclusive Beach Resort in Cancun",
      "price": "$3,200 Total (Direct Flights, Buffet & Kids Club)",
      "location": "Mayan Riviera Beachfront Resort",
      "specs": "7 Nights • Oceanfront Family Suite • All Meals & Drinks",
      "features": [
        "Supervised daily kids club with waterparks and beach games",
        "Unlimited gourmet dining and snacks with zero meal planning stress",
        "Gentle shallow turquoise beach ideal for young children swimming safely",
        "Complete upfront price certainty with no surprise dining bills"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Algonquin Park Lakeside Cottage",
      "price": "$2,200 Total ($1,400 cottage + $800 food & boat rental)",
      "location": "Algonquin Provincial Park, Ontario",
      "specs": "7 Nights • 3-Bedroom Waterfront Cabin • Private Dock",
      "features": [
        "Private dock with canoes, paddleboards, and campfire firepit",
        "Peaceful nature setting with wildlife viewing and star-gazing",
        "Scenic 3-hour family drive avoiding airport security and flight delays",
        "Pet-friendly property allowing the family dog to join the holiday"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Las Vegas Strip Casino Hotel",
      "price": "$4,800 Total (Flights, Hotel, Shows & Expensive Dining)",
      "location": "Las Vegas Boulevard Resort Strip",
      "specs": "7 Nights • Standard 2-Queen Room",
      "features": [
        "Glittering casino floors and world-class evening entertainment",
        "Adult-oriented atmosphere with crowded casinos and smoky corridors",
        "Extreme desert summer heat (42°C) makes outdoor walking unbearable",
        "Very expensive meals, resort fees, and limited activities for young kids"
      ]
    },
    "persuasionGuidance": [
      "Explain that Las Vegas is primarily an adult nightlife destination with extreme heat and few kid activities.",
      "Highlight family-friendly convenience of all-inclusive Cancun (kids club, pools, meals included) or Algonquin nature cabin.",
      "Point out substantial financial savings (saving $1,600 to $2,600 compared to Vegas dining and show tickets)."
    ]
  },
  {
    "id": "t5_022",
    "title": "Canadian Winter Holiday Getaway",
    "category": "Vacation & Travel",
    "context": "You and your partner Eric are booking a 5-day winter getaway for February.",
    "targetAudience": "Your partner, Eric",
    "partnerChoiceName": "Caribbean Mega Cruise",
    "partnerRationale": "Eric wants to go on a Caribbean mega cruise to escape cold weather entirely and drink cocktails by the pool.",
    "optionA": {
      "id": "opt_a",
      "name": "Banff & Lake Louise Ski & Hot Springs Resort",
      "price": "$2,100 Total (Flights & 4-Star Lodge included)",
      "location": "Banff National Park, Alberta",
      "specs": "5 Days • Mountain Lodge • Daily Ski & Hot Springs Pass",
      "features": [
        "World-class champagne powder skiing across 3 iconic mountain resorts",
        "Relax in steaming outdoor mineral hot springs surrounded by snow peaks",
        "Breathtaking winter wonderland scenery with ice-skating on Lake Louise",
        "Cozy alpine village with fondue restaurants and horse-drawn sleigh rides"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Quebec City Winter Carnival & Ice Hotel",
      "price": "$1,600 Total (Via Rail Train + Heritage Hotel)",
      "location": "Historic Old Quebec City, Quebec",
      "specs": "5 Days • Heritage Boutique Hotel • Festival VIP Pass",
      "features": [
        "Experience the magic of the historic Carnaval de Québec and ice palaces",
        "Charming cobblestone streets with French bistros and maple sugar shacks",
        "Tour the world-famous Hôtel de Glace (Ice Hotel) and snow slides",
        "Very affordable and scenic direct train ride from Montreal / Ottawa"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Caribbean 7-Day Mega Cruise",
      "price": "$3,800 Total (International Flights, Port Fees & Cabin)",
      "location": "Caribbean Sea Ports",
      "specs": "7 Days • Interior Stateroom on 4,000-passenger ship",
      "features": [
        "Warm tropical sunshine and multiple port stops",
        "High cost requiring international flights and expensive excursions",
        "Crowded ship with long buffet lines and noisy pool decks",
        "Risk of rough seas, seasickness, and missed ports during stormy weather"
      ]
    },
    "persuasionGuidance": [
      "Celebrate the beauty of an authentic Canadian winter holiday (Banff hot springs or historic Quebec Carnival).",
      "Contrast costs: save nearly $2,000 compared to international flights and mega-cruise add-on fees.",
      "Highlight intimate cultural and romantic charm over crowded, generic 4,000-passenger cruise ships."
    ]
  },
  {
    "id": "t5_023",
    "title": "European Exploration Holiday",
    "category": "Vacation & Travel",
    "context": "You and your college friend Lucas are planning a 2-week trip to Europe in autumn.",
    "targetAudience": "Your friend, Lucas",
    "partnerChoiceName": "5-Star Luxury Resort in Santorini",
    "partnerRationale": "Lucas wants to spend the entire 2 weeks at an exclusive cliffside resort in Santorini taking photos for Instagram.",
    "optionA": {
      "id": "opt_a",
      "name": "Backpacking Eurail Pass across 4 Countries",
      "price": "$2,400 Total (Flights, Rail Pass & Boutique Hostels)",
      "location": "France, Switzerland, Italy & Austria",
      "specs": "14 Days • Unlimited 1st-Class Eurail Pass",
      "features": [
        "Explore Paris, the Swiss Alps, Venice, and Vienna on a single trip",
        "Scenic high-speed alpine train journeys through mountains and valleys",
        "Dynamic variety of cultural landmarks, museums, and local food traditions",
        "Build lifelong travel skills and meet international travelers in social lounges"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Small-Group Guided Cultural Tour of Italy",
      "price": "$3,100 Total (Includes Hotels, Rail & English Guides)",
      "location": "Rome, Florence, Tuscany & Amalfi Coast",
      "specs": "14 Days • 4-Star Hotels • Max 12 People per Group",
      "features": [
        "Skip-the-line VIP access to the Colosseum, Vatican, and Uffizi Gallery",
        "Authentic Tuscan vineyard wine tastings and pasta-making masterclass",
        "Expert local historian guides provide deep insights into Renaissance history",
        "Seamless door-to-door luggage transfers and curated private transport"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "5-Star Luxury Resort in Santorini",
      "price": "$6,500 Total (Luxury Flight + Cliffside Villa)",
      "location": "Oia, Santorini, Greece",
      "specs": "14 Days • 1 Island Only • Private Infinity Pool",
      "features": [
        "Spectacular sunset caldera views and luxury infinity pool",
        "Extremely high price ($6,500) consuming entire annual savings",
        "Restricted to one small, crowded island with repetitive activities for 14 days",
        "Miss out on experiencing Europe's rich diversity of countries and history"
      ]
    },
    "persuasionGuidance": [
      "Point out that staying on one tiny island for 14 days becomes boring and repetitive compared to exploring multiple countries.",
      "Contrast the cost: save over $3,400 to $4,100 while experiencing rich European art, architecture, and cuisine.",
      "Emphasize the cultural growth and excitement of multi-destination rail travel or guided Italian discovery."
    ]
  },
  {
    "id": "t5_024",
    "title": "Wedding Anniversary Weekend",
    "category": "Vacation & Travel",
    "context": "You and your spouse are deciding how to celebrate your upcoming 10th wedding anniversary over a long weekend.",
    "targetAudience": "Your spouse, Jessica",
    "partnerChoiceName": "Backcountry Tent Camping at Sandbanks",
    "partnerRationale": "Jessica suggests rough backcountry tent camping to save money and enjoy the beach park.",
    "optionA": {
      "id": "opt_a",
      "name": "Niagara Wine Country Romantic Heritage B&B",
      "price": "$850 Total (2 Nights, Winery Tour & Gourmet Breakfast)",
      "location": "Niagara-on-the-Lake, Ontario",
      "specs": "3 Days • Victorian Heritage Suite • Fireplace & Spa Tub",
      "features": [
        "Cozy room with four-poster king bed, working fireplace, and whirlpool bath",
        "Guided bicycle tour of award-winning wineries with private tastings",
        "Romantic horse-drawn carriage ride through historic heritage town",
        "World-class farm-to-table dining overlooking picturesque vineyards"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Downtown City Theatre & Michelin Dining Getaway",
      "price": "$950 Total (2 Nights 5-Star Hotel, Play Tickets & Dinner)",
      "location": "Downtown Cultural & Theatre Hub",
      "specs": "3 Days • Luxury Skyline King Suite • 2 Theatre Tickets",
      "features": [
        "Premium front-orchestra seats to a hit Broadway touring musical",
        "Indulgent 5-course romantic dinner at a renowned Michelin-starred restaurant",
        "Access to luxury hotel spa, eucalyptus steam room, and rooftop pool",
        "Walking distance to art galleries, boutique shopping, and jazz bars"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Backcountry Tent Camping at Sandbanks",
      "price": "$180 Total (Park campsite permit + firewood)",
      "location": "Provincial Park Campsite",
      "specs": "3 Days • 2-Person Nylon Tent • Shared Park Pit Toilets",
      "features": [
        "Very cheap upfront cost and beautiful sandy dunes",
        "No hot water, shared pit toilets, and sleeping on hard ground",
        "Risk of rain, damp sleeping bags, and swarming mosquitoes",
        "Lacks the special romantic elegance and pampering suited for a 10th anniversary"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge budget savings of camping, but emphasize that a 10th anniversary is a rare milestone deserving romance and pampering.",
      "Highlight comforts of Niagara B&B or luxury downtown hotel (whirlpool bath, fine dining, theatre).",
      "Point out potential disaster of camping in rain, bugs, and shared outdoor facilities on a special anniversary."
    ]
  },
  {
    "id": "t5_025",
    "title": "Group Friends Mountain Getaway",
    "category": "Vacation & Travel",
    "context": "You and your friend Brandon are organizing a 4-day ski and snowboard trip for a group of 6 close friends in Mont-Tremblant.",
    "targetAudience": "Your friend, Brandon",
    "partnerChoiceName": "Budget Roadside Motel",
    "partnerRationale": "Brandon suggests booking two separate rooms at a cheap highway motel 25 km away to minimize costs.",
    "optionA": {
      "id": "opt_a",
      "name": "Private 6-Bedroom Mountain Chalet with Hot Tub",
      "price": "$350 / person Total ($2,100 split 6 ways)",
      "location": "Ski-in / Ski-out Resort Village",
      "specs": "4 Days • 6 Bedrooms, 3 Baths • Stone Fireplace",
      "features": [
        "Private outdoor 8-person hot tub overlooking snow-covered pine forest",
        "Huge open-concept kitchen and living room for group dinners and board games",
        "Direct ski-in / ski-out access without waiting for morning shuttle buses",
        "Large boot-drying room and secure lockable ski storage rack"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Adjoining Luxury Village Condo Suites",
      "price": "$420 / person Total ($2,520 split 6 ways)",
      "location": "Pedestrian Village Heart",
      "specs": "4 Days • Two 2-Bedroom Connected Suites",
      "features": [
        "Access to heated resort swimming pool, saunas, and fitness center",
        "Steps away from village pubs, microbreweries, and live music venues",
        "Fully equipped modern kitchens and daily towel exchange service",
        "Heated underground parking with direct elevator to suites"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Budget Roadside Motel (25 km Away)",
      "price": "$220 / person Total ($1,320 split 6 ways)",
      "location": "Highway 117 (25 km drive to ski lifts)",
      "specs": "4 Days • Two Cramped 2-Queen Motel Rooms",
      "features": [
        "Lowest upfront cost per person",
        "Crowding 6 adults into two small motel rooms with no common living space",
        "Requires designated drivers and 45-minute daily drives in icy winter conditions",
        "No kitchen facilities, forcing the group to spend $150/day each on restaurant meals"
      ]
    },
    "persuasionGuidance": [
      "Show that motel savings are an illusion: eating all meals out and paying for resort parking costs more than renting a chalet.",
      "Emphasize the social experience: private chalet with hot tub, fireplace, and home cooking creates unforgettable memories.",
      "Highlight convenience of ski-in/ski-out access vs driving 25 km on slippery highway roads every morning."
    ]
  },
  {
    "id": "t5_026",
    "title": "International Flight Booking",
    "category": "Vacation & Travel",
    "context": "You and your travel partner Chloe are booking flights from Toronto to London for an important 10-day overseas trip.",
    "targetAudience": "Your travel partner, Chloe",
    "partnerChoiceName": "Ultra-Low-Cost 2-Layover 26-Hour Flight",
    "partnerRationale": "Chloe wants to book the ultra-low-cost budget airline flight because the base ticket price is $220 cheaper.",
    "optionA": {
      "id": "opt_a",
      "name": "Direct Non-Stop Flight (National Carrier)",
      "price": "$920 Round-trip (Includes 1 Checked Bag & Hot Meals)",
      "location": "Toronto Pearson (YYZ) to London Heathrow (LHR)",
      "specs": "7h 15m Flight Time • Overnight Non-Stop",
      "features": [
        "Arrive well-rested in the morning ready to start touring immediately",
        "Includes 23 kg checked baggage, carry-on bag, and seat selection",
        "Complimentary hot dinner, breakfast, wine, and seatback entertainment",
        "Protected flight itinerary with multiple daily backup flights if delayed"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Premium International Carrier with One 90-Min Layover",
      "price": "$790 Round-trip (Top-Ranked Global Airline)",
      "location": "YYZ to LHR via Dublin / Montreal",
      "specs": "9h 45m Total Travel Time • Short 90-min Connection",
      "features": [
        "Award-winning in-flight service with generous 32-inch legroom seating",
        "Seamless luggage transfer directly to final destination in London",
        "Short, well-timed connection to stretch legs and grab coffee",
        "Save $130 per person while maintaining high comfort and reliability"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Ultra-Low-Cost 2-Layover 26-Hour Flight",
      "price": "$700 Base (+ $180 baggage & seat fees = $880)",
      "location": "YYZ to LHR via Reykjavik & Manchester",
      "specs": "26h 30m Total Travel Time • Two 8-hour Airport Layovers",
      "features": [
        "Cheap advertised base fare on flight search engines",
        "Exhausting 26-hour journey causing severe jet lag and wasting 2 full vacation days",
        "Hidden fees for carry-on luggage, water, food, and seat assignments",
        "Self-transfer risk: if first flight is delayed, connecting tickets are forfeited"
      ]
    },
    "persuasionGuidance": [
      "Reveal hidden fees: after adding luggage and meals ($180), the budget flight is actually the same price ($880 vs $920).",
      "Value vacation time: spending 26 hours in airports wastes two full days of a precious 10-day trip.",
      "Highlight arrival freshness: non-stop direct flight lets you arrive energized without severe fatigue."
    ]
  },
  {
    "id": "t5_027",
    "title": "Eco-Adventure Travel Destination",
    "category": "Vacation & Travel",
    "context": "You and your friend Sam want to book an adventurous 10-day active eco-tourism vacation.",
    "targetAudience": "Your friend, Sam",
    "partnerChoiceName": "Generic All-Inclusive Beach Resort",
    "partnerRationale": "Sam wants to book a standard all-inclusive beach resort in the Dominican Republic to relax by the pool.",
    "optionA": {
      "id": "opt_a",
      "name": "Costa Rica Rainforest & Volcano Eco-Expedition",
      "price": "$2,600 Total (Flights, Eco-Lodges, Guided Treks & Rafting)",
      "location": "Arenal Volcano & Monteverde Cloud Forest",
      "specs": "10 Days • Sustainable Solar Lodges • Certified Naturalist",
      "features": [
        "Hike through lush cloud forests spotting sloths, toucans, and monkeys",
        "Thrilling whitewater rafting, canopy zip-lining, and natural volcanic hot springs",
        "Stay in award-winning 100% sustainable solar-powered eco-lodges",
        "Supports local wildlife conservation projects and indigenous communities"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Iceland 4x4 Ring Road Camping & Hot Springs Expedition",
      "price": "$2,900 Total (Flights, 4x4 Camper Van, Fuel & Passes)",
      "location": "Icelandic Golden Circle & South Coast",
      "specs": "10 Days • Heated 4x4 Camper • Glacier & Waterfall Route",
      "features": [
        "Witness thunderous waterfalls, active geysers, and black sand beaches",
        "Hike on massive blue ice glaciers and soak in geothermal hot springs",
        "Freedom of a heated 4x4 camper van allowing camping under the Northern Lights",
        "Incredible once-in-a-lifetime landscapes and geology photography"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Generic All-Inclusive Beach Resort",
      "price": "$2,200 Total (Flights, Resort Room & Buffet)",
      "location": "Punta Cana Enclosed Resort Compound",
      "specs": "10 Days • Standard Hotel Room",
      "features": [
        "Convenient unlimited buffet meals and cocktails",
        "Confined to a tourist resort compound with zero authentic adventure",
        "Sedentary routine with no physical activity, wildlife, or nature exploration",
        "A missed opportunity for a truly memorable, active international experience"
      ]
    },
    "persuasionGuidance": [
      "Remind Sam of your shared goal: an active, memorable eco-adventure rather than sitting on a lawn chair for 10 days.",
      "Highlight incredible experiences in Costa Rica or Iceland (volcanoes, rafting, glaciers, wildlife).",
      "Explain that eco-adventures offer personal growth, physical fitness, and unforgettable memories."
    ]
  },
  {
    "id": "t5_028",
    "title": "Maritime Canadian Road Trip",
    "category": "Vacation & Travel",
    "context": "You and your partner are planning a 9-day summer holiday exploring the Canadian Atlantic Maritimes.",
    "targetAudience": "Your partner, Liam",
    "partnerChoiceName": "Large Mega-Cruise Ship",
    "partnerRationale": "Liam wants to book a 3,000-passenger mega-cruise ship departing from New York to Halifax.",
    "optionA": {
      "id": "opt_a",
      "name": "Nova Scotia Cabot Trail Camper Van Road Trip",
      "price": "$1,950 Total (Camper Van Rental, Fuel & National Park Passes)",
      "location": "Cape Breton Island & Halifax, Nova Scotia",
      "specs": "9 Days • Outfitted Camper Van • Scenic Coastal Loop",
      "features": [
        "Drive the world-famous Cabot Trail with panoramic ocean cliff viewpoints",
        "Camp oceanfront under the stars and listen to live Celtic fiddle music",
        "Feast on fresh steamed Atlantic lobster directly from local fishing wharves",
        "Hike the Skyline Trail to spot bald eagles, moose, and pilot whales"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Prince Edward Island Seaside Heritage Cottage",
      "price": "$1,800 Total (Cottage Rental, Bridge Toll & Bike Rental)",
      "location": "Cavendish & Charlottetown, PEI",
      "specs": "9 Days • 2-Bedroom Oceanview Cottage • Private Beach",
      "features": [
        "Miles of red sandstone coastal cliffs and warm sandy beaches",
        "Cycle the scenic Confederation Trail through peaceful fishing villages",
        "Savor famous Malpeque oysters, local dairy ice cream, and artisan bakeries",
        "Visit Anne of Green Gables heritage sites and historic Charlottetown"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Large Mega-Cruise Ship Tour",
      "price": "$3,400 Total (Flights to NY, Cruise Cabin & Port Taxes)",
      "location": "Atlantic Ocean Route",
      "specs": "9 Days • Interior Windowless Stateroom",
      "features": [
        "On-board casino, Broadway shows, and poolside buffet",
        "Only spends 5 brief hours in each port before rushing back to ship",
        "Cannot experience the iconic Cabot Trail or inland Maritime culture",
        "Double the cost due to US exchange rates, flights, and port taxes"
      ]
    },
    "persuasionGuidance": [
      "Point out that cruises only give 4-5 rushed hours in port, missing the Cabot Trail and authentic Maritime charm.",
      "Highlight intimate freedom of camper van or PEI cottage: oceanfront camping, fresh lobster, and coastal hiking.",
      "Show massive cost savings ($1,800–$1,950 road trip vs $3,400 cruise)."
    ]
  },
  {
    "id": "t5_029",
    "title": "Scenic Expedition Cruise",
    "category": "Vacation & Travel",
    "context": "You and your spouse are choosing a scenic bucket-list cruise vacation for your 40th birthdays.",
    "targetAudience": "Your spouse, Emily",
    "partnerChoiceName": "European Mega-River Barge",
    "partnerRationale": "Emily thinks a slow river cruise down the Rhine would be peaceful and relaxing.",
    "optionA": {
      "id": "opt_a",
      "name": "Alaska Glacier Wilderness Balcony Expedition",
      "price": "$2,700 / person (Flights, Balcony Stateroom & Park Permits)",
      "location": "Inside Passage & Glacier Bay National Park",
      "specs": "7 Nights • Private Balcony Stateroom • Naturalist Lectures",
      "features": [
        "Up-close views of colossal calving glaciers crashing into pristine fjords",
        "Daily sightings of humpback whales, killer whales, grizzly bears, and eagles",
        "Private balcony allows viewing dramatic scenery in warm comfort at all hours",
        "National Park Service rangers board the ship for guided scientific talks"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Western Caribbean Island Hopper Cruise",
      "price": "$1,750 / person (Flights, Oceanview Cabin & Excursions)",
      "location": "Cozumel, Belize Barrier Reef & Roatan",
      "specs": "7 Nights • Oceanview Cabin • Water Sport Package",
      "features": [
        "Snorkel world-class coral barrier reefs and swim with stingrays in clear waters",
        "Explore ancient Mayan pyramids nestled deep in tropical rainforests",
        "Warm tropical sunshine, white sand beaches, and vibrant Caribbean culture",
        "Exceptional value with all specialty dining and entertainment included"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "European Mega-River Barge Cruise",
      "price": "$4,600 / person (+ Extra European airfare)",
      "location": "Rhine & Danube Rivers",
      "specs": "7 Nights • Compact Lower-Deck Cabin",
      "features": [
        "Slow leisurely sailing past German castles and vineyards",
        "Extremely high price ($4,600/person) for small compact cabins",
        "River water level fluctuations frequently cancel sailings, forcing bus tours",
        "Itinerary is heavily catered to older retirees with very sedentary excursions"
      ]
    },
    "persuasionGuidance": [
      "Highlight breathtaking natural spectacles of Alaska (calving glaciers, breaching whales) from your private balcony.",
      "Contrast value: save thousands compared to the $4,600/person European river barge.",
      "Mention river cruise risks: drought or flooding frequently turns river cruises into tiring long bus rides."
    ]
  },
  {
    "id": "t5_030",
    "title": "Solo Cultural Adventure",
    "category": "Vacation & Travel",
    "context": "You and your travel-minded friend Mark are deciding on an ambitious 12-day international cultural journey.",
    "targetAudience": "Your friend, Mark",
    "partnerChoiceName": "Sedentary Beach Resort Lounge",
    "partnerRationale": "Mark thinks you should just lie on a beach chair at a budget resort in Varadero for 12 days drinking rum.",
    "optionA": {
      "id": "opt_a",
      "name": "Guided Trekking Expedition in Peru (Inca Trail)",
      "price": "$2,300 Total (Flights, Licensed Porters, Food & Permits)",
      "location": "Cusco, Sacred Valley & Machu Picchu",
      "specs": "12 Days • Guided 4-Day Trek • Mountain Camps & Boutique Hotels",
      "features": [
        "Hike the ancient stone Inca Trail through misty cloud forests to the Sun Gate",
        "Marvel in person at the awe-inspiring archaeological wonder of Machu Picchu",
        "Immerse in vibrant indigenous Quechua culture, textiles, and Andean hospitality",
        "A rewarding physical and spiritual achievement that creates lifelong pride"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Japan High-Speed Cultural Rail Explorer",
      "price": "$2,700 Total (Flights, 7-Day Shinkansen Pass & Hotels)",
      "location": "Tokyo, Kyoto, Osaka & Nara",
      "specs": "12 Days • High-Speed Bullet Trains • Central Modern Hotels",
      "features": [
        "Seamless travel on world-famous 300 km/h Shinkansen bullet trains",
        "Explore ancient Kyoto Zen temples, bamboo groves, and Tokyo technology districts",
        "World-renowned gastronomy from Michelin ramen shops to sushi masterclasses",
        "Ultra-safe, exceptionally clean, and highly organized travel environment"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Sedentary Beach Resort Lounge",
      "price": "$1,500 Total (Flights & Budget Hotel)",
      "location": "Varadero Beach Enclave",
      "specs": "12 Days • Standard Poolside Room",
      "features": [
        "Low upfront cost and unlimited cheap cocktails",
        "Zero cultural learning, history, language exposure, or adventure",
        "Repetitive bland buffet food and uninspiring daily routine",
        "A wasted vacation opportunity when capable of exploring world wonders"
      ]
    },
    "persuasionGuidance": [
      "Challenge Mark's passive approach: an international vacation should expand horizons and build unforgettable memories.",
      "Highlight life-changing wonders of the Inca Trail / Machu Picchu or Japan's vibrant cultural rail expedition.",
      "Show that the modest price difference ($800) delivers infinitely higher personal value, adventure, and satisfaction."
    ]
  },
  {
    "id": "t5_031",
    "title": "Company Team Building Event",
    "category": "Workplace & Career",
    "context": "You and your colleague Marcus are organizing a team-building event for your department of 18 colleagues.",
    "targetAudience": "Your colleague, Marcus",
    "partnerChoiceName": "Virtual Zoom Trivia with Delivery Gift Cards",
    "partnerRationale": "Marcus wants virtual Zoom trivia so everyone stays home and the company just sends $25 food delivery cards.",
    "optionA": {
      "id": "opt_a",
      "name": "Indoor Escape Room & Catered Dinner Buffet",
      "price": "$55 / person ($990 total budget)",
      "location": "Downtown Escape Complex & Private Dining Hall",
      "specs": "60-min Multi-Room Mystery Challenge + 2-Hour Catered Buffet",
      "features": [
        "Fosters genuine collaboration, problem-solving, and communication across teams",
        "High-energy interactive puzzles where introverts and extroverts can both contribute",
        "Includes a private dining room with hot catered food and dessert platters",
        "Central downtown location with direct subway access for all staff"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Outdoor Aerial Ropes Course & BBQ Pavilion",
      "price": "$65 / person ($1,170 total budget, shuttle included)",
      "location": "Pine Valley Outdoor Adventure Park",
      "specs": "3-Hour Guided Tree-Top Course + Reserved BBQ Pavilion",
      "features": [
        "Builds deep mutual trust, encouragement, and overcoming challenges together",
        "Beautiful forested setting with fresh air away from office computer screens",
        "Includes round-trip private charter bus from the office directly to the park",
        "Casual catered barbecue lunch with burgers, grilled chicken, and vegetarian options"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Virtual Zoom Trivia with Delivery Gift Cards",
      "price": "$30 / person ($540 total budget)",
      "location": "Online via Zoom video call",
      "specs": "45-min Screen Trivia + $25 Delivery Voucher",
      "features": [
        "Low cost and allows employees to stay at home",
        "Staff already suffer from severe daily screen fatigue and Zoom burnout",
        "Lacks meaningful face-to-face interaction or genuine connection between colleagues",
        "Many employees will log off early or remain on mute with cameras turned off"
      ]
    },
    "persuasionGuidance": [
      "Point out that team building requires real human connection after months of remote work, not another tiring Zoom call.",
      "Highlight how escape room puzzles or outdoor ropes courses actively test and improve team communication and trust.",
      "Explain that providing a shared meal (buffet or BBQ) creates a warm, social environment that boosts company morale."
    ]
  },
  {
    "id": "t5_032",
    "title": "Office Workstation Setup",
    "category": "Workplace & Career",
    "context": "You and your office manager Frank are selecting new workstation furniture for 25 full-time office employees.",
    "targetAudience": "Your office manager, Frank",
    "partnerChoiceName": "Open Hot-Desking Long Benches",
    "partnerRationale": "Frank wants open hot-desking benches because they cram the most people into minimal floor space at the lowest cost.",
    "optionA": {
      "id": "opt_a",
      "name": "Motorized Dual-Monitor Standing Desks",
      "price": "$620 / workstation (Includes Cable Management & Delivery)",
      "location": "Ergonomic Commercial Office Supplier",
      "specs": "Electric Height-Adjustable (25\"-50\") • Dual-Arm Monitor Mount",
      "features": [
        "Allows employees to alternate seamlessly between sitting and standing throughout the day",
        "Significantly reduces employee chronic back pain, neck strain, and ergonomic injury claims",
        "Features memory height presets and built-in power outlets for clean cable management",
        "Proven to boost employee afternoon energy, focus, and overall daily productivity"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Acoustic Privacy Cubicles with Ergonomic Chairs",
      "price": "$750 / workstation (Includes Sound-Dampening Fabric Panels)",
      "location": "Modular Corporate Furniture Depot",
      "specs": "54\" Sound-Absorbing Fabric Panels • Mesh Lumbar Task Chair",
      "features": [
        "Acoustic fabric panels block distracting office chatter and keyboard clatter",
        "Provides quiet focus zones essential for concentrated analytical work and client phone calls",
        "Includes high-end adjustable mesh chairs certified for 8+ hours of continuous posture support",
        "Gives each staff member a dedicated personal workspace and lockable filing cabinet"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Open Hot-Desking Long Benches",
      "price": "$220 / workstation",
      "location": "Budget Office Wholesaler",
      "specs": "Fixed-Height Long Table • Non-Adjustable Basic Chairs",
      "features": [
        "Lowest initial purchase cost and maximizes desk density",
        "Zero acoustic privacy, leading to constant noise distractions and reduced concentration",
        "Fixed height causes repetitive strain injuries and poor posture for taller or shorter staff",
        "Creates daily friction as employees compete every morning for desks and outlets"
      ]
    },
    "persuasionGuidance": [
      "Emphasize that employee health and focus directly impact company revenue: ergonomic desks prevent expensive sick leaves.",
      "Contrast productivity: standing desks and acoustic panels reduce noise distractions and physical fatigue.",
      "Show that cheap hot-desking benches lead to employee frustration, morning desk disputes, and high turnover."
    ]
  },
  {
    "id": "t5_033",
    "title": "Career Job Offer Decision",
    "category": "Workplace & Career",
    "context": "You have received two strong job offers and are discussing the decision with your career mentor, Susan.",
    "targetAudience": "Your mentor, Susan",
    "partnerChoiceName": "Traditional Mid-Size Marketing Agency",
    "partnerRationale": "Susan initially suggested a traditional marketing agency because of its familiar, comfortable corporate routine.",
    "optionA": {
      "id": "opt_a",
      "name": "Stable Public Sector / Government Analyst Role",
      "price": "$88,000 / year (Defined Benefit Pension + Full Benefits)",
      "location": "Provincial Government Office (Hybrid: 2 days in office)",
      "specs": "Permanent Full-Time • 35-Hour Work Week • Unionized",
      "features": [
        "Guaranteed Defined Benefit indexed pension ensuring lifelong retirement security",
        "Strict 35-hour work week with zero unpaid overtime and 4 weeks of paid vacation",
        "Comprehensive dental, medical, prescription drug, and vision coverage starting day one",
        "High job stability with clear collective agreement pay bands and annual step increases"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "High-Growth Tech Startup Product Specialist",
      "price": "$95,000 / year ($15,000 Performance Bonus + Stock Options)",
      "location": "Downtown Tech Hub (Hybrid: 1 day in office)",
      "specs": "Full-Time • Series-B Funded • Stock Equity Grant",
      "features": [
        "Substantial equity stock options with massive upside potential upon company acquisition/IPO",
        "Rapid career acceleration and promotion opportunities into senior management",
        "Annual $3,000 continuous learning and professional development education budget",
        "Fast-paced, innovative culture working on cutting-edge cloud AI technologies"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Traditional Mid-Size Marketing Agency",
      "price": "$72,000 / year (Basic Health Insurance Only)",
      "location": "Commercial Business Park (5 days in office mandated)",
      "specs": "Full-Time • 45-50 Hours / Week • No Equity",
      "features": [
        "Familiar client account structure",
        "Lower starting base salary with long, demanding 50-hour work weeks and tight client deadlines",
        "Mandatory 5-day on-site office attendance with a 45-minute highway commute",
        "Limited advancement ceiling with low annual merit increases below inflation"
      ]
    },
    "persuasionGuidance": [
      "Explain that the government role offers unbeatable work-life balance, high job security, and a gold-standard pension.",
      "Alternatively, highlight that the tech startup offers significantly higher compensation ($95k + equity) and rapid skill growth.",
      "Contrast these against the agency offer, which pays $16k-$23k less while demanding mandatory 50-hour in-office weeks."
    ]
  },
  {
    "id": "t5_034",
    "title": "Professional Skill Upskilling",
    "category": "Workplace & Career",
    "context": "You and your colleague Dave want to upgrade your data analytics and cloud computing skills to secure promotions.",
    "targetAudience": "Your colleague, Dave",
    "partnerChoiceName": "Unstructured Free YouTube Videos",
    "partnerRationale": "Dave thinks watching random free YouTube tutorials in the evening is sufficient to learn professional enterprise skills.",
    "optionA": {
      "id": "opt_a",
      "name": "6-Month Intensive Accredited Tech Bootcamp",
      "price": "$4,200 (Eligible for Canada Job Grant & Tax Credit)",
      "location": "Live Online Evening Classes (Tues/Thurs + Sat)",
      "specs": "24 Weeks • 250 Hours • 1-on-1 Mentor & Capstone Project",
      "features": [
        "Hands-on real-world client projects built directly for a professional GitHub portfolio",
        "Weekly 1-on-1 code reviews and mentorship from senior industry software architects",
        "Official industry-recognized diploma that corporate recruiters actively seek out",
        "Dedicated career coaching services including resume polishing and mock technical interviews"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "University Postgraduate Professional Certificate",
      "price": "$3,400 (Employer Tuition Reimbursement Eligible)",
      "location": "University Continuing Education (Hybrid)",
      "specs": "3 Semesters • 4 Accredited Courses • University Transcript",
      "features": [
        "Prestigious university credential backed by an accredited academic institution",
        "Comprehensive theoretical foundation combined with practical lab assignments",
        "Access to university alumni network, research libraries, and corporate job boards",
        "Flexible part-time schedule tailored specifically for working professionals"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Unstructured Free YouTube Videos",
      "price": "$0 (Free online clips)",
      "location": "Self-study at home",
      "specs": "Ad-supported clips • No syllabus • No instructor",
      "features": [
        "Zero financial cost upfront",
        "Outdated, fragmented videos with zero structured curriculum or quality assurance",
        "No live instructor to answer complex debugging questions or review code",
        "Provides zero verifiable credential or certificate to prove competency on a resume"
      ]
    },
    "persuasionGuidance": [
      "Point out that hiring managers require verifiable, accredited credentials, not self-claimed YouTube viewing.",
      "Emphasize the value of structured curriculum, live instructor feedback, and real portfolio projects.",
      "Show that government grants or company tuition assistance make professional bootcamps and university certs highly affordable."
    ]
  },
  {
    "id": "t5_035",
    "title": "Team Project Management Tool",
    "category": "Workplace & Career",
    "context": "You and your project lead Karen are selecting an enterprise project management platform for your team of 20.",
    "targetAudience": "Your project lead, Karen",
    "partnerChoiceName": "Shared Email Inbox & Excel Spreadsheets",
    "partnerRationale": "Karen suggests sticking to shared Microsoft Excel spreadsheets and email chains because everyone already has Excel installed.",
    "optionA": {
      "id": "opt_a",
      "name": "Asana Enterprise Cloud Workflow Suite",
      "price": "$14 / user / month ($3,360 annually)",
      "location": "Cloud SaaS Platform (Desktop & Mobile)",
      "specs": "Gantt Timelines • Automated Triggers • Real-Time Dashboards",
      "features": [
        "Visual Gantt charts and dependency tracking ensure project deadlines are never missed",
        "Automated workflow rules route tasks to the right person without manual emails",
        "Executive milestone dashboards provide senior management instant visibility into project health",
        "Seamless integration with Slack, Google Workspace, and Microsoft Teams"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Jira & Confluence Agile Collaboration Suite",
      "price": "$12 / user / month ($2,880 annually)",
      "location": "Atlassian Cloud Platform",
      "specs": "Kanban & Scrum Sprints • Integrated Wiki Documentation",
      "features": [
        "Robust Scrum sprint planning, backlog grooming, and burn-down velocity charts",
        "Integrated Confluence workspace creates a single source of truth for technical documentation",
        "Advanced permission controls and audit logging for sensitive enterprise compliance",
        "Tracks bug tickets and customer feature requests from inception to deployment"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Shared Email Inbox & Excel Spreadsheets",
      "price": "$0 extra (Using current Office license)",
      "location": "Local network drive & email",
      "specs": "Static Spreadsheet • Manual Email Updates",
      "features": [
        "No additional software procurement cost",
        "High risk of version control errors (conflicting versions of spreadsheets saved by staff)",
        "No automated notifications, resulting in dropped tasks and missed client deadlines",
        "Hours wasted every week manually emailing colleagues for status updates"
      ]
    },
    "persuasionGuidance": [
      "Explain that manual Excel sheets cause dropped tasks, version confusion, and missed project milestones.",
      "Highlight time savings: automated workflow routing and Gantt timelines save each team member 3+ hours every week.",
      "Show that a modest $12-$14/user investment delivers massive ROI through faster project delivery and client satisfaction."
    ]
  },
  {
    "id": "t5_036",
    "title": "Corporate Wellness Initiative",
    "category": "Workplace & Career",
    "context": "You and your HR colleague Lisa are choosing an annual employee wellness program for your company of 60 employees.",
    "targetAudience": "Your HR colleague, Lisa",
    "partnerChoiceName": "Monthly Free Pizza & Donut Days",
    "partnerRationale": "Lisa wants to host monthly free pizza and donut days in the staff lounge because it is quick and cheap.",
    "optionA": {
      "id": "opt_a",
      "name": "Subsidized Gym & Fitness Membership Allowance",
      "price": "$40 / employee / month ($2,400 monthly company budget)",
      "location": "Network of 500+ Gyms & Yoga Studios Nationwide",
      "specs": "Any Gym/Studio • Includes Digital Fitness App Access",
      "features": [
        "Empowers staff to choose any local gym, pool, yoga studio, or climbing center near their home",
        "Directly improves cardiovascular health, energy levels, and reduces long-term health insurance claims",
        "Includes access to guided online mindfulness, meditation, and home workout classes",
        "Highly attractive perk for recruiting top talent and boosting employee retention"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "On-Site Registered Massage & Ergonomic Health Days",
      "price": "$1,800 / month (Bi-weekly registered massage therapists)",
      "location": "Dedicated Wellness Room at Office",
      "specs": "2 RMTs on-site twice a month • 20-min treatment per staff",
      "features": [
        "Licensed Registered Massage Therapists (RMT) relieve neck, shoulder, and back tension on-site",
        "Professional ergonomic assessments of workstations to prevent carpal tunnel and strain",
        "Provides immediate stress relief and mental relaxation during busy quarterly deadlines",
        "Massages can be partially offset through existing employee extended health benefits"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Monthly Free Pizza & Donut Days",
      "price": "$400 / month",
      "location": "Office Lunchroom",
      "specs": "Fast food pizza & pastries once a month",
      "features": [
        "Cheap and requires minimal administrative planning",
        "Directly contradicts the concept of health and wellness by offering unhealthy processed foods",
        "Excludes employees with gluten intolerance, dairy allergies, diabetes, or vegan diets",
        "Causes afternoon sugar crashes and sluggishness rather than real wellness"
      ]
    },
    "persuasionGuidance": [
      "Point out that junk food (pizza and donuts) actively harms health and excludes staff with dietary restrictions.",
      "Emphasize the physical and mental health benefits of gym allowances or on-site professional massage therapy.",
      "Explain that real wellness benefits reduce absenteeism, lower insurance claims, and boost company morale."
    ]
  },
  {
    "id": "t5_037",
    "title": "Business Travel Accommodation",
    "category": "Workplace & Career",
    "context": "You and your coworker Brian are traveling to Montreal for a 5-day client implementation project.",
    "targetAudience": "Your coworker, Brian",
    "partnerChoiceName": "Budget Shared Hostel Dormitory",
    "partnerRationale": "Brian wants to stay in a budget shared hostel near the train station to show management how frugal he is.",
    "optionA": {
      "id": "opt_a",
      "name": "Executive Business Hotel with Meeting Lounge",
      "price": "$195 / night (Within corporate travel per diem)",
      "location": "Downtown Montreal Financial District (5 min walk to client)",
      "specs": "Private King Room • High-Speed Wi-Fi • Business Lounge Access",
      "features": [
        "Walking distance to client headquarters, eliminating taxi costs and transit delays",
        "Quiet private room with ergonomic work desk and secure high-speed Wi-Fi for confidential files",
        "Access to executive lounge with quiet meeting booths for client debriefs and free hot breakfast",
        "Includes 24/7 fitness center and dry cleaning service to stay sharp for executive presentations"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Corporate Serviced Studio Apartment",
      "price": "$175 / night (Corporate negotiated rate)",
      "location": "Old Montreal Arts & Tech Hub",
      "specs": "Private 500 sq. ft. Studio • Full Kitchen • In-Suite Laundry",
      "features": [
        "Full kitchen allows preparing healthy dinners, saving $75 daily on restaurant expenses",
        "Spacious living and working area with private high-speed internet connection",
        "In-suite washer and dryer to refresh business attire without hotel laundry fees",
        "Comfortable home-like atmosphere reduces business travel fatigue"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Budget Shared Hostel Dormitory",
      "price": "$45 / night",
      "location": "Near Central Station",
      "specs": "6-Bed Shared Bunk Room • Shared Hallway Bathroom",
      "features": [
        "Very low nightly cost saving company travel budget",
        "Zero security for company laptops containing sensitive, confidential client financial data",
        "Noisy dorm mates and shared bathrooms prevent proper sleep before major client meetings",
        "Unprofessional setting with no private space to take confidential client phone calls"
      ]
    },
    "persuasionGuidance": [
      "Highlight serious confidentiality and security risks of having company laptops in a shared public hostel.",
      "Explain that proper sleep and a quiet work desk in a business hotel or corporate suite are crucial for delivering client success.",
      "Show that corporate per diems fully cover professional business lodging without any issue from management."
    ]
  },
  {
    "id": "t5_038",
    "title": "Company Holiday Party Format",
    "category": "Workplace & Career",
    "context": "You and your social committee peer Sarah are planning the annual year-end holiday party for 50 staff members.",
    "targetAudience": "Your peer, Sarah",
    "partnerChoiceName": "Brief Afternoon Cookies in the Breakroom",
    "partnerRationale": "Sarah suggests just buying cookies and apple cider for a 30-minute gathering in the office breakroom on a Friday afternoon.",
    "optionA": {
      "id": "opt_a",
      "name": "Evening Gala Dinner & Dance at Historic Heritage Hall",
      "price": "$85 / person ($4,250 total budget)",
      "location": "The Grand Heritage Estate Ballroom",
      "specs": "Plated 3-Course Dinner • Live Jazz Trio & DJ • 6:00 PM - 11:00 PM",
      "features": [
        "Elegant formal evening honoring employee hard work and celebrating annual milestones",
        "Plated gourmet 3-course dinner with options for all dietary requirements and welcome cocktail",
        "Live entertainment, photo booth, and dance floor create a memorable, premium experience",
        "Employees are encouraged to bring their spouses or partners to celebrate together"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Interactive Boutique Bowling, Arcade & Gastropub Lounge",
      "price": "$65 / person ($3,250 total budget)",
      "location": "The Ballroom Bowl & Social Club Downtown",
      "specs": "Reserved Bowling Lanes + Arcade Pass + Heavy Gourmet Appetizers",
      "features": [
        "Fun, dynamic, casual atmosphere where staff can mingle freely without stiff formality",
        "Includes upscale gastro-bites (sliders, flatbreads, skewers) and craft beverages",
        "Friendly bowling tournament and retro arcade games promote team bonding and laughter",
        "Convenient central location with valet parking and direct subway connection"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Brief Afternoon Cookies in the Breakroom",
      "price": "$8 / person ($400 budget)",
      "location": "Office Staff Kitchen",
      "specs": "30-Minute gathering • Store-bought cookies & punch",
      "features": [
        "Requires almost zero budget and no evening commitment",
        "Feels unappreciated and cheap after a full year of demanding employee dedication",
        "Staff remain in work attire surrounded by desks and unresolved emails",
        "Fails completely to boost team morale or create any lasting celebration"
      ]
    },
    "persuasionGuidance": [
      "Point out that a 30-minute breakroom snack feels insulting and demotivating after a long year of hard work.",
      "Highlight how an elegant gala dinner or dynamic bowling social truly shows employee appreciation.",
      "Explain that investing in a memorable celebration builds strong company culture and team loyalty."
    ]
  },
  {
    "id": "t5_039",
    "title": "Remote vs. Hybrid Work Schedule",
    "category": "Workplace & Career",
    "context": "You and your department director Greg are finalizing the department's post-pandemic workplace policy.",
    "targetAudience": "Your department director, Greg",
    "partnerChoiceName": "Mandatory 5-Day Full In-Office Return",
    "partnerRationale": "Greg wants to mandate everyone back in the office 5 days a week for direct physical supervision.",
    "optionA": {
      "id": "opt_a",
      "name": "Flexible 3-Day Hybrid Schedule (2 Days Remote)",
      "price": "Neutral cost (Optimizes office desk sharing)",
      "location": "Hybrid (3 designated collaboration days in office)",
      "specs": "Core In-Office Days (Tue-Thu) • Remote Days (Mon/Fri)",
      "features": [
        "Combines the best of both worlds: face-to-face team collaboration and focused home work",
        "Eliminates 4 hours of weekly commute time on Mondays and Fridays, boosting employee happiness",
        "Maintains strong team culture, in-person brainstorming, and mentoring for junior staff",
        "Proven to drastically reduce employee turnover and improve job satisfaction ratings"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Remote-First Model with Monthly Collaboration Onsites",
      "price": "Save $40,000/year on downsized office lease",
      "location": "Full Remote + 1 Full-Day Monthly Team Onsite",
      "specs": "100% Remote Daily • Monthly Strategic Workshop at Co-Working Hub",
      "features": [
        "Allows recruiting top talent from anywhere in the province regardless of commute distance",
        "Massive company savings on commercial downtown real estate and office utility overhead",
        "Provides staff with a $750 home office setup stipend and monthly internet allowance",
        "High productivity as employees work during their peak personal energy hours without office noise"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Mandatory 5-Day Full In-Office Return",
      "price": "High overhead (Full corporate lease & parking)",
      "location": "Downtown Office 5 Days / Week",
      "specs": "Rigid 9-to-5 on-site presence required",
      "features": [
        "Direct visual supervision of staff at all times",
        "Will trigger immediate resignations of top performers who demand modern flexibility",
        "Forces employees into exhausting 10+ hours of weekly rush-hour traffic commutes",
        "High commercial real estate costs with full desks sitting empty during client visits"
      ]
    },
    "persuasionGuidance": [
      "Warn that a rigid 5-day office mandate will cause top talent to resign and join more flexible competitors.",
      "Show that a 3-day hybrid model or remote-first strategy preserves strong collaboration while giving staff work-life balance.",
      "Highlight real company savings on office space and increased employee productivity."
    ]
  },
  {
    "id": "t5_040",
    "title": "Employee Recognition Reward",
    "category": "Workplace & Career",
    "context": "You and your department colleague Megan are deciding how to reward team members who completed a massive 6-month software migration ahead of schedule.",
    "targetAudience": "Your colleague, Megan",
    "partnerChoiceName": "Company-Branded Plastic Water Bottles & Mugs",
    "partnerRationale": "Megan wants to order bulk promotional company mugs and plastic water bottles with the corporate logo.",
    "optionA": {
      "id": "opt_a",
      "name": "Cash Performance Bonus + Extra Paid Friday Off",
      "price": "$750 Net Cash Bonus + 1 Paid Floating Day Off per person",
      "location": "Direct Payroll Deposit & HR Time-Off Credit",
      "specs": "$750 Direct Cash + Guaranteed 3-Day Weekend",
      "features": [
        "Provides immediate, tangible financial reward that employees can spend as they wish",
        "An extra paid day off allows exhausted team members to rest and recharge after months of crunch",
        "Highest rated recognition format by employee surveys across all departments",
        "Sends a clear signal that exceptional effort and overtime are genuinely valued by leadership"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "All-Expenses-Paid Tech Conference Trip to Montreal",
      "price": "$1,200 / person (Includes Flight, Hotel & Full Conference Pass)",
      "location": "Montreal Convention Centre",
      "specs": "3-Day Premier Tech Summit Pass • 4-Star Hotel Accommodation",
      "features": [
        "Exceptional professional development and networking with top North American tech leaders",
        "Team enjoys a fun, bonding road trip with dinners in world-class Montreal restaurants",
        "Staff return energized with cutting-edge skills and ideas to implement in next quarter's projects",
        "Demonstrates company investment in long-term employee career growth"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Company-Branded Plastic Water Bottles & Mugs",
      "price": "$15 / item",
      "location": "Promotional Swag Catalog",
      "specs": "Cheap plastic bottle with company logo printed",
      "features": [
        "Very low cost to the department budget",
        "Feels insulting and dismissive after 6 months of grueling overtime work",
        "Most cheap promotional swag ends up unused in closets or thrown into landfill",
        "Damages employee morale and makes staff feel unappreciated by management"
      ]
    },
    "persuasionGuidance": [
      "Explain that handing out cheap $15 plastic water bottles after 6 months of intense overtime is deeply demoralizing.",
      "Highlight the powerful motivational impact of a real cash bonus with a paid day off to recharge.",
      "Show how sponsoring a trip to a premier industry conference rewards the team while upgrading their professional skills."
    ]
  },
  {
    "id": "t5_041",
    "title": "Elementary School Selection for Child",
    "category": "Education & Training",
    "context": "You and your spouse Jennifer are deciding on an elementary school for your 6-year-old daughter entering Grade 1.",
    "targetAudience": "Your spouse, Jennifer",
    "partnerChoiceName": "Online Remote Homeschooling Software",
    "partnerRationale": "Jennifer thinks remote online homeschooling is best because our daughter can learn from home without schoolyard drama.",
    "optionA": {
      "id": "opt_a",
      "name": "Local Public School with Early French Immersion",
      "price": "$0 Tuition (Funded by Provincial School Board)",
      "location": "Neighborhood Community School (7-min walk)",
      "specs": "Full-Day French Immersion • Dedicated STEM Lab & Library",
      "features": [
        "Bilingual fluency in French and English opens massive future career and government opportunities in Canada",
        "Walking distance to home allows our child to walk safely with neighborhood friends",
        "Rich socialization with diverse classmates, sports teams, music bands, and after-school clubs",
        "Experienced certified teachers with specialized child psychology and speech support resources"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private Montessori & Arts Academy",
      "price": "$12,500 / year (Includes Hot Lunch & Field Trips)",
      "location": "Historic Campus (15-min drive)",
      "specs": "Small Class Sizes (12 Students) • Individualized Pace",
      "features": [
        "Self-directed hands-on learning develops strong independence, curiosity, and creativity",
        "Very low student-to-teacher ratio ensuring personalized attention for every child",
        "Extensive music, visual arts, and nature ecology curriculum integrated daily",
        "Organic chef-prepared hot lunches and secure private campus grounds"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Online Remote Homeschooling Software",
      "price": "$1,200 / year subscription",
      "location": "Home computer screen",
      "specs": "Digital Video Lessons • Independent Modules",
      "features": [
        "Flexible hours and zero morning rush",
        "Causes social isolation and deprives our 6-year-old of vital childhood peer interactions",
        "Requires 5+ hours of daily parent supervision, severely disrupting our own careers",
        "Excessive early childhood screen time causing eye fatigue and restlessness"
      ]
    },
    "persuasionGuidance": [
      "Highlight the crucial importance of early childhood socialization, friendships, and play.",
      "Point out immense long-term advantages of French Immersion (free bilingual education) or Montessori creativity.",
      "Explain that homeschooling puts an overwhelming burden on working parents and isolates the child in front of screens."
    ]
  },
  {
    "id": "t5_042",
    "title": "Language Learning Method",
    "category": "Education & Training",
    "context": "You and your coworker Carlos want to achieve fluent professional Spanish for an upcoming Latin American expansion project.",
    "targetAudience": "Your coworker, Carlos",
    "partnerChoiceName": "Free Automated Mobile Flashcard App",
    "partnerRationale": "Carlos wants to just use a free mobile flashcard game on his phone for 10 minutes a day on the subway.",
    "optionA": {
      "id": "opt_a",
      "name": "Intensive Small-Group Language Academy",
      "price": "$480 for 12-Week Term (2 evenings/week)",
      "location": "Downtown Language Institute (Near Office)",
      "specs": "Max 6 Students • Native Certified Instructor • Interactive Debates",
      "features": [
        "Dynamic conversational practice with peers simulating real business negotiations and client meetings",
        "Direct real-time correction of grammar, pronunciation, and colloquial idioms by a certified teacher",
        "Structured syllabus with regular listening comprehension, cultural nuances, and writing exercises",
        "Accountability and peer motivation ensure you consistently study and complete assignments"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private 1-on-1 Video Lessons with Native Business Tutor",
      "price": "$35 / hour ($700 for 20 personalized lessons)",
      "location": "Live Video Call (Flexible schedule from home)",
      "specs": "100% Tailored Curriculum • Industry-Specific Vocabulary",
      "features": [
        "Completely customized lessons focused specifically on our corporate industry contracts and sales terminology",
        "100% of speaking time is dedicated to you, rapidly building natural conversational confidence",
        "Flexible booking allowing lessons to be rescheduled around busy work shifts and travel",
        "Comprehensive feedback notes and recorded session replays provided after every class"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Free Automated Mobile Flashcard App",
      "price": "$0 (Ad-supported app)",
      "location": "Mobile Smartphone Screen",
      "specs": "Multiple-Choice Quizzes • Robotic Voice Audio",
      "features": [
        "Free and convenient for brief casual practice",
        "Teaches isolated vocabulary words without real conversational fluency or grammatical context",
        "Zero speaking practice with a real human being to build genuine conversation skills",
        "High drop-off rate with 90% of users quitting after three weeks due to repetitive exercises"
      ]
    },
    "persuasionGuidance": [
      "Explain that mobile flashcard games cannot teach complex conversational fluency or business negotiation skills.",
      "Highlight the effectiveness of small-group debates or 1-on-1 native tutoring for fast, confident speaking.",
      "Show that a modest corporate development investment ($480-$700) directly prepares the team for international success."
    ]
  },
  {
    "id": "t5_043",
    "title": "University Degree Format",
    "category": "Education & Training",
    "context": "You and your colleague Amanda are planning to pursue a Bachelor of Commerce degree to advance into executive leadership.",
    "targetAudience": "Your colleague, Amanda",
    "partnerChoiceName": "Short Unaccredited Online Certificate",
    "partnerRationale": "Amanda suggests taking a cheap 4-week unaccredited online certificate course to get it over with quickly.",
    "optionA": {
      "id": "opt_a",
      "name": "Accredited Online Flexible University Degree",
      "price": "$16,000 Total ($4,000 / year • Tax Deductible)",
      "location": "Fully Online (Top Accredited Canadian University)",
      "specs": "4-Year Bachelor of Commerce • Asynchronous Lectures & Exams",
      "features": [
        "Full formal Bachelor's Degree granted by an internationally recognized public university",
        "Study asynchronously in the evenings and weekends without quitting our current full-time jobs",
        "Eligible for employer tuition reimbursement and federal student tax credits",
        "Provides the mandatory academic credential required for senior director and VP positions"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Traditional On-Campus Evening & Weekend Cohort",
      "price": "$20,000 Total (Includes Campus Facilities & Gym)",
      "location": "Downtown University Campus",
      "specs": "Evening Lectures • In-Person Case Studies & Group Projects",
      "features": [
        "Builds an invaluable professional network with ambitious local corporate executives and entrepreneurs",
        "Direct in-person access to university business professors, career fairs, and venture incubators",
        "Face-to-face team project collaboration enhances executive public speaking and leadership skills",
        "Full access to campus library, study rooms, recreation centers, and alumni events"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Short Unaccredited 4-Week Online Certificate",
      "price": "$499 One-time",
      "location": "Commercial Training Website",
      "specs": "Pre-Recorded Videos • Auto-Graded Multiple Choice Quiz",
      "features": [
        "Fast completion in under a month with minimal effort",
        "Has zero academic accreditation and is disregarded by executive recruiters and HR directors",
        "Covers superficial surface-level concepts with zero analytical depth or case analysis",
        "Does not qualify for professional designations like CPA, PMP, or MBA prerequisites"
      ]
    },
    "persuasionGuidance": [
      "Warn that an unaccredited 4-week certificate carries zero weight with corporate recruiters for executive roles.",
      "Highlight the lasting career value of a recognized university degree (online flexible or in-person evening cohort).",
      "Explain that keeping our full-time jobs while studying online or in evening classes allows seamless career advancement."
    ]
  },
  {
    "id": "t5_044",
    "title": "High School Tutoring Program",
    "category": "Education & Training",
    "context": "You and your spouse are choosing a high school tutoring program to help your 15-year-old son Tyler with Grade 10 Math and Physics.",
    "targetAudience": "Your spouse, Robert",
    "partnerChoiceName": "Buying Pre-Recorded Video Lectures Online",
    "partnerRationale": "Robert wants to buy a bundle of pre-recorded math video lectures from a website for $99.",
    "optionA": {
      "id": "opt_a",
      "name": "Specialized STEM Learning Center (2 Sessions/Week)",
      "price": "$280 / month (Includes Custom Curriculum & Worksheets)",
      "location": "Local Learning Academy Plaza (5 min away)",
      "specs": "1:3 Tutor Ratio • Diagnostic Testing • Weekly Progress Reports",
      "features": [
        "Conducts in-depth diagnostic testing to identify and bridge specific foundational learning gaps",
        "Tutors closely follow the exact provincial high school curriculum to prepare for school exams",
        "Small group setting keeps students focused, disciplined, and accountable in a quiet study environment",
        "Parents receive weekly detailed progress reports tracking concept mastery and homework completion"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "In-Home University Engineering Student Tutor",
      "price": "$35 / hour ($280 / month for 2 hours weekly)",
      "location": "In-Home Private Tutoring at Kitchen Desk",
      "specs": "1-on-1 Dedicated Mentorship • Flexible Scheduling",
      "features": [
        "100% individual attention dedicated to Tyler's immediate daily school homework and test prep",
        "Young engineering student serves as an inspiring academic role model and university mentor",
        "Tutor comes directly to our house, saving parents driving time and waiting in parking lots",
        "Can easily adjust lesson frequency during exam weeks for intensive test preparation"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Pre-Recorded Online Video Lecture Bundle",
      "price": "$99 One-time purchase",
      "location": "Online Video Platform",
      "specs": "Generic video clips • No live interaction",
      "features": [
        "Cheap one-time payment",
        "Passive video watching cannot answer Tyler's specific questions or explain why he made a mistake",
        "Teenagers quickly lose focus and browse social media instead of watching dry math videos",
        "Zero accountability or feedback to ensure homework is actually understood and completed"
      ]
    },
    "persuasionGuidance": [
      "Point out that passive videos cannot answer Tyler's specific questions or correct his calculation mistakes.",
      "Highlight the immense value of live interactive guidance (learning center or 1-on-1 university tutor).",
      "Emphasize that building strong math foundations now is crucial for his university STEM admissions."
    ]
  },
  {
    "id": "t5_045",
    "title": "Professional Certification Program",
    "category": "Education & Training",
    "context": "You and your project teammate Simon want to obtain a prestigious certification to boost your career prospects.",
    "targetAudience": "Your teammate, Simon",
    "partnerChoiceName": "Casual Uncertified Reading of Project Books",
    "partnerRationale": "Simon thinks reading a couple of project management books on the weekend is enough without paying for exam fees.",
    "optionA": {
      "id": "opt_a",
      "name": "Project Management Professional (PMP) Certification Prep",
      "price": "$1,400 (Course + PMI Exam Fee • 100% Company Subsidized)",
      "location": "Virtual Live Instructor Bootcamp (4 Saturdays)",
      "specs": "35 Contact Hours • Official PMI Exam Simulator & Study Guide",
      "features": [
        "Globally recognized gold standard that increases project manager salaries by an average of 22%",
        "Covers comprehensive predictive waterfall, agile, and hybrid project methodologies",
        "Company training budget will cover 100% of the tuition and certification exam fees",
        "Guarantees that resumes stand out to corporate recruiters for high-paying senior project leadership roles"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Certified Scrum Master (CSM) & Agile Practitioner",
      "price": "$1,100 (2-Day Intensive Workshop + Exam Included)",
      "location": "Live Interactive Agile Workshop",
      "specs": "16 Hours • Official Scrum Alliance Credential & 2-Yr Membership",
      "features": [
        "High-demand certification essential for modern software development and digital transformation teams",
        "Fast 2-day intensive format allows earning the credential quickly without months of study",
        "Interactive hands-on roleplaying exercises in sprint planning, backlog grooming, and retrospectives",
        "Immediate practical application to optimize our current team's daily agile sprint workflows"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Casual Uncertified Reading of Project Books",
      "price": "$60 (Two paperback books)",
      "location": "Self-reading at home",
      "specs": "No credential • No formal verification",
      "features": [
        "Very cheap and low commitment",
        "Provides zero verifiable credential or letters after your name to prove competency on LinkedIn",
        "HR automated resume screening filters immediately reject candidates lacking formal PMP/CSM certs",
        "Easy to procrastinate reading books without structured deadlines or exam incentives"
      ]
    },
    "persuasionGuidance": [
      "Explain that corporate recruiters filter resumes based on official PMP/CSM credentials, not casual book reading.",
      "Show that company training budgets will fully reimburse the certification costs, making it essentially free to you.",
      "Highlight the massive career ROI: certified professionals earn 20%+ higher salaries and lead major enterprise initiatives."
    ]
  },
  {
    "id": "t5_046",
    "title": "Children's Extracurricular Activity",
    "category": "Education & Training",
    "context": "You and your spouse are selecting an after-school extracurricular program for your 8-year-old son Noah.",
    "targetAudience": "Your spouse, Claire",
    "partnerChoiceName": "Competitive Esports Video Gaming Club",
    "partnerRationale": "Noah loves gaming, and Claire thinks a competitive video gaming club will improve his reflexes and hand-eye coordination.",
    "optionA": {
      "id": "opt_a",
      "name": "Community Soccer League & Red Cross Swimming Lessons",
      "price": "$380 / season (Includes Soccer Uniform, Ball & Swim Passes)",
      "location": "Local Community Recreation Center (3 min away)",
      "specs": "Weekly Soccer Match + 2 Swim Lessons • Active Physical Fitness",
      "features": [
        "Builds strong cardiovascular health, motor coordination, and counteracts sedentary screen time",
        "Teaches vital life-saving swimming water safety skills and confidence in pools and lakes",
        "Fosters teamwork, fair play, sportsmanship, and face-to-face neighborhood friendships",
        "Encourages spending healthy active time outdoors in the fresh air and sunshine"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Classical Piano & Music Theory Lessons",
      "price": "$450 / term (Weekly 45-min lesson + Recital)",
      "location": "Neighborhood Music Conservatory",
      "specs": "1-on-1 Classical Piano Instructor • Royal Conservatory Syllabus",
      "features": [
        "Scientifically proven to enhance cognitive development, spatial reasoning, and academic math performance",
        "Cultivates deep patience, daily practice discipline, focus, and emotional expression",
        "Prepares for prestigious Royal Conservatory of Music (RCM) examination milestones",
        "Annual winter and spring recitals build tremendous stage poise and public performance confidence"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Competitive Esports Video Gaming Club",
      "price": "$320 / term",
      "location": "Commercial Gaming Center / Home PC",
      "specs": "3 Hours Weekly • Competitive Online Multiplayer Games",
      "features": [
        "Engaging and fun for children who love video games",
        "Increases sedentary indoor screen time, worsening posture, eye strain, and physical inactivity",
        "Can promote screen addiction, competitive frustration, and online toxicity",
        "Lacks real physical exercise, life-saving skills, or classical artistic enrichment"
      ]
    },
    "persuasionGuidance": [
      "Point out that kids already get plenty of screen time at home and need real physical exercise or artistic discipline.",
      "Highlight the life-saving necessity of swimming lessons and the cardiovascular/teamwork benefits of soccer.",
      "Alternatively, emphasize the profound cognitive, brain development, and discipline benefits of classical piano."
    ]
  },
  {
    "id": "t5_047",
    "title": "Graduate School MBA Program",
    "category": "Education & Training",
    "context": "You and your colleague Derek are evaluating Master of Business Administration (MBA) programs to qualify for executive VP roles.",
    "targetAudience": "Your colleague, Derek",
    "partnerChoiceName": "Unaccredited 2-Week Fast-Track Mini-MBA",
    "partnerRationale": "Derek wants to complete a 2-week unaccredited 'Mini-MBA' online course for $1,500 to get a certificate with minimal effort.",
    "optionA": {
      "id": "opt_a",
      "name": "Top-Tier Executive MBA (Weekend Format)",
      "price": "$65,000 (Tax Deductible • Employer Tuition Support Eligible)",
      "location": "Prestigious Downtown Business School (Rotman / Ivey / Schulich)",
      "specs": "18 Months • Alternating Fridays & Saturdays • Executive Cohort",
      "features": [
        "World-renowned international brand recognition and elite alumni executive network",
        "Learn alongside senior directors, doctors, and tech founders, forging lifelong high-level connections",
        "Rigorous curriculum covering corporate finance, mergers & acquisitions, and global business strategy",
        "Allows maintaining your high full-time salary while completing your degree on alternating weekends"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Part-Time Evening MBA at Regional University",
      "price": "$32,000 (Pay per course over 3 years)",
      "location": "Regional Public University Campus",
      "specs": "3 Years • 2 Evenings per week • AACSB Accredited",
      "features": [
        "Fully accredited, reputable master's degree at half the tuition cost of executive programs",
        "Highly flexible pace allowing you to take 1 or 2 courses per semester according to work demands",
        "Practical focus on mid-market business growth, supply chain operations, and leadership management",
        "Comprehensive career placement services and alumni networking events throughout the year"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Unaccredited 2-Week Online Mini-MBA",
      "price": "$1,500 One-time fee",
      "location": "Online Video Portal",
      "specs": "20 Hours of Video Lectures • Digital PDF Certificate",
      "features": [
        "Fast completion in two weeks with zero academic stress",
        "Is not a real master's degree and holds zero credibility with corporate boards and executive recruiters",
        "Cannot be listed as an authentic MBA credential on formal credentials or corporate governance filings",
        "A total waste of $1,500 that delivers neither rigorous education nor an executive professional network"
      ]
    },
    "persuasionGuidance": [
      "Explain that corporate boards and executive recruiters will immediately recognize a 2-week 'Mini-MBA' as illegitimate.",
      "Highlight the immense transformative power of a real accredited MBA: executive networking, alumni status, and VP qualifications.",
      "Show that part-time evening or weekend executive schedules allow keeping full-time income while earning an authentic degree."
    ]
  },
  {
    "id": "t5_048",
    "title": "Summer Camp for Kids",
    "category": "Education & Training",
    "context": "You and your partner are deciding on a 2-week July summer camp for your 10-year-old son Lucas.",
    "targetAudience": "Your partner, Mark",
    "partnerChoiceName": "Leaving Lucas at Home with Video Games & TV",
    "partnerRationale": "Mark thinks Lucas can just stay home alone for 2 weeks playing video games and watching TV to save money.",
    "optionA": {
      "id": "opt_a",
      "name": "Overnight Wilderness Adventure Camp in Muskoka",
      "price": "$1,600 for 2 Weeks (Includes Lodging, All Meals & Equipment)",
      "location": "Muskoka Lakefront Camp Grounds",
      "specs": "14 Days Overnight • Canoeing, Archery, Sailing & Campfires",
      "features": [
        "Immerses Lucas in pristine Canadian nature, developing independence, self-reliance, and resilience",
        "Exciting outdoor activities: canoeing, kayaking, rock climbing, archery, and campfire storytelling",
        "100% screen-free environment with 24/7 certified camp counselors and wilderness guides",
        "Builds lifelong friendships and unforgettable childhood memories in a safe, structured setting"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "STEM Robotics, Coding & Game Design Day Camp",
      "price": "$750 for 2 Weeks (9:00 AM - 4:30 PM Daily)",
      "location": "Local Technology College Campus (10 min away)",
      "specs": "Day Camp • LEGO Mindstorms Robotics • Python & 3D Printing",
      "features": [
        "Hands-on building of custom robotic rovers and coding interactive video games in Python",
        "Fosters critical logical thinking, problem-solving, and collaboration in high-demand STEM fields",
        "Includes outdoor afternoon sports and cooperative playground games to keep kids active",
        "Convenient daily schedule that aligns perfectly with working parents' standard business hours"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Leaving Lucas Home Alone with Screen Time",
      "price": "$0 Upfront",
      "location": "Home Living Room",
      "specs": "Unsupervised Screen Time • Fast Food Snacks",
      "features": [
        "Zero financial cost for camp registration",
        "Causes unhealthy sedentary isolation, sleep cycle disruption, and screen addiction",
        "Safety risk of a 10-year-old child remaining home alone without adult supervision all day",
        "Wastes summer vacation without learning new skills, outdoor exercise, or making friends"
      ]
    },
    "persuasionGuidance": [
      "Emphasize the safety and health risks of leaving a 10-year-old unsupervised at home on screens all day.",
      "Highlight the incredible personal growth, outdoor adventures, and self-confidence of Muskoka wilderness camp.",
      "Alternatively, show how the STEM robotics day camp provides fun, high-value technical learning at an affordable price."
    ]
  },
  {
    "id": "t5_049",
    "title": "Financial Literacy & Investment Course",
    "category": "Education & Training",
    "context": "You and your sibling Brian want to learn how to properly manage savings, invest in index funds, and plan for retirement.",
    "targetAudience": "Your sibling, Brian",
    "partnerChoiceName": "Paid Day-Trading & Crypto Social Media Group",
    "partnerRationale": "Brian wants to join a $200/month Telegram/Discord group promising quick riches through day-trading crypto and meme stocks.",
    "optionA": {
      "id": "opt_a",
      "name": "Certified Financial Planner (CFP) Guided Wealth Workshop",
      "price": "$350 (Includes 6 Modules + Personalized 1-on-1 Plan Review)",
      "location": "Live Interactive Evening Webinar Series",
      "specs": "6 Weeks • Certified Financial Planner • TFSA, RRSP & Index ETFs",
      "features": [
        "Taught by a licensed, fiduciary Certified Financial Planner bound by strict legal ethical standards",
        "Master Canadian tax-advantaged accounts: TFSAs, RRSPs, FHSAs, and low-cost diversified ETF investing",
        "Includes a personalized 1-on-1 financial portfolio audit and customized retirement roadmap",
        "Proven evidence-based passive investing strategy that reliably builds long-term compound wealth"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "College Personal Finance & Real Estate Investing Course",
      "price": "$420 (Continuing Education Credit • Tax Deductible)",
      "location": "Community College Campus (Saturday Mornings)",
      "specs": "8 Weeks • Academic Syllabus • Debt, Mortgages & Equities",
      "features": [
        "Comprehensive academic curriculum covering debt management, mortgage structures, and stock market analysis",
        "Hands-on case studies in budgeting, emergency funds, estate planning, and real estate evaluation",
        "Taught by university finance professors with practical workbook exercises and spreadsheets",
        "Eligible for tuition tax credits and recognized continuing education development units"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Paid Day-Trading & Crypto Social Media Group",
      "price": "$200 / month ($2,400 annually)",
      "location": "Anonymous Discord / Telegram Chatroom",
      "specs": "Daily Trading Signals • Speculative Meme Coins & Options",
      "features": [
        "Promises fast overnight wealth and high-risk speculative trading alerts",
        "High statistical probability of losing 100% of invested capital on volatile meme coins and options",
        "Run by unregulated, anonymous social media influencers with zero financial credentials",
        "Promotes dangerous gambling habits and extreme emotional stress rather than sound financial literacy"
      ]
    },
    "persuasionGuidance": [
      "Warn that 95% of day-traders and speculative crypto group members lose their entire savings within months.",
      "Highlight the proven compound growth of low-cost broad index ETFs, TFSAs, and RRSPs taught by certified fiduciaries.",
      "Show that investing $350-$420 in legitimate financial education protects tens of thousands of dollars for your future."
    ]
  },
  {
    "id": "t5_050",
    "title": "Creative Writing Workshop",
    "category": "Education & Training",
    "context": "You and your friend Clara want to develop your storytelling skills and finish writing your first fiction novels.",
    "targetAudience": "Your friend, Clara",
    "partnerChoiceName": "Writing in Secret at Home with Zero Feedback",
    "partnerRationale": "Clara is nervous about sharing her writing and wants to just keep writing in secret without showing anyone.",
    "optionA": {
      "id": "opt_a",
      "name": "University Extension Fiction Writers Masterclass",
      "price": "$520 for 10-Week Term (Weekly 3-Hour Workshop)",
      "location": "University Continuing Education Building",
      "specs": "Max 10 Writers • Published Author Instructor • Detailed Critiques",
      "features": [
        "Led by an award-winning published Canadian novelist who provides professional manuscript editing",
        "Deep dive into character development, narrative pacing, dialogue authenticity, and plot structuring",
        "Constructive, structured peer critiques in a supportive, professional workshop environment",
        "Includes a special publishing panel with literary agents and traditional book publishers"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Community Creative Writers Circle & Coffee Meetup",
      "price": "$120 / year (Bi-weekly critique sessions at library)",
      "location": "City Central Library Community Room",
      "specs": "Bi-weekly 2-Hour Critique Circles • Coffee & Writing Prompts",
      "features": [
        "Warm, encouraging, low-pressure atmosphere ideal for overcoming writer's block and anxiety",
        "Bi-weekly deadlines keep you motivated and accountable to write new chapters consistently",
        "Diverse group of enthusiastic writers sharing feedback, encouragement, and brainstorming ideas",
        "Very affordable membership fee covering room rental, guest speaker visits, and year-end anthology"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Writing in Secret at Home Alone",
      "price": "$0 Upfront",
      "location": "Home bedroom desk",
      "specs": "Solitary writing • No external feedback or deadlines",
      "features": [
        "Zero fear of judgment or vulnerability",
        "Without constructive feedback, writers remain blind to plot holes, weak dialogue, and pacing issues",
        "High rate of abandonment as isolation and self-doubt lead to unfinished manuscripts in desk drawers",
        "Miss out on the joy of community, literary networking, and learning publishing industry standards"
      ]
    },
    "persuasionGuidance": [
      "Reassure Clara that constructive feedback in a supportive workshop is how every great author grows.",
      "Highlight how bi-weekly deadlines and mentor critiques prevent procrastination and help finish the book.",
      "Explain that learning from published authors and literary agents provides the exact path to getting published."
    ]
  },
  {
    "id": "t5_051",
    "title": "Fitness Facility Membership",
    "category": "Fitness & Recreation",
    "context": "You and your workout partner Mike are choosing a local fitness club to train together 4 days a week.",
    "targetAudience": "Your workout partner, Mike",
    "partnerChoiceName": "Ultra-Luxury Boutique Country Club & Spa",
    "partnerRationale": "Mike wants to join an ultra-luxury private club for $290/month because of the valet parking, marble sauna, and eucalyptus towels.",
    "optionA": {
      "id": "opt_a",
      "name": "Full-Service Community YMCA Recreation Complex",
      "price": "$62 / month (No Enrollment Fee • Cancel Anytime)",
      "location": "Central Community Center (5-min drive / bike)",
      "specs": "Olympic Pool • Free Weights & Squat Racks • Indoor Running Track",
      "features": [
        "Massive 25-meter lap pool, hot tub, steam room, and indoor 200m rubber running track",
        "Extensive free weight zone with 6 power racks, dumbbells up to 120 lbs, and cardio machines",
        "Includes unlimited access to 50+ weekly group fitness classes (Spin, HIIT, Yoga, Bootcamp)",
        "Exceptional value with affordable family rates and flexible month-to-month membership"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "24/7 Keycard Express Strength & Fitness Gym",
      "price": "$45 / month (24/7 Unlimited Keyfob Access)",
      "location": "Neighborhood Plaza (Walking distance)",
      "specs": "24/7 Access • Commercial Hammer Strength Equipment",
      "features": [
        "Open 24 hours a day, 365 days a year, allowing flexible workouts early morning or late night",
        "High-grade commercial strength training equipment, bumper plates, and turf functional zone",
        "Uncrowded atmosphere during off-peak hours with zero waiting time for barbells or machines",
        "Private individual shower rooms and high-speed Wi-Fi throughout the facility"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Ultra-Luxury Boutique Club & Spa",
      "price": "$290 / month (+ $1,000 Initiation Fee)",
      "location": "Downtown Financial Core",
      "specs": "Spa Amenities • Valet Parking • Strict 1-Year Contract",
      "features": [
        "Luxury marble finishes, eucalyptus cold towels, and executive lounge",
        "Extremely expensive, totaling over $4,400 in the first year alone",
        "Strict long-term lock-in contract with steep penalty fees for early cancellation",
        "Crowded during peak lunch and after-work hours with long waits for squat racks"
      ]
    },
    "persuasionGuidance": [
      "Highlight the massive financial savings: save over $3,000 every year with YMCA or 24/7 gym while getting superior workout equipment.",
      "Point out that the YMCA provides a full 25m swimming pool and indoor running track that luxury gyms lack.",
      "Explain that 24/7 keycard access offers total scheduling freedom compared to restricted club operating hours."
    ]
  },
  {
    "id": "t5_052",
    "title": "Home Workout Equipment",
    "category": "Fitness & Recreation",
    "context": "You and your spouse are investing in home exercise equipment for your spare bedroom to stay fit during winter.",
    "targetAudience": "Your spouse, Chloe",
    "partnerChoiceName": "Bulky Multi-Station Cable Weight Machine",
    "partnerRationale": "Chloe saw a massive commercial multi-station cable cage machine online and thinks it can replace an entire commercial gym.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Connected Indoor Cycling Bike with Screen",
      "price": "$1,450 (Includes 1-Year App Subscription & Heart Rate Monitor)",
      "location": "Fits in compact 4x2 ft corner of bedroom",
      "specs": "22\" HD Touchscreen • Magnetic Resistance • Silent Belt Drive",
      "features": [
        "Thousands of high-energy live and on-demand cycling, HIIT, and strength classes with world-class instructors",
        "Whisper-quiet magnetic resistance allows early-morning workouts without waking sleeping family members",
        "Compact footprint easily fits in the corner of a spare bedroom or home office",
        "Tracks cardiovascular metrics, power output, and burned calories to monitor fitness progression"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Quick-Adjust Dumbbells (5-50 lbs) + Foldable Bench",
      "price": "$680 Total (Pair of Smart Dumbbells + Commercial Incline Bench)",
      "location": "Compact Home Corner (Folds under bed)",
      "specs": "5 to 50 lbs in 2.5 lb increments • 7-Position Incline Bench",
      "features": [
        "Replaces 15 pairs of traditional dumbbells in a single ultra-compact, space-saving design",
        "Enables hundreds of full-body resistance exercises: chest presses, squats, lunges, and shoulder rows",
        "Sturdy commercial-grade steel construction with zero electrical cables or monthly subscriptions",
        "Bench folds flat in seconds to slide directly under a bed or into a closet"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Bulky Commercial Multi-Station Cable Cage",
      "price": "$3,200 (+ $400 professional assembly required)",
      "location": "Requires 12x10 ft dedicated room",
      "specs": "Heavy Steel Cage • Dual 200-lb Weight Stacks",
      "features": [
        "Versatile multi-angle cable pulleys and chin-up bar",
        "Extremely heavy (over 600 lbs) and requires dominating the entire spare bedroom",
        "Complex assembly with hundreds of pulleys, cables, and bolts taking 10+ hours to build",
        "Lacks any cardiovascular conditioning or interactive coaching features"
      ]
    },
    "persuasionGuidance": [
      "Point out that the bulky cable cage will completely overwhelm the spare bedroom and is extremely difficult to assemble.",
      "Highlight the space-saving efficiency and affordability of adjustable dumbbells ($680) or smart bike ($1,450).",
      "Emphasize the fun, engaging motivation of live interactive cycling classes vs solitary machine lifting."
    ]
  },
  {
    "id": "t5_053",
    "title": "Outdoor Weekend Hobby",
    "category": "Fitness & Recreation",
    "context": "You and your friend Jason are choosing a new outdoor summer fitness hobby to enjoy together on weekends.",
    "targetAudience": "Your friend, Jason",
    "partnerChoiceName": "Extreme Downhill Mountain Biking",
    "partnerRationale": "Jason wants to buy downhill mountain bikes and ride high-speed rocky cliff trails at the ski resort.",
    "optionA": {
      "id": "opt_a",
      "name": "Tandem Sea Kayaking & Stand-Up Paddleboarding (SUP)",
      "price": "$1,100 Total (Inflatable SUP + Touring Kayak + Lifejackets)",
      "location": "Local Lakes, Waterfronts, and Provincial Parks",
      "specs": "Inflatable Military-Grade PVC • Packs into Backpacks",
      "features": [
        "Full-body low-impact cardiovascular workout that strengthens core, shoulders, and balance",
        "Explore tranquil Canadian lakes, scenic island archipelagos, and quiet rivers",
        "Inflatable designs pack compactly into car trunks without needing expensive roof racks",
        "Very safe, peaceful, and relaxing hobby with near-zero risk of severe orthopedic injury"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Long-Distance Road Cycling & Group Gran Fondo Rides",
      "price": "$1,300 Total (Lightweight Aluminum Road Bikes + Helmets)",
      "location": "Paved Country Roads and Multi-Use Waterfront Trails",
      "specs": "18-Speed Shimano Gears • 9.2 kg Frame • Hydraulic Disc Brakes",
      "features": [
        "Builds incredible cardiovascular endurance, leg stamina, and torches 700+ calories per hour",
        "Discover beautiful rural countryside, vineyard trails, and lakeside scenic routes",
        "Join local weekend cycling club group rides for social camaraderie and structured training",
        "Bikes can also be used for fast, eco-friendly weekday urban commuting"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Extreme Downhill Mountain Biking",
      "price": "$3,800 Total (Full-Suspension Downhill Bikes + Body Armor)",
      "location": "Mountain Ski Resort Lift Parks",
      "specs": "Heavy 180mm Travel Bikes • Full Face Helmets & Armor",
      "features": [
        "High-adrenaline downhill speeds and technical jump lines",
        "Extremely high risk of severe orthopedic injuries (fractures, concussions, torn ligaments)",
        "Very expensive bikes requiring constant shock servicing, brake bleeds, and costly lift tickets ($75/day)",
        "Requires driving 2+ hours each way to specialized ski mountains with chairlifts"
      ]
    },
    "persuasionGuidance": [
      "Address safety: downhill mountain biking carries an extremely high risk of severe broken bones and concussions.",
      "Highlight the versatile, safe, and relaxing enjoyment of paddleboarding/kayaking or road cycling.",
      "Show that water sports and road cycling cost a fraction of downhill bikes while being accessible right in our local area."
    ]
  },
  {
    "id": "t5_054",
    "title": "Marathon Training Program",
    "category": "Fitness & Recreation",
    "context": "You and your running partner Kelly are preparing to run your first 42.2 km Toronto Marathon in 16 weeks.",
    "targetAudience": "Your running partner, Kelly",
    "partnerChoiceName": "Running Daily Without a Structured Plan",
    "partnerRationale": "Kelly thinks you should just run as fast and as far as you feel like every day without following a schedule.",
    "optionA": {
      "id": "opt_a",
      "name": "Structured 16-Week Running Clinic with Certified Coach",
      "price": "$180 (Includes Coach Guidance, Long Group Runs & Singlet)",
      "location": "Local Running Specialty Store & Track",
      "specs": "Weekly Tuesday Track Workouts + Saturday Supported Long Runs",
      "features": [
        "Expert coaching on running gait, breathing cadence, hydration, and race-day carb fueling strategy",
        "Organized weekend long runs with water stations, pacers, and supportive running group camaraderie",
        "Periodized training schedule balances mileage progression with crucial recovery to prevent injury",
        "Significantly increases the likelihood of crossing the marathon finish line safely without hitting the wall"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Smart Heart-Rate Zone GPS Training App Program",
      "price": "$75 (Annual Premium Training App Subscription)",
      "location": "Personal GPS Smartwatch / Smartphone",
      "specs": "Adaptive AI Marathon Schedule • Heart-Rate Zone Audio Coaching",
      "features": [
        "Dynamically adjusts weekly mileage based on your daily recovery score, sleep, and heart rate variability",
        "Real-time audio prompts keep your pacing strictly within Zone 2 aerobic threshold to build stamina",
        "Complete flexibility to run on your own schedule whenever your work calendar permits",
        "Includes guided strength, mobility, and foam-rolling routines specifically tailored for runners"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Running Random Daily Mileage Without a Plan",
      "price": "$0 Upfront",
      "location": "Random outdoor streets",
      "specs": "No structure • Max effort every run",
      "features": [
        "Zero cost and requires no schedule commitment",
        "80% probability of developing severe shin splints, plantar fasciitis, or runner's knee from overtraining",
        "Running too fast on easy days burns out the aerobic energy system needed for 42 km endurance",
        "High likelihood of failing to finish the marathon or having to drop out due to injury"
      ]
    },
    "persuasionGuidance": [
      "Warn that running 42 km without a progressive training schedule almost guarantees severe overuse injuries and burnout.",
      "Highlight the immense benefits of coach-led group clinics (injury prevention, hydration strategy, pacers).",
      "Show how smart heart-rate zone training ensures proper aerobic base building and safe mileage ramp-up."
    ]
  },
  {
    "id": "t5_055",
    "title": "Stress-Relief Practice",
    "category": "Fitness & Recreation",
    "context": "You and your colleague Rachel need a healthy, restorative routine to manage workplace stress and burnout.",
    "targetAudience": "Your colleague, Rachel",
    "partnerChoiceName": "Passive Binge-Watching TV with Takeout Food",
    "partnerRationale": "Rachel suggests collapsing on the couch every evening watching Netflix and eating fast food delivery.",
    "optionA": {
      "id": "opt_a",
      "name": "Unlimited Hot Yoga & Sound-Bath Meditation Studio",
      "price": "$115 / month (Unlimited Classes • Mat Storage Included)",
      "location": "Boutique Infrared Yoga Studio (5 min from office)",
      "specs": "Infrared Radiant Heat (38°C) • 40 Classes Weekly • Sound Baths",
      "features": [
        "Deep infrared heat relaxes tight muscles, flushes toxins, and dramatically improves flexibility",
        "Guided breathwork (pranayama) and meditation actively lower cortisol stress hormones and anxiety",
        "Calm, candlelit studio environment with zero smartphones or email notifications allowed",
        "Promotes deep, restorative night-time sleep and clears mental fatigue"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Weekend Nature Trail Hiking & Forest Bathing Group",
      "price": "$45 / season (Provincial Parks Pass & Guided Group Hikes)",
      "location": "Conservation Area Trails and Escarpment Forests",
      "specs": "Weekly Saturday 8-km Guided Forest Hikes • Outdoor Ecology",
      "features": [
        "Scientifically proven Japanese 'Shinrin-yoku' (forest bathing) lowers blood pressure and boosts mood",
        "Breathe crisp, clean forest air while hiking through peaceful waterfalls, ravines, and cedar woods",
        "Gentle cardiovascular exercise that burns 500 calories without exhausting joint impact",
        "Social, friendly group of nature lovers providing positive, uplifting weekend conversation"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Passive Binge-Watching TV with Fast Food",
      "price": "$300 / month ($15 Netflix + $285 weekly food delivery)",
      "location": "Living room sofa",
      "specs": "Sedentary screen time • High sodium/sugar takeout",
      "features": [
        "Zero physical effort and provides temporary numbing distraction",
        "Increases physical lethargy, poor posture, brain fog, and weight gain",
        "Disrupts natural sleep cycles due to late-night blue light exposure",
        "Fails to address underlying root causes of stress, leaving you just as exhausted the next morning"
      ]
    },
    "persuasionGuidance": [
      "Explain that binge-watching TV and eating junk food increases physical sluggishness, insomnia, and anxiety.",
      "Highlight how hot yoga or weekend nature hiking actively lowers cortisol, restores mental clarity, and boosts energy.",
      "Show that engaging in an active restorative practice creates lasting physical vitality and resilience against work stress."
    ]
  },
  {
    "id": "t5_056",
    "title": "Winter Recreation Sport",
    "category": "Fitness & Recreation",
    "context": "You and your partner are choosing a regular outdoor winter sport to stay active during the 4 months of Canadian winter.",
    "targetAudience": "Your partner, Dave",
    "partnerChoiceName": "Staying Indoors All Winter on the Couch",
    "partnerRationale": "Dave hates the cold and thinks you should just stay inside the house from December through March.",
    "optionA": {
      "id": "opt_a",
      "name": "Cross-Country Nordic Skiing (Groomed Trails)",
      "price": "$450 Total ($300 Nordic Ski Package + $150 Season Trail Pass)",
      "location": "Local Conservation Area & City Park Trails (10 min away)",
      "specs": "Classic Waxless Skis • Carbon Poles • 45 km Groomed Trails",
      "features": [
        "Highest calorie-burning aerobic winter sport in the world, engaging arms, legs, and core",
        "Ski trails are located right in local conservation parks, eliminating expensive mountain travel",
        "Peaceful gliding through snow-covered evergreen forests and glistening winter landscapes",
        "Equipment lasts for 10+ years with almost zero ongoing maintenance costs"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Alpine Downhill Skiing & Snowboard Season Pass",
      "price": "$850 Total (Night/Weekend Season Lift Pass)",
      "location": "Regional Ski Resort Mountain (40 min drive)",
      "specs": "30 Mountain Runs • High-Speed Quad Chairlifts • Night Skiing",
      "features": [
        "Thrilling downhill speed and carved turns on illuminated mountain slopes after work",
        "Vibrant ski chalet culture with cozy fireplaces, hot cocoa, and social live music",
        "High-speed chairlifts allow getting 15+ exciting downhill runs in a single evening session",
        "Night skiing pass provides incredible flexibility to hit the slopes directly after work on weekdays"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Staying Indoors All Winter",
      "price": "$0 Upfront",
      "location": "Home Living Room",
      "specs": "Sedentary confinement for 4 months",
      "features": [
        "Avoids cold winter temperatures completely",
        "Causes severe Seasonal Affective Disorder (winter blues), depression, and vitamin D deficiency",
        "Leads to physical deconditioning, weight gain, and cabin fever",
        "Makes Canadian winter feel endlessly long, depressing, and miserable"
      ]
    },
    "persuasionGuidance": [
      "Point out that hibernating indoors for 4 months causes severe winter blues, weight gain, and cabin fever.",
      "Show that embracing winter sports like cross-country or downhill skiing makes winter exciting and fun.",
      "Highlight the incredible physical fitness, fresh outdoor air, and mental health boost of playing in the snow."
    ]
  },
  {
    "id": "t5_057",
    "title": "Swimming Lessons for Adults",
    "category": "Fitness & Recreation",
    "context": "You and your friend Tariq want to learn proper swimming strokes and water safety for upcoming summer cottage trips.",
    "targetAudience": "Your friend, Tariq",
    "partnerChoiceName": "Self-Teaching by Jumping into a Deep Lake",
    "partnerRationale": "Tariq thinks you can just jump off a cottage dock into deep lake water with life jackets and figure it out yourself.",
    "optionA": {
      "id": "opt_a",
      "name": "Small-Group Adult Beginner Swim Program (8 Weeks)",
      "price": "$160 for 8-Week Course (Weekly 45-min class)",
      "location": "Municipal Aquatic Center (Heated Pool)",
      "specs": "Max 5 Adults • Certified Red Cross Instructor • Shallow to Deep",
      "features": [
        "Supportive, patient environment designed specifically for adults overcoming fear of water",
        "Progressive curriculum: rhythmic breathing, front crawl, backstroke, and treading water safely",
        "Heated 29°C pool with clear lane dividers and certified lifeguards on duty at all times",
        "Practicing alongside fellow adult learners eliminates embarrassment and builds confidence"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private 1-on-1 Master Swim Instructor Lessons",
      "price": "$45 / session ($270 for 6 private 45-min lessons)",
      "location": "Private Swim Club Pool",
      "specs": "1-on-1 Dedicated Coach • Underwater Video Stroke Analysis",
      "features": [
        "100% personalized attention ensuring rapid technical mastery in just a few weeks",
        "Underwater video analysis to immediately pinpoint and correct inefficient arm and kick mechanics",
        "Customized specifically to your personal comfort level, stamina, and goals",
        "Flexible class scheduling around your work shifts and weekend plans"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Self-Teaching in a Deep Cottage Lake",
      "price": "$0 Upfront",
      "location": "Deep murky lake water",
      "specs": "No instructor • No lifeguards • Deep cold water",
      "features": [
        "Zero registration fee or lesson commitment",
        "Extremely dangerous with high risk of panic, drowning, or hypothermia in sudden drop-offs",
        "Reinforces bad swimming mechanics and fear of water rather than proper technique",
        "No trained medical personnel or lifeguards nearby if an emergency occurs"
      ]
    },
    "persuasionGuidance": [
      "Emphasize the severe life-threatening danger of trying to learn to swim in deep, murky lake water.",
      "Highlight the safe, structured, and compassionate environment of small-group adult classes ($160).",
      "Show that private lessons provide fast mastery and complete water confidence before summer cottage season."
    ]
  },
  {
    "id": "t5_058",
    "title": "Martial Arts Discipline",
    "category": "Fitness & Recreation",
    "context": "You and your workout friend Nathan want to learn a practical martial art for physical fitness and self-defense.",
    "targetAudience": "Your friend, Nathan",
    "partnerChoiceName": "Watching Online Fight Tutorial Clips",
    "partnerRationale": "Nathan thinks you can learn martial arts moves by watching free slow-motion combat videos online at home.",
    "optionA": {
      "id": "opt_a",
      "name": "Brazilian Jiu-Jitsu (BJJ) & Grappling Academy",
      "price": "$135 / month (Unlimited Classes + Free Uniform Gi)",
      "location": "Downtown Martial Arts Academy",
      "specs": "World-Champion Black Belt Instructors • Daily Live Sparring",
      "features": [
        "Proven most effective martial art for realistic ground self-defense and leverage against larger opponents",
        "Full-body grappling delivers intense cardiovascular conditioning and core strength",
        "Safe, controlled live sparring ('rolling') in every single class to test techniques against resisting partners",
        "Welcoming, ego-free team culture that emphasizes mutual respect, problem-solving, and humility"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Traditional Muay Thai Kickboxing & Boxing Gym",
      "price": "$120 / month (Unlimited Bag Work, Technique & Conditioning)",
      "location": "Local Striking & Boxing Club",
      "specs": "Heavy Bag Drills • Pad Work with Coaches • Dutch Kickboxing",
      "features": [
        "Master the 'art of eight limbs' utilizing punches, kicks, knees, and elbow strikes with power",
        "High-intensity interval training burns up to 800 calories per class while building lightning-fast reflexes",
        "Pad-holding partner drills develop precise timing, distance management, and defensive footwork",
        "Great stress-relief outlet hitting heavy bags and punch mitts after demanding workdays"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Watching Online Fight Video Clips at Home",
      "price": "$0 Upfront",
      "location": "Living Room Carpet",
      "specs": "Solo shadowboxing • No resistance • No coach",
      "features": [
        "Free and convenient to watch from your couch",
        "Impossible to learn timing, leverage, or distance without a real resisting training partner",
        "Builds dangerous false confidence that will fail completely in a real physical confrontation",
        "No qualified instructor to correct sloppy technique or prevent self-injury"
      ]
    },
    "persuasionGuidance": [
      "Explain that martial arts cannot be learned from videos: timing and leverage require live, resisting training partners.",
      "Highlight the realistic self-defense effectiveness and incredible physical conditioning of BJJ and Muay Thai.",
      "Show that joining a reputable academy provides safety, coaching feedback, and an uplifting brotherhood of training partners."
    ]
  },
  {
    "id": "t5_059",
    "title": "Golf Practice Facility",
    "category": "Fitness & Recreation",
    "context": "You and your colleague Paul want to practice and improve your golf game for client corporate tournaments this summer.",
    "targetAudience": "Your colleague, Paul",
    "partnerChoiceName": "Ultra-Exclusive $45,000 Private Country Club",
    "partnerRationale": "Paul wants to apply for a private country club membership with a $45,000 initiation fee to impress corporate executives.",
    "optionA": {
      "id": "opt_a",
      "name": "Public Driving Range, Short-Game Green & Par-3 Course",
      "price": "$45 / visit ($15 Jumbo Bucket + $30 9-Hole Par-3 Green Fee)",
      "location": "Municipal Golf Complex (10 min from office)",
      "specs": "Grass Tee Decks • TrackMan Range Screens • Chipping Green & Bunker",
      "features": [
        "Equipped with TrackMan radar screens providing instant ball speed, launch angle, and carry distance data",
        "Large dedicated chipping and putting greens with real sand bunkers to master essential short-game shots",
        "Challenging 9-hole Par-3 executive course perfect for a quick 90-minute round after work",
        "Pay-as-you-play flexibility with zero annual dues, initiation fees, or dining minimums"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "24/7 Indoor High-Tech Golf Simulator Lounge",
      "price": "$120 / month (Unlimited Off-Peak Simulator Hours)",
      "location": "Modern Downtown Golf Lounge",
      "specs": "High-Definition TrackMan 4 Simulators • 100+ PGA Courses",
      "features": [
        "Play virtual rounds on world-famous courses (Pebble Beach, St. Andrews) in air-conditioned comfort",
        "High-speed 4K cameras capture club path and face angle in slow-motion for precise swing diagnosis",
        "Practice anytime regardless of summer rainstorms, extreme heat, or dark evening hours",
        "Full food and beverage service with comfortable leather lounge seating for client meetings"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Ultra-Exclusive Private Country Club",
      "price": "$45,000 Initiation Fee (+ $850/month dues + $1,500 dining minimum)",
      "location": "Private Gated Suburb",
      "specs": "18-Hole Championship Course • Formal Dress Code",
      "features": [
        "Pristine manicured fairways and exclusive high-net-worth networking",
        "Astronomical financial cost ($45k upfront) taking years to justify for casual players",
        "2-year waiting list requiring sponsorship letters from three existing club members",
        "Strict pace of play rules and rigid formal clubhouse dress codes"
      ]
    },
    "persuasionGuidance": [
      "Point out that spending $45,000 on country club fees is an enormous financial waste for casual practice.",
      "Highlight the high-tech TrackMan analytics available at the public range and indoor simulator for a fraction of the price.",
      "Show that simulator lounges and public Par-3 courses offer quick, convenient practice directly after work."
    ]
  },
  {
    "id": "t5_060",
    "title": "Dog Exercise Solution",
    "category": "Fitness & Recreation",
    "context": "You and your partner are deciding on a daily exercise routine for your energetic 1-year-old Golden Retriever, Cooper.",
    "targetAudience": "Your partner, Sarah",
    "partnerChoiceName": "Leaving Cooper in the Small Backyard Alone",
    "partnerRationale": "Sarah thinks letting Cooper out into our small fenced backyard for 20 minutes is enough exercise.",
    "optionA": {
      "id": "opt_a",
      "name": "Daily Enclosed Community Dog Park & Trail Walking",
      "price": "$0 (Free Public Park Amenities)",
      "location": "Fenced Off-Leash Regional Dog Park (4 min away)",
      "specs": "5-Acre Fully Fenced Park • Separate Agility & Big Dog Zones",
      "features": [
        "Allows Cooper to sprint freely off-leash, burn off high energy, and play fetch across wide grassy fields",
        "Provides vital canine socialization with other friendly dogs, preventing behavioral aggression and anxiety",
        "Includes wooded nature walking trails for a pleasant daily 45-minute fitness walk for owners too",
        "Equipped with fresh running water stations, agility obstacles, and double-gated safety entry"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Professional Small-Pack Adventure Dog Walker",
      "price": "$25 / walk ($250 / month for 3 weekly adventure walks)",
      "location": "Pick-up directly from home for private forest trail walks",
      "specs": "Licensed & Insured Walker • Max 4 Dogs per Pack • 90-min Outing",
      "features": [
        "Cooper is picked up and transported in a specialized air-conditioned vehicle to private hiking trails",
        "90 minutes of structured hiking, swimming, and mental stimulation while you are busy at work",
        "Walker sends daily GPS tracking maps, photo updates, and brings Cooper home tired and happy",
        "Completely eliminates working-parent guilt during long office workdays"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Leaving Cooper Alone in the Backyard",
      "price": "$0 Upfront",
      "location": "Small 20x15 ft suburban backyard",
      "specs": "No walking • No social interaction",
      "features": [
        "Zero cost and requires no owner time or effort",
        "Young retrievers quickly become bored, leading to destructive digging, fence chewing, and nuisance barking",
        "Fails to provide cardiovascular exercise, leading to canine obesity and joint problems",
        "Causes behavioral frustration, separation anxiety, and hyperactivity inside the house"
      ]
    },
    "persuasionGuidance": [
      "Explain that energetic young retrievers require vigorous daily running and stimulation, not just standing in a small yard.",
      "Highlight the joy, socialization, and owner exercise provided by the free 5-acre community dog park.",
      "Show that a professional pack walker ($25/walk) keeps Cooper happy and well-behaved while owners work long hours."
    ]
  },
  {
    "id": "t5_061",
    "title": "Work Laptop Upgrade",
    "category": "Electronics & Appliances",
    "context": "You and your colleague Alex are selecting a new company laptop for your software development and remote business travel needs.",
    "targetAudience": "Your colleague, Alex",
    "partnerChoiceName": "Heavy Refurbished 8-Year-Old Desktop Tower",
    "partnerRationale": "Alex suggests buying an 8-year-old refurbished corporate desktop tower for $200 to save the department budget.",
    "optionA": {
      "id": "opt_a",
      "name": "14-inch Lightweight Business Ultrabook",
      "price": "$1,450 (Includes 3-Year On-Site Warranty)",
      "location": "Authorized Corporate Tech Supplier",
      "specs": "Intel Core Ultra 7 / 32GB RAM / 1TB SSD • 1.2 kg • 18-Hour Battery",
      "features": [
        "Featherlight 1.2 kg carbon-fiber chassis makes commuting and airport business travel effortless",
        "Exceptional 18-hour real-world battery life allows all-day working without carrying a bulky charging brick",
        "Vibrant anti-glare 2.8K display with 1080p AI noise-cancelling webcam for crisp executive video calls",
        "Ultra-fast 32GB LPDDR5 RAM compiles code, spreadsheets, and databases instantly without lag"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "16-inch High-Performance Mobile Workstation",
      "price": "$1,850 (Includes Dedicated GPU)",
      "location": "Direct Manufacturer Portal",
      "specs": "32GB RAM / 1TB NVMe / NVIDIA RTX 4060 GPU • 16\" 120Hz Screen",
      "features": [
        "Dedicated NVIDIA RTX graphics card accelerates heavy 3D rendering, video editing, and AI workflows",
        "Spacious 16-inch high-refresh screen eliminates the need for an external secondary monitor when traveling",
        "Advanced dual-fan vapor chamber cooling keeps internal thermals low under sustained heavy workloads",
        "Full selection of ports: full-size HDMI, SD card slot, and Thunderbolt 4 without needing dongles"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Heavy Refurbished 8-Year-Old Desktop Tower",
      "price": "$200 Base",
      "location": "Surplus Electronics Depot",
      "specs": "Ancient Core i5 / 8GB DDR3 / Heavy Tower • No Wi-Fi / No Portability",
      "features": [
        "Low initial cash outlay for the department",
        "Completely immobile: cannot be taken home, to client meetings, or on business flights",
        "Obsolete 8-year-old hardware cannot run modern IDEs, Docker, or Windows 11 updates securely",
        "Loud fan noise, high power consumption, and frequent hard drive failure risks"
      ]
    },
    "persuasionGuidance": [
      "Point out that modern knowledge workers require mobility for remote work, client presentations, and travel.",
      "Explain that an 8-year-old desktop will cause severe lag, software crashes, and wasted work hours.",
      "Highlight the massive productivity and battery life advantages of modern ultrabooks or powerful workstations."
    ]
  },
  {
    "id": "t5_062",
    "title": "Home Laundry Machine Set",
    "category": "Electronics & Appliances",
    "context": "You and your partner are replacing your 15-year-old broken laundry machines in your suburban home.",
    "targetAudience": "Your partner, Kevin",
    "partnerChoiceName": "Using the Neighborhood Coin Laundromat",
    "partnerRationale": "Kevin suggests we just take our laundry baskets to the coin laundromat every Sunday to avoid spending on new machines.",
    "optionA": {
      "id": "opt_a",
      "name": "High-Efficiency Smart Front-Load Washer & Heat-Pump Dryer",
      "price": "$1,950 for the Pair ($150 EcoEnergy Rebate Eligible)",
      "location": "Major Appliance Center (Free Delivery & Installation)",
      "specs": "5.2 cu. ft. Mega Capacity • Heat-Pump Ventless Dryer • Steam Clean",
      "features": [
        "EnergyStar Certified heat-pump technology uses 60% less electricity than traditional dryers",
        "Gentle front-load tumbling motion prevents fabric wear and extends the lifespan of expensive clothes",
        "Smart Wi-Fi cycle alerts notify your smartphone when loads are complete and steam wrinkles away",
        "Massive 5.2 cu. ft. capacity easily washes king-size winter duvets and heavy bedding at home"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Heavy-Duty Top-Load Washer & Matching Gas Dryer",
      "price": "$1,550 for the Pair (Includes 5-Year Motor Warranty)",
      "location": "Local Home Appliance Depot",
      "specs": "5.0 cu. ft. Agitator-Free Top Load • Fast 30-Min Quick Wash",
      "features": [
        "Impeller design provides maximum tub space without a center agitator tangling bedsheets",
        "Fast 30-minute quick-wash cycle delivers spotless clothes in a hurry before work or school",
        "Easy-access top-loading design eliminates bending down, protecting lower back from strain",
        "Durable stainless steel wash basket resists chips, rust, and snagging delicate fabrics"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Using the Neighborhood Coin Laundromat",
      "price": "$15 / week ($780 / year in coins & detergent)",
      "location": "Commercial Plaza (15-min drive)",
      "specs": "Shared Commercial Coin Washers & Dryers",
      "features": [
        "Zero upfront machine purchase expense",
        "Wastes 3 hours every single weekend lugging heavy laundry baskets in freezing winter weather",
        "Annual coin costs ($780/yr) pay for a brand new machine set in just two years",
        "Hygiene concerns from washing clothes in dirty machines previously used by hundreds of strangers"
      ]
    },
    "persuasionGuidance": [
      "Calculate financial reality: laundromat coin fees ($780/yr) equal the cost of brand-new home machines in 2 years.",
      "Highlight convenience: washing at home saves 3 precious hours every weekend without carrying heavy baskets in winter.",
      "Emphasize the eco-energy efficiency, steam sanitization, and clothes preservation of modern smart washers."
    ]
  },
  {
    "id": "t5_063",
    "title": "Living Room Entertainment Display",
    "category": "Electronics & Appliances",
    "context": "You and your spouse are upgrading the main entertainment display in your newly renovated family room.",
    "targetAudience": "Your spouse, Mark",
    "partnerChoiceName": "Keeping Our 12-Year-Old 32-inch 720p TV",
    "partnerRationale": "Mark wants to keep our tiny 32-inch 720p TV from 2012 sitting on a milk crate to avoid spending any money.",
    "optionA": {
      "id": "opt_a",
      "name": "65-inch 4K OLED Smart Cinema TV",
      "price": "$1,699 (Includes 5-Year Burn-In & Panel Warranty)",
      "location": "Electronics Superstore (Free Home Delivery)",
      "specs": "4K Ultra HD • Self-Lit OLED Pixels • Dolby Vision • 120Hz",
      "features": [
        "Self-lit OLED pixels achieve infinite contrast ratio, deep pure blacks, and vibrant cinema colors",
        "Ultra-slim 4mm bezel mounts flush against the wall like a fine art gallery piece",
        "Smooth 120Hz refresh rate with VRR delivers incredible sports and next-gen console gaming performance",
        "Built-in Dolby Atmos acoustic audio creates immersive surround sound directly from the screen"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "120-inch 4K Ultra-Short-Throw Laser Cinema Projector",
      "price": "$2,200 (Includes 120\" Ambient Light Rejecting Screen)",
      "location": "Home Audio/Video Specialty Store",
      "specs": "120\" ALR Screen • Triple-Laser 4K • 3,000 Lumens • Harman Kardon",
      "features": [
        "Creates an authentic 120-inch giant commercial cinema movie experience in your living room",
        "Ultra-short-throw design sits directly on your media console just 9 inches away from the wall",
        "Ambient Light Rejecting (ALR) screen provides bright, vivid daytime viewing even with open blinds",
        "Laser light engine delivers 25,000 hours of maintenance-free cinema entertainment"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Keeping 12-Year-Old 32-inch 720p TV",
      "price": "$0 Upfront",
      "location": "Living Room",
      "specs": "32-inch • Blurry 720p Resolution • Thick Plastic Bezels",
      "features": [
        "Zero financial cost today",
        "Tiny 32-inch screen is nearly unreadable from the sofa 10 feet away, causing severe eye strain",
        "Outdated 720p resolution cannot display modern 4K movies, sports, or high-definition streaming apps",
        "Looks completely out of place and aesthetically jarring in our newly renovated modern family room"
      ]
    },
    "persuasionGuidance": [
      "Point out that a tiny 32-inch 720p screen from 10 feet away ruins family movie nights and causes eye strain.",
      "Highlight breathtaking picture quality: 65-inch OLED delivers stunning 4K deep blacks, Dolby Vision, and slim aesthetics.",
      "Alternatively, show how the 120-inch laser projector transforms family gatherings and sports into a true cinema experience."
    ]
  },
  {
    "id": "t5_064",
    "title": "Mobile Smartphone Replacement",
    "category": "Electronics & Appliances",
    "context": "You and your partner are replacing your broken, lagging smartphone before starting a busy business contract.",
    "targetAudience": "Your partner, Nina",
    "partnerChoiceName": "Sticking with a Cracked 6-Year-Old Phone",
    "partnerRationale": "Nina suggests putting tape over the cracked screen and dealing with the 2-hour battery life of our 6-year-old phone.",
    "optionA": {
      "id": "opt_a",
      "name": "Premium Flagship Smartphone (256GB)",
      "price": "$1,150 Total (or $45/mo on carrier 0% financing)",
      "location": "Official Flagship Brand Store",
      "specs": "Pro Triple-Camera (48MP) • Titanium Frame • 7 Years OS Updates",
      "features": [
        "Pro-grade camera system captures stunning low-light photos, 4K video, and professional client document scans",
        "All-day battery life with 50% fast charge in 20 minutes eliminates daytime charging anxiety",
        "Guaranteed 7 years of major operating system security patches and feature updates",
        "Shatter-resistant Ceramic Shield glass and IP68 water resistance protects against accidental drops"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Upper Mid-Range Battery Champion Phone (128GB)",
      "price": "$550 Total Purchase (Outright Unlocked)",
      "location": "National Electronics Retailer",
      "specs": "5,000 mAh 2-Day Battery • 120Hz OLED Screen • 50MP Camera",
      "features": [
        "Massive 5,000 mAh battery easily lasts two full days on a single charge with heavy navigation and calls",
        "Vibrant 120Hz OLED display provides butter-smooth scrolling and crisp outdoor sunlight visibility",
        "Costs less than half the price of flagship devices while handling 95% of daily tasks with lightning speed",
        "Bought outright unlocked, giving complete freedom to choose cheap $35/month discount mobile plans"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Sticking with Cracked 6-Year-Old Phone",
      "price": "$0 Upfront",
      "location": "Current pocket",
      "specs": "Cracked Glass • 2-Hour Battery • No Security Updates",
      "features": [
        "Avoids spending money on a new gadget",
        "Severe safety and reliability hazard: phone randomly shuts down during important work calls and GPS navigation",
        "Dangerous cracked glass can cut fingers, and outdated software has active cybersecurity vulnerabilities",
        "Extreme app lag and lack of storage space makes taking photos or opening PDFs painfully slow"
      ]
    },
    "persuasionGuidance": [
      "Emphasize that a dependable smartphone is an essential daily tool for work, safety, navigation, and banking.",
      "Explain that the cracked 6-year-old phone has dangerous security flaws, cut hazards, and dies during urgent calls.",
      "Highlight the incredible value of the $550 mid-range phone (2-day battery, smooth 120Hz) or premium flagship camera."
    ]
  },
  {
    "id": "t5_065",
    "title": "Automated Home Floor Cleaning",
    "category": "Electronics & Appliances",
    "context": "You and your spouse are choosing a home vacuum system to keep your 2,000 sq. ft. house clean with two shedding pets.",
    "targetAudience": "Your spouse, Dan",
    "partnerChoiceName": "Heavy 25-lb Corded Bagged Vacuum",
    "partnerRationale": "Dan wants to keep using an old 25-lb heavy corded vacuum with disposable paper bags because it was built like a tank.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Robot Vacuum & Sonic Mop with Auto-Empty Base",
      "price": "$899 (Includes 1-Year Supply of Dust Bags & Mopping Pads)",
      "location": "Online Appliance Depot",
      "specs": "LiDAR Laser Navigation • 6,000 Pa Suction • Self-Emptying & Washing Dock",
      "features": [
        "Automatically vacuums and mops hardwood and carpets every day on a schedule while you are at work",
        "Base station automatically empties dustbin for 60 days and washes/dries hot mopping pads autonomously",
        "Advanced LiDAR laser mapping navigates around pet toys, shoes, and power cords without getting stuck",
        "Eliminates 3 hours of exhausting manual weekend sweeping and mopping chores entirely"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Cordless Lightweight Stick Vacuum with Dual Batteries",
      "price": "$540 Total (Includes Wall Dock & Pet Hair Screw Tool)",
      "location": "Major Home Improvement Center",
      "specs": "3.1 lbs Handheld • 60-min Runtime per Battery • HEPA Filtration",
      "features": [
        "Ultra-lightweight 3.1 lb design makes cleaning stairs, high ceiling corners, and cars effortless",
        "Anti-tangle brush bar specifically engineered to remove stubborn dog hair from rugs without clogging",
        "Two quick-swap lithium batteries provide a combined 120 minutes of continuous fade-free suction",
        "Multi-stage sealed HEPA filtration traps 99.97% of pet dander, dust mites, and airborne allergens"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Heavy 25-lb Corded Bagged Vacuum",
      "price": "$0 Upfront (+ $40/year disposable bags)",
      "location": "Hallway Closet",
      "specs": "25-lb Heavy Steel Body • 15-ft Cord • Disposable Paper Bags",
      "features": [
        "Zero equipment cost today",
        "Extremely heavy (25 lbs) making vacuuming stairs painful and dangerous for lower back strain",
        "Short 15-ft cord requires constantly unplugging and searching for wall outlets in every single room",
        "Constantly buying expensive disposable paper bags and belts that smell like hot dust"
      ]
    },
    "persuasionGuidance": [
      "Contrast physical effort: the heavy 25-lb corded vacuum is a chore that causes back pain on stairs.",
      "Highlight the lifestyle transformation of a smart robot vacuum that cleans floors automatically every single morning.",
      "Alternatively, show how a 3-lb cordless stick vacuum cleans stairs, furniture, and cars in seconds with zero cords."
    ]
  },
  {
    "id": "t5_066",
    "title": "Kitchen Cooking Appliance",
    "category": "Electronics & Appliances",
    "context": "You and your partner are upgrading your kitchen countertop cooking appliances to prepare healthier, faster weekday meals.",
    "targetAudience": "Your partner, Laura",
    "partnerChoiceName": "Basic Reheating Microwave Only",
    "partnerRationale": "Laura thinks our basic microwave is all we need to heat up frozen dinners and reheat coffee.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Multi-Function Air Fryer & Convection Toaster Oven",
      "price": "$280 (12-in-1 Smart Countertop Appliance)",
      "location": "Kitchen Appliance Retailer",
      "specs": "12 Functions (Air Fry, Roast, Bake, Dehydrate, Toast) • Fits 12\" Pizza",
      "features": [
        "Air fry technology creates ultra-crispy fries, chicken wings, and roasted vegetables using 85% less oil",
        "Preheats in under 2 minutes, cooking complete family dinners 40% faster than a full-size kitchen oven",
        "Spacious interior easily roasts a 5-lb whole chicken, bakes a 12-inch pizza, or toasts 6 bagel halves",
        "Uses 70% less electricity than heating a giant standard kitchen stove oven, saving on utility bills"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "9-in-1 Smart Electric Pressure Cooker & Slow Cooker",
      "price": "$160 (Includes Stainless Steel Pot & Steamer Basket)",
      "location": "Department Store",
      "specs": "8-Quart Capacity • 15 Preset Smart Programs • Sous Vide",
      "features": [
        "Cuts cooking time by 70% for pot roasts, stews, pulled pork, and dried beans without soaking",
        "One-pot cooking means washing only a single stainless steel dishwasher-safe pot after dinner",
        "Slow cook and keep-warm functions allow coming home from work to hot, ready-to-eat gourmet dinners",
        "Preserves up to 90% of food vitamins and nutrients compared to boiling or microwave reheating"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Basic Reheating Microwave Only",
      "price": "$0 Upfront",
      "location": "Countertop",
      "specs": "Basic 900W Microwave • Single Magnetron",
      "features": [
        "Fast at boiling water or warming pre-cooked leftovers",
        "Leaves food soggy, rubbery, and unevenly heated with cold centers and tough edges",
        "Cannot crisp, roast, bake, brown, or develop delicious caramelized flavors",
        "Severely restricts home cooking variety to unhealthy processed frozen microwave meals"
      ]
    },
    "persuasionGuidance": [
      "Point out that microwaves produce soggy, rubbery food and cannot roast, crisp, or brown ingredients.",
      "Highlight the versatile health benefits of an air fryer oven (crispy food with 85% less oil, fast preheat).",
      "Show that electric pressure cookers make delicious, tender gourmet stews and roasts in just 30 minutes after work."
    ]
  },
  {
    "id": "t5_067",
    "title": "Home Coffee Brewing Station",
    "category": "Electronics & Appliances",
    "context": "You and your spouse spend $16 every weekday buying specialty lattes and coffees at commercial coffee shop drive-thrus.",
    "targetAudience": "Your spouse, Chris",
    "partnerChoiceName": "Continuing Daily Coffee Shop Drive-Thru",
    "partnerRationale": "Chris thinks stopping at the cafe drive-thru every morning is a fun daily ritual despite the cost.",
    "optionA": {
      "id": "opt_a",
      "name": "All-in-One Espresso Machine with Integrated Burr Grinder",
      "price": "$799 (Includes Stainless Milk Pitcher & Tamper)",
      "location": "Specialty Coffee Equipment Boutique",
      "specs": "15-Bar Italian Pump • Integrated Conical Burr Grinder • Microfoam Steam Wand",
      "features": [
        "Crafts barista-quality lattes, cappuccinos, flat whites, and rich espresso shots at home in 60 seconds",
        "Integrated stainless steel conical burr grinder grinds fresh beans directly into the portafilter on demand",
        "Powerful commercial steam wand creates silky textured microfoam perfect for latte art",
        "Saves over $3,500 every single year compared to buying daily drive-thru coffees"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Programmable Thermal Carafe Drip Coffee Maker + Grinder",
      "price": "$220 Total (SCA Certified Drip Machine + Electric Burr Grinder)",
      "location": "Major Home Store",
      "specs": "10-Cup Vacuum Thermal Carafe • Precise 93°C Water Temp • Auto-Timer",
      "features": [
        "Wake up to the aroma of freshly brewed hot artisan coffee every morning with automatic timer preset",
        "Double-wall insulated stainless steel thermal carafe keeps coffee piping hot for 6 hours without burning",
        "Specialty Coffee Association (SCA) certified showerhead ensures optimal coffee extraction flavor",
        "Brew enough rich coffee for both travel mugs in a single morning batch in under 6 minutes"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Daily Commercial Coffee Shop Drive-Thru",
      "price": "$16 / day ($4,160 / year for two people)",
      "location": "Cafe Drive-Thru Lineup",
      "specs": "Disposable Paper Cups • Long Drive-Thru Queue",
      "features": [
        "Zero home equipment cleaning or preparation",
        "Astoundingly expensive, burning over $4,000 in post-tax cash every year for two daily coffees",
        "Wastes 15 minutes waiting in idling car drive-thru traffic lineups every morning",
        "Produces hundreds of non-recyclable plastic lids and single-use paper cups going to landfills"
      ]
    },
    "persuasionGuidance": [
      "Reveal the staggering financial impact: spending $4,160/year at cafe drive-thrus vs saving $3,500 with a home machine.",
      "Highlight the luxury and speed of brewing fresh barista-quality espresso or automated hot drip coffee at home in pajamas.",
      "Point out the elimination of morning drive-thru traffic lineups and environmental paper cup waste."
    ]
  },
  {
    "id": "t5_068",
    "title": "Smart Home Climate Control",
    "category": "Electronics & Appliances",
    "context": "You and your roommate are looking for ways to lower high winter heating and summer cooling utility bills in your home.",
    "targetAudience": "Your roommate, Jordan",
    "partnerChoiceName": "Keeping the 30-Year-Old Manual Dial Thermostat",
    "partnerRationale": "Jordan thinks our old manual mercury dial thermostat is fine as long as we remember to twist it down before sleeping.",
    "optionA": {
      "id": "opt_a",
      "name": "Smart Learning Thermostat with Wireless Room Sensors",
      "price": "$249 ($75 Provincial Green Energy Utility Rebate Available)",
      "location": "Hardware Electronics Retailer",
      "specs": "Learning Algorithm • Smartphone App Control • 2 Wireless Temp Sensors",
      "features": [
        "Automatically learns your weekly schedule and lowers heating when the house is empty, saving 15-20% on bills",
        "Includes 2 wireless temperature sensors to eliminate cold upstairs bedrooms and drafty basement zones",
        "Control heating and cooling from anywhere via smartphone app, warming the house before you arrive home",
        "Monthly home energy breakdown reports pinpoint exact furnace usage and savings opportunities"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Programmable 7-Day Digital Touchscreen Thermostat",
      "price": "$85 (Simple DIY 20-Min Installation)",
      "location": "Local Home Center",
      "specs": "7-Day Independent Programming • 4 Time Periods Daily • Backlit Screen",
      "features": [
        "Set separate custom heating schedules for weekdays and weekends with 4 temperature changes daily",
        "Maintains consistent comfort without needing Wi-Fi connections, apps, or smart home ecosystems",
        "Large illuminated backlit digital display clearly shows room temperature and target setpoint",
        "Pays for itself in under two months through automated energy setback during work hours"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "30-Year-Old Manual Dial Thermostat",
      "price": "$0 Upfront",
      "location": "Living Room Wall",
      "specs": "Mechanical Bimetal Coil • Inaccurate +/- 3°C Drift",
      "features": [
        "Zero upfront hardware expense",
        "People constantly forget to adjust it, wasting hundreds of dollars heating an empty home all day",
        "Bimetal mechanical coil has severe temperature inaccuracy, causing furnace short-cycling and discomfort",
        "Cannot be controlled remotely if you leave on vacation or experience sudden freezing blizzards"
      ]
    },
    "persuasionGuidance": [
      "Explain that human error means people constantly forget to turn down manual dials, wasting $300+ annually on energy bills.",
      "Highlight the smart thermostat's automated schedule learning, remote smartphone control, and $75 utility rebate.",
      "Show that even an $85 digital programmable unit pays for itself within weeks while keeping bedrooms comfortable."
    ]
  },
  {
    "id": "t5_069",
    "title": "Noise-Cancelling Headphones",
    "category": "Electronics & Appliances",
    "context": "You and your colleague Tyler need high-quality headphones to focus in your noisy open-plan office and during flights.",
    "targetAudience": "Your colleague, Tyler",
    "partnerChoiceName": "Cheap Disposable Wired Earbuds",
    "partnerRationale": "Tyler thinks buying $15 gas station wired earbuds is fine because if you lose them, it doesn't matter.",
    "optionA": {
      "id": "opt_a",
      "name": "Premium Wireless Over-Ear Active Noise-Cancelling (ANC) Headphones",
      "price": "$349 (Includes Hard Travel Case & Airplane Adapter)",
      "location": "Audio Specialty Store",
      "specs": "Adaptive ANC • 30-Hour Battery • Memory Foam Ear Cushions",
      "features": [
        "Industry-leading active noise cancellation completely silences airplane engine roar and noisy office chatter",
        "Plush memory foam earcups and lightweight headband allow 8+ hours of fatigue-free all-day comfort",
        "Multi-point Bluetooth connectivity pairs seamlessly to both your laptop and smartphone simultaneously",
        "Crystal-clear beamforming microphone array isolates your voice during zoom calls while filtering out office noise"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Compact True Wireless ANC Earbuds with Wireless Charging Case",
      "price": "$199 (Includes 4 Sizes of Silicone Tips & Wireless Case)",
      "location": "Electronics Retailer",
      "specs": "Active Noise Cancellation • Transparency Mode • 28h Battery with Case",
      "features": [
        "Ultra-compact pocketable charging case fits into any pocket for daily commuting, workouts, and travel",
        "Transparency mode lets you hear conversations and train announcements instantly with a simple tap",
        "IPX4 sweat and water resistance makes them ideal for gym workouts and outdoor running in the rain",
        "Fast wireless charging case delivers 1 hour of listening time from just a 5-minute charge"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cheap Disposable $15 Wired Earbuds",
      "price": "$15 / pair (Replaced 4 times a year)",
      "location": "Gas Station Convenience Counter",
      "specs": "Tangled Wire • Zero Noise Cancellation • Thin Plastic",
      "features": [
        "Cheap initial price and low concern if lost",
        "Zero active noise cancellation, forcing you to crank up volume to dangerous levels to drown out office noise",
        "Tangled cables constantly snag on desk chairs, and cheap plastic tips hurt ears after 20 minutes",
        "Tinny, muffled audio quality and terrible microphone that makes you sound inaudible on client conference calls"
      ]
    },
    "persuasionGuidance": [
      "Point out that cheap earbuds have zero noise cancellation, causing severe ear fatigue and hearing damage at high volumes.",
      "Highlight the game-changing focus provided by premium ANC headphones in noisy offices and airplanes.",
      "Show that multi-point Bluetooth and beamforming microphones make you sound professional on executive conference calls."
    ]
  },
  {
    "id": "t5_070",
    "title": "Home Backup Power Solution",
    "category": "Electronics & Appliances",
    "context": "You and your spouse are preparing your home for winter ice storms and potential multi-day power grid outages.",
    "targetAudience": "Your spouse, Brian",
    "partnerChoiceName": "Box of Wax Candles & Battery Flashlights",
    "partnerRationale": "Brian thinks keeping a box of wax candles and two flashlights in the basement is sufficient emergency preparedness.",
    "optionA": {
      "id": "opt_a",
      "name": "Quiet Dual-Fuel Portable Inverter Generator (3,500W)",
      "price": "$850 (Runs on Gasoline or Propane • Electric Start)",
      "location": "Home Power Equipment Depot",
      "specs": "3,500 Starting Watts / 3,000 Running Watts • Clean Inverter Power",
      "features": [
        "Powers essential household circuits: refrigerator/freezer, gas furnace blower, sump pump, and Wi-Fi router",
        "Dual-fuel versatility allows running on clean, non-perishable propane tanks stored safely in the garage",
        "Whisper-quiet inverter technology produces clean sine-wave electricity safe for sensitive laptops and phones",
        "Electric push-button start ensures effortless operation even in sub-zero winter blizzard conditions"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Smart Portable Lithium Battery Power Station (2,048Wh)",
      "price": "$1,499 (Expandable • 2,200W Pure Sine AC Inverter)",
      "location": "Renewable Energy Tech Retailer",
      "specs": "2,048Wh LiFePO4 Battery • Zero Fumes / Indoor Safe • 3,500+ Cycles",
      "features": [
        "100% emission-free and silent operation allows keeping the power station directly inside your living room",
        "Runs medical CPAP machines, home Wi-Fi, laptops, lighting, and full-size refrigerators during blackouts",
        "Long-lasting LiFePO4 battery chemistry maintains health for 10+ years of daily reliable use",
        "Recharges from standard AC wall outlets in 90 minutes or via portable solar panels during emergencies"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Box of Wax Candles & Flashlights",
      "price": "$25 Total",
      "location": "Basement Shelf",
      "specs": "Wax Candles • 2 Flashlights with AA Batteries",
      "features": [
        "Extremely low cost and simple to store",
        "Open candle flames pose a severe household fire hazard in dark, stressful blackout conditions",
        "Cannot power your home furnace, leaving your family freezing in sub-zero Canadian winter temperatures",
        "Food in the refrigerator and freezer will spoil ($400+ loss), and basement sump pump will fail and flood"
      ]
    },
    "persuasionGuidance": [
      "Emphasize the severe danger of freezing temperatures during winter blackouts: candles cannot run the home furnace.",
      "Point out that food spoilage in the freezer and a flooded basement sump pump will cost thousands of dollars in damages.",
      "Highlight the peace of mind and reliability of a dual-fuel inverter generator or indoor-safe lithium battery station."
    ]
  },
  {
    "id": "t5_071",
    "title": "Wedding Reception Venue",
    "category": "Milestones & Celebrations",
    "context": "You and your fiancé Maya are choosing a wedding reception venue to host 90 family members and friends.",
    "targetAudience": "Your fiancé, Maya",
    "partnerChoiceName": "Vegas Drive-Thru Quick Chapel",
    "partnerRationale": "Maya is feeling stressed by wedding planning and suggests flying to Las Vegas for an express drive-thru chapel wedding.",
    "optionA": {
      "id": "opt_a",
      "name": "Historic Niagara Vineyard Estate & Covered Pavilion",
      "price": "$9,500 Venue Rental (Includes Tables, Chairs & Bridal Suite)",
      "location": "Niagara-on-the-Lake Wine Country",
      "specs": "Scenic Vineyard Lawn Ceremony + Timber-Frame Covered Pavilion",
      "features": [
        "Breathtaking natural vineyard backdrop for timeless, stunning wedding photography",
        "Includes bridal dressing suite, rustic harvest tables, cross-back chairs, and outdoor firepits",
        "Weather-protected timber-frame pavilion ensures a gorgeous celebration rain or shine",
        "Allows custom catering and local VQA wine pairings tailored to your exact tastes"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Downtown Boutique Heritage Hotel Ballroom",
      "price": "$8,200 All-Inclusive Package ($90 / person dinner included)",
      "location": "Downtown Arts & Heritage District",
      "specs": "Victorian Ballroom • Plated 3-Course Dinner • Bridal Suite Included",
      "features": [
        "Complete turnkey package: venue, gourmet 3-course plated meal, linens, and bar service all handled",
        "Convenient central location with guest hotel rooms upstairs and valet parking for out-of-town elders",
        "Grand architectural details: crystal chandeliers, original hardwood floors, and ornate fireplaces",
        "Dedicated on-site professional wedding coordinator ensures flawless timeline execution"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Las Vegas Drive-Thru Express Chapel",
      "price": "$500 Base (+ $2,500 travel for two)",
      "location": "Las Vegas Commercial Strip",
      "specs": "15-Minute Ceremony in Car • No Guests",
      "features": [
        "Fast, cheap, and eliminates all local planning stress",
        "Excludes grandparents, parents, siblings, and lifelong friends from sharing your once-in-a-lifetime milestone",
        "Cheap novelty atmosphere that feels tacky and lacking in emotional romance and significance",
        "High risk of lifelong regret for not celebrating properly with beloved family"
      ]
    },
    "persuasionGuidance": [
      "Acknowledge planning stress, but emphasize that a wedding is a rare life milestone to celebrate with loved ones.",
      "Highlight the breathtaking beauty of the vineyard estate or the stress-free all-inclusive heritage hotel package.",
      "Point out that eloping in a Vegas drive-thru will deeply hurt family relationships and lead to future regret."
    ]
  },
  {
    "id": "t5_072",
    "title": "50th Birthday Celebration",
    "category": "Milestones & Celebrations",
    "context": "You and your sibling David are planning a memorable 50th birthday celebration for your mother.",
    "targetAudience": "Your sibling, David",
    "partnerChoiceName": "Crowded Friday Night Karaoke Bar",
    "partnerRationale": "David wants to book a table at a crowded downtown karaoke bar with loud pop music and flashing strobe lights.",
    "optionA": {
      "id": "opt_a",
      "name": "Private Lakeside Cottage Weekend with Extended Family",
      "price": "$1,400 Total ($350 each split 4 ways)",
      "location": "Muskoka Lakefront Lodge (2-hour drive)",
      "specs": "3-Day Weekend • 5 Bedrooms • Private Dock & Firepit",
      "features": [
        "Brings children, grandchildren, and close relatives together under one roof for a peaceful family reunion",
        "Enjoy home-cooked family dinners, lakeside sunset wine, boat rides, and cozy evening campfires",
        "Relaxing, intimate setting where Mom can truly converse with everyone without shouting over noise",
        "Creates lasting multi-generational photo memories in a beautiful natural Canadian setting"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private Dining Room at Renowned Italian Trattoria",
      "price": "$1,100 Total ($75 / person for 14 guests)",
      "location": "Historic Italian Heritage District",
      "specs": "Private Wine Cellar Dining Room • 4-Course Chef Menu",
      "features": [
        "Elegant private room adorned with vintage wine bottles and dedicated waitstaff",
        "Four-course customized Italian menu with handmade pasta, osso buco, and Mom's favorite tiramisu",
        "Zero cooking, dishwashing, or cleanup required for family members",
        "Quiet acoustic atmosphere allowing heartfelt speeches, toasts, and gift giving"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Crowded Downtown Karaoke Bar",
      "price": "$600 Total (Table reservation & drinks)",
      "location": "Busy Entertainment Strip",
      "specs": "Public noisy room • Flashing strobe lights",
      "features": [
        "High energy and cheap drinks for young crowds",
        "Deafening music volume makes normal conversation impossible for Mom and older relatives",
        "Noisy bar patrons and sticky floors create an unrefined atmosphere unsuited for a 50th milestone",
        "Mom will feel overwhelmed, exhausted, and unable to connect meaningfully with her guests"
      ]
    },
    "persuasionGuidance": [
      "Explain that Mom's 50th birthday calls for warmth, heartfelt conversation, and family connection, not loud bar noise.",
      "Highlight the intimate charm and multi-generational bonding of a private lakeside cottage weekend.",
      "Show that a private wine-cellar dinner at an Italian trattoria provides delicious food, elegance, and easy toasts."
    ]
  },
  {
    "id": "t5_073",
    "title": "Colleague Retirement Gift",
    "category": "Milestones & Celebrations",
    "context": "You and your colleague Rachel are choosing a retirement gift for Arthur, a beloved senior engineer retiring after 35 years.",
    "targetAudience": "Your colleague, Rachel",
    "partnerChoiceName": "Cheap Novelty 'Officially Retired' Joke Mug",
    "partnerRationale": "Rachel suggests buying a $15 funny joke mug and a pair of fuzzy slippers to be funny and save money.",
    "optionA": {
      "id": "opt_a",
      "name": "Personalized Engraved Swiss Watch & Bound Memory Book",
      "price": "$650 Total ($25 contributed by each of 26 team members)",
      "location": "Fine Jeweler & Custom Bookbinder",
      "specs": "Automatic Swiss Movement • Caseback Engraving • Hardcover Album",
      "features": [
        "Timeless, dignified heirloom gift honoring 35 years of exceptional engineering dedication and mentorship",
        "Back of watch is custom-engraved with Arthur's name, start year, and retirement date",
        "Accompanied by a leather-bound album filled with handwritten messages and project photos from colleagues",
        "A prestigious token of appreciation Arthur will proudly wear and cherish for the rest of his life"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Luxury Weekend Fairmont Golf & Spa Resort Getaway",
      "price": "$700 Total (Gift Certificate for 2 Nights + Spa/Golf Credit)",
      "location": "Fairmont Chateau Whistler / Mont-Tremblant",
      "specs": "2 Nights Luxury Suite • $200 Resort Dining & Golf/Spa Voucher",
      "features": [
        "Celebrates Arthur and his wife with an unforgettable luxury holiday to kick off their retirement",
        "Allows Arthur to play championship golf while his wife enjoys world-class mineral spa treatments",
        "Flexible travel dates valid for up to two full years with zero blackout restrictions",
        "Directly supports a healthy, joyful, and relaxing transition into retired life"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Novelty Joke Mug & Fuzzy Slippers",
      "price": "$25 Total",
      "location": "Novelty Dollar Store",
      "specs": "Printed ceramic mug • Acrylic slippers",
      "features": [
        "Very cheap and takes zero effort to purchase",
        "Feels tacky, thoughtless, and disrespectful after 35 years of loyal service and leadership",
        "Cheap novelty items end up forgotten in kitchen cabinets or thrown into the trash",
        "Leaves Arthur feeling that his life's work was trivialized and undervalued by his colleagues"
      ]
    },
    "persuasionGuidance": [
      "Point out that 35 years of loyal engineering leadership deserves a dignified, meaningful tribute, not a cheap joke.",
      "Highlight the lasting emotional value of an engraved Swiss watch accompanied by a personalized memory album.",
      "Show that pooling $25 across 26 coworkers easily funds a premier Fairmont resort getaway or heirloom timepiece."
    ]
  },
  {
    "id": "t5_074",
    "title": "Baby Shower Gathering",
    "category": "Milestones & Celebrations",
    "context": "You and your friend Jessica are organizing a baby shower for your close mutual friend Sarah, who is expecting her first baby.",
    "targetAudience": "Your friend, Jessica",
    "partnerChoiceName": "Loud Sports Bar During Football Sunday",
    "partnerRationale": "Jessica wants to reserve a table at a local sports bar because they have chicken wings and big TV screens.",
    "optionA": {
      "id": "opt_a",
      "name": "Elegant Garden Tea Room with High Tea & Pastries",
      "price": "$42 / person ($630 for 15 guests)",
      "location": "Victorian Conservatory Tea Room",
      "specs": "Private Glass Solarium • Artisan High Tea Tower • Floral Decor",
      "features": [
        "Delightful tiered towers with cucumber sandwiches, fresh scones, clotted cream, and macarons",
        "Sunlit glass solarium filled with blooming orchids and floral arrangements creating beautiful photo backdrops",
        "Quiet, gentle ambiance ideal for conversation, opening baby gifts, and playing traditional shower games",
        "Includes complimentary non-alcoholic sparkling fruit punch toast and specialty herbal teas for the mom-to-be"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Casual Catered Backyard Garden Party",
      "price": "$380 Total ($250 artisan catering + $130 floral decor)",
      "location": "Host's Private Backyard & Patio",
      "specs": "Outdoor Garden Patio • Finger Food Platters • Mocktail Bar",
      "features": [
        "Warm, relaxed, and intimate home setting where guests can stay and chat without restaurant time limits",
        "Gourmet catered charcuterie boards, quiches, mini pastries, and an interactive 'Mom-osa' mocktail station",
        "Easy access to home living room in case of unexpected rain, with plenty of room to pile baby gifts",
        "Budget-friendly approach allows allocating more pooled funds toward a high-end stroller gift for Sarah"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Loud Sports Bar During Football Game",
      "price": "$35 / person",
      "location": "Commercial Sports Bar",
      "specs": "Sticky Booths • 20 Blaring TV Screens • Smelling of Beer",
      "features": [
        "Convenient pub food and easy beer availability for drinkers",
        "Blaring commentary and shouting sports fans make opening gifts and heartfelt conversation impossible",
        "Strong smell of stale beer and fried food is unpleasant and nauseating for a pregnant woman",
        "Completely inappropriate venue for welcoming a newborn baby and celebrating motherhood"
      ]
    },
    "persuasionGuidance": [
      "Explain that a loud sports bar smelling of beer and shouting fans is completely wrong for a pregnant mom-to-be.",
      "Highlight the refined beauty and relaxing atmosphere of the Victorian tea room with high tea and macarons.",
      "Alternatively, show how a cozy catered backyard garden party offers warmth, intimacy, and great budget savings."
    ]
  },
  {
    "id": "t5_075",
    "title": "Graduation Celebration Party",
    "category": "Milestones & Celebrations",
    "context": "You and your spouse are organizing a graduation celebration for your daughter Emily graduating with honors from university.",
    "targetAudience": "Your spouse, Karen",
    "partnerChoiceName": "Quick Fast-Food Burger Drive-Thru",
    "partnerRationale": "Karen suggests just grabbing burgers at a fast-food drive-thru on the way home from convocation to save time.",
    "optionA": {
      "id": "opt_a",
      "name": "Outdoor Tented Garden Party with BBQ & Live Acoustic Duo",
      "price": "$750 Total (Tented Canopy, Gourmet BBQ Catering & Lawn Games)",
      "location": "Home Backyard & Garden Lawn",
      "specs": "20x20 ft White Canopy • Catered Smoked BBQ • Live Musician",
      "features": [
        "Allows Emily to invite her university professors, classmates, family, and neighborhood friends together",
        "Delicious catered pulled pork, grilled chicken, fresh salads, and a custom graduation congratulatory cake",
        "Beautiful canopy tent protects against sun or rain, with string lights and acoustic guitar setting a festive mood",
        "Spacious lawn allows yard games (cornhole, bocce) and provides an unhurried, joyful evening of celebration"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Private Dining Room at Waterfront Seafood Bistro",
      "price": "$650 Total ($50 / person for 13 close family members)",
      "location": "Harbourfront Marina Dining Room",
      "specs": "Private Oceanview Room • 3-Course Dinner • Sunset Views",
      "features": [
        "Stunning waterfront marina views offering a sophisticated dining experience to honor her academic degree",
        "Fresh Atlantic salmon, prime rib, artisan desserts, and celebratory champagne toast included",
        "Zero cooking, food prep, or cleanup required for parents, allowing everyone to relax and celebrate Emily",
        "Intimate setting perfect for parents and grandparents to give emotional congratulatory speeches"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Quick Fast-Food Burger Drive-Thru",
      "price": "$45 Total",
      "location": "Car Seat in Drive-Thru Parking Lot",
      "specs": "Paper bags • Fast-food burgers • Eaten in car",
      "features": [
        "Extremely cheap and takes only 10 minutes",
        "Deeply disappointing and dismissive after 4 grueling years of intense university study and sacrifice",
        "Cannot include grandparents or extended family who traveled long distances for convocation",
        "Destroys the joy and pride of graduating with honors with an unmemorable fast-food meal"
      ]
    },
    "persuasionGuidance": [
      "Point out that graduating with university honors represents 4 years of hard work and deserves real celebration.",
      "Highlight the joy of a backyard tented barbecue where classmates and extended family can mingle and toast Emily.",
      "Show that a waterfront seafood dinner provides elegance, heartfelt speeches, and unforgettable family memories."
    ]
  },
  {
    "id": "t5_076",
    "title": "Golden Wedding Anniversary (50th)",
    "category": "Milestones & Celebrations",
    "context": "You and your siblings are planning a 50th Golden Wedding Anniversary celebration for your parents.",
    "targetAudience": "Your sibling, Steven",
    "partnerChoiceName": "No Celebration Just a Group Phone Call",
    "partnerRationale": "Steven thinks everyone is too busy with work and suggests we just do a quick 10-minute group phone call on the day.",
    "optionA": {
      "id": "opt_a",
      "name": "All-Family Canadian Maritimes Summer Reunion Cruise",
      "price": "$2,800 Total (Split 4 ways among adult siblings = $700 each)",
      "location": "St. Lawrence Seaway & Maritimes Coastal Route",
      "specs": "5-Day Cruise • Parents in Balcony Suite • 14 Family Members",
      "features": [
        "Unforgettable once-in-a-lifetime family voyage celebrating 50 years of marriage across generations",
        "Parents are treated like royalty in an oceanview balcony suite with fine dining every evening",
        "Includes guided family excursions to historic coastal landmarks in Halifax, PEI, and Quebec",
        "Creates priceless family photographs and memories with grandchildren that will be cherished forever"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Golden Gala Banquet with Archival Photo Slideshow & Band",
      "price": "$2,200 Total (Split 4 ways = $550 each for 45 guests)",
      "location": "Historic Community Banquet Hall",
      "specs": "Catered 3-Course Banquet • Archival Video Documentary • Live Band",
      "features": [
        "Gathers their lifelong friends, wedding party attendants, neighbors, and extended family in one room",
        "Professional multimedia slideshow chronicling their 50-year love story, children's births, and milestones",
        "Live band plays their original 1970s wedding first-dance song for a magical emotional moment",
        "Gold-themed elegant decor, champagne toast, and commemorative guestbook for heartfelt tributes"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Brief 10-Minute Group Phone Call",
      "price": "$0 Upfront",
      "location": "Telephone Line",
      "specs": "10-minute call • No physical gathering",
      "features": [
        "Requires zero travel, zero financial contribution, and zero planning",
        "Heartbreakingly cold and dismissive for parents who devoted 50 years to building this family",
        "50th anniversaries are extremely rare milestones that only happen once in a lifetime",
        "Will cause deep emotional sadness and disappointment for your aging parents"
      ]
    },
    "persuasionGuidance": [
      "Emphasize that reaching a 50th wedding anniversary is a rare, monumental lifetime milestone deserving deep honor.",
      "Show that a quick phone call is heartbreakingly cold and will deeply hurt aging parents.",
      "Highlight the incredible joy of an all-family Maritime cruise or a golden gala banquet with their lifelong friends."
    ]
  },
  {
    "id": "t5_077",
    "title": "Child's 7th Birthday Party",
    "category": "Milestones & Celebrations",
    "context": "You and your spouse are planning a 7th birthday party for your energetic son Leo and 12 of his school friends.",
    "targetAudience": "Your spouse, Martin",
    "partnerChoiceName": "Unsupervised Backyard Sugar Candy Free-For-All",
    "partnerRationale": "Martin thinks buying $30 of candy and letting 12 children run wild in the backyard for 3 hours is the easiest plan.",
    "optionA": {
      "id": "opt_a",
      "name": "Interactive Science Discovery Center Lab & Liquid Nitrogen Show",
      "price": "$320 Total (Includes Party Room, Educator & Free Museum Passes)",
      "location": "Regional Science & Discovery Center",
      "specs": "90-Min Hands-On Science Workshop + Private Party Lunch Room",
      "features": [
        "Engaging live scientist performs spectacular bubbling volcano and liquid nitrogen ice cream experiments",
        "Every child builds and launches their own air-powered rocket to take home as a memorable party favor",
        "Includes a private decorated party room for birthday cake, pizza, and presents with zero home mess",
        "All 12 children receive complimentary all-day general admission passes to explore the science center"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Indoor Trampoline & Ninja Obstacle Adventure Park",
      "price": "$295 Total (Includes Grip Socks, Pizza, Drinks & Host)",
      "location": "Local Extreme Air Park (8 min away)",
      "specs": "2 Hours Jump Time • Foam Pits, Dodgeball & Ninja Course",
      "features": [
        "High-energy bouncing, slam-dunk basketball hoops, and foam pit obstacle courses burn boundless energy",
        "Dedicated party host manages the entire event, supervises safety, serves pizza, and handles cleanup",
        "Guaranteed to leave all the children happily exhausted and smiling after 2 hours of active play",
        "Indoor climate-controlled facility eliminates all weather worries about rain or excessive heat"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Unsupervised Backyard Candy Chaos",
      "price": "$50 Total",
      "location": "Home Backyard",
      "specs": "No structured games • High sugar intake",
      "features": [
        "Low cost and no booking required",
        "12 unsupervised 7-year-olds on sugar will fight, track mud into the house, and break garden furniture",
        "High risk of injury from rough unsupervised play without structured safety rules",
        "Parents of school friends will be shocked and uncomfortable with the lack of supervision and organization"
      ]
    },
    "persuasionGuidance": [
      "Point out that 12 unsupervised 7-year-olds will cause chaos, backyard damage, and potential injuries.",
      "Highlight the structured educational fun and take-home rockets of the Science Center party room.",
      "Alternatively, show how the indoor trampoline park provides safe, host-supervised active fun with zero home cleanup."
    ]
  },
  {
    "id": "t5_078",
    "title": "New Year's Eve Celebration",
    "category": "Milestones & Celebrations",
    "context": "You and your close friend circle are deciding how to ring in the New Year together on December 31st.",
    "targetAudience": "Your friend, Natalie",
    "partnerChoiceName": "Freezing in a Crowded Downtown Public Square for 5 Hours",
    "partnerRationale": "Natalie wants to stand outside in the packed city square from 7:00 PM to midnight in sub-zero freezing weather to watch the ball drop.",
    "optionA": {
      "id": "opt_a",
      "name": "Cozy Swiss Cheese Fondue & Board Game Gala at Home",
      "price": "$45 / person ($180 total split 4 ways for artisan cheese & wine)",
      "location": "Host's Warm Living Room & Fireplace",
      "specs": "Gourmet Swiss Fondue + Top Board Games + Champagne at Midnight",
      "features": [
        "Indulge in rich bubbling Gruyère and chocolate fondues with artisan bread, apples, and premium wines",
        "Warm, comfortable atmosphere with a crackling fireplace, favorite music playlists, and hilarious party games",
        "Zero freezing in winter blizzards, zero long portable toilet lineups, and zero crowded subway hassles",
        "Watch the official New Year's countdown and fireworks on high-definition TV with midnight champagne toasts"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Downtown Jazz Lounge Dinner & Midnight Balloon Drop",
      "price": "$120 / person (Includes 3-Course Dinner, Live Band & Champagne)",
      "location": "Historic Downtown Jazz & Supper Club",
      "specs": "Plated Dinner • Live 7-Piece Swing Jazz Band • Midnight Balloon Drop",
      "features": [
        "Sophisticated vintage atmosphere with velvet booths, candlelight, and world-class live jazz musicians",
        "Gourmet 3-course plated culinary dinner with wine pairings and celebratory midnight champagne flutes",
        "Lively dance floor to dance into the New Year in stylish cocktail attire",
        "Guaranteed indoor reserved table for the entire evening with attentive table service"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Freezing Outside in Public Square for 5 Hours",
      "price": "$0 Base (+ $80 surge Uber ride home)",
      "location": "City Hall Public Square",
      "specs": "Standing in sub-zero -15°C cold • No seats • 50,000 crowd",
      "features": [
        "Free public fireworks show at midnight",
        "Standing stationary for 5 hours in freezing -15°C Canadian winter temperatures leads to severe numbness and misery",
        "Massive crowd crushes, 45-minute lineups for filthy portable toilets, and no alcohol or food allowed",
        "Impossible to find a taxi or Uber afterward, with 4x surge pricing and subway station lockdowns"
      ]
    },
    "persuasionGuidance": [
      "Highlight the physical misery of standing for 5 hours in freezing -15°C Canadian winter weather with no seats.",
      "Contrast the warm luxury and hilarious fun of a home fondue and board game night with close friends.",
      "Show that a jazz supper club offers sophisticated live music, gourmet dining, and a warm midnight dance floor."
    ]
  },
  {
    "id": "t5_079",
    "title": "Engagement Party Concept",
    "category": "Milestones & Celebrations",
    "context": "You and your fiancé are planning an engagement party to announce your upcoming wedding to 40 close friends and relatives.",
    "targetAudience": "Your fiancé, Julian",
    "partnerChoiceName": "Stuffy Formal Conference Room at an Office",
    "partnerRationale": "Julian suggests renting a cheap corporate meeting boardroom on a Saturday morning because his employer gives a discount.",
    "optionA": {
      "id": "opt_a",
      "name": "Rooftop Sunset Lounge Reception with Passed Canapés",
      "price": "$1,400 Total ($35 / person for 40 guests)",
      "location": "Downtown Boutique Hotel Rooftop Patio",
      "specs": "Private Rooftop Terrace • Passed Gourmet Sliders & Canapés • Sunset Views",
      "features": [
        "Panoramic city skyline views at golden hour sunset create a chic, celebratory romantic atmosphere",
        "Attentive waitstaff circulate with gourmet hot and cold canapés, sliders, and sparkling Prosecco flutes",
        "Modern lounge seating, fire tables, and ambient background house music foster easy guest mingling",
        "Central downtown location makes it easy for friends to continue celebrating at nearby nightlife spots"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Lakeside Park Pavilion Sunset Wine & Artisan Charcuterie Picnic",
      "price": "$650 Total (Pavilion Permit, Artisan Grazing Tables & Wine)",
      "location": "Waterfront Provincial Park Pavilion",
      "specs": "Reserved Covered Pavilion • Giant Artisan Grazing Board • Lawn Games",
      "features": [
        "Casual, joyful celebration by the sparkling water with string lights and rustic floral decor",
        "Stunning 10-foot grazing table overflowing with local artisan cheeses, cured meats, fruits, and pastries",
        "Relaxed atmosphere where friends and extended family can play lawn bocce and mingle naturally",
        "Significantly lower cost allows saving an extra $800 directly toward our wedding photography budget"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Corporate Office Boardroom Meeting Room",
      "price": "$150 Discounted Rental",
      "location": "Commercial Office Tower",
      "specs": "Fluorescent Office Lighting • Conference Table • Office Chairs",
      "features": [
        "Very cheap room rental cost",
        "Harsh fluorescent lighting, swivel office chairs, and whiteboard walls create a sterile corporate vibe",
        "Feels like an uninspired Monday quarterly sales meeting rather than a joyful celebration of love",
        "Guests will feel awkward and constrained in a corporate office building on a weekend"
      ]
    },
    "persuasionGuidance": [
      "Explain that a sterile corporate boardroom with fluorescent lights completely ruins the romance of an engagement.",
      "Highlight the chic, memorable elegance of a sunset rooftop cocktail reception with panoramic skyline views.",
      "Alternatively, show how a lakeside grazing picnic provides fresh air, beauty, and great budget savings."
    ]
  },
  {
    "id": "t5_080",
    "title": "Housewarming Gift for New Homeowners",
    "category": "Milestones & Celebrations",
    "context": "You and your friend Zoe are choosing a thoughtful housewarming gift for your close friends who just purchased their first home.",
    "targetAudience": "Your friend, Zoe",
    "partnerChoiceName": "Cheap Plastic Tool Set from Dollar Store",
    "partnerRationale": "Zoe wants to buy a cheap $15 plastic hammer and screwdriver set from a discount store because all homeowners need tools.",
    "optionA": {
      "id": "opt_a",
      "name": "Custom Hardwood Charcuterie Board with Local Artisan Goods",
      "price": "$120 Total ($60 each split between you and Zoe)",
      "location": "Local Woodworking Artisan & Gourmet Market",
      "specs": "Solid Canadian Walnut • Laser-Engraved Family Name • Local Cheeses & Wine",
      "features": [
        "Handcrafted from sustainably sourced solid Canadian walnut with food-safe beeswax finish",
        "Laser-engraved with the friends' family name and their new home move-in year as a keepsake",
        "Comes bundled with artisan local Niagara wine, specialty cheeses, preserves, and gourmet crackers",
        "A beautiful, functional entertaining centerpiece they will proudly display in their new kitchen for decades"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Pair of Large Air-Purifying Indoor Plants in Ceramic Planters",
      "price": "$95 Total (Two 3-Foot Plants + Ceramic Pots + Saucers)",
      "location": "Local Botanical Nursery",
      "specs": "Fiddle Leaf Fig & Snake Plant • 10\" Glazed Ceramic Pots",
      "features": [
        "Instantly breathes vibrant natural life, greenery, and warmth into their bare, newly painted rooms",
        "Snake plants are scientifically proven by NASA to filter indoor toxins and produce fresh nighttime oxygen",
        "Includes stylish modern glazed ceramic planters with drainage trays that match any interior home decor",
        "Extremely hardy and easy to care for, thriving even for beginner plant owners with minimal watering"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cheap Discount Plastic Tool Kit",
      "price": "$15 Total",
      "location": "Discount Dollar Counter",
      "specs": "Flimsy Plastic Handles • Soft Metal Screwdrivers",
      "features": [
        "Very cheap upfront price",
        "Flimsy tools made of soft pot metal that strip screws and break upon first use",
        "Most new homeowners already possess basic tools or receive professional power tools from parents",
        "Feels thoughtless, cheap, and lacks any personal warmth or decorative beauty for their new home"
      ]
    },
    "persuasionGuidance": [
      "Point out that cheap dollar-store tools break instantly and look thoughtless as a milestone housewarming gift.",
      "Highlight the heirloom beauty and personal touch of an engraved Canadian walnut charcuterie board with wine.",
      "Show that lush air-purifying indoor plants in modern ceramic pots instantly make a new house feel like a warm home."
    ]
  },
  {
    "id": "t5_081",
    "title": "Home Heating System Upgrade",
    "category": "Home Improvement",
    "context": "You and your HVAC contractor Steve are deciding on a replacement heating system for your 2,200 sq. ft. detached home.",
    "targetAudience": "Your contractor, Steve",
    "partnerChoiceName": "Keeping Old Electric Baseboard Heaters",
    "partnerRationale": "Steve mentions that keeping the existing electric baseboard heaters has zero upfront replacement installation cost.",
    "optionA": {
      "id": "opt_a",
      "name": "Cold-Climate Central Inverter Heat Pump",
      "price": "$8,500 ($5,000 Federal Green Homes Rebate = $3,500 Net)",
      "location": "Central Ducted System (Whole-Home Comfort)",
      "specs": "Up to -30°C Operation • 20 SEER2 Efficiency • Dual Heating & AC",
      "features": [
        "Provides both ultra-efficient central winter heating and whisper-quiet summer central air conditioning in one unit",
        "Cuts monthly winter electricity bills by over 60% compared to inefficient electric resistance baseboards",
        "Qualifies for up to $5,000 in federal and provincial clean energy grants and interest-free loans",
        "Significantly reduces household carbon footprint while providing even, draft-free room temperatures"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "98% AFUE Modulating High-Efficiency Gas Furnace",
      "price": "$5,200 Fully Installed (Includes 10-Year Parts & Labor Warranty)",
      "location": "Basement Utility Room (Connects to Existing Ductwork)",
      "specs": "98% Efficiency • Variable-Speed ECM Blower • Modulating Gas Burner",
      "features": [
        "Provides powerful, instant scorching heat during severe -35°C Canadian polar vortex cold snaps",
        "Variable-speed ECM motor circulates air continuously at ultra-low electrical wattage for quiet comfort",
        "Proven 20-year lifespan with cheap, widely available replacement parts and low repair costs",
        "High reliability ensuring the home never freezes even during the harshest winter blizzards"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Keeping Old Electric Baseboard Heaters",
      "price": "$0 Upfront (+ $600/month winter electric bills)",
      "location": "Along Baseboards in Every Room",
      "specs": "100% Resistance Heat • No Air Conditioning • Hot Metal Fins",
      "features": [
        "Zero upfront contractor installation cost today",
        "Astronomical winter electricity bills ($600–$800/month) that waste thousands of dollars every winter",
        "Hot metal fins pose a severe burn hazard for young children and restrict furniture placement against walls",
        "Provides zero summer cooling, requiring loud, inefficient window air conditioners in July and August"
      ]
    },
    "persuasionGuidance": [
      "Point out that keeping baseboard heaters costs $3,000+ extra every winter, making a new system pay for itself quickly.",
      "Highlight the dual heating and cooling power of a cold-climate heat pump with a $5,000 government rebate.",
      "Alternatively, show how a 98% high-efficiency gas furnace provides powerful, reliable warmth in deep sub-zero winters."
    ]
  },
  {
    "id": "t5_082",
    "title": "Backyard Patio Deck Material",
    "category": "Home Improvement",
    "context": "You and your partner Alex are choosing materials to build a new 400 sq. ft. outdoor backyard deck for summer entertaining.",
    "targetAudience": "Your partner, Alex",
    "partnerChoiceName": "Basic Poured Concrete Slab",
    "partnerRationale": "Alex wants to pour a basic grey concrete slab because it is the cheapest upfront option and dries quickly.",
    "optionA": {
      "id": "opt_a",
      "name": "Capped Composite Decking with Hidden Fasteners",
      "price": "$7,800 Materials ($35 / sq. ft. • 25-Year Stain & Fade Warranty)",
      "location": "Backyard Patio Walkout (Direct Kitchen Access)",
      "specs": "Ultra-Durable Polymer Shell • Hidden Fastener Clips • Woodgrain Texture",
      "features": [
        "100% maintenance-free: never requires annual sanding, power-washing, staining, or toxic chemical sealing",
        "Will never splinter, rot, warp, or crack, making it completely barefoot-safe for children and pets",
        "High resistance to red wine spills, barbecue grease, and UV sun fading backed by a 25-year manufacturer warranty",
        "Hidden clip fastening system leaves a clean, elegant surface free of visible screws or nail holes"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Natural Western Red Cedar Wood Decking",
      "price": "$5,200 Materials ($22 / sq. ft. • Premium Architectural Grade)",
      "location": "Elevated Backyard Garden Walkout",
      "specs": "100% Natural Canadian Cedar • Naturally Insect & Rot Resistant",
      "features": [
        "Authentic natural wood beauty, rich warm grain, and pleasant aromatic cedar scent",
        "Stays noticeably cooler under bare feet in hot direct July sun compared to composite or concrete",
        "Contains natural tannins that naturally resist fungal rot and insect decay without synthetic chemicals",
        "Saves $2,600 on upfront material costs compared to composite decking"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Basic Poured Grey Concrete Slab",
      "price": "$2,800 Total Installation",
      "location": "Flat on ground",
      "specs": "4-inch Grey Poured Concrete • Broom Finish",
      "features": [
        "Lowest initial installation price",
        "Subject to inevitable surface cracking, heaving, and spalling during Canadian winter freeze-thaw cycles",
        "Cold, industrial, and uninviting appearance that fails to add beauty or value to the home",
        "Becomes scalding hot under direct summer sun and extremely slippery when wet around children"
      ]
    },
    "persuasionGuidance": [
      "Explain that basic concrete slabs crack and heave during Canadian freeze-thaw cycles, looking ugly and uninviting.",
      "Highlight the zero-maintenance luxury and 25-year barefoot warranty of capped composite decking.",
      "Alternatively, show how natural Canadian cedar brings warmth, elegance, and great savings to your backyard oasis."
    ]
  },
  {
    "id": "t5_083",
    "title": "Flooring Renovation Material",
    "category": "Home Improvement",
    "context": "You and your spouse Jessica are replacing 1,200 sq. ft. of worn carpet on the main floor of your home.",
    "targetAudience": "Your spouse, Jessica",
    "partnerChoiceName": "High-Gloss Polished Ceramic Porcelain Tile Everywhere",
    "partnerRationale": "Jessica wants to install shiny polished white porcelain tile across the entire living room, dining room, and hallways.",
    "optionA": {
      "id": "opt_a",
      "name": "Engineered White Oak Hardwood Planks (Wide Plank)",
      "price": "$9,600 Installed ($8.00 / sq. ft. • Wire-Brushed Matte Finish)",
      "location": "Main Floor Living, Dining & Hallways",
      "specs": "7.5\" Wide Planks • Multi-Ply Birch Core • UV Urethane Aluminum Oxide",
      "features": [
        "Timeless, warm natural wood aesthetic that dramatically increases the overall market resale value of the home",
        "Engineered multi-ply cross-grain core resists expansion and cupping during humid summers and dry winters",
        "Warm and comfortable under bare feet, providing natural acoustic dampening that eliminates echo in rooms",
        "Wire-brushed matte finish easily hides pet scratches, dust, and daily family foot traffic"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "100% Waterproof Luxury Vinyl Plank (LVP)",
      "price": "$5,400 Installed ($4.50 / sq. ft. • 20-mil Commercial Wear Layer)",
      "location": "Entire Main Floor (Kitchen, Living & Entryway)",
      "specs": "Stone Polymer Composite (SPC) • Attached Acoustic Cork Backing",
      "features": [
        "100% completely waterproof: impervious to melting winter snow boots, pet accidents, and kitchen sink spills",
        "Ultra-tough 20-mil commercial wear layer resists gouges, high heels, and heavy dog claws",
        "Built-in acoustic cork underlayment provides a soft, warm, and quiet walking surface",
        "Saves over $4,200 in renovation budget while delivering an authentic realistic hardwood visual look"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "High-Gloss Polished Ceramic Porcelain Tile Everywhere",
      "price": "$8,400 Installed",
      "location": "Entire Main Floor",
      "specs": "24x24\" Polished Porcelain • High-Gloss Glaze",
      "features": [
        "Scratch resistant and easy to mop clean",
        "Extremely cold and uncomfortable underfoot during 6 months of Canadian winter without expensive subfloor heating",
        "Dangerously slippery when walked on with wet socks or melting snow, creating severe slip-and-fall hazards",
        "Creates harsh acoustic echoes that make the living room feel like a sterile commercial shopping mall"
      ]
    },
    "persuasionGuidance": [
      "Point out that polished high-gloss tile across living rooms is freezing cold in winter, dangerously slippery, and echoes loudly.",
      "Highlight the warm, timeless beauty and high resale value of engineered White Oak hardwood.",
      "Show that 100% waterproof Luxury Vinyl Plank (LVP) handles pets, winter snow, and spills while saving $4,200."
    ]
  },
  {
    "id": "t5_084",
    "title": "Kitchen Countertop Material",
    "category": "Home Improvement",
    "context": "You and your kitchen designer are selecting new countertop slabs for your kitchen island and perimeter counters.",
    "targetAudience": "Your kitchen designer, Mike",
    "partnerChoiceName": "Natural Butcher Block Wood Countertops",
    "partnerRationale": "Mike suggests solid butcher block wood countertops for a trendy rustic farmhouse look at a lower material cost.",
    "optionA": {
      "id": "opt_a",
      "name": "Engineered Quartz Stone Slabs (Calacatta Gold)",
      "price": "$4,200 Fully Fabricated & Installed (Includes Undermount Sink Cutout)",
      "location": "Kitchen Island & Perimeter Counters (55 sq. ft.)",
      "specs": "93% Natural Crushed Quartz & Resin • Non-Porous • Polished Finish",
      "features": [
        "Completely non-porous surface: 100% stain-resistant to red wine, coffee, lemon juice, turmeric, and oils",
        "Never requires annual sealing, mineral oiling, or chemical treatments throughout its entire lifetime",
        "Extremely hygienic and antibacterial surface certified safe for direct raw food and dough preparation",
        "Elegant marble-veined aesthetic delivers luxury high-end appeal with supreme everyday durability"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Natural Polished Granite Slabs",
      "price": "$3,600 Fully Fabricated & Installed (Includes 15-Year Sealer)",
      "location": "Kitchen Island & Cooking Prep Zones",
      "specs": "3cm Solid Natural Igneous Granite • Heat Resistant to 480°C",
      "features": [
        "Unbeatable heat resistance: place boiling pots and hot cast-iron pans directly on the stone without trivets",
        "Every single slab is an authentic, one-of-a-kind natural earth creation with unique mineral veining",
        "Highly resistant to knife scratches, chips, and heavy daily cooking abuse",
        "Saves $600 compared to engineered quartz while providing rock-solid natural permanence"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Natural Butcher Block Wood Countertops",
      "price": "$2,100 Installed",
      "location": "Kitchen Counters",
      "specs": "1.5\" Solid Birch Wood • Oiled Finish",
      "features": [
        "Warm rustic aesthetic and lower initial purchase price",
        "Extremely high maintenance: requires monthly mineral oiling and sanding to prevent cracking and warping",
        "Highly susceptible to permanent water stains and black rot around the kitchen sink and faucet",
        "Porous wood harbors dangerous bacteria from raw chicken and easily burns if hot pans touch it"
      ]
    },
    "persuasionGuidance": [
      "Explain that butcher block wood around kitchen sinks rots, harbors bacteria from raw meat, and stains from water.",
      "Highlight the effortless, zero-maintenance stain resistance and hygiene of engineered Quartz stone.",
      "Show that polished natural Granite allows placing boiling pots directly on the counter without burns or damage."
    ]
  },
  {
    "id": "t5_085",
    "title": "Home Energy Efficiency Project",
    "category": "Home Improvement",
    "context": "You and your spouse are investing in an energy-efficiency renovation to lower monthly utility bills and increase home value.",
    "targetAudience": "Your spouse, David",
    "partnerChoiceName": "Geothermal Ground-Source Heat Loop",
    "partnerRationale": "David wants to drill deep geothermal ground loops in the backyard for $35,000 for ultimate green energy status.",
    "optionA": {
      "id": "opt_a",
      "name": "Rooftop Solar PV System (8.5 kW) with Net Metering",
      "price": "$14,500 ($5,000 Canada Greener Homes Grant = $9,500 Net)",
      "location": "South-Facing Home Roof",
      "specs": "22 Tier-1 Monocrystalline Panels • 8.5 kW Output • 25-Yr Power Warranty",
      "features": [
        "Generates clean solar electricity to offset 90% of your annual hydro electric utility bills",
        "Net-metering sends excess summer power back to the grid for utility bill credits during dark winter months",
        "Backed by a 25-year performance warranty and increases property value with zero increase in property taxes",
        "Eligible for $5,000 in federal grants and a 10-year interest-free federal loan ($40,000 max)"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Triple-Pane Argon Windows & R-60 Attic Insulation Upgrade",
      "price": "$11,200 ($4,000 Window & Insulation Rebates = $7,200 Net)",
      "location": "Entire Home Exterior Envelope & Attic",
      "specs": "Low-E Triple Glazed Vinyl Windows (U-factor 0.18) • Blown-in Cellulose",
      "features": [
        "Stops 40% of home heat loss immediately, eliminating cold winter drafts and hot summer upstairs rooms",
        "Triple-pane acoustic glass creates a serene, whisper-quiet interior by blocking street and traffic noise",
        "Completely eliminates winter window condensation, mold buildup, and drafty air leaks",
        "Fastest payback period of any home energy renovation, immediately lowering both heating and cooling bills"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Geothermal Ground-Source Heat Loop",
      "price": "$35,000 (+ Excavation that destroys entire backyard landscaping)",
      "location": "Deep Underground Boreholes in Yard",
      "specs": "Ground-Source Heat Pump • Vertical Drilled Loops",
      "features": [
        "Highly efficient heating from constant underground earth temperatures",
        "Massive $35,000 upfront cost with a painfully long 22-year financial payback period",
        "Heavy drilling machinery completely destroys existing trees, patio, garden, and grass lawn ($10k to fix)",
        "Complex underground pipe loops are extremely difficult and costly to troubleshoot if leaks develop"
      ]
    },
    "persuasionGuidance": [
      "Point out that geothermal costs $35,000 and destroys the entire backyard landscaping with heavy drilling rigs.",
      "Highlight the high ROI and federal grants for rooftop solar ($9,500 net) that eliminates 90% of electric bills.",
      "Show that triple-pane windows and attic insulation ($7,200 net) immediately eliminate drafts, noise, and heat loss."
    ]
  },
  {
    "id": "t5_086",
    "title": "Front Yard Landscaping Style",
    "category": "Home Improvement",
    "context": "You and your neighbor Frank are redesigning your front yards to improve neighborhood curb appeal and reduce maintenance.",
    "targetAudience": "Your neighbor, Frank",
    "partnerChoiceName": "Plastic Artificial Synthetic Turf Lawn",
    "partnerRationale": "Frank wants to lay bright green plastic artificial turf over the entire front yard so he never has to mow again.",
    "optionA": {
      "id": "opt_a",
      "name": "Drought-Tolerant Native Pollinator Eco-Garden",
      "price": "$2,400 Total (Native Perennials, River Stone, Mulch & Flagstone Walkway)",
      "location": "Front Yard Garden Beds & Natural Stone Pathway",
      "specs": "Native Canadian Perennials • River Stone Borders • Cedar Bark Mulch",
      "features": [
        "Thrives on natural rainfall without wasteful sprinkler watering, cutting municipal water bills",
        "Features vibrant blooming purple coneflowers, black-eyed Susans, and lavender attracting birds and butterflies",
        "Requires zero weekly mowing or chemical fertilizers: simple 1-hour spring pruning keeps it gorgeous",
        "Dramatic natural curb appeal with rustic flagstone pathways that enhance property architecture"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Premium Kentucky Bluegrass Sod with Smart Irrigation System",
      "price": "$2,800 Installed (New Fresh Sod + 4-Zone Smart Sprinklers)",
      "location": "Front Lawn Area",
      "specs": "Grade-A Weed-Free Sod • Weather-Sensing Smart App Sprinklers",
      "features": [
        "Lush, dense emerald green carpet that enhances classic suburban curb appeal and resale value",
        "Smart rain-sensing irrigation system automatically shuts off when rain is forecast to prevent water waste",
        "Natural living grass cools the ambient outdoor air temperature and absorbs rainfall runoff",
        "Soft, organic natural feel underfoot with rich earthy aroma"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Plastic Artificial Synthetic Turf Lawn",
      "price": "$4,500 Installed",
      "location": "Front Yard Surface",
      "specs": "Petroleum-Based Plastic Grass • Rubber Crumb Infill",
      "features": [
        "Never requires mowing or watering",
        "Becomes scorching hot in summer sun (over 60°C), emitting unpleasant hot plastic chemical fumes",
        "Fades, mats down, and collects trapped debris, leaves, and pet odors that must be power-washed and vacuumed",
        "Looks obviously fake, plasticky, and cheap, degrading neighborhood aesthetic and curb appeal"
      ]
    },
    "persuasionGuidance": [
      "Explain that synthetic plastic turf gets scorching hot (60°C), smells of rubber, and looks fake and tacky in front yards.",
      "Highlight the natural beauty, biodiversity, and zero-mowing freedom of a native pollinator eco-garden.",
      "Show that lush Kentucky Bluegrass with smart rain-sensing sprinklers provides classic green curb appeal organically."
    ]
  },
  {
    "id": "t5_087",
    "title": "Kitchen Cabinet Remodel Approach",
    "category": "Home Improvement",
    "context": "You and your spouse are remodeling your outdated 20-year-old oak kitchen cabinets on a $12,000 total kitchen budget.",
    "targetAudience": "Your spouse, Laura",
    "partnerChoiceName": "DIY Paint Rolling Old Cabinets on Weekend",
    "partnerRationale": "Laura suggests buying $150 of latex paint and a roller to paint over the peeling 20-year-old oak cabinets ourselves this weekend.",
    "optionA": {
      "id": "opt_a",
      "name": "Professional Solid Wood Door Refacing & Soft-Close Hardware",
      "price": "$4,800 Fully Installed (Factory Baked-Enamel Finish)",
      "location": "Existing Cabinet Framework",
      "specs": "New Solid Maple Shaker Doors • Soft-Close Hinges • Factory Spray Finish",
      "features": [
        "Keeps existing solid cabinet boxes while installing brand-new custom solid maple Shaker doors and drawer fronts",
        "Factory-baked enamel lacquer finish is ultra-durable, scrubbable, and will never peel, chip, or show brushstrokes",
        "Includes modern German soft-close door dampers, full-extension drawer slides, and brushed brass hardware",
        "Completed in just 2 days with zero demolition mess, saving over $10,000 compared to full cabinet tear-out"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Brand-New Custom Plywood Soft-Close Cabinetry",
      "price": "$10,500 Installed (All-New Modular Cabinet Boxes)",
      "location": "Complete Kitchen Layout",
      "specs": "3/4\" Plywood Boxes • Deep Pot Drawers • Built-in Pull-Out Spice Racks",
      "features": [
        "Allows redesigning the kitchen layout to add deep pot drawers, lazy Susans, and tall pantry storage",
        "Solid 3/4-inch furniture-grade plywood construction built to last a lifetime without sagging",
        "Maximizes storage capacity by extending upper cabinets all the way to the 9-foot ceiling",
        "Transforms the kitchen into a high-end luxury focal point that boosts home equity significantly"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "DIY Weekend Brush Painting Old Cabinets",
      "price": "$150 in Paint & Rollers (+ 40 hours of exhausting labor)",
      "location": "Kitchen",
      "specs": "Hand-applied paint • 20-Year-Old Worn Oak Cabinets",
      "features": [
        "Very low material expense",
        "Hand-painted surfaces show ugly brush marks, drip marks, and orange-peel roller texture",
        "Oak wood grain bleeds through paint, and latex paint chips and peels around door handles within 3 months",
        "Does nothing to fix broken drawer tracks, misaligned doors, or lack of modern storage drawers"
      ]
    },
    "persuasionGuidance": [
      "Warn that amateur DIY brush painting over old oak cabinets inevitably peels, chips, and looks sloppy with brush marks.",
      "Highlight the incredible value of professional refacing ($4,800): brand-new maple doors, soft-close hardware, and factory finish.",
      "Show that new custom cabinetry ($10,500) allows adding deep pot drawers, pantry storage, and ceiling-height cabinets."
    ]
  },
  {
    "id": "t5_088",
    "title": "Driveway Paving Material",
    "category": "Home Improvement",
    "context": "You and your paving contractor Tony are choosing a paving solution for your 2-car suburban home driveway.",
    "targetAudience": "Your contractor, Tony",
    "partnerChoiceName": "Standard Basic Black Asphalt Paving",
    "partnerRationale": "Tony recommends basic black asphalt because it is the standard budget choice that most paving crews lay down quickly.",
    "optionA": {
      "id": "opt_a",
      "name": "Interlocking Concrete Stone Pavers with Polymeric Sand",
      "price": "$9,200 Fully Installed (30-Year Warranty • High-Density Pavers)",
      "location": "Driveway & Matching Front Entry Walkway (600 sq. ft.)",
      "specs": "80mm Heavy-Duty Pavers • Crushed Gravel Base • Polymeric Sand Joints",
      "features": [
        "Stunning luxury curb appeal with architectural stone textures, borders, and rich color blends",
        "Flexible interlocking joints move naturally with Canadian winter freeze-thaw ground heave without cracking",
        "If underground pipes ever need repair, individual pavers can be lifted and seamlessly replaced with zero ugly patches",
        "Extremely durable surface that easily supports heavy SUVs, pickup trucks, and delivery vans without rutting"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Exposed Aggregate Decorative Poured Concrete",
      "price": "$6,800 Fully Installed (Includes Steel Rebar Mesh & Acrylic Sealer)",
      "location": "Two-Car Driveway Surface",
      "specs": "32 MPa Air-Entrained Concrete • Natural River Pebble Aggregate • Rebar",
      "features": [
        "Textured natural river pebble finish provides non-slip traction in winter snow and freezing rain",
        "Monolithic reinforced concrete slab with steel rebar prevents weeds, ants, and shifting",
        "Resistant to hot summer tire scuffs and oil stains with glossy protective acrylic sealer",
        "Saves $2,400 compared to stone pavers while delivering a premium architectural finish"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Standard Black Asphalt Paving",
      "price": "$3,200 Installed",
      "location": "Driveway Surface",
      "specs": "2-inch Hot Mix Asphalt • Basic Gravel Base",
      "features": [
        "Lowest initial installation price",
        "Softens in hot summer sun, allowing car tires and kickstands to sink and leave permanent dents",
        "Develops edge crumbling, cracks, and potholes within 3-4 years from winter frost heave",
        "Requires messy black tar sealcoating every two years that tracks toxic petroleum into the house"
      ]
    },
    "persuasionGuidance": [
      "Point out that asphalt softens in summer heat, cracks from winter frost, and requires messy black tar sealing every 2 years.",
      "Highlight the 30-year lifetime durability and stunning luxury curb appeal of interlocking stone pavers.",
      "Show that exposed aggregate concrete provides slip-free winter traction, weed-free permanence, and great value."
    ]
  },
  {
    "id": "t5_089",
    "title": "Basement Renovation Purpose",
    "category": "Home Improvement",
    "context": "You and your spouse are finishing your 900 sq. ft. unfinished full-height basement with a separate walkout side entrance.",
    "targetAudience": "Your spouse, Kevin",
    "partnerChoiceName": "Raw Dusty Concrete Gym & Hobby Workshop",
    "partnerRationale": "Kevin wants to leave the basement as raw open concrete for his personal weightlifting gym and woodworking saw bench.",
    "optionA": {
      "id": "opt_a",
      "name": "Legal 1-Bedroom Secondary Rental Income Suite",
      "price": "$38,000 Renovation Cost (Generates $1,650 / month in Rental Income)",
      "location": "Basement with Private Side Entrance",
      "specs": "Full Kitchen • 3-Piece Bath • Egress Window • Fire & Sound Separation",
      "features": [
        "Generates nearly $20,000 in annual passive rental income, paying off over half your monthly mortgage payment",
        "Fully certified and legal under municipal secondary suite bylaws with separate fire separation and egress",
        "Significantly increases the total market property value and buyer demand when you eventually sell the house",
        "Can be used in the future as a private in-law suite for aging parents or adult university children"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Luxury Home Cinema, Wet Bar & Family Recreation Lounge",
      "price": "$26,000 Finished (Includes Acoustic Insulation & Subfloor)",
      "location": "Main Basement Living Area",
      "specs": "120\" Projection Wall • Quartz Wet Bar & Mini Fridge • 2nd Full Bathroom",
      "features": [
        "Creates the ultimate family entertainment haven for hosting movie nights, sports parties, and kids' sleepovers",
        "Warm DriCore subfloor and acoustic Rockwool soundproofing keep the space cozy, quiet, and warm",
        "Stylish wet bar with beverage fridge, quartz countertop, and custom modern cabinetry",
        "Adds a luxurious 2nd full bathroom and comfortable guest bedroom for visiting family and friends"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Raw Concrete Gym & Woodworking Workshop",
      "price": "$2,000 (Rubber mats & fluorescent shop lights)",
      "location": "Unfinished Basement",
      "specs": "Exposed Concrete Walls & Ceiling Joists • Dust & Drafts",
      "features": [
        "Cheap and provides a space for noisy woodworking power tools",
        "Completely wastes 900 sq. ft. of prime real estate in a cold, drafty, uninsulated basement",
        "Sawdust and woodworking fumes circulate through furnace ducts into the upstairs bedrooms and kitchen",
        "Adds zero financial value or rental income to the home while leaving concrete floors freezing cold"
      ]
    },
    "persuasionGuidance": [
      "Explain that leaving a 900 sq. ft. walkout basement unfinished wastes prime real estate and circulates wood dust upstairs.",
      "Highlight the massive financial return of a legal rental suite: earning $1,650/month ($20k/year) to pay down the mortgage.",
      "Alternatively, show how a finished family recreation lounge and home cinema adds comfort, warmth, and a second bathroom."
    ]
  },
  {
    "id": "t5_090",
    "title": "Bathroom Remodel Feature",
    "category": "Home Improvement",
    "context": "You and your partner are remodeling your master ensuite bathroom to create a spa-like retreat.",
    "targetAudience": "Your partner, Sarah",
    "partnerChoiceName": "Cheap 1-Piece Acrylic Tub-Shower Combo",
    "partnerRationale": "Sarah suggests installing a basic 1-piece white acrylic tub-shower insert unit to save money.",
    "optionA": {
      "id": "opt_a",
      "name": "Frameless Walk-In Glass Spa Shower with Built-in Bench",
      "price": "$4,600 Installed (10mm Tempered Glass + Custom Porcelain Tile)",
      "location": "Master Ensuite Bathroom",
      "specs": "60x36\" Step-Free Base • Thermostatic Rain Showerhead • Tiled Niche",
      "features": [
        "Luxurious, modern frameless 10mm glass enclosure makes the entire bathroom feel spacious, open, and bright",
        "Thermostatic rainfall shower system with handheld wand delivers invigorating, temperature-precise showers",
        "Includes a built-in tiled shaving/sitting bench and recessed shampoo niches with waterproof Schluter membrane",
        "Step-free curbless design ensures modern elegance and lifetime accessibility for aging in place"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Freestanding Deep Acrylic Soaking Tub with Floor-Mount Faucet",
      "price": "$3,200 Installed (Includes Chrome Floor-Mounted Faucet Wand)",
      "location": "Under Master Bathroom Window",
      "specs": "67\" Ergonomic Deep Soaker • Double-Walled Heat Retention Acrylic",
      "features": [
        "Stunning visual centerpiece that creates an authentic luxury 5-star hotel spa aesthetic in your home",
        "Deep, ergonomic soaking capacity allows full submersion for soothing sore muscles and unwinding after stressful days",
        "Double-walled insulated acrylic construction keeps bathwater piping hot for over 45 minutes",
        "Comes with an elegant floor-mounted chrome goose-neck faucet and handheld telephone shower wand"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cheap 1-Piece Acrylic Tub-Shower Insert",
      "price": "$1,100 Installed",
      "location": "Bathroom Corner",
      "specs": "Basic Thin Acrylic • Sliding Aluminum Door",
      "features": [
        "Low upfront cost and fast installation",
        "Cheap plastic appearance that looks like a budget highway motel bathroom, degrading master ensuite value",
        "Narrow, shallow bathtub that is uncomfortable for adults to soak in and awkward to step over for showers",
        "Aluminum sliding door tracks collect soap scum, hair, and black mold that is frustrating to scrub clean"
      ]
    },
    "persuasionGuidance": [
      "Point out that a cheap acrylic insert looks like a budget roadside motel and degrades the value of a master ensuite.",
      "Highlight the daily luxury and accessibility of a custom frameless walk-in rainfall shower with a built-in bench.",
      "Show that a freestanding deep soaking tub provides a gorgeous spa centerpiece and soothing muscle relaxation."
    ]
  },
  {
    "id": "t5_091",
    "title": "Client Business Dinner Venue",
    "category": "Dining & Social Gatherings",
    "context": "You and your colleague Marcus are selecting a dinner venue to host two visiting executive vice presidents from a major prospective client firm.",
    "targetAudience": "Your colleague, Marcus",
    "partnerChoiceName": "Noisy Downtown Craft Brewery & Sports Pub",
    "partnerRationale": "Marcus wants to go to a noisy craft brewery gastropub with 20 TV screens to show the clients a 'casual Canadian beer vibe.'",
    "optionA": {
      "id": "opt_a",
      "name": "Historic Prime Steakhouse with Private Wine Room",
      "price": "$140 / person ($700 budget for 5 people)",
      "location": "Financial District Heritage Building",
      "specs": "Private Enclosed Room • Sommelier Service • Prime Dry-Aged Steaks",
      "features": [
        "Private enclosed mahogany dining room guarantees complete confidentiality for discussing sensitive contract negotiations",
        "World-class USDA Prime and Canadian AAA dry-aged steaks, fresh seafood, and certified sommelier wine pairings",
        "Impeccable white-glove service reflects the highest standard of corporate professionalism and prestige",
        "Quiet acoustic environment allowing effortless, comfortable conversation without shouting over pub noise"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Waterfront Fine-Dining Fusion Bistro",
      "price": "$110 / person ($550 budget for 5 people)",
      "location": "Harbourfront Marina (Panoramic Lake Views)",
      "specs": "Quiet Semi-Private Booth • Chef's Tasting Menu • Valet Parking",
      "features": [
        "Spectacular floor-to-ceiling sunset views over the marina and islands create a stunning visual impression",
        "Innovative Pacific-Rim farm-to-table tasting menu catering to diverse vegetarian, gluten-free, and halal diets",
        "Upscale, contemporary ambiance that feels sophisticated, modern, and welcoming without being stuffy",
        "Includes complimentary valet parking for guests and reserved quiet corner booth seating"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Noisy Craft Brewery & Sports Gastropub",
      "price": "$60 / person ($300 total)",
      "location": "Busy Entertainment Strip",
      "specs": "Open Bar Seating • Blaring Sports TVs • Shouting Crowd",
      "features": [
        "Cheaper price point with dozens of local craft beers on tap",
        "Deafening music and shouting sports fans make discussing multi-million dollar business contracts impossible",
        "Sticky wooden tables, greasy finger food, and slow pub service project an unprofessional, cut-rate corporate image",
        "Clients will feel undervalued and awkward trying to conduct executive discussions in a rowdy bar"
      ]
    },
    "persuasionGuidance": [
      "Explain that multi-million dollar client deals require confidentiality, impeccable service, and quiet acoustics.",
      "Point out that a noisy sports bar with greasy wings projects an unprofessional, cut-rate image that could lose the contract.",
      "Highlight the impressive prestige of a private steakhouse wine room or the breathtaking sunset views of a waterfront bistro."
    ]
  },
  {
    "id": "t5_092",
    "title": "Family Sunday Brunch Venue",
    "category": "Dining & Social Gatherings",
    "context": "You and your family member are choosing a restaurant for your regular monthly Sunday family brunch with 8 people, including grandparents.",
    "targetAudience": "Your family member, Uncle Joe",
    "partnerChoiceName": "Fast-Food All-Day Pancake Diner",
    "partnerRationale": "Uncle Joe wants to go to a greasy-spoon highway pancake diner because the coffee is cheap and refills are endless.",
    "optionA": {
      "id": "opt_a",
      "name": "Waterfront Hotel Gourmet Grand Brunch Buffet",
      "price": "$48 / person ($384 total for 8 guests)",
      "location": "Waterfront Hotel Promenade Dining Room",
      "specs": "All-You-Can-Eat Gourmet Buffet • Carving Station • Chocolate Fountain",
      "features": [
        "Extensive carving station (prime roast beef, honey ham), made-to-order eggs Benedict, and Belgian waffles",
        "Fresh chilled seafood bar with Atlantic smoked salmon, peeled shrimp cocktails, and gourmet salads",
        "Grand dessert display featuring a flowing Belgian chocolate fondue fountain, artisan pastries, and fruit",
        "Spacious, comfortable seating with step-free wheelchair accessibility and valet parking for grandparents"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Farm-to-Table French Artisan Bakery & Cafe",
      "price": "$28 / person ($224 total for 8 guests)",
      "location": "Historic Village Main Street",
      "specs": "Locally Sourced Organic Ingredients • Scratch-Made Pastries",
      "features": [
        "Authentic scratch-made flaky croissants, brioche French toast, savory quiches, and organic berry parfaits",
        "Uses 100% locally sourced farm eggs, Ontario maple syrup, and artisanal roasted coffee beans",
        "Charming, sunlit atmosphere with warm wooden tables and classical French jazz background music",
        "Exceptional quality and healthy ingredients at half the price of high-end hotel buffets"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Fast-Food All-Day Pancake Diner",
      "price": "$16 / person ($128 total)",
      "location": "Strip Mall Highway Junction",
      "specs": "Greasy-Spoon Short-Order Counter • Vinyl Booths",
      "features": [
        "Low cost and quick fast-food service",
        "Heavy, greasy fried food with high sodium and processed ingredients that upset grandparents' digestion",
        "Cramped vinyl booths and narrow aisles make moving walkers or wheelchairs difficult and awkward",
        "Noisy, rushed diner environment where waitstaff push you to leave quickly to turn over tables"
      ]
    },
    "persuasionGuidance": [
      "Point out that a greasy-spoon diner has cramped booths, narrow aisles for walkers, and unhealthy fried food for elders.",
      "Highlight the abundance, live carving stations, and wheelchair accessibility of the waterfront hotel brunch buffet.",
      "Alternatively, show how the artisan French bakery cafe offers fresh organic ingredients, delicious pastries, and great value."
    ]
  },
  {
    "id": "t5_093",
    "title": "Neighborhood Block Party Format",
    "category": "Dining & Social Gatherings",
    "context": "You and your street association organizer Mrs. Gable are planning the annual summer neighborhood block party for 40 families.",
    "targetAudience": "Street association organizer, Mrs. Gable",
    "partnerChoiceName": "Indoor Ice Cream Social in an Empty Community Hall",
    "partnerRationale": "Mrs. Gable suggests sitting in the windowless community hall basement eating store-bought vanilla ice cream for an hour.",
    "optionA": {
      "id": "opt_a",
      "name": "Cul-de-Sac Potluck BBQ with Inflatable Bounce Castle & Live DJ",
      "price": "$450 Total Street Fund ($10 / family for permit, bounce house & DJ)",
      "location": "Street Cul-de-Sac (Permitted Street Closure)",
      "specs": "Closed Street • Inflatable Obstacle Castle • Potluck Feast • Lawn Games",
      "features": [
        "Closing the quiet cul-de-sac creates a safe, car-free paradise where kids can ride bikes, play, and jump in the bounce castle",
        "Families bring signature cultural homemade dishes, salads, and barbecues, creating an incredible community feast",
        "Neighborhood DJ plays upbeat family-friendly music while parents socialize, play cornhole, and build lasting friendships",
        "Celebrates outdoors in the warm summer sunshine from 2:00 PM until dusk with festive string lights"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Rented Local Gourmet Food Trucks & Acoustic Live Band",
      "price": "$600 Street Fund (Covers Street Permit, Band & Waste Stations)",
      "location": "Neighborhood Community Park Lawn",
      "specs": "3 Diverse Food Trucks (Tacos, Wood-Fired Pizza, Ice Cream) • Live Band",
      "features": [
        "Zero cooking, dishwashing, or food safety stress for residents: everyone purchases fresh gourmet meals from trucks",
        "Three diverse food trucks ensure delicious options: authentic tacos, gourmet wood-fired pizza, and artisan gelato",
        "Live local acoustic trio performs folk and pop music on the park pavilion stage",
        "Eco-friendly setup with designated green compost and recycling bins provided by the city"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Indoor Ice Cream Social in Hall Basement",
      "price": "$80 Total",
      "location": "Windowless Community Center Basement",
      "specs": "Fluorescent Lights • Metal Folding Chairs • 60-Minute Limit",
      "features": [
        "Very cheap and completely unaffected by weather",
        "Awkward and uninspiring: sitting under fluorescent lights on metal chairs on a gorgeous sunny summer Saturday",
        "Kids will be bored and restless within 15 minutes in a confined indoor room with no playground or lawn",
        "Fails to build genuine community spirit, neighborly bonding, or outdoor summer excitement"
      ]
    },
    "persuasionGuidance": [
      "Point out that sitting in a windowless basement on a sunny summer Saturday is depressing and boring for children.",
      "Highlight the vibrant community bonding of closing the cul-de-sac for a potluck BBQ, bounce castle, and music.",
      "Show that food trucks in the park eliminate all cooking and cleanup while providing delicious artisan variety."
    ]
  },
  {
    "id": "t5_094",
    "title": "Dinner Party Catering Solution",
    "category": "Dining & Social Gatherings",
    "context": "You and your partner Nina are hosting a special dinner party for 8 close friends at your home next Saturday.",
    "targetAudience": "Your partner, Nina",
    "partnerChoiceName": "Cooking a 5-Course Meal from Scratch Alone",
    "partnerRationale": "Nina wants to cook a complex 5-course gourmet dinner from scratch completely by herself to show off her culinary skills.",
    "optionA": {
      "id": "opt_a",
      "name": "Private In-Home Executive Chef & Server Experience",
      "price": "$120 / person ($960 total for 8 guests, ingredients included)",
      "location": "Your Home Kitchen & Dining Room",
      "specs": "Professional Chef + Server • 4-Course Fine Dining • Spotless Kitchen Cleanup",
      "features": [
        "Chef custom-designs a restaurant-quality 4-course menu (scallops, beef tenderloin, molten lava cake)",
        "Chef and server prepare, cook, plate, and serve every course seamlessly right in your dining room",
        "Kitchen is left completely spotless with every single pot, pan, dish, and wine glass washed and put away",
        "Allows you and Nina to relax, drink wine, and laugh with your guests without spending the whole evening trapped in the kitchen"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Gourmet Italian Trattoria Family-Style Catered Feast",
      "price": "$45 / person ($360 total for 8 guests)",
      "location": "Delivered Hot to Home Doorstep",
      "specs": "Oven-Ready Hot Platters • Artisan Pasta, Osso Buco, Salads & Tiramisu",
      "features": [
        "Delivered piping hot 30 minutes before guests arrive in elegant heated serving chafing dishes",
        "Feast includes artisanal truffle burrata, handmade lasagna bolognese, braised osso buco, and fresh focaccia",
        "High gourmet quality with zero cooking stress and only 10 minutes of effortless plating before serving",
        "Saves $600 compared to a private chef while providing abundant, delicious restaurant-grade food"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cooking 5-Course Meal Alone from Scratch",
      "price": "$250 in Grocery Ingredients (+ 14 hours of exhausting kitchen labor)",
      "location": "Home Kitchen",
      "specs": "Solo Cooking • 5 Complex Courses • Massive Sink of Dirty Pots",
      "features": [
        "Saves money on catering fees and shows culinary passion",
        "Nina will be completely stressed, exhausted, and stuck over hot stoves the entire night while guests socialize",
        "High risk of dishes burning, timing disasters, and cold entrees while plating multiple intricate courses",
        "Leaves a mountain of greasy pots, pans, and dirty dishes to wash at 1:00 AM after exhausted guests leave"
      ]
    },
    "persuasionGuidance": [
      "Remind Nina that the primary goal of hosting is enjoying your friends' company, not being trapped over hot stoves all night.",
      "Highlight the ultimate luxury of an in-home private chef: fine dining and a completely spotless, sparkling kitchen.",
      "Show that catered trattoria platters ($360) provide mouth-watering gourmet Italian food with zero cooking stress."
    ]
  },
  {
    "id": "t5_095",
    "title": "Couple Cooking Class Experience",
    "category": "Dining & Social Gatherings",
    "context": "You and your partner Chris are booking an interactive weekend evening cooking workshop for a fun date night.",
    "targetAudience": "Your partner, Chris",
    "partnerChoiceName": "Delicate French Sugar Macaron Baking Workshop",
    "partnerRationale": "Chris wants to take a delicate French sugar macaron baking class because he loves colorful pastries.",
    "optionA": {
      "id": "opt_a",
      "name": "Handmade Fresh Pasta & Authentic Gelato Masterclass",
      "price": "$110 / person (Includes 3-Course Dinner with Wine Pairings)",
      "location": "Artisan Culinary Institute (Downtown)",
      "specs": "3-Hour Hands-On Class • Hand-Rolled Fettuccine & Ravioli • Wine Included",
      "features": [
        "Learn to knead, roll, and cut silky egg pasta dough, stuff ravioli, and simmer authentic Italian sauces",
        "Highly practical skill you can easily replicate at home every week for romantic dinners and dinner parties",
        "Sit down together at the end of class to feast on your handmade pasta accompanied by Italian Chianti wine",
        "Finish the evening churning and tasting rich, artisanal seasonal gelato from scratch"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Artisanal Sushi Rolling & Traditional Ramen Workshop",
      "price": "$125 / person (Includes Sake Tasting & Bamboo Rolling Mat)",
      "location": "Japanese Culinary Studio",
      "specs": "3-Hour Workshop • Knife Skills • Nigiri, Maki & 12-Hour Tonkotsu Broth",
      "features": [
        "Master professional Japanese sushi knife sharpening, fish slicing, and seasoned sushi rice preparation",
        "Roll inside-out maki rolls, hand-shape delicate salmon nigiri, and assemble rich steaming ramen bowls",
        "Includes an interactive sake tasting flight paired with freshly rolled crispy tempura and edamame",
        "Take home a complimentary professional bamboo rolling mat and Japanese recipe guidebook"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Delicate French Sugar Macaron Baking Class",
      "price": "$115 / person",
      "location": "Pastry Studio",
      "specs": "3-Hour Sugar Piping • High Technical Failure Rate",
      "features": [
        "Learn delicate sugar folding and piping techniques for meringue cookies",
        "Extremely frustrating and technical: temperature changes and over-whipping easily ruin the entire batch",
        "Leaves you with only sugary cookies for dinner instead of a satisfying, savory meal and wine",
        "Very difficult to reproduce at home without specialized commercial convection ovens and candy thermometers"
      ]
    },
    "persuasionGuidance": [
      "Point out that a macaron class gives you only sugary cookies for dinner instead of a real, satisfying meal.",
      "Highlight the fun, romantic, and practical lifetime value of learning to make fresh handmade pasta and sauces at home.",
      "Show that the sushi and ramen workshop provides great knife skills, delicious sake pairings, and savory dining."
    ]
  },
  {
    "id": "t5_096",
    "title": "Weekly Household Grocery Model",
    "category": "Dining & Social Gatherings",
    "context": "You and your roommate Liam are deciding on the most cost-effective and healthy weekly grocery shopping strategy.",
    "targetAudience": "Your roommate, Liam",
    "partnerChoiceName": "App-Based On-Demand Grocery Delivery Every 2 Days",
    "partnerRationale": "Liam wants to order small bags of groceries on-demand through delivery apps whenever the fridge runs empty.",
    "optionA": {
      "id": "opt_a",
      "name": "Wholesale Club (Costco) Bulk Shopping + Meal Prep",
      "price": "$180 / week (Split 2 ways = $90 each • $60 Annual Membership)",
      "location": "Regional Wholesale Club Depot (10 min drive)",
      "specs": "Bi-weekly Bulk Runs • High-Quality Proteins, Grains & Pantry Staples",
      "features": [
        "Saves over $2,000 annually by purchasing staple proteins, oats, olive oil, coffee, and nuts in bulk quantities",
        "High-grade fresh produce, organic eggs, and wild salmon at significantly lower unit prices than retail supermarkets",
        "Enables efficient Sunday batch cooking, ensuring healthy ready-to-eat lunches in the fridge all week long",
        "Executive membership pays for itself with annual 2% cash back rewards on all household purchases"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Weekly Local Farmers' Market & Community Supported Agriculture (CSA)",
      "price": "$140 / week (Split 2 ways = $70 each for Farm Fresh Box)",
      "location": "Downtown Saturday Farmers' Market (5 min away)",
      "specs": "Weekly Seasonal Farm Box • 100% Local Organic Produce & Dairy",
      "features": [
        "Peak freshness: fruits and vegetables are harvested less than 24 hours before purchase, maximizing flavor and vitamins",
        "Directly supports local Ontario/Canadian family farmers and sustainable organic agriculture practices",
        "Includes artisan sourdough bread, free-range eggs, farm-fresh milk, and seasonal heritage produce",
        "Pleasant Saturday morning community outing with live folk music, food stands, and friendly vendor chats"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "App-Based On-Demand Delivery Apps",
      "price": "$260 / week ($130 each • High markup + delivery & service fees)",
      "location": "Smartphone Delivery App",
      "specs": "Frequent Small Orders • 20% Item Markup • Service & Tip Fees",
      "features": [
        "Delivered to the apartment door without leaving the couch",
        "Extremely expensive: 15-20% item markups plus $6 delivery fees, service fees, and tips add $400/month in waste",
        "Frequent delivery errors: bruised fruit, missing items, and short expiry dates chosen by rushed app pickers",
        "Encourages disorganized, wasteful eating habits with high amounts of plastic grocery bag waste"
      ]
    },
    "persuasionGuidance": [
      "Reveal the hidden financial drain: delivery apps add $400+ every month in item markups, delivery fees, and tips.",
      "Highlight the massive savings and high quality of bulk Costco shopping ($90/wk each) for meal prepping.",
      "Show that shopping at local farmers' markets provides peak freshness, organic health, and supports local farms."
    ]
  },
  {
    "id": "t5_097",
    "title": "Office Lunch & Learn Catering",
    "category": "Dining & Social Gatherings",
    "context": "You and your coworker Sandra are organizing monthly catered lunches for your company's 30-person Lunch & Learn training sessions.",
    "targetAudience": "Your coworker, Sandra",
    "partnerChoiceName": "Cold Greasy Fast-Food Delivery Pizza Boxes",
    "partnerRationale": "Sandra wants to order 8 large pepperoni pizzas from a cheap fast-food chain because it is easy and cheap.",
    "optionA": {
      "id": "opt_a",
      "name": "Fresh Mediterranean Mezze & Shawarma Bowl Buffet",
      "price": "$18 / person ($540 total budget for 30 people)",
      "location": "Local Mediterranean Grill & Catering",
      "specs": "Individual Bowls • Halal Chicken, Falafel, Hummus, Quinoa & Tabbouleh",
      "features": [
        "Inclusive catering that fully accommodates Halal, Vegan, Vegetarian, Dairy-Free, and Gluten-Free colleagues",
        "Nutrient-dense proteins, fiber-rich grains, and fresh salads prevent sluggish afternoon sugar crashes",
        "Served in clean, individual compostable bowls that allow colleagues to eat neatly while taking training notes",
        "Consistently rated the #1 most popular catering format in employee feedback surveys"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Gourmet Artisan Sandwich, Wrap & Salad Board Platters",
      "price": "$16 / person ($480 total budget for 30 people)",
      "location": "Downtown Artisan Deli & Bakery",
      "specs": "Assorted Focaccia & Brioche Sandwiches • Organic Greens & Fruit",
      "features": [
        "Delicious variety: smoked turkey brie, prosciutto fig, roasted veggie goat cheese, and vegan avocado wraps",
        "Includes bowls of crisp organic greens, balsamic vinaigrette, fresh fruit platters, and artisan cookies",
        "Fast, quiet buffet line setup that allows training presentations to begin exactly on time without delay",
        "Professional presentation with branded wooden boards and compostable cutlery provided"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Cold Greasy Fast-Food Delivery Pizzas",
      "price": "$11 / person ($330 total)",
      "location": "Fast-Food Chain",
      "specs": "8 Large Pepperoni & Cheese Pizzas",
      "features": [
        "Low price point and simple to order",
        "Excludes colleagues who are vegan, gluten-intolerant, lactose-intolerant, or require halal meats",
        "Heavy grease and carbs cause severe 2:00 PM sleepiness and brain fog during the training presentation",
        "Greasy fingers make touching laptops, typing notes, and handling training materials messy and awkward"
      ]
    },
    "persuasionGuidance": [
      "Point out that cheap pizza excludes employees with dietary restrictions (vegan, gluten-free, halal) and causes afternoon food coma.",
      "Highlight the healthy energy, delicious flavors, and dietary inclusivity of fresh Mediterranean bowls.",
      "Show that gourmet artisan sandwich platters are neat to eat while typing notes and project a professional company image."
    ]
  },
  {
    "id": "t5_098",
    "title": "Romantic Anniversary Dinner",
    "category": "Dining & Social Gatherings",
    "context": "You and your spouse Elena are choosing a restaurant for your 5th wedding anniversary dinner.",
    "targetAudience": "Your spouse, Elena",
    "partnerChoiceName": "Tourist Sunset Harbour Boat Cruise Buffet",
    "partnerRationale": "Elena thinks taking a tourist boat cruise around the harbour with a DJ would be fun.",
    "optionA": {
      "id": "opt_a",
      "name": "Revolving Panoramic City Tower Restaurant",
      "price": "$160 / person (Includes 3-Course Dinner & Free Tower Observation Deck)",
      "location": "Skyline Tower Revolving Dining Room (350 meters high)",
      "specs": "360° Panoramic City Views • 3-Course Fine Dining • Complimentary Tower Pass",
      "features": [
        "Breathtaking 360-degree rotating views of the sparkling city skyline, waterfront, and setting sun",
        "World-class Canadian fine dining featuring Alberta prime beef, Atlantic halibut, and sommelier wine list",
        "Quiet, romantic candlelit booth seating with personalized anniversary menus and champagne flutes",
        "Includes complimentary VIP access to the tower observation deck after dinner for romantic photos"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "7-Course Chef Tasting Menu in Historic Underground Wine Cellar",
      "price": "$145 / person (Includes 7 Courses + Artisan Wine Pairings)",
      "location": "Historic Distillery District Heritage Vaults",
      "specs": "1800s Stone Wine Vault • 7 Seasonal Chef Courses • Sommelier Paired",
      "features": [
        "Intimate, secluded ambiance inside a 19th-century exposed limestone wine cellar with flickering candlelight",
        "Exquisite 7-course seasonal tasting menu prepared by a renowned Michelin-starred executive chef",
        "Every course is expertly paired with rare vintage boutique wines explained tableside by the sommelier",
        "An unforgettable culinary journey that feels deeply romantic, exclusive, and momentous"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Tourist Sunset Harbour Boat Cruise Buffet",
      "price": "$95 / person",
      "location": "Harbour Cruise Ship",
      "specs": "Large Shared Boat • Standard Steam-Table Buffet • Loud DJ",
      "features": [
        "Nice breeze on the outdoor boat deck",
        "Crowded with 200 noisy tourists and party groups shouting over loud pop music and announcements",
        "Mediocre steam-table buffet food (dry chicken, soggy potatoes) with long cafeteria-style lineups",
        "Lacks intimate conversation and romantic ambiance, with risk of rough waters and motion sickness"
      ]
    },
    "persuasionGuidance": [
      "Point out that tourist cruise boats have noisy crowds, loud DJs, cafeteria buffet lines, and zero romantic intimacy.",
      "Highlight the stunning skyline views, candlelit elegance, and fine dining of the revolving tower restaurant.",
      "Show that a 7-course Michelin-level wine cellar tasting menu creates an unforgettable romantic milestone."
    ]
  },
  {
    "id": "t5_099",
    "title": "Social Hobby Group Format",
    "category": "Dining & Social Gatherings",
    "context": "You and your friend Paul want to start a regular monthly social hobby group with 10 mutual friends.",
    "targetAudience": "Your friend, Paul",
    "partnerChoiceName": "Weekly Crowded Pub Trivia Night",
    "partnerRationale": "Paul wants the group to go to a crowded, noisy pub every Tuesday night for fast-paced trivia.",
    "optionA": {
      "id": "opt_a",
      "name": "Monthly Book, Wine & Cheese Discussion Club",
      "price": "$20 / month per person (Rotating Host Wine & Artisan Cheese)",
      "location": "Members' Cozy Living Rooms & Backyards (Monthly Rotation)",
      "specs": "Monthly Gathering • Selected Bestselling Book • Wine & Grazing",
      "features": [
        "Stimulating, thoughtful discussions on bestselling novels, biographies, and global perspectives",
        "Warm, comfortable home setting with artisan cheeses, fresh fruit, wine, and unhurried conversation",
        "A relaxed monthly pace that easily fits into busy working professionals' schedules without burnout",
        "Rotating host model fosters deep, intimate friendships and hospitable social connections"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Strategy Board Game & Craft Beer Evening",
      "price": "$15 / person (Board Game Cafe Pass + Gourmet Snacks)",
      "location": "Downtown Board Game Lounge / Member Homes",
      "specs": "Monthly Game Night • Strategy Games (Catan, Wingspan, Ticket to Ride)",
      "features": [
        "High-energy, cooperative, and strategic gameplay that sparks laughter, teamwork, and friendly rivalry",
        "Huge library of hundreds of award-winning modern tabletop games suitable for beginners and experts alike",
        "Comfortable lounge tables with craft beer, mocktails, and sharing platters in a welcoming atmosphere",
        "Inclusive and engaging format where even introverted friends feel immediately involved and entertained"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Weekly Crowded Pub Trivia Night",
      "price": "$45 / week ($180 / month in pub food & drinks)",
      "location": "Noisy Downtown Sports Bar",
      "specs": "Weekly 3-Hour Quiz • Blaring Mic • Packed Bar",
      "features": [
        "Fast-paced competitive trivia questions",
        "Weekly commitment is too demanding for busy adults, leading to high dropouts after three weeks",
        "Deafening bar noise and rushed 30-second question timers prevent real socializing and catching up",
        "Expensive weekly bar bills ($180/mo) for mediocre fried food and drinks"
      ]
    },
    "persuasionGuidance": [
      "Point out that a weekly pub trivia commitment is too intense and expensive ($180/mo) for busy working adults.",
      "Highlight the relaxing monthly pace, deep conversations, and warm hospitality of a home book and wine club.",
      "Show that a strategy board game night provides tons of laughter, teamwork, and fun in an inclusive setting."
    ]
  },
  {
    "id": "t5_100",
    "title": "Remote Work Cafe Session",
    "category": "Dining & Social Gatherings",
    "context": "You and your remote coworker Maya want to meet up once a week to work side-by-side, collaborate, and escape home isolation.",
    "targetAudience": "Your coworker, Maya",
    "partnerChoiceName": "Silent University Library Study Desks",
    "partnerRationale": "Maya wants to sit at the university library's silent study cubicles where talking is strictly prohibited.",
    "optionA": {
      "id": "opt_a",
      "name": "Spacious Artisan Coffee Roastery with High-Speed Wi-Fi",
      "price": "$8 / visit (Artisan Pour-Over Coffee + Croissant)",
      "location": "Sunlit Downtown Roastery (Large Communal Oak Tables)",
      "specs": "Fiber Wi-Fi • Ample Wall Outlets • Natural Sunlight • Relaxed Music",
      "features": [
        "Vibrant, inspiring ambiance with pleasant background acoustic music and natural daylight from large windows",
        "Abundant electrical outlets at large communal tables and lightning-fast 300 Mbps fiber Wi-Fi",
        "Allows talking freely, brainstorming project ideas, and conducting casual work discussions without shushing",
        "Exceptional single-origin pour-over coffees and fresh scratch-baked pastries to stay energized all morning"
      ]
    },
    "optionB": {
      "id": "opt_b",
      "name": "Modern Co-Working Day Pass & Innovation Hub",
      "price": "$25 / day (Includes Unlimited Espresso, Phone Booths & Monitors)",
      "location": "Downtown Tech Innovation Hub",
      "specs": "Ergonomic Standing Desks • Soundproof Phone Booths • Meeting Rooms",
      "features": [
        "Professional ergonomic workstations, 4K external monitors, and high-speed enterprise printing included",
        "Soundproof private phone booths allow taking confidential client Zoom calls without background noise",
        "Unlimited premium espresso, sparkling water on tap, and fresh fruit provided for free all day",
        "Networking opportunities with tech entrepreneurs, freelancers, and creative professionals"
      ]
    },
    "partnerOption": {
      "id": "opt_partner",
      "name": "Silent Library Desks (Strict Quiet Zone)",
      "price": "$0 Upfront",
      "location": "University Library 4th Floor",
      "specs": "Silent Individual Carrels • Whispering Strictly Forbidden",
      "features": [
        "Completely quiet and zero financial cost",
        "Defeats the entire purpose of meeting up: you cannot talk, brainstorm, collaborate, or speak a single word",
        "No coffee or food allowed at desks, and finding two adjacent open desks with power outlets is difficult",
        "Strict librarians will reprimand you if you try to discuss work or take a quick work phone call"
      ]
    },
    "persuasionGuidance": [
      "Point out that sitting in a silent library where talking is forbidden defeats the entire purpose of meeting up to collaborate.",
      "Highlight the inspiring, social energy and brainstorm-friendly atmosphere of the artisan coffee roastery.",
      "Show that a co-working day pass ($25) provides external monitors, soundproof call booths, and unlimited espresso."
    ]
  }
];
