import React from 'react';

const InsightBar = ({ insight }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '16px' }}>
      {insight}
    </div>
  );
};

export default InsightBar;