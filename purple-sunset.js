

//From https://stackoverflow.com/a/56869637
const isColliding = (div1, div2) => {

    let svg1_height = div1.querySelector('svg').clientHeight;
    let d1_distance_from_top = svg1_height + div1.getBoundingClientRect().top;
    const notColliding = d1_distance_from_top >= div2.offsetTop;
    return notColliding;
  };
  
  const Cloud0 = document.getElementById('Cloud0');
  const CloudReflection0 = document.getElementById('Cloud-Reflection0');
  
  const CloudSmall0 = document.getElementById('Cloud-Small0');
  
  const cloudContainer = document.getElementById('clouds-container');
  const mergeLine = document.getElementById('merge-line');
  
  let smallReflectionTransform = 'translate(0,5vh) rotate(180deg) scaleX(-1) scaleY(0.25)';
  const cloudCreator = (div1, div2, div1Container, div2Container, cloudReflectionClass, nameId, maxObjects,addScale,addTransformation, animationTime ) => {
    
  let addX = 0;  
  let addY = 0;
  let newDelay = 0;
  let animTime = animationTime ; 
  let mergeLineBool = false; 
    for (var i = 1; i <= maxObjects;i++){
      let newId = nameId + i;
      let newReflectionId = nameId+'-Reflection'+i;
      let newClass = div1.cloneNode(true);
      let newCloudReflection = div2.cloneNode(true);
  
      newClass.id = newId;
      newCloudReflection.id = newReflectionId;
      //I think this is making that grow effect in the clouds, fix it with the margin-left: 200px 
      let newClassAnim = "animateCloud "+animTime+"s linear "+newDelay+"s infinite";
      let newTransform = "translate(0,"+addY+"px) "+addScale;
      newClass.style.transform = newTransform;
      newClass.style.webkitTransform = newTransform;
      newClass.style.moxTransform = newTransform;
      
      newClass.style.animation = newClassAnim;
      newClass.style.webkitAnimation = newClassAnim;
      newClass.style.mozAnimation = newClassAnim;
      
      newCloudReflection.style.transform = addScale+addTransformation;
      
      newCloudReflection.style.animation = newClassAnim;
      newCloudReflection.style.webkitAnimation = newClassAnim;
      newCloudReflection.style.mozAnimationn = newClassAnim;
  
      newCloudReflection.setAttribute('class',cloudReflectionClass);
      
      document.getElementsByClassName(div1Container)[0].appendChild(newClass);
      document.getElementsByClassName(div2Container)[0].appendChild(newCloudReflection);
    addX += 100;
    addY += 100;
    newDelay +=5;
  
    if(isColliding(newClass, mergeLine)) {
        addY = 0;
        newClass.remove();
        newCloudReflection.remove();
      }
    }
  }
  cloudCreator(Cloud0,CloudReflection0,'clouds-container','clouds-reflection-container','cloud-reflection','Cloud',7,"","", 60);
  
  cloudCreator(CloudSmall0, CloudReflection0,'clouds-small-container', 'clouds-reflection-container','cloud-small-reflection', 'Cloud-Small', 7,"scale(0.5)",smallReflectionTransform, 70);
  
  
  const reflectionsCont = document.getElementById('reflection');
  const largeReflection1 = document.getElementById('refl');
  const medReflection1 = document.getElementById('refl-med');
  const shortReflection1 = document.getElementById('refl-short');
  const shorterReflection1 = document.getElementById('refl-shorter');
  
  const waterReflectionCreator = (id, reflDiv, divCont, maxRefls, xCoord, yCoord, color) => {
    let minX = xCoord;
    let reachMaxLeft = false;
    
    let minY = yCoord;
    let maxY = 20;
    
    let addHeight = 40;
    let newLeft = minX;
    let newTop = minY;
  
    for(var i = 0; i <= maxRefls; i++){
      let newId = id + i;
      let newClass = reflDiv.cloneNode(true);
      newClass.id = newId;
  
      newClass.style.top = newTop+"vh";
      newClass.style.left = newLeft+"vw";
      newClass.style.width = addHeight+"vw";
      newClass.style.backgroundColor = color;
      
      newClass.style.animation = 'nudge 2s linear infinite alternate';
      newClass.style.webkitAnimation = 'nudge 2s linear infinite alternate';
      newClass.style.mozAnimation = 'nudge 2s linear infinite alternate';
      divCont.appendChild(newClass);
     
      newLeft += 2;
      newTop += 5;
      addHeight -= 5;
      
    }
  };
  
  waterReflectionCreator('refl',largeReflection1,reflectionsCont, 8, 30, 2, 'Magenta');
  waterReflectionCreator('refl-med-',medReflection1,reflectionsCont, 8, 35, 3, 'White');
  waterReflectionCreator('refl-small-',shortReflection1,reflectionsCont, 8, 30, 4,'MediumOrchid');
  waterReflectionCreator('refl-smaller-',shorterReflection1,reflectionsCont, 8, 32, 5, 'White');
  waterReflectionCreator('refl2',largeReflection1,reflectionsCont, 8, 28, 6, 'Violet');