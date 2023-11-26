import { NavLink } from "react-router-dom"

const MenuWrapper = ({label, address, icon: Icon}) => {
  return (
    <div>
     <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-blue-400 dark:bg-gray-300 text-xl font-semibold text-zinc-700 rounded-lg shadow-xl' : 'text-gray-800 text-lg font-medium'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>

    </div>
  )
}

export default MenuWrapper