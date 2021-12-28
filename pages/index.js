import { useState } from 'react';


function Home() {
    return (
        <div>
            <label>Nome<input type="text" id="UserName" name="Name" /></label>
            <label>Endereço<input type="text" id="User" name="Name" /></label>
            <p></p>
            <div className="radio-buttons">
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
        />Massa branca
        </div>
        <div className="radio-buttons">
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
        />Massa de Chocolate
        </div>
        <p></p>
        <div class="container">
            <h3>Kilos</h3>
        </div>
        <div class="stepper-input">
      <button class="btn btn-left">-</button>
      <input type="text" placeholder="2" class="input-box"/>
      <button class="btn btn-right">+</button>
   </div>
        </div>
    )
    }
export default Home