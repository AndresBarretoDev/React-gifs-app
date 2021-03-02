export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=r69u9hrjKaoKY2fvKhj6qc0C8LK88FbW`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs
}