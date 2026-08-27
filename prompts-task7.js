// CELPIP Speaking Task 7: Expressing Opinions (100 Prompts)
// Preparation Time: 30 seconds | Speaking Time: 90 seconds

const TASK7_PROMPTS = [
  {
    "id": "t7_001",
    "title": "Artificial Intelligence in the Modern Workplace",
    "category": "Technology & Digital Life",
    "prompt": "Do you think that the widespread adoption of artificial intelligence in the workplace will create more economic opportunities than the jobs it eliminates? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Agree (AI Creates More Opportunities)",
      "points": [
        "Spurs creation of entirely new high-paying industries (AI prompt engineers, robotics technicians, data ethicists).",
        "Automates repetitive manual tasks, allowing human workers to focus on creative problem-solving and strategic leadership.",
        "Boosts overall productivity and business efficiency, lowering costs of goods and services for consumers."
      ]
    },
    "sideB": {
      "label": "Disagree (AI Causes Widespread Disruption)",
      "points": [
        "Causes severe short-term displacement of white-collar and entry-level administrative workers.",
        "Widens wealth inequality as tech corporations capture the majority of automation profits.",
        "Retraining millions of older mid-career professionals is difficult and expensive."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While critics argue that",
      "In the long run",
      "It is worth noting that",
      "All things considered"
    ],
    "studyGuidance": [
      "State your position clearly within the first 10 seconds.",
      "Provide 2 strong reasons supported by real-world tech examples.",
      "Address the counter-argument (e.g. displacement vs new industries) with nuance.",
      "End with a powerful synthesis in the final 10 seconds."
    ]
  },
  {
    "id": "t7_002",
    "title": "Banning Smartphones in Elementary and High Schools",
    "category": "Technology & Digital Life",
    "prompt": "Several Canadian provinces have implemented strict bans on smartphones in classrooms. Do you think smartphones should be completely prohibited during school hours? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of School Smartphone Bans",
      "points": [
        "Significantly reduces classroom distractions, boosting student focus, academic grades, and teacher engagement.",
        "Curbs cyberbullying, unwanted photography, and social media anxiety during the school day.",
        "Encourages face-to-face social interaction, outdoor physical play, and teamwork during lunch breaks."
      ]
    },
    "sideB": {
      "label": "Opposed to Full Smartphone Bans",
      "points": [
        "Smartphones are powerful educational research tools for looking up reference data and educational apps.",
        "Prevents parents from reaching their children immediately during family emergencies or schedule changes.",
        "Schools should teach responsible digital media literacy rather than enforcing outright bans."
      ]
    },
    "persuasiveVocabulary": [
      "I firmly believe that",
      "Undeniably",
      "On one hand proponents suggest",
      "Nevertheless",
      "The primary advantage lies in",
      "Ultimately"
    ],
    "studyGuidance": [
      "Choose one side definitively.",
      "Contrast academic focus with emergency communication.",
      "Use transition words like 'Furthermore' and 'Conversely'."
    ]
  },
  {
    "id": "t7_003",
    "title": "Transition to a 100% Cashless Society",
    "category": "Technology & Digital Life",
    "prompt": "Many businesses and banks are transitioning away from physical cash toward digital-only payments. Do you think society should eliminate physical cash entirely? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support for Cashless Society",
      "points": [
        "Dramatically reduces retail robbery, counterfeiting, and physical theft risks for merchants.",
        "Provides instant, seamless transaction records for budgeting and curbs underground tax evasion.",
        "Lowers administrative costs of minting coins, printing bills, and armored transport."
      ]
    },
    "sideB": {
      "label": "Against Complete Elimination of Cash",
      "points": [
        "Marginalizes vulnerable populations: seniors, low-income citizens, and unhoused people without smartphones or bank accounts.",
        "Creates severe vulnerabilities during power blackouts, system outages, and cyberattacks.",
        "Raises serious digital privacy and mass financial surveillance concerns."
      ]
    },
    "persuasiveVocabulary": [
      "In my view",
      "A crucial consideration is",
      "While convenience is undeniable",
      "On the other hand",
      "Without a doubt",
      "To conclude"
    ],
    "studyGuidance": [
      "Address digital accessibility and emergency preparedness.",
      "Structure with 2 body paragraphs and a concluding judgment."
    ]
  },
  {
    "id": "t7_004",
    "title": "Age Restrictions on Social Media Platforms (Minimum Age 16)",
    "category": "Technology & Digital Life",
    "prompt": "Some governments are proposing legislation to ban teenagers under the age of 16 from creating social media accounts. Do you agree with this policy? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Agree with Age 16 Social Media Restriction",
      "points": [
        "Protects developing teenage brains from addictive algorithmic loops, sleep deprivation, and depression.",
        "Shields young adolescents from online predators, toxic beauty standards, and cyberbullying.",
        "Promotes healthy real-world hobbies, sports, and genuine in-person friendships."
      ]
    },
    "sideB": {
      "label": "Disagree with Government Social Media Age Bans",
      "points": [
        "Enforcement is practically impossible without invasive biometric or digital ID surveillance of all citizens.",
        "Isolates teens from educational communities, hobby groups, and supportive peer networks.",
        "Parental guidance and digital literacy education are far more effective than government bans."
      ]
    },
    "persuasiveVocabulary": [
      "From my standpoint",
      "It is evident that",
      "Although supporters claim",
      "In reality",
      "A compelling argument is",
      "In summary"
    ],
    "studyGuidance": [
      "Highlight adolescent mental health vs personal autonomy.",
      "Deliver a well-paced 90-second response."
    ]
  },
  {
    "id": "t7_005",
    "title": "Autonomous Self-Driving Vehicles on Public Highways",
    "category": "Technology & Digital Life",
    "prompt": "Do you think governments should actively encourage and fast-track the deployment of fully autonomous self-driving cars on public roads? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Autonomous Vehicles",
      "points": [
        "Over 90% of traffic collisions are caused by human error (distracted driving, speeding, drunk driving); AI eliminates these.",
        "Provides independent mobility for seniors, visually impaired individuals, and people with disabilities.",
        "Optimizes traffic flow, reduces highway congestion, and lowers greenhouse emissions through smooth acceleration."
      ]
    },
    "sideB": {
      "label": "Against Fast-Tracking Autonomous Vehicles",
      "points": [
        "Autonomous systems can fail unpredictably in severe Canadian winter snowstorms and icy road conditions.",
        "Presents complex ethical dilemmas and liability questions when fatal accidents occur.",
        "Threatens the livelihoods of millions of professional commercial truck and taxi drivers."
      ]
    },
    "persuasiveVocabulary": [
      "I am convinced that",
      "First and foremost",
      "While technical challenges exist",
      "Substantially improves",
      "Consequently",
      "All things considered"
    ],
    "studyGuidance": [
      "Mention Canadian winter weather constraints as a counter-argument.",
      "Maintain strong voice inflection."
    ]
  },
  {
    "id": "t7_006",
    "title": "Remote Online University Exams with Webcam Monitoring",
    "category": "Technology & Digital Life",
    "prompt": "Many post-secondary institutions use automated AI proctoring software that monitors students via webcams during remote exams. Do you think this practice is justified? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Justified (Protects Academic Integrity)",
      "points": [
        "Prevents cheating and unauthorized searching, ensuring fairness and value for university degrees.",
        "Allows remote and international students to write exams conveniently from home without travel costs.",
        "Standardized software eliminates individual human proctor bias and grading delays."
      ]
    },
    "sideB": {
      "label": "Unjustified (Invasive & Prone to Errors)",
      "points": [
        "Violates student privacy by recording inside private bedrooms and tracking eye movements.",
        "AI algorithms frequently flag innocent movements, neurodivergent behaviors, or poor internet lag as cheating.",
        "Creates intense anxiety and technical stress during high-stakes academic evaluations."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A fundamental concern is",
      "While upholding integrity is vital",
      "Nevertheless",
      "It stands to reason that",
      "In conclusion"
    ],
    "studyGuidance": [
      "Balance exam integrity against personal privacy.",
      "Use clear transitions between points."
    ]
  },
  {
    "id": "t7_007",
    "title": "Government Regulation of Artificial Intelligence Algorithms",
    "category": "Technology & Digital Life",
    "prompt": "Should governments establish strict regulatory oversight on AI development companies, or should the industry be allowed to innovate with minimal restrictions? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Strict AI Regulation",
      "points": [
        "Prevents dangerous proliferation of deepfakes, automated disinformation, and electoral manipulation.",
        "Guarantees ethical standards regarding copyright protection, biometric surveillance, and data security.",
        "Protects consumers from algorithmic bias in automated mortgage, credit, and hiring decisions."
      ]
    },
    "sideB": {
      "label": "In Favor of Free Market Innovation",
      "points": [
        "Over-regulation stifles technological progress and causes innovative startups to move to less regulated countries.",
        "Governments and bureaucratic agencies lack the technical speed to regulate rapidly evolving models effectively.",
        "Open-source competition naturally drives safety and transparency better than rigid laws."
      ]
    },
    "persuasiveVocabulary": [
      "In my opinion",
      "It is universally recognized that",
      "Whereas proponents argue",
      "In contrast",
      "A critical aspect is",
      "Ultimately"
    ],
    "studyGuidance": [
      "Discuss societal safety vs technological innovation speed.",
      "Ensure clean concluding remark."
    ]
  },
  {
    "id": "t7_008",
    "title": "Algorithmic AI Screening for Job Applicants",
    "category": "Technology & Digital Life",
    "prompt": "Many large corporations use automated AI software to filter and reject job resumes before human recruiters ever see them. Do you think this practice is beneficial or harmful? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Beneficial (Efficient & Objective)",
      "points": [
        "Processes thousands of applications in seconds, speeding up hiring and saving immense business costs.",
        "Removes human unconscious bias based on candidate names, age, gender, or appearance.",
        "Matches candidate skills accurately with detailed job descriptions."
      ]
    },
    "sideB": {
      "label": "Harmful (Impersonal & Biased)",
      "points": [
        "Algorithms often inherit historical hiring biases, unfairly filtering out qualified non-traditional candidates.",
        "Reduces human talent and personality to arbitrary keywords, penalizing career switchers.",
        "Candidates game the system with keyword-stuffing rather than presenting genuine qualifications."
      ]
    },
    "persuasiveVocabulary": [
      "I believe that",
      "An important consideration is",
      "While efficiency is gained",
      "On the flip side",
      "Evidence suggests that",
      "To summarize"
    ],
    "studyGuidance": [
      "Contrast corporate efficiency with human evaluation nuance.",
      "Maintain confident delivery."
    ]
  },
  {
    "id": "t7_009",
    "title": "Facial Recognition Surveillance in Public Spaces",
    "category": "Technology & Digital Life",
    "prompt": "Should police and municipal authorities be permitted to use automated facial recognition cameras in public places like transit hubs and city streets? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Public Facial Recognition",
      "points": [
        "Enables rapid identification and capture of dangerous violent criminals and fugitives.",
        "Helps locate missing children, vulnerable seniors with dementia, and kidnapping victims in real time.",
        "Acts as a powerful crime deterrent in high-density transit stations and public arenas."
      ]
    },
    "sideB": {
      "label": "Opposed to Public Facial Recognition",
      "points": [
        "Creates an oppressive mass surveillance state, eroding democratic freedoms and privacy rights.",
        "High false-positive error rates, particularly for racial minorities, lead to wrongful detentions.",
        "Risk of database leaks or abuse by unauthorized government agencies."
      ]
    },
    "persuasiveVocabulary": [
      "From my point of view",
      "The foremost priority must be",
      "Although security is essential",
      "Conversely",
      "A major drawback is",
      "In the final analysis"
    ],
    "studyGuidance": [
      "Address public safety vs civil liberties.",
      "Use clear paragraphing."
    ]
  },
  {
    "id": "t7_010",
    "title": "Mandatory Digital National Identity Cards",
    "category": "Technology & Digital Life",
    "prompt": "Do you think the federal government should introduce a mandatory digital national identity card for all citizens to access public and online services? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support for Mandatory Digital ID",
      "points": [
        "Streamlines access to healthcare, driver licensing, tax filing, and voting under one secure system.",
        "Eliminates identity theft, document fraud, and physical loss of paper cards.",
        "Saves taxpayers billions of dollars in bureaucratic paperwork and in-person agency visits."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Digital ID",
      "points": [
        "Centralizes all personal data into a single point of failure vulnerable to state-sponsored hackers.",
        "Excludes citizens without smartphones or reliable high-speed internet access.",
        "Enables potential government overreach by tracking individual movements and service usage."
      ]
    },
    "persuasiveVocabulary": [
      "I am of the opinion that",
      "A compelling justification is",
      "While convenience is appealing",
      "On the contrary",
      "The risks far outweigh",
      "To conclude"
    ],
    "studyGuidance": [
      "Weigh administrative efficiency against cybersecurity risks.",
      "Fill 90 seconds evenly."
    ]
  },
  {
    "id": "t7_011",
    "title": "Four-Day Workweek with Equal Pay (32 Hours)",
    "category": "Workplace & Economy",
    "prompt": "Many Canadian companies are piloting a 4-day, 32-hour workweek with no reduction in salary. Do you think a 4-day workweek should become the standard model for all workplaces? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support 4-Day Workweek",
      "points": [
        "Dramatically improves employee mental health, reduces burnout, and lowers healthcare costs.",
        "Studies consistently show equal or higher employee productivity due to increased focus and morale.",
        "Reduces weekly commuting pollution, daycare expenses, and carbon emissions."
      ]
    },
    "sideB": {
      "label": "Against Mandatory 4-Day Workweek",
      "points": [
        "Infeasible for essential services (hospitals, emergency services, policing, schools, public transit).",
        "Small businesses in hospitality and retail would face crippling overtime staffing costs.",
        "May increase daily stress if employees must compress 40 hours of work into 32 hours."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_012",
    "title": "Mandatory Full-Time Return to Office",
    "category": "Workplace & Economy",
    "prompt": "Some major corporate executives argue that all employees must return to physical offices 5 days a week. Do you think companies should mandate a full-time return to the office? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Mandatory Office Return",
      "points": [
        "Fosters spontaneous creative collaboration, team camaraderie, and strong company culture.",
        "Crucial for onboarding and mentoring junior employees who struggle with remote training.",
        "Revitalizes downtown businesses, restaurants, transit systems, and commercial districts."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Office Return (Pro-Remote/Hybrid)",
      "points": [
        "Eliminating daily 2-hour commutes saves employees money, stress, and improves work-life balance.",
        "Allows companies to hire top diverse talent nationally regardless of geographic location.",
        "Forces higher overhead office lease costs and reduces employee retention."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_013",
    "title": "Raising the Federal Minimum Wage to a Living Wage ($22/hr)",
    "category": "Workplace & Economy",
    "prompt": "Do you think governments should raise the minimum wage to match the calculated local living wage (e.g. $20\u2013$25/hour)? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Raising Minimum Wage",
      "points": [
        "Helps low-income workers cope with rising housing, grocery, and inflation costs.",
        "Injects purchasing power directly into local economies as workers spend locally.",
        "Reduces government spending on social assistance and poverty alleviation programs."
      ]
    },
    "sideB": {
      "label": "Against Rapid Minimum Wage Hikes",
      "points": [
        "Forces small businesses to raise menu and product prices, fueling further consumer inflation.",
        "May lead employers to reduce working hours or accelerate automated checkout kiosks.",
        "Places an unsustainable financial burden on small independent local retailers."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_014",
    "title": "Employee Protections & Benefits for Gig Economy Workers",
    "category": "Workplace & Economy",
    "prompt": "Should food delivery drivers and rideshare contractors be legally classified as employees entitled to paid sick leave, minimum wage, and pensions? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Employee Status & Benefits",
      "points": [
        "Ends worker exploitation by ensuring basic labor rights, injury coverage, and living wages.",
        "Provides a safety net during illness, preventing sick couriers from working out of desperation.",
        "Creates a level playing field between tech platforms and traditional taxi/delivery firms."
      ]
    },
    "sideB": {
      "label": "In Favor of Independent Contractor Flexibility",
      "points": [
        "Allows workers complete freedom to set their own hours, work multiple apps, and be their own boss.",
        "Mandatory benefits would force platforms to cap driver numbers and raise consumer fees.",
        "Many gig workers are students or part-timers who prefer flexibility over rigid employment."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_015",
    "title": "Elimination of Mandatory Retirement Age Policies",
    "category": "Workplace & Economy",
    "prompt": "Do you think employers should be prohibited from enforcing mandatory retirement ages, allowing employees to work as long as they wish? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Allowing Work at Any Age",
      "points": [
        "Protects experienced seniors from age discrimination and financial instability.",
        "Retains invaluable institutional knowledge, mentorship, and expertise in the workforce.",
        "Alleviates nationwide labor shortages in skilled trades and healthcare."
      ]
    },
    "sideB": {
      "label": "In Favor of Reasonable Retirement Ages",
      "points": [
        "Creates career advancement opportunities for younger graduates entering the workforce.",
        "Addresses workplace safety concerns in physically demanding or high-stress occupations.",
        "Encourages timely succession planning and technological renewal in organizations."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_016",
    "title": "Self-Checkout Kiosks Replacing Cashiers in Retail",
    "category": "Workplace & Economy",
    "prompt": "Supermarkets and retail stores are rapidly replacing human cashiers with automated self-checkout machines. Do you believe this trend is overall positive or negative for society? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Positive Trend (Efficient & Convenient)",
      "points": [
        "Reduces checkout wait times and speeds up quick shopping trips for customers.",
        "Lowers operating costs for grocery stores, helping contain retail food prices.",
        "Redirects human staff toward restocking, customer service, and online order fulfillment."
      ]
    },
    "sideB": {
      "label": "Negative Trend (Job Loss & Impersonal)",
      "points": [
        "Eliminates hundreds of thousands of entry-level jobs for students and newcomers.",
        "Creates frustration for elderly shoppers and increases shoplifting / false alarms.",
        "Erodes everyday human social interaction in local communities."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_017",
    "title": "Banning Unpaid Internships Across All Industries",
    "category": "Workplace & Economy",
    "prompt": "Do you think the government should ban all unpaid internships, requiring every intern to be paid at least minimum wage? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Banning Unpaid Internships",
      "points": [
        "Unpaid internships favor wealthy students who can afford to work for free, worsening inequality.",
        "All productive labor deserves fair compensation under standard employment laws.",
        "Prevents corporations from replacing entry-level paid positions with free student labor."
      ]
    },
    "sideB": {
      "label": "Opposed to Banning Educational Internships",
      "points": [
        "Non-profits and small arts organizations cannot afford to offer paid roles.",
        "Provides students with crucial resume experience, professional networking, and academic credit.",
        "Bans would reduce the total number of internship opportunities available to young graduates."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_018",
    "title": "Enacting 'Right to Disconnect' Laws After Working Hours",
    "category": "Workplace & Economy",
    "prompt": "Should governments implement strict 'Right to Disconnect' laws that penalize employers for emailing or messaging employees outside their contracted work hours? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Right to Disconnect Laws",
      "points": [
        "Prevents chronic burnout by establishing clear boundaries between work and family life.",
        "Improves mental health, sleep quality, and personal wellbeing for remote workers.",
        "Forces managers to plan work schedules during daytime business hours effectively."
      ]
    },
    "sideB": {
      "label": "Against Rigid Right to Disconnect Laws",
      "points": [
        "Hinders flexibility for employees who prefer working non-traditional or split hours.",
        "Unrealistic for global businesses operating across multiple international time zones.",
        "Excessive government regulation into private workplace communications."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_019",
    "title": "Mandatory Pay Transparency in Job Postings",
    "category": "Workplace & Economy",
    "prompt": "Should all employers be legally required to publish the exact salary range on every public job advertisement? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Mandatory Pay Transparency",
      "points": [
        "Closes gender and racial wage gaps by eliminating secretive salary negotiations.",
        "Saves immense time for job applicants and recruiters by aligning expectations upfront.",
        "Forces companies to pay fair market rates to retain existing employees."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Salary Publishing",
      "points": [
        "Reduces employer flexibility to offer higher compensation for exceptional unique candidates.",
        "Can create internal workplace friction among existing employees with differing pay rates.",
        "Gives competing companies visibility into confidential compensation strategies."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_020",
    "title": "Automation and Robotics Replacing Entry-Level White-Collar Jobs",
    "category": "Workplace & Economy",
    "prompt": "With rapid advancements in generative AI and software automation, do you think future generations will face permanent scarcity of entry-level career jobs? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Yes (Structural Career Scarcity)",
      "points": [
        "AI handles coding, financial analysis, drafting, and research faster than junior graduates.",
        "Firms hire fewer junior staff, breaking the traditional career apprenticeship pipeline.",
        "Requires universities to completely overhaul curricula to stay relevant."
      ]
    },
    "sideB": {
      "label": "No (Transformation & New Roles)",
      "points": [
        "History proves technology shifts labor toward new, higher-value human specializations.",
        "Increases demand for human judgment, ethics, client empathy, and complex problem-solving.",
        "Lowers barriers for young entrepreneurs to launch their own automated businesses."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your stance in the opening 10 seconds.",
      "Provide 2 strong economic or human wellbeing arguments.",
      "Acknowledge the counter-argument with nuance.",
      "Conclude with an assertive wrap-up."
    ]
  },
  {
    "id": "t7_021",
    "title": "Standardized Testing in Elementary & Secondary Schools",
    "category": "Education & Schooling",
    "prompt": "Do you think standardized provincial testing is an effective method for evaluating student learning and school quality? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Standardized Testing",
      "points": [
        "Provides objective, uniform benchmarks across different regions.",
        "Identifies underperforming schools needing additional funding and support.",
        "Prepares students for high-stakes university exams."
      ]
    },
    "sideB": {
      "label": "Opposed to Standardized Testing",
      "points": [
        "Forces teachers to 'teach to the test' rather than fostering creativity.",
        "Causes extreme test anxiety and doesn't measure critical thinking or emotional intelligence.",
        "Biased against ESL newcomers and socioeconomically disadvantaged students."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_022",
    "title": "Mandatory Financial Literacy Education in High Schools",
    "category": "Education & Schooling",
    "prompt": "Should all high school students be required to complete a mandatory course in personal finance, taxes, and budgeting to graduate? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Mandatory Financial Literacy",
      "points": [
        "Equips young adults with essential real-world skills: filing taxes, managing credit, and investing.",
        "Prevents youth from falling into predatory credit card debt and student loan traps.",
        "Fosters lifelong financial independence and wealth creation."
      ]
    },
    "sideB": {
      "label": "Against Making It a Mandatory Requirement",
      "points": [
        "High school curriculum is already overcrowded with STEM and language requirements.",
        "Parents should be primarily responsible for teaching family financial habits.",
        "Basic financial concepts can be integrated into existing math courses without a new course."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_023",
    "title": "Free Tuition for All Post-Secondary College & University Students",
    "category": "Education & Schooling",
    "prompt": "Do you believe the government should make public college and university tuition completely free for all Canadian citizens? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Free Post-Secondary Tuition",
      "points": [
        "Eliminates student loan debt, allowing young graduates to buy homes and start families sooner.",
        "Ensures equal educational opportunity regardless of family socioeconomic background.",
        "Creates a highly educated, competitive workforce that boosts national innovation."
      ]
    },
    "sideB": {
      "label": "Opposed to Universal Free Tuition",
      "points": [
        "Extremely expensive for taxpayers, potentially requiring higher income taxes.",
        "May devalue university degrees and lead to overcrowded campuses and lower resources.",
        "Targeted grants and income-based loans are more fiscally responsible."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_024",
    "title": "Mandatory School Uniforms in Public Schools",
    "category": "Education & Schooling",
    "prompt": "Do you think public elementary and secondary schools should require all students to wear uniforms? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of School Uniforms",
      "points": [
        "Reduces social pressure, bullying, and visible socioeconomic inequality among students.",
        "Improves school discipline, focus on academics, and sense of community identity.",
        "Saves parents time and money on purchasing expensive designer brand clothing."
      ]
    },
    "sideB": {
      "label": "Opposed to School Uniforms",
      "points": [
        "Restricts student self-expression, individuality, and creativity during formative years.",
        "Adds extra costs for families who must buy both school uniforms and everyday clothing.",
        "Does not address the underlying causes of bullying or academic difficulties."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_025",
    "title": "Replacing Cursive Handwriting with Touch Typing & Coding",
    "category": "Education & Schooling",
    "prompt": "Should schools eliminate teaching cursive handwriting in favor of touch-typing, computer literacy, and coding? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Typing and Coding Priority",
      "points": [
        "Touch-typing and digital literacy are vital essential skills for modern careers.",
        "Coding fosters algorithmic problem-solving and logic from an early age.",
        "Cursive handwriting is virtually obsolete in contemporary workplaces."
      ]
    },
    "sideB": {
      "label": "Support Retaining Cursive Handwriting",
      "points": [
        "Handwriting activates brain regions essential for memory retention and fine motor skills.",
        "Enables students to read historical documents, signatures, and personal letters.",
        "Encourages patience, mindfulness, and artistic hand-eye coordination."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_026",
    "title": "Banning Homework in Elementary Schools",
    "category": "Education & Schooling",
    "prompt": "Do you agree that schools should ban all homework for elementary school children (Grades 1 to 6)? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Banning Elementary Homework",
      "points": [
        "Allows children quality time for family bonding, outdoor play, sports, and adequate sleep.",
        "Studies show elementary homework has minimal correlation with long-term academic success.",
        "Reduces household stress and evening conflicts between parents and children."
      ]
    },
    "sideB": {
      "label": "Opposed to Banning Homework",
      "points": [
        "Builds essential lifelong habits of self-discipline, time management, and responsibility.",
        "Allows parents visibility into what their children are learning in school.",
        "Helps reinforce reading, spelling, and math facts taught during the day."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_027",
    "title": "Year-Round Schooling with Shorter Seasonal Breaks",
    "category": "Education & Schooling",
    "prompt": "Should schools replace the traditional 2-month summer vacation with a year-round calendar featuring 3-week breaks between quarters? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Year-Round Schooling",
      "points": [
        "Eliminates 'summer learning loss' where students forget academic concepts.",
        "Provides regular restorative breaks throughout the year, reducing teacher and student burnout.",
        "Makes family vacations and childcare planning more manageable across all seasons."
      ]
    },
    "sideB": {
      "label": "Support Traditional Summer Vacation",
      "points": [
        "Summer break allows teenagers to work summer jobs and save for post-secondary education.",
        "Enables summer camps, outdoor wilderness programs, and family road trips in Canadian weather.",
        "Many older school buildings lack adequate air conditioning for hot summer months."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_028",
    "title": "Mandatory Bilingual (French & English) Education Across Canada",
    "category": "Education & Schooling",
    "prompt": "Should every Canadian province mandate fluent French and English education for all public school students? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Bilingual Education",
      "points": [
        "Reflects Canada's official bilingual heritage and strengthens national unity.",
        "Bilingualism enhances cognitive flexibility, memory, and executive brain function.",
        "Opens up federal government and international career opportunities for graduates."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Bilingual Mandates",
      "points": [
        "Provinces face severe shortages of qualified French language teachers.",
        "In Western Canada, indigenous languages or Asian languages (Mandarin, Punjabi) may be more locally relevant.",
        "Forces rigid language curricula on students struggling with core literacy and math."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_029",
    "title": "Letter Grades vs. Pass/Fail Grading in Early Education",
    "category": "Education & Schooling",
    "prompt": "Do you think letter grades (A, B, C, D) should be eliminated in elementary schools and replaced with narrative feedback and pass/fail assessments? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Eliminating Letter Grades",
      "points": [
        "Reduces unhealthy academic anxiety, perfectionism, and demoralizing comparisons.",
        "Focuses student attention on learning from feedback rather than chasing scores.",
        "Encourages children to take creative risks without fear of grade penalties."
      ]
    },
    "sideB": {
      "label": "Support Retaining Letter Grades",
      "points": [
        "Provides clear, concise benchmarks for parents to gauge their child's academic progress.",
        "Prepares children for realistic evaluations in secondary and post-secondary education.",
        "Motivates high-achieving students to strive for excellence."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_030",
    "title": "Stricter Government Regulations on Homeschooling",
    "category": "Education & Schooling",
    "prompt": "Should parents who choose to homeschool their children be subject to mandatory standardized testing and strict government curriculum inspections? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Stricter Homeschool Regulations",
      "points": [
        "Ensures every child receives a comprehensive, science-based, and objective education.",
        "Protects vulnerable children from educational neglect or isolation.",
        "Verifies that homeschooled children meet national literacy and numeracy standards."
      ]
    },
    "sideB": {
      "label": "In Favor of Parental Autonomy",
      "points": [
        "Parents have a fundamental right to direct their children's education and values.",
        "Allows personalized, self-paced learning tailored to a child's unique talents.",
        "Over-regulation imposes bureaucratic burdens on successful homeschooling families."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct educational reasons.",
      "Address the counter-view respectfully.",
      "Summarize your stance in conclusion."
    ]
  },
  {
    "id": "t7_031",
    "title": "National Carbon Pricing (Carbon Tax)",
    "category": "Environment & Climate Policy",
    "prompt": "Do you think carbon pricing policies (carbon tax) are an effective and fair way to reduce national greenhouse gas emissions? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Carbon Pricing",
      "points": [
        "Creates a market incentive for businesses and consumers to switch to clean energy.",
        "Carbon rebates return the majority of collected revenues directly to households.",
        "Encourages technological innovation in clean tech, heat pumps, and electric transport."
      ]
    },
    "sideB": {
      "label": "Opposed to Carbon Pricing",
      "points": [
        "Increases daily living costs (fuel, home heating, groceries) during an affordability crisis.",
        "Penalizes rural and northern communities who have no public transit alternatives.",
        "Has minimal global climate impact unless large international emitters match policies."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_032",
    "title": "Mandatory 100% Zero-Emission Vehicles by 2035",
    "category": "Environment & Climate Policy",
    "prompt": "The Canadian government has mandated that all new passenger cars sold by 2035 must be zero-emission (electric). Do you agree with this target? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support 2035 EV Mandate",
      "points": [
        "Dramatically reduces transportation emissions, the second-largest source of pollution.",
        "Drives massive investment in charging infrastructure and battery manufacturing jobs.",
        "Decreases long-term fuel and maintenance expenses for vehicle owners."
      ]
    },
    "sideB": {
      "label": "Opposed to 2035 EV Mandate",
      "points": [
        "EVs remain expensive upfront, making vehicle ownership unaffordable for many families.",
        "Severe cold Canadian winters reduce battery range by up to 40%.",
        "Electrical grid capacity and rural charging networks are not yet ready for full adoption."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_033",
    "title": "Comprehensive Ban on All Single-Use Plastics",
    "category": "Environment & Climate Policy",
    "prompt": "Should governments ban all single-use plastics including food packaging, cups, and containers, even if it raises retail costs? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Total Single-Use Plastic Ban",
      "points": [
        "Drastically reduces ocean plastic pollution, landfill waste, and toxic microplastics in ecosystems.",
        "Accelerates adoption of biodegradable, compostable, and reusable packaging alternatives.",
        "Protects wildlife and marine biodiversity from ingesting plastic debris."
      ]
    },
    "sideB": {
      "label": "Against Extreme Plastic Bans",
      "points": [
        "Alternative materials (paper, aluminum, glass) can have higher carbon footprints in production.",
        "Increases packaging costs, which businesses pass directly to consumers in higher prices.",
        "Certain medical, hygienic, and food preservation applications require sterile plastics."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_034",
    "title": "Expansion of Nuclear Energy for Clean Electricity",
    "category": "Environment & Climate Policy",
    "prompt": "Do you think nuclear power should be heavily expanded to help achieve national clean energy goals? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Nuclear Energy Expansion",
      "points": [
        "Provides massive, reliable zero-emission baseload power that does not depend on weather.",
        "Small Modular Reactors (SMRs) are safe, compact, and ideal for remote communities.",
        "High energy density with significantly smaller land footprint than solar or wind farms."
      ]
    },
    "sideB": {
      "label": "Opposed to Nuclear Power Expansion",
      "points": [
        "Presents long-term environmental hazards regarding toxic radioactive waste storage.",
        "Extremely expensive and takes decades to construct compared to solar and wind.",
        "Catastrophic risk potential in the rare event of natural disaster or human error."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_035",
    "title": "Mandatory Green Energy Retrofits for Existing Homes",
    "category": "Environment & Climate Policy",
    "prompt": "Should the government legally require homeowners to replace older fossil-fuel furnaces with electric heat pumps upon selling their property? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Mandatory Home Retrofits",
      "points": [
        "Residential heating is a major carbon source; heat pumps slash emissions significantly.",
        "Increases home energy efficiency and reduces long-term utility bills for future buyers.",
        "Creates thousands of skilled green construction and HVAC jobs."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Retrofit Laws",
      "points": [
        "Imposes crushing upfront financial costs ($10,000\u2013$20,000) on homeowners before selling.",
        "In sub-zero Canadian winter temperatures (-30\u00b0C), auxiliary heating is still needed.",
        "Infringes on private property ownership rights and complicates real estate transactions."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_036",
    "title": "Meat Consumption Taxes to Combat Climate Change",
    "category": "Environment & Climate Policy",
    "prompt": "Some environmental economists propose adding an eco-tax on beef and red meat to discourage high-emission livestock farming. Do you support this idea? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Meat Eco-Tax",
      "points": [
        "Livestock agriculture generates massive methane emissions, deforestation, and water usage.",
        "Incentivizes consumers to adopt healthier, lower-carbon plant-based diets.",
        "Tax revenues can subsidize organic farming and sustainable agriculture."
      ]
    },
    "sideB": {
      "label": "Opposed to Meat Taxes",
      "points": [
        "Penalizes low-income families by making essential protein and groceries unaffordable.",
        "Hurts domestic Canadian cattle ranchers and agricultural farming communities.",
        "Government should not dictate personal dietary choices through punitive taxation."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_037",
    "title": "Urban Congestion Pricing in Downtown City Cores",
    "category": "Environment & Climate Policy",
    "prompt": "Should major cities charge a daily fee (e.g. $15) for private vehicles entering downtown during rush hours to reduce traffic and pollution? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Congestion Pricing",
      "points": [
        "Significantly reduces downtown gridlock, smog, and vehicle emissions.",
        "Revenues directly fund rapid transit expansion, bike lanes, and bus networks.",
        "Encourages commuters to use subways and trains, making city centers walkable."
      ]
    },
    "sideB": {
      "label": "Against Congestion Pricing",
      "points": [
        "Acts as a regressive tax on suburban workers who lack reliable rapid transit options.",
        "Drives shoppers away from downtown retail stores to suburban malls with free parking.",
        "Increases the cost of doing business for tradespeople and delivery services in the city."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_038",
    "title": "Banning Gas-Powered Lawn Equipment (Mowers & Leaf Blowers)",
    "category": "Environment & Climate Policy",
    "prompt": "Do you think municipalities should ban gas-powered lawnmowers and leaf blowers due to noise and air pollution? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Banning Gas Lawn Equipment",
      "points": [
        "Small two-stroke gas engines produce disproportionate levels of toxic air pollutants and ozone.",
        "Eliminates deafening neighborhood noise pollution, improving quality of life.",
        "Modern cordless electric and battery-powered tools are quiet, clean, and effective."
      ]
    },
    "sideB": {
      "label": "Opposed to Banning Gas Equipment",
      "points": [
        "Forces landscaping businesses and homeowners to discard working tools at great expense.",
        "Battery tools have limited runtime for large rural and commercial properties.",
        "Recycling and disposing of massive lithium batteries creates its own environmental challenge."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_039",
    "title": "Mandatory Water Metering and Tiered Consumption Rates",
    "category": "Environment & Climate Policy",
    "prompt": "Should all residential households be legally required to have water meters and pay higher tiered rates for excessive water use (e.g., lawn watering)? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Water Metering",
      "points": [
        "Incentivizes water conservation and prevents wasteful consumption of treated drinking water.",
        "Fair user-pay principle: households that use less water pay lower utility bills.",
        "Helps municipalities detect underground leaks and plan infrastructure sustainably."
      ]
    },
    "sideB": {
      "label": "Opposed to Tiered Water Rates",
      "points": [
        "Water is a fundamental human necessity that should remain universally accessible and affordable.",
        "Penalizes larger families who naturally consume more water for basic hygiene.",
        "High installation costs for older homes without existing metering infrastructure."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_040",
    "title": "Regulations Against Fast Fashion and Textile Waste",
    "category": "Environment & Climate Policy",
    "prompt": "Should governments penalize clothing manufacturers for producing low-quality 'fast fashion' garments that end up in landfills after minimal wear? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Fast Fashion Regulations",
      "points": [
        "Textile waste is a massive environmental crisis filling landfills with synthetic fabrics.",
        "Forces fashion brands to use durable, recyclable materials and take responsibility for recycling.",
        "Discourages excessive consumer culture and reduces toxic chemical dyes in waterways."
      ]
    },
    "sideB": {
      "label": "Against Fast Fashion Regulations",
      "points": [
        "Makes affordable clothing inaccessible to low-income families and students.",
        "Difficult for governments to define what constitutes 'low-quality' clothing objectively.",
        "Consumer demand and education should drive sustainable choices rather than trade penalties."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "Deliver clear position upfront.",
      "Present 2 solid environmental/economic arguments.",
      "Provide nuanced counter-perspective.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_041",
    "title": "Sugary Drink & Soda Taxation",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should governments implement a special tax on sugary sodas and sweetened drinks to combat obesity and diabetes? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Sugar Tax",
      "points": [
        "Proven to reduce consumption of harmful empty calories, lowering obesity and diabetes rates.",
        "Generates substantial public revenue to fund healthcare and public sports programs.",
        "Pressures beverage companies to reformulate drinks with lower sugar content."
      ]
    },
    "sideB": {
      "label": "Opposed to Sugar Tax",
      "points": [
        "Increases grocery bills unfairly on low-income consumers.",
        "Does not guarantee weight reduction as consumers may switch to other high-calorie foods.",
        "Government should educate consumers rather than taxing personal dietary preferences."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_042",
    "title": "Universal Pharmacare Coverage for All Prescription Drugs",
    "category": "Healthcare & Public Wellness",
    "prompt": "Do you think the government should provide full universal coverage for all prescription medications as part of public healthcare? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Universal Pharmacare",
      "points": [
        "Ensures no citizen is forced to skip life-saving medications due to out-of-pocket costs.",
        "Government bulk purchasing power dramatically lowers drug prices from pharmaceutical companies.",
        "Prevents costly emergency hospital admissions caused by untreated chronic illnesses."
      ]
    },
    "sideB": {
      "label": "Opposed to Full Universal Pharmacare",
      "points": [
        "Massive fiscal cost requiring significant taxpayer funding or higher taxes.",
        "May reduce private employer health benefit incentives and strain public budgets.",
        "Targeted coverage for low-income citizens is more financially sustainable."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_043",
    "title": "Banning Fast-Food Advertising Aimed at Children",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should all advertising and marketing for fast food, candy, and sugary cereals aimed at children under 13 be banned? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "In Favor of Fast-Food Ad Bans",
      "points": [
        "Protects young children who lack cognitive awareness to resist manipulative marketing.",
        "Helps curb childhood obesity and establishes healthier lifelong eating habits.",
        "Supports parents in making nutritious dietary decisions without commercial pestering."
      ]
    },
    "sideB": {
      "label": "Opposed to Advertising Bans",
      "points": [
        "Parents, not government regulators, should take responsibility for children's food choices.",
        "Hurts advertising revenue for children's television networks and educational programming.",
        "Food companies already offer healthier alternatives like fruit and milk options."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_044",
    "title": "Mandatory Paid Mental Health Days for Employees",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should employers be legally required to provide at least 5 dedicated paid mental health days annually, separate from sick leave? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Mental Health Days",
      "points": [
        "Recognizes mental wellness as equally important as physical health, reducing burnout.",
        "Increases workplace productivity, employee retention, and reduces long-term disability claims.",
        "Eliminates stigma surrounding mental health in professional environments."
      ]
    },
    "sideB": {
      "label": "Against Mandated Mental Health Days",
      "points": [
        "Imposes high staffing and financial burdens on small businesses and independent shops.",
        "Existing combined Paid Time Off (PTO) already allows employees to take days as needed.",
        "Risk of policy abuse if employees use mental health days as casual vacation."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_045",
    "title": "Tax Deductions for Gym Memberships and Fitness Activities",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should the government allow citizens to claim fitness gym memberships, sports leagues, and fitness equipment as tax deductions? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Fitness Tax Credits",
      "points": [
        "Incentivizes regular exercise, significantly reducing long-term public healthcare expenditures.",
        "Promotes preventative health, lowering rates of heart disease, obesity, and depression.",
        "Supports local Canadian fitness centers, community sports clubs, and coaches."
      ]
    },
    "sideB": {
      "label": "Against Fitness Tax Credits",
      "points": [
        "Primarily benefits middle-to-high income earners who already afford gym memberships.",
        "Reduces government tax revenue that could be directly invested in free public community parks.",
        "Difficult to monitor and enforce which fitness activities qualify legitimately."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_046",
    "title": "Banning Smoking and Vaping in All Public Parks and Beaches",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should smoking and vaping of tobacco and cannabis be completely prohibited in all public outdoor parks, trails, and beaches? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Complete Outdoor Smoke Bans",
      "points": [
        "Protects children, families, and pets from toxic secondhand smoke and chemical vapor.",
        "Eliminates unsightly cigarette butt litter and reduces forest fire risks in dry seasons.",
        "Promotes healthy, fresh-air outdoor recreational environments for everyone."
      ]
    },
    "sideB": {
      "label": "Opposed to Complete Outdoor Bans",
      "points": [
        "Outdoor air disperses smoke quickly, posing minimal health risk in open spaces.",
        "Infringes on personal freedoms of adults engaging in legal activities outdoors.",
        "Designated smoking areas provide a fair compromise without total prohibition."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_047",
    "title": "Opt-Out (Presumed Consent) System for Organ Donation",
    "category": "Healthcare & Public Wellness",
    "prompt": "Do you think Canada should adopt an 'opt-out' organ donation system, where all deceased adults are presumed donors unless they registered otherwise? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Opt-Out Organ Donation",
      "points": [
        "Dramatically increases available donor organs, saving thousands of lives on transplant waitlists.",
        "Removes administrative friction and decision burden from grieving families during tragedy.",
        "Citizens who object still maintain the complete freedom to opt out easily online."
      ]
    },
    "sideB": {
      "label": "Opposed to Presumed Consent",
      "points": [
        "Violates bodily autonomy by assuming state ownership over human remains by default.",
        "May erode public trust in medical ethics and end-of-life care decisions.",
        "Public education and voluntary donor registry campaigns are more ethically sound."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_048",
    "title": "Front-of-Package Warning Labels on Ultra-Processed Foods",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should health authorities mandate bold warning labels (similar to cigarette warnings) on the front of ultra-processed foods high in sodium, sugar, and saturated fats? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Front-of-Package Warnings",
      "points": [
        "Gives consumers instant, clear nutritional awareness without reading complex fine-print charts.",
        "Empowers families to make healthier grocery choices quickly.",
        "Incentivizes food manufacturers to reduce harmful additive levels to avoid warning badges."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Warning Labels",
      "points": [
        "Oversimplifies complex nutrition by demonizing individual ingredients in isolation.",
        "Increases food manufacturing packaging costs, driving up retail grocery prices.",
        "Can cause unnecessary consumer alarm over foods that are safe when eaten in moderation."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_049",
    "title": "Mandatory Annual Driving Health Tests for Drivers Over 75",
    "category": "Healthcare & Public Wellness",
    "prompt": "Should drivers over the age of 75 be legally required to pass annual cognitive and vision tests to maintain their driver's license? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Senior Driving Tests",
      "points": [
        "Protects public safety by identifying age-related vision loss, delayed reflexes, and cognitive decline.",
        "Reduces catastrophic motor vehicle collisions on highways and pedestrian crosswalks.",
        "Provides objective medical assessments rather than relying on family intervention."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Age-Based Tests",
      "points": [
        "Discriminates against seniors based on chronological age rather than individual driving records.",
        "Can unfairly strip independent mobility and isolate seniors in areas without public transit.",
        "Creates long waitlists and administrative backlogs at licensing and medical centers."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_050",
    "title": "Private vs. Public Healthcare Service Delivery",
    "category": "Healthcare & Public Wellness",
    "prompt": "Some Canadian provinces are expanding private surgical clinics within the public healthcare funding model. Do you support the expansion of private clinics to reduce surgical wait times? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Private Clinic Partnerships",
      "points": [
        "Significantly reduces surgical backlog and wait times for procedures like cataract and knee surgeries.",
        "Frees up major public hospital operating rooms for complex emergency traumas.",
        "Patients still pay zero out-of-pocket fees using their provincial health cards."
      ]
    },
    "sideB": {
      "label": "Opposed to Expanding Private Clinics",
      "points": [
        "Drains doctors, nurses, and anesthesiologists away from the public hospital system.",
        "Private clinics prioritize profitable, simple procedures, leaving complex costly cases to public hospitals.",
        "Risks creating a two-tiered healthcare system that undermines universal equality."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State position clearly.",
      "Develop 2 comprehensive public health arguments.",
      "Provide balanced counter-argument acknowledgment.",
      "Deliver strong final summary."
    ]
  },
  {
    "id": "t7_051",
    "title": "Lowering the Federal Voting Age to 16",
    "category": "Civic Life & Governance",
    "prompt": "Do you think the legal voting age in municipal, provincial, and federal elections should be lowered from 18 to 16? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Voting Age 16",
      "points": [
        "Engages youth in democratic civic participation early while still in high school.",
        "16-year-olds work, pay income taxes, and drive; they deserve democratic representation.",
        "Instills lifelong voting habits and strengthens voter turnout."
      ]
    },
    "sideB": {
      "label": "Opposed to Lowering Voting Age",
      "points": [
        "Most 16-year-olds lack political maturity, economic experience, and financial independence.",
        "Brain development and risk assessment are still maturing during early adolescence.",
        "Current age of 18 aligns with legal adulthood, military service, and contract signing."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_052",
    "title": "Mandatory Civic Voting (Fines for Non-Voters)",
    "category": "Civic Life & Governance",
    "prompt": "Should Canada adopt mandatory voting (like Australia), where eligible citizens face a small fine if they fail to cast a ballot in elections? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Voting",
      "points": [
        "Ensures election outcomes truly reflect the democratic will of the entire population.",
        "Forces political parties to address issues affecting all demographics, not just active voters.",
        "Dramatically boosts civic engagement and legitimacy of elected governments."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Voting",
      "points": [
        "The right to vote in a free democracy inherently includes the freedom not to vote.",
        "Forces uninformed or indifferent citizens to cast random ballots, degrading vote quality.",
        "Government should inspire voter participation rather than using punitive penalties."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_053",
    "title": "Public Funding for Arts, Museums & Heritage Sites",
    "category": "Civic Life & Governance",
    "prompt": "Do you think government should spend taxpayer money on funding public art, cultural museums, and heritage sites, especially during economic downturns? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Public Arts & Heritage Funding",
      "points": [
        "Preserves national history, cultural heritage, and shared identity for future generations.",
        "Attracts domestic and international tourism, generating substantial economic activity.",
        "Enriches community quality of life, education, and inspiration for young artists."
      ]
    },
    "sideB": {
      "label": "Opposed to Public Arts Funding in Deficits",
      "points": [
        "Public funds should prioritize essential crisis needs: healthcare, housing, and infrastructure.",
        "Arts organizations and museums should rely on private philanthropy, ticket sales, and corporate sponsors.",
        "Subjective government spending on modern art often does not align with public priorities."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_054",
    "title": "24-Hour Public Transit in Major Metropolitan Cities",
    "category": "Civic Life & Governance",
    "prompt": "Should major Canadian cities operate subway and light rail transit 24 hours a day, 7 days a week? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support 24/7 Public Transit",
      "points": [
        "Crucial for night-shift workers (nurses, hospitality staff, emergency workers, factory staff).",
        "Reduces drunk driving and dangerous late-night road accidents significantly.",
        "Stimulates vibrant 24-hour urban economies, night markets, and entertainment districts."
      ]
    },
    "sideB": {
      "label": "Opposed to 24/7 Transit",
      "points": [
        "Leaves zero time for essential nighttime track maintenance, safety inspections, and cleaning.",
        "Extremely expensive to operate empty trains during low-demand hours from 2 AM to 5 AM.",
        "Night buses provide a flexible, cost-effective alternative for late-night transit."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_055",
    "title": "Mandatory High School Community Volunteer Hours",
    "category": "Civic Life & Governance",
    "prompt": "Many school boards require students to complete 40 hours of unpaid volunteer service to graduate high school. Do you support this requirement? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Volunteer Requirement",
      "points": [
        "Fosters civic responsibility, empathy, and connection with local charities and food banks.",
        "Helps youth build real-world resume experience and professional networking skills.",
        "Exposes students to diverse community challenges outside their comfort zones."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Volunteering",
      "points": [
        "Mandating unpaid labor contradicts the true spirit of altruistic, voluntary community service.",
        "Places heavy burden on low-income students who must work paid part-time jobs to support families.",
        "Often results in students doing low-effort busywork just to get hours signed off."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_056",
    "title": "Legalizing Controlled Street Graffiti Art Zones",
    "category": "Civic Life & Governance",
    "prompt": "Should municipal governments create designated legal public walls and zones for street graffiti artists? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Legal Street Art Zones",
      "points": [
        "Transforms boring concrete alleys and underpasses into vibrant open-air cultural art galleries.",
        "Provides a creative outlet for talented urban artists and fosters tourist interest.",
        "Reduces illegal vandalism on private property by providing legitimate painting spaces."
      ]
    },
    "sideB": {
      "label": "Against Legal Graffiti Zones",
      "points": [
        "Can attract gang tagging, litter, and spills into surrounding residential neighborhoods.",
        "Difficult for city staff to monitor appropriate content and prevent offensive imagery.",
        "May encourage graffiti vandalism on adjacent private buildings."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_057",
    "title": "Historic Preservation vs. New Housing Construction",
    "category": "Civic Life & Governance",
    "prompt": "Should cities allow historic heritage buildings to be demolished to build high-density modern apartment towers? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Modern Housing Redevelopment",
      "points": [
        "Solving severe urban housing shortages and affordability crises is far more important than old brick facades.",
        "Modern towers are energy-efficient, accessible, and provide hundreds of family homes.",
        "Many designated heritage buildings are seismically unsafe, drafty, and asbestos-ridden."
      ]
    },
    "sideB": {
      "label": "Support Historic Preservation",
      "points": [
        "Preserves unique architectural character, neighborhood history, and cultural identity.",
        "Demolishing heritage destroys irreplaceable urban charm that defines city tourism.",
        "Adaptive reuse (renovating historic interiors into modern units) provides a better balance."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_058",
    "title": "Youth Curfew Laws in Commercial Districts",
    "category": "Civic Life & Governance",
    "prompt": "Should cities implement nighttime curfews (e.g. 10:00 PM) for unaccompanied youths under 16 in public shopping districts to prevent vandalism? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Youth Curfews",
      "points": [
        "Reduces late-night youth loitering, retail theft, and property vandalism in shopping malls.",
        "Protects minors from becoming victims of late-night street crime and violence.",
        "Encourages parental accountability and ensures youth get adequate sleep on school nights."
      ]
    },
    "sideB": {
      "label": "Opposed to Youth Curfews",
      "points": [
        "Unfairly criminalizes and discriminates against the vast majority of law-abiding young people.",
        "Infringes on constitutional freedom of movement in public spaces.",
        "Does not address the root causes of youth crime, such as lack of youth recreation centers."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_059",
    "title": "Citizen Juries for Local Policy Decisions",
    "category": "Civic Life & Governance",
    "prompt": "Should local governments use randomly selected 'citizen juries' of everyday residents to make decisions on major zoning and budget issues? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Citizen Juries",
      "points": [
        "Bypasses political partisanship and corporate lobbying, reflecting genuine community interest.",
        "Deepens democratic trust by giving ordinary citizens direct decision-making power.",
        "Encourages thorough deliberation based on expert testimony rather than political soundbites."
      ]
    },
    "sideB": {
      "label": "Opposed to Citizen Juries",
      "points": [
        "Ordinary citizens lack technical expertise in complex municipal finance and urban planning.",
        "Elected council members are accountable to all voters in regular elections, unlike random juries.",
        "Can be easily swayed by emotional arguments or vocal single-issue advocates."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_060",
    "title": "Municipal Responsibility for Clearing Private Sidewalk Snow",
    "category": "Civic Life & Governance",
    "prompt": "Should cities take over the responsibility of clearing snow and ice from all residential sidewalks, funded through property taxes? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Municipal Sidewalk Clearing",
      "points": [
        "Ensures consistent, reliable accessibility for seniors, disabled residents, and strollers across the city.",
        "Prevents severe slip-and-fall injuries on icy walkways outside absentee landlord properties.",
        "Municipal plows clear entire neighborhoods quickly and uniformly after winter storms."
      ]
    },
    "sideB": {
      "label": "Support Homeowner Snow Responsibility",
      "points": [
        "Massive taxpayer cost requiring fleets of specialized mini-tractors and operators.",
        "Plows frequently damage private sod, driveways, irrigation heads, and decorative curbs.",
        "Homeowners can clear their own sidewalks immediately without waiting days for city crews."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_061",
    "title": "Eliminating Single-Family Zoning for Multi-Family Housing",
    "category": "Housing & Urban Planning",
    "prompt": "Should cities eliminate exclusive single-family detached zoning to allow triplexes, fourplexes, and townhomes on all residential lots? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Eliminating Single-Family Zoning",
      "points": [
        "Increases housing supply in desirable neighborhoods, making homes more affordable.",
        "Prevents destructive suburban sprawl by utilizing existing city infrastructure.",
        "Allows multi-generational families and young workers to live close to downtown jobs."
      ]
    },
    "sideB": {
      "label": "Opposed to Ending Single-Family Zoning",
      "points": [
        "Overwhelms neighborhood street parking, sewage capacity, and local elementary schools.",
        "Changes the quiet, green character and tree canopy of established residential avenues.",
        "Does not guarantee affordability as developers may build luxury high-end multi-unit condos."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_062",
    "title": "Strict Banning of Short-Term Rentals (Airbnb)",
    "category": "Housing & Urban Planning",
    "prompt": "Should cities completely ban short-term vacation rentals like Airbnb in residential neighborhoods? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Complete Airbnb Ban",
      "points": [
        "Returns thousands of residential properties back into the long-term rental market for local residents.",
        "Reduces artificial rental price inflation caused by commercial investor bidding.",
        "Eliminates neighborhood nuisance: noisy rotating tourists, trash, and party houses."
      ]
    },
    "sideB": {
      "label": "Opposed to Full Airbnb Bans",
      "points": [
        "Allows homeowners to earn supplementary income to afford rising mortgage payments.",
        "Provides affordable, flexible accommodations for traveling families and visiting professionals.",
        "Banning hurts local tourism and independent hospitality businesses."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_063",
    "title": "Strict Government Rent Control Caps",
    "category": "Housing & Urban Planning",
    "prompt": "Do you think governments should enforce strict annual rent increase caps (e.g. max 2% per year) on all rental properties? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Strict Rent Control",
      "points": [
        "Protects vulnerable tenants and families from sudden, unaffordable rent spikes and eviction.",
        "Ensures community stability and prevents displacement of low-and-middle income workers.",
        "Encourages long-term residency and neighborhood social cohesion."
      ]
    },
    "sideB": {
      "label": "Opposed to Strict Rent Control",
      "points": [
        "Discourages developers and landlords from building new rental apartments or investing in repairs.",
        "Shrinks the overall long-term rental housing supply, making it impossible for newcomers to find units.",
        "Landlords cannot cover surging inflation costs (property taxes, insurance, utilities, maintenance)."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_064",
    "title": "Replacing Car Lanes with Protected Bicycle Lanes",
    "category": "Housing & Urban Planning",
    "prompt": "Should municipal governments convert major vehicle traffic lanes into protected bicycle lanes on busy commuter roads? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Protected Bike Lanes",
      "points": [
        "Encourages zero-emission healthy active transportation, reducing overall city carbon footprint.",
        "Protects cyclists from fatal vehicle collisions, making cycling safe for all ages.",
        "Studies show bike lanes generate higher foot traffic and retail spending for local street shops."
      ]
    },
    "sideB": {
      "label": "Opposed to Converting Car Lanes",
      "points": [
        "Worsens traffic gridlock, idling emissions, and commuter delays for buses and cars.",
        "Underutilized during 5 months of cold, snowy Canadian winter conditions.",
        "Hinders emergency vehicle access and commercial delivery truck loading zones."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_065",
    "title": "Mandatory 20% Affordable Housing in All New Condo Towers",
    "category": "Housing & Urban Planning",
    "prompt": "Should developers be legally required to designate at least 20% of units in new condo high-rises as below-market affordable housing? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Affordable Inclusion",
      "points": [
        "Creates mixed-income, diverse communities rather than exclusive luxury enclaves.",
        "Integrates affordable housing seamlessly into transit-oriented developments.",
        "Ensures essential workers (teachers, healthcare staff, service workers) can live in the city."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Inclusionary Zoning",
      "points": [
        "Developers pass the subsidized unit costs onto regular buyers, driving market prices higher.",
        "May make development projects financially unviable, causing developers to cancel projects.",
        "Government subsidies and dedicated non-profit housing funds are more economically efficient."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_066",
    "title": "Urban Growth Boundaries to Halt Suburban Sprawl",
    "category": "Housing & Urban Planning",
    "prompt": "Should provinces enforce strict permanent urban growth boundaries that prohibit building on surrounding agricultural and wilderness land? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Urban Growth Boundaries",
      "points": [
        "Protects prime agricultural food-growing farmland and critical biodiversity ecosystems.",
        "Forces smart urban densification, reducing municipal infrastructure costs (pipes, roads).",
        "Prevents long, soul-crushing highway commutes and smog pollution."
      ]
    },
    "sideB": {
      "label": "Opposed to Rigid Growth Boundaries",
      "points": [
        "Severely constrains available land supply, driving detached home prices to astronomical levels.",
        "Restricts family choices for people who want private backyards and quiet suburban living.",
        "Pushes development even further beyond the greenbelt boundary into distant rural towns."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_067",
    "title": "Pedestrian-Only Downtown Commercial Streets",
    "category": "Housing & Urban Planning",
    "prompt": "Should major cities permanently close main downtown retail streets to all private car traffic to create walking-only pedestrian plazas? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Pedestrian-Only Plazas",
      "points": [
        "Creates vibrant, safe community spaces with outdoor cafe dining, street performers, and greenery.",
        "Dramatically increases retail foot traffic, sales, and tourist appeal.",
        "Eliminates vehicle pedestrian collisions and reduces street-level exhaust pollution."
      ]
    },
    "sideB": {
      "label": "Against Pedestrian-Only Closures",
      "points": [
        "Disrupts vehicle access for elderly and disabled shoppers who cannot walk long distances.",
        "Diverts heavy traffic onto adjacent quiet residential side streets.",
        "Creates severe delivery logistics headaches for restaurants and retail inventory trucks."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_068",
    "title": "Public Parks vs. High-Density Affordable Housing Development",
    "category": "Housing & Urban Planning",
    "prompt": "If a city owns surplus public land, should it prioritize building affordable housing or creating new green public parks? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Prioritize Affordable Housing",
      "points": [
        "The housing shortage is a critical human survival emergency; shelter takes priority.",
        "Provides secure homes for homeless and low-income families close to transit.",
        "Parks do not solve homelessness or skyrocketing rents."
      ]
    },
    "sideB": {
      "label": "Prioritize Green Public Parks",
      "points": [
        "Urban green spaces are vital for mental health, children's play, and community recreation.",
        "Once green space is developed with concrete, it is lost forever for future generations.",
        "Parks cool urban heat islands and absorb stormwater runoff naturally."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_069",
    "title": "Legalizing Tiny Homes and Garden Suites on Residential Properties",
    "category": "Housing & Urban Planning",
    "prompt": "Should municipalities legalize detached 'tiny homes' and backyard garden suites on all residential properties? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Tiny Homes & Garden Suites",
      "points": [
        "Creates gentle, affordable infill housing options for students, young workers, and aging grandparents.",
        "Provides homeowners with rental income to help pay mortgages.",
        "Utilizes existing residential lots and utilities without altering neighborhood scale."
      ]
    },
    "sideB": {
      "label": "Opposed to Unrestricted Backyard Suites",
      "points": [
        "Reduces private backyard green space, mature trees, and stormwater absorption.",
        "Increases on-street parking congestion and noise in quiet residential areas.",
        "May strain neighborhood privacy as upper windows overlook adjacent private yards."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_070",
    "title": "Foreign Real Estate Buyer Restrictions",
    "category": "Housing & Urban Planning",
    "prompt": "Should Canada maintain a permanent nationwide ban on non-resident foreign buyers purchasing residential real estate? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Foreign Buyer Ban",
      "points": [
        "Prevents international speculative capital from inflating domestic home prices beyond local wages.",
        "Ensures Canadian residential housing is treated as homes for residents rather than financial assets.",
        "Protects young Canadian families and newcomers trying to buy their first home."
      ]
    },
    "sideB": {
      "label": "Opposed to Foreign Buyer Bans",
      "points": [
        "Foreign buyers represent a tiny percentage of home purchases and are not the root cause of high prices.",
        "Discourages international investment in large-scale residential construction projects.",
        "Sends a negative message to international skilled workers and investors considering immigration."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_071",
    "title": "Canadian Content (CanCon) Quotas on Streaming Platforms",
    "category": "Media, Culture & Arts",
    "prompt": "Should streaming platforms like Netflix, Spotify, and YouTube be legally required to promote and fund a mandatory percentage of Canadian content (CanCon)? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support CanCon Quotas on Streaming",
      "points": [
        "Protects and nurtures Canadian cultural identity, stories, and independent artists in a globalized market.",
        "Ensures major multi-billion dollar foreign tech platforms reinvest profits back into Canadian creators.",
        "Levels the playing field between traditional Canadian broadcasters and foreign digital giants."
      ]
    },
    "sideB": {
      "label": "Opposed to Streaming CanCon Mandates",
      "points": [
        "Algorithms should recommend content based on consumer preferences, not government quotas.",
        "May increase monthly streaming subscription prices for Canadian consumers.",
        "Risk of foreign platforms limiting their content libraries in Canada to comply with regulations."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_072",
    "title": "Government Subsidies for National Public Broadcasting (CBC/Radio-Canada)",
    "category": "Media, Culture & Arts",
    "prompt": "Should the federal government continue spending over $1 billion annually of taxpayer funds to subsidize public broadcasting? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Public Broadcasting Funding",
      "points": [
        "Provides reliable, ad-free journalism, local news, and emergency broadcasting to remote northern communities.",
        "Unites the country through high-quality Canadian storytelling, cultural arts, and sports.",
        "Operates free from corporate advertiser influence and commercial sensationalism."
      ]
    },
    "sideB": {
      "label": "Opposed to Public Broadcasting Subsidies",
      "points": [
        "In the modern digital streaming era with thousands of news outlets, state-funded media is unnecessary.",
        "Taxpayer funds should be redirected toward healthcare, defense, and housing.",
        "Commercial private news organizations must compete unfairly against a subsidized competitor."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_073",
    "title": "Mandatory Sponsorship Disclosure for Social Media Influencers",
    "category": "Media, Culture & Arts",
    "prompt": "Should social media influencers face severe financial penalties if they fail to clearly disclose paid brand sponsorships and gifted products? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Influencer Disclosures",
      "points": [
        "Protects young followers from deceptive, hidden marketing masquerading as genuine personal advice.",
        "Ensures transparency, honesty, and consumer protection in the booming digital advertising economy.",
        "Holds influencers to the same legal advertising standards as traditional TV and print media."
      ]
    },
    "sideB": {
      "label": "Opposed to Heavy Government Penalties",
      "points": [
        "Social media is casual, decentralized, and difficult for regulatory bodies to police fairly.",
        "Penalizes small micro-influencers and content creators for minor technical caption oversights.",
        "Consumers are already savvy enough to recognize sponsored content naturally."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_074",
    "title": "Public Funding for Indigenous Language Revitalization",
    "category": "Media, Culture & Arts",
    "prompt": "Should the federal government significantly expand funding to teach Indigenous languages in schools and public institutions across Canada? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Indigenous Language Funding",
      "points": [
        "A crucial, tangible step toward reconciliation, healing historical trauma, and preserving heritage.",
        "Indigenous languages carry deep traditional knowledge, ecological wisdom, and cultural identity.",
        "Prevents endangered ancient Canadian languages from going completely extinct."
      ]
    },
    "sideB": {
      "label": "Opposed to Expanded Language Mandates",
      "points": [
        "Public education funding should prioritize core universal subjects: science, math, and digital skills.",
        "Language preservation should be led and funded within local community councils rather than national mandates.",
        "Severe shortage of certified fluent language instructors makes large-scale rollout impractical."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_075",
    "title": "Government Tax Credits to Save Local Print Newspapers",
    "category": "Media, Culture & Arts",
    "prompt": "Should the government provide tax subsidies to rescue struggling local print newspapers from bankruptcy? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Local Journalism Subsidies",
      "points": [
        "Local community journalism holds municipal politicians accountable and uncovers local corruption.",
        "Print newspapers are essential information sources for seniors without internet access.",
        "Prevents 'news deserts' where communities have zero reliable local news coverage."
      ]
    },
    "sideB": {
      "label": "Opposed to Newspaper Bailouts",
      "points": [
        "Print media is an obsolete, dying format; government should not prop up failing business models.",
        "Creates a conflict of interest where journalists may hesitate to criticize the government funding them.",
        "Digital online blogs, podcasts, and independent platforms are naturally replacing print media."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_076",
    "title": "Social Media Platform Liability for User Content Moderation",
    "category": "Media, Culture & Arts",
    "prompt": "Should social media companies be held legally liable in court for failing to remove hate speech, deepfakes, and harassment posted by their users? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Platform Legal Liability",
      "points": [
        "Forces multi-billion dollar tech platforms to invest heavily in safety, moderation, and user protection.",
        "Curb the spread of toxic disinformation, automated scams, and targeted online harassment.",
        "Tech companies monetize user engagement and must take responsibility for public harm."
      ]
    },
    "sideB": {
      "label": "Opposed to Platform Liability",
      "points": [
        "Forces platforms to aggressively censor controversial opinions and free speech to avoid lawsuits.",
        "Technically impossible to moderate billions of real-time posts without broad algorithmic overreach.",
        "Individual users who create harmful illegal content should be held liable, not the hosting platform."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_077",
    "title": "Public Libraries Transforming into Community Digital Tech Hubs",
    "category": "Media, Culture & Arts",
    "prompt": "Should public libraries reduce their physical book collections to make room for 3D printers, podcast studios, and computer training labs? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Modern Digital Tech Hubs",
      "points": [
        "Equips low-income citizens and students with free access to expensive modern technology.",
        "Keeps public libraries relevant, vibrant, and highly utilized in the digital era.",
        "Fosters digital literacy, technological skills, and community entrepreneurship."
      ]
    },
    "sideB": {
      "label": "Support Traditional Book Collections",
      "points": [
        "Libraries are one of the last quiet sanctuaries dedicated to reading, study, and physical literature.",
        "E-books and digital screens cannot replace the tactile learning and focus of real books.",
        "Tech equipment is expensive to maintain and quickly becomes obsolete compared to enduring books."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_078",
    "title": "Copyright Protections for AI-Generated Artwork & Literature",
    "category": "Media, Culture & Arts",
    "prompt": "Should artwork, music, and writing generated by artificial intelligence be eligible for copyright ownership by the prompt creator? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support AI Copyright Protections",
      "points": [
        "Recognizes the human creative effort, prompt curation, and iterative design involved in AI generation.",
        "Incentivizes commercial investment in AI creative tools, video games, and entertainment.",
        "Protects AI artists from having their generated works stolen and monetized by competitors."
      ]
    },
    "sideB": {
      "label": "Opposed to AI Copyright Protections",
      "points": [
        "Copyright exists to reward original human biological creativity, not mathematical algorithms.",
        "AI models are trained by scraping millions of human artists' works without consent.",
        "Granting copyright to machine outputs would flood registries with millions of low-effort creations."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_079",
    "title": "Mandatory Age Ratings & Playtime Limits on Video Games",
    "category": "Media, Culture & Arts",
    "prompt": "Should governments enforce mandatory daily playtime limits (e.g. 2 hours) on online video games for players under 18? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Mandatory Playtime Limits",
      "points": [
        "Combats severe video game addiction, sleep deprivation, and academic failure among teens.",
        "Protects minors from predatory microtransactions, loot boxes, and gambling mechanics.",
        "Encourages youth to engage in outdoor physical sports, homework, and family activities."
      ]
    },
    "sideB": {
      "label": "Opposed to Government Gaming Limits",
      "points": [
        "Parental supervision and household rules should govern recreation, not state regulations.",
        "Technically difficult to enforce without invasive identity and facial scanning verification.",
        "Video games foster strategic thinking, hand-eye coordination, and global teamwork."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_080",
    "title": "Celebrities & Influencers Using Platforms for Political Endorsements",
    "category": "Media, Culture & Arts",
    "prompt": "Do you think high-profile celebrities and influencers should use their platforms to endorse political candidates and social causes? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Celebrity Endorsements",
      "points": [
        "Engages millions of young and apathetic citizens in democratic voting and social justice.",
        "Celebrities have the democratic freedom of speech to advocate for their beliefs.",
        "Raises massive public awareness and fundraising for urgent humanitarian and environmental causes."
      ]
    },
    "sideB": {
      "label": "Opposed to Celebrity Endorsements",
      "points": [
        "Celebrities often lack deep geopolitical and economic expertise, leading to shallow partisan division.",
        "Fans may blindly follow endorsements without researching policies and candidates independently.",
        "Alienates diverse audiences and polarizes cultural entertainment into political battlegrounds."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_081",
    "title": "Elimination of Tipping Culture in Restaurants",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Do you think the tipping system in Canadian restaurants should be eliminated and replaced with higher hourly wages and all-inclusive menu pricing? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Eliminating Tipping",
      "points": [
        "Guarantees stable, predictable living wages for servers regardless of shift times or slow days.",
        "Eliminates racial and gender bias in tip distribution and reduces wage disparity with kitchen staff.",
        "Provides honest, upfront transparent menu pricing for consumers without surprise tip prompts."
      ]
    },
    "sideB": {
      "label": "Support Retaining Tipping System",
      "points": [
        "Allows hard-working, charismatic servers to earn substantially higher income than standard wages.",
        "Incentivizes exceptional customer service, attentiveness, and culinary hospitality.",
        "Eliminating tipping would force restaurant owners to hike menu prices by 20\u201325%."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_082",
    "title": "Right to Repair Legislation for Electronics & Appliances",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should electronics manufacturers (Apple, Samsung, etc.) be legally forced to provide affordable spare parts, manuals, and diagnostic tools to independent repair shops and consumers? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Right to Repair Laws",
      "points": [
        "Saves consumers hundreds of dollars by allowing cheap repairs rather than buying new devices.",
        "Massively reduces toxic electronic waste (e-waste) filling Canadian landfills.",
        "Supports local independent repair businesses and technical entrepreneurship."
      ]
    },
    "sideB": {
      "label": "Opposed to Right to Repair Mandates",
      "points": [
        "Opening complex devices creates safety hazards with high-voltage lithium battery fires.",
        "Unauthorized third-party parts can compromise device security, water resistance, and user data.",
        "Infringes on manufacturers' proprietary engineering, patents, and intellectual property."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_083",
    "title": "Strict Banning of Free Returns on E-Commerce Platforms",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should online retailers be discouraged or taxed for offering free returns, which result in millions of returned items being discarded in landfills? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Restricting Free Returns",
      "points": [
        "Curb excessive impulse buying where consumers order multiple sizes and return all but one.",
        "Drastically cuts carbon emissions from return delivery trucks and reduces packaging waste.",
        "Protects retailers from bearing immense return shipping and processing costs."
      ]
    },
    "sideB": {
      "label": "Support Free Return Policies",
      "points": [
        "Essential for online shopping where consumers cannot physically try on clothes or inspect items.",
        "Protects consumers from receiving defective, poor-quality, or ill-fitting merchandise.",
        "Free returns build customer trust, brand loyalty, and drive digital e-commerce growth."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_084",
    "title": "Mandatory Ethical & Carbon Footprint Labeling on Clothing",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should all clothing brands be legally required to display an environmental sustainability and fair-trade labor score on garment price tags? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Ethical Clothing Labels",
      "points": [
        "Empowers consumers to make conscious ethical choices and avoid polluting fast fashion.",
        "Pressures fashion corporations to clean up supply chains and pay fair living wages in factories.",
        "Exposes deceptive 'greenwashing' claims made by multi-national apparel companies."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Garment Labeling",
      "points": [
        "Adds expensive administrative compliance and testing costs that raise clothing prices.",
        "Difficult to audit and verify complex international textile supply chains accurately.",
        "Most consumers prioritize affordability and style over environmental scorecards."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_085",
    "title": "One-Click Universal Subscription Cancellation Laws",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should companies be legally required to make canceling a subscription as easy and fast (single click) as signing up? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support One-Click Cancellation Laws",
      "points": [
        "Protects consumers from deceptive 'dark patterns' that require long phone calls or maze-like websites.",
        "Saves consumers millions of dollars in forgotten or trapped recurring monthly charges.",
        "Promotes healthy, transparent competition where services retain customers through quality, not traps."
      ]
    },
    "sideB": {
      "label": "Opposed to Rigid Cancellation Mandates",
      "points": [
        "Companies should have the legitimate opportunity to offer discounts or pause options to retain users.",
        "May increase accidental cancellations by users clicking mistakenly.",
        "Standard consumer protection laws already exist without micro-managing website interface designs."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_086",
    "title": "Complete Ban on Cosmetic Testing on Animals Worldwide",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should all cosmetic and skincare products tested on animals be permanently banned from sale in Canada? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Animal Testing Ban",
      "points": [
        "Cosmetic testing causes unnecessary cruelty, suffering, and death to sentient animals.",
        "Modern synthetic human cell cultures, organ-on-a-chip, and computer modeling are more accurate.",
        "Thousands of ethical cosmetic brands already thrive using proven safe ingredients."
      ]
    },
    "sideB": {
      "label": "Opposed to Complete Bans",
      "points": [
        "Certain complex chemical compound reactions cannot yet be fully simulated in synthetic computer models.",
        "May limit consumer access to innovative anti-aging and dermatological skincare treatments.",
        "Animal welfare can be protected through strict humane laboratory protocols rather than total bans."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_087",
    "title": "Anti-Price-Gouging Regulations on Large Grocery Chains",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should the federal government impose strict profit margin caps and price regulations on major supermarket chains during periods of high food inflation? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Grocery Price Regulations",
      "points": [
        "Food is an essential human right; corporations should not generate record profits during an inflation crisis.",
        "Protects vulnerable low-income families, students, and seniors from food insecurity.",
        "Fosters fair marketplace competition and reins in corporate oligopoly power."
      ]
    },
    "sideB": {
      "label": "Opposed to Grocery Price Controls",
      "points": [
        "Price controls historically create severe food shortages, empty shelves, and supply chain disruptions.",
        "Supermarkets operate on razor-thin net profit margins (typically 2\u20133%); inflation is driven by global farm costs.",
        "Discourages grocery chains from investing in new store openings in underserved rural areas."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_088",
    "title": "Government Subsidies for Buying Locally Grown Food",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should the government offer consumer tax rebates or subsidies when purchasing locally grown Canadian agricultural produce over cheaper imports? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Local Food Subsidies",
      "points": [
        "Strengthens domestic food security and supports local Canadian farmers and rural economies.",
        "Reduces long-distance international shipping emissions and carbon footprint.",
        "Ensures fresh, high-quality, pesticide-regulated produce on family dinner tables."
      ]
    },
    "sideB": {
      "label": "Opposed to Local Food Subsidies",
      "points": [
        "Expensive for taxpayers and distorts international trade agreements.",
        "Canada's cold winter climate cannot grow diverse fruits and vegetables year-round.",
        "Higher imported food prices would hurt low-income families needing affordable options."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_089",
    "title": "Complete Ban on Commercial Advertising Targeted at Children Under 13",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should Canada expand Quebec's ban on all commercial advertising aimed at children under 13 nationwide? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Nationwide Child Ad Ban",
      "points": [
        "Children lack cognitive maturity to distinguish commercial advertising from reality.",
        "Prevents manipulative toy and food marketing that creates family tension and pestering.",
        "Encourages children to value creativity and real experiences over material consumerism."
      ]
    },
    "sideB": {
      "label": "Opposed to Total Commercial Ad Bans",
      "points": [
        "Hurts revenue for children's entertainment, cartoons, and educational media creators.",
        "Parents should teach children critical thinking and financial discernment about advertisements.",
        "Businesses should have the freedom to inform consumers about new educational toys and books."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_090",
    "title": "Mandatory Zero-Waste Package-Free Grocery Aisles",
    "category": "Consumer Ethics & Marketplace",
    "prompt": "Should large supermarkets be required to convert at least 30% of their floor space to package-free, bulk-refill stations where customers bring their own containers? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Package-Free Grocery Aisles",
      "points": [
        "Drastically slashes plastic wrapping, cardboard boxes, and single-use packaging waste.",
        "Allows shoppers to buy exact quantities needed, reducing household food waste and saving money.",
        "Shifts industry norms toward sustainable circular economy packaging."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Refill Aisles",
      "points": [
        "Creates significant sanitation, cross-contamination, and food allergen safety risks.",
        "Inconvenient for busy shoppers who must clean, carry, and weigh dozens of heavy glass jars.",
        "Requires expensive store remodeling that will raise general food prices."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_091",
    "title": "Public Funding for Space Exploration vs. Earth Problems",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should governments invest billions of dollars into deep space exploration and Mars missions while urgent housing and poverty crises exist on Earth? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Space Exploration Funding",
      "points": [
        "Drives breakthrough technological innovations (GPS, satellite weather tracking, solar cells, medical tech).",
        "Inspires future generations in STEM fields and secures long-term survival of human civilization.",
        "Space exploration budget is a tiny fraction of national spending with massive technological returns."
      ]
    },
    "sideB": {
      "label": "Opposed to Space Spending in Crises",
      "points": [
        "Billions of dollars should be directly prioritized to solve urgent homelessness, poverty, and healthcare.",
        "Fixing Earth's climate and environment must take priority over exploring barren distant planets.",
        "Private commercial space companies can fund space exploration without taxpayer burdens."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_092",
    "title": "Genetic Editing (CRISPR) to Prevent Hereditary Diseases",
    "category": "Science, Ethics & Future Society",
    "prompt": "Do you support the use of genetic editing technologies like CRISPR on human embryos to eliminate debilitating hereditary diseases? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Genetic Editing for Disease Prevention",
      "points": [
        "Eradicates devastating genetic disorders (cystic fibrosis, sickle cell anemia, Huntington's disease).",
        "Spares future generations from immense physical suffering and costly lifelong medical treatments.",
        "A compassionate, proactive use of advanced medical biotechnology."
      ]
    },
    "sideB": {
      "label": "Opposed to Embryo Genetic Editing",
      "points": [
        "Opens the ethical door to 'designer babies' selected for vanity traits, intelligence, and athletics.",
        "Irreversible changes to the human gene pool may cause unforeseen long-term mutations.",
        "Exacerbates genetic inequality if only wealthy elites can afford genetic enhancement technologies."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_093",
    "title": "Commercialization of Lab-Grown (Cultured) Meat",
    "category": "Science, Ethics & Future Society",
    "prompt": "Do you support the rapid commercial sale of lab-grown meat (produced from animal cells without slaughter) in Canadian supermarkets? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Lab-Grown Cultured Meat",
      "points": [
        "Eliminates animal slaughter, cruelty, and ethical concerns of factory farming.",
        "Reduces greenhouse gas emissions, land usage, and water consumption by up to 90%.",
        "Eliminates contamination risks from antibiotics, salmonella, and zoonotic diseases."
      ]
    },
    "sideB": {
      "label": "Opposed to Lab-Grown Meat",
      "points": [
        "Unknown long-term human health impacts of consuming ultra-processed cellular culture foods.",
        "Threatens the livelihood of traditional livestock farmers and agricultural heritage.",
        "Extremely high energy requirements for sterile bioreactor facilities."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_094",
    "title": "Solar Geoengineering to Cool the Earth's Climate",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should international scientists deploy solar geoengineering (spraying reflective particles into the atmosphere to block sunlight) to slow global warming? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Geoengineering Research & Deployment",
      "points": [
        "May be the only rapid emergency intervention capable of stopping catastrophic runaway global heating.",
        "Buys crucial time for nations to decarbonize industries and transition to clean energy.",
        "Relatively inexpensive compared to trillions of dollars in climate disaster damage."
      ]
    },
    "sideB": {
      "label": "Opposed to Solar Geoengineering",
      "points": [
        "Could cause catastrophic disruption to global weather patterns, monsoons, and agriculture.",
        "Does not solve ocean acidification caused by dissolved carbon dioxide emissions.",
        "Creates 'termination shock' where stopping deployment causes sudden, extreme warming spikes."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_095",
    "title": "Autonomous Delivery Drones in Residential Neighborhoods",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should commercial companies be permitted to use flying autonomous drones to deliver packages and takeout food to suburban homes? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Residential Delivery Drones",
      "points": [
        "Delivers urgent medications and goods in minutes, bypassing street traffic and vehicle emissions.",
        "Reduces delivery truck traffic, parking congestion, and road wear in neighborhoods.",
        "High energy efficiency using small rechargeable electric batteries."
      ]
    },
    "sideB": {
      "label": "Opposed to Residential Drones",
      "points": [
        "Creates intolerable high-pitched buzzing noise pollution over private backyards.",
        "Presents serious privacy concerns with drone cameras flying outside bedroom windows.",
        "Risk of crashing onto pedestrians, children, pets, or power lines during bad weather."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_096",
    "title": "Public Funding for Human Longevity & Anti-Aging Research",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should governments heavily fund scientific research aimed at reversing biological aging and extending human lifespan beyond 120 years? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Anti-Aging Longevity Research",
      "points": [
        "Extends healthy, disease-free active years ('healthspan'), drastically reducing dementia and chronic illness costs.",
        "Allows experienced individuals to contribute wisdom and productivity to society much longer.",
        "Aging is the root cause of the majority of fatal diseases and should be treated medically."
      ]
    },
    "sideB": {
      "label": "Opposed to Longevity Research Funding",
      "points": [
        "Massively overpopulates the planet and strains housing, energy, and natural resources.",
        "Causes severe demographic stagnation where younger generations cannot advance.",
        "Extending lifespan without guaranteed health could result in prolonged cognitive decline."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_097",
    "title": "Police Use of Facial Recognition in Criminal Investigations",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should police forces be permitted to scan public security camera footage against facial recognition databases to identify criminal suspects? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Police Facial Recognition",
      "points": [
        "Dramatically accelerates solving violent crimes, murders, and human trafficking cases.",
        "Locates kidnapped children and missing persons before tragedy strikes.",
        "Provides objective digital evidence that reduces human eyewitness identification errors."
      ]
    },
    "sideB": {
      "label": "Opposed to Police Facial Recognition",
      "points": [
        "Creates a dangerous precedent for mass surveillance and profiling of innocent citizens.",
        "High algorithmic error rates on minority populations lead to false arrests.",
        "Risk of mission creep where surveillance expands to track peaceful protestors and political dissidents."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_098",
    "title": "Mandatory Biometric Digital Passports for Travel",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should all international air travelers be required to use facial biometric scanning instead of physical paper passports? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Biometric Passports",
      "points": [
        "Speeds up airport security and customs lines, eliminating long frustrating wait times.",
        "Virtually impossible to forge or alter compared to physical paper passport booklets.",
        "Creates seamless, touchless, and modern international travel experiences."
      ]
    },
    "sideB": {
      "label": "Opposed to Mandatory Biometrics",
      "points": [
        "Centralized biometric databases are high-value targets for state-sponsored cyberattacks and leaks.",
        "Unlike passwords or passports, compromised facial biometric data can never be changed or reset.",
        "Excludes individuals who have religious, cultural, or privacy objections to facial scanning."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_099",
    "title": "Microchip Implants for Contactless Payments and ID",
    "category": "Science, Ethics & Future Society",
    "prompt": "Do you think voluntary microchip implants in the human hand for building access, payments, and transit will become mainstream, and is it beneficial? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Microchip Implants (Beneficial)",
      "points": [
        "Ultimate convenience: impossible to lose, forget, or have your keys, wallet, or transit card stolen.",
        "Can store life-saving emergency medical data (allergies, blood type) for unconscious patients.",
        "Zero battery requirements and operates on secure, close-range NFC technology."
      ]
    },
    "sideB": {
      "label": "Opposed to Microchip Implants (Harmful)",
      "points": [
        "Blurs the ethical boundary between human biology and digital machines.",
        "Presents cyber-vulnerabilities where nearby scanners could skim personal data without consent.",
        "Creates social pressure and potential employer tracking of employee physical movements."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  },
  {
    "id": "t7_100",
    "title": "Strict Criminal Penalties for Creating Malicious Deepfakes",
    "category": "Science, Ethics & Future Society",
    "prompt": "Should the creation of unauthorized realistic AI deepfake videos of real individuals carry mandatory criminal prison sentences? Explain your reasons.",
    "prepTime": 30,
    "speakTime": 90,
    "sideA": {
      "label": "Support Severe Criminal Penalties",
      "points": [
        "Protects individuals from devastating non-consensual defamation, extortion, and harassment.",
        "Protects democratic institutions from fabricated videos designed to disrupt elections.",
        "Establishes a strong legal deterrent against weaponizing generative AI against innocent people."
      ]
    },
    "sideB": {
      "label": "Against Mandatory Prison Sentences",
      "points": [
        "Difficult to distinguish between malicious fraud and legitimate political satire, parody, or art.",
        "Current civil defamation and fraud laws can already handle cases without mandatory minimum sentences.",
        "Could stifle creative freedom in filmmaking, visual effects, and digital comedy."
      ]
    },
    "persuasiveVocabulary": [
      "From my perspective",
      "A paramount factor is",
      "While some may argue",
      "Nevertheless",
      "It is evident that",
      "All in all"
    ],
    "studyGuidance": [
      "State your position clearly.",
      "Elaborate 2 distinct arguments.",
      "Address the counter-view with nuance.",
      "Strong summary conclusion."
    ]
  }
];
