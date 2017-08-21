![nimesh_avatar](http://i.imgur.com/HMXOMqat.jpg)![ga_cog_large_red_rgb](http://i.imgur.com/bZJFQqb.png)

---
#Project [One]

---

##Title
###FInal Frontier
Second project for General Assembly WDI27, London.

##Installation & Setup
- Download or clone the repo
- `yarn` to install dependencies
- `gulp` to compile the source code and open in browser

You can clone or download the code from my GitHub repo [here.](https://github.com/n2kp/WDI27-London-Project-One-)

##Description
Final Frontier is a website created for the amateur and professional astrophotography community. It is similar to Instagram, but purely for images for stars, galaxies, nebulas, planets, auroras, comets/astroids and the night sky in general.

![final_frontier_home_screen](http://i.imgur.com/voHhkpB.png)

For the user to upload images, they must be logged into the site as non-registered users are unable to do anything. Users can register through the site using just a name, email address and password. However, I have also included an OAuth for Instagram so the user does not need to register as a new user if they want to use the site.

![final_frontier_list_index](http://i.imgur.com/V5iKeuk.png)

Upon entering the site, the user lands on the home page which features the same video background as when they first landed on the page prior to login/registration. To view the images, there are two option, the list index and the map index. 

The reason why there are two options containing the same information is because the nature of astrophotography required the photographer to know what celestial bodies are available to view from their location at an given time of the year. Some bodies are not visable at certain times of the year in certain places around the world, so the map index allows the user to view images taken near their location. The list index is simply to view all the images available on the site.

![final_frontier_map_index_with_infowindow](http://i.imgur.com/39pT8br.png)

Clicking on any of the images in the list index or the 'more information' tag in the info window off the map will take you to the individual post. Once there, the image again is available in a slightly large resolution as well as the details of the post. Clicking on the image will also open it in a model to view it in a better background. The post also contains a map elemant which shows the location at whcih the image was taken and the date when it was taken. 

![final_frontier_image_modal](http://i.imgur.com/WwVbszq.png)

Comments can also be made about the post. Deletion of comments can only be done by the original poster. The original user who posted the image can edit the details of the post, as well as leave comments. If the user isn't the original poster, then all they can do is make comments.

![final_frontier_comment_section](http://i.imgur.com/A63ELZ8.png) 

To create a new post, the user needs to navigate to the new image nav bar icon. Once there, they are required to fill in a form with Post name, tyoe of image, image upload, date taken, description and location the image was taken. The type of image is a drop down option selector, the date is a calendar input and the location is simply done by dropping a pin onto a map.

The final bit of the site to mention is the user profile part. Clicking the user icon in the navbar takes the user to their profile page. From here they can edit or delete their profile (trying to delete the user profile will bring up a model to confirm the deletion so users don't acidentally delete their profile on pressing the button), as well as view data about their location bought in from a weather API. There is also another API which brings in data from NASA's services to show a Astronomy Photograph of the day.

![final_frontier_user_cloud_forecast](http://i.imgur.com/iHEmc2y.png)

The weather API that I used was the OpenWeather service. They provide information regarding the cloud coverage which I used along with the users location (via Geolocation on Google Maps) to provide the user with a 5 day forecast to show what their chances of star gazing is.

##Technologies Used
The technologies that were used in creating this project are as follows:

- HTML5
- SASS
- JavaScript ES6
- JQuery 3.10
- Gulp
- Yarn
- Git
- GitHub
- MongoDB
- Mongoose
- Express
- Amazon Web Services (S3 Bucket)
- Bulma

##Challenges
The biggest challenge I faced in creating this site was trying to find an API related to astronomy and cosmology that I could use to add value to the site. 

NASA has numerous APIs available but of the ones that were even slightly relevant, most were extermely advance, such as the Near Earth Object Tracking. Rather disappointingly there were no publicly available APIs which provided data about stars and planets which would have been good. So I decided to switch to the weather side of astronomy and the ability to star gaze. I finally decided on the Open Weather API because it gave a good advance 5 day forecast, accurate cloud coverage data as well as weather icons to use to display visually.

The challenge was that Open Weather's 5 day forecast gave information on a 3 hour interval basis, which is great for general weather forecasting, but specifically for cloud coverage during the night hours, wasnt great. So I had to work out a way to extract only the data for the 9pm, midnight and 3am time slots as these are the times of day when there is most likely to be dark and hence best time to see the stars.

Another challenge was Google Maps API. With this being the first time I used Google Maps, it was sometimes difficult to understand how to implement the features I wanted to. Becasue I had three different kind of maps (geolocation, single pin drop and multiple pin drop with infowindow), trying to make them all work together was a challenge, but eventually it was working.

##Going Forward

Going forward there are certain features and functions I would like to add to the game in the future.

These are:

- Putting a filter system on the map and list index pages so that users can filter the results according to type of image or date when the image was taken.
- Introduce another API which is more closely related to stars and the cosmos, allowing users to get more information about the images they are uploading. I was disappointed to discover that there wasn't any APIs available for regular users and whatever APIs there were, were either one extreme or another, in that they were either very basic or very advance.
- Have the ability for different users to go to other users profiles to see their activiy and see what posts they have created.

## Using the Site
Final Frontier is available to view and register on [here.](https://pacific-taiga-22359.herokuapp.com/)


