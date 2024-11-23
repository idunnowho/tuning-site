import { useState } from "react"
import { Link } from "react-router-dom"

export default function Gearing() {
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("What seems to be the issue?")

  const handleOption = (option) => {
    if (step === 0) {
      if (option === 1) {
        setStep(1);
        setTitle("Are you hitting the rev limiter before on the longest straight?")
      }
    } if (option === 2) {
        setMessage("Lower the final drive ratio")
    } 

    if (step === 1) {
      if (option === 'yes') {
        setMessage("Increase the final drive ratio")
      }
      if (option === 'no') {
        setMessage("Lower the final drive ratio")
      }
    }
  }


  const handleBack = () => {
    setStep(0);
    setMessage("");
  }

  return (
    <>
    {/* Static */}
    <div className="container mx-auto p-24">
    <Link to='/' className="btn btn-accent btn-outline">Home</Link>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Gearing</h1>
        <p className="p-3 text-3xl">
          {title}
        </p>
      </div>
    </div>
    {/* Static */}


    <div className="text-center">
      {step === 0 && (
        <>
          <button className="btn btn-outline btn-accent p-2 mx-2"  onClick={() => handleOption(1)}>I cant hit my top speed</button> 
          <button className="btn btn-outline btn-accent p-2 mx-2"  onClick={() => handleOption(2)}>Im slow accererlating</button>
        </>
      )}

      {step === 1 && (
        <>
          <button className="btn btn-active btn-ghost p-2 mx-2"  onClick={() => handleOption('yes')}>Yes</button>
          <button className="btn btn-active btn-ghost p-2 mx-2"  onClick={() => handleOption('no')}>No</button> 
        </>
      )}
      
      { message && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-line'}}>
          <strong>Response:</strong>
          <p>{message}</p>
        </div>
      )}
      { step !== 0 && (
        <button className="bg-blue-500 text-white p-2 mt-5"  onClick={() => handleBack()}>Back to Start</button>
      )}

    </div>
    </>
  )
}
