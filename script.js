/* ==========================================================================
   LEXIVIBE — Monochrome Brutalist English & Speaking Lab (Group 11)
   Includes Units 09–14 Syllabus Modules, 16 Rare Words, Idioms, Stories & Quiz
   ========================================================================== */

// 0. Random Quotes Dataset (Loaded Randomly on Every Page Open)
const QUOTES_DATA = [
  {
    text: "The limits of my language mean the limits of my world.",
    author: "LUDWIG WITTGENSTEIN",
    tag: "PHILOSOPHY"
  },
  {
    text: "Words mean more than what is set down on paper. It takes the human voice to infuse them with deeper meaning.",
    author: "MAYA ANGELOU",
    tag: "EXPRESSION"
  },
  {
    text: "The difference between the almost right word and the right word is the difference between the lightning bug and the lightning.",
    author: "MARK TWAIN",
    tag: "PRECISION"
  },
  {
    text: "Language is the dress of thought; every new word sharpens how clearly you see reality.",
    author: "SAMUEL JOHNSON",
    tag: "THOUGHT"
  },
  {
    text: "A different language is a different vision of life.",
    author: "FEDERICO FELLINI",
    tag: "PERSPECTIVE"
  },
  {
    text: "To have another language is to possess a second soul.",
    author: "CHARLEMAGNE",
    tag: "FLUENCY"
  },
  {
    text: "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
    author: "RUMI",
    tag: "ELOQUENCE"
  },
  {
    text: "One forgets words as one forgets names. One's vocabulary needs constant fertilizing or it will die.",
    author: "EVELYN WAUGH",
    tag: "VOCABULARY"
  },
  {
    text: "Precision of communication is important, more important than ever, in our era of hair-trigger balances.",
    author: "JAMES THURBER",
    tag: "CLARITY"
  },
  {
    text: "The art of conversation lies in listening.",
    author: "MALCOLM FORBES",
    tag: "CONVERSATION"
  }
];

