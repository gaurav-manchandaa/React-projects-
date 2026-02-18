import imgsrc from '../assets/react-core-concepts.png'

const words =['Fundamental','crucial','core'];
function giverandom (max){
    return Math.floor(Math.random()*max);
}

export default function Header (){
    const description = words[giverandom(3)];
    return(
        <header>
        <img src={imgsrc} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}