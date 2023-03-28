# SELF/FULL

Are you practicing self-care? If not, you should be! Self-care does nothing but benefit you and your wellbeing. In America more than 30% of adults deal with mental health issues. Self-care has been clinically proven to help alleviate those issues. Self-care isn't over indulgence or selfish. There's nothing selfish about wanting to be the best version of yourself! Self/Full is the one stop place for all your self-care needs. You can learn more about what it is, how you can incorporate it in your daily life, and learn from others also working on their self-care. 

## SETUP

First clone this repository by copying the SSH key and entering it in your terminal with 'git clone * *paste SSH key* *'. Then navigate to that folder's directory and open it up using your preferred code editor, I prefer Visual Studio Code.\

Once you're there you'll need to set up your backend and frontend.\
This project has a Rails backend and a React frontend.\
For the **backend**:\
First run *bundle install* to install all the backend dependencies.\
To create the database, *rails db:create*.\
To create the tables and seed our data, *rails db:migrate:seed*.\
> Best practice, when done seeding feel free to comment out the data in the seeds file (located in the db folder) to ensure none of the data is duplicated.

Then to run the server, *rails s*.

For the **frontend**:\
First run *npm install --prefix client* to install all the frontend dependencies (--prefix client because the frontend files are in the client folder).\
Then run *npm start --prefix client* to start the frontend server.\
This should open up the front end in your browser, and you should see the landing page **Self/Full**!\

## USER EXPERIENCE

In order to have access to Self/Full and all its helpful information, you'd need to signup for an account if you don't already have one. Press the Login button on the top right corner, input your login info or press the signup button on the bottom to register.\
Once filled out correctly, you'll be navigated to your *Profile*. Here you'll see your bio displayed as well as a list of the experiences you've made. You can click on each experience to go to it's category display page.\ 

The next link on the navigation bar is to *Categories*. This shows a list of the 8 forms of self-care categories. You can click on each one to show it's details. This is where you'll get a list of the activities for that category, all the experiences that user's have written for that category, and a list of resources based on the goals of that category. On the experiences list you're able to add a new experience, and edit/delete existing ones you've created.\ 

The last link on the navigation bar is to *Activities*. This page shows a list of all the activities, for all categories. You're able to search by keyword, sort in alphabetical or reverse alphabetical order, and lastly filter through which categories you'd like to view. There is a refresh button on the right hand side to refresh back to default, which is showing the activities for all categories in alphabetical order.\ 


#### ADDITIONAL NOTES

I created this page to spread awareness about the country's overwhelming issue with mental health. Many people still don’t believe in mental health issues like depression and anxiety to be real, and some people think the best way to get over it is to ignore it. This page is to show how easily someone can help better their mental health just by giving themselves some time and understanding. Now although, self-care is not a cure all answer, it is definitely improving lives of many and can improve yours as well. Learn to be Self/Full!
