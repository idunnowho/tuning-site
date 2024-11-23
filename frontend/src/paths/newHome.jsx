import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bgimage.jpg')" }}> {/* Added background */}
      <div className="min-h-screen bg-black bg-opacity-50"> {/* Added overlay */}
        {/* Title */}
        <div className="container mx-auto p-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Race Engineer</h1> {/* Changed text color */}
          </div>
        </div>

        {/* Cards */}
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center gap-4"> {/* Changed to flex-wrap and justify-center */}
            {[
              { title: "Brakes", description: "Not braking in time?", image: "/src/assets/brakes.webp", link: "/brakes" },
              { title: "Downforce", description: "Understeer or oversteer?", image: "/src/assets/wing.jpg", link: "/downforce" },
              { title: "Suspension", description: "Horrible Stability?", image: "/src/assets/suspension.jpg", link: "/suspension" },
              { title: "Gearing", description: "Feel slow?", image: "/src/assets/gearing.webp", link: "/gearing" },
            ].map((card, index) => ( {/* Added map function for cards */}
              <div key={index} className="card card-compact w-72 shadow-xl backdrop-blur-sm bg-white/30"> {/* Added backdrop blur and semi-transparent background */}
                <figure>
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" /> {/* Adjusted image styling */}
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white">{card.title}</h2> {/* Changed text color */}
                  <p className="text-gray-200">{card.description}</p> {/* Changed text color */}
                  <div className="card-actions justify-end">
                    <Link to={card.link} className="btn btn-primary btn-outline">
                      Click
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
