import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="flex items-center cursor-pointer bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/20 dark:to-blue-400/20 p-1.5 rounded-full w-[70px] h-[36px] relative"
    >
      <motion.div
        className="bg-gradient-to-r bg-indigo-500 dark:from-blue-500 dark:to-indigo-600 w-[28px] h-[28px] rounded-full flex items-center justify-center shadow-lg"
        animate={{ x: isDark ? 34 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {isDark ? (
          <Moon className="size-4 text-white" />
        ) : (
          <Sun className="size-4 text-white" />
        )}
      </motion.div>
      <span className="sr-only">Change Theme</span>
    </motion.div>
  );
};