import React from 'react';

const DefinedFonts: (keyof HTMLElementTagNameMap)[] = ['h1', 'h2', 'h3', 'p'];
const ButtonClasses = ['', 'btn-outline'];

const StylesTester = () => {
  const content = 'Almost before we knew it, we had left the ground.';
  const style = { marginTop: 10 };

  return (
    <div className="content-wrapper" style={{ paddingTop: 70 }}>
      {DefinedFonts.map((Font: any) => (
        <Font key={`font-test-${Font}`} style={style}>
          {`${Font}: ${content}`}
        </Font>
      ))}
      {ButtonClasses.map(className => (
        <a key={`btn-test-${className}`} style={style} className={`btn ${className}`}>
          {className ? `Button of class '${className}'` : 'Button with no class'}
        </a>
      ))}
    </div>
  );
};

export default StylesTester;
