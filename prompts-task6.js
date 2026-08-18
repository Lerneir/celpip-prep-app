// CELPIP Speaking Task 6: Dealing with a Difficult Situation (100 Prompts)
// Preparation Time: 60 seconds | Speaking Time: 60 seconds

const TASK6_PROMPTS = [
  {
    "id": "t6_001",
    "title": "Best Friend's Wedding vs. Urgent Software Launch",
    "category": "Workplace & Professional",
    "situation": "You promised to be the best man/maid of honor at your best friend Sarah's wedding this Saturday in Banff. However, your project manager unexpectedly scheduled a mandatory emergency client system launch this Saturday where your presence is required.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Best Friend (Sarah)",
      "role": "Speaking to your close friend Sarah",
      "objective": "Explain the emergency work conflict, express sincere apologies, and propose a special trip or celebration to make it up to her.",
      "speakingPoints": [
        "Express how deeply you care about her special day and apologize sincerely for this distressing situation.",
        "Explain the sudden mandatory client rollout that directly impacts your team and job security.",
        "Offer a concrete makeup plan (e.g. paying for an upscale dinner upon their return or visiting during their honeymoon)."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Project Manager (Mr. Henderson)",
      "role": "Speaking to your supervisor Mr. Henderson",
      "objective": "Explain your long-standing family/wedding commitment, maintain a professional tone, and offer concrete coverage solutions.",
      "speakingPoints": [
        "Politely remind him of your approved personal leave for this milestone wedding.",
        "Propose a solid mitigation plan: complete rollout scripts by Friday and brief a senior backup teammate.",
        "Offer to be on emergency phone standby throughout Saturday morning."
      ]
    },
    "diplomaticPhrases": [
      "I'm calling to discuss an unexpected situation regarding...",
      "I truly regret having to bring this up, but unfortunately...",
      "What I would like to propose as an equitable compromise is..."
    ]
  },
  {
    "id": "t6_002",
    "title": "Sudden Sickness on Client Pitch Day",
    "category": "Workplace & Professional",
    "situation": "You woke up with severe laryngitis and fever on the morning of a multimillion-dollar pitch to an important client. You are supposed to lead the presentation in 3 hours.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Call your Team Director",
      "role": "Speaking to your Director",
      "objective": "Inform them of your illness, transfer the presentation deck, and brief the backup lead.",
      "speakingPoints": [
        "Explain your medical condition and inability to speak clearly.",
        "Confirm the presentation slides, financial models, and notes are uploaded and ready.",
        "Offer to be available on chat during the meeting to answer technical questions silently."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call the Lead Client Executive",
      "role": "Speaking to the Client",
      "objective": "Politely explain the emergency illness and request rescheduling the pitch by 2 days.",
      "speakingPoints": [
        "Apologize sincerely for the last-minute disruption to their schedule.",
        "Explain that you want to deliver the complete, high-quality presentation they deserve.",
        "Offer immediate alternative time slots later in the week that fit their calendar."
      ]
    },
    "diplomaticPhrases": [
      "I am so sorry to deliver this last-minute news, but...",
      "To ensure the highest quality presentation for your team...",
      "I would greatly appreciate your flexibility in..."
    ]
  },
  {
    "id": "t6_003",
    "title": "Unreasonable Project Deadline",
    "category": "Workplace & Professional",
    "situation": "Your manager assigned you a 3-week project with a hard deadline in 4 days. Delivering on time without errors is mathematically impossible without severe quality cuts.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Manager",
      "role": "Speaking to your Manager",
      "objective": "Present a realistic breakdown of task hours, explain the risks, and negotiate prioritizing core deliverables.",
      "speakingPoints": [
        "Present an objective breakdown of the hours required for each deliverable.",
        "Explain that rushing will lead to system bugs and security vulnerabilities.",
        "Propose delivering Phase 1 on Friday and Phase 2 early next week."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Client",
      "role": "Speaking to the Client",
      "objective": "Explain the technical scope requirements and adjust expectations for the initial release.",
      "speakingPoints": [
        "Walk through the complex requirements to give them visibility into the workload.",
        "Offer an early preview version with core features by Friday.",
        "Reassure them that the full robust version will follow shortly."
      ]
    },
    "diplomaticPhrases": [
      "I want to be completely transparent about our project timeline...",
      "In order to guarantee the highest standard of quality and security...",
      "What I propose is a phased rollout where we deliver..."
    ]
  },
  {
    "id": "t6_004",
    "title": "Conflicting Vacation Requests with Senior Coworker",
    "category": "Workplace & Professional",
    "situation": "You and a senior coworker both requested vacation for Christmas week. Company policy only allows one team member off, and your manager asked you two to resolve it together.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Senior Coworker (David)",
      "role": "Speaking to your Coworker David",
      "objective": "Negotiate splitting the holiday days or offering to cover their upcoming summer holidays.",
      "speakingPoints": [
        "Acknowledge their seniority and importance of their family plans.",
        "Propose splitting the days (you take Christmas, they take New Year's).",
        "Offer to cover all their shifts during the summer peak holiday season."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Department Manager",
      "role": "Speaking to your Manager",
      "objective": "Propose working remotely with flexible hours from your holiday destination so both can travel.",
      "speakingPoints": [
        "Explain that both team members have non-refundable family travel booked.",
        "Propose working remotely for 4 hours a day to handle emergency tickets.",
        "Suggest an automated on-call rotation to keep client coverage seamless."
      ]
    },
    "diplomaticPhrases": [
      "I was hoping we could sit down and find a win-win solution regarding...",
      "I completely understand how important this holiday is to you, and...",
      "Would you be open to an arrangement where I..."
    ]
  },
  {
    "id": "t6_005",
    "title": "Overheard Client Confidentiality Breach",
    "category": "Workplace & Professional",
    "situation": "You overheard a junior colleague discussing sensitive, confidential client financial data loudly in a public coffee shop near the client's headquarters.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Junior Colleague",
      "role": "Speaking to your Colleague",
      "objective": "Pull them aside privately, explain the serious confidentiality breach, and advise them on professional protocols.",
      "speakingPoints": [
        "Approach the conversation in a constructive, coaching manner without anger.",
        "Explain the severe legal and reputational risks of discussing client data publicly.",
        "Remind them of company NDA policies and suggest best practices for public spaces."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Compliance / HR Officer",
      "role": "Speaking to Compliance / HR",
      "objective": "Report the privacy risk anonymously to ensure proper company-wide security training is reinforced.",
      "speakingPoints": [
        "Report the general security risk without malice toward the individual.",
        "Request a refresher training session on client confidentiality for the department.",
        "Ensure the client's information has not been compromised externally."
      ]
    },
    "diplomaticPhrases": [
      "I wanted to have a quick private word with you about something important...",
      "As you know, client confidentiality is strictly enforced because...",
      "I wanted to give you a friendly reminder so you don't face any disciplinary issues."
    ]
  },
  {
    "id": "t6_006",
    "title": "Declining Unpaid Weekend Overtime",
    "category": "Workplace & Professional",
    "situation": "Your supervisor expects you to work every weekend for the next month on unpaid overtime, despite your employment contract stating a standard 40-hour workweek.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Supervisor",
      "role": "Speaking to your Supervisor",
      "objective": "Firmly and politely establish work-life boundaries, and negotiate compensation or time-in-lieu.",
      "speakingPoints": [
        "Express your dedication to the team's goals and weekday productivity.",
        "Politely explain that family commitments prevent working every weekend.",
        "Propose working one specific weekend if granted banked time-in-lieu (lieu days)."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to Human Resources",
      "role": "Speaking to HR",
      "objective": "Inquire about overtime compensation policies and seek clarification on contracted hours.",
      "speakingPoints": [
        "Ask for official company policy regarding weekend overtime and compensation.",
        "Explain the current unsustainable workload affecting team well-being.",
        "Seek HR guidance on establishing equitable workload distribution."
      ]
    },
    "diplomaticPhrases": [
      "I'd like to discuss the upcoming project schedule and expectations...",
      "While I am fully committed to delivering great results for the team...",
      "To ensure sustainability and comply with our employment agreement, I'd like to propose..."
    ]
  },
  {
    "id": "t6_007",
    "title": "Missed Critical Slide in Board Meeting",
    "category": "Workplace & Professional",
    "situation": "Your team partner forgot to include crucial financial slides in the presentation deck delivered to executive board members, causing confusion during the meeting.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Team Partner",
      "role": "Speaking to your Partner",
      "objective": "Address the omission privately, understand what went wrong, and coordinate an emergency corrected addendum.",
      "speakingPoints": [
        "Maintain a calm, problem-solving tone without placing aggressive blame.",
        "Review the missing slides together to ensure numbers are 100% accurate.",
        "Agree on a joint protocol to double-check future executive submissions."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Executive Board Chair",
      "role": "Speaking to the Board Chair",
      "objective": "Send a polished follow-up memo with the missing financial data and a clear executive summary.",
      "speakingPoints": [
        "Take professional accountability on behalf of the team for the oversight.",
        "Provide the complete, formatted financial addendum with clear bullet points.",
        "Offer to schedule a brief 10-minute briefing to answer any outstanding questions."
      ]
    },
    "diplomaticPhrases": [
      "I wanted to follow up regarding the presentation this morning...",
      "To ensure the board has the complete and accurate picture, I have prepared...",
      "We have refined our review process to prevent similar oversights going forward."
    ]
  },
  {
    "id": "t6_008",
    "title": "Coworker Taking Credit for Your Work",
    "category": "Workplace & Professional",
    "situation": "In a departmental meeting, a colleague presented a complex cost-saving proposal that you spent two weeks researching and writing, claiming it entirely as their own idea.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to the Coworker",
      "role": "Speaking to your Coworker",
      "objective": "Address the situation privately, express your disappointment, and ask them to acknowledge your contribution.",
      "speakingPoints": [
        "State clearly that you noticed they presented your research without attribution.",
        "Express that teamwork requires mutual respect and honest credit sharing.",
        "Ask them to send an email update to the team acknowledging your joint contribution."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Department Manager",
      "role": "Speaking to your Manager",
      "objective": "Provide documentation of your original research and explain the collaborative breakdown.",
      "speakingPoints": [
        "Share your original dated drafts, research notes, and spreadsheets.",
        "Focus on the merits of the proposal and your ongoing dedication to the project.",
        "Request clarification on how project ownership and recognition are managed."
      ]
    },
    "diplomaticPhrases": [
      "I wanted to talk to you about the proposal presented in today's meeting...",
      "I was surprised to see my research presented without any mention of my work...",
      "Going forward, it's essential that we maintain transparency and proper attribution."
    ]
  },
  {
    "id": "t6_009",
    "title": "Job Promotion Passed Over",
    "category": "Workplace & Professional",
    "situation": "You were passed over for a promotion you were promised six months ago in favor of an external candidate with less industry experience.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Hiring Director",
      "role": "Speaking to your Director",
      "objective": "Request constructive feedback on the decision and discuss your future career pathway at the company.",
      "speakingPoints": [
        "Maintain a professional, forward-looking attitude without expressing bitterness.",
        "Ask for specific skill areas or benchmarks needed for future leadership roles.",
        "Inquire about timeline and opportunities for advancement in the coming year."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Career Mentor",
      "role": "Speaking to your Mentor",
      "objective": "Evaluate your career options, resume positioning, and potential external opportunities.",
      "speakingPoints": [
        "Share the recent developments and your career aspirations objectively.",
        "Seek advice on whether to renegotiate internal responsibilities or explore outside offers.",
        "Review strategies to position your achievements effectively."
      ]
    },
    "diplomaticPhrases": [
      "I appreciate the time to meet and discuss the recent team restructuring...",
      "I am keen to understand what specific competencies I should develop further...",
      "I remain committed to my professional growth and would like to map out..."
    ]
  },
  {
    "id": "t6_010",
    "title": "Unreasonable Micromanagement from New Supervisor",
    "category": "Workplace & Professional",
    "situation": "Your new supervisor demands hourly progress logs and requires approving every single email you send to clients, which is slowing down client responsiveness.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your New Supervisor",
      "role": "Speaking to your Supervisor",
      "objective": "Demonstrate your track record of reliability and propose daily summary checkpoints instead of hourly logs.",
      "speakingPoints": [
        "Acknowledge their goal of ensuring high team standards and consistency.",
        "Explain how waiting for email approvals is causing client communication delays.",
        "Propose a morning alignment meeting and end-of-day summary log as a streamlined compromise."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Department Head",
      "role": "Speaking to the Department Head",
      "objective": "Highlight workflow bottlenecks and seek guidance on standard operating procedures for client communication.",
      "speakingPoints": [
        "Focus on client satisfaction metrics and response time delays.",
        "Request clarification on standard department autonomy guidelines.",
        "Suggest establishing standardized email templates to maintain speed and quality."
      ]
    },
    "diplomaticPhrases": [
      "I wanted to check in regarding our current communication workflows...",
      "To help our team maintain rapid response times for clients, I'd like to suggest...",
      "I believe establishing a daily checkpoint would give you full visibility while allowing..."
    ]
  },
  {
    "id": "t6_011",
    "title": "Broken Heating in Mid-Winter (-25\u00b0C)",
    "category": "Housing & Landlord/Tenant",
    "situation": "It is January in Winnipeg and your apartment heating unit has failed for 48 hours. The landlord has not returned your calls, and indoor temperatures are dropping dangerously.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Firmly state tenant emergency rights, cite municipal bylaws, and demand emergency HVAC dispatch within 4 hours.",
      "speakingPoints": [
        "State the urgent health hazard with indoor temperatures below legal municipal minimums.",
        "Remind them of the landlord's statutory emergency repair obligations.",
        "Inform them that you will hire an emergency HVAC technician and deduct the cost from rent if not resolved."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call the Residential Tenancies Branch",
      "role": "Speaking to the Tenancies Branch Officer",
      "objective": "File an urgent emergency hearing and request municipal inspector intervention.",
      "speakingPoints": [
        "Report the critical heating failure and unresponsive landlord.",
        "Provide photographic and temperature log documentation.",
        "Request an expedited emergency repair order and rent abatement."
      ]
    },
    "diplomaticPhrases": [
      "I am calling regarding an urgent life-safety emergency in unit 402...",
      "Under municipal housing standards, landlords are legally required to maintain...",
      "If an emergency technician is not dispatched by noon today, I will have no choice but to..."
    ]
  },
  {
    "id": "t6_012",
    "title": "Unjustified Security Deposit Withholding",
    "category": "Housing & Landlord/Tenant",
    "situation": "Your former landlord refuses to return your $1,500 security deposit, falsely claiming that normal wall wear-and-tear requires full repainting.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Former Landlord",
      "role": "Speaking to your Former Landlord",
      "objective": "Present move-in and move-out condition inspection reports with photos to negotiate a full refund.",
      "speakingPoints": [
        "Reference the signed move-in condition inspection report showing pre-existing marks.",
        "Explain that provincial tenancy legislation classifies minor wall scuffs as reasonable wear-and-tear.",
        "Request the immediate release of the deposit to avoid formal arbitration fees."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Tenancy Dispute Tribunal",
      "role": "Speaking to the Dispute Tribunal",
      "objective": "Submit an official dispute application to claim double deposit return under statutory rules.",
      "speakingPoints": [
        "Provide copies of the lease, inspection reports, and written demand letters.",
        "Explain that the landlord failed to apply for dispute resolution within statutory deadlines.",
        "Request the statutory penalty order for wrongfully withheld deposits."
      ]
    },
    "diplomaticPhrases": [
      "I am contacting you regarding the return of my security deposit for unit 204...",
      "According to the Residential Tenancy Act, standard paint wear-and-tear cannot be deducted from...",
      "I would prefer to resolve this amicably today, rather than proceeding through formal arbitration."
    ]
  },
  {
    "id": "t6_013",
    "title": "Upstairs Neighbor's Water Leak Damaging Ceiling",
    "category": "Housing & Landlord/Tenant",
    "situation": "Water is actively dripping from your bathroom ceiling due to an overflowing bathtub in the apartment directly above yours.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Upstairs Neighbor",
      "role": "Speaking to the Upstairs Neighbor",
      "objective": "Alert them urgently to shut off the water and inspect their bathroom floor.",
      "speakingPoints": [
        "Inform them calmly but urgently that water is leaking through your ceiling.",
        "Help them locate the main water shutoff valve if necessary.",
        "Coordinate taking photos for insurance and building management reporting."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call the Emergency Building Superintendent",
      "role": "Speaking to the Superintendent",
      "objective": "Request immediate main riser water shutoff and emergency restoration fans.",
      "speakingPoints": [
        "Report the active water leak between floors requiring urgent intervention.",
        "Request maintenance staff enter with master keys if the resident is away.",
        "Request commercial dehumidifiers to prevent drywall mold damage."
      ]
    },
    "diplomaticPhrases": [
      "I'm your neighbor from downstairs in unit 301, and there is water dripping through...",
      "Could you please check your bathroom immediately and shut off the taps?",
      "We need to report this to building management right away so restoration can begin."
    ]
  },
  {
    "id": "t6_014",
    "title": "Illegal Rent Increase Notice",
    "category": "Housing & Landlord/Tenant",
    "situation": "Your landlord handed you a notice increasing your rent by 15%, which is three times higher than the annual provincial rent increase guideline.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Politely inform them of the provincial rent cap and offer the legal maximum increase.",
      "speakingPoints": [
        "Reference the current provincial rent increase guideline percentage.",
        "Provide a copy of the official government guideline document.",
        "Agree to pay the legal guideline increase starting on the proper notice date."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Consult the Tenant Legal Aid Clinic",
      "role": "Speaking to Tenant Legal Aid",
      "objective": "Verify your building's rent control status and draft an official legal response letter.",
      "speakingPoints": [
        "Confirm whether the building was built prior to rent control exemption dates.",
        "Obtain guidance on filing a dispute if the landlord issues an eviction notice.",
        "Draft a formal notice of dispute to document your rights."
      ]
    },
    "diplomaticPhrases": [
      "I received your notice regarding the rent adjustment for next year...",
      "According to the provincial Residential Tenancy guidelines, the maximum allowable increase is...",
      "I am happy to sign an updated lease reflecting the legal allowable percentage."
    ]
  },
  {
    "id": "t6_015",
    "title": "Landlord Entering Without Notice",
    "category": "Housing & Landlord/Tenant",
    "situation": "Your landlord entered your rented apartment with a master key while you were sleeping, without providing the legally mandated 24-hour written notice.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Firmly establish privacy boundaries and remind them of the mandatory 24-hour written notice rule.",
      "speakingPoints": [
        "Express your shock and discomfort at the unexpected entry.",
        "State clearly that provincial law requires 24 hours written notice specifying date, time, and reason.",
        "Request that all future entry requests be sent via email with required advance notice."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: File a Complaint with the Rental Housing Board",
      "role": "Speaking to the Housing Board",
      "objective": "Document the unlawful entry and seek an order restricting landlord access.",
      "speakingPoints": [
        "Provide date, time, and witness/camera logs of the unauthorized entry.",
        "Explain the loss of peaceful enjoyment and personal security.",
        "Request an official warning or order requiring landlord compliance."
      ]
    },
    "diplomaticPhrases": [
      "I need to speak with you regarding your visit to my apartment this morning...",
      "Entering without 24 hours prior written notice is a direct violation of tenant privacy rights...",
      "I must insist that all future maintenance visits follow the legal written notice procedure."
    ]
  },
  {
    "id": "t6_016",
    "title": "Persistent Building Elevator Breakdown",
    "category": "Housing & Landlord/Tenant",
    "situation": "The only elevator in your 8-story building has been out of service for 3 weeks, forcing elderly residents and parents with strollers to walk up stairs.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Property Manager",
      "role": "Speaking to Property Manager",
      "objective": "Demand expedited elevator technician dispatch and rent reduction for loss of essential services.",
      "speakingPoints": [
        "Highlight the severe accessibility barrier for elderly residents and parents.",
        "Ask for specific status updates and parts delivery timelines from the repair company.",
        "Request temporary rent abatements or stair-assist volunteers during the outage."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Organize a Tenant Association Petition",
      "role": "Speaking to Fellow Tenants",
      "objective": "Gather resident signatures on a collective demand letter and escalate to municipal property standards.",
      "speakingPoints": [
        "Draft a collective letter outlining the hardship caused by the 3-week outage.",
        "Collect signatures from residents across all floors.",
        "Submit the petition simultaneously to the landlord, municipal councillor, and media."
      ]
    },
    "diplomaticPhrases": [
      "I am speaking on behalf of residents regarding the ongoing elevator outage...",
      "It has now been three weeks without accessible building access, which is unacceptable for...",
      "We require a firm completion date and temporary compensation for this disruption."
    ]
  },
  {
    "id": "t6_017",
    "title": "Unresolved Bedbug / Pest Infestation",
    "category": "Housing & Landlord/Tenant",
    "situation": "You discovered signs of pests in your apartment building. The landlord told you to buy supermarket spray rather than hiring professional exterminators.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Explain that professional whole-building thermal treatment is legally required to eliminate pests.",
      "speakingPoints": [
        "Explain that DIY sprays cause pests to scatter into neighboring walls rather than dying.",
        "Cite provincial health regulations requiring landlords to hire licensed pest technicians.",
        "Offer full cooperation with room preparation and furniture vacuuming for treatment day."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Municipal Public Health",
      "role": "Speaking to Public Health Inspector",
      "objective": "Request an official health inspection and mandatory remediation order against the building owner.",
      "speakingPoints": [
        "Report the active pest infestation and landlord's refusal to treat professionally.",
        "Provide photographic evidence and inspection reports.",
        "Request an official inspection order forcing the landlord to treat adjacent units."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to follow up on the pest issue reported in unit 108...",
      "Under public health bylaws, professional pest control is required across all connected units...",
      "DIY spray will not solve this problem; we need a certified exterminator scheduled immediately."
    ]
  },
  {
    "id": "t6_018",
    "title": "Unauthorized Sublet by Roommate",
    "category": "Housing & Landlord/Tenant",
    "situation": "Your lease roommate sublet their bedroom on Airbnb to random tourists without your consent or the landlord's permission, violating the lease agreement.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Roommate",
      "role": "Speaking to your Roommate",
      "objective": "Explain the serious safety risks, lease violation terms, and demand the immediate removal of the listing.",
      "speakingPoints": [
        "Explain the personal security risks of having strangers entering your shared home.",
        "Point out that unauthorized commercial subletting can result in immediate eviction for both of you.",
        "Demand they cancel upcoming bookings immediately and adhere to the shared lease."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Clarify your non-involvement in the unauthorized listing and negotiate replacing the roommate.",
      "speakingPoints": [
        "Inform the landlord proactively before they discover the listing independently.",
        "Clarify that you do not endorse the short-term rentals and want to protect your lease.",
        "Request permission to assign the roommate's portion of the lease to a vetted long-term tenant."
      ]
    },
    "diplomaticPhrases": [
      "I need to talk to you about the Airbnb listing you posted for our apartment...",
      "Having strangers in our shared living space violates both our safety and our lease agreement...",
      "You need to cancel these bookings today, otherwise we both risk getting evicted."
    ]
  },
  {
    "id": "t6_019",
    "title": "Noisy Construction at 6:00 AM in Building",
    "category": "Housing & Landlord/Tenant",
    "situation": "The building contractor begins jackhammering and loud drilling in the hallway directly outside your door at 6:00 AM on weekdays, violating city noise bylaws.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Construction Site Foreman",
      "role": "Speaking to the Site Foreman",
      "objective": "Politely explain the city noise bylaw restrictions and request starting loud drilling at 8:00 AM.",
      "speakingPoints": [
        "Inform them that city bylaws prohibit heavy construction noise before 7:00 AM / 8:00 AM.",
        "Explain that residents work late shifts and need sleep.",
        "Request that prep work be done quietly until the legal construction hours begin."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call the City Bylaw Enforcement (311)",
      "role": "Speaking to City Bylaw Officer",
      "objective": "Lodge a formal noise infraction complaint and request an on-site inspector visit.",
      "speakingPoints": [
        "Provide dates, times, and audio recordings of early morning jackhammering.",
        "Give the building address and contractor company name.",
        "Request an officer dispatch to issue an official warning or bylaw fine."
      ]
    },
    "diplomaticPhrases": [
      "Good morning, I wanted to speak with you regarding the work schedule here...",
      "Under city bylaws, loud construction and jackhammering cannot commence before 7:00 AM...",
      "We would appreciate if you could perform quiet setup work until the legal start time."
    ]
  },
  {
    "id": "t6_020",
    "title": "Landlord Refusing Required Mold Remediation",
    "category": "Housing & Landlord/Tenant",
    "situation": "Black mold has appeared behind your bedroom drywall following a roof leak. The landlord painted over it without fixing the roof or removing the moldy drywall.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Landlord",
      "role": "Speaking to your Landlord",
      "objective": "Explain the severe respiratory health risks and demand certified environmental mold remediation.",
      "speakingPoints": [
        "Explain that simply painting over mold leaves toxic spores growing inside the wall.",
        "Provide a doctor's note regarding respiratory symptoms caused by the mold.",
        "Demand that a professional mold remediation team cut out the damaged drywall and fix the roof."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Request an Environmental Health Inspection",
      "role": "Speaking to City Health Inspector",
      "objective": "Request an air quality inspection and formal health order against the property.",
      "speakingPoints": [
        "Report the ongoing water leak and concealed black mold in living areas.",
        "Provide air sample test results and photos of the affected drywall.",
        "Request a mandatory repair order requiring professional remediation."
      ]
    },
    "diplomaticPhrases": [
      "I am calling regarding the mold in my bedroom that was recently painted over...",
      "Painting over wet drywall does not eliminate toxic mold spores, which are affecting my health...",
      "We need a certified mold specialist to properly remediate the wall and repair the exterior leak."
    ]
  },
  {
    "id": "t6_021",
    "title": "Persistent Late-Night Dog Barking",
    "category": "Community & Neighborhood",
    "situation": "Your neighbor's dog barks continuously from 11 PM to 2 AM in the backyard, disrupting your child's sleep.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Neighbor",
      "role": "Speaking to your Neighbor",
      "objective": "Politely inform them of the late-night barking, explain the impact on your child, and suggest training collars or bringing the dog indoors.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to your Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Animal Control / City Bylaw",
      "role": "Speaking to City Animal Control",
      "objective": "File a formal noise complaint and request an officer inspection.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_022",
    "title": "Neighbor's Tree Overhanging & Damaging Roof",
    "category": "Community & Neighborhood",
    "situation": "A large dead branch from your neighbor's tree is resting on your roof tiles, threatening to collapse during the next windstorm.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Neighbor",
      "role": "Speaking to your Neighbor",
      "objective": "Show them the hazardous branch and propose splitting an arborist pruning cost.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to your Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call your Home Insurance Broker",
      "role": "Speaking to Insurance Broker",
      "objective": "Document the hazard and check liability coverage if the branch damages your property.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_023",
    "title": "Neighbor Parking in Your Assigned Parking Spot",
    "category": "Community & Neighborhood",
    "situation": "Your designated underground parking space is repeatedly blocked by a neighbor's second car.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Leave a Friendly Note / Speak Directly",
      "role": "Speaking to your Neighbor",
      "objective": "Explain that you pay monthly for the spot and ask them to park in visitor parking.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to your Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Building Security / Towing",
      "role": "Speaking to Building Security",
      "objective": "Request that security issue a parking violation ticket or tow the unauthorized vehicle.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_024",
    "title": "Excessive Smoke from Balcony Barbecue",
    "category": "Community & Neighborhood",
    "situation": "Your downstairs neighbor uses a heavy charcoal smoker on their small balcony daily, sending thick smoke into your open living room windows.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Downstairs Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Politely explain the smoke entering your home and suggest adjusting barbecue times or using propane.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report to Strata / Condo Board",
      "role": "Speaking to Condo Board",
      "objective": "Report the violation of the building's fire safety bylaws regarding charcoal grills.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_025",
    "title": "Neighbor's Loud Weekend Renovation Noise",
    "category": "Community & Neighborhood",
    "situation": "Your next-door neighbor is doing heavy ceramic tile demolition at 11:00 PM on Sunday night.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Knock on Neighbor's Door",
      "role": "Speaking to Neighbor",
      "objective": "Ask them politely to stop heavy hammering for the night and resume during daytime hours.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call Building Security / Non-Emergency Police",
      "role": "Speaking to Security",
      "objective": "Request a security officer enforce quiet hours immediately.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_026",
    "title": "Unshoveled Icy Sidewalk in Winter",
    "category": "Community & Neighborhood",
    "situation": "Your neighbor has not shoveled thick ice from their sidewalk for 5 days, creating a severe slip hazard for elderly pedestrians.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Offer to Help Shovel & Speak to Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Politely remind them of the sidewalk condition and offer to help spread ice salt together.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report to City Sidewalk Bylaw Enforcement",
      "role": "Speaking to City Bylaw",
      "objective": "Report the hazardous unshoveled sidewalk for a municipal clearing crew notice.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_027",
    "title": "Neighbor's Uncontrolled Cats in Flower Garden",
    "category": "Community & Neighborhood",
    "situation": "Your neighbor lets multiple outdoor cats roam freely, digging up your vegetable garden beds daily.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Show them the damaged garden beds and suggest cat deterrent mesh or indoor supervision.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Municipal Animal Services",
      "role": "Speaking to Animal Services",
      "objective": "Inquire about city bylaw restrictions on free-roaming domestic pets.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_028",
    "title": "Loud Outdoor Gathering Exceeding Noise Curfew",
    "category": "Community & Neighborhood",
    "situation": "A backyard party next door has loud amplifiers and screaming guests at 2:30 AM on a Tuesday work night.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Walk Over and Speak to the Party Host",
      "role": "Speaking to the Host",
      "objective": "Politely ask the host to lower the music and move guests indoors so neighbors can sleep.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to the Host.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call City Non-Emergency Police",
      "role": "Speaking to Police Dispatch",
      "objective": "Report a noise bylaw violation for an amplified late-night outdoor party.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_029",
    "title": "Neighbor's Overflowing Trash Attracting Raccoons",
    "category": "Community & Neighborhood",
    "situation": "Your neighbor leaves loose garbage bags beside their bins days before pickup, attracting raccoons and spreading litter.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Suggest using secure lockable bins to prevent wild animals from tearing bags open.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report to Municipal Waste Management",
      "role": "Speaking to Waste Management",
      "objective": "Request an inspector inspect the unsanitary garbage hazard on the street.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_030",
    "title": "Neighbor's Bright Security Floodlight Shining in Bedroom",
    "category": "Community & Neighborhood",
    "situation": "A new ultra-bright LED floodlight installed by your neighbor shines directly into your master bedroom window all night.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Show them the angle of the light and ask if they can angle the fixture downward or adjust motion sensors.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Inquire with HOA / Community Board",
      "role": "Speaking to Community Board",
      "objective": "Inquire about neighborhood lighting nuisance guidelines and shielding standards.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_031",
    "title": "Free-Riding Team Member Before Client Presentation",
    "category": "Colleague & Team Dynamics",
    "situation": "A colleague in your 3-person team has contributed zero slides and missed two group meetings 3 days before a major client pitch.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Colleague",
      "role": "Speaking to your Colleague",
      "objective": "Hold a private conversation, set clear deadlines for their section, and offer support.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to your Colleague.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Escalate to Project Manager",
      "role": "Speaking to Project Manager",
      "objective": "Explain the project risk, reallocate the missing slides, and adjust the presentation structure.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_032",
    "title": "Coworker Arriving Late and Leaving Early on Shared Shift",
    "category": "Colleague & Team Dynamics",
    "situation": "Your shift partner consistently arrives 30 minutes late and leaves early, forcing you to handle all customer calls alone.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Coworker",
      "role": "Speaking to Coworker",
      "objective": "Explain how their attendance increases your workload and ask them to arrive punctually.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Coworker.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to Shift Supervisor",
      "role": "Speaking to Supervisor",
      "objective": "Request an official review of shift logs and scheduling coverage.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_033",
    "title": "Disagreement on Technical Architecture",
    "category": "Colleague & Team Dynamics",
    "situation": "You and a lead engineer strongly disagree on whether to use SQL or NoSQL database architecture for a high-traffic system.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Organize a Collaborative Technical Review",
      "role": "Speaking to Lead Engineer",
      "objective": "Compare benchmark performance data objectively and propose a hybrid prototype.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Lead Engineer.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Present Options to Chief Technology Officer",
      "role": "Speaking to CTO",
      "objective": "Present the pros, cons, and budget trade-offs of both options for executive decision.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_034",
    "title": "Coworker Spreading Workplace Gossip",
    "category": "Colleague & Team Dynamics",
    "situation": "A colleague is spreading false rumors about an upcoming layoff round, causing panic and low morale across the floor.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Colleague Privately",
      "role": "Speaking to Colleague",
      "objective": "Advise them to stop spreading unverified rumors that hurt team morale.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Colleague.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to Team Manager / HR",
      "role": "Speaking to HR",
      "objective": "Request official company communication to clarify organizational changes and calm the team.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_035",
    "title": "Language Barrier Causing Safety Misunderstandings",
    "category": "Colleague & Team Dynamics",
    "situation": "A new warehouse team member is struggling with English safety terminology, leading to near-miss equipment collisions.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Team Member with Empathy",
      "role": "Speaking to Team Member",
      "objective": "Offer visual cheat sheets and partner with them to explain key safety callouts clearly.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Team Member.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Request Safety Training in Multiple Languages",
      "role": "Speaking to Safety Officer",
      "objective": "Recommend multilingual visual safety signage and paired bilingual onboarding.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_036",
    "title": "Coworker Constantly Interrupting in Client Meetings",
    "category": "Colleague & Team Dynamics",
    "situation": "A team member repeatedly talks over you during client Zoom calls, preventing you from answering technical questions.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Privately with the Coworker",
      "role": "Speaking to Coworker",
      "objective": "Establish clear meeting roles and agree on an agenda hand-off protocol beforehand.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Coworker.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Discuss Meeting Etiquette with Team Lead",
      "role": "Speaking to Team Lead",
      "objective": "Suggest assigning distinct presentation segments to each team member.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_037",
    "title": "Team Member Refusing to Adopt New Software Tool",
    "category": "Colleague & Team Dynamics",
    "situation": "A senior colleague refuses to use the company's new project management tool, sending chaotic email requests instead.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Offer 1-on-1 Software Tutoring",
      "role": "Speaking to Senior Colleague",
      "objective": "Walk them through the software step-by-step to show how it saves time.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Senior Colleague.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Request Management Enforce Unified Tooling",
      "role": "Speaking to Project Director",
      "objective": "Explain how fragmented communication is causing missed deadlines and data silos.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_038",
    "title": "Colleague Sharing Inappropriate Jokes in Slack",
    "category": "Colleague & Team Dynamics",
    "situation": "A coworker posted culturally insensitive jokes in the general company Slack channel, making colleagues uncomfortable.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Send a Private Direct Message to Coworker",
      "role": "Speaking to Coworker",
      "objective": "Politely explain why the joke is offensive and advise them to delete it.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Coworker.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report the Channel Post to HR",
      "role": "Speaking to HR",
      "objective": "Submit the screenshot to ensure workplace diversity and respect guidelines are upheld.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_039",
    "title": "Unbalanced Shift Distribution for Weekend Shifts",
    "category": "Colleague & Team Dynamics",
    "situation": "A scheduler assigned you four consecutive weekend shifts while other team members have every weekend off.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Roster Scheduler",
      "role": "Speaking to Scheduler",
      "objective": "Show the historical shift log and request an equitable rotation among team members.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Scheduler.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Propose Shift Trades with Coworkers",
      "role": "Speaking to Coworkers",
      "objective": "Ask colleagues if anyone wants to trade weekend shifts for desired weekday slots.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_040",
    "title": "Coworker Overpromising to Clients Without Consulting",
    "category": "Colleague & Team Dynamics",
    "situation": "A sales colleague promised a client custom software features within 1 week without checking with the engineering team.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Sales Colleague",
      "role": "Speaking to Sales Colleague",
      "objective": "Explain technical feasibility constraints and establish a mandatory pre-sales check protocol.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Sales Colleague.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak with the Product VP",
      "role": "Speaking to Product VP",
      "objective": "Adjust the client scope agreement to deliver standard features first with custom add-ons later.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_041",
    "title": "Auto Mechanic Overcharging for Unapproved Repairs",
    "category": "Consumer & Retail Disputes",
    "situation": "A repair shop performed $1,200 of unauthorized repairs on your car when you only agreed to a $150 oil change.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Shop Manager",
      "role": "Speaking to Shop Manager",
      "objective": "Demand an explanation, refuse payment for unapproved work, and negotiate paying only the authorized estimate.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Shop Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: File a Complaint with Consumer Protection",
      "role": "Speaking to Consumer Protection Agency",
      "objective": "File a formal complaint for unauthorized automotive repairs under consumer laws.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_042",
    "title": "Dry Cleaner Damaging Expensive Wedding Suit",
    "category": "Consumer & Retail Disputes",
    "situation": "A dry cleaner shrunk and stained a $900 designer suit two days before you need it for a family wedding.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Dry Cleaner Owner",
      "role": "Speaking to Cleaner Owner",
      "objective": "Show the garment damage, present original receipt, and demand full replacement cost compensation.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Cleaner Owner.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Dispute the Charge with Credit Card Company",
      "role": "Speaking to Credit Card Issuer",
      "objective": "Initiate a merchant dispute and chargeback for damaged property.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_043",
    "title": "Restaurant Serving Food Containing Severe Allergens",
    "category": "Consumer & Retail Disputes",
    "situation": "A restaurant served a dish containing peanuts to a guest who explicitly specified a life-threatening nut allergy.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Urgently to the Head Chef / Manager",
      "role": "Speaking to Restaurant Manager",
      "objective": "Express the critical health violation, demand the bill be waived, and ensure food safety protocols.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Restaurant Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report the Health Violation to Public Health",
      "role": "Speaking to Public Health Inspector",
      "objective": "Submit an official restaurant health complaint for cross-contamination safety failures.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_044",
    "title": "Airline Losing Luggage with Vital Prescription Medicine",
    "category": "Consumer & Retail Disputes",
    "situation": "An airline lost your checked bag containing vital daily heart medication on a trip to Calgary.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Urgently with Airline Baggage Desk",
      "role": "Speaking to Airline Agent",
      "objective": "Insist on priority courier tracking and immediate emergency out-of-pocket expense compensation.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Airline Agent.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Visit a Local Walk-In Clinic for Emergency Prescription",
      "role": "Speaking to Walk-In Doctor",
      "objective": "Explain the lost baggage and obtain an emergency interim prescription.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_045",
    "title": "Contractor Abandoning Half-Finished Bathroom Renovation",
    "category": "Consumer & Retail Disputes",
    "situation": "A home renovation contractor took a $5,000 deposit, demolished your bathroom, and stopped showing up for 3 weeks.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Call the Contractor for Firm Deadline or Refund",
      "role": "Speaking to Contractor",
      "objective": "Demand they resume work within 48 hours or return the remaining deposit immediately.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Contractor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Consult a Small Claims Court Lawyer",
      "role": "Speaking to Legal Counsel",
      "objective": "Send a formal legal demand letter and initiate small claims court proceedings.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_046",
    "title": "Appliance Delivery Crew Damaging Hardwood Floor",
    "category": "Consumer & Retail Disputes",
    "situation": "Delivery workers dragged a heavy refrigerator across your new hardwood floor, creating deep scratches.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Delivery Supervisor",
      "role": "Speaking to Delivery Supervisor",
      "objective": "Document the scratches with photos on the delivery sign-off slip and request a repair claim form.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Delivery Supervisor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact the Appliance Store Customer Care",
      "role": "Speaking to Store Manager",
      "objective": "Demand the store pay for a certified hardwood floor restoration specialist.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_047",
    "title": "Gym Refusing to Cancel Monthly Membership Contract",
    "category": "Consumer & Retail Disputes",
    "situation": "A fitness gym continues charging your credit card $80/month despite you submitting cancellation forms 2 months ago.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Gym General Manager",
      "role": "Speaking to Gym Manager",
      "objective": "Present your dated cancellation proof and demand an immediate refund and written confirmation.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Gym Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Block Recurring Charges with Your Bank",
      "role": "Speaking to Bank Representative",
      "objective": "Request a stop-payment order and file an unauthorized recurring billing dispute.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_048",
    "title": "Hotel Room Infested with Mold and Smelling of Smoke",
    "category": "Consumer & Retail Disputes",
    "situation": "Your prepaid non-refundable hotel room has black mold in the shower and smells intensely of cigarette smoke.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Front Desk Manager",
      "role": "Speaking to Front Desk Manager",
      "objective": "Politely but firmly request an immediate room upgrade to a clean room or full refund.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Front Desk Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Booking App Customer Support",
      "role": "Speaking to Booking Platform",
      "objective": "Submit photos through the booking app to demand an immediate relocation to another hotel.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_049",
    "title": "E-Commerce Package Marked Delivered but Never Arrived",
    "category": "Consumer & Retail Disputes",
    "situation": "An online retailer marked an expensive $400 electronics package as delivered, but security cameras show no courier arrived.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Contact the Retailer Customer Support",
      "role": "Speaking to Retailer Agent",
      "objective": "Provide security footage logs and request an immediate replacement dispatch or refund.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Retailer Agent.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: File a Missing Package Investigation with Courier",
      "role": "Speaking to Courier Dispatch",
      "objective": "Request the courier driver provide GPS delivery coordinates and signature proof.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_050",
    "title": "Rental Car Company Charging for Pre-Existing Dents",
    "category": "Consumer & Retail Disputes",
    "situation": "A rental car company billed you $600 for a dent that was already marked on your move-out inspection sheet.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Rental Branch Manager",
      "role": "Speaking to Branch Manager",
      "objective": "Show your dated initial vehicle walkaround photos and the signed pre-rental checklist.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Branch Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Escalate to Corporate Customer Relations",
      "role": "Speaking to Corporate Relations",
      "objective": "Submit the rental contract documentation to reverse the unauthorized damage charge.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_051",
    "title": "Group Project Partner Plagiarizing Content",
    "category": "Academic & Student Life",
    "situation": "Your university group member copied an entire research section from Wikipedia for an assignment worth 40% of your grade.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to the Student",
      "role": "Speaking to Group Member",
      "objective": "Demand they rewrite the section with authentic sources or remove their name from the submission.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Group Member.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Inform the Course Professor Privately",
      "role": "Speaking to Professor",
      "objective": "Inform the professor proactively with version history to protect yourself from academic penalties.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_052",
    "title": "Final Exam Clashing with Sibling's Graduation",
    "category": "Academic & Student Life",
    "situation": "Your university final exam is scheduled at the exact same hour as your sister's high school graduation ceremony.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Academic Dean / Registrar",
      "role": "Speaking to Academic Registrar",
      "objective": "Apply for an exam conflict accommodation to write during the alternate exam sitting.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Academic Registrar.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Sister and Family",
      "role": "Speaking to your Sister",
      "objective": "Explain the mandatory university exam policy, apologize sincerely, and organize a private celebration.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_053",
    "title": "Professor Grading Error Before Scholarship Deadline",
    "category": "Academic & Student Life",
    "situation": "A professor recorded a 65% instead of an 85% on your final paper, dropping your GPA below the scholarship requirement.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Visit the Professor During Office Hours",
      "role": "Speaking to Professor",
      "objective": "Bring your marked rubric and paper to politely show the mathematical calculation error.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Professor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact the Department Head / Scholarship Office",
      "role": "Speaking to Department Head",
      "objective": "Request an expedited grade audit and temporary extension from the scholarship committee.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_054",
    "title": "Lab Partner Breaking Expensive Research Equipment",
    "category": "Academic & Student Life",
    "situation": "Your lab partner dropped a $3,000 spectrometer sensor and wants to hide the damage from the lab instructor.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Lab Partner",
      "role": "Speaking to Lab Partner",
      "objective": "Insist that honesty is essential and offer to report the accident together to the instructor.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Lab Partner.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Report the Broken Equipment to Lab Instructor",
      "role": "Speaking to Lab Instructor",
      "objective": "Explain what happened transparently and inquire about departmental repair insurance.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_055",
    "title": "Noisy Roommates in Dormitory During Midterm Week",
    "category": "Academic & Student Life",
    "situation": "Your residence roommates are hosting loud parties late at night while you are studying for medical school midterms.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Roommates",
      "role": "Speaking to Roommates",
      "objective": "Establish quiet study hours during exam week and propose studying in the library.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Roommates.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Residence Advisor (RA)",
      "role": "Speaking to Residence Advisor",
      "objective": "Request the RA enforce campus residence quiet hour policies.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_056",
    "title": "Student Visa Extension Processing Delay",
    "category": "Academic & Student Life",
    "situation": "Your study permit extension is delayed by immigration, and the university registrar threatened to de-register your classes.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the International Student Advisor",
      "role": "Speaking to International Advisor",
      "objective": "Obtain official proof of maintained status and ask them to liaise with the registrar.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to International Advisor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Immigration (IRCC) Client Support",
      "role": "Speaking to Immigration Officer",
      "objective": "Request an urgent status update and webform confirmation letter.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_057",
    "title": "Overloaded Academic Course Schedule",
    "category": "Academic & Student Life",
    "situation": "You enrolled in 6 intensive engineering courses and feel overwhelmed, risking academic probation.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to an Academic Counselor",
      "role": "Speaking to Academic Counselor",
      "objective": "Evaluate dropping 1 course before the financial drop deadline to balance your workload.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Academic Counselor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Course Professors",
      "role": "Speaking to Professors",
      "objective": "Request assignment extensions and attend weekly office hours for academic tutoring.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_058",
    "title": "Group Member Missing Assignment Deadline Submission",
    "category": "Academic & Student Life",
    "situation": "The group member responsible for uploading the final report fell asleep and missed the online portal deadline by 20 minutes.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Email the Professor Immediately with Full File",
      "role": "Speaking to Professor",
      "objective": "Attach the completed file timestamped before the deadline and explain the submission glitch.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Professor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Group Member",
      "role": "Speaking to Group Member",
      "objective": "Establish redundant backup submission protocols for future assignments.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_059",
    "title": "Student Housing Landlord Cutting Off Wi-Fi Before Exams",
    "category": "Academic & Student Life",
    "situation": "Your off-campus student landlord turned off internet service during exam week due to an unpaid bill dispute with the ISP.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Urgently with the Landlord",
      "role": "Speaking to Landlord",
      "objective": "Offer to pay the internet bill directly and deduct from rent to restore service today.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Landlord.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Relocate Study Sessions to University Library",
      "role": "Speaking to Roommates",
      "objective": "Organize group transport to the 24-hour campus library to study with reliable Wi-Fi.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_060",
    "title": "Disagreement on Research Author Attribution",
    "category": "Academic & Student Life",
    "situation": "A lab supervisor submitted a paper removing your name from the authors list despite your contributing 50% of the lab data.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to the Lab Supervisor",
      "role": "Speaking to Supervisor",
      "objective": "Present your lab notebooks and data logs to request proper co-authorship credit.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Supervisor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the University Research Ethics Board",
      "role": "Speaking to Ethics Board",
      "objective": "Request an academic mediation on research authorship integrity.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_061",
    "title": "Contagious Flu on Sibling Babysitting Night",
    "category": "Family & Caregiving",
    "situation": "You promised to babysit your sister's children so she could attend a life-changing job interview, but you woke up with high fever and flu.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Call your Sister Immediately",
      "role": "Speaking to Sister",
      "objective": "Apologize sincerely, explain the contagious health risk, and help arrange backup care.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Sister.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Book and Pay for a Licensed Emergency Nanny",
      "role": "Speaking to Emergency Nanny Agency",
      "objective": "Book and pay for an emergency certified caregiver to assist at her home.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_062",
    "title": "Elderly Parent Needing Urgent Doctor Appointment",
    "category": "Family & Caregiving",
    "situation": "Your elderly father needs an urgent medical specialist visit during a mandatory quarterly team strategy session at work.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Team Manager",
      "role": "Speaking to Manager",
      "objective": "Explain the medical family emergency, delegate your presentation, and offer to make up hours.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Arrange a Certified Senior Medical Escort",
      "role": "Speaking to Senior Transport Service",
      "objective": "Book a professional medical transport companion to accompany your father safely.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_063",
    "title": "Disagreement on Elderly Parent Care Budget",
    "category": "Family & Caregiving",
    "situation": "You and your sibling disagree on whether to hire an in-home caregiver or move your mother to an assisted living home.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Have a Structured Family Meeting with Sibling",
      "role": "Speaking to Sibling",
      "objective": "Review monthly care costs, mother's preferences, and safety requirements together.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Sibling.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Consult a Professional Geriatric Care Manager",
      "role": "Speaking to Care Manager",
      "objective": "Obtain an objective professional assessment of care needs and living options.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_064",
    "title": "Child Suspended from School for Minor Incident",
    "category": "Family & Caregiving",
    "situation": "Your child was suspended for 1 day for a playground misunderstanding that was misrepresented by another student.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the School Principal",
      "role": "Speaking to Principal",
      "objective": "Present your child's perspective calmly, review playground supervisor notes, and request a review.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Principal.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to your Child with Empathy",
      "role": "Speaking to your Child",
      "objective": "Discuss the school rules, emotional regulation, and how to handle conflicts constructively.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_065",
    "title": "Family Expecting You to Host Holiday Dinner While Sick",
    "category": "Family & Caregiving",
    "situation": "Your extended family of 15 expects you to cook Thanksgiving dinner, but you have severe pneumonia.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Call Family Members to Cancel / Reschedule",
      "role": "Speaking to Family",
      "objective": "Explain your medical condition honestly and propose postponing or ordering takeout.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Family.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Delegate Hosting and Catering Duties to Relatives",
      "role": "Speaking to Relatives",
      "objective": "Ask relatives to take over hosting at another house while bringing food.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_066",
    "title": "Disagreement with Partner on Child's Extracurricular Schedule",
    "category": "Family & Caregiving",
    "situation": "Your partner enrolled your child in 5 sports leagues, leaving zero free time for homework or rest.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Partner",
      "role": "Speaking to Partner",
      "objective": "Discuss the child's fatigue, stress levels, and agree on choosing the top 2 activities.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Partner.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Inquire with Leagues About Partial Refunds",
      "role": "Speaking to League Coordinators",
      "objective": "Check cancellation deadlines and transfer policies for selected activities.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_067",
    "title": "Sibling Borrowing Money Repeatedly Without Repaying",
    "category": "Family & Caregiving",
    "situation": "Your sibling is asking for another $1,000 loan after failing to repay the previous $2,000 borrowed last year.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Sibling with Firm Boundaries",
      "role": "Speaking to Sibling",
      "objective": "Politely decline additional loans while offering to help them build a monthly budget.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Sibling.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Offer Non-Financial Practical Support",
      "role": "Speaking to Sibling",
      "objective": "Offer groceries or career coaching support instead of cash loans.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_068",
    "title": "In-Laws Visiting Unannounced for 2 Weeks",
    "category": "Family & Caregiving",
    "situation": "Your in-laws arrived at your doorstep announcing they plan to stay in your 1-bedroom condo for 2 weeks.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Spouse",
      "role": "Speaking to Spouse",
      "objective": "Agree on boundaries and coordinate booking a nearby hotel suite for their comfort.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Spouse.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak Warmly to the In-Laws",
      "role": "Speaking to In-Laws",
      "objective": "Welcome them warmly and arrange comfortable boutique hotel accommodations nearby.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_069",
    "title": "Pet Ingesting Toxic Food Before Family Vacation",
    "category": "Family & Caregiving",
    "situation": "Your dog ate chocolate right as you were loading the car for a non-refundable family vacation.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Rush to Emergency Vet and Delay Trip Departure",
      "role": "Speaking to Emergency Vet",
      "objective": "Prioritize the pet's medical stomach pumping and treatment.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Emergency Vet.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Coordinate Family Travel Logistics",
      "role": "Speaking to Family",
      "objective": "Have part of the family travel ahead while you stay behind for vet monitoring.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_070",
    "title": "Child Struggling with Bullying at School",
    "category": "Family & Caregiving",
    "situation": "Your child confided in you that they are being bullied on the school bus every afternoon.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the School Principal & Bus Supervisor",
      "role": "Speaking to Principal",
      "objective": "Request immediate bus monitoring, assigned seating, and anti-bullying intervention.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Principal.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Teach Child Self-Defense & Assertive Communication",
      "role": "Speaking to Child",
      "objective": "Empower your child with confidence, assertive phrases, and clear reporting steps.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_071",
    "title": "Cracked Coworker's Expensive Camera Lens",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You borrowed a coworker's $1,500 camera lens for a weekend trip to Banff and accidentally dropped it on gravel, cracking the front glass.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to your Coworker",
      "role": "Speaking to Coworker",
      "objective": "Apologize sincerely, explain the accident honestly, and offer to pay for full repair or replacement.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Coworker.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Visit an Authorized Repair Shop for Expedited Repair",
      "role": "Speaking to Camera Repair Specialist",
      "objective": "Get a certified repair quote and pay for expedited OEM glass replacement.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_072",
    "title": "Spilled Coffee on Friend's Borrowed Laptop",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You accidentally knocked over a cup of coffee onto your friend's laptop keyboard while studying at a library.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Friend Immediately",
      "role": "Speaking to Friend",
      "objective": "Apologize profusely, take full responsibility, and offer your backup laptop in the interim.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Take the Laptop to Emergency Data Recovery",
      "role": "Speaking to Computer Technician",
      "objective": "Pay for emergency motherboard cleaning and full data recovery.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_073",
    "title": "Dented Rented Moving Truck Mirror on Gatepost",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "While helping your brother move, you scraped the rented moving truck against a brick gatepost, cracking the side mirror.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Report the Damage to Truck Rental Office",
      "role": "Speaking to Rental Agent",
      "objective": "Provide insurance details and complete the vehicle incident report transparently.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Rental Agent.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Settle the Repair Cost Directly with Brother",
      "role": "Speaking to Brother",
      "objective": "Review the rental insurance deductible and cover the repair fee.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_074",
    "title": "Lost Neighbor's Specialized Lawn Aerator",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You borrowed your neighbor's specialized motorized lawn aerator, and it was stolen from your open driveway.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Neighbor",
      "role": "Speaking to Neighbor",
      "objective": "Apologize sincerely and immediately order an identical brand-new model for them.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Neighbor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: File a Police Report for Driveway Theft",
      "role": "Speaking to Police Officer",
      "objective": "Report the equipment theft and submit home insurance claim details.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_075",
    "title": "Damaged Borrowed Camping Tent in Thunderstorm",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "A sudden heavy windstorm tore the rainfly and bent the aluminum poles of a high-end tent borrowed from your cousin.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Cousin",
      "role": "Speaking to Cousin",
      "objective": "Explain the storm damage, apologize, and order OEM replacement poles and rainfly.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Cousin.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Purchase a Brand-New Upgraded Tent for Them",
      "role": "Speaking to Cousin",
      "objective": "Give them a brand-new upgraded four-season tent as a replacement.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_076",
    "title": "Scratched Friend's Car While Borrowing for Errands",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You borrowed your friend's car to buy groceries and accidentally scraped the rear bumper on a concrete pillar.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Tell your Friend Honestly and Pay for Body Shop Repair",
      "role": "Speaking to Friend",
      "objective": "Show them the bumper scratch and pay for professional body shop painting.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Take the Car to a Professional Detailing & Paint Shop",
      "role": "Speaking to Body Shop",
      "objective": "Get the bumper professionally repainted before returning the vehicle.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_077",
    "title": "Borrowed Suit Stained with Red Wine at Gala",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You borrowed your best friend's designer tuxedo and someone bumped into you, spilling red wine across the jacket.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Take to High-End Specialty Dry Cleaner",
      "role": "Speaking to Master Dry Cleaner",
      "objective": "Pay for specialty organic stain removal and fabric restoration.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Master Dry Cleaner.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Offer to Buy a Brand-New Replacement Suit",
      "role": "Speaking to Friend",
      "objective": "Apologize and pay for an identical replacement suit from the designer store.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_078",
    "title": "Damaged Kitchen Counter in Rental AirBnB",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You placed a hot pan directly on an unfamiliar laminate countertop in a vacation rental, leaving a scorch mark.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Message the AirBnB Host Honestly",
      "role": "Speaking to Host",
      "objective": "Report the damage with photos and offer to pay the replacement or repair cost through the app.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Host.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact AirBnB Support for Resolution Center Claims",
      "role": "Speaking to AirBnB Support",
      "objective": "Ensure fair repair invoicing through official AirBnB AirCover channels.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_079",
    "title": "Dropped and Smashed Friend's Prescription Glasses",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "While playing frisbee in the park, you accidentally knocked off and stepped on your friend's designer glasses.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Take Friend to Optometrist for Rush Replacement",
      "role": "Speaking to Friend",
      "objective": "Apologize and accompany them to their optometrist, paying 100% of the replacement cost.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Inquire About 1-Hour Lens Replacement Labs",
      "role": "Speaking to Optical Lab",
      "objective": "Pay for same-day expedited lens cutting and frame matching.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_080",
    "title": "Lost Borrowed Library Rare Reference Book",
    "category": "Accidents, Property & Borrowed Items",
    "situation": "You misplaced a rare, non-circulating reference book borrowed under your professor's faculty library account.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to your Professor",
      "role": "Speaking to Professor",
      "objective": "Apologize sincerely, explain your thorough search, and offer to pay all library replacement fees.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Professor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to University Head Librarian",
      "role": "Speaking to Head Librarian",
      "objective": "Inquire about acquiring a replacement copy from an antiquarian bookseller.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_081",
    "title": "Double-Booked for Two Close Friends' Birthdays",
    "category": "Events, Travel & Social Etiquette",
    "situation": "You accidentally confirmed attendance for two best friends' birthday dinners on the exact same Saturday night at 7:00 PM.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to Friend A (Dinner 1)",
      "role": "Speaking to Friend A",
      "objective": "Attend their appetizer course, give your gift, and explain you must share time with another milestone.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend A.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to Friend B (Dinner 2)",
      "role": "Speaking to Friend B",
      "objective": "Explain the scheduling overlap and offer to treat them to an exclusive birthday brunch on Sunday.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_082",
    "title": "Flight Canceled with No Available Seats for 3 Days",
    "category": "Events, Travel & Social Etiquette",
    "situation": "Your flight home for your sister's wedding was canceled due to weather, and the next airline flight is in 3 days.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to Airline Customer Rebooking Agent",
      "role": "Speaking to Airline Agent",
      "objective": "Insist on being booked on a partner airline or alternative route via another hub.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Airline Agent.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Rent a One-Way Car and Drive 12 Hours",
      "role": "Speaking to Car Rental Agent",
      "objective": "Rent a one-way vehicle and drive through the night to arrive on time.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_083",
    "title": "Guest Bringing Uninvited Plus-One to Intimate Dinner",
    "category": "Events, Travel & Social Etiquette",
    "situation": "A dinner party guest arrived with an uninvited friend and two dogs for a formal 6-person seated dinner in your condo.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Welcome Them Politely and Adjust Seating",
      "role": "Speaking to Guest",
      "objective": "Rearrange tableware to accommodate the extra person while setting boundaries regarding pets.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Guest.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak Privately with the Guest",
      "role": "Speaking to Guest",
      "objective": "Politely explain the space limitations and ask them to adhere to the invitation RSVP.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_084",
    "title": "Catering Vendor Canceling 24 Hours Before Wedding",
    "category": "Events, Travel & Social Etiquette",
    "situation": "Your wedding caterer went out of business 24 hours before your reception for 80 guests.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Contact Local Gourmet Trattoria for Emergency Trays",
      "role": "Speaking to Restaurant Manager",
      "objective": "Negotiate large-scale hot buffet delivery and staffing for tomorrow evening.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Restaurant Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact a Backup Catering Network",
      "role": "Speaking to Wedding Coordinator",
      "objective": "Mobilize wedding vendor networks to secure replacement staff and food.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_085",
    "title": "Friend Asking You to Lie as a Fake Job Reference",
    "category": "Events, Travel & Social Etiquette",
    "situation": "A friend is asking you to pose as their former CEO and provide a false executive employment reference.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Decline the Fake Reference Firmly but Politely",
      "role": "Speaking to Friend",
      "objective": "Explain that lying on reference checks is illegal and could jeopardize both your careers.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Offer to Provide a Genuine Character Reference",
      "role": "Speaking to Friend",
      "objective": "Offer to write an honest, glowing character reference based on real shared projects.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_086",
    "title": "Accidentally Overhearing Surprise Party Plans",
    "category": "Events, Travel & Social Etiquette",
    "situation": "You accidentally saw group chat messages revealing that your friends are throwing you an elaborate surprise party.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Keep the Secret and Act Genuinely Surprised",
      "role": "Speaking to Yourself / Colleague",
      "objective": "Show gratitude and let your friends enjoy the joy of surprising you.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Yourself / Colleague.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Subtly Ensure Logistics and Timing Align",
      "role": "Speaking to Organizer Partner",
      "objective": "Ensure you arrive on time at the correct location without revealing you know.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_087",
    "title": "Wedding DJ Playing Inappropriate Songs at Formal Reception",
    "category": "Events, Travel & Social Etiquette",
    "situation": "A hired DJ is playing loud, explicit music that is offending elderly grandparents at a formal family wedding.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak Directly to the DJ",
      "role": "Speaking to DJ",
      "objective": "Firmly request they switch immediately to the approved family-friendly playlist.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to DJ.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak with the Event Coordinator",
      "role": "Speaking to Event Coordinator",
      "objective": "Have the venue coordinator enforce the contracted music guidelines.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_088",
    "title": "Photographer Losing All Wedding Photos",
    "category": "Events, Travel & Social Etiquette",
    "situation": "A professional wedding photographer informed you that their SD card corrupted and all ceremony photos are lost.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Photographer About Forensic Recovery",
      "role": "Speaking to Photographer",
      "objective": "Demand they send the card to a clean-room forensic data recovery laboratory at their expense.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Photographer.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Organize an Encore Mini-Photo Session with Friends",
      "role": "Speaking to Spouse",
      "objective": "Plan a fun weekend photo session in your wedding attire with close family.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_089",
    "title": "Hotel Overbooking on Honeymoon Night",
    "category": "Events, Travel & Social Etiquette",
    "situation": "You arrived at your luxury honeymoon resort after a 14-hour flight, and the front desk states they are overbooked.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the General Manager",
      "role": "Speaking to General Manager",
      "objective": "Demand an upgraded suite at a sister 5-star property with free meals and spa vouchers.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to General Manager.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: File an Emergency Claim with Travel Insurance",
      "role": "Speaking to Travel Insurance",
      "objective": "Claim emergency relocation and accommodation expenses.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_090",
    "title": "Friend Asking to Stay at Your Apartment While You Are Away",
    "category": "Events, Travel & Social Etiquette",
    "situation": "A friend with a history of partying asks to stay in your luxury apartment while you are away on a 3-week vacation.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Politely Decline with Building Sublet Rules",
      "role": "Speaking to Friend",
      "objective": "Explain that condo bylaws strictly prohibit non-resident guests without host presence.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Friend.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Recommend Nearby Budget Boutique Hotels",
      "role": "Speaking to Friend",
      "objective": "Help them find comfortable, affordable accommodations in the city.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_091",
    "title": "Parking Ticket Issued Due to App Outage",
    "category": "Public Services & Civic Bylaws",
    "situation": "You were issued a $60 municipal parking ticket while the official city parking payment app was experiencing a verified server outage.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Submit an Online Parking Dispute to City Hall",
      "role": "Speaking to Municipal Parking Tribunal",
      "objective": "Provide timestamps and app error screenshots to request complete ticket cancellation.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Municipal Parking Tribunal.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Parking App Customer Support",
      "role": "Speaking to Parking App Support",
      "objective": "Obtain official server outage verification documents for your hearing appeal.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_092",
    "title": "Stranded Commuter Train in Severe Blizzard",
    "category": "Public Services & Civic Bylaws",
    "situation": "A commuter train lost power in -25\u00b0C blizzard conditions between stations, with no staff announcements for 90 minutes.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Train Conductor / Transit Lead",
      "role": "Speaking to Transit Conductor",
      "objective": "Request emergency heating updates and safety protocols for elderly passengers.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Transit Conductor.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Call Regional Transit Customer Emergency Line",
      "role": "Speaking to Transit Operations",
      "objective": "Request immediate emergency bus shuttle dispatch to the nearest station.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_093",
    "title": "Municipal Garbage Bin Smashed by City Truck",
    "category": "Public Services & Civic Bylaws",
    "situation": "A robotic municipal waste collection truck crushed your new $120 green compost bin and drove away without notice.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Contact City 311 Waste Management",
      "role": "Speaking to Municipal Services Agent",
      "objective": "Report the bin serial number, provide security camera footage, and request a free replacement bin.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Municipal Services Agent.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak with the Collection Route Supervisor",
      "role": "Speaking to Route Supervisor",
      "objective": "Inquire about street container replacement scheduling and damaged bin pickup.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_094",
    "title": "Delayed Passport Renewal Before International Trip",
    "category": "Public Services & Civic Bylaws",
    "situation": "Your expedited passport application is delayed 3 days before an overseas business flight due to processing backlogs.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Visit the Regional Passport Office in Person",
      "role": "Speaking to Passport Officer",
      "objective": "Present your flight itinerary and request emergency same-day passport printing.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Passport Officer.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak with your Employer's Travel Coordinator",
      "role": "Speaking to Travel Coordinator",
      "objective": "Adjust flight departure dates or arrange a backup remote presentation option.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_095",
    "title": "Public Library Account Blocked for Missing Book",
    "category": "Public Services & Civic Bylaws",
    "situation": "The public library suspended your borrowing card for a book that was returned in the book drop box 2 weeks ago.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Head Librarian",
      "role": "Speaking to Head Librarian",
      "objective": "Explain the drop-box return date and request an on-shelf search of the library stacks.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Head Librarian.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Request a Temporary Account Review",
      "role": "Speaking to Circulation Desk",
      "objective": "Ask for borrowing privileges to be temporarily restored during the catalog audit.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_096",
    "title": "Public Transit Bus Skipping Stop in Extreme Cold",
    "category": "Public Services & Civic Bylaws",
    "situation": "An express bus driver drove past a scheduled stop with 10 freezing passengers despite having visible empty seats.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: File a Formal Transit Operator Complaint",
      "role": "Speaking to Transit Customer Service",
      "objective": "Provide the bus fleet number, exact time, and stop location to report the skipped stop.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Transit Customer Service.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Coordinate a Shared Rideshare with Stranded Commuters",
      "role": "Speaking to Fellow Commuters",
      "objective": "Organize splitting an Uber ride together to reach work on time safely.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_097",
    "title": "City Water Main Break Flooding Driveway",
    "category": "Public Services & Civic Bylaws",
    "situation": "A burst city water pipe on the boulevard is flooding your driveway and freezing into a thick ice sheet.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Call City Emergency Water Works Dispatch",
      "role": "Speaking to Emergency Water Works",
      "objective": "Report the severe main break and request an emergency valve shutoff crew.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Emergency Water Works.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Coordinate with Immediate Neighbors",
      "role": "Speaking to Neighbors",
      "objective": "Warn neighbors to move vehicles before the flooding freezes over access routes.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_098",
    "title": "Community Garden Plot Cleared in Error",
    "category": "Public Services & Civic Bylaws",
    "situation": "City park maintenance workers mistakenly mowed down your assigned community garden vegetable bed.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Speak to the Community Garden Coordinator",
      "role": "Speaking to Garden Coordinator",
      "objective": "Document the destroyed organic crops and request compensation or priority plot renewal.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Garden Coordinator.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Contact Municipal Parks & Recreation Department",
      "role": "Speaking to Parks Supervisor",
      "objective": "Request clear boundary signage and remediation for affected plot holders.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_099",
    "title": "City Snowplow Damaging Brick Driveway Curb",
    "category": "Public Services & Civic Bylaws",
    "situation": "A municipal road plow scraped and dislodged three decorative granite stones from your driveway entrance.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Submit a Property Damage Claim to City Risk Management",
      "role": "Speaking to City Claims Officer",
      "objective": "Submit photos, contractor repair quotes, and plow route logs for full reimbursement.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to City Claims Officer.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the District Road Operations Supervisor",
      "role": "Speaking to Road Supervisor",
      "objective": "Request a road crew inspect the curb angle to prevent future plow damage.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  },
  {
    "id": "t6_100",
    "title": "Municipal Street Tree Blocking Business Signage",
    "category": "Public Services & Civic Bylaws",
    "situation": "A newly planted city street tree was placed directly in front of your storefront sign, blocking visibility for customers.",
    "prepTime": 60,
    "speakTime": 60,
    "choiceA": {
      "id": "choice_a",
      "label": "Option A: Contact Municipal Forestry Department",
      "role": "Speaking to Urban Forestry Officer",
      "objective": "Request the tree be carefully transplanted 5 meters down the sidewalk or pruned for clearance.",
      "speakingPoints": [
        "Acknowledge the situation with empathy and maintain an appropriate tone for Speaking to Urban Forestry Officer.",
        "Explain the practical constraints and core reasons clearly and respectfully.",
        "Propose a concrete solution or compromise that addresses the underlying issue."
      ]
    },
    "choiceB": {
      "id": "choice_b",
      "label": "Option B: Speak to the Local Business Improvement Association (BIA)",
      "role": "Speaking to BIA Director",
      "objective": "Collaborate on a streetscape adjustment proposal that preserves greenery and business visibility.",
      "speakingPoints": [
        "Communicate clearly and assertively while maintaining constructive problem-solving language.",
        "Provide relevant facts, background context, and clear expectations.",
        "Outline actionable next steps to reach a fair and satisfactory resolution."
      ]
    },
    "diplomaticPhrases": [
      "I am calling to discuss an unexpected situation regarding...",
      "I truly appreciate your understanding, but unfortunately...",
      "What I would like to propose as a constructive solution is..."
    ]
  }
];
