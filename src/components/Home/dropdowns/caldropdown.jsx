// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../css/App.module.scss'

// function CalDropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative flex justify-center items-center p-5">
//       <button
//         onClick={toggleDropdown}
//         className={styles.calamitybutton} 
//       >
//         Calamity
//       </button>

//       {isOpen && (
//         <div
//           className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 rounded-md border border-yellow-300 bg-yellow-100/50"
//           style={{ marginTop: 4 }}
//         >
//           <div
//             className="py-1"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu"
//           >
//             <Link
//               to="/cal/melee"
//               className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-yellow-200 hover:backdrop-blur-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Melee
//             </Link>
//             <Link
//               to="/ranged"
//               className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-yellow-200 hover:backdrop-blur-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Ranged
//             </Link>
//             <Link
//               to="/mage"
//               className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-yellow-200 hover:backdrop-blur-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Mage
//             </Link>
//             <Link
//               to="/summoner"
//               className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-yellow-200 hover:backdrop-blur-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Summoner
//             </Link>
//             <Link
//               to="/summoner"
//               className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-yellow-200 hover:backdrop-blur-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Rogue
//             </Link> 
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CalDropdownMenu;
import  { useState } from 'react';
import { Link } from 'react-router-dom';

function CalDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center items-center p-5">
      <button
        onClick={toggleDropdown}
        className="bg-[#b1becf]/30 hover:bg-[#A5B1C2] transition-colors duration-300 ease-in-out text-white px-12 py-2 rounded-md"
      >
        Calamity
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 rounded-md border border-[#bac8db]/30 bg-[#A5B1C2]/50 animate-fade-in"
          style={{ marginTop: 4 }}
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/cal/melee"
              className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-[#A5B1C2] hover:backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              Melee
            </Link>
            <Link
              to="/ranged"
              className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-[#A5B1C2] hover:backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              Ranged
            </Link>
            <Link
              to="/mage"
              className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-[#A5B1C2] hover:backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              Mage
            </Link>
            <Link
              to="/summoner"
              className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-[#A5B1C2] hover:backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              Summoner
            </Link>
            <Link
              to="/summoner"
              className="block px-4 py-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-[#A5B1C2] hover:backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              Rogue
            </Link> 
          </div>
        </div>
      )}
    </div>
  );
}

export default CalDropdownMenu;