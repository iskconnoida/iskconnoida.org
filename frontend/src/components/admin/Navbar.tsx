import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BellAlertIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state based on system preference
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const handleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    // Apply the dark mode class based on the initial system preference
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white fixed top-0 w-full z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="images/logo.webp"
                alt="ISKCON Noida Admin"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-grow justify-center">
            <input
              type="text"
              className="px-4 py-2 w-full lg:w-1/2 bg-white dark:bg-gray-800 dark:text-white text-black rounded-md border-gray-800 dark:border-gray-600 border-[1px]"
              placeholder="Search admin panel..."
            />
          </div>

          {/* Profile Dropdown, Theme Toggle, Waffle Icon, and Bell Icon */}
          {/* Light/Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 focus:outline-none mr-4"
          >
            {isDarkMode ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364 6.364l-.707-.707m-9.9-9.9l-.707-.707M18.364 5.636l-.707-.707m-9.9 9.9l-.707-.707"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            )}
          </button>
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <Menu as="div" className="relative">
              <MenuButton className="text-gray-600 dark:text-gray-300 focus:outline-none">
                <BellAlertIcon className="h-6 w-6" />
              </MenuButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to="/admin/notifications"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      View Notifications
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/admin/alerts"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Manage Alerts
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
            {/* Waffle Icon (Grid) */}
            <Menu as="div" className="relative">
              <MenuButton className="text-gray-600 dark:text-gray-300 focus:outline-none">
                <Squares2X2Icon className="h-6 w-6" />
              </MenuButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to="/admin/apps"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Apps
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/admin/tools"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Tools
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm rounded-full bg-gray-800 text-white focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://placehold.jp/30x30.png"
                  alt="Profile"
                />
              </MenuButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to="/admin/profile"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/admin/settings"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button className="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
