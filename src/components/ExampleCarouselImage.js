// src/components/ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text }) {
    return (
        <div style={{ height: '500px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>{text}</h3>
        </div>
    );
}

export default ExampleCarouselImage;
