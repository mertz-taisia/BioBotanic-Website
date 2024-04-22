import React from 'react';

function CircularProgressBar({ strokeWidth, sqSize, percentage, irrigation }) {
  const color = irrigation ? "#4ACBFE" : "#FFE57F" ;
  // Outer circle radius
  const outerRadius = (sqSize - strokeWidth) / 2;
  // Inner circle radius - smaller than the outer radius
  const innerRadius = outerRadius - (strokeWidth * 1.5); // Adjust the multiplier as needed for design

  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const outerDashArray = outerRadius * Math.PI * 2;
  const innerDashArray = innerRadius * Math.PI * 2;
  const dashOffset = outerDashArray - outerDashArray * percentage / 100;

  return (
    <svg
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}>
        {/* Outer background circle */}
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={outerRadius}
          strokeWidth={`${strokeWidth}px`} />
        {/* Progress circle */}
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={outerRadius}
          stroke={color}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: outerDashArray,
            strokeDashoffset: dashOffset
          }} />
        {/* Inner background circle */}
        <circle
          className="circle-inner-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={innerRadius + 5}
          fill="#fff" // The fill color for the inner circle
          strokeWidth={`${strokeWidth / 4}px`} // Half the stroke width for the inner circle
          stroke="#eee" // Light stroke for the inner circle to simulate the gap
        />
        {/* Percentage Text */}
        <text
          className="circle-text text-5xl text-[#7E7E7E]"
          x="50%"
          y="50%"
          dy="-5" 
          textAnchor="middle"
          alignmentBaseline="central">
          {`${percentage}%`}
        </text>
        {/* Label Text */}
        
        {irrigation ? 
          (
            <text
              className="circle-text label-text text-[#7E7E7E]" 
              x="50%"
              y="50%"
              dy="30" 
              textAnchor="middle"
              alignmentBaseline="central">
              Soil Moisture
            </text>
            ):(
              <text
                className="circle-text label-text text-[#7E7E7E]" 
                x="50%"
                y="50%"
                dy="30" 
                textAnchor="middle"
                alignmentBaseline="central">
                Brightness
              </text>
          )
        };
    </svg>
  );
};

export default CircularProgressBar;
