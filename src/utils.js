export const convertblobToImage = (buffer)=>{
    console.log(  btoa(String.fromCharCode(...new Uint8Array(buffer))))
    return   btoa(String.fromCharCode(...new Uint8Array(buffer)));

}