import { Link } from "react-router-dom";

function home() {
  return (
    <>
  
      {/* This is my title */}
      <div className="container mx-auto p-20">
        <div className="text-center">
          <h1 className="text-5xl font bold">Race Engineer </h1>
        </div>
      </div>


      <div className="container mx-auto p-4">
        <div className="flex flex-row gap-4">




          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src="/src/assets/brakes.webp" alt="brakes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brakes</h2>
              <p>Not braking in time?</p>
              <div className="card-actions justify-end">
                <Link to="/brakes" className="btn btn-primary btn-outline">
                  Click
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src="/src/assets/wing.jpg" alt="brakes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Downforce</h2>
              <p>Understeer or oversteer?</p>
              <div className="card-actions justify-end">
                <Link to="/downforce" className="btn btn-primary btn-outline">
                  Click
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src="/src/assets/suspension.jpg" alt="brakes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Suspension</h2>
              <p>Horrbile Stability?</p>
              <div className="card-actions justify-end">
                <Link to="/suspension" className="btn btn-primary btn-outline">
                  Click
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src="/src/assets/gearing.webp" alt="brakes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Gearing</h2>
              <p>Feel slow?</p>
              <div className="card-actions justify-end">
                <Link to="/gearing" className="btn btn-primary btn-outline">
                  Click
                </Link>
              </div>
            </div>
          </div>






        </div>
      </div>

      
    </>
  );
}

export default home;