// 1. Units 09–14 Speaking & Communication Syllabus Dataset
const UNITS_DATA = [
  {
    unit: 9,
    code: "UNIT_09.LAB",
    shortLabel: "Social Situations",
    badge: "MEETING 09 // SOCIAL INTERACTION",
    title: "Having a Conversation: What to Say in Social Situations",
    summary: "Learn how to initiate natural small talk, keep conversations flowing smoothly, share opinions tactfully, and exit politely in academic or social settings.",
    checklist: [
      "Opening a conversation naturally",
      "Making & maintaining a conversation",
      "Closing a conversation gracefully",
      "Sharing opinions respectfully"
    ],
    subtopics: [
      {
        title: "Opening a Conversation",
        tag: "ICEBREAKERS",
        phrases: [
          {
            en: "Hi there! Mind if I join you? I'm [Name], by the way.",
            note: "Warm, polite opener at campus events or workshops."
          },
          {
            en: "That was an insightful session—what did you think of the main speaker?",
            note: "Context-based opener using a shared experience."
          }
        ]
      },
      {
        title: "Making & Sustaining a Conversation",
        tag: "MOMENTUM",
        phrases: [
          {
            en: "That's fascinating—what got you interested in that field?",
            note: "Open-ended follow-up question to encourage elaboration."
          },
          {
            en: "Speaking of which, have you tried applying that in your own projects?",
            note: "Smooth topic bridge to keep dialogue active."
          }
        ]
      },
      {
        title: "Closing a Conversation",
        tag: "POLITE EXIT",
        phrases: [
          {
            en: "It's been great chatting with you, though I should head to my next class.",
            note: "Appreciative closing paired with a clear reason."
          },
          {
            en: "Let's stay in touch—feel free to connect with me anytime.",
            note: "Leaves the door open for future contact."
          }
        ]
      },
      {
        title: "Sharing Opinions",
        tag: "VIEWPOINTS",
        phrases: [
          {
            en: "From my perspective, combining theory with real practice makes learning stick.",
            note: "Clear, confident framing for personal viewpoints."
          },
          {
            en: "I see your point, although I'd argue that timing also plays a huge role.",
            note: "Diplomatic way to introduce a differing perspective."
          }
        ]
      }
    ],
    dialogueTitle: "Campus Tech & Language Mixer",
    dialogue: [
      { speaker: "ARIF", text: "Hi! Great turnout today. What brought you to the English Communication workshop?" },
      { speaker: "SINTA", text: "I wanted to sharpen my speaking confidence. From my perspective, real practice beats memorizing rules." },
      { speaker: "ARIF", text: "I completely agree. Speaking of which, I should check in with my group—great talking with you!" }
    ],
    practicePrompt: "Write a 3-line mini dialogue where you open a conversation with a new classmate, share an opinion, and politely close the chat."
  },
  {
    unit: 10,
    code: "UNIT_10.LAB",
    shortLabel: "Story & News Report",
    badge: "MEETING 10 // NARRATIVE & REPORTING",
    title: "Story (Re-)Telling and News Report",
    summary: "Structure engaging personal anecdotes and clear, objective news reports by answering What happened along with When, Where, How, and Why.",
    checklist: [
      "Re-telling stories with clear sequence",
      "Sharing information: What happened?",
      "Detailing When / Where / How / Why did it happen?"
    ],
    subtopics: [
      {
        title: "Re-telling Stories",
        tag: "NARRATIVE ARC",
        phrases: [
          {
            en: "You won't believe what happened on my way to campus yesterday morning...",
            note: "Hook sentence to capture the listener's attention."
          },
          {
            en: "At first everything seemed routine, until suddenly the power went out.",
            note: "Shifts from background setting to the turning point."
          }
        ]
      },
      {
        title: "Sharing Info: What Happened?",
        tag: "CORE EVENT",
        phrases: [
          {
            en: "To summarize the headline, student researchers launched a solar-powered library kiosk.",
            note: "Delivers the core event directly and concisely."
          },
          {
            en: "The main takeaway is that over 300 residents used the facility in its first week.",
            note: "Highlights measurable impact or outcome."
          }
        ]
      },
      {
        title: "When & Where Did It Happen?",
        tag: "TIME & PLACE",
        phrases: [
          {
            en: "The incident took place early Tuesday morning right outside the main auditorium.",
            note: "Establishes exact temporal and spatial context."
          },
          {
            en: "According to eyewitnesses at the scene, the event unfolded around 8:30 AM.",
            note: "Journalistic attribution for credibility."
          }
        ]
      },
      {
        title: "How & Why Did It Happen?",
        tag: "CAUSE & PROCESS",
        phrases: [
          {
            en: "The breakthrough happened because the team tested three prototypes over six months.",
            note: "Explains the root cause and method clearly."
          },
          {
            en: "As a result of heavy overnight rain, the outdoor festival was moved indoors.",
            note: "Connects cause and consequence logically."
          }
        ]
      }
    ],
    dialogueTitle: "Campus Radio 60-Second News Brief",
    dialogue: [
      { speaker: "ANCHOR", text: "Good afternoon. Earlier today at 9 AM in the Student Center, Group 11 unveiled an interactive English speaking portal." },
      { speaker: "REPORTER", text: "That's right. The project was created because students needed practical tools for real social and interview scenarios." },
      { speaker: "ANCHOR", text: "In the end, over fifty peers tested the platform during the live showcase." }
    ],
    practicePrompt: "Report a recent campus or local event in 2–3 sentences covering What happened, When/Where, and Why."
  },
  {
    unit: 11,
    code: "UNIT_11.LAB",
    shortLabel: "Recent Changes",
    badge: "MEETING 11 // CONTRAST & EVOLUTION",
    title: "Talking about Recent Changes",
    summary: "Articulate personal, technological, and societal transformations fluently by contrasting past habits and conditions with present realities.",
    checklist: [
      "Comparing past to present accurately",
      "Using contrast structures (used to, whereas, nowadays)",
      "Explaining the impact of recent shifts"
    ],
    subtopics: [
      {
        title: "Comparing Past to Present (Habits)",
        tag: "USED TO vs NOW",
        phrases: [
          {
            en: "We used to rely purely on printed dictionaries, whereas now we check audio pronunciation instantly.",
            note: "Contrasts a discontinued past habit with current practice."
          },
          {
            en: "Compared to five years ago, remote collaboration has become second nature.",
            note: "Uses present perfect to show a shift continuing into now."
          }
        ]
      },
      {
        title: "Describing Ongoing Trends",
        tag: "SHIFTING PATTERNS",
        phrases: [
          {
            en: "More and more students are adopting AI-assisted study routines to practice speaking.",
            note: "Captures gradual, active change in progress."
          },
          {
            en: "What has changed most dramatically is how quickly teams share feedback.",
            note: "Emphasizes the single biggest transformation."
          }
        ]
      }
    ],
    dialogueTitle: "Comparing University Study Habits",
    dialogue: [
      { speaker: "DINA", text: "Have you noticed how different group projects feel compared to our first semester?" },
      { speaker: "REZA", text: "Definitely. We used to meet only in the library, whereas nowadays we co-edit drafts online before meeting." },
      { speaker: "DINA", text: "True—and as a result, our live discussions are much more focused." }
    ],
    practicePrompt: "Compare one aspect of your daily life or technology today with how it used to be three years ago."
  },
  {
    unit: 12,
    code: "UNIT_12.LAB",
    shortLabel: "Job Interviews",
    badge: "MEETING 12 // PROFESSIONAL READINESS",
    title: "Hypothetical Situations/Questions in Job Interviews",
    summary: "Respond calmly and persuasively to 'What if...' interview scenarios using conditional structures and objective, nonjudgmental language.",
    checklist: [
      "Talking about hypothetical situations (2nd Conditional)",
      "Nonjudgmental responding under pressure",
      "Focusing on solutions rather than blame"
    ],
    subtopics: [
      {
        title: "Talking about Hypothetical Situations",
        tag: "WHAT IF SCENARIOS",
        phrases: [
          {
            en: "If I were faced with an unexpected deadline shift, I would first reprioritize the core deliverables.",
            note: "Uses 'If I were... I would...' for composed hypothetical reasoning."
          },
          {
            en: "Suppose two teammates disagreed on strategy—I would facilitate a quick alignment check.",
            note: "Demonstrates proactive leadership in an imagined scenario."
          }
        ]
      },
      {
        title: "Nonjudgmental Responding",
        tag: "OBJECTIVE TONE",
        phrases: [
          {
            en: "Rather than assuming carelessness, I would ask what obstacles delayed their part.",
            note: "Replaces blame with curiosity and empathy."
          },
          {
            en: "Everyone brings a different working style, so clarifying expectations early prevents friction.",
            note: "Neutral, constructive framing valued by interviewers."
          }
        ]
      }
    ],
    dialogueTitle: "Behavioral Interview Simulation",
    dialogue: [
      { speaker: "INTERVIEWER", text: "What would you do if a colleague missed a crucial deadline right before a client pitch?" },
      { speaker: "CANDIDATE", text: "First, I would check in nonjudgmentally to understand the bottleneck, then redistribute urgent tasks so the team still delivers on time." },
      { speaker: "INTERVIEWER", text: "That's a very calm, solution-focused approach." }
    ],
    practicePrompt: "Answer this interview prompt: 'If you noticed a teammate falling behind on a shared task, how would you respond?'"
  },
  {
    unit: 13,
    code: "UNIT_13.LAB",
    shortLabel: "Dealing with Complaints",
    badge: "MEETING 13 // SERVICE & EMPATHY",
    title: "Dealing with Complaints",
    summary: "De-escalate dissatisfaction professionally by offering sincere apologies, validating emotions with genuine sympathy, and proposing clear next steps.",
    checklist: [
      "Apologizing sincerely without excuses",
      "Showing sympathy and emotional validation",
      "Offering an immediate constructive fix"
    ],
    subtopics: [
      {
        title: "Apologizing Sincerely",
        tag: "OWNERSHIP",
        phrases: [
          {
            en: "I sincerely apologize for the delay and any inconvenience this has caused you.",
            note: "Direct, accountable apology without shifting blame."
          },
          {
            en: "That fell short of our usual standard, and I take full responsibility for sorting it out.",
            note: "Builds immediate trust through accountability."
          }
        ]
      },
      {
        title: "Showing Sympathy",
        tag: "EMPATHY FIRST",
        phrases: [
          {
            en: "I completely understand why you're frustrated—I would feel the exact same way in your shoes.",
            note: "Validates the person's feelings before jumping to fixes."
          },
          {
            en: "Thank you for bringing this to our attention right away so we can make it right.",
            note: "Turns a complaint into collaborative problem-solving."
          }
        ]
      }
    ],
    dialogueTitle: "Resolving a Delayed Event Order",
    dialogue: [
      { speaker: "CLIENT", text: "The printed booklets arrived an hour late, and our orientation session already started." },
      { speaker: "COORDINATOR", text: "I completely understand how stressful that must be, and I sincerely apologize for the delay." },
      { speaker: "COORDINATOR", text: "I'm delivering the remaining copies directly to your hall now and waiving the rush fee." }
    ],
    practicePrompt: "Write a polite 2-sentence response apologizing and showing sympathy to a classmate whose file was accidentally overwritten."
  },
  {
    unit: 14,
    code: "UNIT_14.LAB",
    shortLabel: "Conflict Resolution",
    badge: "MEETING 14 // MEDIATION & CLARITY",
    title: "Conflict Resolution",
    summary: "Navigate disagreements constructively by offering practical suggestions, building logical arguments, and explaining complex points with crystal clarity.",
    checklist: [
      "Giving advice and constructive suggestions",
      "Making balanced, persuasive arguments",
      "Explaining something clearly to bridge gaps"
    ],
    subtopics: [
      {
        title: "Giving Advice and Suggestions",
        tag: "CONSTRUCTIVE OPTIONS",
        phrases: [
          {
            en: "Have you considered splitting the presentation into two focused parts so both ideas shine?",
            note: "Collaborative question instead of a rigid command."
          },
          {
            en: "One practical compromise would be to test the simpler layout first and gather feedback.",
            note: "Proposes a low-risk, actionable middle ground."
          }
        ]
      },
      {
        title: "Making Arguments",
        tag: "LOGIC & EVIDENCE",
        phrases: [
          {
            en: "The main reason I advocate for this structure is that readers can scan key points in seconds.",
            note: "Pairs a clear claim with user-centered evidence."
          },
          {
            en: "While speed matters, clarity is equally vital because confusion slows the whole team down.",
            note: "Acknowledges counter-points while defending core logic."
          }
        ]
      },
      {
        title: "Explaining Something Clearly",
        tag: "CLARIFICATION",
        phrases: [
          {
            en: "To put it simply, there are three steps: define the issue, list options, and agree on one action.",
            note: "Breaks complexity into numbered, digestible chunks."
          },
          {
            en: "Just to make sure we're on the same page, let me recap what we've agreed on so far.",
            note: "Prevents misunderstandings before closing a discussion."
          }
        ]
      }
    ],
    dialogueTitle: "Team Design Disagreement Resolution",
    dialogue: [
      { speaker: "MAYA", text: "I feel adding too many animations will distract the audience from our main data." },
      { speaker: "BIMA", text: "That's a fair argument. To put it simply, we want visual energy without clutter." },
      { speaker: "MAYA", text: "Have you considered keeping a clean monochrome grid and animating only the quiz transitions?" }
    ],
    practicePrompt: "Imagine two group members disagree on a topic. Write 2 sentences giving a suggestion and explaining your reasoning clearly."
  }
];

