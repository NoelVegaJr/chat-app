import React from 'react';

const Screen = ({
  children,
  className,
}: {
  children?: any;
  className: string;
}) => {
  return (
    <div className={`w-screen h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default Screen;
