import React, { useEffect, useRef } from 'react';
export default function Video(props) {
    
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.play()
    }, []);

    return (
        <video 
            ref={videoRef}
            class={props.class} 
            playsinline 
            autoplay 
            muted 
            loop
            /*poster="placeholder.jpg"*/ 
            width="x" 
            height="y"
        >
            <source src={props.path} type="video/mp4" />
        </video>
    )
}