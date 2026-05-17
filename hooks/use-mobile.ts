import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = (e: MediaQueryListEvent) => {
      if (mounted) {
        setIsMobile(e.matches)
      }
    }
    
    mql.addEventListener("change", onChange)
    
    // Defer the initial state update to avoid synchronous state warning
    setTimeout(() => {
      if (mounted) {
         setIsMobile(mql.matches)
      }
    }, 0)
    
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
