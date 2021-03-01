
const getImage = async() => {

    try {
        const apikey = 'hsKMZi0taCio6AxAeEagMRSdA2qVkeLm';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const{url}=data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error)
    }

   
}
 
getImage();


