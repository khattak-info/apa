import { useEffect } from "react";

const ZEFFY_SCRIPT_SRC = "https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js";

// Zeffy's script binds to [zeffy-form-link] elements once on load, so it is re-added
// whenever `deps` change (e.g. after the elements are rendered).
export function useZeffyScript(enabled: boolean, deps: unknown[]) {
  useEffect(() => {
    if (!enabled) return;
    const script = document.createElement("script");
    script.src = ZEFFY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);
}
