import React from 'react'

const Home = () => {
    return (
        <div className='container'>
            <div className='container-bet'>
                <div className='place-bet'>
                    <div className='bet-button-manual'>
                        <button type='button'>Manual</button>
                    </div>
                </div>

                <div className='demo-balance'>
                    <div className=''>
                        <h4>Demo Balance</h4>
                        <p>5000</p>
                    </div>
                    <div className=''>
                        <p>Win</p>
                    </div>
                </div>
                <div className="demo-balance">
                    <div className='bet-button-demo'>
                        <p>100</p>
                        <button type='button'> BET</button>
                    </div>
                </div>
                <div className='demo-balance'>
                    <div className='demo-balance-sound'>
                        <p>Sound</p>
                        <p>Sound</p>
                        <p>Sound</p>
                        <p>Sound</p>
                        <p>Sound</p>

                    </div>

                </div>
            </div>
            <div className='show-bet-graph-container'>
                <div className=''>
                    <h3>Nandan</h3>

                </div>
            </div>

        </div >
    )
}

export default Home