// 2. Rare & Expressive Vocabulary Dataset (16 Words)
const VOCAB_DATA = [
  {
    id: "petrichor",
    word: "Petrichor",
    ipa: "/ˈpet.rɪ.kɔːr/",
    pos: "NOUN",
    category: "Nature & Atmosphere",
    definition: "The pleasant, earthy smell that accompanies the first rain after a long period of warm, dry weather.",
    basicAlt: "The nice smell when it rains",
    origin: "Coined in 1964 from Greek 'petra' (stone) + 'ichor' (ethereal fluid).",
    example: "After weeks of summer heat, the sudden evening drizzle released a wave of fresh petrichor."
  },
  {
    id: "sonder",
    word: "Sonder",
    ipa: "/ˈsɒn.dər/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "The sudden realization that each random passerby is living a life as vivid and complex as your own.",
    basicAlt: "Realizing strangers also have deep lives",
    origin: "Modern neologism coined by John Koenig in The Dictionary of Obscure Sorrows.",
    example: "Watching commuters rush across the station gave Maya a quiet moment of sonder."
  },
  {
    id: "ineffable",
    word: "Ineffable",
    ipa: "/ɪnˈef.ə.bəl/",
    pos: "ADJECTIVE",
    category: "Emotion & Mind",
    definition: "Too great, extreme, or beautiful to be expressed or described adequately in words.",
    basicAlt: "Impossible to put into words",
    origin: "From Latin 'ineffabilis', meaning unutterable (in- 'not' + effabilis 'utterable').",
    example: "Standing above the clouds at sunrise filled the hikers with an ineffable sense of awe."
  },
  {
    id: "mellifluous",
    word: "Mellifluous",
    ipa: "/məˈlɪf.lu.əs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "A voice or musical sound that is sweet, smooth, and deeply pleasant to hear.",
    basicAlt: "Very smooth and pleasant sounding",
    origin: "From Latin 'mel' (honey) + 'fluere' (to flow) — literally 'flowing like honey'.",
    example: "The narrator's mellifluous voice kept the entire auditorium captivated until the final line."
  },
  {
    id: "luminous",
    word: "Luminous",
    ipa: "/ˈluː.mɪ.nəs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "Full of or shedding light; bright, glowing, or radiant, especially in the dark.",
    basicAlt: "Very bright and glowing",
    origin: "From Latin 'luminosus', derived from 'lumen' (light).",
    example: "The jellyfish drifted like luminous lanterns beneath the midnight waves."
  },
  {
    id: "wanderlust",
    word: "Wanderlust",
    ipa: "/ˈwɒn.də.lʌst/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "A strong, irresistible desire to travel and explore unfamiliar places around the world.",
    basicAlt: "A strong urge to travel everywhere",
    origin: "Borrowed directly from German 'wandern' (to hike/roam) + 'Lust' (desire).",
    example: "Looking at old railway maps always awakens her wanderlust."
  },
  {
    id: "euphoria",
    word: "Euphoria",
    ipa: "/juːˈfɔː.ri.ə/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "A feeling or state of intense excitement, joy, and overwhelming happiness.",
    basicAlt: "Feeling extremely happy and excited",
    origin: "From Greek 'euphoros' (bearing well), combining 'eu-' (well) + 'pherein' (to carry).",
    example: "A surge of pure euphoria swept through the team when the final whistle blew."
  },
  {
    id: "enigmatic",
    word: "Enigmatic",
    ipa: "/ˌen.ɪɡˈmæt.ɪk/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Difficult to interpret or understand; mysterious and intriguing.",
    basicAlt: "Mysterious and hard to read",
    origin: "From Greek 'ainigma' (riddle), from 'ainissesthai' (to speak in riddles).",
    example: "She offered an enigmatic smile before handing over the sealed envelope."
  },
  {
    id: "serene",
    word: "Serene",
    ipa: "/səˈriːn/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "Calm, peaceful, and untroubled; completely tranquil.",
    basicAlt: "Very calm and peaceful",
    origin: "From Latin 'serenus', originally describing clear, cloudless skies.",
    example: "Early in the morning, the mountain lake looked as serene as a mirror."
  },
  {
    id: "audacious",
    word: "Audacious",
    ipa: "/ɔːˈdeɪ.ʃəs/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Showing a willingness to take surprisingly bold risks; fearless and daring.",
    basicAlt: "Very bold and fearless",
    origin: "From Latin 'audax' (bold, daring), rooted in 'audere' (to dare).",
    example: "Launching a student-run design studio in their first semester was an audacious move."
  },
  {
    id: "ephemeral",
    word: "Ephemeral",
    ipa: "/ɪˈfem.ər.əl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    definition: "Lasting for a very short time; fleeting and transitory.",
    basicAlt: "Lasting only a short moment",
    origin: "From Greek 'ephemeros' (lasting only a day), from 'epi' (on) + 'hemera' (day).",
    example: "Cherry blossoms are prized precisely because their beauty is so ephemeral."
  },
  {
    id: "serendipity",
    word: "Serendipity",
    ipa: "/ˌser.ənˈdɪp.ə.ti/",
    pos: "NOUN",
    category: "Time & Society",
    definition: "The occurrence of finding valuable or agreeable things not sought for; happy accident.",
    basicAlt: "A lucky coincidence",
    origin: "Coined in 1754 by Horace Walpole from the Persian fairy tale 'The Three Princes of Serendip'.",
    example: "Finding my favorite rare book in a tiny alley shop was pure serendipity."
  },
  {
    id: "eloquent",
    word: "Eloquent",
    ipa: "/ˈel.ə.kwənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Fluent, persuasive, and vividly expressive in speaking or writing.",
    basicAlt: "Speaking very well and persuasively",
    origin: "From Latin 'eloqui' (to speak out), combining 'e-' (out) + 'loqui' (to speak).",
    example: "Her eloquent closing argument persuaded every judge on the panel."
  },
  {
    id: "resilient",
    word: "Resilient",
    ipa: "/rɪˈzɪl.jənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Able to withstand or recover quickly from difficult conditions and setbacks.",
    basicAlt: "Strong and bounces back fast",
    origin: "From Latin 'resilire' (to rebound or spring back).",
    example: "Coastal communities have proven remarkably resilient after seasonal storms."
  },
  {
    id: "nostalgia",
    word: "Nostalgia",
    ipa: "/nɒsˈtæl.dʒə/",
    pos: "NOUN",
    category: "Time & Society",
    definition: "A sentimental longing or wistful affection for a period in the past.",
    basicAlt: "Missing good memories from the past",
    origin: "From Greek 'nostos' (homecoming) + 'algos' (pain or ache).",
    example: "Hearing that cassette tape filled the room with warm childhood nostalgia."
  },
  {
    id: "quintessential",
    word: "Quintessential",
    ipa: "/ˌkwɪn.tɪˈsen.ʃəl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    definition: "Representing the most perfect or typical example of a quality or class.",
    basicAlt: "The most classic or perfect example",
    origin: "From medieval Latin 'quinta essentia' (fifth essence — the pure substance of the heavens).",
    example: "A rainy afternoon in a quiet bookshop is the quintessential autumn experience."
  }
];

// 3. Idioms & Native Expressions Dataset (8 Idioms)
const IDIOMS_DATA = [
  {
    id: "bite-the-bullet",
    idiom: "Bite the bullet",
    tag: "COURAGE & ACTION",
    literal: "To physically clench a lead bullet between one's teeth.",
    meaning: "To force yourself to do something difficult, unpleasant, or unavoidable that you have been delaying.",
    example: "I finally decided to bite the bullet and deliver my presentation entirely in English."
  },
  {
    id: "burn-midnight-oil",
    idiom: "Burn the midnight oil",
    tag: "STUDY & WORK",
    literal: "To keep an oil lamp lit late into the night.",
    meaning: "To study, read, or work very late into the night.",
    example: "Group 11 burned the midnight oil to refine every single line of code before demo day."
  },
  {
    id: "read-between-lines",
    idiom: "Read between the lines",
    tag: "COMMUNICATION",
    literal: "To look at the blank white spaces between lines of printed text.",
    meaning: "To understand a hidden, implicit, or unstated meaning behind someone's words.",
    example: "Although her email sounded polite, reading between the lines showed she needed urgent help."
  },
  {
    id: "once-in-blue-moon",
    idiom: "Once in a blue moon",
    tag: "TIME & FREQUENCY",
    literal: "Happening only during a rare second full moon in a calendar month.",
    meaning: "Something that happens very rarely; almost never.",
    example: "He lives abroad now, so we only get to catch up over coffee once in a blue moon."
  },
  {
    id: "penny-for-thoughts",
    idiom: "A penny for your thoughts",
    tag: "CONVERSATION",
    literal: "Offering a small coin in exchange for someone's ideas.",
    meaning: "A friendly way to ask someone who looks quiet or lost in thought what they are thinking about.",
    example: "You've been staring out the window for ten minutes—a penny for your thoughts?"
  },
  {
    id: "cut-to-the-chase",
    idiom: "Cut to the chase",
    tag: "EFFICIENCY",
    literal: "In early silent films, skipping dialogue scenes straight to the action chase.",
    meaning: "To get directly to the most important point without wasting time on unnecessary details.",
    example: "We only have five minutes left in the meeting, so let's cut to the chase."
  },
  {
    id: "walking-on-air",
    idiom: "Walking on air",
    tag: "EMOTION",
    literal: "Floating above the ground without touching the floor.",
    meaning: "Feeling extraordinarily happy, elated, or euphoric after great news.",
    example: "After receiving her scholarship acceptance letter, she was walking on air all week."
  },
  {
    id: "silver-lining",
    idiom: "Every cloud has a silver lining",
    tag: "OPTIMISM",
    literal: "Sunlight shining behind the edges of a dark storm cloud.",
    meaning: "Even in a difficult or disappointing situation, there is always some positive aspect or hope.",
    example: "Missing the early train led me to an inspiring bookshop—truly every cloud has a silver lining."
  }
];

