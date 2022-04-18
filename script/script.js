

    function playSound(e){
        //console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        if(!audio)  return; // stop the function from running all together
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        
        //console.log(key);
        // console.log(audio);
    }

    window.addEventListener('keydown', playSound);

    function removeTransition(e)
    {
        if(e.propertyName != 'transform') return; // skip if it's not a transform
        // console.log(e.propertyName);
        this.classList.remove('playing') // this -> the key div
    }


    // this two line are the most significant
    //insted of using setTimeInterval to close the transition style of the keys
    //we are using some other way that gives more flexibility 
    const keys = document.querySelectorAll(`.key`);
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));  
