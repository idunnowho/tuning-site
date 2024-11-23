import { useState } from "react"
import { Link } from "react-router-dom"

export default function Brakes() {
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState("")

  const handleOption = (option) => {
    if (step === 0) {
      if (option === 1)
        setMessage("Increase the brake pressure and move the brake bias to the front")
    } if (option === 2) {
        setMessage("Lower the brake pressure")
    } if (option === 3) {
        setStep(1);
    }
    if (step === 1) {
      if (option === 'front') {
        setMessage("Decrease the brake pressure <br> Move the brake bias to the rear")
      }
      if (option === 'rear') {
        setMessage("Move the brake bias to the front")
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
        <h1 className="text-5xl font-bold">Braking</h1>
        <p className="p-3 text-3xl">What seems to be the issue?</p>
      </div>
    </div>
    {/* Static */}


    <div className="text-center">
      {step === 0 && (
        <>
          <button className="btn btn-outline p-2 mx-2"  onClick={() => handleOption(1)}>I am not stopping in time.</button> 
          <button className="btn btn-outline p-2 mx-2"  onClick={() => handleOption(2)}>I am stopping to quick.</button>
          <button className="btn btn-outline p-2 mx-2"  onClick={() => handleOption(3)}>I keep sliding under hard braking.</button>
        </>
      )}
      {step === 1 && (
        <>
          <button className="btn btn-outline p-2 mx-2"  onClick={() => handleOption('front')}>In the front?</button>
          <button className="btn btn-outline p-2 mx-2"  onClick={() => handleOption('rear')}>In the rear?</button>
        </>
      )}
      { message && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-line'}}>
          <strong>Response:</strong>
          <p>{message}</p>
        </div>
      )}
      { step !== 0 && (
        <button className="btn btn-info p-2 mt-5"  onClick={() => handleBack()}>Back to Start</button>
      )}

    </div>
    </>
  )
}
