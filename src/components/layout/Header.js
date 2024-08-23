import React from "react";


const headerInfo = [
  {info : "챔피언"},
  {info : "main"},
  {info : "고르기"},
]

function Info({data}){
  return <div>{data}</div>;
}

function Header(){
  return (
    <header className="header">
      <div className="header_list">
        {headerInfo.map((headerText) => (
          <Info data={headerText.info} key={headerText.info} />
        ))}
      </div>
    </header>
  )
}

export default Header;