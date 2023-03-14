
    function display(val)
    {
        const inputBox =  document.getElementById("result");
        inputBox.value = (inputBox.value + val);
    }
    function calculate()
    {
        const inputBox =  document.getElementById("result");
        const ans = eval(inputBox.value);
        inputBox.value = ans;
    }
    function cleareDisplay()
    {
        const inputBox =  document.getElementById("result");
        inputBox.value="";
    }
    function displayDoubleZero()
    {
        const inputBox =  document.getElementById("result");
        inputBox.value = inputBox.value+"00";
    }
    function removeElement()
    {
        const inputBox =  document.getElementById("result");
        inputBox.value = inputBox.value.slice(0,-1);
    }
    function displayMultiplicationButton()
    {
        const inputBox = document.getElementById("result");
        inputBox.value = inputBox.value+'*';  
    }
    function displaySubstractionButton()
    {
        const inputBox = document.getElementById("result");
        inputBox.value = inputBox.value+ '-';
    }
    
