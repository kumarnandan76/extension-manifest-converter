console.log('Welcome to My Music ');
//insilize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');                  
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName:"Sri Ganeshay Namah1",filePath:"songs/1.mp3",converPath:"covers/1.jpg"},
    {songName:"Sri Ganeshay Namah2",filePath:"songs/2.mp3",converPath:"covers/2.jpg"},
    {songName:"Sri Ganeshay Namah3",filePath:"songs/3.mp3",converPath:"covers/3.jpg"},
    {songName:"Sri Ganeshay Namah4",filePath:"songs/4.mp3",converPath:"covers/4.jpg"},
    {songName:"Sri Ganeshay Namah5",filePath:"songs/5.mp3",converPath:"covers/5.jpg"},
    {songName:"Sri Ganeshay Namah6",filePath:"songs/6.mp3",converPath:"covers/6.png"},
    {songName:"Sri Ganeshay Namah7",filePath:"songs/7.mp3",converPath:"covers/7.jpg"},
    {songName:"Sri Ganeshay Namah8",filePath:"songs/8.mp3",converPath:"covers/8.jpeg"},
    {songName:"Sri Ganeshay Namah9",filePath:"songs/9.mp3",converPath:"covers/9.jpeg"},
    {songName:"Sri Ganeshay Namah10",filePath:"songs/10.mp3",converPath:"covers/10.jpeg"},
]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].converPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();

// Handal play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to Event
audioElement.addEventListener('timeupdate',()=>{
    
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
