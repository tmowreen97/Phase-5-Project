# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#ALL CATEGORIES
categories = Category.create([
  {
    name:"Physical", 
    description:"Physical self-care is considered the baseline/foundation to all other kinds of self-care, because a lack in this area can affect all the other self-care categories. Physical self-care is about taking care of your physical body. If your body feels ill often, you're not in a position where you can do good for others or yourself. This category refers to all the things you can do to help take care of your body and boost your energy levels.",
    img: 'https://media.istockphoto.com/id/1158723576/vector/running-man-icon-sign-flat.jpg?s=612x612&w=0&k=20&c=Nfj6k5NvsAdx9nS5JeqrK_tkpVvJ1pDHZfe7mqSvMOU='
  },
  {
    name:"Mental", 
    description:"Mental self-care involves your psychological and cognitive thinking as well as your mind's ability to understand and process information and experiences. Mental self-care practices help to stimulate the mind and improve brain functionality while helping you develop a growth mindset. A growth mindset is when people see setbacks and failures as opportunities for improvement. A proper and healthy mindset helps us process information more sufficiently and in a non-distorted manner.",
    img: 'https://static.thenounproject.com/png/4155795-200.png'
  },
  {
    name:"Emotional", 
    description: "Emotional self-care seeks to provide you with healthy coping mechanisms that can help you sit and fully process any heavy and uncomfortable emotions. Practicing this will eventually help you acknowledge and process your feelings successfully. By managing your emotions, you can navigate through relationships better and ultimately become a better communicator when it comes to expressing your feelings.",
    img: 'https://cdn-icons-png.flaticon.com/512/1231/1231448.png'
  },
  {
    name: "Environmental", 
    description:"Environmental self-care is all about being mindful of your surroundings and how it can affect your productivity and headspace. In order to thrive you need to be in the right environment whether that means inside a busy coffee shop, quiet home office or any other place where you enjoy spending your time. Your environment should always motivate you rather than distract you or bring you down.",
    img: 'https://cdn-icons-png.flaticon.com/512/4811/4811083.png'
  }, 
  {
    name: "Financial", 
    description:"Financial self-care is about cultivating a healthy relationship with money. This is essential for our mental health as it helps eliminate stress and anxiety from our lives. Whether people like to admit it or not, money is a big factor in our lives everyday. This is all about finding ways to not only achieve your monetary goals, but to also track your income and expenditures so you can save more and stress less. Financial self-care can improve your positive mindset around money, helping you feel more open to talking about it and less negative towards people who have lots of it!",
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeeIYMKMjmcSlA6YvHnhfJUFixGqFtzmvbx_TJtnw_cIqx81K0'
  },
  {
    name:"Social", 
    description:"Self-care isn't all about spending time by yourself. Social self-care is about your ability to build and maintain healthy interpersonal relationships with others. This involves doing activities that help nurture positive and fun relationships with our friends and family. Social connections help us to feel loved and less alone, but are also essential in developing and improving our communication skills.",
    img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-speech-bubble-comments-thin.png'
  },
  {
    name:"Professional", 
    description:"Professional self-care is all about forming a good work-life balance and boundaries. This promotes using habits, processes, systems and communities to make your work life sustainable. Ultimately, practicing professional self-care will help you be more productive in your career, and feel more fulfilled at work.",
    img: 'https://cdn-icons-png.flaticon.com/512/4344/4344797.png'
  }, 
  {
    name:"Spiritual", 
    description:"While other self-care categories are focused on nurturing your mind and body, spiritual self-care aims to nurture your soul. Spiritual self-care practices help you tap into your inner being so you can find a deeper purpose and more meaning in your life. This helps you silence the outside noise so you can find internal calm and peace.",
    img: 'https://drdavidhamilton.com/wp-content/uploads/2014/08/Meditation_LK_heart-768x768.jpg'
  }
])