// 4. Basic vs. Natural Fluency Upgrades Matrix
const UPGRADES_DATA = [
  {
    context: "EXHAUSTION",
    basic: "I am very tired today.",
    natural: "I am completely burned out today."
  },
  {
    context: "AGREEMENT",
    basic: "I agree with your idea 100%.",
    natural: "We are completely on the same page."
  },
  {
    context: "DIFFICULTY",
    basic: "This exam was very easy.",
    natural: "That exam was a walk in the park."
  },
  {
    context: "INITIATING",
    basic: "Let's start working on our project.",
    natural: "Let's get the ball rolling on our project."
  },
  {
    context: "DECISION",
    basic: "I haven't decided yet.",
    natural: "I'm still on the fence about it."
  },
  {
    context: "UNDERSTANDING",
    basic: "I understand what you mean.",
    natural: "I see where you're coming from."
  }
];

// 5. Personal Experience Stories Dataset (4 Stories)
const STORIES_DATA = [
  {
    id: "story-1",
    fileName: "STORY_01.TXT",
    tabTitle: "01. MIDNIGHT TRAIN",
    title: "Midnight Train Through the Highlands",
    author: "SHARED BY NADIA // TRAVEL JOURNAL",
    tag: "TRAVEL & ATMOSPHERE",
    readTime: "2 MIN READ",
    prompt: "Have you ever experienced wanderlust or felt a serene moment while traveling? Describe it in 1–2 sentences.",
    paragraphs: [
      "For months, an unstoppable wave of {wanderlust} had been building inside me while I stared at lecture notes from my desk. On Friday night, I finally booked a last-minute sleeper train heading north toward the misty highlands.",
      "When the train paused at a quiet rural station around midnight, the landscape outside felt remarkably {serene}. Not a single car passed by, and a {luminous} full moon silvered the rooftops of the sleeping village.",
      "Moments later, cool raindrops tapped against the windowpane, carrying the unmistakable scent of {petrichor} into the carriage. In that single breath, city stress vanished completely."
    ]
  },
  {
    id: "story-2",
    fileName: "STORY_02.TXT",
    tabTitle: "02. STREET VIOLINIST",
    title: "The Street Violinist at Dusk",
    author: "SHARED BY RAFI // CAMPUS CHRONICLES",
    tag: "CITY LIFE & REFLECTION",
    readTime: "2 MIN READ",
    prompt: "When was the last time you felt 'sonder' in a crowded place? Try using 'sonder' or 'mellifluous' in a sentence.",
    paragraphs: [
      "Walking home after an exhausting afternoon seminar, I nearly hurried past the old stone plaza until a {mellifluous} violin melody stopped me in my tracks. Every note floated effortlessly over the evening chatter.",
      "Around the musician stood dozens of strangers—students, shopkeepers, and grandparents—each lost in thought. Watching their faces sparked a sudden wave of {sonder}, reminding me that every person beside me carried an entire universe of hopes and memories.",
      "The music ended on a soft harmonic chord, leaving behind an {ineffable} warmth that no textbook could ever capture."
    ]
  },
  {
    id: "story-3",
    fileName: "STORY_03.TXT",
    tabTitle: "03. OPEN MIC NIGHT",
    title: "Leaping Onto the Open-Mic Stage",
    author: "SHARED BY TARI // CREATIVE CLUB",
    tag: "COURAGE & GROWTH",
    readTime: "2 MIN READ",
    prompt: "Describe an audacious decision you made recently and how it felt afterward.",
    paragraphs: [
      "Signing up to perform my original spoken-word poem in front of two hundred people felt like the most {audacious} decision of my university life. My hands trembled as I waited beside the curtain.",
      "Before stepping into the spotlight, the host gave me an {enigmatic} nod—half challenge, half encouragement—and whispered, 'Make them listen.'",
      "Once I spoke the final stanza and heard the room erupt into applause, a rush of pure {euphoria} washed over me. Fear had turned into my favorite memory of the year."
    ]
  },
  {
    id: "story-4",
    fileName: "STORY_04.TXT",
    tabTitle: "04. SECOND-HAND BOOKSHOP",
    title: "Rainy Afternoon in an Old Bookshop",
    author: "SHARED BY ARYA // LITERATURE CIRCLE",
    tag: "TIME & SERENDIPITY",
    readTime: "2 MIN READ",
    prompt: "Have you ever experienced 'serendipity' or 'nostalgia' when finding an old object or song?",
    paragraphs: [
      "Ducking out of an unexpected downpour, I stepped into the {quintessential} second-hand bookshop tucked behind the university library. Dust motes danced beneath a single brass lamp.",
      "Flipping through a worn anthology of essays, a handwritten postcard from 1998 slipped onto the floor—a moment of pure {serendipity} that stirred a sudden ache of {nostalgia} for eras I had never lived.",
      "I bought the book before the storm cleared, grateful for how an {ephemeral} afternoon rainstorm had turned into a lasting memory."
    ]
  }
];

