import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';

const Content = () => {

const [sliderValue, setSliderValue] = useState(12);

useEffect(() => {
    showSliderValue();
}, [sliderValue]);

const showSliderValue = () => {

    slider_thumb.innerHTML = slider_input.value;

    const bulletPosition = (slider_input.value / slider_input.max);
    const space = slider_input.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = (bulletPosition * space) + 'px';
    slider_line.style.width = slider_input.value + '%';
}

const[values, setValues] = useForm({
    length: 6,
    lowercase: true,
    number: true,
    uppercase: true,
    symbols: true
})

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

return (
<>
    <div className='mainbox'>
        <div className='passwordbox'>
        <h3>shanmukh123#</h3>
        <button className='copybtn' style={{ marginLeft: '10px' }} onClick={() => {}}>copy</button>
        </div>
        <div className='gap'></div>
        <div className='selectionx'>
        <h3>Choose password length = {sliderValue}</h3>
    </div>
        <div className='selectionrange'>
            <div className="range-slider">
            <div id="slider_thumb" className="range-slider_thumb"></div>
            <div className="range-slider_line">
            <div id="slider_line" className="range-slider_line-fill"></div>
            </div>
            <input
            id="slider_input" className="range-slider_input" type="range" min="6" max="36"
            value={sliderValue}
            onChange={(e)=>setSliderValue(e.target.value)}
            />
        </div>
        </div>
        {/* CHECKBOXES */}
        <div className='selectionx'>
        <h3>Choose text, numbers & symbols.</h3>
        </div>
        <div className='selection'>
        {/* {checkboxData.map((checkbox, index) => {
            return (
                <div key={index}>
                    <input
                    type="checkbox"
                    checked={checkbox.state}
                    onChange={() => handleCheckboxChange(index)}/>
                    <label>{checkbox.title}</label>
                    </div>)
        })} */}
        <input type='checkbox' id='lowercase' name='lowercase' checked={values.lowercase} onChange={setValues} />
        <label htmlFor='lowercase'>Lowercase</label>
        <input type='checkbox' id='number' name='number' checked={values.number} onChange={setValues} />
        <label htmlFor='number'>Numbers</label>
        </div>
        <div className='selection'>
        <input type='checkbox' id='uppercase' name='uppercase' checked={values.uppercase} onChange={setValues} />
        <label htmlFor='uppercase'>Uppercase</label>
        <input type='checkbox' id='symbols' name='symbols' checked={values.symbols} onChange={setValues} />
        <label htmlFor='symbols'>Symbols</label>
        </div>
    <div className='gap'></div>
        <button className="genbtn">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>
    <span className="text">GENERATE</span>
    </button>
    <div className='gap'></div>
    <div className='selectionx'>
            <h3>Strength: Medium</h3>
        </div>
</div>
<div className='gap'></div>
<div className='gap'></div>
</>
);
}

export default Content;