const urlparams=new URLSearchParams(window.location.search);
const code=urlparams.get('code');
const codee=document.getElementById('h2')
codee.innerText=code;