// 6. 3-Deck Quiz Data (Units 09–14, Rare Words, Idioms)
const QUIZ_DECKS = {
  units: [
    {
      clue: "[UNIT 09] Which expression politely closes a social conversation while leaving room to reconnect later?",
      options: [
        "That's fascinating—what got you interested in that?",
        "It's been great chatting with you, though I should head to my next class. Let's stay in touch!",
        "You won't believe what happened on my way to campus yesterday.",
        "I sincerely apologize for the delay in our schedule.",
        "If I were faced with that deadline, I would reprioritize."
      ],
      answer: "It's been great chatting with you, though I should head to my next class. Let's stay in touch!",
      detail: "UNIT 09 (Closing a Conversation) — Combines gratitude, a clear reason for leaving, and a warm sign-off."
    },
    {
      clue: "[UNIT 09] You want to disagree with a classmate's opinion politely during a group discussion. Which is best?",
      options: [
        "You're completely wrong about how this works.",
        "I see your point, although I'd argue that timing also plays a huge role.",
        "Let's close this conversation right now.",
        "The incident took place early Tuesday morning.",
        "We used to rely purely on printed books."
      ],
      answer: "I see your point, although I'd argue that timing also plays a huge role.",
      detail: "UNIT 09 (Sharing Opinions) — Validates the other person's view before offering a respectful counter-point."
    },
    {
      clue: "[UNIT 10] In a news report, which sentence best answers 'When, Where, and Why did it happen?'",
      options: [
        "Mind if I join you? I'm Arif, by the way.",
        "Earlier today at 9 AM in the Student Center, the portal launched because students needed real speaking practice.",
        "Have you considered splitting the presentation into two parts?",
        "I completely understand why you feel frustrated.",
        "More and more students are adopting digital tools."
      ],
      answer: "Earlier today at 9 AM in the Student Center, the portal launched because students needed real speaking practice.",
      detail: "UNIT 10 (News Report) — Clearly provides When (9 AM), Where (Student Center), and Why (because...)."
    },
    {
      clue: "[UNIT 10] Which phrase works best as a narrative hook when re-telling an unexpected personal story?",
      options: [
        "You won't believe what happened on my way to campus yesterday morning...",
        "Just to make sure we're on the same page, let me recap.",
        "I take full responsibility for sorting it out.",
        "Suppose two teammates disagreed on strategy.",
        "Compared to five years ago, things are faster."
      ],
      answer: "You won't believe what happened on my way to campus yesterday morning...",
      detail: "UNIT 10 (Story Re-telling) — Engages listeners immediately before setting the sequence of events."
    },
    {
      clue: "[UNIT 11] Which sentence accurately compares a past habit to a present reality?",
      options: [
        "We used to rely purely on printed dictionaries, whereas now we check audio pronunciation instantly.",
        "I sincerely apologize for any inconvenience caused.",
        "What did you think of the keynote speaker today?",
        "If I were in charge, I would schedule a review.",
        "To put it simply, there are three steps."
      ],
      answer: "We used to rely purely on printed dictionaries, whereas now we check audio pronunciation instantly.",
      detail: "UNIT 11 (Comparing Past to Present) — Uses 'used to... whereas now...' to highlight clear change."
    },
    {
      clue: "[UNIT 11] Which expression highlights an ongoing trend in recent changes?",
      options: [
        "More and more students are adopting AI-assisted study routines to practice speaking.",
        "That fell short of our usual standard.",
        "Nice meeting you, I must run now.",
        "The event unfolded around 8:30 AM.",
        "Rather than assuming carelessness, I would ask."
      ],
      answer: "More and more students are adopting AI-assisted study routines to practice speaking.",
      detail: "UNIT 11 (Recent Changes) — Present continuous with 'More and more...' signals an active, ongoing shift."
    },
    {
      clue: "[UNIT 12] Which response uses the 2nd Conditional properly for a hypothetical job interview question?",
      options: [
        "If I were faced with an unexpected deadline shift, I would first reprioritize the core deliverables.",
        "Yesterday I faced an unexpected deadline and finished it.",
        "You won't believe what happened at my old job.",
        "We used to work only on weekends.",
        "I'm sorry your order arrived late."
      ],
      answer: "If I were faced with an unexpected deadline shift, I would first reprioritize the core deliverables.",
      detail: "UNIT 12 (Hypothetical Situations) — Uses 'If I were... I would...' for imagined workplace scenarios."
    },
    {
      clue: "[UNIT 12] Which statement demonstrates 'Nonjudgmental Responding' when a teammate misses a task?",
      options: [
        "They were obviously lazy and didn't care about the team.",
        "Rather than assuming carelessness, I would ask what obstacles delayed their part.",
        "I'd complain immediately so everyone knows whose fault it is.",
        "Let's skip the details and close the meeting.",
        "Compared to last year, deadlines are shorter."
      ],
      answer: "Rather than assuming carelessness, I would ask what obstacles delayed their part.",
      detail: "UNIT 12 (Nonjudgmental Responding) — Focuses objectively on obstacles and solutions without blame."
    },
    {
      clue: "[UNIT 13] Which phrase shows genuine sympathy when handling a complaint?",
      options: [
        "I completely understand why you're frustrated—I would feel the exact same way in your shoes.",
        "That's not really my department's problem.",
        "If I were you, I wouldn't complain so much.",
        "Speaking of which, have you seen the new schedule?",
        "The main takeaway is that 300 people attended."
      ],
      answer: "I completely understand why you're frustrated—I would feel the exact same way in your shoes.",
      detail: "UNIT 13 (Showing Sympathy) — Validates the other person's feelings empathetically before fixing the issue."
    },
    {
      clue: "[UNIT 13] Which sentence delivers a sincere apology without defensive excuses?",
      options: [
        "I sincerely apologize for the delay and any inconvenience this has caused you.",
        "I'm sorry you feel that way, even though traffic wasn't our fault.",
        "We used to deliver faster in the past.",
        "Suppose the package arrived on time instead.",
        "Have you considered waiting until tomorrow?"
      ],
      answer: "I sincerely apologize for the delay and any inconvenience this has caused you.",
      detail: "UNIT 13 (Apologizing) — Takes direct, polite accountability for the inconvenience."
    },
    {
      clue: "[UNIT 14] Which phrase offers a constructive suggestion during conflict resolution?",
      options: [
        "Have you considered splitting the presentation into two focused parts so both ideas shine?",
        "You have to do it my way because I'm right.",
        "The incident took place outside the library.",
        "It's been great chatting with you today.",
        "I'm sorry for the late reply."
      ],
      answer: "Have you considered splitting the presentation into two focused parts so both ideas shine?",
      detail: "UNIT 14 (Giving Advice & Suggestions) — Frames a win-win compromise as an open question."
    },
    {
      clue: "[UNIT 14] Which phrase helps explain a complex resolution clearly and prevent misunderstanding?",
      options: [
        "To put it simply, there are three steps: define the issue, list options, and agree on one action.",
        "You won't believe how complicated this got.",
        "If I were in another team, things would be easier.",
        "We used to argue about this every week.",
        "Mind if I join your table?"
      ],
      answer: "To put it simply, there are three steps: define the issue, list options, and agree on one action.",
      detail: "UNIT 14 (Explaining Something Clearly) — Uses 'To put it simply...' and numbered steps for clarity."
    }
  ],
  words: [
    {
      clue: "The pleasant, earthy smell that accompanies the first rain after a long period of warm, dry weather.",
      options: ["luminous", "petrichor", "serene", "euphoria", "sonder"],
      answer: "petrichor",
      detail: "PETRICHOR (/ˈpet.rɪ.kɔːr/) — Coined from Greek 'petra' (stone) + 'ichor' (fluid)."
    },
    {
      clue: "The sudden realization that each random passerby is living a life as vivid and complex as your own.",
      options: ["sonder", "wanderlust", "audacious", "enigmatic", "mellifluous"],
      answer: "sonder",
      detail: "SONDER (/ˈsɒn.dər/) — Everyone around you is the protagonist of their own story."
    },
    {
      clue: "Too great, extreme, or beautiful to be expressed or described adequately in words.",
      options: ["serene", "luminous", "ineffable", "petrichor", "audacious"],
      answer: "ineffable",
      detail: "INEFFABLE (/ɪnˈef.ə.bəl/) — Beyond words or verbal description."
    },
    {
      clue: "A voice or musical sound that is sweet, smooth, and deeply pleasant to hear.",
      options: ["enigmatic", "euphoria", "wanderlust", "mellifluous", "sonder"],
      answer: "mellifluous",
      detail: "MELLIFLUOUS (/məˈlɪf.lu.əs/) — Literally 'flowing like honey'."
    },
    {
      clue: "Lasting for a very short time; fleeting and transitory.",
      options: ["resilient", "ephemeral", "quintessential", "eloquent", "luminous"],
      answer: "ephemeral",
      detail: "EPHEMERAL (/ɪˈfem.ər.əl/) — Short-lived, like cherry blossoms or morning mist."
    },
    {
      clue: "The occurrence of finding valuable or agreeable things not sought for; a happy accident.",
      options: ["nostalgia", "euphoria", "serendipity", "wanderlust", "sonder"],
      answer: "serendipity",
      detail: "SERENDIPITY (/ˌser.ənˈdɪp.ə.ti/) — A fortunate, unplanned discovery."
    },
    {
      clue: "Fluent, persuasive, and vividly expressive in speaking or writing.",
      options: ["enigmatic", "eloquent", "serene", "audacious", "ephemeral"],
      answer: "eloquent",
      detail: "ELOQUENT (/ˈel.ə.kwənt/) — Articulate and deeply persuasive."
    },
    {
      clue: "Able to withstand or recover quickly from difficult conditions and setbacks.",
      options: ["resilient", "luminous", "nostalgia", "mellifluous", "petrichor"],
      answer: "resilient",
      detail: "RESILIENT (/rɪˈzɪl.jənt/) — Bouncing back strong after adversity."
    },
    {
      clue: "A sentimental longing or wistful affection for a period in the past.",
      options: ["euphoria", "wanderlust", "nostalgia", "serendipity", "sonder"],
      answer: "nostalgia",
      detail: "NOSTALGIA (/nɒsˈtæl.dʒə/) — Bittersweet longing for past memories."
    },
    {
      clue: "Representing the most perfect or typical example of a quality or class.",
      options: ["audacious", "ineffable", "quintessential", "enigmatic", "serene"],
      answer: "quintessential",
      detail: "QUINTESSENTIAL (/ˌkwɪn.tɪˈsen.ʃəl/) — The purest, most classic example."
    }
  ],
  idioms: [
    {
      clue: "To force yourself to do something difficult or unpleasant that you have been putting off.",
      options: ["Cut to the chase", "Bite the bullet", "Walking on air", "Burn the midnight oil", "Once in a blue moon"],
      answer: "Bite the bullet",
      detail: "BITE THE BULLET — Facing a tough task head-on with courage."
    },
    {
      clue: "To study, read, or work very late into the night.",
      options: ["Burn the midnight oil", "A penny for your thoughts", "Read between the lines", "Bite the bullet", "Every cloud has a silver lining"],
      answer: "Burn the midnight oil",
      detail: "BURN THE MIDNIGHT OIL — Staying up late to finish important work."
    },
    {
      clue: "To understand a hidden or unstated meaning behind someone's words.",
      options: ["Once in a blue moon", "Walking on air", "Read between the lines", "Cut to the chase", "Bite the bullet"],
      answer: "Read between the lines",
      detail: "READ BETWEEN THE LINES — Detecting implicit meaning."
    },
    {
      clue: "Something that happens very rarely; almost never.",
      options: ["Once in a blue moon", "Burn the midnight oil", "Every cloud has a silver lining", "A penny for your thoughts", "Cut to the chase"],
      answer: "Once in a blue moon",
      detail: "ONCE IN A BLUE MOON — Extremely rare occurrence."
    },
    {
      clue: "A friendly way to ask someone who looks quiet what they are thinking about.",
      options: ["Bite the bullet", "A penny for your thoughts", "Walking on air", "Read between the lines", "Burn the midnight oil"],
      answer: "A penny for your thoughts",
      detail: "A PENNY FOR YOUR THOUGHTS — Inviting someone to share their thoughts."
    },
    {
      clue: "To get directly to the most important point without wasting time.",
      options: ["Every cloud has a silver lining", "Once in a blue moon", "Cut to the chase", "Walking on air", "Bite the bullet"],
      answer: "Cut to the chase",
      detail: "CUT TO THE CHASE — Skipping fluff and getting straight to the point."
    },
    {
      clue: "Feeling extraordinarily happy, elated, or euphoric after great news.",
      options: ["Walking on air", "Burn the midnight oil", "Read between the lines", "A penny for your thoughts", "Cut to the chase"],
      answer: "Walking on air",
      detail: "WALKING ON AIR — Overjoyed and floating with happiness."
    },
    {
      clue: "Even in a disappointing situation, there is always some positive aspect or hope.",
      options: ["Bite the bullet", "Once in a blue moon", "Every cloud has a silver lining", "Cut to the chase", "Burn the midnight oil"],
      answer: "Every cloud has a silver lining",
      detail: "EVERY CLOUD HAS A SILVER LINING — Finding hope in setbacks."
    }
  ]
};

