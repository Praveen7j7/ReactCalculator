import React, { useState } from 'react'

export default function Calculator() {

  const [inputValue,setInputValue]=useState(0);

  function handler(e){
    // debugger
    const value = e.target.innerText;
    setInputValue((prev)=>prev+value)

    // const inputField = document.querySelector('input[type="text"]');
    // if (value === 'AC') {
    //   inputField.value = '';
    // } else if (value === 'CE') {
    //   inputField.value = inputField.value.slice(0, -1);
    // } else if (value === '=') {
    //   try {
    //     inputField.value = eval(inputField.value);
    //   } catch (error) {
    //     inputField.value = 'Error';
    //   }
    // } else {
    //   inputField.value += value;
    // }
  }

  const onClickHandleClear=()=>{
    setInputValue(0)
  }

  const onClickAddOperation=()=>{
    setInputValue(prev=>" "+prev+"+")
  }

  const onClickSubstractOperation=()=>{
    setInputValue(prev=>prev+"-")
  }
  const onClickMultiplyOperation=()=>{
    setInputValue(prev=>prev+"*")
  }
  const onClickDivideOperation=()=>{
    setInputValue(prev=>prev+"/")
  }
  const onClickSquareRootOperation=()=>{
    setInputValue(prev=>"sqrt"+prev)
  }
  const onClickSinOperation=()=>{
    setInputValue(prev=>"sin"+prev)
  }
  const onClickCosOperation=()=>{
    setInputValue(prev=>"cos"+prev)
  }
  const onClickTanOperation=()=>{
    setInputValue(prev=>"tan"+prev)
  }
  const onClickLogOperation=()=>{
    setInputValue(prev=>"log"+prev)
  }
  const onClickLnOperation=()=>{
    setInputValue(prev=>"ln"+prev)
  }
  const onClickExpOperation=()=>{
    setInputValue(prev=>"exp"+prev)
  }
  const onClickPiOperation=()=>{
    setInputValue(prev=>prev+"pi")
  }
  const onClickEOperation=()=>{
    setInputValue(prev=>prev+"e")
  }
  const onClickPowerOperation=()=>{
    setInputValue(prev=>prev+"^")
  }
  const onClickFactorialOperation=()=>{
    setInputValue(prev=>prev+"!")
  }

function ass(d)
{
  num1=1;
  num2=2;
  d=num1=num2;
}
  const onClickOutput=()=>{
const numbers = inputValue.match(/\d+(\.\d+)?/g);

const numberOne = numbers[0];
const numberTwo = numbers[1];


 const operationRegex = /(sqrt|sin|cos|tan|log|ln|exp|pi|e|\+|\-|\*|\/|\.|\!|\^)/;
console.log({numberOne,numberTwo,operationRegex,inputValue})
//switch case for operation
const operation = inputValue.match(/(sqrt|sin|cos|tan|log|ln|exp|pi|e|\+|\-|\*|\/|\.|\!|\^)/g)[0];
switch (operation) {
  case '+':
  
    // inputValue=numberOne+numberTwo
    let temResult=Number(numberOne)+Number(numberTwo);
    setInputValue(temResult  )
    break;
  case '-':
    let temResulti=Number(numberOne)-Number(numberTwo);
    setInputValue(temResulti  )
    break;
  case '*':
    let temResultin=Number(numberOne)*Number(numberTwo);
    setInputValue(temResultin  )
    break;
  case '/':
    let temResultini=Number(numberOne)/Number(numberTwo);
    setInputValue(temResultini)
    break;
  case 'sqrt':
    let temResultinin=Math.sqrt(Number(numberOne));
    setInputValue(temResultinin)
    break;
  case 'sin':
    let temResultininy=Math.sin(Number(numberOne));
    setInputValue(temResultininy)
    break;
  case 'cos':
    let temResultininyi=Math.cos(Number(numberOne));
    setInputValue(temResultininyi)
    break;
  case 'tan':
    let temResu=Math.tan(Number(numberOne));
    setInputValue(temResu)
    break;
  case 'log':
    let temResu1=Math.log10(Number(numberOne));
    setInputValue(temResu1)
    break;
  case 'ln':
    let temResu2=Math.log(Number(numberOne));
    setInputValue(temResu2)
    break;
  case 'exp':
    let temResu3=Math.exp(Number(numberOne));
    setInputValue(temResu3)
    break;
  case 'pi':
    let temResu4=Math.PI;
    setInputValue(temResu4)
    break;
  case 'e':
    let temResu5=Math.E;
    setInputValue(temResu5)
    break;
  case '^':
    let temResu6=Math.pow(Number(numberOne),Number(numberTwo));
    setInputValue(temResu6)
    break;
  case '!':
    let temResu7=1;
    for(let i=1;i<=Number(numberOne);i++)
    {
      temResu7*=i;
    }
    setInputValue(temResu7)
    break;
  case 'AC':
    setInputValue(0)
    break;
  case 'CE':
    setInputValue(inputValue.slice(0, -1));
    break;

  default:
    console.log("Invalid operation");
    setInputValue("Invalid operation")
    break;
}

    // setInputValue();
  }
  const buttons =[
    {value:"AC",onClick: onClickHandleClear},
    {value:"CE",onClick: onClickHandleClear},
    {value:"1",onClick: handler},
    {value:"2",onClick: handler},
    {value:"3",onClick: handler},
    {value:"4",onClick: handler},
    {value:"5",onClick: handler},
    {value:"6",onClick: handler},
    {value:"7",onClick: handler},
    {value:"8",onClick: handler},
    {value:"9",onClick: handler},
    {value:"+",onClick: onClickAddOperation},
    {value:"-",onClick: onClickSubstractOperation},
    {value:"*",onClick: onClickMultiplyOperation},
    {value:"/",onClick: onClickDivideOperation},
    {value:"sqrt",onClick: onClickSquareRootOperation},
    {value:"sin",onClick: onClickSinOperation},
    {value:"cos",onClick: onClickCosOperation},
    {value:"tan",onClick: onClickTanOperation},
    {value:"log",onClick: onClickLogOperation},
    {value:"ln",onClick: onClickLnOperation},
    {value:"exp",onClick: onClickExpOperation},
    {value:"pi",onClick: onClickPiOperation},
    {value:"e",onClick: onClickEOperation},
    {value:"^",onClick: onClickPowerOperation},
    {value:"!",onClick: onClickFactorialOperation},
    {value:"0",onClick: handler},
    {value:"=",onClick:onClickOutput}
  ]

 
  return (
    <>

        <h1 className='bg-blue-400 h-15 w-110 text-5xl font-medium italic px-1 py-1 my-1 rounded '>React Calculator</h1>
       <div className='rounded h-140 w-110 gap-2 border-2 justify-around items-center bg-slate-200 flex flex-wrap'>
            <input value={inputValue} type="text" className='border-2 text-5xl rounded h-20 w-103 px-1 py-1 my-1' />

            <div className='grid grid-cols-4 gap-2'>
            {buttons.map((button, index) => (
              <button key={index} onClick={button.onClick} className='border-2 rounded h-13 w-24 px-1 py-1 bg-blue-200 hover:bg-slate-400'>
                {button.value}
              </button>
            ))}

          
            
            </div>
        </div>

    </>
  )

}