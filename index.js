const calculate=()=>{
    const number=document.getElementById('num').value;
    const selectedOption=document.getElementById('sel');
    const oooo=sel.options[selectedOption.selectedIndex].value;
    celciusToFah=(num)=>{
        fahrenhiet=Math.round((num*9/5)+32);
        return fahrenhiet;
    }
    fahToCel=(num2)=>{
        celcius=Math.round((num2-32)*5/9);
        return celcius;
    }
    if(oooo=='cel'){
        let result=celciusToFah(number);
        document.getElementById('finalResult').innerHTML=`=${result}fahrehiet`;
    }else{
        let result=fahToCel(number);
        document.getElementById('finalResult').innerHTML=`=${result}celsius`;
    }
}

































