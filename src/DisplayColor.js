import React from 'react'

// With inline css, create a box
// Set the style color to the color value (if available) (ternary)

const DisplayColor = ({ color, hex }) => {
return (
    <section
      style={
        {
          backgroundColor: color,
          flex: 1,
          padding: 20,
          marginTop: 20,
          borderRadius: 25,
          width: "auto"
        }
      }>
          <p style={{color: color == "black" ? "white" : "black"}}> {/* Check if color is equal to */}
          {color ? color : "No Value"} {/* Check if color is not null */}
          </p>
          <p>
            {hex ? hex : null}
          </p>
    </section>
  );
};

// Add in default props
DisplayColor.defaultProps = {
  color: "Empty Color Value"
}

export default DisplayColor