#LIST OF CATEGORIES
physical = Category.first
mental = Category.second
emotional = Category.third
environmental = Category.fourth
financial = Category.fifth
social = Category.find(6)
professional = Category.find(7)
spiritual = Category.find(8)

#ACTIVITIES

#physical.activities

physical.activities.create([
  {
    name:"Moving your body daily, either by walking, running or working out, etc.",
    description: "It's recommended to move for at least half an hour a day, this can help prevent cardiovascular problems."
  },
  {
    name:"Taking probiotics or multivitamins daily.",
    description: "Probiotics can help your immune system and overall gut health. Taking multivitamins can help compensate for an unbalanced diet."
  },
  {
    name:"Drinking a glass of water as soon as you wake up.",
    description: "Drinking water first thing in the morning rehydrates your body, helps fuel your body, protects your immune system and improves digestion."
  }, 
  {
    name:"Getting between 7-9 hours of good sleep.",
    description: "Getting enough sleep ensures your body's ready to take on the day."
  }, 
  {
    name:"Sitting in the sun and soaking up vitamin D.",
    description: "Sunlight can brighten your mood, help regulate your immune system, improve your sleep quality, reduce high blood pressure and more. Studies say to try and spend 10-15 minutes a day in sunlight."
  },
  {
    name:"Spending time in nature.",
    description: "Nature can help benefit your mood and reduce stress."
  },
  {
    name:"Having a soothing hot bath or shower.",
    description: "This can help unwind and release any tension in your muscles and body."
  }
])

#mental.activities

mental.activities.create([
  {
    name:"Learning a new skill or language.",
    description:"The skills we can learn are endless! With all the resources available to us, it's always beneficial and gratifying learning a new skill."
  }, 
  {
    name:"Setting big intentional goals or mini personal ones.",
    description: "Setting goals can help in understanding what you crave in life. It can help make dreams feel more pragmatic. It can help organize your thoughts."
  },
  {
    name:"Reading self-help or personal growth books.",
    description: "Reading self-help books can help your interpretation of the world, it can help inspire your and put your emotions into perspective."
  },
  {
    name:"Journaling",
    description: "Journaling improves self-confidence, emotional intelligence, creativity and can help in achieving goals."
  },
  {
    name:"Practicing gratitude.",
    description: "Being more positive can help you feel more positive. It improves your health and your ability to have healthy relationships."
  },
  {
    name:"Doing a social media detox.",
    description: "Taking a break from social media can help boost your mood, reduce your anxiety, help you reconnect with your family and friends, better sleep ."
  },
  {
    name:"Engaging in a game of chess.",
    description: "Playing chess can help your problem solving skills, improve your concentration, and your creativity."
  },
  {
    name:"Practicing positive thinking.",
    description: "Positive thinking helps lower depression, lower levels of distress, and overall better psychological and physical well-being."
  }
])

#emotional.activities

emotional.activities.create([
  {
    name:"Setting healthy and clear boundaries to protect your energy.",
    description: "Setting boundaries can help your emotional well-being improve your self confidence and independence."
  },
  {
    name:"Spending time by yourself with no distractions.",
    description: "Spending time alone can improve personal exploration, increase creativity, and give you more social energy."
  },
  {
    name:"Journaling your feelings.",
    description: "Journaling improves self-confidence, emotional intelligence, creativity and can help in achieving goals."
  },
  {
    name:"Speaking to a therapist.",
    description: "Going to therapy has a number of benefits! It can help you manage your emotions, improve your self esteem, increase your confidence, and mange your stress more efficiently."
  },
  {
    name:"Having a good cry.",
    description: "Crying can release stress and emotional pain. There's no shame in crying! It's natural and can help you enhance your mood."
  },
  {
    name:"Practicing self-love.",
    description: "Self-love is the ability to show love, understanding and acceptance to ourselves. It can increase your happiness, motivation and self-acceptance."
  },
  {
    name:"Writing down positive affirmations.",
    description: "Positive affirmations are words phrases or statements we repeat to challenge negative thoughts and feelings, promoting more positive thinking. It can help decrease stress, control self-sabotaging thoughts, reduce anxiety and improve your mood."
  },
  {
    name:"Asking for help.",
    description: "Getting help can give you a different perspective on any issues you're having, it improves relationships you have."
  }
])

