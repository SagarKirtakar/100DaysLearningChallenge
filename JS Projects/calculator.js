 let currentExpression = '';
        const display=document.getElementById('display');

        function clearDisplay(){
            currentExpression='';
            display.textContent='0';
        }
        function deleteLast(){
            if(currentExpression == 'Error'){
                clearDisplay();
                return;
            }
            currentExpression=currentExpression.slice(0,-1);
            if(currentExpression===''){
                display.textContent='0';
            } else{
                display.textContent=currentExpression;
            }
        }
        function calculate(){
            try{
                //50%2 --> 50/100* 2 -->1
                let finalExpression=currentExpression.replace(/%/g,'/100*');
                if(finalExpression===''){
                    display.textContent='0';
                    return ;
                }
                let result=eval(finalExpression);
                if(!isFinite(result)){
                    currentExpression='Error';
                    display.textContent='Error';
                    return;
                }
                currentExpression=parseFloat(result.toFixed(10)).toString();
                display.textContent=currentExpression;

            } catch(error){
                currentExpression='Error';
                display.textContent='Error';
            }
        }
        function appendValue(value){
            if(currentExpression==='Error'){
                currentExpression='';
            }
            if(value==='AC'){
                clearDisplay();
            } else if(value==='DEL'){
                deleteLast();
            } else if(value=== '='){
                calculate();
            } else {
                currentExpression+=value;
                display.textContent=currentExpression;
            }
                        
        }
        const buttons=document.querySelectorAll('#calculator button');

        buttons.forEach( button=>{ 
            button.addEventListener('click',()=>{
                const value=button.getAttribute('data-value');
                appendValue(value);
            });
        });
        
        clearDisplay();