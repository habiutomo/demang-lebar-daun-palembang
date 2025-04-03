import { useEffect } from 'react';

/**
 * Hook to load the required fonts for the website
 */
export function useFonts() {
  useEffect(() => {
    // Add Montserrat and Roboto fonts from Google Fonts
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup function to remove the link if the component unmounts
      document.head.removeChild(link);
    };
  }, []);
}

export default useFonts;
