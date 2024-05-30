import React from "react";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* First row */}
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 1</h3>
        <p>Description for Item 1</p>
      </div>
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 2</h3>
        <p>Description for Item 2</p>
      </div>
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 3</h3>
        <p>Description for Item 3</p>
      </div>

      {/* Second row */}
      <div className="col-span-2 bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 4 (Long)</h3>
        <p>Description for Item 4</p>
      </div>
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 5</h3>
        <p>Description for Item 5</p>
      </div>

      {/* Third row */}
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 6</h3>
        <p>Description for Item 6</p>
      </div>
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 6</h3>
        <p>Description for Item 6</p>
      </div>
      <div className="bg-primary bg-opacity-20 p-4 rounded">
        <h3 className="font-bold text-lg">Item 6</h3>
        <p>Description for Item 6</p>
      </div>
    </div>
  );
};

export default BentoGrid;
