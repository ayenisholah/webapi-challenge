import React from 'react'

function Home(props) {
  const goToActionList = () => {
    props.history.push('/actions');
  }
  return (
    <div>
      <div className="home-wrapper">
        <h2>Web Api Sprint Challenge</h2>
        <button
          className='home-btn'
          onClick={goToActionList}
        >
          Actions
        </button>
      </div>
    </div>
  );
}

export default Home;