#environmental activities

environmental.activities.create([
  {
    name:"Making your bed every morning.",
    description: "Making your bed helps you clear your mind, enhance your organizational skills, and improve your focus."
  },

  {
    name:"Traveling for a change of scenery.",
    description: "A change of scenery can help you feel more invigorated and creative."
  },
  {
    name:"Tidying and organizing your workspace.",
    description: "Organization reduces stress, helps improve productivity, and improve your sleep."
  },
  {
    name:"Decluttering your wardrobe regularly.",
    description: "Having a tidy setting where you can easily find what you need helps to relax the mind, reduces feelings of anxiety and stress, and allows for sustainable thinking."
  },
  {
    name:"Heading to a coffee shop to work.",
    description: "Research has shown that a moderate level of ambient noise, such as the clattering of plates and the whir of a coffee machine, improves performance on creative tasks."
  },
  {
    name:"Exploring somewhere new.",
    description: "A change of scenery can help you feel more invigorated and creative."
  },
  {
    name:"Listening to music.",
    description: "Listening to music can elevate your mood, reduce your stress and relieve symptoms of depression."
  },
  {
    name:"Setting a calm mood in the evenings.",
    description: "This can improve your concentration, your sleep and help you relieve stressors from the day."
  }
  ])

#financial.activities

financial.activities.create([
  {
    name:"Listening to financial or money-related news.",
    description: "Being financially aware can help you in the presence and future with any goals you might have."
  },
  {
      name:"Investing in your future.",
      description: "Your future is yours! Set yourself up for success."
  },
  {
      name:"Setting financial goals for the year.",
      description: "Setting financial goals can help you get a better grasp on what your desires are for yourself and your future. This can improve your time management and organizational skills and reduce anxiety."
  },
  {
      name:"Using a money app to help you keep track of finances.",
      description: "Using an app for your finances can help you save money, getting you closer to meeting your financial goals."
  },
  {
      name:"Saving money each month.",
      description: "Saving money can help you get closer to your financial goals. Anything counts!"
  },
  {
      name:"Dealing with debt head-on.",
      description: "Getting ahead of any debt related issues will only help resolve it sooner."
  },
  {
      name:"Writing down positive money affirmations.",
      description: "Money affirmations can be about how you handle money, the money coming into your life and the money flowing out. This encourage you to visualize a future of abundance through simple thoughts."
  }
])

#social.activities

social.activities.create([
  {
    name:"Form new personal and professional relationships.",
    description: "Forming new relationships can help you feel more fulfilled and reduce feelings of loneliness."
  },
  {
    name:"Stay connected to important people in your life.",
    description: "Staying connected to people can help you feel more fulfilled and reduce feelings of loneliness."
  },
  {
    name:"Hanging out with a friend with zero distractions.",
    description: "Having no distractions can strengthen a relationship."
  },
  {
    name:"Messaging a friend to tell them why you are grateful for them.",
    description: "Telling friends how much they mean to you can improve your relationship and help your communication skills."
  },
  {
    name:"Limiting time with negative people.",
    description: "Negative people can worsen your mood and self confidence. It's always better to avoid negativity."
  },
  {
    name:"Reach out to support systems regularly.",
    description: "Reaching out to support systems can improve your relationships and help improve your communication skills."
  },
  {
    name:"Asking for help when needed.",
    description: "Asking for help can help you reduce your stress, gain outside perspective and improve your communication skills."
  },
  {
    name:"Set healthy boundaries.",
    description: "Setting boundaries can help your emotional well-being improve your self confidence and independence."
  },
  {
    name:"Ending relationships with toxic people.",
    description: "Toxic people can worsen your mood and self confidence. It's always better to avoid negativity."
  },
  {
    name:"Spend time with friends and family.",
    description: "Spending time with people you love can improve your mood, make you feel more grounded and reduce stress."
  },
  {
    name:"Building an engaged community online.",
    description: "This can help you build relationships, and improve your communication skills."
  },
  {
    name:"Writing letters to a friend.",
    description: "This can improve your relationship, and improve your communication skills."
  }
])
 

