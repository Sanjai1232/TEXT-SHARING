  let currentMode = 'text'; // Default mode

        function switchTab(mode) {
            currentMode = mode;

            // Update Buttons
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Update Inputs
            document.querySelectorAll('.input-group').forEach(group => group.classList.remove('active'));
            document.getElementById(mode + '-mode').classList.add('active');
            
            // Clear the input of the inactive mode to ensure strict "one at a time"
            if(mode === 'text') {
                document.getElementById('fileInput').value = ""; 
            } else {
                document.getElementById('textInput').value = "";
            }
        }
const textInput=document.getElementById('textInput');

const shareResult=document.getElementById('shareResult');
const btn=document.getElementById('btn');
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
        console.log(data.msg);
        console.log(text);
        shareResult.innerText=`Your Generated Code is: ${data.code}`;
        
    }catch(error){
        console.error('Error:',error)}}



   const gbtn=document.getElementById('getbtn')
      const result=document.getElementById('result') 
      const gcode=document.getElementById('gcode') 
     
      gbtn.onclick=async()=>{
               let codeValue=gcode.value;
      const data=await fetch(`http://localhost:3000/getdata?code=${codeValue}`)
      const res=await data.json();
      console.log(res.msg);
      
      }