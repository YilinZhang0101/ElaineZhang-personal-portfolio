'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
      setIsDarkMode(true);
    }
    else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  // // on first mount, read the saved theme (and/or OS preference)
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const saved = localStorage.getItem('theme');
  //     if (saved === 'dark') {
  //       setIsDarkMode(true);
  //     } else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //       setIsDarkMode(true);
  //     }
  //   }
  // }, []);

  // // whenever isDarkMode changes, apply class & persist
  // useEffect(() => {
  //   const html = document.documentElement;
  //   if (isDarkMode) {
  //     html.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     html.classList.remove('dark');
  //     localStorage.removeItem('theme');
  //   }
  // }, [isDarkMode]);

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About />
    <Projects isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    </>
  );
}