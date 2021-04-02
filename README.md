# Purple Sunset CSS Animation
### Description
- I wanted to explore creating a purple palette and get more familiar with svg and css animations. I also wanted to practice duplicating html elements with JavaScript. I did the cloud svg in Inkscape, which is the first I draw a svg.
- You can see the animation in this [Codepen](https://codepen.io/gracemarod/pen/vYyvKXd)
- If you really want to see it in your own local enviorment, download the repo and drag and drop the index.html in a browser or open it with 
`python -m SimpleHTTPServer`


### Functions
1) cloudCreator(div1, div2, div1Container, cloudReflectionClass, nameId,  maxObs, addScale, addTransformation, animationTime)
    This functions takes two div elements and their div container and creates *maxObjects* amount of cloud elements and their reflections. Its uses *nameId* and adds it the iteration number to create a unique id to each element. *addScale* refers to the scale transformation that's added to the small clouds specifically, since changing the transformation in JS overrides the transformation given to the class in the css stylesheet. 
    *addTransformation* adds a new transform to the small clouds reflections.
    *animationTime can be used to change the speed which the clouds would move.

2) waterReflectorCreator(id, reflDiv, divCont, maxRefls, xCoord, yCoord,color)
    This function creates the sun light reflections, which are just 5px lines made with css. The function takes one css element of a specific width and duplicates it *maxRefls* amount of times. All the lines are added to the *reflection* element. 
    Similiar to *cloudCreator*, the parameter *id* is a string that is used to create a unique id to each element by adding the iteration number. *reflDiv* id the element that is being duplicating with clonenode and then appended it to the *divCont* element. *xCoord* and *yCoord* are used to move each line in different coordinates.
    *color* is a string to add a different color to each iteration of line elements. 
    

