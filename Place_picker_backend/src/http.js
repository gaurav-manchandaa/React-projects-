// in this file we will make an call to the backend server

export async function fetchplaces() {
  const response = await fetch("http://localhost:3000/places");
  const respData = await response.json();
  if (!response.ok) throw Error("an error has been occured");
  return respData.places;
}

export  async function UpdateuserPlaces(places){
    const response = await fetch ("http://localhost:3000/user-places",{
        method: "PUT",
        body : JSON.stringify({places}),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
  
    
    if (!response.ok) throw Error("unable to put data on the server ");
    const resData = await response.json();
    return resData.message;
}
  


export async function Initialpickedlocation (){
    const response = await fetch("http://localhost:3000/user-places");
    if (!response.ok) throw Error("unable to fetch data");
    const resData = await  response . json();
    return resData;
}
// now in this i have to make request to post data on the server
// this fetech method by default has an method is equal to get
// but it can be changed to in all crud operations that are available

// this api would only receive an json data in it
// and though we have to send an json data on it
