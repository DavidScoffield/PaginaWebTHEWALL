const igLuis= document.getElementById('instagram__luis');
const facebookLuis= document.getElementById('facebook_luis')
const igDavid= document.getElementById('instagram__david');
const facebookDavid= document.getElementById('facebook__david');

const irRedSocial = (ulr) =>{ 
    window.open(ulr);
    // console.log(ulr)
};


igDavid.addEventListener('click', ()=>{
    irRedSocial('http://www.instagram.com/daviscoffield')
});

igLuis.addEventListener('click', ()=>{
    irRedSocial('https://www.instagram.com/luisvalentintroncoso/')
});

facebookDavid.addEventListener('click', ()=>{
    irRedSocial('https://www.facebook.com/davi.scoffield')
});

facebookLuis.addEventListener('click', ()=>{
    irRedSocial('https://es-es.facebook.com/luis.troncoso.92')   
});

