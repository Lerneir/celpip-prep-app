// CELPIP Speaking Task 6: Dealing with a Difficult Situation (100 Prompts)
// Preparation Time: 60 seconds | Speaking Time: 60 seconds
// Each prompt features an interpersonal dilemma between two named persons

const TASK6_PROMPTS = [
    {
        "id":  "t6_001",
        "title":  "Wedding vs Work Emergency",
        "category":  "Loyalty & Commitments",
        "situation":  "You committed to being a bridesmaid at your close friend Sarah's wedding in Toronto this coming Saturday, an event you've helped plan for months. However, your manager, Mr. Henderson, just called an emergency all-hands weekend meeting for a critical software deployment that went wrong, stating that as the lead developer, your presence is absolutely mandatory to save the company's biggest client.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Sarah (friend)",
                        "role":  "Speaking to your friend Sarah",
                        "objective":  "Explain why you cannot attend her wedding and propose a way to make it up to her.",
                        "suggestedPoints":  [
                                                "Acknowledge the immense disappointment of missing the wedding after months of planning together",
                                                "Explain that as lead developer, the entire company's contract depends on you fixing this deployment",
                                                "Propose paying for a professional photographer for her reception and taking her out for a special celebration dinner next week"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mr. Henderson (manager)",
                        "role":  "Speaking to your manager Mr. Henderson",
                        "objective":  "Explain why you cannot attend the emergency meeting and propose a compromise.",
                        "suggestedPoints":  [
                                                "Remind him of your crucial role in the wedding which was booked over a year ago",
                                                "Express your understanding of the severity of the deployment crisis",
                                                "Offer to log in remotely for two hours early Saturday morning before the ceremony to review code, and have your junior dev handle the execution"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is incredibly short notice for such a huge day",
                                  "I understand the absolute necessity of fixing this deployment",
                                  "I'm hoping we can find a middle ground that doesn't leave either of you stranded"
                              ]
    },
    {
        "id":  "t6_002",
        "title":  "Moving Day vs Dream Job Interview",
        "category":  "Loyalty & Commitments",
        "situation":  "You promised your friend Alex you would help him move his entire apartment to Vancouver on Saturday morning, and he didn't hire movers because he was counting on your truck. However, your sister Diana just found out she has an in-person interview for her dream job in Victoria on the same Saturday morning and desperately needs you to drive her to the ferry terminal because her car broke down.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Alex (friend)",
                        "role":  "Speaking to your friend Alex",
                        "objective":  "Explain why you can't help him move Saturday morning and offer a solution.",
                        "suggestedPoints":  [
                                                "Apologize for canceling when he explicitly didn't hire movers because of you",
                                                "Explain that Diana's car broke down and this is a once-in-a-lifetime career opportunity for her",
                                                "Offer to pay for professional movers for the heavy furniture, and help him unpack on Sunday instead"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Diana (sister)",
                        "role":  "Speaking to your sister Diana",
                        "objective":  "Explain why you can't drive her to the ferry and offer an alternative.",
                        "suggestedPoints":  [
                                                "Express how excited you are for her interview and how much you want to support her",
                                                "Remind her that Alex is relying entirely on your truck and would be stranded with his lease ending",
                                                "Offer to cover the cost of a premium ride-share or taxi service right to the ferry terminal so she can review her notes comfortably"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I'm in a terrible bind because I want to support you both",
                                  "I know you were counting on my truck for the heavy lifting",
                                  "I completely understand the stress of a sudden car breakdown before a big interview"
                              ]
    },
    {
        "id":  "t6_003",
        "title":  "School Play vs Executive Dinner",
        "category":  "Loyalty & Commitments",
        "situation":  "You promised your brother Mark that you would attend his daughter's (your niece's) first elementary school play on Friday evening, which she has been practicing for weeks and expects you to be in the front row. Today, your supervisor Ms. Vance announced a mandatory team dinner on the same Friday evening with visiting executives from the head office, stating this is critical for your upcoming promotion review.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mark (brother)",
                        "role":  "Speaking to your brother Mark",
                        "objective":  "Explain why you will miss the play and propose a way to make it up to your niece.",
                        "suggestedPoints":  [
                                                "Express your regret at missing her big debut after she practiced so hard",
                                                "Explain that this executive dinner is mandatory and directly impacts your promotion",
                                                "Suggest coming over Saturday morning with a special gift and asking her to perform her part just for you"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Ms. Vance (supervisor)",
                        "role":  "Speaking to your supervisor Ms. Vance",
                        "objective":  "Explain why you cannot attend the dinner and propose an alternative way to connect with the executives.",
                        "suggestedPoints":  [
                                                "Reiterate your dedication to the team and your eagerness for the promotion",
                                                "Explain the prior, unmovable family commitment you made to your young niece",
                                                "Offer to meet the executives for coffee early Friday morning or join them for breakfast on Saturday"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know how much she was looking forward to seeing me in the audience",
                                  "I fully recognize the importance of facetime with the visiting executives",
                                  "I am hoping we can arrange an alternative time to connect"
                              ]
    },
    {
        "id":  "t6_004",
        "title":  "House Sitting vs Family Cabin Trip",
        "category":  "Loyalty & Commitments",
        "situation":  "You promised your elderly neighbor, Mrs. Chen, that you would watch her house, collect her mail, and feed her cats while she visits family for a week. Yesterday, your mother Helen called to say she surprise-booked a non-refundable family cabin trip in Banff for that exact same week to celebrate your parents' 40th anniversary.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mrs. Chen (neighbor)",
                        "role":  "Speaking to your neighbor Mrs. Chen",
                        "objective":  "Explain why you cannot house-sit for her and provide a reliable alternative.",
                        "suggestedPoints":  [
                                                "Apologize for the change in plans just before her trip",
                                                "Explain that your mother booked a surprise 40th anniversary trip that is non-refundable",
                                                "Offer to hire and pay for a professional, bonded pet sitter to care for her cats and house"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Helen (mother)",
                        "role":  "Speaking to your mother Helen",
                        "objective":  "Explain why you cannot attend the cabin trip and offer another way to celebrate.",
                        "suggestedPoints":  [
                                                "Express your love and congratulations on their incredible milestone anniversary",
                                                "Explain that you made a firm commitment to care for your elderly neighbor's pets",
                                                "Suggest hosting a special anniversary dinner for them at your place the weekend after they return"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible breaking a promise to you",
                                  "I know this surprise was meant to be a beautiful family moment",
                                  "I want to make sure the cats are perfectly taken care of"
                              ]
    },
    {
        "id":  "t6_005",
        "title":  "Soccer Final vs Surprise Birthday",
        "category":  "Loyalty & Commitments",
        "situation":  "You volunteered to coach your son's youth soccer team for their championship final this Saturday afternoon in Calgary. However, the wife of your best friend Marco just invited you to a surprise 40th birthday party for him at the exact same time, and as his best man, you are expected to give a speech.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your partner (about your son)",
                        "role":  "Speaking to your partner",
                        "objective":  "Explain why you need to miss the soccer final and figure out a solution for the team.",
                        "suggestedPoints":  [
                                                "Acknowledge how important this championship game is for your son's team",
                                                "Explain that Marco's 40th is a milestone and you are expected to give the main speech",
                                                "Propose that the assistant coach takes the lead while you promise to take the whole team out for ice cream after the game"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Marco's wife (organizer)",
                        "role":  "Speaking to Marco's wife",
                        "objective":  "Explain why you cannot attend the surprise party and find a way to still participate.",
                        "suggestedPoints":  [
                                                "Express your excitement for Marco's big milestone and the surprise party",
                                                "Explain your commitment as the head coach for your son's championship game",
                                                "Offer to pre-record a heartfelt video speech to be played at the party and take Marco out for drinks next week"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I hate to let the boys down on their big day",
                                  "I desperately want to be there to celebrate Marco's 40th",
                                  "I'm hoping this compromise allows me to honor both commitments in some way"
                              ]
    },
    {
        "id":  "t6_006",
        "title":  "Cousin's Wedding vs Photography Gig",
        "category":  "Loyalty & Commitments",
        "situation":  "You committed to being the unpaid photographer for your cousin Priya's wedding in Ottawa this weekend to help her save money. Today, a prestigious ad agency client, Mr. Ford, offered you a once-in-a-lifetime, highly paid assignment shooting a national campaign on the exact same weekend.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Priya (cousin)",
                        "role":  "Speaking to your cousin Priya",
                        "objective":  "Explain why you can't photograph her wedding and provide a backup plan.",
                        "suggestedPoints":  [
                                                "Apologize profusely for backing out of your promise so close to the wedding",
                                                "Explain that this ad campaign could launch your professional photography career permanently",
                                                "Offer to use the advance from the ad gig to pay for a professional wedding photographer to cover her day"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mr. Ford (client)",
                        "role":  "Speaking to the client Mr. Ford",
                        "objective":  "Explain why you must decline the weekend shoot and try to salvage the professional relationship.",
                        "suggestedPoints":  [
                                                "Express immense gratitude for this incredible career opportunity",
                                                "Explain you have an unbreakable family obligation serving as the sole photographer for a wedding",
                                                "Ask if there is any flexibility to shoot the campaign earlier in the week or offer a discount on your next project with them"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know how important it is to have reliable vendors for your wedding",
                                  "This is truly a dream assignment for me",
                                  "I am committed to making sure neither of you is left in a difficult position"
                              ]
    },
    {
        "id":  "t6_007",
        "title":  "Tutoring vs Rental Dispute Witness",
        "category":  "Loyalty & Commitments",
        "situation":  "You promised to tutor your coworker Linda's daughter for her final high school math exam this Thursday evening, as she is failing the class. But your roommate Jake just learned his emergency rental dispute hearing is scheduled for the same evening, and he desperately needs you there as his only witness.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Linda (coworker)",
                        "role":  "Speaking to your coworker Linda",
                        "objective":  "Explain why you cannot tutor her daughter and offer a solution.",
                        "suggestedPoints":  [
                                                "Acknowledge the stress her daughter is under with the failing grade",
                                                "Explain that Jake faces potential eviction and needs you as a legal witness",
                                                "Offer to do a marathon tutoring session via Zoom late Wednesday night instead"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Jake (roommate)",
                        "role":  "Speaking to your roommate Jake",
                        "objective":  "Explain why you cannot attend the hearing and provide another form of support.",
                        "suggestedPoints":  [
                                                "Express your sympathy for the stressful rental dispute he is facing",
                                                "Explain your prior commitment to a student who is relying on you to graduate",
                                                "Offer to write a detailed, notarized sworn statement tonight for him to submit to the hearing officer"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know her graduation is riding on this exam",
                                  "I completely understand the severity of this hearing for our living situation",
                                  "I'm trying to find a way to support both of these critical situations"
                              ]
    },
    {
        "id":  "t6_008",
        "title":  "Thanksgiving Dinner vs Friend's Visit",
        "category":  "Loyalty & Commitments",
        "situation":  "You agreed to host Thanksgiving dinner at your home in Montreal for your mother-in-law Susan and her extended family. However, your best friend from university, Kenji, just emailed saying he is unexpectedly visiting Canada from Japan for the first and only time that same weekend and wants to spend it with you.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Susan (mother-in-law)",
                        "role":  "Speaking to your mother-in-law Susan",
                        "objective":  "Explain the situation and propose a change to the Thanksgiving plans.",
                        "suggestedPoints":  [
                                                "Acknowledge the tradition and your previous commitment to host the extended family",
                                                "Explain that Kenji is making a once-in-a-lifetime trip from Japan",
                                                "Ask if she would be comfortable with Kenji joining the family dinner, or if someone else could host while you provide the main dishes"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Kenji (friend)",
                        "role":  "Speaking to your friend Kenji",
                        "objective":  "Explain why you are tied up that weekend and propose an alternative.",
                        "suggestedPoints":  [
                                                "Express how thrilled you are that he is finally visiting Canada",
                                                "Explain that you are locked into hosting a massive family Thanksgiving dinner",
                                                "Invite him to experience a traditional Canadian Thanksgiving with your in-laws, or offer to take time off the following Monday to show him the city"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to respect our family traditions",
                                  "This is a rare, once-in-a-decade visit",
                                  "I'd love to integrate these two important parts of my life"
                              ]
    },
    {
        "id":  "t6_009",
        "title":  "Neighbor's Medical Appointment vs Sick Child",
        "category":  "Loyalty & Commitments",
        "situation":  "You promised your elderly neighbor, Mr. Patel, that you would drive him to his crucial specialist appointment downtown this afternoon, as he cannot drive. Just as you are getting ready, your partner David calls to say your child's daycare is demanding an immediate pickup because your child is sick, and David's car is in the shop.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mr. Patel (neighbor)",
                        "role":  "Speaking to your neighbor Mr. Patel",
                        "objective":  "Explain why you can't drive him and provide an immediate alternative.",
                        "suggestedPoints":  [
                                                "Apologize for the extreme last-minute cancellation of his ride",
                                                "Explain the sudden medical emergency with your child at daycare",
                                                "Offer to order and pay for a premium accessible taxi to wait for him and bring him back"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to David (partner)",
                        "role":  "Speaking to your partner David",
                        "objective":  "Explain why you can't do the daycare pickup and brainstorm a solution.",
                        "suggestedPoints":  [
                                                "Express your concern for your child's sudden illness",
                                                "Remind him that Mr. Patel has waited months for this specialist and has no other way to get there",
                                                "Suggest David take an Uber to the daycare and back home, and you will reimburse the cost and take over care the moment you return"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know you've been waiting for this specialist appointment for months",
                                  "I feel terrible that our child is sick and you're stranded",
                                  "Let's solve this logistics issue quickly so everyone is safe"
                              ]
    },
    {
        "id":  "t6_010",
        "title":  "Community Fundraiser vs Sibling Crisis",
        "category":  "Loyalty & Commitments",
        "situation":  "You are committed to giving the keynote presentation at a community fundraiser organized by Maya tonight, an event you've publicized for weeks. Two hours before the event, your brother Leo calls in tears saying he is having a severe mental health crisis and begs you to come over immediately.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Maya (organizer)",
                        "role":  "Speaking to the organizer Maya",
                        "objective":  "Explain why you must cancel your keynote and propose a contingency plan.",
                        "suggestedPoints":  [
                                                "Acknowledge the massive inconvenience this causes for the fundraiser",
                                                "Explain confidentially that your brother is experiencing a severe medical emergency",
                                                "Offer to send your detailed presentation notes to a colleague who can read them on your behalf"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Leo (brother)",
                        "role":  "Speaking to your brother Leo",
                        "objective":  "Explain why you can't come immediately and offer alternative support.",
                        "suggestedPoints":  [
                                                "Validate his feelings and express your deep concern for his wellbeing",
                                                "Explain that hundreds of people and donors are waiting for your keynote right now",
                                                "Offer to pay for a trusted friend or family member to sit with him, and promise to rush over the second your presentation ends"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know the timing of this is absolutely terrible for the event",
                                  "Your health and safety are my top priority right now",
                                  "I am trying to balance my professional duty with a personal emergency"
                              ]
    },
    {
        "id":  "t6_011",
        "title":  "Coworker's Secret vs Manager's Question",
        "category":  "Workplace Relationships",
        "situation":  "Your close coworker Sam confided in you last week that he is actively job hunting because he is unhappy with his salary. Today, your manager Ms. Rivera calls you into her office and asks you directly if you know why Sam has seemed so disengaged and distracted lately, as she is considering putting him on a performance improvement plan.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Ms. Rivera (manager)",
                        "role":  "Speaking to your manager Ms. Rivera",
                        "objective":  "Navigate her question while protecting your coworker, or disclose the truth.",
                        "suggestedPoints":  [
                                                "Acknowledge her valid concerns about Sam's recent performance drop",
                                                "Diplomatically suggest that she have an open conversation with Sam regarding his career satisfaction and compensation",
                                                "Maintain your professional integrity by avoiding lying, while respecting Sam's privacy"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sam (coworker)",
                        "role":  "Speaking to your coworker Sam",
                        "objective":  "Warn him about the manager's inquiry and urge him to take action.",
                        "suggestedPoints":  [
                                                "Inform him confidentially that Ms. Rivera noticed his disengagement",
                                                "Warn him that he is at risk of being placed on a performance improvement plan",
                                                "Advise him to either step up his current work or speak to her directly about his career goals before she takes disciplinary action"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to respect the confidentiality of my peers while supporting the team",
                                  "I highly recommend you speak with him directly about his engagement",
                                  "You need to protect your professional reputation while you search for new roles"
                              ]
    },
    {
        "id":  "t6_012",
        "title":  "Double-Booked Colleague Support",
        "category":  "Workplace Relationships",
        "situation":  "You accidentally double-booked yourself to help two colleagues, Raj and Emma, rehearse for their high-stakes client presentations on the same afternoon. Raj is pitching to your company's oldest client and is very nervous, while Emma is pitching to a brand new enterprise client that could double the department's revenue.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Raj (colleague)",
                        "role":  "Speaking to your colleague Raj",
                        "objective":  "Explain the scheduling conflict and propose an alternative.",
                        "suggestedPoints":  [
                                                "Apologize for the calendar mix-up on your end",
                                                "Acknowledge the importance of maintaining the relationship with the oldest client",
                                                "Offer to review his slide deck asynchronously and meet him for breakfast tomorrow to do a final run-through"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Emma (colleague)",
                        "role":  "Speaking to your colleague Emma",
                        "objective":  "Explain the scheduling conflict and propose an alternative.",
                        "suggestedPoints":  [
                                                "Apologize for the scheduling error on such an important day",
                                                "Acknowledge the massive potential revenue of her new enterprise pitch",
                                                "Suggest she record her practice run on video so you can provide detailed, time-stamped feedback tonight"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I completely messed up my calendar and double-booked my afternoon",
                                  "I know how nervous you are about delivering this perfectly",
                                  "I want to make sure you both get the focused feedback you deserve"
                              ]
    },
    {
        "id":  "t6_013",
        "title":  "Honest Feedback vs Friend's Sibling",
        "category":  "Workplace Relationships",
        "situation":  "Your supervisor, Mr. Torres, asked you to provide a formal, written evaluation of Julian, a new trainee. Julian has been showing up late and making careless errors, but he is also the younger brother of your good friend. A negative review will likely result in Julian being fired.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mr. Torres (supervisor)",
                        "role":  "Speaking to your supervisor Mr. Torres",
                        "objective":  "Discuss the evaluation while addressing your conflict of interest.",
                        "suggestedPoints":  [
                                                "Confirm your commitment to maintaining high standards for the team",
                                                "Disclose your personal connection to Julian as a potential conflict of interest",
                                                "Provide honest feedback about his errors but suggest a one-week probation period instead of immediate termination"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Julian (trainee)",
                        "role":  "Speaking to the trainee Julian",
                        "objective":  "Give him a stern warning about his performance before submitting the review.",
                        "suggestedPoints":  [
                                                "Explain that as his evaluator, you must report his tardiness and careless mistakes",
                                                "Remind him that your friendship with his sibling cannot protect him from workplace consequences",
                                                "Offer to help him create a checklist to reduce errors if he commits to improving immediately"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have a professional obligation to report accurate performance metrics",
                                  "I need to be transparent about a potential conflict of interest",
                                  "I want to see you succeed, but I cannot ignore these workplace issues"
                              ]
    },
    {
        "id":  "t6_014",
        "title":  "Promotion Over Mentor",
        "category":  "Workplace Relationships",
        "situation":  "The department head, Mr. O'Reilly, just informed you that you have been chosen for the Senior Manager promotion. However, this means you were selected over Diana, a senior colleague who has mentored you for two years and desperately wanted this role. Mr. O'Reilly wants to announce it tomorrow, but Diana doesn't know yet.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Diana (mentor)",
                        "role":  "Speaking to your mentor Diana",
                        "objective":  "Break the news to her privately before the public announcement.",
                        "suggestedPoints":  [
                                                "Express immense gratitude for all the training and support she has given you",
                                                "Inform her gently that you were offered the promotion and accepted it",
                                                "Acknowledge the awkwardness of the situation and assure her you still value her expertise and guidance"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mr. O'Reilly (department head)",
                        "role":  "Speaking to the department head Mr. O'Reilly",
                        "objective":  "Discuss how the announcement will be handled regarding Diana.",
                        "suggestedPoints":  [
                                                "Express your excitement and gratitude for the Senior Manager role",
                                                "Point out that Diana has been a crucial mentor to you and may feel blindsided",
                                                "Request that he or HR speak with Diana privately before the public announcement tomorrow"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I owe so much of my professional growth to your mentorship",
                                  "I want to handle this transition as respectfully as possible",
                                  "I think it's crucial we manage the team's morale during this announcement"
                              ]
    },
    {
        "id":  "t6_015",
        "title":  "Aggressive Timeline vs Junior Burnout",
        "category":  "Workplace Relationships",
        "situation":  "Your team partner, Anika, wants to present a highly aggressive project timeline to the client tomorrow to impress them and win a bonus. However, you know this timeline is unrealistic and will require your junior team member, Chris, to work every weekend for a month, leading to severe burnout.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Anika (partner)",
                        "role":  "Speaking to your team partner Anika",
                        "objective":  "Persuade her to adjust the timeline to protect the team.",
                        "suggestedPoints":  [
                                                "Acknowledge the desire to impress the client and secure the project bonus",
                                                "Explain that the current timeline will guarantee burnout and potential turnover for Chris",
                                                "Propose a phased delivery timeline that impresses the client but preserves the team's weekends"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Chris (junior member)",
                        "role":  "Speaking to the junior team member Chris",
                        "objective":  "Warn him about the potential timeline and discuss his capacity.",
                        "suggestedPoints":  [
                                                "Inform him transparently about the aggressive timeline Anika wants to propose",
                                                "Check in on his current workload and mental health capacity for weekend work",
                                                "Offer to take on some of his specific coding tasks to lighten the load if this timeline goes through"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to win this client as much as you do, but not at the cost of our team",
                                  "We need to set realistic expectations to ensure quality work",
                                  "I want to make sure you feel supported and not overwhelmed"
                              ]
    },
    {
        "id":  "t6_016",
        "title":  "Supervisor's Error in VP Report",
        "category":  "Workplace Relationships",
        "situation":  "You just discovered that your supervisor, Mr. Kim, made a significant financial calculation error in a Q3 report that he already sent to the Vice President, Ms. Lawson. Pointing it out to Mr. Kim will embarrass him, but letting Ms. Lawson present it to the board tomorrow will be disastrous.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mr. Kim (supervisor)",
                        "role":  "Speaking to your supervisor Mr. Kim",
                        "objective":  "Inform him of the error so he can correct it.",
                        "suggestedPoints":  [
                                                "Frame the discovery as a routine double-check you did on the data",
                                                "Point out the specific calculation error respectfully and privately",
                                                "Offer to draft a quick email for him to send to Ms. Lawson with the 'updated' figures before her board meeting"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Ms. Lawson (VP)",
                        "role":  "Speaking to the VP Ms. Lawson",
                        "objective":  "Provide the correct data directly before her meeting.",
                        "suggestedPoints":  [
                                                "Apologize for the late intervention before her board presentation",
                                                "Explain that you caught a discrepancy in the Q3 report's financial calculations",
                                                "Provide the corrected spreadsheet directly and frame it as a team oversight rather than blaming Mr. Kim"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I wanted to bring this to your attention before the board meeting",
                                  "I was reviewing the figures and noticed a slight discrepancy",
                                  "Let's get this updated version sent over immediately to avoid any confusion"
                              ]
    },
    {
        "id":  "t6_017",
        "title":  "Colleague's Shift vs Partner's Plans",
        "category":  "Workplace Relationships",
        "situation":  "Your colleague Maria is begging you to switch shifts this Friday so she can attend her child's piano recital. However, you have been working late for weeks, and you promised your partner James that you would definitely be home early this Friday for a special date night he planned.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Maria (colleague)",
                        "role":  "Speaking to your colleague Maria",
                        "objective":  "Explain why you cannot take her shift and help her find another solution.",
                        "suggestedPoints":  [
                                                "Express sympathy that she might miss her child's recital",
                                                "Explain that you made a firm commitment to your partner after weeks of working overtime",
                                                "Offer to help her ask other team members or offer to cover a portion of her shift so she can leave an hour early"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to James (partner)",
                        "role":  "Speaking to your partner James",
                        "objective":  "Explain the situation at work and ask to reschedule date night.",
                        "suggestedPoints":  [
                                                "Acknowledge how much effort he put into planning this Friday date night",
                                                "Explain that Maria is desperate to see her child's recital and has no one else to cover",
                                                "Propose rescheduling the date to Saturday night and promise to pay for an even nicer dinner"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know how important family milestones are",
                                  "I feel terrible breaking a promise after working so much lately",
                                  "I'm trying to find a compromise that helps out a desperate colleague"
                              ]
    },
    {
        "id":  "t6_018",
        "title":  "New Project vs Current Team Lead",
        "category":  "Workplace Relationships",
        "situation":  "Your manager, Ms. Okafor, wants to pull you off your current assignments immediately to join her high-profile new project team. However, your current team lead, Daniel, is counting on you to finish the back-end code for a critical client deadline next month, and pulling you out will cause his project to fail.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Ms. Okafor (manager)",
                        "role":  "Speaking to your manager Ms. Okafor",
                        "objective":  "Explain the impact on your current project and negotiate the transition.",
                        "suggestedPoints":  [
                                                "Express excitement about joining the new high-profile project team",
                                                "Explain that leaving Daniel's team immediately will cause them to miss the critical client deadline",
                                                "Propose splitting your time 50/50 for the next three weeks until the back-end code is deployed"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Daniel (team lead)",
                        "role":  "Speaking to your team lead Daniel",
                        "objective":  "Explain the manager's directive and figure out how to hand over your work.",
                        "suggestedPoints":  [
                                                "Inform him transparently about Ms. Okafor's directive to move you to the new project",
                                                "Acknowledge the stress this puts on the back-end code delivery deadline",
                                                "Offer to work overtime this weekend to document all your code and train a junior dev to take over your remaining tasks"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am honored to be selected for this new initiative",
                                  "I want to ensure a smooth transition that doesn't jeopardize our current deliverables",
                                  "I'm caught between a management directive and my commitment to this team"
                              ]
    },
    {
        "id":  "t6_019",
        "title":  "Mediation Between Two Coworkers",
        "category":  "Workplace Relationships",
        "situation":  "Your two coworkers, Fiona and Hassan, are in a bitter conflict over who deserves credit for a successful marketing campaign. Both of them have come to you privately, asking you to back up their version of the story in tomorrow's workplace mediation meeting with HR.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Fiona (coworker)",
                        "role":  "Speaking to your coworker Fiona",
                        "objective":  "Set boundaries regarding what you will say in the mediation.",
                        "suggestedPoints":  [
                                                "Acknowledge the hard work she put into the graphics for the campaign",
                                                "Explain that you cannot take sides because you must maintain a neutral working relationship with the whole team",
                                                "State that in the meeting, you will only state objective facts about the task timeline, not opinions"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Hassan (coworker)",
                        "role":  "Speaking to your coworker Hassan",
                        "objective":  "Set boundaries regarding what you will say in the mediation.",
                        "suggestedPoints":  [
                                                "Acknowledge the strategy work he contributed to the campaign",
                                                "Explain that getting involved in a subjective dispute damages team morale and your own neutrality",
                                                "State that you will only present the documented email threads during mediation, rather than taking a personal side"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I value my working relationship with both of you",
                                  "I need to remain completely objective and factual during the HR mediation",
                                  "It puts me in a very difficult position to be asked to take sides"
                              ]
    },
    {
        "id":  "t6_020",
        "title":  "Working Late vs Airport Pickup",
        "category":  "Workplace Relationships",
        "situation":  "Your boss, Mr. Wallace, just asked you to stay at the office until 9 PM tonight to finalize a major grant application due tomorrow morning. However, you promised to pick up your friend Leo from the airport at 7 PM after his 14-hour international flight, and he doesn't have a working phone to order an Uber.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mr. Wallace (boss)",
                        "role":  "Speaking to your boss Mr. Wallace",
                        "objective":  "Explain why you can't stay continuously and propose a compromise.",
                        "suggestedPoints":  [
                                                "Acknowledge the critical importance of tomorrow's grant application deadline",
                                                "Explain your unbreakable commitment to pick up a friend who has no local communication",
                                                "Offer to leave at 6 PM, pick up your friend, and log back on from home at 8:30 PM to work as late as needed"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Leo (friend)",
                        "role":  "Speaking to your friend Leo",
                        "objective":  "Explain the emergency and find a way to get him home safely.",
                        "suggestedPoints":  [
                                                "Apologize profusely for not being there when he lands exhausted",
                                                "Explain the sudden work emergency with the grant application that could cost your company funding",
                                                "Since he has no phone, arrange to prepay a private car service holding a sign with his name at the arrivals gate"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this grant is vital for the company's funding next quarter",
                                  "I feel terrible leaving you stranded after such a long journey",
                                  "I'm trying to figure out a logistics plan so the work gets done and you get home safe"
                              ]
    },
    {
        "id":  "t6_021",
        "title":  "Babysitting Dilemma with Fever",
        "category":  "Family & Close Friends",
        "situation":  "You promised your sister Megan that you would babysit her two young kids this Saturday so she can attend a critical final interview for a promotion she desperately needs. However, it's Saturday morning and you have woken up with a high fever and a terrible cough, which is clearly contagious. You live with your partner, Alex, who is healthy but had planned to spend the day fixing up a vintage motorcycle in the garage and explicitly asked not to be disturbed this weekend. You must choose between disappointing Megan on her big day or asking Alex to sacrifice their only free weekend.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Megan (sister)",
                        "role":  "Speaking to your sister Megan",
                        "objective":  "Explain why you can't babysit and propose an alternative solution.",
                        "suggestedPoints":  [
                                                "Explain that you have a high fever and a severe cough, and bringing the kids over would expose them to the illness.",
                                                "Acknowledge the immense pressure of her final interview and how terrible you feel about the last-minute cancellation.",
                                                "Suggest that she try calling your aunt or offering to pay for a trusted emergency babysitting service if she can find one."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Alex (partner)",
                        "role":  "Speaking to your partner Alex",
                        "objective":  "Ask them to give up their weekend project to watch the kids.",
                        "suggestedPoints":  [
                                                "Apologize for interrupting their long-planned weekend garage project on the vintage motorcycle.",
                                                "Explain that Megan's promotion depends on this interview and you are too contagious to watch the children yourself.",
                                                "Offer to take over household chores for the next two weeks and promise to buy them the specific motorcycle part they've been eyeing."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is incredibly frustrating timing for both of us.",
                                  "I wouldn't ask this of you if it weren't an absolute emergency.",
                                  "Is there any way we can make a compromise so Megan's interview isn't ruined?"
                              ]
    },
    {
        "id":  "t6_022",
        "title":  "Holiday Travel Conflict",
        "category":  "Family & Close Friends",
        "situation":  "Your mother, Linda, has been planning for months for you to come home to Calgary for Christmas, especially since you couldn't make it last year. However, your partner's parents in Halifax, whom you are also close to, just announced a surprise 40th-anniversary celebration for the exact same week, and your mother-in-law, Susan, is expecting both of you to attend. You have to decide whose holiday event to attend, knowing someone will be deeply disappointed.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Linda (mother)",
                        "role":  "Speaking to your mother Linda",
                        "objective":  "Explain why you will be spending Christmas in Halifax instead of Calgary.",
                        "suggestedPoints":  [
                                                "Remind her how much you were looking forward to a snowy Calgary Christmas and her famous turkey dinner.",
                                                "Explain that a 40th anniversary is a rare, once-in-a-lifetime milestone for your partner's parents.",
                                                "Propose flying out to Calgary for a late Christmas celebration during the first week of January instead."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Susan (mother-in-law)",
                        "role":  "Speaking to your mother-in-law Susan",
                        "objective":  "Explain why you have to honor your prior commitment to go to Calgary.",
                        "suggestedPoints":  [
                                                "Congratulate her warmly on the incredible milestone of 40 years of marriage.",
                                                "Gently explain that you already promised your mother in Calgary you'd visit for Christmas, missing last year as well.",
                                                "Suggest hosting a special dinner in Toronto for them when they visit in the spring to celebrate the anniversary properly."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible being caught between two such important family events.",
                                  "I hope you can understand the difficult position this puts us in.",
                                  "We definitely want to celebrate with you, even if the timing has to be a bit different."
                              ]
    },
    {
        "id":  "t6_023",
        "title":  "Co-signing a Car Loan",
        "category":  "Family & Close Friends",
        "situation":  "Your brother Kevin just found his dream job as a sales representative, but he desperately needs a reliable car to travel between client sites. His credit is poor, so he has begged you to co-sign the loan. However, your spouse, Natalie, is firmly against it, pointing out that you are trying to save for a down payment on a house in Ottawa, and taking on Kevin's debt risk could ruin your own mortgage approval chances. You must choose between letting your brother down or going against your spouse's wishes.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Kevin (brother)",
                        "role":  "Speaking to your brother Kevin",
                        "objective":  "Refuse to co-sign the loan and suggest alternatives.",
                        "suggestedPoints":  [
                                                "Express how proud you are of him landing the new sales representative position.",
                                                "Explain that co-signing would jeopardize the mortgage pre-approval you and Natalie are currently applying for.",
                                                "Offer to help him find a cheaper used car he can buy in cash, and offer a small personal loan to help cover the insurance."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Natalie (spouse)",
                        "role":  "Speaking to your spouse Natalie",
                        "objective":  "Convince her to let you co-sign the loan for Kevin.",
                        "suggestedPoints":  [
                                                "Acknowledge her valid concerns about protecting your credit for the Ottawa house purchase.",
                                                "Emphasize that without this car, Kevin will lose this career-changing opportunity that he has worked so hard for.",
                                                "Propose setting up an automatic withdrawal from Kevin's account so we ensure the payments are never missed."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this puts our own financial goals at risk, but he's family.",
                                  "I want to support him, but I can't do something that threatens our future either.",
                                  "Let's figure out a way to help him that doesn't compromise our mortgage application."
                              ]
    },
    {
        "id":  "t6_024",
        "title":  "Honesty About a Bad Business Idea",
        "category":  "Family & Close Friends",
        "situation":  "Your best friend, Sophie, has abruptly quit her stable accounting job to open a boutique selling specialized pet clothing in a quiet neighborhood. She just showed you her business plan, and you can see obvious financial flawsâ€”it is highly likely to fail. Sophie is asking for your honest, professional opinion. However, her partner, Jordan, who strongly encouraged the idea, privately asked you to be supportive and not crush her dreams, as her confidence has been very fragile lately. You must choose whether to tell the hard truth or remain supportive but deceptive.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Sophie (friend)",
                        "role":  "Speaking to your friend Sophie",
                        "objective":  "Give her the harsh truth about her business plan.",
                        "suggestedPoints":  [
                                                "Start by praising her courage for pursuing her passion for pet clothing.",
                                                "Gently point out that the foot traffic in that specific neighborhood won't support the overhead costs listed in the plan.",
                                                "Suggest she keep her day job part-time while testing the market online before signing the expensive commercial lease."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Jordan (friend's partner)",
                        "role":  "Speaking to friend's partner Jordan",
                        "objective":  "Explain why you cannot just blindly support the business plan.",
                        "suggestedPoints":  [
                                                "Acknowledge that you know Sophie needs a confidence boost right now and you want to be supportive.",
                                                "Explain that as an experienced professional, letting her sink her savings into a flawed plan would be a terrible betrayal.",
                                                "Suggest you and Jordan sit down with her together to gently review the financial projections and pivot the business model."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have to balance being a supportive friend with being an honest advisor.",
                                  "The last thing I want to do is crush her enthusiasm, but the numbers don't add up.",
                                  "Perhaps we can guide her toward a lower-risk version of her dream."
                              ]
    },
    {
        "id":  "t6_025",
        "title":  "Mother Moving In",
        "category":  "Family & Close Friends",
        "situation":  "Your mother recently retired and has asked to move into the spare bedroom of your small Vancouver townhouse to save money and be closer to you. You initially agreed to the idea months ago. However, your spouse, David, is now extremely uncomfortable with it, arguing that the lack of privacy in such a small space will ruin your marriage, and insists you tell her no. You must either break your promise to your mother or go against your spouse's strong boundaries.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mom (mother)",
                        "role":  "Speaking to your mother",
                        "objective":  "Tell her she cannot move into your townhouse as planned.",
                        "suggestedPoints":  [
                                                "Express how sorry you are for changing your mind after initially agreeing.",
                                                "Explain that the Vancouver townhouse is simply too small for three adults and it's causing strain on your relationship with David.",
                                                "Offer to help her find an affordable senior living community nearby and promise to visit her twice a week."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to David (spouse)",
                        "role":  "Speaking to your spouse David",
                        "objective":  "Convince him to let your mother move in.",
                        "suggestedPoints":  [
                                                "Validate his concerns about the lack of privacy in the small townhouse.",
                                                "Remind him that you already promised her she could move in, and she has already given notice at her current apartment.",
                                                "Propose setting strict ground rules for personal space and putting a one-year time limit on her stay until she finds her own place."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I realize this is a massive change for our living situation.",
                                  "I feel terrible going back on a promise I made months ago.",
                                  "Let's see if we can find a middle ground that respects everyone's boundaries."
                              ]
    },
    {
        "id":  "t6_026",
        "title":  "Teenager's Road Trip",
        "category":  "Family & Close Friends",
        "situation":  "Your 17-year-old daughter, Emily, has been planning a post-graduation road trip to Montreal with three friends for months. You gave her tentative permission earlier. However, your ex-spouse, Sarah, just found out and strongly opposes the idea, arguing that the teens are too inexperienced for such a long highway drive. Sarah expects you to present a united front and forbid the trip. You must either disappoint your daughter or cause a major conflict with your co-parent.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Emily (daughter)",
                        "role":  "Speaking to your daughter Emily",
                        "objective":  "Tell her she can no longer go on the road trip.",
                        "suggestedPoints":  [
                                                "Acknowledge how hard she has worked on planning this trip and saving money for it.",
                                                "Explain that driving all the way to Montreal is riskier than we thought, and both parents need to agree on major safety decisions.",
                                                "Propose paying for train tickets to Montreal instead, so she can still have the adventure without the driving risks."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sarah (ex-spouse)",
                        "role":  "Speaking to your ex-spouse Sarah",
                        "objective":  "Convince her to allow Emily to go on the trip.",
                        "suggestedPoints":  [
                                                "Acknowledge her valid safety concerns about highway driving experience.",
                                                "Argue that Emily is a responsible driver, has never had an incident, and deserves this reward for her excellent grades.",
                                                "Suggest a compromise where they must drive only during daylight hours and check in with us via location sharing apps at every stop."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know we don't see eye to eye on this, but we need a solution.",
                                  "I want to encourage her independence, but safety has to come first.",
                                  "Let's figure out a way for her to have this experience with proper safeguards."
                              ]
    },
    {
        "id":  "t6_027",
        "title":  "Father's Health Worries",
        "category":  "Family & Close Friends",
        "situation":  "Your father has been experiencing severe dizzy spells and shortness of breath, but stubbornly refuses to see a doctor, claiming it's just old age. Your sister, Maria, is extremely anxious and wants you to drive over there, pack his bags, and physically force him to go to the emergency room today. However, you know from past experience that pressuring your father makes him angry and even more resistant. You must choose how to handle the situation.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Dad (father)",
                        "role":  "Speaking to your father",
                        "objective":  "Convince him to go to the doctor immediately.",
                        "suggestedPoints":  [
                                                "Express how much you and Maria love him and are terrified by the severity of the dizzy spells.",
                                                "Acknowledge his hatred of hospitals, but emphasize that catching a problem early might keep him out of the hospital long-term.",
                                                "Offer to take the day off work, drive him to the clinic, and sit with him through the entire appointment."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Maria (sister)",
                        "role":  "Speaking to your sister Maria",
                        "objective":  "Explain why you won't force him to go today.",
                        "suggestedPoints":  [
                                                "Validate her immense stress and agree that his symptoms are deeply concerning.",
                                                "Remind her that forcing him into the car will only cause a huge argument and make him dig his heels in further.",
                                                "Suggest scheduling an in-home telehealth visit for tomorrow, which feels less intimidating to him than going to the ER."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is incredibly scary for all of us to watch.",
                                  "We need to handle this delicately so he doesn't shut us out entirely.",
                                  "Let's try a softer approach that gives him a sense of control over his health."
                              ]
    },
    {
        "id":  "t6_028",
        "title":  "Wedding Secret",
        "category":  "Family & Close Friends",
        "situation":  "Your childhood best friend, Tanya, is getting married in two weeks. You recently discovered concrete proof that her fiancÃ©, Rob, has been hiding massive credit card debt from her and lying about his finances. Rob approached you, admitted his mistake, and begged you not to tell Tanya, promising he is getting a second job to pay it off before the wedding. You must decide whether to ruin Tanya's happiness right before the wedding or keep Rob's secret.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Tanya (friend)",
                        "role":  "Speaking to your friend Tanya",
                        "objective":  "Reveal the truth about Rob's hidden debt.",
                        "suggestedPoints":  [
                                                "Emphasize how much you love her and that breaking this news is the hardest thing you've ever had to do.",
                                                "Explain the evidence you saw regarding the massive credit card debt Rob has been hiding from her.",
                                                "Offer to stay with her for the next few days and help her manage the immediate fallout with the wedding vendors if she needs time to think."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Rob (fiancÃ©)",
                        "role":  "Speaking to friend's fiancÃ© Rob",
                        "objective":  "Tell him he must confess or you will.",
                        "suggestedPoints":  [
                                                "State firmly that starting a marriage with a huge financial lie is a terrible foundation.",
                                                "Acknowledge his promise to get a second job, but insist that Tanya has the right to know before signing legal documents.",
                                                "Give him a deadline: tell him he has 48 hours to confess to her himself, or you will have no choice but to do it."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "This is an incredibly painful conversation to have right before a wedding.",
                                  "I cannot in good conscience stay silent about something this massive.",
                                  "The truth is going to come out eventually, and it's better if it happens now."
                              ]
    },
    {
        "id":  "t6_029",
        "title":  "Nursing Home vs Hockey Game",
        "category":  "Family & Close Friends",
        "situation":  "You promised your elderly grandmother that you would visit her at her nursing home this Sunday afternoon, as she rarely gets visitors and has been looking forward to it all month. However, your 10-year-old son's hockey team unexpectedly made it to the championship finals, and the game was just scheduled for the exact same time on Sunday. Your son is begging you to be there to watch him play. You cannot be in two places at once.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Grandma (grandmother)",
                        "role":  "Speaking to your grandmother",
                        "objective":  "Cancel your visit and reschedule.",
                        "suggestedPoints":  [
                                                "Tell her how much you were looking forward to bringing her favorite treats and catching up this Sunday.",
                                                "Explain the sudden scheduling of the championship hockey game and how important it is for your son to have a parent in the stands.",
                                                "Promise to visit her on Tuesday evening instead, and offer to video call her from the ice rink so she can see the game."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Leo (son)",
                        "role":  "Speaking to your son Leo",
                        "objective":  "Explain why you cannot attend his championship game.",
                        "suggestedPoints":  [
                                                "Tell him how incredibly proud you are of him and the team for making it to the finals.",
                                                "Explain that Grandma has been very lonely, and breaking a promise to her after she's waited all month wouldn't be fair.",
                                                "Suggest that your spouse records the entire game on video, and promise to take him out for a huge celebratory dinner afterward."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible having to choose between two people I love so much.",
                                  "I know this is a huge disappointment, and I am so sorry.",
                                  "I hope we can find a way to celebrate together, even if I can't be there at that exact moment."
                              ]
    },
    {
        "id":  "t6_030",
        "title":  "Repaying a Debt vs Vacation",
        "category":  "Family & Close Friends",
        "situation":  "Your close friend, Derek, loaned you $2,000 two years ago when you lost your job. You've slowly been getting back on your feet. You recently saved up enough money to finally take your partner on a promised weekend trip to Banff for their birthday. However, Derek just called to say he desperately needs the $2,000 paid back immediately due to a sudden car repair. If you pay him back now, you must cancel the birthday trip.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Derek (friend)",
                        "role":  "Speaking to your friend Derek",
                        "objective":  "Explain why you can't pay him the full amount immediately.",
                        "suggestedPoints":  [
                                                "Express immense gratitude for the loan that saved you two years ago and acknowledge his current car trouble.",
                                                "Explain that you don't have the full $2,000 in liquid cash right now because much of it is tied up in non-refundable trip deposits.",
                                                "Offer to give him $800 immediately and set up a strict payment plan of $300 a month for the rest."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sam (partner)",
                        "role":  "Speaking to your partner Sam",
                        "objective":  "Explain why you need to cancel the Banff trip.",
                        "suggestedPoints":  [
                                                "Apologize profusely for ruining the long-awaited birthday trip to Banff.",
                                                "Explain that Derek is in a desperate situation with his car, and ethically, you must return the money he generously loaned you during a crisis.",
                                                "Propose a much cheaper local staycation for the birthday weekend and promise to rebook Banff next year."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I'm caught in an awful bind between a debt I owe and a promise I made.",
                                  "I feel terrible letting you down after we planned this for so long.",
                                  "I hope we can figure out a compromise that eases the financial stress for everyone."
                              ]
    },
    {
        "id":  "t6_031",
        "title":  "Neighbor's Drum Practice",
        "category":  "Neighbors & Community",
        "situation":  "You work from home, and your client manager, Richard, has complained about the loud drumming noise during your late afternoon video calls. The noise comes from your upstairs neighbor Claudia's 10-year-old son. Claudia is a single mother working shifts, and late afternoon is the only time her son can practice for his upcoming school recital. You must either confront Claudia to stop the practice or tell your manager you cannot eliminate the noise.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Claudia (neighbor)",
                        "role":  "Speaking to your neighbor Claudia",
                        "objective":  "Ask her to change her son's drum practice schedule.",
                        "suggestedPoints":  [
                                                "Acknowledge how hard she works and say how great it is that her son is preparing for a school recital.",
                                                "Explain that the drumming directly interferes with important client video calls for your remote job.",
                                                "Ask if they could shift the practice by just one hour, or offer to help pay for a pair of electronic quiet practice pads."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Richard (manager)",
                        "role":  "Speaking to your manager Richard",
                        "objective":  "Explain why the background noise will continue.",
                        "suggestedPoints":  [
                                                "Apologize for the unprofessional background noise during the recent late afternoon calls.",
                                                "Explain that you live in a shared building and the neighbor is a single mother whose child needs this specific window to practice for school.",
                                                "Suggest shifting your client presentation calls to the morning, or agree to keep yourself strictly on mute when not speaking."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to be a good neighbor, but I also need to protect my job.",
                                  "I'm hoping we can find a schedule that accommodates both of our needs.",
                                  "I appreciate your patience while I try to navigate this shared living situation."
                              ]
    },
    {
        "id":  "t6_032",
        "title":  "Damaged Neighbor's Fence",
        "category":  "Neighbors & Community",
        "situation":  "While trimming your large hedge, you accidentally dropped a heavy branch and cracked three wooden panels on your neighbor Tom's fence. Tom is currently out of town and hasn't noticed. Your spouse, Elena, insists that you should wait until Tom notices before saying anything, arguing that it's an old fence and he might not even care, saving you hundreds of dollars. You must decide whether to confess immediately or follow your spouse's advice.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Tom (neighbor)",
                        "role":  "Speaking to your neighbor Tom",
                        "objective":  "Confess to breaking the fence and offer to pay.",
                        "suggestedPoints":  [
                                                "Welcome him back from his trip and admit right away that you caused damage to the fence while trimming the hedge.",
                                                "Assure him that it was a complete accident with a heavy falling branch.",
                                                "Provide the contact information for a local handyman and promise to cover the full cost of replacing the three panels."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Elena (spouse)",
                        "role":  "Speaking to your spouse Elena",
                        "objective":  "Convince her that you need to confess to Tom immediately.",
                        "suggestedPoints":  [
                                                "Acknowledge her point that repairing the fence will be an unexpected and frustrating expense this month.",
                                                "Argue that hiding the damage will destroy trust with our neighbor if he checks his security cameras or finds out later.",
                                                "Suggest taking the repair money out of your personal hobby fund so it doesn't impact the household budget."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is going to be an annoying expense, but it's the right thing to do.",
                                  "I'd rather admit my mistake now than have it turn into a huge neighborhood conflict later.",
                                  "Taking responsibility right away is the only way to maintain a good relationship."
                              ]
    },
    {
        "id":  "t6_033",
        "title":  "Neighbor's Escaping Dog",
        "category":  "Neighbors & Community",
        "situation":  "Your elderly neighbor, Mr. Singh, has a dog that keeps escaping under the fence and digging up your prize-winning vegetable garden. You've gently mentioned it before, but it keeps happening. Your partner, Jamie, is furious about the ruined tomatoes and wants you to go over and threaten to call animal control if he doesn't fix the fence immediately. However, you know Mr. Singh is frail and rely on your friendly chats. You must choose how to address this.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mr. Singh (neighbor)",
                        "role":  "Speaking to your neighbor Mr. Singh",
                        "objective":  "Address the dog issue firmly but kindly.",
                        "suggestedPoints":  [
                                                "Mention how much you enjoy his dog, but explain that the digging has completely ruined the tomato crop.",
                                                "State firmly that the gap under the fence absolutely must be blocked this week.",
                                                "Offer to come over on Saturday with some chicken wire and stakes to help him secure the bottom of the fence."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Jamie (partner)",
                        "role":  "Speaking to your partner Jamie",
                        "objective":  "Explain why you won't threaten to call animal control.",
                        "suggestedPoints":  [
                                                "Validate Jamie's anger over the destroyed vegetables after months of hard gardening work.",
                                                "Explain that Mr. Singh is elderly, lives alone, and escalating to animal control would cause him extreme distress and ruin our good relationship.",
                                                "Propose buying some deterrent spray for the garden border and fixing our side of the fence ourselves to solve the problem peacefully."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I understand the frustration, but we need to handle this with some compassion.",
                                  "There has to be a way to protect the garden without starting a neighborhood war.",
                                  "Let's work together to fix the root of the problem."
                              ]
    },
    {
        "id":  "t6_034",
        "title":  "Mediating a Driveway Dispute",
        "category":  "Neighbors & Community",
        "situation":  "You live between two families who share a large driveway. Neighbor Jim recently bought a large RV that slightly blocks neighbor Rosa's access. The two are in a bitter argument. Because you are good friends with both, Jim has asked you to tell Rosa she's overreacting, while Rosa has asked you to tell Jim to move the RV. You must choose which neighbor to speak to in order to de-escalate the situation without losing a friend.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Jim (neighbor with RV)",
                        "role":  "Speaking to your neighbor Jim",
                        "objective":  "Convince him to move the RV for the sake of peace.",
                        "suggestedPoints":  [
                                                "Compliment the new RV and say you know he's excited for summer camping.",
                                                "Explain that the way it's parked makes it genuinely difficult for Rosa to back out safely, especially in the dark.",
                                                "Suggest he look into the affordable RV storage lot a few blocks away, and offer to help him drive it there."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Rosa (blocked neighbor)",
                        "role":  "Speaking to your neighbor Rosa",
                        "objective":  "Convince her to compromise on the driveway space.",
                        "suggestedPoints":  [
                                                "Validate her frustration that the driveway feels cramped and it's harder to maneuver her car now.",
                                                "Gently mention that Jim has a legal right to park on his side of the property line, even if it's inconvenient.",
                                                "Propose setting up a quick meeting between all three of us to agree on specific parking angles that maximize clearance."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I value my friendship with both of you, and I don't want to be put in the middle.",
                                  "I think a small compromise on your end could solve this entire conflict.",
                                  "Let's try to look at this from their perspective to keep the peace on our street."
                              ]
    },
    {
        "id":  "t6_035",
        "title":  "Snow Shoveling Obligation",
        "category":  "Neighbors & Community",
        "situation":  "You promised your elderly neighbor, Mrs. Dubois, that you would shovel her large corner-lot driveway every time it snows this winter. A massive blizzard is forecast for this Saturday. However, weeks ago, you also promised your coworker, Mark, that you would spend this entire Saturday helping him install drywall in his basement renovation. You only have time for one massive physical task this weekend.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mrs. Dubois (neighbor)",
                        "role":  "Speaking to your neighbor Mrs. Dubois",
                        "objective":  "Explain why you cannot shovel her driveway this Saturday.",
                        "suggestedPoints":  [
                                                "Express regret and remind her about the massive blizzard warning for this weekend.",
                                                "Explain that you made a prior commitment to help a coworker with a major construction project all day Saturday.",
                                                "Offer to pay a local teenager from the neighborhood to shovel her drive this one time so she isn't stranded."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mark (coworker)",
                        "role":  "Speaking to your coworker Mark",
                        "objective":  "Explain why you have to cancel or delay helping with the drywall.",
                        "suggestedPoints":  [
                                                "Apologize for messing up the renovation schedule at the last minute.",
                                                "Explain that with the impending blizzard, your elderly neighbor will be trapped in her house if you don't honor your promise to shovel her drive.",
                                                "Suggest coming over on Sunday instead, or arriving late Saturday afternoon once the shoveling is completely finished."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible backing out when you are counting on me.",
                                  "I'm stretched too thin this weekend with the extreme weather.",
                                  "I hope you can understand that it's a matter of safety for her."
                              ]
    },
    {
        "id":  "t6_036",
        "title":  "Noisy Party vs Anniversary Dinner",
        "category":  "Neighbors & Community",
        "situation":  "Your next-door neighbor, Stephanie, is hosting a large outdoor graduation party for her son this Saturday night with a live DJ. She warned the neighborhood months ago. However, your partner has been extremely stressed at work, and you promised them a quiet, romantic 10th-anniversary dinner at home on the patio that exact same night. The loud music will ruin the dinner, but Stephanie planned her party long before you planned the dinner.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Stephanie (neighbor)",
                        "role":  "Speaking to your neighbor Stephanie",
                        "objective":  "Ask her to reduce the noise level during your dinner.",
                        "suggestedPoints":  [
                                                "Congratulate her again on her son's graduation and say the party setup looks great.",
                                                "Explain that you inadvertently planned a quiet 10th-anniversary dinner for your partner at the exact same time.",
                                                "Politely ask if the DJ could keep the bass down between 7 PM and 9 PM, or move the speakers away from the fence line."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Morgan (partner)",
                        "role":  "Speaking to your partner Morgan",
                        "objective":  "Explain why you need to relocate or reschedule the dinner.",
                        "suggestedPoints":  [
                                                "Remind them how much you are looking forward to celebrating ten years together.",
                                                "Explain that the neighbors are throwing a massive graduation party with a DJ, which will make our patio entirely too loud for romance.",
                                                "Propose taking the special dinner ingredients to a rented cabin by the lake instead, or moving our celebration to Sunday night."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is incredibly bad timing for everyone involved.",
                                  "I don't want to ruin a celebration, but I also want our night to be special.",
                                  "Let's figure out a creative workaround so we can still have a perfect evening."
                              ]
    },
    {
        "id":  "t6_037",
        "title":  "Witnessing a Scratch",
        "category":  "Neighbors & Community",
        "situation":  "From your window, you clearly saw your neighbor Dave's teenager accidentally back into and scratch another neighbor Karen's parked car. The teenager panicked and drove away without leaving a note. Karen is furious and is asking around the neighborhood if anyone saw what happened. You are friendly with Dave's family and don't want to get the teenager in legal trouble, but Karen is also a good neighbor who deserves to know who damaged her property.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Dave (teenager's parent)",
                        "role":  "Speaking to your neighbor Dave",
                        "objective":  "Tell him what his child did and urge him to confess.",
                        "suggestedPoints":  [
                                                "Explain that you saw the incident from your window and know his teenager panicked.",
                                                "Emphasize that Karen is very angry and checking for security camera footage, so the truth will come out.",
                                                "Suggest he speak to his teenager, then go to Karen together to offer to pay for the paint repair without involving insurance."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Karen (car owner)",
                        "role":  "Speaking to your neighbor Karen",
                        "objective":  "Tell her what you saw.",
                        "suggestedPoints":  [
                                                "Express sympathy for the frustrating damage to her car.",
                                                "Gently inform her that you saw Dave's teenager accidentally back into it and drive off in a panic.",
                                                "Ask her to please be lenient and approach Dave directly first to settle it privately, rather than calling the police."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I hate being the bearer of bad news in the neighborhood.",
                                  "I'm sure they just panicked, but they still need to take responsibility.",
                                  "I hope we can resolve this neighbor to neighbor without getting authorities involved."
                              ]
    },
    {
        "id":  "t6_038",
        "title":  "Community Center Petition",
        "category":  "Neighbors & Community",
        "situation":  "Your good friend and neighbor, Paul, is fiercely opposing a proposed new community center because of traffic concerns and wants you to sign his petition against it. However, the project is being championed by another close neighbor, Anita, who poured her heart into the design to provide youth programs. Both are pressuring you to publicly take their side at the upcoming town hall meeting.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Paul (neighbor opposing)",
                        "role":  "Speaking to your neighbor Paul",
                        "objective":  "Explain why you won't sign his petition.",
                        "suggestedPoints":  [
                                                "Validate his legitimate concerns about increased traffic and parking issues on our quiet street.",
                                                "Explain that you strongly believe the neighborhood teens need a safe place for after-school programs, which Anita's project provides.",
                                                "Suggest that instead of trying to kill the project, you can help him draft a proposal for strict traffic-calming measures around the site."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Anita (neighbor championing)",
                        "role":  "Speaking to your neighbor Anita",
                        "objective":  "Explain why you cannot publicly support her project.",
                        "suggestedPoints":  [
                                                "Praise her dedication and the brilliant design she created for the youth programs.",
                                                "Explain that siding with her would deeply damage your long-standing friendship with Paul, who is very anxious about the traffic impact.",
                                                "Offer to remain neutral at the town hall but volunteer to help organize youth events at a different location if this falls through."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I absolutely hate feeling caught in a political tug-of-war between friends.",
                                  "I see valid points on both sides of this community issue.",
                                  "I have to abstain from taking a public stance to preserve my relationships with both of you."
                              ]
    },
    {
        "id":  "t6_039",
        "title":  "Tall Fence vs Vegetable Garden",
        "category":  "Neighbors & Community",
        "situation":  "Your next-door neighbor, Lucas, wants to build an 8-foot privacy fence between your properties. He needs your signature on a municipal variance form to do it. However, the tall fence would cast a shadow that would completely ruin the vegetable garden your partner, Chris, has spent months cultivating and thousands of dollars setting up. You must choose between denying Lucas his privacy or destroying your partner's passion project.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Lucas (neighbor)",
                        "role":  "Speaking to your neighbor Lucas",
                        "objective":  "Explain why you will not sign the variance for the tall fence.",
                        "suggestedPoints":  [
                                                "Acknowledge his desire for more privacy in the backyard.",
                                                "Explain that an 8-foot fence would entirely block the afternoon sun, destroying the expensive vegetable garden Chris built.",
                                                "Suggest a compromise of a standard 6-foot fence, and offer to plant some fast-growing privacy shrubs on our side to give him the seclusion he wants."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Chris (partner)",
                        "role":  "Speaking to your partner Chris",
                        "objective":  "Convince him to let you sign the variance for the neighbor's fence.",
                        "suggestedPoints":  [
                                                "Express how sorry you are, knowing how much hard work and money went into the vegetable garden.",
                                                "Argue that Lucas has a right to privacy, and refusing the signature might start a bitter, long-term feud with our next-door neighbor.",
                                                "Offer to pay for a raised-bed setup in the front yard where there is still plenty of sunlight, and do all the heavy lifting to move it."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I'm trying to balance being a good neighbor with protecting our own home's features.",
                                  "There has to be a creative solution that gives privacy without blocking all the light.",
                                  "I really don't want this to turn into a hostile property dispute."
                              ]
    },
    {
        "id":  "t6_040",
        "title":  "Neighbors' Divorce Dilemma",
        "category":  "Neighbors & Community",
        "situation":  "A couple in your neighborhood, Christine and Marcus, are going through a messy divorce. You have been friends with both of them for years. Christine recently confided in you about her struggles and asked you to come over for weekly coffee to support her. However, Marcus saw you leaving her house and sent a hurt text, asking why you are 'taking her side' and requesting you come to his apartment to hear his side of the story. You must figure out how to handle the divided loyalties.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Christine",
                        "role":  "Speaking to your neighbor Christine",
                        "objective":  "Explain why you must step back from the weekly coffees.",
                        "suggestedPoints":  [
                                                "Reiterate how much you care about her and want to see her through this tough time.",
                                                "Explain that Marcus feels betrayed by your visits, and you cannot be put in the middle of a divorce between two friends.",
                                                "Suggest pausing the private coffees for now, but promise to still say hello and support her in group neighborhood settings."
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Marcus",
                        "role":  "Speaking to your neighbor Marcus",
                        "objective":  "Explain why you visited Christine and set boundaries.",
                        "suggestedPoints":  [
                                                "Assure him immediately that you are absolutely not taking sides in the divorce.",
                                                "Explain that Christine was having a very bad day and simply needed a friend to listen, and you would do the same for him.",
                                                "Agree to meet him for lunch in a neutral public place to catch up, but firmly state you won't listen to negative talk about either spouse."
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I care about you both immensely and refuse to choose sides.",
                                  "I want to be supportive without getting entangled in the legal or emotional disputes.",
                                  "It's unfair to put a neighbor in the middle of such a deeply personal split."
                              ]
    },
    {
        "id":  "t6_041",
        "title":  "Roommate's Partner Overstaying",
        "category":  "Roommates & Shared Living",
        "situation":  "You share a small apartment in Toronto with your roommate Jenna. For the past month, Jenna's partner, Kyle, has been staying over every single night, essentially living there without contributing to rent, utilities, or groceries. Jenna has been going through a very tough time at work and relies heavily on Kyle for emotional support. You need to address this situation as it is increasing your bills and affecting your privacy, but you must choose who to confront.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Jenna (roommate)",
                        "role":  "Speaking to your roommate Jenna",
                        "objective":  "Explain why Kyle cannot stay every night without contributing, and propose a compromise.",
                        "suggestedPoints":  [
                                                "Acknowledge her stressful work situation and how much Kyle's presence helps her",
                                                "Explain the financial impact of the increased utility and grocery bills over the last month",
                                                "Suggest a limit on overnight stays, like three nights a week, or ask for a formal financial contribution"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Kyle (roommate's partner)",
                        "role":  "Speaking to your roommate's partner Kyle",
                        "objective":  "Confront him about his constant presence and ask him to contribute or reduce his visits.",
                        "suggestedPoints":  [
                                                "Express appreciation for his dedication to supporting Jenna during her hard time",
                                                "Point out that the apartment is too small for three full-time occupants and the shared expenses have gone up",
                                                "Ask him directly to start paying a share of utilities or to host Jenna at his place more often"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know you've been a tremendous support system lately",
                                  "Our household expenses have spiked noticeably this month",
                                  "We need to figure out a living arrangement that is fair to everyone"
                              ]
    },
    {
        "id":  "t6_042",
        "title":  "Breaking the Lease Agreement",
        "category":  "Roommates & Shared Living",
        "situation":  "You recently agreed to renew a one-year apartment lease in Vancouver with your roommate Tyler. However, you just received an amazing, unexpected job offer in Calgary that starts next month. Breaking the lease agreement now would leave Tyler completely unable to afford the Vancouver rent alone, but declining the job offer means missing out on a huge career opportunity. You must decide whether to break the news to Tyler or decline the offer.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Tyler (roommate)",
                        "role":  "Speaking to your roommate Tyler",
                        "objective":  "Tell him you are moving to Calgary and propose a plan to help him with the rent or find a new roommate.",
                        "suggestedPoints":  [
                                                "Apologize sincerely for going back on your recent agreement to renew the lease",
                                                "Explain that this Calgary job offer is a once-in-a-lifetime career step you can't refuse",
                                                "Offer to pay your half of the rent for two extra months while actively helping him find a reliable replacement"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mr. Henderson (hiring manager)",
                        "role":  "Speaking to the hiring manager Mr. Henderson",
                        "objective":  "Decline the immediate job offer and ask if there's any possibility of delaying the start date.",
                        "suggestedPoints":  [
                                                "Express deep gratitude for the job offer and your strong interest in the Calgary role",
                                                "Explain your binding legal and moral commitment to your current roommate in Vancouver",
                                                "Ask if there is any flexibility to delay the start date by six months or to work remotely initially"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "This puts me in a remarkably difficult position",
                                  "I am fully committed to ensuring you aren't left stranded",
                                  "Is there any room for flexibility regarding the timeline?"
                              ]
    },
    {
        "id":  "t6_043",
        "title":  "The Secret Pet Cat",
        "category":  "Roommates & Shared Living",
        "situation":  "Your roommate Priya adopted a cat without asking you, despite knowing you have severe pet allergies. She brought the cat home yesterday and says it is essential for helping with her severe anxiety. You are already experiencing allergic reactions and cannot live with the cat. Your sister Sarah has an extra room in her house and offered to let you move in, but breaking the lease would cost you a penalty.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Priya (roommate)",
                        "role":  "Speaking to your roommate Priya",
                        "objective":  "Explain that the cat is causing health issues and insist that she must find it another home.",
                        "suggestedPoints":  [
                                                "Validate her struggles with anxiety and her need for emotional support",
                                                "Describe the severe allergy symptoms you are currently experiencing in the apartment",
                                                "Firmly state that the cat needs to be rehomed by the weekend, or she needs to cover your lease-breaking penalty"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sarah (sister)",
                        "role":  "Speaking to your sister Sarah",
                        "objective":  "Ask to move into her spare room immediately and borrow money for the lease penalty.",
                        "suggestedPoints":  [
                                                "Explain the sudden emergency with Priya's new cat and your uncontrollable allergies",
                                                "Ask if you can move into her spare room starting tomorrow to escape the allergens",
                                                "Request a temporary loan to help cover the unexpected penalty for breaking your lease early"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I truly sympathize with your need for an emotional support animal",
                                  "My health is being directly compromised by this situation",
                                  "I'm in a desperate spot and really need your help right now"
                              ]
    },
    {
        "id":  "t6_044",
        "title":  "House Party vs. Exam Prep",
        "category":  "Roommates & Shared Living",
        "situation":  "You live in a house with three other roommates. Two of them, led by Alex, have been planning a large end-of-semester house party for this Friday for weeks. However, your other roommate, Mei, just found out her major medical board exam was rescheduled to this Saturday morning. She needs absolute quiet on Friday night. You have been tasked with mediating this conflict.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Alex (party planner)",
                        "role":  "Speaking to your roommate Alex",
                        "objective":  "Convince him to cancel or relocate the party so Mei can sleep.",
                        "suggestedPoints":  [
                                                "Acknowledge how much effort he has put into planning this end-of-semester celebration",
                                                "Explain the critical importance of Mei's medical board exam and her sudden schedule change",
                                                "Suggest moving the gathering to a local pub and offer to chip in for the first round of drinks"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mei (exam taker)",
                        "role":  "Speaking to your roommate Mei",
                        "objective":  "Tell her the party cannot be canceled and propose alternative solutions for her sleep.",
                        "suggestedPoints":  [
                                                "Express sympathy for the stressful, last-minute rescheduling of her board exam",
                                                "Gently explain that it's too late to cancel the party since 50 people have already RSVP'd",
                                                "Offer to pay for a quiet hotel room for her on Friday night so she can rest undisturbed"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this is incredibly frustrating timing for everyone",
                                  "This exam is a defining moment for her career",
                                  "Let's see if we can find a compromise that saves the night"
                              ]
    },
    {
        "id":  "t6_045",
        "title":  "The Stolen Groceries",
        "category":  "Roommates & Shared Living",
        "situation":  "Your roommate Carlos has been continually eating your clearly labeled food from the fridge in your shared Montreal apartment. It's becoming very expensive to replace your groceries. Your mutual friend, Nina, who originally introduced you two, tells you to let it go because Carlos recently lost his part-time job and is broke. You need to address the missing food.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Carlos (roommate)",
                        "role":  "Speaking to your roommate Carlos",
                        "objective":  "Confront him about the missing food and set strict boundaries.",
                        "suggestedPoints":  [
                                                "Mention that you know he is going through a tough financial period right now",
                                                "Clearly state that you are on a tight student budget yourself and cannot afford to feed two people",
                                                "Propose setting up a designated shelf for shared basics like milk, while keeping other items strictly separate"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Nina (mutual friend)",
                        "role":  "Speaking to your mutual friend Nina",
                        "objective":  "Explain why you cannot ignore the theft and ask her to intervene.",
                        "suggestedPoints":  [
                                                "Acknowledge her compassion for Carlos's recent job loss",
                                                "Explain that your grocery bills have doubled, which is causing you serious financial anxiety",
                                                "Ask her to either talk to Carlos on your behalf or help him find a local food bank"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I completely understand that times are incredibly tight",
                                  "My own budget simply doesn't have the margin for extra groceries",
                                  "We need to establish clearer boundaries around shared resources"
                              ]
    },
    {
        "id":  "t6_046",
        "title":  "The Summer Sublet",
        "category":  "Roommates & Shared Living",
        "situation":  "Your roommate Olivia is traveling to Europe for the summer and wants to sublet her room to a complete stranger, Liam, to cover her rent. You are very uncomfortable living with someone you don't know for three months. However, Olivia says if she can't sublet to Liam, she won't be able to afford her trip and will lose her non-refundable plane tickets.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Olivia (roommate)",
                        "role":  "Speaking to your roommate Olivia",
                        "objective":  "Tell her you veto Liam moving in and propose a different solution.",
                        "suggestedPoints":  [
                                                "Acknowledge how important this European trip is to her and the money she has already invested",
                                                "Express your deep discomfort and safety concerns about living with a stranger all summer",
                                                "Suggest extending the search for two more weeks to find a mutual friend or acquaintance to take the room"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Liam (potential subtenant)",
                        "role":  "Speaking to the potential subtenant Liam",
                        "objective":  "Explain your reservations and establish strict house rules before agreeing.",
                        "suggestedPoints":  [
                                                "Thank him for his interest in subletting the room for the summer months",
                                                "Be honest about your anxiety regarding living with someone outside your friend group",
                                                "Propose a trial coffee meetup and draft a strict written agreement about guests and quiet hours"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I don't want to be the reason you miss out on this experience",
                                  "I have serious reservations about sharing my safe space",
                                  "Let's set some clear ground rules so we both feel comfortable"
                              ]
    },
    {
        "id":  "t6_047",
        "title":  "The Broken Laptop",
        "category":  "Roommates & Shared Living",
        "situation":  "You accidentally spilled water on your roommate Ben's expensive gaming laptop, completely destroying it. You are a broke student and cannot afford the $2000 to replace it right now. Your mother, Martha, offered to give you the money, but only on the strict condition that you move back to your hometown of Ottawa, which you desperately do not want to do.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Ben (roommate)",
                        "role":  "Speaking to your roommate Ben",
                        "objective":  "Confess to breaking the laptop and ask for a payment plan.",
                        "suggestedPoints":  [
                                                "Apologize profusely for the accident and acknowledge the enormous inconvenience it causes him",
                                                "Admit that you cannot secure the full $2000 immediately without making a devastating life change",
                                                "Offer a legally binding payment plan of $200 a month and let him use your desktop computer in the meantime"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Martha (mother)",
                        "role":  "Speaking to your mother Martha",
                        "objective":  "Ask her for a loan without the condition of moving back home.",
                        "suggestedPoints":  [
                                                "Express gratitude for her generous offer to bail you out of this $2000 emergency",
                                                "Explain that moving back to Ottawa would ruin your current academic and internship progress",
                                                "Propose signing a formal loan agreement with interest, proving you will pay her back independently"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I take full responsibility for this terrible accident",
                                  "I am exploring every possible avenue to make this right",
                                  "I need to maintain my independence while resolving this debt"
                              ]
    },
    {
        "id":  "t6_048",
        "title":  "Late Night Gaming",
        "category":  "Roommates & Shared Living",
        "situation":  "Your roommate Damien plays loud video games on voice chat until 3 AM on weeknights, disturbing the whole house. Your other roommate, Sarah, is exhausted and furious. She wants you to confront Damien since you and Damien are close childhood friends. You hate confrontation and know Damien is easily offended when criticized.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Damien (roommate)",
                        "role":  "Speaking to your roommate Damien",
                        "objective":  "Tell him to stop the late-night gaming noise without ruining your friendship.",
                        "suggestedPoints":  [
                                                "Reiterate how much you value your long-standing friendship and enjoy living together",
                                                "Explain that the late-night voice chat is keeping the entire household awake on work nights",
                                                "Suggest implementing a strict midnight cutoff for voice chat, or moving his gaming setup to the basement"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sarah (roommate)",
                        "role":  "Speaking to your roommate Sarah",
                        "objective":  "Explain why you aren't the best person to intervene and suggest a house meeting.",
                        "suggestedPoints":  [
                                                "Validate her frustration and agree that the 3 AM noise is completely unacceptable",
                                                "Admit that Damien is very defensive with you and a personal confrontation might backfire",
                                                "Propose calling a formal house meeting so the issue can be addressed collectively rather than personally"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I value our friendship too much to let resentment build up",
                                  "The noise travels right through these thin walls",
                                  "We need to present a united front on household rules"
                              ]
    },
    {
        "id":  "t6_049",
        "title":  "Painting vs. Visiting Friend",
        "category":  "Roommates & Shared Living",
        "situation":  "You promised your roommate Lisa three weeks ago that you would spend this entire Saturday helping her paint the apartment living room in Winnipeg. However, your childhood friend Marcus just called to say he has an unexpected overnight layover in Winnipeg this Saturday and wants to spend his only day in the city with you. You cannot do both.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Lisa (roommate)",
                        "role":  "Speaking to your roommate Lisa",
                        "objective":  "Apologize for canceling the painting project and propose an alternative.",
                        "suggestedPoints":  [
                                                "Acknowledge your long-standing promise to help paint the living room this weekend",
                                                "Explain that your childhood friend is in town for a rare, surprise one-day layover",
                                                "Offer to do all the prep work on Friday night and hire a TaskRabbit to take your painting shift on Saturday"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Marcus (friend)",
                        "role":  "Speaking to your friend Marcus",
                        "objective":  "Explain that you are busy all day and can only see him briefly.",
                        "suggestedPoints":  [
                                                "Express how thrilled you are that he is in Winnipeg, even for just a layover",
                                                "Explain your unbreakable commitment to your roommate for a major home renovation project",
                                                "Suggest meeting him at the airport for a late dinner after the painting is finished"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I hate going back on a commitment I made weeks ago",
                                  "This is an incredibly rare chance to catch up",
                                  "I'm hoping we can find a creative way to make this work"
                              ]
    },
    {
        "id":  "t6_050",
        "title":  "The Uninvited Sibling",
        "category":  "Roommates & Shared Living",
        "situation":  "Your roommate Jasper invited his younger sibling to stay on your living room couch for two weeks without asking anyone. The sibling is incredibly messy and loud. Your other roommate, Nadia, is furious and is threatening to break her lease and move out immediately if the sibling doesn't leave by tomorrow. You need to mediate the crisis.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Jasper (roommate)",
                        "role":  "Speaking to your roommate Jasper",
                        "objective":  "Tell him his sibling must leave early to prevent Nadia from moving out.",
                        "suggestedPoints":  [
                                                "State clearly that inviting a guest for two weeks without permission violated your roommate agreement",
                                                "Explain that the sibling's mess and noise have pushed Nadia to the brink of moving out",
                                                "Insist that he find his sibling an Airbnb or hostel for the remainder of the trip starting tomorrow"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Nadia (roommate)",
                        "role":  "Speaking to your roommate Nadia",
                        "objective":  "Persuade her to stay while you implement strict rules for the sibling.",
                        "suggestedPoints":  [
                                                "Validate her intense anger about the uninvited guest and the unacceptable living conditions",
                                                "Point out the financial and logistical nightmare of breaking the lease so suddenly",
                                                "Promise to enforce strict quiet hours and cleaning duties on Jasper's sibling for the remaining days"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "This situation is completely unfair to the rest of the household",
                                  "We cannot sustain this level of disruption in our home",
                                  "Let's establish an immediate, non-negotiable boundary"
                              ]
    },
    {
        "id":  "t6_051",
        "title":  "Plagiarized Assignment",
        "category":  "Academic & Student Life",
        "situation":  "You let your study partner Omar look at your completed computer science assignment to help him understand the concepts. Omar directly copied your code. Professor Chen noticed the similarities, flagged both assignments for plagiarism, and has emailed you both asking for an explanation. You want to clear your name, but Omar will likely fail the course if he is caught.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Omar (study partner)",
                        "role":  "Speaking to your study partner Omar",
                        "objective":  "Demand that he confess to the professor to save your academic record.",
                        "suggestedPoints":  [
                                                "Express your shock and disappointment that he copied your code directly instead of using it as a guide",
                                                "Emphasize that a plagiarism charge could result in your expulsion from the university",
                                                "Insist that he email Professor Chen immediately to take full responsibility, or you will have to tell the truth"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Professor Chen (professor)",
                        "role":  "Speaking to Professor Chen",
                        "objective":  "Explain the situation truthfully without entirely throwing Omar under the bus.",
                        "suggestedPoints":  [
                                                "Apologize for being naive in sharing your screen with a classmate during a study session",
                                                "Provide your version history and timestamps to prove you wrote the code independently first",
                                                "Ask for leniency for both of you, suggesting Omar was just overwhelmed rather than malicious"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "My intention was only to help a struggling peer understand the logic",
                                  "I cannot jeopardize my entire academic future over this",
                                  "I take responsibility for my poor judgment in sharing my work"
                              ]
    },
    {
        "id":  "t6_052",
        "title":  "Conflicting Group Projects",
        "category":  "Academic & Student Life",
        "situation":  "You promised your classmate Andrea you would join her business presentation group, which she is leading. However, your best friend Wei just told you his group had a member drop out at the last minute; if they don't find a replacement today, Wei will fail the assignment. You can only join one group.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Andrea (classmate)",
                        "role":  "Speaking to your classmate Andrea",
                        "objective":  "Withdraw from her group to help your best friend.",
                        "suggestedPoints":  [
                                                "Apologize profusely for backing out of your firm commitment to her presentation group",
                                                "Explain the critical academic emergency your best friend is facing right now",
                                                "Offer to hand over all the preliminary research you've already done to give her group a head start"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Wei (best friend)",
                        "role":  "Speaking to your best friend Wei",
                        "objective":  "Explain why you must honor your prior commitment to Andrea.",
                        "suggestedPoints":  [
                                                "Express deep sympathy for his stressful, last-minute group crisis",
                                                "Explain that backing out on Andrea now would ruin her project and damage your professional reputation",
                                                "Offer to spend Saturday tutoring his group and helping them restructure their presentation to work with one less person"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am caught between a rock and a hard place",
                                  "I take my academic commitments very seriously",
                                  "Let's figure out how I can support you from the sidelines"
                              ]
    },
    {
        "id":  "t6_053",
        "title":  "Research Position vs. Campus Club",
        "category":  "Academic & Student Life",
        "situation":  "Professor Martinez unexpectedly offered you a highly competitive research assistant position that requires 15 hours a week this semester. However, you already committed to helping your friend Deepa organize a massive weekly campus cultural festival. You cannot manage your classes, the research job, and the festival. You must step down from one.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Professor Martinez (professor)",
                        "role":  "Speaking to Professor Martinez",
                        "objective":  "Decline or delay the research position due to prior commitments.",
                        "suggestedPoints":  [
                                                "Express immense gratitude for being selected for such a prestigious research role",
                                                "Explain your prior leadership commitment to a major campus cultural initiative",
                                                "Ask if there is any possibility of starting the assistantship next semester or taking on a reduced role now"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Deepa (friend)",
                        "role":  "Speaking to your friend Deepa",
                        "objective":  "Resign from your role in the cultural festival to take the job.",
                        "suggestedPoints":  [
                                                "Reiterate your passion for the cultural festival and how much you hate letting her down",
                                                "Explain that this research position is a once-in-a-degree opportunity for your grad school applications",
                                                "Offer to help recruit and train your replacement before stepping back entirely"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "This is an incredibly difficult choice regarding my priorities",
                                  "This opportunity aligns perfectly with my long-term career goals",
                                  "I want to ensure a smooth transition so no one is left stranded"
                              ]
    },
    {
        "id":  "t6_054",
        "title":  "Witnessing Exam Cheating",
        "category":  "Academic & Student Life",
        "situation":  "During a crucial final exam, you clearly saw your best friend Liam using his phone under his desk to cheat. The teaching assistant, Ms. Brooks, noticed Liam acting suspicious but didn't catch him directly. Ms. Brooks has called you into her office and is directly asking you if you saw Liam cheating. You must choose how to handle this.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Liam (best friend)",
                        "role":  "Speaking to your best friend Liam",
                        "objective":  "Tell him he was spotted and urge him to confess before you are forced to.",
                        "suggestedPoints":  [
                                                "State clearly that you saw him using his phone during the final exam",
                                                "Warn him that Ms. Brooks is highly suspicious and is already questioning students",
                                                "Urge him to go to the professor and confess immediately to avoid formal disciplinary action"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Ms. Brooks (teaching assistant)",
                        "role":  "Speaking to the TA Ms. Brooks",
                        "objective":  "Navigate her questions without lying, while protecting yourself.",
                        "suggestedPoints":  [
                                                "Acknowledge the seriousness of academic integrity in the department",
                                                "Explain that you were intensely focused on your own paper and feel uncomfortable accusing a peer",
                                                "Suggest that the department implement stricter phone-collection policies for future exams to prevent this"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am very uncomfortable being placed in the middle of this investigation",
                                  "Academic integrity is incredibly important to me",
                                  "I think the fairest approach is to come clean before it escalates"
                              ]
    },
    {
        "id":  "t6_055",
        "title":  "Double-Booked Sunday Morning",
        "category":  "Academic & Student Life",
        "situation":  "Your study group leader, Fatima, scheduled a mandatory review session for your upcoming history midterm this Sunday at 9 AM. However, your chemistry lab partner, Jason, says he can only practice your crucial joint lab presentation on Sunday at 9 AM due to his work schedule. If you skip the lab practice, you'll both likely lose significant marks.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Fatima (study group leader)",
                        "role":  "Speaking to your study group leader Fatima",
                        "objective":  "Excuse yourself from the Sunday morning review session.",
                        "suggestedPoints":  [
                                                "Apologize for the scheduling conflict regarding the mandatory history review",
                                                "Explain that your chemistry partner's rigid work schedule leaves Sunday morning as your only practice time",
                                                "Offer to compile a detailed study guide for chapter 4 and share it with the group beforehand"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Jason (lab partner)",
                        "role":  "Speaking to your lab partner Jason",
                        "objective":  "Convince him to find a different time to practice the presentation.",
                        "suggestedPoints":  [
                                                "Acknowledge how difficult it is to work around his demanding weekend shifts",
                                                "Explain that missing the mandatory history review could severely drop your midterm grade",
                                                "Propose practicing via a late-night Zoom call on Saturday or doing it during lunch on Monday"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have an unavoidable scheduling conflict that morning",
                                  "Both of these commitments hold significant weight for my grades",
                                  "I am more than willing to put in extra hours asynchronously"
                              ]
    },
    {
        "id":  "t6_056",
        "title":  "Sharing Detailed Notes",
        "category":  "Academic & Student Life",
        "situation":  "Your classmate Anna missed a week of classes due to illness and asked to borrow your highly detailed course notes. However, another classmate, Ryan, missed classes due to a vacation, asked first, and you denied him because you prefer not to share your hard work. If you share with Anna, Ryan will find out and feel insulted.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Anna (sick classmate)",
                        "role":  "Speaking to your classmate Anna",
                        "objective":  "Decline to share your full notes but offer alternative help.",
                        "suggestedPoints":  [
                                                "Express sympathy for her illness and how hard it is to catch up on missed lectures",
                                                "Explain your strict personal policy of not distributing your notes, as you already denied someone else",
                                                "Offer to meet her for coffee to verbally review the key concepts and help her outline the material"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Ryan (vacationing classmate)",
                        "role":  "Speaking to your classmate Ryan",
                        "objective":  "Explain why you are making an exception for Anna after denying him.",
                        "suggestedPoints":  [
                                                "Acknowledge that it might seem unfair that you are giving Anna the notes after saying no to him",
                                                "Explain that you distinguish between missing class for a medical emergency versus a planned vacation",
                                                "Offer to send him a condensed summary of the week's main bullet points as a peace offering"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have to be consistent to avoid creating awkward dynamics",
                                  "I draw a hard line when it comes to medical emergencies",
                                  "I am happy to support your learning in a different capacity"
                              ]
    },
    {
        "id":  "t6_057",
        "title":  "The Recommendation Letter",
        "category":  "Academic & Student Life",
        "situation":  "Your favorite instructor, Professor Williams, spent hours writing you a glowing recommendation letter specifically tailored to University A. However, you've just decided to attend University B instead because your father, Richard, strongly prefers it and is paying your tuition. Now you need a brand new letter from the professor for University B.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Professor Williams (professor)",
                        "role":  "Speaking to Professor Williams",
                        "objective":  "Apologize for changing your mind and ask for a new, revised letter.",
                        "suggestedPoints":  [
                                                "Express deep gratitude for the incredible effort he put into the first recommendation letter",
                                                "Explain the sudden financial and family pressures that forced you to switch to University B",
                                                "Ask humbly if he would be willing to adapt the existing letter for the new program by Friday"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Richard (father)",
                        "role":  "Speaking to your father Richard",
                        "objective":  "Tell him you are attending University A despite his preference and funding.",
                        "suggestedPoints":  [
                                                "Acknowledge his generous offer to pay tuition and his desire for you to attend University B",
                                                "Explain that University A is a much better fit for your specific research interests and career goals",
                                                "Propose taking out student loans for University A to prove your commitment to this path"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I deeply respect the time and endorsement you gave me",
                                  "My family situation has necessitated a sudden change of plans",
                                  "I need to make the choice that aligns with my academic future"
                              ]
    },
    {
        "id":  "t6_058",
        "title":  "Tutoring vs. Thesis Meetings",
        "category":  "Academic & Student Life",
        "situation":  "You promised to tutor a struggling classmate, Sofia, every Thursday afternoon to help her pass calculus. However, your academic advisor, Dr. Nguyen, just announced that mandatory thesis check-in meetings will take place at the exact same time on Thursdays. You cannot miss the thesis meetings, but Sofia is relying on you.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Sofia (classmate)",
                        "role":  "Speaking to your classmate Sofia",
                        "objective":  "Cancel the Thursday sessions and propose a new tutoring schedule.",
                        "suggestedPoints":  [
                                                "Apologize for backing out of the Thursday afternoon time slot you both agreed upon",
                                                "Explain that your advisor has unexpectedly mandated thesis meetings at that exact hour",
                                                "Offer to move your sessions to Tuesday evenings or transition to asynchronous help via email"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Dr. Nguyen (advisor)",
                        "role":  "Speaking to your advisor Dr. Nguyen",
                        "objective":  "Request an alternative time for your mandatory thesis check-ins.",
                        "suggestedPoints":  [
                                                "Express your eagerness to begin the regular thesis check-in process with him",
                                                "Explain your prior, unbreakable commitment to tutoring a student in danger of failing during that time",
                                                "Ask politely if you could schedule your one-on-one check-in for Friday mornings instead"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "This new schedule directly conflicts with a prior obligation",
                                  "I want to ensure neither of my responsibilities is compromised",
                                  "Is there any flexibility in scheduling these weekly check-ins?"
                              ]
    },
    {
        "id":  "t6_059",
        "title":  "Job Interview vs. Quiz",
        "category":  "Academic & Student Life",
        "situation":  "Your roommate Ethan has a make-or-break job interview this afternoon and is having a panic attack. He desperately wants you to skip your classes to help him prep and calm down. However, you have an in-person quiz worth 15% of your grade in Professor Smith's class at the same time. Ethan says this job is his only chance to pay rent.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Ethan (roommate)",
                        "role":  "Speaking to your roommate Ethan",
                        "objective":  "Refuse to skip the quiz but offer alternative support.",
                        "suggestedPoints":  [
                                                "Validate his intense anxiety and reassure him that he is fully qualified for this job",
                                                "Explain that skipping a quiz worth 15% of your grade could cause you to lose your scholarship",
                                                "Offer to do a rapid-fire 30-minute mock interview right now before you absolutely have to leave for campus"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Professor Smith (professor)",
                        "role":  "Speaking to Professor Smith",
                        "objective":  "Ask for an emergency extension or makeup quiz due to a household crisis.",
                        "suggestedPoints":  [
                                                "Apologize for the extreme last-minute notice regarding today's crucial quiz",
                                                "Explain that your roommate is experiencing a severe mental health crisis and cannot be left alone",
                                                "Request permission to take the quiz tomorrow morning during office hours with a slight penalty"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I cannot jeopardize my academic standing, even for an emergency",
                                  "My roommate is facing a severe personal crisis right now",
                                  "I want to support you without sacrificing my own responsibilities"
                              ]
    },
    {
        "id":  "t6_060",
        "title":  "Choosing a Project Partner",
        "category":  "Academic & Student Life",
        "situation":  "Two classmates independently asked you to be their partner for the final capstone project. Maya is a close friend, but she tends to procrastinate and submit subpar work. Theo is not a friend, but he is a technical genius and working with him guarantees an A+. You can only choose one partner, and rejecting either will have negative consequences.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Maya (friend)",
                        "role":  "Speaking to your friend Maya",
                        "objective":  "Tell her you are partnering with Theo and preserve your friendship.",
                        "suggestedPoints":  [
                                                "Reassure her that your friendship is extremely important to you outside of the classroom",
                                                "Explain that you need Theo's specific technical coding skills to pull off your ambitious project idea",
                                                "Suggest that working separately is better for your friendship, but offer to study together on weekends"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Theo (classmate)",
                        "role":  "Speaking to your classmate Theo",
                        "objective":  "Decline his partnership offer to work with your friend.",
                        "suggestedPoints":  [
                                                "Express admiration for his exceptional technical skills and strong work ethic",
                                                "Explain that you had a long-standing, unspoken agreement to partner with Maya for the capstone",
                                                "Propose that your two groups collaborate informally to peer-review each other's work before submission"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have to make a strategic choice for my academic success",
                                  "I don't want academic stress to put a strain on our friendship",
                                  "I promised my loyalty to someone else before assessing the options"
                              ]
    },
    {
        "id":  "t6_061",
        "title":  "Surprise Party Ruined",
        "category":  "Social & Event Planning",
        "situation":  "You have been organizing a surprise 30th birthday party for your friend Chloe for months. You booked a private room at her favorite restaurant downtown. However, Chloe's partner, Jamie, just accidentally texted her the invitation details instead of sending it to another guest. Jamie called you panicking, asking you not to say anything and hoping Chloe didn't notice or understand the text. Now you have to decide how to handle this.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Chloe (friend)",
                        "role":  "Speaking to your friend Chloe",
                        "objective":  "Explain what happened, acknowledge the ruined surprise, and propose a new way to celebrate.",
                        "suggestedPoints":  [
                                                "Acknowledge the text she received from Jamie and admit the surprise is out",
                                                "Express disappointment that she found out early after months of secret planning",
                                                "Suggest shifting the focus from the surprise element to an extended weekend celebration"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Jamie (Chloe's partner)",
                        "role":  "Speaking to Chloe's partner Jamie",
                        "objective":  "Explain why you can't pretend the text didn't happen and suggest how Jamie should confess.",
                        "suggestedPoints":  [
                                                "Explain that Chloe is too observant to ignore the text and ignoring it will cause more confusion",
                                                "Acknowledge Jamie's panic but emphasize honesty is the best approach right now",
                                                "Offer to help Jamie come up with a new, smaller surprise to make up for the spoiled one"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know the cat is out of the bag regarding the birthday plans",
                                  "It completely defeats the purpose of the surprise if we try to cover it up",
                                  "Let's pivot our strategy and focus on making the event itself unforgettable"
                              ]
    },
    {
        "id":  "t6_062",
        "title":  "Double Wedding Weekend",
        "category":  "Social & Event Planning",
        "situation":  "Two of your closest friends, Rachel (who lives in Vancouver) and Daniela (who lives in Montreal), just sent out their formal wedding invitations. To your shock, they have both scheduled their weddings for the exact same long weekend in August. Both of them asked you to be in their wedding party months ago, and you enthusiastically agreed. You cannot possibly attend both weddings as they are on opposite sides of the country.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Rachel (friend)",
                        "role":  "Speaking to your friend Rachel",
                        "objective":  "Explain why you cannot attend her wedding and offer a meaningful alternative way to celebrate.",
                        "suggestedPoints":  [
                                                "Explain the impossible scheduling conflict with Daniela's wedding in Montreal",
                                                "Express deep regret over having to step down as a bridesmaid/groomsman",
                                                "Offer to fly out to Vancouver two weeks prior to throw her a private celebratory dinner"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Daniela (friend)",
                        "role":  "Speaking to your friend Daniela",
                        "objective":  "Explain why you cannot attend her wedding and offer a meaningful alternative way to celebrate.",
                        "suggestedPoints":  [
                                                "Explain the impossible scheduling conflict with Rachel's wedding in Vancouver",
                                                "Acknowledge how disappointing it is to break your commitment to be in her wedding party",
                                                "Propose hosting a post-wedding brunch for her in Montreal the following month at your expense"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am in a completely impossible situation with this date clash",
                                  "It breaks my heart to have to step down from the wedding party",
                                  "I want to make sure I still honor your special milestone properly"
                              ]
    },
    {
        "id":  "t6_063",
        "title":  "Camping Trip Awkwardness",
        "category":  "Social & Event Planning",
        "situation":  "You organized an annual group camping trip at Banff National Park. Your friend Nick just started dating someone new and asked to bring them along. However, another friend in your camping group, Vanessa, used to date this new person, and their breakup was very messy. Vanessa would be extremely uncomfortable and might cancel if Nick brings his new partner.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Nick (friend)",
                        "role":  "Speaking to your friend Nick",
                        "objective":  "Explain why bringing his new partner isn't a good idea and suggest an alternative.",
                        "suggestedPoints":  [
                                                "Explain the history between his new partner and Vanessa and the awkwardness it would cause",
                                                "Emphasize that the annual trip is a tight-knit group tradition where everyone needs to relax",
                                                "Suggest organizing a separate dinner in the city so the group can meet his new partner properly"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Vanessa (friend)",
                        "role":  "Speaking to your friend Vanessa",
                        "objective":  "Inform her that Nick is bringing his new partner, acknowledge the awkwardness, and offer a compromise.",
                        "suggestedPoints":  [
                                                "Gently inform her that Nick's new partner is joining the trip so she isn't blindsided",
                                                "Validate her potential discomfort given their messy history",
                                                "Offer to set up her tent far away from theirs and ensure you pair up with her for daily hikes"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to protect the dynamic of our annual group trip",
                                  "It puts everyone in an incredibly awkward position given the history",
                                  "Let's figure out a buffer so you don't have to interact with them directly"
                              ]
    },
    {
        "id":  "t6_064",
        "title":  "Expensive Birthday Trip",
        "category":  "Social & Event Planning",
        "situation":  "Your friend group voted to go to an expensive all-inclusive resort in Mexico for Mike's 30th birthday. Mike has been enthusiastically organizing it. However, another close friend, Laura, privately told you she just lost her job, cannot afford the $2000 cost, and feels immense pressure to go. If Laura drops out, Mike will be very upset, but if you push her, it will ruin her financially.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Mike (friend)",
                        "role":  "Speaking to your friend Mike",
                        "objective":  "Explain the situation regarding the trip's cost and propose changing the plans.",
                        "suggestedPoints":  [
                                                "Gently explain that the Mexico resort is financially out of reach for some group members",
                                                "Acknowledge his excitement for the trip but prioritize having the whole group together",
                                                "Suggest changing the destination to an Airbnb closer to home that everyone can afford"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Laura (friend)",
                        "role":  "Speaking to your friend Laura",
                        "objective":  "Discuss her financial constraints, validate her feelings, and offer a solution.",
                        "suggestedPoints":  [
                                                "Reassure her that she shouldn't go into debt just for a birthday trip",
                                                "Acknowledge the pressure she feels from the group's expensive decision",
                                                "Offer to quietly organize a local spa day just for you and her to celebrate instead of Mexico"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "We need to be mindful of everyone's financial situation right now",
                                  "The location shouldn't matter as much as having the whole crew together",
                                  "Please don't feel pressured to overextend yourself financially"
                              ]
    },
    {
        "id":  "t6_065",
        "title":  "Dinner Party Hostilities",
        "category":  "Social & Event Planning",
        "situation":  "You are hosting an intimate dinner party for eight people this Friday. Your best friend, Diana, asked if she could bring a colleague she is trying to impress for a promotion. However, you know that this colleague has a very hostile history with another guest you already invited, Chris. They had a massive public falling out last year.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Diana (best friend)",
                        "role":  "Speaking to your best friend Diana",
                        "objective":  "Refuse her request to bring the colleague and suggest a different networking opportunity.",
                        "suggestedPoints":  [
                                                "Explain the hostile history between her colleague and Chris, who is already confirmed",
                                                "Express concern that a dinner party confrontation would reflect poorly on her to the colleague",
                                                "Offer to host a separate, smaller cocktail hour next week specifically for her and this colleague"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Chris (friend)",
                        "role":  "Speaking to your friend Chris",
                        "objective":  "Inform him about the colleague attending, gauge his reaction, and offer a graceful out.",
                        "suggestedPoints":  [
                                                "Give him a heads-up that Diana's colleague is attending so he isn't caught off guard",
                                                "Acknowledge their difficult history and validate his right to be comfortable",
                                                "Offer to let him bow out of Friday's dinner and treat him to lunch on Saturday instead"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to avoid a potentially explosive situation at the dinner table",
                                  "I need to prioritize the comfort of guests who were already invited",
                                  "I totally understand if this changes your desire to attend"
                              ]
    },
    {
        "id":  "t6_066",
        "title":  "Wedding Setup vs. Engagement Party",
        "category":  "Social & Event Planning",
        "situation":  "You promised your friend Simone that you would help her set up all the chairs and decorations at her wedding venue the evening before her big day. However, your sibling just announced they are having a spontaneous engagement party that exact same evening, and your parents are demanding you attend the family celebration.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Simone (friend)",
                        "role":  "Speaking to your friend Simone",
                        "objective":  "Explain why you can't help set up and offer an alternative form of assistance.",
                        "suggestedPoints":  [
                                                "Explain the sudden family obligation regarding your sibling's engagement party",
                                                "Apologize for backing out of the setup when she is likely very stressed",
                                                "Offer to hire a professional task rabbit to do the heavy lifting in your place"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your sibling (sibling)",
                        "role":  "Speaking to your sibling",
                        "objective":  "Explain your prior commitment and suggest attending the party late.",
                        "suggestedPoints":  [
                                                "Congratulate them but explain your prior commitment to Simone's wedding setup",
                                                "Acknowledge the family pressure but emphasize the importance of keeping your promise",
                                                "Suggest that you arrive at the engagement party a few hours late after the setup is done"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am caught between a rock and a hard place with these two events",
                                  "I made this commitment months ago and I can't leave her stranded",
                                  "Let's figure out a way I can contribute without physically being there at 6 PM"
                              ]
    },
    {
        "id":  "t6_067",
        "title":  "Honesty About the Wedding Venue",
        "category":  "Social & Event Planning",
        "situation":  "Your friend Lucia asked you to visit her chosen wedding venue and give your honest, unfiltered opinion before they finalize things. You think the venue is terribleâ€”it's located next to a noisy highway, smells like mildew, and has bad lighting. However, her fiancÃ© Andre privately told you he already signed the contract and paid a non-refundable $5,000 deposit to secure the date.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Lucia (friend)",
                        "role":  "Speaking to your friend Lucia",
                        "objective":  "Share your concerns about the venue gently and suggest ways to mitigate the issues.",
                        "suggestedPoints":  [
                                                "Gently explain the issues with the highway noise and the musty smell",
                                                "Acknowledge that she asked for your complete honesty before finalizing",
                                                "Suggest renting heavy drapery and strong floral arrangements to mask the flaws"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Andre (Lucia's fiancÃ©)",
                        "role":  "Speaking to Lucia's fiancÃ© Andre",
                        "objective":  "Explain the dilemma of keeping his secret versus being honest with Lucia.",
                        "suggestedPoints":  [
                                                "Explain that Lucia explicitly asked for my honest review of the venue",
                                                "Express concern that hiding the signed contract and deposit will cause a massive fight later",
                                                "Urge him to confess to Lucia about the deposit immediately so you don't have to lie"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I don't want to be caught in the middle of a major communication breakdown",
                                  "While it has potential, there are some significant logistical hurdles to overcome",
                                  "You need to come clean about the non-refundable deposit before she decides"
                              ]
    },
    {
        "id":  "t6_068",
        "title":  "Competing Farewell Parties",
        "category":  "Social & Event Planning",
        "situation":  "Your mutual friend is moving to Australia next week. Two of your friends, Tasha and Kyle, dislike each other and independently planned surprise farewell parties for this mutual friend on the exact same Saturday night. They both expect you to help execute the surprise and attend their respective party.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Tasha (friend)",
                        "role":  "Speaking to your friend Tasha",
                        "objective":  "Explain the scheduling conflict and propose merging the parties.",
                        "suggestedPoints":  [
                                                "Inform her that Kyle has unknowingly planned a party for the exact same evening",
                                                "Acknowledge their personal differences but emphasize the focus should be on the departing friend",
                                                "Propose merging the two events at a neutral venue like a pub to avoid splitting the friend group"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Kyle (friend)",
                        "role":  "Speaking to your friend Kyle",
                        "objective":  "Explain the scheduling conflict and propose merging the parties.",
                        "suggestedPoints":  [
                                                "Inform him that Tasha has unknowingly planned a party for the exact same evening",
                                                "Acknowledge their personal differences but emphasize the focus should be on the departing friend",
                                                "Propose merging the two events at a neutral venue like a pub to avoid splitting the friend group"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "We risk completely ruining the farewell by making people choose sides",
                                  "I suggest we put personal differences aside for one night to celebrate their move",
                                  "A joint event at a neutral location is the only logical solution"
                              ]
    },
    {
        "id":  "t6_069",
        "title":  "Designated Driver Dilemma",
        "category":  "Social & Event Planning",
        "situation":  "You agreed to be the designated driver for your friend Pedro's bachelor party, which means staying out until 3 AM. However, your partner is furious, saying you've been prioritizing your friends over your relationship lately, and demands you leave the party by midnight to come home.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Pedro (friend)",
                        "role":  "Speaking to your friend Pedro",
                        "objective":  "Explain why you have to leave early and arrange alternative transportation.",
                        "suggestedPoints":  [
                                                "Explain the tension at home and the need to prioritize your relationship right now",
                                                "Apologize for not being able to stay until the very end of the bachelor party",
                                                "Offer to pre-pay for premium Uber rides for everyone to get home safely at 3 AM"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner (partner)",
                        "role":  "Speaking to your partner",
                        "objective":  "Explain your safety commitment to the group and propose a compromise.",
                        "suggestedPoints":  [
                                                "Explain that backing out as the designated driver compromises everyone's safety",
                                                "Acknowledge their feelings of neglect and apologize for the recent imbalance",
                                                "Promise to take them out for a lavish, phone-free date night this entire Sunday to make up for it"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I cannot in good conscience leave them stranded downtown without a safe ride",
                                  "I realize I have been neglecting our quality time and I want to fix that",
                                  "Let's arrange an alternative transport solution so I can still be home by midnight"
                              ]
    },
    {
        "id":  "t6_070",
        "title":  "Non-Refundable Cabin",
        "category":  "Social & Event Planning",
        "situation":  "You and a group of friends booked a luxury cabin for a ski weekend. The organizer, Sam, paid the $2,000 non-refundable deposit. One friend, Zara, just dropped out last minute due to a minor cold. Sam is furious and insists Zara still pay her $400 share, but Zara refuses, saying she shouldn't pay if she isn't going. You have to intervene.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Zara (friend)",
                        "role":  "Speaking to your friend Zara",
                        "objective":  "Explain the unfair financial burden on the group and ask her to contribute.",
                        "suggestedPoints":  [
                                                "Explain that the cabin was booked based on a five-person split and the money is gone",
                                                "Acknowledge she is sick, but emphasize that dropping out last minute leaves Sam financially stuck",
                                                "Suggest she pay half her share ($200) as a compromise to keep the peace"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Sam (friend)",
                        "role":  "Speaking to your friend Sam",
                        "objective":  "Calm him down and propose a different way to cover the missing funds.",
                        "suggestedPoints":  [
                                                "Validate his frustration about being stuck with the $400 deficit",
                                                "Explain that forcing Zara to pay when she is sick will likely ruin the friendship",
                                                "Propose that the remaining four of you split the $400 difference ($100 each) to move on"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "It is incredibly unfair to leave the organizer holding the bag for a late cancellation",
                                  "We need to find a middle ground that doesn't completely destroy the friend group",
                                  "Absorbing the cost might be the price we pay to avoid a massive argument"
                              ]
    },
    {
        "id":  "t6_071",
        "title":  "The Dented Car",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your friend Marcus borrowed your car for a weekend road trip. When he returned it, your partner noticed a significant dent on the rear bumper. Marcus didn't mention it, and he is currently unemployed and struggling financially. Your partner is insisting that you confront Marcus and make him pay for the repairs.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Marcus (friend)",
                        "role":  "Speaking to your friend Marcus",
                        "objective":  "Bring up the dent, ask for an explanation, and propose a flexible solution.",
                        "suggestedPoints":  [
                                                "Mention finding the dent on the bumper and ask if he noticed it during the trip",
                                                "Acknowledge his current financial struggles and reassure him you aren't angry",
                                                "Suggest he pay for the repair in small installments over six months once he finds work"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner (partner)",
                        "role":  "Speaking to your partner",
                        "objective":  "Explain why you don't want to demand immediate payment and offer a compromise.",
                        "suggestedPoints":  [
                                                "Validate their frustration about the damaged car and Marcus's failure to mention it",
                                                "Explain that demanding $500 right now will crush Marcus while he is unemployed",
                                                "Propose paying for the repair from your personal savings and asking Marcus for non-monetary favors in return"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to address the damage without completely humiliating him",
                                  "We need to consider his financial reality before making aggressive demands",
                                  "Let's figure out a payment plan that respects both our property and his situation"
                              ]
    },
    {
        "id":  "t6_072",
        "title":  "Covering for a Coworker",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your coworker Rebecca was three hours late for work. She told your strict supervisor, Mr. Chen, that she was helping you with a flat tire on your way to the office. Mr. Chen has asked you to come to his office to confirm the story. You drove to work alone, and lying would violate company policy.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Rebecca (coworker)",
                        "role":  "Speaking to your coworker Rebecca",
                        "objective":  "Refuse to corroborate the lie and urge her to tell the truth.",
                        "suggestedPoints":  [
                                                "Express shock that she used you as an alibi without asking",
                                                "Explain that lying to Mr. Chen could cost you your own job",
                                                "Urge her to go to Mr. Chen immediately and confess before he questions you"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Mr. Chen (supervisor)",
                        "role":  "Speaking to your supervisor Mr. Chen",
                        "objective":  "Tell the truth carefully without overly throwing your coworker under the bus.",
                        "suggestedPoints":  [
                                                "State clearly that you drove to work alone and had no car trouble",
                                                "Acknowledge the awkwardness of contradicting Rebecca's story",
                                                "Suggest that there may have been a miscommunication and ask him to speak with her directly"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am not comfortable jeopardizing my own employment to cover this up",
                                  "It puts me in a terrible ethical position to verify a false story",
                                  "I can only speak to my own whereabouts this morning"
                              ]
    },
    {
        "id":  "t6_073",
        "title":  "Lost Professional Camera",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your cousin Arjun borrowed your $3,000 professional camera for his vacation and left it in a taxi. He offered to pay you back $125 a month over two years. However, you are a freelance photographer and need a replacement camera immediately for a paid gig this weekend with an important new client.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Arjun (cousin)",
                        "role":  "Speaking to your cousin Arjun",
                        "objective":  "Reject the two-year payment plan and demand a faster solution.",
                        "suggestedPoints":  [
                                                "Explain that you need the camera for your livelihood, not just a hobby",
                                                "Reject the 24-month plan as it doesn't solve your immediate crisis for the weekend gig",
                                                "Insist he take out a line of credit or borrow from his parents to buy a replacement today"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your client (client)",
                        "role":  "Speaking to your client",
                        "objective":  "Explain the situation, apologize, and offer a compromise for the weekend gig.",
                        "suggestedPoints":  [
                                                "Explain that your primary professional equipment was lost in an unforeseen accident",
                                                "Apologize for the unprofessional start to the working relationship",
                                                "Offer to rent equipment at your own expense and discount your fee by 15% for the hassle"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I cannot operate my business on a two-year installment plan",
                                  "I want to assure you this equipment issue will not affect the final quality of the photos",
                                  "We need to find a way to replace the item before Friday afternoon"
                              ]
    },
    {
        "id":  "t6_074",
        "title":  "Pet-Sitting vs. Roommate",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your neighbor Elena asked you to watch her large dog for two weeks while she visits her sick mother overseas. You want to help, but your roommate Josh was attacked by a dog as a child and is completely terrified of them. Having a large dog in the apartment for two weeks would make him miserable.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Elena (neighbor)",
                        "role":  "Speaking to your neighbor Elena",
                        "objective":  "Decline the request to host the dog and offer an alternative form of help.",
                        "suggestedPoints":  [
                                                "Express sympathy for her family emergency and desire to help",
                                                "Explain that your roommate has a severe phobia of dogs, making the apartment unsuitable",
                                                "Offer to visit her apartment three times a day to walk and feed the dog instead"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to Josh (roommate)",
                        "role":  "Speaking to your roommate Josh",
                        "objective":  "Ask for his tolerance, validate his fear, and propose strict boundaries.",
                        "suggestedPoints":  [
                                                "Explain Elena's desperate family emergency and lack of other pet-care options",
                                                "Acknowledge his trauma and promise the dog will never enter the common areas",
                                                "Offer to pay for him to stay at his partner's place for the worst part of the two weeks"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I need to balance being a supportive neighbor with respecting my roommate's boundaries",
                                  "I completely validate your anxiety around this breed of dog",
                                  "Let's see if we can find a middle ground where the dog stays in your unit"
                              ]
    },
    {
        "id":  "t6_075",
        "title":  "Unqualified Recommendation",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your friend Tomas asked you to write a glowing recommendation letter for a senior project manager role at your company. However, Tomas has a history of missing deadlines, and you do not think he is qualified. Writing the letter could damage your own reputation with the hiring manager.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Tomas (friend)",
                        "role":  "Speaking to your friend Tomas",
                        "objective":  "Refuse to write the letter, explain why gently, and offer a different kind of help.",
                        "suggestedPoints":  [
                                                "Explain that your company's internal referral policy is extremely strict",
                                                "Gently point out that the senior role requires specific software experience he lacks",
                                                "Offer to help him rewrite his resume and practice for interviews at other companies"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to the hiring manager (manager)",
                        "role":  "Speaking to the hiring manager",
                        "objective":  "Provide a neutral, factual reference without endorsing him for the specific senior role.",
                        "suggestedPoints":  [
                                                "Clarify that Tomas is a personal friend and you want to remain objective",
                                                "Highlight his positive soft skills like enthusiasm, rather than technical management abilities",
                                                "Suggest they rely heavily on the technical aptitude test during his interview process"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I cannot stake my professional reputation on an internal referral right now",
                                  "I want to support your career growth without over-promising to the director",
                                  "I think you would be better suited for an intermediate role rather than senior"
                              ]
    },
    {
        "id":  "t6_076",
        "title":  "Sibling Loan vs. Anniversary Gift",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your sibling Grace desperately asked to borrow $2,000 to cover sudden emergency car repairs so she can get to work. However, you have been saving exactly $2,000 for the last year to buy your partner a surprise 10th-anniversary trip next month. If you give Grace the money, the trip is cancelled.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Grace (sibling)",
                        "role":  "Speaking to your sibling Grace",
                        "objective":  "Refuse the loan, explain the saved money's purpose, and offer non-monetary help.",
                        "suggestedPoints":  [
                                                "Explain that the money in savings is strictly earmarked for a major anniversary milestone",
                                                "Acknowledge the stress of her sudden car failure and potential job impact",
                                                "Offer to drive her to work every day for two weeks while she secures a bank loan"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner (partner)",
                        "role":  "Speaking to your partner",
                        "objective":  "Confess the trip plans, explain Grace's emergency, and suggest delaying the celebration.",
                        "suggestedPoints":  [
                                                "Reveal the surprise anniversary trip you had been planning for next month",
                                                "Explain Grace's desperate situation and your guilt over withholding family help",
                                                "Propose scaling back to a local weekend getaway and doing the big trip next year"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have explicitly earmarked these funds for a major relationship milestone",
                                  "Family emergencies are important, but I also have a commitment to my partner",
                                  "Let's figure out an alternative way to get you to the office without cash"
                              ]
    },
    {
        "id":  "t6_077",
        "title":  "Moving Day vs. Medical Appointment",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your best friend Dan just bought his first house and asked you to help him move heavy furniture this Saturday morning. You really want to support him. However, your elderly mother already asked you weeks ago to accompany her to an important specialist medical appointment on the exact same morning.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Dan (best friend)",
                        "role":  "Speaking to your best friend Dan",
                        "objective":  "Explain why you can't help on Saturday morning and propose a different way to assist.",
                        "suggestedPoints":  [
                                                "Explain the conflict with your mother's specialist appointment that was booked months ago",
                                                "Congratulate him on the new house and express regret over missing the move",
                                                "Offer to come over Saturday evening with pizzas and help unpack all the kitchen boxes"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your mother (mother)",
                        "role":  "Speaking to your mother",
                        "objective":  "Ask if she can reschedule or take a taxi, and reassure her of your support.",
                        "suggestedPoints":  [
                                                "Explain Dan's sudden need for physical help with moving into his first home",
                                                "Ask if her specialist appointment could possibly be moved to the afternoon",
                                                "Offer to pay for a premium medical transport service to take her if she can't reschedule"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am double-booked on Saturday morning with two very important people",
                                  "I cannot abandon my mother when she is anxious about this specialist",
                                  "Let me contribute to the moving effort in a different capacity later in the day"
                              ]
    },
    {
        "id":  "t6_078",
        "title":  "Covering a Presentation",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your colleague Amara has a sudden family emergency and begged you to deliver her complex 45-minute presentation to the executive board tomorrow morning. You have zero preparation on the topic, and your supervisor expects high-quality work. Doing it poorly could ruin your reputation.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Amara (colleague)",
                        "role":  "Speaking to your colleague Amara",
                        "objective":  "Decline the request due to lack of knowledge, but offer other support.",
                        "suggestedPoints":  [
                                                "Express deep sympathy for her sudden family emergency",
                                                "Explain that you lack the technical expertise to field Q&A from the board",
                                                "Offer to email the board on her behalf to request a formal postponement"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your supervisor (supervisor)",
                        "role":  "Speaking to your supervisor",
                        "objective":  "Explain Amara's absence, manage expectations, and propose a solution.",
                        "suggestedPoints":  [
                                                "Inform them of Amara's emergency and your willingness to step in",
                                                "Manage expectations by clarifying you haven't prepared the technical details",
                                                "Suggest delivering only the executive summary tomorrow and scheduling the deep dive for next week"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to protect both of our reputations in front of the executive team",
                                  "It would be a disservice to the project to present it without proper background knowledge",
                                  "Let's pivot to a brief status update rather than the full technical pitch"
                              ]
    },
    {
        "id":  "t6_079",
        "title":  "Furniture Delivery vs. Parent Visit",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your neighbor Victor asked you to stay at your apartment all day Wednesday to accept and sign for a large furniture delivery, as he cannot miss work. However, you took Wednesday off specifically because your parent is visiting from out of town, and you promised to take them on a day trip to the countryside.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Victor (neighbor)",
                        "role":  "Speaking to your neighbor Victor",
                        "objective":  "Decline the favor, explain your prior plans, and offer a minor alternative.",
                        "suggestedPoints":  [
                                                "Explain that you took the day off specifically for a planned excursion with your parent",
                                                "Acknowledge the difficulty of scheduling freight deliveries",
                                                "Offer to let him leave a lockbox key with you on Tuesday night in case the driver can self-deliver"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your visiting parent (parent)",
                        "role":  "Speaking to your visiting parent",
                        "objective":  "Explain the neighbor's dilemma and propose altering your day trip plans.",
                        "suggestedPoints":  [
                                                "Explain that Victor is in a bind and risks losing his expensive delivery",
                                                "Acknowledge how much you were looking forward to the countryside trip",
                                                "Propose staying local for the morning, having a nice brunch, and doing the road trip in the afternoon"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I have a firm commitment to spend quality time with my visiting family",
                                  "I don't want to leave you stranded with the freight company",
                                  "Let's adjust our itinerary so we aren't trapped in the apartment all morning"
                              ]
    },
    {
        "id":  "t6_080",
        "title":  "Returning a Favor vs. Anniversary",
        "category":  "Favors & Borrowed Items",
        "situation":  "Your friend Bianca helped you renovate your bathroom last year. Now she expects you to return the favor by helping her paint her entire apartment this Saturday. However, your partner just revealed they booked a surprise, non-refundable winery tour for the two of you this Saturday to celebrate your anniversary.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to Bianca (friend)",
                        "role":  "Speaking to your friend Bianca",
                        "objective":  "Explain the anniversary clash, reiterate your gratitude for past help, and reschedule.",
                        "suggestedPoints":  [
                                                "Acknowledge how much she helped you last year and your eagerness to return the favor",
                                                "Explain the surprise non-refundable anniversary tour your partner just sprang on you",
                                                "Promise to dedicate all of next weekend to painting her apartment instead"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner (partner)",
                        "role":  "Speaking to your partner",
                        "objective":  "Appreciate the surprise, explain your obligation to Bianca, and suggest a compromise.",
                        "suggestedPoints":  [
                                                "Express gratitude for the thoughtful and generous anniversary surprise",
                                                "Explain your deep sense of obligation to Bianca for her past labor",
                                                "Propose asking if the winery tour can be transferred to a Sunday or if you can skip the morning portion"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am totally committed to returning the favor, just not this specific Saturday",
                                  "I feel terrible canceling on a surprise you put so much thought into",
                                  "Let's see if we can shift the timeline by a few days to accommodate both"
                              ]
    },
    {
        "id":  "t6_081",
        "title":  "Driving Elderly Mother vs Work Obligations",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your elderly mother, Elena, needs someone to drive her to the physiotherapy clinic three times a week for her hip recovery. You promised her you would do it personally. However, your sibling, David, has noticed that leaving work early is putting your job in jeopardy. He insists you hire a professional driver so you can focus on your career, but your mother strongly dislikes strangers and relies on your emotional support during the long drives.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your mother Elena",
                        "role":  "Speaking to your mother Elena",
                        "objective":  "Explain why you can no longer drive her personally and propose a solution she can accept.",
                        "suggestedPoints":  [
                                                "Acknowledge how much she values having family with her during the drives to the clinic",
                                                "Explain that leaving work early three times a week has led to serious warnings from your manager",
                                                "Suggest that David or another family member joins her for the first few trips with the professional driver so she isn't alone with a stranger"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your sibling David",
                        "role":  "Speaking to your sibling David",
                        "objective":  "Explain why you are going to continue driving her yourself and propose how to manage the work impact.",
                        "suggestedPoints":  [
                                                "Express appreciation for his concern about your job security and career progression",
                                                "Emphasize how vulnerable Mom feels right now and how much she dreads being alone with a stranger for an hour each way",
                                                "Propose a compromise where you drive her twice a week, and ask him if he could take on the third day to ease your schedule"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know how stressful the clinic visits are for you, and having family there helps.",
                                  "I've received a formal warning at work, and I simply can't afford to lose my job right now.",
                                  "I understand you're looking out for my career, but we can't ignore her anxiety about strangers."
                              ]
    },
    {
        "id":  "t6_082",
        "title":  "Watching Friend's Kids vs Own Child's Suspension",
        "category":  "Caregiving & Responsibilities",
        "situation":  "You promised your close friend, Carla, that you would watch her two young children at your house after school this entire week while she deals with a family emergency out of town. However, you just received a call from the principal that your teenage son, Leo, has been suspended for fighting and must remain at home under strict supervision for the next three days. Having two noisy youngsters running around a tense house with a suspended teenager is not a good environment, but Carla is already relying on you.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your friend Carla",
                        "role":  "Speaking to your friend Carla",
                        "objective":  "Explain why you can no longer watch her children and offer an alternative solution.",
                        "suggestedPoints":  [
                                                "Express deep regret for backing out while she is dealing with her own family emergency",
                                                "Explain that Leo's sudden suspension means the house is tense and not a safe, fun environment for her little ones",
                                                "Offer to pay for a trusted babysitter or ask another mutual friend to take over for the next three days"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your son Leo",
                        "role":  "Speaking to your son Leo",
                        "objective":  "Explain how he will need to behave despite the difficult circumstances of his suspension.",
                        "suggestedPoints":  [
                                                "Acknowledge that being suspended is upsetting and that he needs a quiet space to reflect and do his schoolwork",
                                                "Explain that backing out on Carla during her emergency is impossible, so her young kids will be here",
                                                "Set strict boundaries that he must stay in his room working quietly and not let his frustration out on the kids"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible adding to your stress during your emergency, but the situation at home just exploded.",
                                  "I need you to step up and show maturity despite what happened at school today.",
                                  "The house is going to be chaotic, and I need absolute cooperation from you."
                              ]
    },
    {
        "id":  "t6_083",
        "title":  "Adopting Rescue Dog vs Allergic Parent",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your partner, Sam, has finally found the perfect rescue dog they've been wanting to adopt for years, and the shelter has approved your application. However, your aging father, Arthur, who lives just down the street and visits you multiple times a week for dinner and companionship, is severely allergic to dogs. If you get the dog, Arthur won't be able to come inside your house anymore.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your partner Sam",
                        "role":  "Speaking to your partner Sam",
                        "objective":  "Explain why you shouldn't adopt the dog right now and propose an alternative.",
                        "suggestedPoints":  [
                                                "Acknowledge how long they've waited to find the perfect rescue dog and how excited they are",
                                                "Explain that Dad's allergies are severe and losing his weekly dinners here would deeply isolate him",
                                                "Suggest volunteering at the animal shelter together on weekends instead until circumstances change"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your father Arthur",
                        "role":  "Speaking to your father Arthur",
                        "objective":  "Explain that you are adopting the dog and propose how you will maintain your relationship.",
                        "suggestedPoints":  [
                                                "Reassure him that you love having him over for dinner and don't want to lose that connection",
                                                "Explain that Sam has waited years for this specific adoption opportunity and it means the world to them",
                                                "Propose moving your weekly dinners to his house down the street, offering to cook and bring the food over"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know this dog is a dream come true for you, but we have to consider the daily impact.",
                                  "Dad relies on these visits for his mental health, and we can't just shut him out.",
                                  "We want to expand our family with this rescue, but we will make sure to bring the dinners to your place."
                              ]
    },
    {
        "id":  "t6_084",
        "title":  "Helping Sister with Newborn vs Spouse's Work Project",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your sister, Michelle, who lives in Edmonton, just had a difficult delivery and begged you to fly out for two weeks to help her with the newborn. You agreed immediately. However, your spouse, Mark, just got assigned a demanding, make-or-break project at his firm that requires late nights. If you go to Edmonton, Mark will be left completely alone to manage your own two toddlers while working 12-hour days.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your sister Michelle",
                        "role":  "Speaking to your sister Michelle",
                        "objective":  "Explain why you can't come for the full two weeks and offer an alternative way to help.",
                        "suggestedPoints":  [
                                                "Express your love and how much you want to be there to support her after her difficult delivery",
                                                "Explain that Mark's sudden critical project means he cannot manage the toddlers alone with his hours",
                                                "Offer to fly her mother-in-law out instead, or suggest coming for just one long weekend rather than two weeks"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your spouse Mark",
                        "role":  "Speaking to your spouse Mark",
                        "objective":  "Explain that you still need to go to Edmonton and propose how to handle the kids.",
                        "suggestedPoints":  [
                                                "Acknowledge the immense pressure he is under with this make-or-break project at the firm",
                                                "Emphasize that Michelle is in physical distress from the birth and has absolutely no one else in Edmonton",
                                                "Propose hiring a temporary live-in nanny or asking a trusted neighbor to take the kids until he finishes work each day"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel torn between my promise to help with the baby and my responsibilities at home.",
                                  "This project could define your career, and leaving you with two toddlers isn't fair.",
                                  "She's recovering from a traumatic birth and is completely alone in the city."
                              ]
    },
    {
        "id":  "t6_085",
        "title":  "Neighbor's Medical Emergency vs Picking Up Kids",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your neighbor, Raj, just knocked on your door in a panic. His elderly mother fell down the stairs and he needs to follow the ambulance to the hospital immediately. He asks you to stay in his house and wait for his wife to get home in two hours. However, you are scheduled to pick up your own two young children from elementary school in exactly 30 minutes, and the school has a strict policy about late pickups.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your neighbor Raj",
                        "role":  "Speaking to your neighbor Raj",
                        "objective":  "Explain why you can't stay for the full two hours and propose a compromise.",
                        "suggestedPoints":  [
                                                "Express your shock and sympathy about his mother's terrible fall",
                                                "Explain that if you don't leave in 15 minutes, your young kids will be left stranded outside the school",
                                                "Offer to lock up his house and leave the key under the mat, or suggest another neighbor who is home all day"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to the school receptionist Sarah",
                        "role":  "Speaking to the school receptionist Sarah",
                        "objective":  "Explain your emergency situation and ask for an exception to the pickup policy.",
                        "suggestedPoints":  [
                                                "Apologize profusely for breaking the strict on-time pickup policy",
                                                "Explain that you are the sole person securing a neighbor's home after a severe medical emergency",
                                                "Ask if she could please keep the children in the front office until your spouse can leave work to get them in an hour"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to help you in this crisis, but my own children will be standing on the curb.",
                                  "I know the school policy is strict, but this is a genuine medical emergency next door.",
                                  "Is there anyone else on the street who can sit in the house until your wife arrives?"
                              ]
    },
    {
        "id":  "t6_086",
        "title":  "Child's Swimming Ambition vs Ex-Spouse's Academic Rules",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your 15-year-old daughter, Maya, has a chance to make the provincial swimming team but needs to practice every afternoon. She wants to quit her expensive after-school math tutoring to do this. However, your ex-spouse, Greg, who pays for the tutoring and shares joint custody, insists that her dropping math grades mean academics must come first and she cannot quit.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your daughter Maya",
                        "role":  "Speaking to your daughter Maya",
                        "objective":  "Explain why she cannot quit the tutoring right now and offer a compromise for her swimming.",
                        "suggestedPoints":  [
                                                "Acknowledge how hard she has trained for the provincial team and how proud you are",
                                                "Explain that her father and you agreed that passing math is the non-negotiable priority this term",
                                                "Suggest moving the tutoring to weekend mornings so her afternoons are free for swim practice"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your ex-spouse Greg",
                        "role":  "Speaking to your ex-spouse Greg",
                        "objective":  "Explain why you think she should pursue swimming and propose a solution for her math grades.",
                        "suggestedPoints":  [
                                                "Acknowledge his valid concern about her slipping math grades and his financial investment in the tutor",
                                                "Emphasize that making the provincial team is a rare opportunity that could lead to university scholarships",
                                                "Propose letting her do the daily afternoon practices, and you will personally tutor her in math on weekends"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know how much this provincial tryout means to you after years of early morning swims.",
                                  "We both agreed that academics come first, but this athletic opportunity is time-sensitive.",
                                  "Let's find a way to support her athletic dreams without sacrificing her academic future."
                              ]
    },
    {
        "id":  "t6_087",
        "title":  "Daughter's Field Trip vs Father's Sick Nurse",
        "category":  "Caregiving & Responsibilities",
        "situation":  "You committed a month ago to being a parent chaperone for your 8-year-old daughter Chloe's big museum field trip today. She is thrilled because you rarely get to do this. Just as you are putting on your coat to leave, the home care nurse for your aging father (who has severe dementia and lives in an apartment across town) calls in sick. Your father cannot be left alone for even an hour.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your daughter Chloe",
                        "role":  "Speaking to your daughter Chloe",
                        "objective":  "Explain why you can't come on the field trip and promise to make it up to her.",
                        "suggestedPoints":  [
                                                "Acknowledge how excited she was to have you on the bus and at the museum",
                                                "Explain gently that Grandpa is sick and his helper couldn't come, so he needs you to keep him safe",
                                                "Promise to take her and her best friend to the museum this Saturday for a special VIP tour just for them"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to the home care agency manager",
                        "role":  "Speaking to the agency manager",
                        "objective":  "Express your frustration about the sudden cancellation and demand an immediate replacement.",
                        "suggestedPoints":  [
                                                "Explain that you have an immovable commitment with your daughter's school today",
                                                "Emphasize the danger of leaving a severe dementia patient unattended due to a last-minute staff cancellation",
                                                "Request that they send an emergency replacement nurse within the next 45 minutes, even if it costs extra"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am so heartbroken to break this promise to you right as we were heading out.",
                                  "I understand staff get sick, but leaving a vulnerable senior without care is unacceptable.",
                                  "I need a solution from your agency immediately, as I have a commitment I cannot break."
                              ]
    },
    {
        "id":  "t6_088",
        "title":  "Friend's Postpartum Depression vs Partner's Frustration",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your best friend, Hannah, is struggling with severe postpartum depression. She has no family in the city, so you have been going to her apartment every evening to cook and help with the baby. However, your own partner, Jordan, is feeling extremely neglected. You've missed Jordan's birthday dinner and haven't helped with your own household chores in three weeks. Jordan wants you to step back.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your friend Hannah",
                        "role":  "Speaking to your friend Hannah",
                        "objective":  "Explain why you need to reduce your visits and propose another way she can get help.",
                        "suggestedPoints":  [
                                                "Reassure her that you love her and the baby, and that postpartum depression is incredibly hard",
                                                "Explain that your own relationship and household are suffering because you've been away every evening",
                                                "Suggest helping her set up a meal delivery service and connecting her with a local postpartum support group"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner Jordan",
                        "role":  "Speaking to your partner Jordan",
                        "objective":  "Explain why you must continue helping your friend for now and propose a compromise for your relationship.",
                        "suggestedPoints":  [
                                                "Apologize deeply for missing the birthday dinner and leaving all the chores to them",
                                                "Emphasize that Hannah is in a genuine mental health crisis with literally no one else to check on her",
                                                "Propose reducing the visits to every other day, dedicating the weekends strictly to your relationship"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know you are barely keeping your head above water right now, and I want to support you.",
                                  "I haven't been a good partner lately, and it's unfair to dump the household on you.",
                                  "She's in a highly vulnerable state, but I also need to protect our relationship."
                              ]
    },
    {
        "id":  "t6_089",
        "title":  "Assisted Living for Mother vs Sibling's Plan",
        "category":  "Caregiving & Responsibilities",
        "situation":  "Your mother recently had a stroke. Your brother, James, who holds the power of attorney, insists she must move into an assisted living facility because it's the safest option. However, your mother, who is mentally sharp but physically weak, tearfully begged you not to let him put her in a home. She wants to stay in her own house with daily nursing care, but James says that's too expensive and difficult to manage.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your brother James",
                        "role":  "Speaking to your brother James",
                        "objective":  "Advocate for your mother's wishes and propose a plan to make in-home care work.",
                        "suggestedPoints":  [
                                                "Acknowledge that his priority is her physical safety and that managing care is stressful",
                                                "Explain how devastated she is at the thought of losing her independence and her home of 40 years",
                                                "Propose a 3-month trial of in-home nursing, offering to manage the scheduling and chip in for the cost yourself"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your mother",
                        "role":  "Speaking to your mother",
                        "objective":  "Explain why assisted living might be the necessary choice and try to comfort her.",
                        "suggestedPoints":  [
                                                "Validate her fear of leaving her home and assure her she isn't being abandoned",
                                                "Explain gently that James is worried about her safety at night when no nurses are around",
                                                "Suggest touring a very nice, independent-style facility together so she can see it's not a clinical hospital environment"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know you hold the legal power, but we have to consider her emotional well-being too.",
                                  "I promise we won't let you lose your dignity, even if we have to make a hard change.",
                                  "Let's look at a compromise that keeps her safe but honors her strong wishes."
                              ]
    },
    {
        "id":  "t6_090",
        "title":  "Returning Foster Pet vs Child's Broken Heart",
        "category":  "Caregiving & Responsibilities",
        "situation":  "You agreed to foster a rescue dog, Buster, for one month. Due to shelter delays, Buster has been with you for three months. Your 6-year-old son, Toby, has bonded deeply with the dog and calls him his best friend. Now, the rescue coordinator, Wendy, has found a permanent adopter for Buster and wants him back tomorrow. Toby will be heartbroken, but your apartment lease actually forbids permanent pets.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to the rescue coordinator Wendy",
                        "role":  "Speaking to the rescue coordinator Wendy",
                        "objective":  "Explain the situation and try to figure out a way to keep the dog or delay the transfer.",
                        "suggestedPoints":  [
                                                "Apologize for the complication, acknowledging that you signed a foster-only agreement",
                                                "Explain that due to the long 3-month delay, your young son has become incredibly attached",
                                                "Ask if you can officially adopt Buster, stating you will negotiate with your landlord to make it work"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your son Toby",
                        "role":  "Speaking to your son Toby",
                        "objective":  "Explain why Buster has to leave and comfort him through the transition.",
                        "suggestedPoints":  [
                                                "Acknowledge how much he loves Buster and what a great job he did taking care of him",
                                                "Explain gently that Buster was always staying temporarily until he found his 'forever family'",
                                                "Suggest making a special scrapbook of photos tonight so he can always remember his time with Buster"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know the contract was just for fostering, but the extended timeline changed the dynamic.",
                                  "It is so hard to say goodbye to a friend, but we did a great job helping him.",
                                  "I'm willing to pay whatever pet deposit my landlord requires to finalize this adoption."
                              ]
    },
    {
        "id":  "t6_091",
        "title":  "Backing Out of Risky Business vs Friend's Investment",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your old college friend, Sanjay, convinced you to start a food truck business together. He has already quit his job and invested $10,000 of his savings into a truck. However, after taking a closer look at the local permits and competition, you realize the business plan is fundamentally flawed and likely to fail. Your spouse, who warned you from the start, insists you pull your agreed $10,000 half before you lose it, but Sanjay is counting on your money to buy the cooking equipment.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your friend Sanjay",
                        "role":  "Speaking to your friend Sanjay",
                        "objective":  "Explain why you are pulling out of the business and offer a way to soften the blow.",
                        "suggestedPoints":  [
                                                "Acknowledge the terrible timing since he has already quit his job and bought the physical truck",
                                                "Explain that the numbers for permits and local competition just don't add up to a profitable venture",
                                                "Offer to help him write a new business plan to secure a small business loan instead of your investment"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your spouse",
                        "role":  "Speaking to your spouse",
                        "objective":  "Explain why you feel obligated to give Sanjay the money and how you will minimize the risk.",
                        "suggestedPoints":  [
                                                "Admit that they were right about the risks, but emphasize that Sanjay is your oldest friend",
                                                "Explain that pulling out now leaves him completely stranded with a useless, empty truck",
                                                "Propose giving him $5,000 as a structured personal loan rather than a business investment, protecting your savings"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I feel terrible backing out at this stage, but the financial realities are too dangerous.",
                                  "I know you warned me, but I can't leave my best friend in financial ruin.",
                                  "Let's look at the hard numbers together before anyone spends another dime."
                              ]
    },
    {
        "id":  "t6_092",
        "title":  "Roommate's Lost Job vs Friendly Landlord",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your roommate, Katie, suddenly lost her job and cannot pay her half of the rent for the next two months. She asks you to cover it, but you don't have the savings. Your landlord, Mrs. Park, is a sweet older woman who lives downstairs, often bakes you cookies, and relies on the rental income to pay her own property taxes. Rent is due tomorrow.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your roommate Katie",
                        "role":  "Speaking to your roommate Katie",
                        "objective":  "Explain why you can't cover her rent and what she needs to do immediately.",
                        "suggestedPoints":  [
                                                "Express sympathy for her sudden job loss and the stress she is under",
                                                "Explain that you simply do not have the savings to pay double rent without going into debt yourself",
                                                "Insist that she must go downstairs and speak directly to Mrs. Park tonight to ask for a payment plan or move out"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your landlord Mrs. Park",
                        "role":  "Speaking to your landlord Mrs. Park",
                        "objective":  "Explain the situation with the rent and propose a solution that protects her income.",
                        "suggestedPoints":  [
                                                "Express appreciation for her kindness as a landlord and apologize for bringing bad news",
                                                "Explain that Katie lost her job and I cannot afford the full amount on my own this month",
                                                "Propose paying my half tomorrow, and ask if she will allow Katie to break the lease early so we can find a paying roommate"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I want to help you, but I live paycheck to paycheck myself and don't have the funds.",
                                  "I hate to bring this anxiety to your door, especially knowing you rely on this income.",
                                  "We need to be completely transparent with her rather than just coming up short tomorrow."
                              ]
    },
    {
        "id":  "t6_093",
        "title":  "Selling Grandmother's House vs Keeping it",
        "category":  "Financial & Shared Expenses",
        "situation":  "You and your older sister, Brenda, just jointly inherited your late grandmother's beautiful but aging house. Brenda has massive credit card debt and wants to sell the property immediately to cash out her half. However, you have always dreamed of renovating it and keeping it in the family. Your spouse agrees with Brenda, pointing out that you cannot afford to buy Brenda out or pay the property taxes.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your sister Brenda",
                        "role":  "Speaking to your sister Brenda",
                        "objective":  "Explain why you want to keep the house and propose a financial compromise.",
                        "suggestedPoints":  [
                                                "Acknowledge her financial stress and her right to access her half of the inheritance",
                                                "Express your deep sentimental attachment to the house and Grandma's memory",
                                                "Propose renting the house out for two years, giving her all the rental profit to pay her debts until you can secure a mortgage to buy her out"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your spouse",
                        "role":  "Speaking to your spouse",
                        "objective":  "Explain why you are resisting the sale and try to convince them to explore keeping it.",
                        "suggestedPoints":  [
                                                "Acknowledge the logical financial argument that we don't have the cash to buy Brenda out right now",
                                                "Explain the immense emotional weight of letting a 60-year family legacy go to strangers",
                                                "Suggest meeting with a financial advisor to see if we could take out a specialized loan against our current home"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know selling would solve your immediate debt, but this house is our family history.",
                                  "I understand the math doesn't look good on paper, but I can't just let Grandma's legacy go.",
                                  "Let's look at creative financing options before we put a 'For Sale' sign on the lawn."
                              ]
    },
    {
        "id":  "t6_094",
        "title":  "Demanding Loan Back from Friend vs Partner's Anger",
        "category":  "Financial & Shared Expenses",
        "situation":  "Six months ago, you lent your close friend, Nadia, $2,000 for emergency car repairs. She promised to pay you back in two months but now avoids the topic entirely, though you see her posting pictures of expensive dinners online. Your partner, Alex, is furious about the missing money because you are supposed to be saving for a wedding, and demands you give Nadia an ultimatum today.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your friend Nadia",
                        "role":  "Speaking to your friend Nadia",
                        "objective":  "Firmly ask for the money back without destroying the long-term friendship.",
                        "suggestedPoints":  [
                                                "Mention that it's been six months since the car repair loan and you haven't heard anything about repayment",
                                                "Explain that you and Alex urgently need the funds back for your wedding deposits",
                                                "Offer to let her pay it back in installments of $500 a month starting this Friday"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner Alex",
                        "role":  "Speaking to your partner Alex",
                        "objective":  "Explain why an aggressive ultimatum is the wrong approach and propose a different tactic.",
                        "suggestedPoints":  [
                                                "Validate his anger about the missing wedding funds and her inappropriate social media posts",
                                                "Explain that Nadia gets highly defensive and an ultimatum might make her cut contact completely, meaning we never see the money",
                                                "Promise that you will invite her for coffee this week and directly establish a firm payment schedule"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "We've been friends a long time, but I really need to address the money I lent you.",
                                  "I am just as frustrated as you are, but backing her into a corner won't get us our cash.",
                                  "I need a concrete timeline from you on when I can expect the transfer."
                              ]
    },
    {
        "id":  "t6_095",
        "title":  "Boss's Expensive Retirement Gift vs Colleague's Budget",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your office is buying a retirement gift for your boss. You and another junior colleague, Tom, agreed to chip in $50 each. However, the organizer, Lisa, unilaterally decided to buy an expensive espresso machine and is now demanding $150 from everyone. Tom confidentially told you he cannot afford groceries if he pays this, but he is too intimidated by Lisa to say no.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to the organizer Lisa",
                        "role":  "Speaking to the organizer Lisa",
                        "objective":  "Confront her about the increased cost and refuse to pay the higher amount.",
                        "suggestedPoints":  [
                                                "Acknowledge that the espresso machine is a lovely idea for the boss's retirement",
                                                "Explain that tripling the expected contribution without consulting the team is unfair to junior staff",
                                                "State clearly that you and Tom will only be contributing the originally agreed-upon $50 each"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your colleague Tom",
                        "role":  "Speaking to your colleague Tom",
                        "objective":  "Encourage him to stand his ground and offer a united front.",
                        "suggestedPoints":  [
                                                "Validate his stress and assure him he shouldn't sacrifice grocery money for an office gift",
                                                "Explain that Lisa overstepped her boundaries by buying the machine without a vote",
                                                "Offer to draft a polite but firm joint email to Lisa stating you both can only afford the original $50"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "It was inappropriate to triple the budget after people had already committed to a specific amount.",
                                  "You should never feel pressured to go into debt for a workplace social expectation.",
                                  "We will contribute the $50 we agreed upon, and you will have to cover the difference."
                              ]
    },
    {
        "id":  "t6_096",
        "title":  "Brother's Rent Request vs Partner's Boundary",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your brother, Miguel, just called in a panic saying he is going to be evicted tomorrow if he doesn't come up with $1,000 for rent. He is begging you for a loan. However, two years ago you lent him $2,500 that he never paid back. Your partner, Chris, was furious back then and made you swear you would never lend Miguel money again.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your brother Miguel",
                        "role":  "Speaking to your brother Miguel",
                        "objective":  "Refuse the loan and explain the damage his past actions have caused.",
                        "suggestedPoints":  [
                                                "Express concern that he is facing eviction and in such a stressful situation",
                                                "Remind him that the $2,500 he never repaid caused massive conflict in your own marriage",
                                                "Refuse the cash, but offer to let him sleep on your couch for two weeks while he finds a cheaper apartment"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner Chris",
                        "role":  "Speaking to your partner Chris",
                        "objective":  "Explain the severity of Miguel's situation and beg for a one-time exception.",
                        "suggestedPoints":  [
                                                "Acknowledge the promise you made and validate Chris's lingering anger over the unpaid $2,500",
                                                "Emphasize the immediate danger of Miguel ending up literally homeless on the street tomorrow",
                                                "Propose directly paying the landlord $1,000 rather than giving Miguel cash, treating it as a final gift rather than a loan"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I love you, but your failure to repay the last loan severely damaged my marriage.",
                                  "I know I promised never to give him money, but eviction is a true emergency.",
                                  "I can't give you cash, but I can offer you a temporary roof over your head."
                              ]
    },
    {
        "id":  "t6_097",
        "title":  "Shared Gym Membership vs Friend Quitting",
        "category":  "Financial & Shared Expenses",
        "situation":  "You and your friend, Derek, signed a binding one-year 'Buddy Plan' gym contract to get a cheaper rate. The bill goes to your credit card, and Derek is supposed to e-transfer you his half ($60) monthly. Derek stopped going to the gym two months ago and just texted saying he's not paying anymore because he doesn't use it. Your partner says you absolutely should not pay for Derek's mistake.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your friend Derek",
                        "role":  "Speaking to your friend Derek",
                        "objective":  "Remind him of his commitment and demand the monthly payment.",
                        "suggestedPoints":  [
                                                "Acknowledge that it's frustrating to pay for a service he isn't actively using",
                                                "Remind him clearly that this was a joint legal contract and my credit score is on the line",
                                                "Insist he pays the remaining months, or ask him to find a friend to take over his half of the membership"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to the gym manager",
                        "role":  "Speaking to the gym manager",
                        "objective":  "Explain the situation and try to get out of the restrictive contract.",
                        "suggestedPoints":  [
                                                "Explain that your workout partner has completely abandoned the agreement and stopped paying you",
                                                "Mention that as a loyal member who still attends, you shouldn't be penalized with his half of the bill",
                                                "Ask if you can downgrade to a single membership with no penalty fee, given the circumstances"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "It's not fair to leave me holding the bag just because you lost your motivation to work out.",
                                  "We made a joint commitment, and you can't just walk away when my credit card is attached.",
                                  "I am hoping management can make an exception, as I am still an active and paying member."
                              ]
    },
    {
        "id":  "t6_098",
        "title":  "Coworker's Overpaid Bonus vs Honesty to Supervisor",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your coworker, Phil, accidentally received a $2,000 overpayment on his annual bonus due to an accounting glitch. He showed you the pay stub in confidence and wants to keep the money to pay off his student loans. However, your supervisor, Ms. Tanaka, specifically asked you to review the departmental payroll report for accuracy before she signs off on it tomorrow. If you hide it, you are complicit.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your coworker Phil",
                        "role":  "Speaking to your coworker Phil",
                        "objective":  "Convince him to report the error himself before you are forced to do it.",
                        "suggestedPoints":  [
                                                "Acknowledge how tempting it is to keep the money to help with his stressful student loans",
                                                "Explain that Ms. Tanaka tasked you with auditing the payroll, so the error will definitely be discovered",
                                                "Urge him to report it to HR immediately so he looks honest, rather than getting caught hiding it"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your supervisor Ms. Tanaka",
                        "role":  "Speaking to your supervisor Ms. Tanaka",
                        "objective":  "Report the discrepancy without getting Phil in serious trouble for delaying.",
                        "suggestedPoints":  [
                                                "State that you have completed the payroll review as requested and found a major discrepancy",
                                                "Explain that Phil's bonus was overpaid by $2,000 due to what looks like a system glitch",
                                                "Frame it carefully by saying Phil just noticed it and was unsure how to process the return, protecting his job"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know you need the cash, but keeping it constitutes theft and could cost you your job.",
                                  "As part of my audit duties, I have identified a significant overpayment anomaly.",
                                  "If you come forward now, it just looks like an honest system error on their end."
                              ]
    },
    {
        "id":  "t6_099",
        "title":  "In-Laws' Private School Offer vs Spouse's Objections",
        "category":  "Financial & Shared Expenses",
        "situation":  "Your wealthy in-laws have offered to pay the $25,000 annual tuition to send your child to an elite private school. You think this is an incredible opportunity that will set your child up for a brilliant future. However, your spouse, Alex (their child), strongly objects, saying that taking the money will allow the in-laws to control your parenting choices and manipulate the family dynamic, as they have done in the past.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your spouse Alex",
                        "role":  "Speaking to your spouse Alex",
                        "objective":  "Persuade them to accept the offer while establishing firm boundaries.",
                        "suggestedPoints":  [
                                                "Acknowledge Alex's valid history with their parents using money to manipulate decisions",
                                                "Emphasize the unparalleled academic and networking advantages this school offers our child",
                                                "Propose setting up a formal written agreement with the in-laws that tuition is a gift, not leverage for parenting input"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your mother-in-law",
                        "role":  "Speaking to your mother-in-law",
                        "objective":  "Decline the money gracefully without insulting her generosity.",
                        "suggestedPoints":  [
                                                "Express immense gratitude for such an incredibly generous offer for her grandchild",
                                                "Explain that you and Alex want to maintain full financial independence regarding your children's upbringing",
                                                "Suggest that if she wants to contribute, putting a small amount into a locked university trust fund would be wonderful"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I know your parents have a history of overstepping, but this is a life-changing opportunity.",
                                  "We want to ensure there are no blurred lines regarding our authority as parents.",
                                  "We are so touched by your generosity, but we have decided to keep them in the public system."
                              ]
    },
    {
        "id":  "t6_100",
        "title":  "Shared Fence Repair Cost vs Tripled Estimate",
        "category":  "Financial & Shared Expenses",
        "situation":  "You and your neighbor, Frank, agreed to split the cost of replacing the rotting fence between your properties based on a $2,000 estimate. However, once the contractor tore down the old fence, they found extensive root damage and the new bill is $6,000. Frank wants to proceed immediately, but your partner is furious, saying you cannot afford a $3,000 sudden expense and should halt the work.",
        "prepTime":  60,
        "speakTime":  60,
        "choiceA":  {
                        "id":  "choice_a",
                        "label":  "Option A: Talk to your neighbor Frank",
                        "role":  "Speaking to your neighbor Frank",
                        "objective":  "Explain why you cannot pay the new amount and propose a compromise.",
                        "suggestedPoints":  [
                                                "Acknowledge that half the fence is already torn down and it looks terrible",
                                                "Explain frankly that a $3,000 unexpected bill is simply not in your family's budget right now",
                                                "Propose putting up a cheaper chain-link fence for now, or ask him to cover the extra cost if he insists on the premium wood"
                                            ]
                    },
        "choiceB":  {
                        "id":  "choice_b",
                        "label":  "Option B: Talk to your partner",
                        "role":  "Speaking to your partner",
                        "objective":  "Explain why you have to proceed with the $6,000 repair despite the cost.",
                        "suggestedPoints":  [
                                                "Validate their anger at the shady contractor and the tripling of the budget",
                                                "Explain that leaving a half-torn-down fence is a safety hazard for our dog and destroys our property value",
                                                "Suggest dipping into the emergency vacation fund to cover the extra $2,000 to get it done properly"
                                            ]
                    },
        "diplomaticPhrases":  [
                                  "I am just as shocked by the new invoice, but we simply don't have the cash.",
                                  "Leaving the yard exposed is a liability we can't afford either.",
                                  "Let's get a second opinion from another contractor before we authorize any more work."
                              ]
    }
];

