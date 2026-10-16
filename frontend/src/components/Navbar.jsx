
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const navigate = useNavigate()

    const { token, setToken, userData, profileImagePreview } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        setShowProfileMenu(false)
        setShowMenu(false)
        navigate('/')
    }

    const closeMobileMenu = () => {
        setShowMenu(false)
    }

    const profileImage =
        profileImagePreview ||
        (userData?.image?.startsWith('http')
            ? userData.image
            : assets.upload_area)

    return (
        <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400 relative'>

            {/* Logo */}
            <img
                onClick={() => navigate('/')}
                className='w-44 cursor-pointer'
                src={assets.logo}
                alt='Logo'
            />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>

                {/* Profile Dropdown */}
                {token && userData ? (
                    <div
                        className='relative'
                        onMouseEnter={() => {
                            if (window.innerWidth >= 768) {
                                setShowProfileMenu(true)
                            }
                        }}
                        onMouseLeave={() => {
                            if (window.innerWidth >= 768) {
                                setShowProfileMenu(false)
                            }
                        }}
                    >
                        <button
                            type='button'
                            onClick={() => {
                                if (window.innerWidth < 768) {
                                    setShowProfileMenu(prev => !prev)
                                }
                            }}
                            className='flex items-center gap-2 cursor-pointer'
                        >
                            <img
                                className='w-8 h-8 rounded-full object-cover'
                                src={profileImage}
                                alt='Profile'
                            />

                            <img
                                className='w-2.5'
                                src={assets.dropdown_icon}
                                alt='Dropdown'
                            />
                        </button>

                        {showProfileMenu && (
                            <div className='absolute top-full right-0 pt-3 text-base font-medium text-gray-600 z-50'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg'>
                                    <p
                                        onClick={() => {
                                            setShowProfileMenu(false)
                                            navigate('/my-profile')
                                        }}
                                        className='hover:text-black cursor-pointer'
                                    >
                                        My Profile
                                    </p>

                                    <p
                                        onClick={() => {
                                            setShowProfileMenu(false)
                                            navigate('/my-appointments')
                                        }}
                                        className='hover:text-black cursor-pointer'
                                    >
                                        My Appointments
                                    </p>

                                    <p
                                        onClick={logout}
                                        className='hover:text-black cursor-pointer'
                                    >
                                        Logout
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
                    >
                        Create account
                    </button>
                )}

                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden cursor-pointer'
                    src={assets.menu_icon}
                    alt='Open menu'
                />

                {/* Mobile Navigation Menu */}
                <div
                    className={`${
                        showMenu
                            ? 'fixed inset-0 w-full h-screen'
                            : 'fixed top-0 right-0 w-0 h-0'
                    } md:hidden z-40 overflow-hidden bg-white transition-all duration-300`}
                >
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img
                            className='w-36'
                            src={assets.logo}
                            alt='Logo'
                        />

                        <img
                            className='w-7 cursor-pointer'
                            onClick={closeMobileMenu}
                            src={assets.cross_icon}
                            alt='Close menu'
                        />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={closeMobileMenu} to='/'>
                            <p className='px-4 py-2 rounded inline-block'>HOME</p>
                        </NavLink>

                        <NavLink onClick={closeMobileMenu} to='/doctors'>
                            <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p>
                        </NavLink>

                        <NavLink onClick={closeMobileMenu} to='/about'>
                            <p className='px-4 py-2 rounded inline-block'>ABOUT</p>
                        </NavLink>

                        <NavLink onClick={closeMobileMenu} to='/contact'>
                            <p className='px-4 py-2 rounded inline-block'>CONTACT</p>
                        </NavLink>

                        {token && userData ? (
                            <>
                                <NavLink onClick={closeMobileMenu} to='/my-profile'>
                                    <p className='px-4 py-2 rounded inline-block'>MY PROFILE</p>
                                </NavLink>

                                <NavLink onClick={closeMobileMenu} to='/my-appointments'>
                                    <p className='px-4 py-2 rounded inline-block'>MY APPOINTMENTS</p>
                                </NavLink>

                                <p
                                    onClick={logout}
                                    className='px-4 py-2 rounded cursor-pointer'
                                >
                                    LOGOUT
                                </p>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    closeMobileMenu()
                                    navigate('/login')
                                }}
                                className='bg-primary text-white px-6 py-2 rounded-full mt-2'
                            >
                                Create account
                            </button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
