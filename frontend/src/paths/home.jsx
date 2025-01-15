import { Link } from "react-router-dom";

function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/bgimage.jpg')" }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        {/* This is my title */}
        <div className="container mx-auto p-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Race Engineer</h1>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card card-compact w-72 shadow-xl backdrop-blur-sm bg-white/30">
              <figure>
                <img src="/src/assets/brakes.webp" alt="brakes" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Brakes</h2>
                <p className="text-gray-200">Not braking in time?</p>
                <div className="card-actions justify-end">
                  <Link to="/brakes" className="btn btn-primary btn-outline">
                    Click
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-72 shadow-xl backdrop-blur-sm bg-white/30">
              <figure>
                <img src="/src/assets/wing.jpg" alt="wing" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Downforce</h2>
                <p className="text-gray-200">Understeer or oversteer?</p>
                <div className="card-actions justify-end">
                  <Link to="/downforce" className="btn btn-primary btn-outline">
                    Click
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-72 shadow-xl backdrop-blur-sm bg-white/30">
              <figure>
                <img src="/src/assets/suspension.jpg" alt="suspension" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Suspension</h2>
                <p className="text-gray-200">Horrible Stability?</p>
                <div className="card-actions justify-end">
                  <Link to="/suspension" className="btn btn-primary btn-outline">
                    Click
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-72 shadow-xl backdrop-blur-sm bg-white/30">
              <figure>
                <img src="/src/assets/gearing.webp" alt="gearing" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Gearing</h2>
                <p className="text-gray-200">Feel slow?</p>
                <div className="card-actions justify-end">
                  <Link to="/gearing" className="btn btn-primary btn-outline">
                    Click
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

