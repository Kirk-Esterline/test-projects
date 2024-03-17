# test-projects
**A repo for testing portions of code for projects I am working on**

## Interactive Gallery

The aim with this text code is to create an image gallery, where the hero image and description changes based on the gallery image that was clicked. 

**How it works**
Event listeners were added to each of the gallery images and when clicked a function is called that changes the 'src' of hero image. Additionally 'innerText' is added to the description 'p' element when different gallery images are clicked on.

**What I've learned**
1. I learned to be less specific about the use of '.this' which allowed for more flexibilty. For example in main.js newImage is defined as 'this'. Originally it was defined as 'this.src' which worked fine, but it required a new binding to be declared to target different parts of the element that was clicked. By being less specific and defining newImage as simply 'this' only one binding is needed and all the attributes of newImage can be accesssed, for example newImage.src or newImage.alt
