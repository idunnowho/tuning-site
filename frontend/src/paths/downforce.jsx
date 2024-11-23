import { useState } from "react"
import { Link } from "react-router-dom"

export default function Downforce() {
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState("")

  const handleOption = (option) => {
    if (step === 0) {
      if (option === 1)
        setMessage("Reduce the front or rear downforce")
    } if (option === 2) {
        setMessage("Increase the rear downforce for more grip")
    } if (option === 3) {
        setMessage("Reduce the rear downforce")
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
        <h1 className="text-5xl font-bold">Downforce</h1>
        <p className="p-3 text-3xl">What seems to be the issue?</p>
      </div>
    </div>
    {/* Static */}


    <div className="text-center">
      {step === 0 && (
        <>
          <button className="btn btn-outline btn-primary p-2 mx-2"  onClick={() => handleOption(1)}>Im slow on straights.</button> 
          <button className="btn btn-outline btn-primary p-2 mx-2"  onClick={() => handleOption(2)}>I keep spinning out in fast corners</button>
          <button className="btn btn-outline btn-primary p-2 mx-2"  onClick={() => handleOption(3)}>The car doesnt turn in to corners</button>
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
