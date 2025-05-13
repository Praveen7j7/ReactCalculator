import React from 'react'

export default function Calculator() {

  function handler(e){
    const value = e.target.innerText;
    const inputField = document.querySelector('input[type="text"]');
    if (value === 'AC') {
      inputField.value = '';
    } else if (value === 'CE') {
      inputField.value = inputField.value.slice(0, -1);
    } else if (value === '=') {
      try {
        inputField.value = eval(inputField.value);
      } catch (error) {
        inputField.value = 'Error';
      }
    } else {
      inputField.value += value;
    }
  }
 
  return (
    <>

        <h1 className='bg-blue-400 h-20 w-100 text-5xl font-medium italic px-1 py-1 '>React Calculator</h1>
     ooooooo   <div className='rounded h-120 w-100 gap-2 border-2 justify-around items-center bg-slate-200 flex flex-wrap'>
            <input type="text" className='border-2 rounded h-13 w-94 px-1 py-1 my-3' />ppp
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler}  >1</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >2</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >3</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >4</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >5</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >6</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >7</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >8</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >9</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >0</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >+</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >-</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >*</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >/</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >=</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >AC</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >CE</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >DEL</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >.</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >sqrt</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >sin</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >cos</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >tan</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >log</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >ln</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >exp</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >pi</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >e</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >!</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >^</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >(</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >)</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >sqrt</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >(</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >)</button>
            <button className='text-xl items-center justify-center font-serif rounded border-2 bg-blue-100 gap-4 h-12 w-12 px-1 py-1 mx-1 my-1'onClick={handler} >sqrt</button>
 
        </div> 

    </>
  )
}
