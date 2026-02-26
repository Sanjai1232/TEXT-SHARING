  let currentMode = 'text';
const btn=document.getElementById('btn');
const fbtn=document.getElementById('fbtn');
        function switchTab(mode) {
            currentMode = mode;
            const buttons = document.querySelectorAll('.tab-btn');


    buttons.forEach(btn => {
        btn.classList.remove('active');
    });



    event.target.classList.add('active')
           if(currentMode==="text"){
            document.getElementById('text-area').style.display = 'block';
            document.getElementById('fileshare').style.display = 'none';
           }else{
            document.getElementById('text-area').style.display = 'none';
            document.getElementById('fileshare').style.display = 'block';
           }
        }
const textInput=document.getElementById('textInput');

const shareResult=document.getElementById('shareResult');



btn.onclick=async()=>{
    const text=textInput.value;
    const obj={ text:text};
    console.log(obj);
    try{
        const response=await fetch('http://localhost:3000/update',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
        },
                body:JSON.stringify(obj),});
        const data=await response.json();
       window.location.href=`result.html?code=${data.code}`;
    console.log(data.code);
    }catch(error){
        console.error('Error:',error)}}



   const gbtn=document.getElementById('getbtn')
      const result=document.getElementById('result') 
      const gcode=document.getElementById('gcode') 
      gbtn.onclick=async()=>{
               let codeValue=gcode.value;
      const data=await fetch(`http://localhost:3000/getdata?code=${codeValue}`)
      const res=await data.json();
        console.log(res);
        // alert("wait")
      const dataa=res.content.text
      window.location.href=`ss.html?code=${codeValue}`
      }


fbtn.onclick=async(e)=>{
    e.preventDefault();
    const fileInput=document.getElementById('fileInput');
    const file=fileInput.files[0];
    const formData = new FormData();
        formData.append('file', file);
        const res=await fetch('http://localhost:3000/uploadfile', {
            method: 'POST',
            body: formData,});
        const data=await res.json();
        console.log(data.msg);
        console.log(data.code);
        window.location.href=`result.html?code=${data.code}`;
}