#professional.activities

professional.activities.create([
  {
    name:"Learning or developing skills that could help further your career.",
    description: "Learning a new skill can improve your motivation, and your confidence."
  },
  {
    name:"Setting work boundaries with your coworkers and your boss.",
    description: "Setting boundaries can help you improve your work relationships and improve your emotional well-being."
  },
  {
    name:"Managing your time better so you can complete all your tasks promptly.",
    description: "Time management is an important skill in everyday life and work. Mastering time management can help you achieve your goals faster."
  },
  {
    name:"Planning your day, week or even month ahead of time - which would keep you on track and ensure you are less stressed about deadlines.",
    description: "Time management is an important skill in everyday life and work. Mastering time management can help you achieve your goals faster."
  },
  {
    name:"Finding a good and workable work-life balance.",
    description: "Corporate programs that support work-life balance promote productivity, reduce turnover, and improve an employee's mental and physical health"
  }
])
  ;

#spiritual.activities

spiritual.activities.create([
  {
    name:"Meditation or breathwork.",
    description: "Meditation can help you relieve stress, increase patience and help you live more in the present. Breathwork has health benefits also, it can help with high blood pressure and reduce stress and anxiety."
  },
  {
    name:"Spending time in nature.",
    description: "Nature can help benefit your mood and reduce stress."
  },
  {
    name:"Going to a place of worship.",
    description: "Religion provides structure, it can reduce your stress and help you gain perspective in life."
  },
  {
    name:"Yoga.",
    description: "Yoga has physical and mental benefits. It can improve your flexibility, your muscle and respiratory strength. It can relieve stress and improve your mood."
  },
  {
    name:"Mapping out your core values.",
    description: "Mapping out your values can improve your relationships and help you prioritize in life."
  },
  {
    name:"Dedicating time for self-reflection.",
    description: "Self-reflection is taking time to think about your thoughts, attitudes, motivations and desires. It can improve your quality of life and help you gain perspective on what you find important in life."
  },
  {
    name:"Manifestation.",
    description: "Manifestation refers to strategies made to shift one's focus to achieving their goals. It helps people be more optimistic, helps reduce stress, improve self-confidence, and increase gratitude."
  }
  ]);


# RESOURCES

# physical.resources
physical.resources.create([
  {
    url: 'https://www.delicious.com.au/recipes/collections/gallery/60-healthy-dinners-you-can-cook-in-30-minutes/1vo4q819', 
    description: 'Healthy meal ideas.'
  },
  {
    url: 'https://www.merchantsgroup.com/blog/struggling-to-make-time-for-fitness-during-work-here-are-10-ways-to-incorporate-exercise-into-your-busy-workday/', 
    description: 'Fit exercise into your daily routine.'
  },
  {
    url: 'https://www.themanual.com/fitness/best-workouts-for-beginners/', 
    description: 'Workout guide for beginners.'
  },
  {
    url: 'https://www.everydayhealth.com/diet-and-nutrition/diet/ways-eat-more-probiotics-everyday/', description: 'Eat more probiotics.'
  },
  {
    url: 'https://www.healthline.com/health-news/spending-time-in-nature-is-good-for-you-new-research-explains-why#Outcomes-on-well-being', description: 'Nature and health.'
  }
])