// ==========================================================================
// Application State
// ==========================================================================
const state = {
  activePage: "home",
  theme: localStorage.getItem("lexivibe_mono_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  currentQuoteIndex: 0,
  spotlightIndex: 0,
  activeUnitNumber: 9,
  accent: "en-US",
  rate: 1,
  searchQuery: "",
  selectedCategory: "All",
  masteredIds: JSON.parse(localStorage.getItem("lexivibe_mono_mastered") || "[]"),
  activeStoryIndex: 0,
  storyFontSize: 1.06,
  isReadingStory: false,
  quizMode: "units",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizHistory: [],
  modalWordId: null
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  pickRandomQuoteOnOpen();
  setupQuoteControls();
  setupSpotlightControls();
  setupNavigation();
  setupGlobalAudioDelegation();
  setupThemeToggle();
  setupSpeechControls();
  renderVocabGrid();
  setupVocabFilters();
  renderUnitsLab();
  setupUnitControls();
  renderIdiomsAndUpgrades();
  renderStories();
  setupStoryControls();
  renderQuizQuestion();
  setupQuizControls();
  setupModalControls();
  updateProgressStats();
});

// ==========================================================================
// Safe Global Audio Event Delegation (Handles Apostrophes Cleanly)
// ==========================================================================
function setupGlobalAudioDelegation() {
  document.addEventListener("click", (e) => {
    const speakBtn = e.target.closest("[data-speak-text]");
    if (speakBtn) {
      speakText(speakBtn.getAttribute("data-speak-text"));
    }
  });
}

// ==========================================================================
// Random Quote Engine (Executes Automatically When Web Opens)
// ==========================================================================
function pickRandomQuoteOnOpen() {
  const lastIdx = parseInt(sessionStorage.getItem("lexivibe_last_quote_idx") || "-1", 10);
  let nextIdx = Math.floor(Math.random() * QUOTES_DATA.length);
  if (QUOTES_DATA.length > 1 && nextIdx === lastIdx) {
    nextIdx = (nextIdx + 1) % QUOTES_DATA.length;
  }
  state.currentQuoteIndex = nextIdx;
  sessionStorage.setItem("lexivibe_last_quote_idx", String(nextIdx));
  renderQuote();
}

function renderQuote() {
  const q = QUOTES_DATA[state.currentQuoteIndex];
  document.getElementById("randomQuoteText").textContent = `“${q.text}”`;
  document.getElementById("randomQuoteAuthor").textContent = `— ${q.author}`;
  document.getElementById("randomQuoteTag").textContent = q.tag;
}

function setupQuoteControls() {
  document.getElementById("newQuoteBtn").addEventListener("click", () => {
    pickRandomQuoteOnOpen();
    showToast("NEW RANDOM QUOTE LOADED");
  });
  document.getElementById("speakQuoteBtn").addEventListener("click", () => {
    const q = QUOTES_DATA[state.currentQuoteIndex];
    speakText(`${q.text} — by ${q.author}`);
  });
}

// ==========================================================================
// Spotlight Word Widget (Home Page)
// ==========================================================================
function renderSpotlightWord() {
  const item = VOCAB_DATA[state.spotlightIndex];
  document.getElementById("spotlightCat").textContent = `${item.pos} // ${item.category.toUpperCase()}`;
  document.getElementById("spotlightIpa").textContent = item.ipa;
  document.getElementById("spotlightWord").textContent = item.word.toUpperCase();
  document.getElementById("spotlightDef").textContent = item.definition;
  document.getElementById("spotlightOld").textContent = `✕ BASIC: "${item.basicAlt}"`;
  document.getElementById("spotlightNew").innerHTML = `✓ EXPRESSIVE: "${item.example}"`;
  document.getElementById("spotlightOrigin").innerHTML = `<strong>ORIGIN:</strong> ${item.origin}`;
}

function setupSpotlightControls() {
  renderSpotlightWord();
  document.getElementById("spotlightSpeakBtn").addEventListener("click", () => {
    speakText(VOCAB_DATA[state.spotlightIndex].word);
  });
  document.getElementById("spotlightShuffleBtn").addEventListener("click", () => {
    state.spotlightIndex = (state.spotlightIndex + 1) % VOCAB_DATA.length;
    renderSpotlightWord();
  });
}

// ==========================================================================
// Theme Switcher (Light / Dark)
// ==========================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("lexivibe_mono_theme", theme);
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = theme === "dark" ? "LIGHT" : "DARK";
}

function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
    showToast(state.theme === "dark" ? "DARK MODE ACTIVATED" : "LIGHT MODE ACTIVATED");
  });
}

// ==========================================================================
// Navigation
// ==========================================================================
function navigateTo(pageId) {
  state.activePage = pageId;
  stopSpeech();

  document.querySelectorAll(".page").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageId}`);
  });

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    if (btn.classList.contains("nav-tab") || btn.classList.contains("dock-btn")) {
      btn.classList.toggle("active", btn.dataset.nav === pageId);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });

  document.querySelectorAll("[data-open-unit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeUnitNumber = parseInt(btn.dataset.openUnit, 10);
      renderUnitsLab();
      navigateTo("units");
    });
  });
}

// ==========================================================================
// Web Speech API Pronunciation Engine
// ==========================================================================
function speakText(text, onEndCallback = null) {
  if (!("speechSynthesis" in window)) {
    showToast("AUDIO NOT SUPPORTED IN THIS BROWSER");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.accent;
  utterance.rate = state.rate;

  const voices = window.speechSynthesis.getVoices();
  const matched = voices.find((v) => v.lang.startsWith(state.accent));
  if (matched) utterance.voice = matched;

  utterance.onend = () => { if (onEndCallback) onEndCallback(); };
  utterance.onerror = () => { if (onEndCallback) onEndCallback(); };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  state.isReadingStory = false;
  const readBtn = document.getElementById("readStoryAloudBtn");
  if (readBtn) readBtn.textContent = "🔊 READ ALOUD";
}

function setupSpeechControls() {
  document.querySelectorAll("[data-accent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.accent = btn.dataset.accent;
      document.querySelectorAll("[data-accent]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`ACCENT: ${state.accent === "en-US" ? "US ENGLISH" : "UK ENGLISH"}`);
    });
  });

  document.querySelectorAll("[data-rate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.rate = parseFloat(btn.dataset.rate);
      document.querySelectorAll("[data-rate]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`SPEED: ${state.rate}X`);
    });
  });
}

// ==========================================================================
// Helper to Escape HTML Attributes Safely
// ==========================================================================
function escAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ==========================================================================
// Page 01: Rare Vocabulary Renderer (16 Words)
// ==========================================================================
function renderVocabGrid() {
  const grid = document.getElementById("vocabGrid");
  const filtered = VOCAB_DATA.filter((item) => {
    let matchesCat = true;
    if (state.selectedCategory === "Mastered") {
      matchesCat = state.masteredIds.includes(item.id);
    } else if (state.selectedCategory !== "All") {
      matchesCat = item.category === state.selectedCategory;
    }

    const q = state.searchQuery.toLowerCase();
    const matchesSearch =
      item.word.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.basicAlt.toLowerCase().includes(q) ||
      item.origin.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 20px;"><strong>NO MATCHING WORDS FOUND IN THIS FILTER.</strong></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item, index) => {
      const isMastered = state.masteredIds.includes(item.id);
      const num = String(index + 1).padStart(2, "0");
      return `
        <article class="vocab-card ${isMastered ? "is-mastered" : ""}">
          <div class="vocab-card-head">
            <span>[${num}] ${item.category.toUpperCase()}</span>
            <span>${item.pos}</span>
          </div>
          <div class="vocab-card-body">
            <div class="vocab-title-row">
              <div>
                <h2 class="vocab-word">${item.word.toUpperCase()}</h2>
                <p class="vocab-ipa">${item.ipa}</p>
              </div>
              <button class="brutal-btn-sm btn-solid" data-speak-text="${escAttr(item.word)}">
                🔊 WORD
              </button>
            </div>
            <p class="vocab-def">${item.definition}</p>
            <p class="vocab-origin"><strong>ORIGIN:</strong> ${item.origin}</p>
            <div class="vocab-alt-box">
              <strong>UPGRADE FROM:</strong> "${item.basicAlt}"
            </div>
            <p class="vocab-example">"${item.example}"</p>
            <div class="vocab-footer">
              <button class="brutal-btn-sm" data-speak-text="${escAttr(item.example)}">
                🔈 SENTENCE
              </button>
              <button class="brutal-btn-sm master-btn ${isMastered ? "active" : ""}" onclick="toggleMastered('${item.id}')">
                ${isMastered ? "✓ MASTERED" : "+ MASTERED"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupVocabFilters() {
  document.getElementById("wordSearchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderVocabGrid();
  });

  document.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedCategory = pill.dataset.cat;
      document.querySelectorAll(".cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderVocabGrid();
    });
  });
}

