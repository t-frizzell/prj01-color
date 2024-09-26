import React from 'react'

// With inline css, create a box
// Set the style color to the color value (if available) (ternary)

const DisplayColor = ({ color }) => {
return (
    <header
      style={
        {
          backgroundColor: {color},
          flex: 1,
          padding: 20,
          marginTop: 20,
          borderRadius: 25,
          width: "auto"
        }
      }>
        {color}
    </header>
  );
};

export default DisplayColor