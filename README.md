# test-projects
**A repo for testing portions of code for projects I am working on**

## Constant-Multiple-Videos

An attempt to get a string of videos to play one after another.
The backstory, a client wanted a constantly running loop of videos that could be displayed during a trade show. Several videos had been commissioned and hosted in different places. My goal was to create something that could be learned quickly and reused easily. This is my proof of concept for this project.

**How it works**
I used the video-banner project as a starting point and created a function that would use the setInterval() function to input an updated source into an iframe element.


**Future Attempts**
- Use the YouTube API and Vimeo API

**What I've Learned**
1. Autoplay is complecated
Rightfully, getting a video to autoplay is a tricky business with browsers being a gatekeeper preventing unwanted videos and auto from playing. But, by finding the right attributes to use in the iframe and in the src URL it is possible to get videos to autoplay.
2. The settimeout() method can react in unexpected ways.
When using the settimeout() method to load videos and allow them to play for the videos full length I have gotten unexpected play times. This could be user error and the wrong timeout time is being passed into the function, or it could be thrown off by the video load time, but the results are not quite what I expected them to be. 
3. There are multiple APIs that will likely provide this type of functionality, and trying to achive all of that in an iframe element is likely not the best way.

## Video-Banner

This is a proof of concept for a tool that would allow a video banner or caption to be added and edited without the need to edit the videos primary file. 

**How it works**
Similar to the image banner project, this banner works using the absolute position property to move a text element on top of an embedded video element. A simple JS function collects the value from inside the input field and displays it on top of the embedded video. 

**Future Plans**
- Add a feature to specify when during the video the banner or caption will be displayed. The first step would be to dig into the Vimeo API and see if there is functionality there for a delay. After that potentially use a delay within JS, or potentially use jQuerey to define when the video starts.
- Attempt to connect a second page to the main JS file to easily test how the two pages interact together

**What I've learned**
1. The flow of the code matters
Rushing to create a proof of concept caused me to write code that didn't work as intended. The syntax was correct, but the order of the code was not which lead to a variable not being reassigned as expected. After I moved the line of code that reassigned the variable to be inside the function rather than before, the code all worked as expected. 
2. Writing JavaScript within script tags
This is still an ongoing experiment, so my thoughts will likely change over time. Normally within the script tag in the HTML document I link to a separate JS file. As a way of experimenting, I added event listeners and functions inside the script tags so the files became all in one. I didn't achieve the result I wanted, but I have some new ideas to try now. For a proof of concept idea, I might try and do away with the .js file all together and write the necessary functions into the html documents.

## Image Banner

This is a test of adding text on top of an image. 
The end goal is a plugin or JS script that will add a banner over an image. For instance, adding a 'new release' banner over a product image. 

**How it works**
This works by using the 'position' properties in CSS. By giving the containing div a postion of 'relative' it allowed descendant elements to be positioned in relation to that containing elements. When the 'span' element is offset from its original position, it is now positioned in relation to the containing div.

**Future Plans**
The plan is to make this a custom WordPress plugin that can be added to images to display a chosen banner on the image. 
(A simple way to implement this is to convert the block to custom HTML and manually add a class to the 'figcaption' so the additional CSS classes will be applied)

## Interactive Gallery

This test code aims to create an image gallery, where the hero image and description change based on the gallery image that was clicked. 

**How it works**
Event listeners were added to each of the gallery images and when clicked a function is called that changes the 'src' of the hero image. Additionally 'innerText' is added to the description 'p' element when different gallery images are clicked on.

**Recent Upgrades**
- The item numbers and descriptions are now all incorporated into the img element. Data elements were added to the images which contain the necessary description text. The text contained in the data attribute is hidden until the gallery image is selected. At that point, the JS function reads the data text and adds it to the visible 'p' element in effect showing the image description. The item number works similarly, but the text is placed in a 'span' rather than a 'p' element.

**What I've learned**
1. I learned to be less specific about the use of '.this' which allowed for more flexibility. For example, in main.js newImage is defined as 'this'. Originally it was defined as 'this.src' which worked fine, but it required a new binding to be declared to target different parts of the element that was clicked. By being less specific and defining newImage as simply 'this' only one binding is needed and all the attributes of newImage can be accessed, for example, newImage.src or newImage.alt
2. I learned about the html data attribute during this project. The data attribute enables additional content to be added to an element without changing the way it behaves or is displayed. And, importantly 'data' can be accessed easily and cleanly by JS.