function toggleMastered(wordId) {
  const idx = state.masteredIds.indexOf(wordId);
  if (idx > -1) {
    state.masteredIds.splice(idx, 1);
    showToast("REMOVED FROM MASTERED");
  } else {
    state.masteredIds.push(wordId);
    showToast("WORD MASTERED!");
  }
  localStorage.setItem("lexivibe_mono_mastered", JSON.stringify(state.masteredIds));
  renderVocabGrid();
  updateProgressStats();
}

function updateProgressStats() {
  document.getElementById("navMasteryCount").textContent = `${state.masteredIds.length}/${VOCAB_DATA.length}`;
  document.getElementById("homeMasteredStat").textContent = `${state.masteredIds.length} / ${VOCAB_DATA.length} WORDS`;
}

// ==========================================================================
// Page 02: Units 09–14 Speaking & Situations Lab Renderer
// ==========================================================================
function renderUnitsLab() {
  const tabsBar = document.getElementById("unitTabsBar");
  tabsBar.innerHTML = UNITS_DATA.map((u) => {
    const numStr = String(u.unit).padStart(2, "0");
    return `
      <button
        type="button"
        class="unit-tab-btn ${u.unit === state.activeUnitNumber ? "active" : ""}"
        onclick="selectUnit(${u.unit})"
      >
        <span class="unit-tab-num">UNIT ${numStr}</span>
        <span class="unit-tab-label">${u.shortLabel}</span>
      </button>
    `;
  }).join("");

  const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
  document.getElementById("unitWindowCode").textContent = current.code;
  document.getElementById("unitTopicCount").textContent = `${current.subtopics.length} SUB-TOPICS`;
  document.getElementById("unitBadge").textContent = current.badge;
  document.getElementById("unitTitle").textContent = current.title;
  document.getElementById("unitSummary").textContent = current.summary;

  document.getElementById("unitChecklist").innerHTML = current.checklist
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("unitSubtopicsGrid").innerHTML = current.subtopics
    .map((sub) => {
      const phrasesHtml = sub.phrases
        .map(
          (p) => `
            <div class="phrase-item">
              <div class="phrase-top">
                <span class="phrase-en">“${p.en}”</span>
                <button class="brutal-btn-sm btn-solid" data-speak-text="${escAttr(p.en)}" title="Pronounce Phrase">🔊</button>
              </div>
              <span class="phrase-note">${p.note}</span>
            </div>
          `
        )
        .join("");

      return `
        <div class="subtopic-card">
          <div class="subtopic-card-header">
            <h3>${sub.title}</h3>
            <span class="tag-pill">${sub.tag}</span>
          </div>
          <div class="phrase-list">${phrasesHtml}</div>
        </div>
      `;
    })
    .join("");

  document.getElementById("unitDialogueTitle").textContent = current.dialogueTitle;
  document.getElementById("unitDialogueLines").innerHTML = current.dialogue
    .map(
      (line) => `
        <div class="dialogue-row">
          <span class="speaker-tag">${line.speaker}</span>
          <span>${line.text}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("unitPracticePrompt").textContent = current.practicePrompt;
  const savedPractice = localStorage.getItem(`lexivibe_unit_practice_${current.unit}`) || "";
  document.getElementById("unitPracticeInput").value = savedPractice;
  document.getElementById("unitPracticeSavedMsg").textContent = "";
}

function selectUnit(unitNum) {
  stopSpeech();
  state.activeUnitNumber = unitNum;
  renderUnitsLab();
}

function setupUnitControls() {
  document.getElementById("playUnitDialogueBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const fullDialogue = current.dialogue.map((d) => `${d.speaker}: ${d.text}`).join(". ");
    speakText(fullDialogue);
  });

  document.getElementById("saveUnitPracticeBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const text = document.getElementById("unitPracticeInput").value.trim();
    localStorage.setItem(`lexivibe_unit_practice_${current.unit}`, text);
    document.getElementById("unitPracticeSavedMsg").textContent = "✓ PRACTICE SAVED LOCALLY";
  });
}

// ==========================================================================
// Page 03: Idioms & Native Upgrades Renderer
// ==========================================================================
function renderIdiomsAndUpgrades() {
  const idiomsGrid = document.getElementById("idiomsGrid");
  idiomsGrid.innerHTML = IDIOMS_DATA.map((item, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    return `
      <article class="vocab-card">
        <div class="vocab-card-head">
          <span>[IDIOM ${num}]</span>
          <span>${item.tag}</span>
        </div>
        <div class="vocab-card-body">
          <div class="vocab-title-row">
            <h3 class="vocab-word">${item.idiom.toUpperCase()}</h3>
            <button class="brutal-btn-sm btn-solid" data-speak-text="${escAttr(item.idiom)}">
              🔊 IDIOM
            </button>
          </div>
          <div class="vocab-alt-box">
            <strong>LITERAL IMAGE:</strong> ${item.literal}
          </div>
          <p class="vocab-def"><strong>ACTUAL MEANING:</strong> ${item.meaning}</p>
          <p class="vocab-example">"${item.example}"</p>
          <div class="vocab-footer">
            <button class="brutal-btn-sm" data-speak-text="${escAttr(item.example)}">
              🔈 HEAR IN CONTEXT
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const tbody = document.getElementById("upgradesTableBody");
  tbody.innerHTML = UPGRADES_DATA.map((row) => {
    return `
      <tr>
        <td><strong>${row.context}</strong></td>
        <td class="basic-cell">"${row.basic}"</td>
        <td class="native-cell">"${row.natural}"</td>
        <td>
          <button class="brutal-btn-sm btn-solid" data-speak-text="${escAttr(row.natural)}">🔊</button>
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================================================
// Page 04: Personal Stories Renderer (4 Stories)
// ==========================================================================
function renderStories() {
  const tabsContainer = document.getElementById("storyTabs");
  tabsContainer.innerHTML = STORIES_DATA.map(
    (s, idx) => `
      <button class="story-tab ${idx === state.activeStoryIndex ? "active" : ""}" onclick="selectStory(${idx})">
        ${s.tabTitle}
      </button>
    `
  ).join("");

  const story = STORIES_DATA[state.activeStoryIndex];
  document.getElementById("storyWindowFile").textContent = story.fileName;
  document.getElementById("storyReadTime").textContent = story.readTime;
  document.getElementById("storyTag").textContent = story.tag;
  document.getElementById("storyTitle").textContent = story.title;
  document.getElementById("storyAuthor").textContent = story.author;
  document.getElementById("storyPrompt").textContent = story.prompt;

  const bodyEl = document.getElementById("storyBody");
  bodyEl.style.fontSize = `${state.storyFontSize}rem`;
  bodyEl.innerHTML = story.paragraphs
    .map((p) => {
      const parsed = p.replace(/\{(\w+)\}/g, (_, wordId) => {
        const entry = VOCAB_DATA.find((v) => v.id === wordId);
        const label = entry ? entry.word.toLowerCase() : wordId;
        return `<button type="button" class="story-word-chip" onclick="openWordModal('${wordId}')">${label}</button>`;
      });
      return `<p>${parsed}</p>`;
    })
    .join("");

  const savedNote = localStorage.getItem(`lexivibe_mono_note_${story.id}`) || "";
  document.getElementById("reflectionInput").value = savedNote;
  document.getElementById("reflectionSavedMsg").textContent = "";
}

function selectStory(index) {
  stopSpeech();
  state.activeStoryIndex = index;
  renderStories();
}

function setupStoryControls() {
  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.min(1.36, +(state.storyFontSize + 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.max(0.92, +(state.storyFontSize - 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("readStoryAloudBtn").addEventListener("click", () => {
    const btn = document.getElementById("readStoryAloudBtn");
    if (state.isReadingStory) {
      stopSpeech();
      return;
    }
    const story = STORIES_DATA[state.activeStoryIndex];
    const cleanText = story.paragraphs.join(" ").replace(/\{|\}/g, "");
    state.isReadingStory = true;
    btn.textContent = "⏹ STOP AUDIO";
    speakText(cleanText, () => {
      state.isReadingStory = false;
      btn.textContent = "🔊 READ ALOUD";
    });
  });

  document.getElementById("saveReflectionBtn").addEventListener("click", () => {
    const story = STORIES_DATA[state.activeStoryIndex];
    const text = document.getElementById("reflectionInput").value.trim();
    localStorage.setItem(`lexivibe_mono_note_${story.id}`, text);
    document.getElementById("reflectionSavedMsg").textContent = "✓ SAVED LOCALLY";
  });
}

// ==========================================================================
// Word Inspector Modal
// ==========================================================================
function openWordModal(wordId) {
  const entry = VOCAB_DATA.find((v) => v.id === wordId);
  if (!entry) return;
  state.modalWordId = wordId;

  document.getElementById("modalWordCat").textContent = `${entry.category.toUpperCase()} // ${entry.pos}`;
  document.getElementById("modalWordTitle").textContent = entry.word.toUpperCase();
  document.getElementById("modalWordIpa").textContent = entry.ipa;
  document.getElementById("modalWordDef").textContent = entry.definition;
  document.getElementById("modalWordOrigin").innerHTML = `<strong>ORIGIN:</strong> ${entry.origin}`;
  document.getElementById("modalWordEx").textContent = `"${entry.example}"`;

  updateModalMasterBtn();
  document.getElementById("wordModalBackdrop").classList.remove("hidden");
  speakText(entry.word);
}

function updateModalMasterBtn() {
  const isMastered = state.masteredIds.includes(state.modalWordId);
  const btn = document.getElementById("modalMasterBtn");
  btn.textContent = isMastered ? "✓ MASTERED" : "+ MASTERED";
  btn.classList.toggle("btn-solid", isMastered);
}

function setupModalControls() {
  const backdrop = document.getElementById("wordModalBackdrop");
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    backdrop.classList.add("hidden");
  });
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) backdrop.classList.add("hidden");
  });
  document.getElementById("modalSpeakBtn").addEventListener("click", () => {
    const entry = VOCAB_DATA.find((v) => v.id === state.modalWordId);
    if (entry) speakText(entry.word);
  });
  document.getElementById("modalMasterBtn").addEventListener("click", () => {
    if (state.modalWordId) {
      toggleMastered(state.modalWordId);
      updateModalMasterBtn();
    }
  });
}

