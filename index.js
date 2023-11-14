const clickLeft = () => {
    const sliderItemNodes = document.getElementsByClassName('slider-item');
   
    let prevIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
     if (sliderItemNodes[i].classList.contains('selected')) {
      prevIndex = i - 1;
      if (prevIndex == -1) {
       prevIndex = sliderItemNodes.length - 1;
      }
     }
    }
   
    const [selectedNode] = document.getElementsByClassName('selected');

    selectedNode.classList.toggle('selected');
    sliderItemNodes[prevIndex].classList.toggle('selected');
   };



const clickRight = () => {
    const sliderItemNodes = document.getElementsByClassName('slider-item');

    let nextIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
     if (sliderItemNodes[i].classList.contains('selected')) {
      nextIndex = i + 1;
      if (nextIndex === sliderItemNodes.length) {
       nextIndex = 0;
      }
     }
    }      
    const [selectedNode] = document.getElementsByClassName('selected');    
    selectedNode.classList.toggle('selected');
    sliderItemNodes[nextIndex].classList.toggle('selected');
   };

   
   document.getElementById('left')
    .addEventListener('click', clickLeft);

    document.getElementById('right')
    .addEventListener('click', clickRight);