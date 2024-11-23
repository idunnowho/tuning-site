import { useState } from "react"
import { Link } from "react-router-dom"

export default function Suspension() {
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState("")

  const handleOption = (option) => {

    /* Menu Controller */
    if (step === 0) {
      if (option === 1)
        setStep(1);
    } if (option === 2) {
        setStep(2);
    } if (option === 3) {
        setMessage("Stiffen the front and rear spring rates")
    }


    /* Sub Menu */
    if (step === 1) {
      if (option === 'in') {
        setMessage("Stiffen the front spring rates")
      }
      if (option === 'through') {
        setMessage("Stiffen the rear anti roll bars")
      }
      if (option === 'exit') {
        setMessage("Stiffen the rear anti roll bars and raise the rear ride height")
      }
    }
    if (step === 2) {
      if (option === 'in') {
        setMessage("Stiffen the front anti roll bars and spring rates")
      }
      if (option === 'through') {
        setMessage("Soften the rear anti roll bars")
      }
      if (option === 'exit') {
        setMessage("Soften rear anti roll bars")
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
        <h1 className="text-5xl font-bold">Suspension</h1>
        <p className="p-3 text-3xl">What seems to be the issue?</p>
      </div>
    </div>
    {/* Static */}


    <div className="text-center">
      {step === 0 && (
        <>
          <button className="btn btn-outline btn-secondary p-2 mx-2"  onClick={() => handleOption(1)}>The car doesnt turn into corners - understeer</button> 
          <button className="btn btn-outline btn-secondary p-2 mx-2"  onClick={() => handleOption(2)}>The car turns to much into corners - oversteer</button>
          <button className="btn btn-outline btn-secondary p-2 mx-2"  onClick={() => handleOption(3)}>After a few laps, My tyres are gone</button>
        </>
      )}
      {/* Sub menu */}
      {step === 1 && (
        <>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('in')}>When turning in</button>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('through')}>Throughout the corner</button>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('exit')}>On corner exit</button>
        </>
      )}
      {step === 2 && (
        <>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('in')}>When turning in</button>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('through')}>Throughout the corner</button>
          <button className="btn btn-ghost p-2 mx-2"  onClick={() => handleOption('exit')}>On corner exit</button>
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
