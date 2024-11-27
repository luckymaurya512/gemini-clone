import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt='usericon'/>
        </div>
        <div className="main-container">
            {!showResult?<>
            <div className="greet">
                <p><span>Hello Lucky...</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt='compass' />
                </div>
                <div className="card">
                    <p>Briefly explain the concept of blockchain</p>
                    <img src={assets.bulb_icon} alt='compass' />
                </div>
                <div className="card">
                    <p> Provide a list of the top 5 most popular cryptocurrencies</p>
                    <img src={assets.message_icon} alt='compass' />
                </div>
                <div className="card">
                    <p> Explain the concept of artificial intelligence</p>
                    <img src={assets.code_icon} alt='compass' />
                </div>
            </div>
            </>:
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt='icon' />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt='icon' />
                    {loading ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
                </div>}
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Ask Gemini"/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini app.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main