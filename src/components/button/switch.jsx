"use client";
import React, { useEffect, useState } from "react";
import SunIcon from "../icon/sunI";
import MoonIcon from "../icon/theme";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Cambia las variables CSS en el root cuando cambie el tema
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--background", "black");
      root.style.setProperty("--foreground", "white");
    } else {
      root.style.setProperty("--background", "white");
      root.style.setProperty("--foreground", "black");
    }
  }, [isDark]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
    localStorage.setItem("theme", !isDark ? "dark" : "light"); // Guardar el tema en local storage
  };

  useEffect(() => {
    // Asegura que el componente esté montado
    setMounted(true);

    // Inicializa el tema desde local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  if (!mounted) {
    return null; // Previene problemas de renderizado del lado del servidor
  }

  return (
    <div
      onClick={toggleTheme}
      className={`border-2 border-cyan-900 flex items-center cursor-pointer w-14 h-8 rounded-full p-1 transition-all ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-center w-6 h-6 bg-black rounded-full shadow-md transform transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <MoonIcon height={15} width={15} className='stroke-white '/>
        ) : (
          <SunIcon height={15} width={15} className='stroke-white '/>
        )}
      </div>
    </div>
  );
}
