export default function Tabs({children , button,Buttoncontainer="menu"}){
    return( <>
    <Buttoncontainer>{button}</Buttoncontainer>
    {children}
    </>

    )
}

// this Buttoncontainer is actiing like the wrapper 
// by this we can send set a dynamic content of the wrapper element 


// we can give a prop a default value just by setting up the name on it 

// just we have done this on the Buttoncontainer
