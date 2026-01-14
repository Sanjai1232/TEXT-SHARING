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

        function generateCode() {
            // This is just a simulation of how you might handle the data
            const resultDisplay = document.getElementById('shareResult');
            
            if (currentMode === 'text') {
                const textVal = document.getElementById('textInput').value;
                if(!textVal) { alert("Please enter text"); return; }
                console.log("Uploading Text:", textVal);
            } else {
                const fileVal = document.getElementById('fileInput').files[0];
                if(!fileVal) { alert("Please select a file"); return; }
                console.log("Uploading File:", fileVal.name);
            }

            resultDisplay.innerText = "1234 (Simulated Code)";
        }