// ==========================================================================
// Page 05: 3-Deck Quiz (Units 09–14, Words, Idioms)
// ==========================================================================
function getCurrentDeck() {
  return QUIZ_DECKS[state.quizMode];
}

function renderQuizQuestion() {
  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  state.quizAnswered = false;

  document.getElementById("quizQuestionArea").classList.remove("hidden");
  document.getElementById("quizResultArea").classList.add("hidden");

  const qNum = String(state.quizIndex + 1).padStart(2, "0");
  const totalStr = String(deck.length).padStart(2, "0");
  document.getElementById("quizCounter").textContent = `QUESTION ${qNum} / ${totalStr}`;
  document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
  document.getElementById("quizProgressBar").style.width = `${((state.quizIndex + 1) / deck.length) * 100}%`;

  const clueLabels = {
    units: "UNITS 09–14 SCENARIO CLUE:",
    words: "VOCABULARY DEFINITION CLUE:",
    idioms: "IDIOM MEANING CLUE:"
  };
  document.getElementById("quizClueLabel").textContent = clueLabels[state.quizMode];
  document.getElementById("quizDefinition").textContent = `"${q.clue}"`;

  const letters = ["A", "B", "C", "D", "E"];
  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options
    .map((opt, idx) => {
      const displayLabel = state.quizMode === "units" ? opt : opt.toUpperCase();
      return `
        <button class="quiz-opt-btn" data-opt-idx="${idx}">
          <span class="opt-key">${letters[idx]}</span>
          <span>${displayLabel}</span>
        </button>
      `;
    })
    .join("");

  optionsEl.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
      handleQuizAnswer(q.options[optIdx], btn);
    });
  });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = "feedback-box hidden";
  document.getElementById("nextQuestionBtn").classList.add("hidden");
}

function handleQuizAnswer(choice, btnEl) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  const isCorrect = choice === q.answer;

  document.querySelectorAll(".quiz-opt-btn").forEach((btn, idx) => {
    btn.disabled = true;
    if (q.options[idx] === q.answer) {
      btn.classList.add("correct");
    } else if (btn === btnEl && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore++;
    document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
    if (state.quizMode !== "units") speakText(q.answer);
  }

  state.quizHistory.push({
    target: q.answer,
    isCorrect,
    chosen: choice
  });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
  feedbackEl.innerHTML = isCorrect
    ? `<strong>✓ CORRECT!</strong> ${q.detail}`
    : `<strong>✕ INCORRECT.</strong> ${q.detail}`;

  const nextBtn = document.getElementById("nextQuestionBtn");
  nextBtn.textContent = state.quizIndex === deck.length - 1 ? "VIEW FINAL SCORE →" : "NEXT QUESTION →";
  nextBtn.classList.remove("hidden");
}

function setupQuizControls() {
  document.querySelectorAll("[data-quiz-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.quizMode = btn.dataset.quizMode;
      document.querySelectorAll("[data-quiz-mode]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizHistory = [];
      renderQuizQuestion();
      showToast(`QUIZ DECK: ${state.quizMode.toUpperCase()}`);
    });
  });

  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    const deck = getCurrentDeck();
    if (state.quizIndex < deck.length - 1) {
      state.quizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  document.getElementById("retakeQuizBtn").addEventListener("click", () => {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizHistory = [];
    renderQuizQuestion();
  });
}

function showQuizResults() {
  const deck = getCurrentDeck();
  document.getElementById("quizQuestionArea").classList.add("hidden");
  document.getElementById("quizResultArea").classList.remove("hidden");

  const scoreLabel = `${state.quizScore}/${deck.length}`;
  const pct = Math.round((state.quizScore / deck.length) * 100);
  document.getElementById("resultBadge").textContent = scoreLabel;
  document.getElementById("resultHeading").textContent = `FINAL SCORE: ${pct}%`;
  document.getElementById("resultSummary").textContent =
    pct >= 80
      ? "OUTSTANDING MASTERY! GROUP 11 SALUTES YOUR ENGLISH COMMUNICATION SKILLS."
      : "SOLID ATTEMPT. REVIEW ANY MISSED ITEMS BELOW AND RETAKE THE DRILL.";

  document.getElementById("resultReviewList").innerHTML = state.quizHistory
    .map(
      (item, idx) => `
        <div class="review-row">
          <span>${String(idx + 1).padStart(2, "0")}. ${item.target}</span>
          <span>${item.isCorrect ? "✓ CORRECT" : "✕ MISSED"}</span>
        </div>
      `
    )
    .join("");
}

// ==========================================================================
// Toast Helper
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}
