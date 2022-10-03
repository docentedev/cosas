import { useRef, useEffect } from "react";

export const startWave = () => {
    const style = document.createElement('style');
    const text = document.createTextNode(`.__bigbang_wave_effect {
        position: absolute;
        background: rgb(255, 255, 255);
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: animate 1s linear forwards;
    }
    
    @keyframes animate {
        0% {
            width: 0px;
            height: 0px;
            opacity: 0.25;
        }
    
        100% {
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }`)
    style.appendChild(text)
    document.head.appendChild(style)
}

const applyWave = (element: any) => {
    element.classList.add('__bigbang_wave_container');
    element.addEventListener('click', function (e: any) {
        //let x = event.clientX - event.target.offsetLeft;
        //let y = event.clientY - event.target.offsetTop;
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;
        let rippleElement = document.createElement('span');
        rippleElement.classList.add('__bigbang_wave_effect')
        rippleElement.style.left = x + 'px';
        rippleElement.style.top = y + 'px';
        element.appendChild(rippleElement);
        setTimeout(function () {
            rippleElement.remove();
        }, 500);
    });
}

const useWave = () => {
    const ref = useRef<any>();

    useEffect(() => {
        if (ref.current && !ref.current.classList.contains('__bigbang_wave_container')) {
            applyWave(ref.current);
        }
    }, [ref])

    return ref;
}

export default useWave;
