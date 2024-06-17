# test-projects
**A repo for testing portions of code for projects I am working on**

## Video-Banner

This is a proof of concept for a tool that would allow a video banner or caption to be added and edited without the need to edit the videos primary file. 

**How it works**
Similar to the image banner project, this banner works using the absolute position property to move a text element on top of a 

## Image Banner

This is a test of adding text on top of an image. 
The end goal is a plugin or JS script that will add a banner over an image. For instance adding a 'new release' banner over a product image. 

**How it works**
This works by using the 'position' properties in CSS. By giving the containing div a postion of 'relative' it allowed descendant elements to be positioned in relation to that containing elements. When the 'span' element is offset from its original position, it is now positioned in relation to the containing div.

**Future Plans**
The plan is to make this a custom WordPress plugin that can be added to images to display a chosen banner on the image. 

## Interactive Gallery

This test code aims to create an image gallery, where the hero image and description change based on the gallery image that was clicked. 

**How it works**
Event listeners were added to each of the gallery images and when clicked a function is called that changes the 'src' of the hero image. Additionally 'innerText' is added to the description 'p' element when different gallery images are clicked on.

**Recent Upgrades**
- The item numbers and descriptions are now all incorporated into the img element. Data elements were added to the images which contain the necessary description text. The text contained in the data attribute is hidden until the gallery image is selected. At that point, the JS function reads the data text and adds it to the visible 'p' element in effect showing the image description. The item number works similarly, but the text is placed in a 'span' rather than a 'p' element.

**What I've learned**
1. I learned to be less specific about the use of '.this' which allowed for more flexibility. For example, in main.js newImage is defined as 'this'. Originally it was defined as 'this.src' which worked fine, but it required a new binding to be declared to target different parts of the element that was clicked. By being less specific and defining newImage as simply 'this' only one binding is needed and all the attributes of newImage can be accessed, for example, newImage.src or newImage.alt
2. I learned about the html data attribute during this project. The data attribute enables additional content to be added to an element without changing the way it behaves or is displayed. And, importantly 'data' can be accessed easily and cleanly by JS.
