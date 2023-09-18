import { useEffect } from "react";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { isDarkMode, toggle } = useDarkMode();
  const isMounted = useIsMounted();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("bg-dark", isDarkMode);
    body.classList.toggle("bg-light", !isDarkMode);
  }, [isDarkMode]);

  return (
      <div className={`d-flex align-items-center ${className}`}>
          <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
              <input className="form-check-input bg-primary" type="checkbox" id="theme-toggle"
                     onChange={toggle}
                     checked={isDarkMode}
              />
              {isMounted() && (
                  <label htmlFor="theme-toggle" className={`toggle-switch ${isDarkMode ? "toggle-switch-active" : ""}`}>
                      <SunIcon className="h-50 w-5" />
                      <MoonIcon className="h-50 w-5" />
                  </label>
              )}
          </div>

      </div>
  );
};
