export default function Header() {
  return (
    <div>
      <div className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* logo */}
              <div>
                <h1 className="text-2xl font-bold text-blue-600">TeamHub</h1>
              </div>
              {/* links */}
              <div className="hidden sm:flex sm:items-center gap-7">
                <a href="#" className="text-gray-500 text-lg font-semibold ">
                  Home
                </a>
                <a href="#" className="text-gray-500 text-lg font-semibold ">
                  Team
                </a>
                <a href="#" className="text-gray-500 text-lg font-semibold ">
                  About
                </a>
                <a href="#" className="text-gray-500 text-lg font-semibold ">
                  Contact
                </a>
              </div>
              {/* button */}
              <div className="hidden sm:flex sm:items-center">
                <a
                  href="#"
                  className="text-white text-sm font-semibold border px-4 py-2 rounded-full bg-blue-600"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
