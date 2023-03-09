# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#ALL CATEGORIES
# categories = Category.create([{name:"Physical", description:"Physical self-care is considered the baseline/foundation to all other kinds of self-care, because a lack in this area can affect all the other self-care categories. Physical self-care is about taking care of your physical body. If your body feels ill often, you're not in a position where you can do good for others or yourself. This category refers to all the things you can do to help take care of your body and boost your energy levels."}, {name:"Mental", description:"Mental self-care involves your psychological and cognitive thinking as well as your mind's ability to understand and process information and experiences. Mental self-care practices help to stimulate the mind and improve brain functionality while helping you develop a growth mindset. A growth mindset is when people see setbacks and failures as opportunities for improvement. A proper and healthy mindset helps us process information more sufficiently and in a non-distorted manner."}, {name:"Emotional", description: "Emotional self-care seeks to provide you with healthy coping mechanisms that can help you sit and fully process any heavy and uncomfortable emotions. Practicing this will eventually help you acknowledge and process your feelings successfully. By managing your emotions, you can navigate through relationships better and ultimately become a better communicator when it comes to expressing your feelings."}, {name: "Environmental", description:"Environmental self-care is all about being mindful of your surroundings and how it can affect your productivity and headspace. In order to thrive you need to be in the right environment whether that means inside a busy coffee shop, quiet home office or any other place where you enjoy spending your time. Your environment should always motivate you rather than distract you or bring you down."}, {name: "Financial", description:"Financial self-care is about cultivating a healthy relationship with money. This is essential for our mental health as it helps eliminate stress and anxiety from our lives. Whether people like to admit it or not, money is a big factor in our lives everyday. This is all about finding ways to not only achieve your monetary goals, but to also track your income and expenditures so you can save more and stress less. Financial self-care can improve your positive mindset around money, helping you feel more open to talking about it and less negative towards people who have lots of it!"}, {name:"Social", description:"Self-care isn't all about spending time by yourself. Social self-care is about your ability to build and maintain healthy interpersonal relationships with others. This involves doing activities that help nurture positive and fun relationships with our friends and family. Social connections help us to feel loved and less alone, but are also essential in developing and improving our communication skills."}, {name:"Professional", description:"Professional self-care is all about forming a good work-life balance and boundaries. This promotes using habits, processes, systems and communities to make your work life sustainable. Ultimately, practicing professional self-care will help you be more productive in your career, and feel more fulfilled at work."}, {name:"Spiritual", description:"While other self-care categories are focused on nurturing your mind and body, spiritual self-care aims to nurture your soul. Spiritual self-care practices help you tap into your inner being so you can find a deeper purpose and more meaning in your life. This helps you silence the outside noise so you can find internal calm and peace."}])

#LIST OF CATEGORIES
physical = Category.first
mental = Category.second
emotional = Category.third
environmental = Category.fourth
financial = Category.fifth
social = Category.find(6)
professional = Category.find(7)
spiritual = Category.find(8)

# physical.activities

# physical.activities.create([{name:"Moving your body daily, either by walking, running or working out, etc."},{name:"Taking probiotics or multivitamins daily."}, {name:"Drinking a glass of water as soon as you wake up."}, {name:"Getting between 7-9 hours of good sleep."}, {name:"Sitting in the sun and soaking up vitamin D."},{name:"Spending time in nature"}, {name:"Having a soothing hot bath or shower."}])

#mental.activities
# mental.activities.create([{name:"Learning a new skill or language."}, {name:"Setting big intentional goals or mini personal ones."},{name:"Reading self-help or personal growth books."},{name:"Journaling"},{name:"Practicing gratitude."},{name:"Doing a social media detox."},{name:"Engaging in a game of chess."},{name:"Practicing positive thinking."}])

#emotional.activities
# emotional.activities.create([{name:"Setting healthy and clear boundaries to protect your energy."},{name:"Spending time by yourself with no distractions."},{name:"Journaling your feelings."},{name:"Speaking to a therapist."},{name:"Having a good cry."},{name:"Practicing self-love."},{name:"Writing down positive affirmations."},{name:"Asking for help."}])

#environmental activities
# environmental.activities.create([{name:"Making your bed every morning."},{name:"Traveling for a change of scenery."},{name:"Tidying and organizing your workspace."},{name:"Decluttering your wardrobe regularly."},{name:"Heading to a coffee shop to work."},{name:"Exploring somewhere new."},{name:"Listening to music."},{name:"Setting a calm mood in the evenings."}])

#financial.activities
# financial.activities.create([{name:"Listening to financial or money-related news."},{name:"Investing in your future."},{name:"Setting financial goals for the year."},{name:"Using a money app to help you keep track of finances."},{name:"Saving money each month."},{name:"Dealing with debt head-on."},{name:"Writing down positive money affirmations."}])

#social.activities
# social.activities.create([{name:"Form new personal and professional relationships."},{name:"Stay connected to important people in your life."},{name:"Hanging out with a friend with zero distractions."},{name:"Messaging a friend to tell them why you are grateful for them."},{name:"Limiting time with negative people."},{name:"Reach out to support systems regularly."},{name:"Asking for help when needed."},{name:"Set healthy boundaries."},{name:"Ending relationships with toxic people."},{name:"Spend time with friends and family."},{name:"Building an engaged community online."},{name:"Writing letters to a friend."}])
 

#professional.activities
# professional.activities.create([{name:"Learning or developing skills that could help further your career."},{name:"Setting work boundaries with your coworkers and your boss."},{name:"Managing your time better so you can complete all your tasks promptly."},{name:"Planning your day, week or even month ahead of time - which would keep you on track and ensure you are less stressed about deadlines"},{name:"Finding a food and workable work-life balance."}]);

#spiritual.activities
# spiritual.activities.create([{name:"Meditation or breathwork."},{name:"Spending time in nature."},{name:"Going to a place of worship."},{name:"Yoga."},{name:"Mapping out your core values."},{name:"Dedicating time for self-reflection."},{name:"Manifestation."}]);
