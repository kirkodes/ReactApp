import { useState } from "react";
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('thistle');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
    };
    const toggleColor = () => {
        color === 'white' ? setColor('steelblue') : setColor('white'); // ternary to check what the current value is, and setting it accordingly. We can toggle the color property of our div;s style between pink or white
    };
    const toggleBackgroundColor = () => {
        backgroundColor === 'thistle' ? setBackgroundColor('darkturquoise') : setBackgroundColor('thistle')
    };
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('60px') : setBorderRadius('5px');
    };
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }
    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string='This button toggles text and border color!' function={toggleColor} selectedStyle={color} />
                <FunctionalComponent string='Toggle the background color by clicking below!' function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                <FunctionalComponent string='The button below toggles to make the border radius rounder or squarer!' function={toggleBorderRadius} selectedStyle={borderRadius} />
                <FunctionalComponent string='Do you want the border solid or dashed?' function={toggleBorderStyle} selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
    );
};

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : { props.selectedStyle }</p>
        </div>
    )
};

FunctionalComponent.defaultProps = {
    string: 'this is wild',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style?'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle : PropTypes.string.isRequired
}