# mental.resources
mental.resources.create([
  {
    url:'https://www.skillshare.com/en/', 
    description:'Learn new skills.'
  },
  {
    url:'https://fourminutebooks.com/best-self-help-books/', 
    description:'Self-help reading.'
  },
  {
    url:'https://www.betterup.com/blog/how-to-start-journaling', 
    description:'How to start journaling.'
  },
  {
    url:'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950', 
    description:'Positive thinking.'
  }
])

# emotional.resources
emotional.resources.create([
  {
    url:'https://www.betterhelp.com/get-started/?go=true&utm_content=133524759310&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&network=g&placement=&target=&matchtype=e&utm_campaign=15234220559&ad_type=text&adposition=&kwd_id=kwd-300752210814&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaWxJyZocIa8Y9HOTCl5yoDyV-8HuFkEbRqr83TbPJcv7PFT35gMWCsaAkzQEALw_wcB&not_found=1&gor=start', 
    description:'Look into therapy.'
  },
  {
    url:'https://www.betterup.com/blog/how-to-start-journaling', 
    description:'How to start journaling.'
  },
  {
    url:'https://www.oprahdaily.com/life/relationships-love/g25629970/positive-affirmations/', description:'Positive affirmations.'
  },
  {
    url:'https://www.bbrfoundation.org/blog/self-love-and-what-it-means', 
    description:'What is Self-Love?'
  }
])


# # environmental.resources
environmental.resources.create([
  {
    url:'https://evapolar.com/blog/how-to-organize-your-workspace-at-home/', 
    description:'Organize your workspace.'
  },
  {
    url:'https://www.theinfatuation.com/new-york/guides/coffee-shops-nyc-for-doing-work', description:'Coffee shops in NYC.'
  },
  {
    url:'https://www.nourluxury.com/blogs/news/how-to-relax-before-bed', 
    description:'How to unwind.'
  }
]) 

# # financial.resources
financial.resources.create([
  {
    url:'https://www.investopedia.com/articles/personal-finance/100516/setting-financial-goals/', description:'Financial goals.'
  },
  {
    url:'https://www.nerdwallet.com/article/finance/best-budget-apps', 
    description:'Budgeting.'
  },
  {
    url:'https://blog.gratefulness.me/money-affirmations/',
    description:'Money affirmations.'
  }
])

# # social.resources
social.resources.create([
  {
    url:'https://medium.com/the-mission/why-negative-people-are-literally-killing-you-and-how-to-obliterate-pessimism-from-your-life-eb85fadced87', 
    description:'Dealing with negative people.'
  },
  {
    url:'https://www.scienceofpeople.com/how-to-set-boundaries/', 
    description:'Create healthy boundaries.'
  }
])

# # professional.resources
professional.resources.create([
  {
    url:'https://www.skillshare.com/en/', 
    description:'Learn new skills.'
  },
  {
    url:'https://www.careercontessa.com/advice/healthy-boundaries-at-work/', 
    description:'Set boundaries at work.'
  },
  {
    url:'https://www.indeed.com/career-advice/career-development/time-management-skills', description:'Time management skills.'
  },
  {
    url:'https://www.betterup.com/blog/how-to-have-good-work-life-balance', 
    description:'Work-life balance.'
  }
])

# # spiritual.resources
spiritual.resources.create([
  {
    url:'https://www.nytimes.com/guides/well/how-to-meditate', 
    description:'Meditation.'
  },
  {
    url:'https://www.nytimes.com/guides/well/beginner-yoga', 
    description:'Beginner yoga.'
  },
  {
    url:'https://hbr.org/2022/03/dont-underestimate-the-power-of-self-reflection', 
    description:'Power of self-reflection'
  },
  {
    url:'https://www.mindbodygreen.com/articles/manifestation', 
    description:'Manifestation.'
  },
  {
    url:'https://hbr.org/2022/03/dont-underestimate-the-power-of-self-reflection',
    description:'Power of self-reflection.'
  }
])