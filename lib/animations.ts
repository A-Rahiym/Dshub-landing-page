// Subtle animation utilities for React Bits patterns
export const animationClasses = {
  fadeInUp: 'animate-in fade-in slide-in-from-bottom-6 duration-500',
  slideInLeft: 'animate-in fade-in slide-in-from-left-6 duration-500',
  slideInRight: 'animate-in fade-in slide-in-from-right-6 duration-500',
  scaleIn: 'animate-in fade-in zoom-in-50 duration-300',
  pulse: 'animate-pulse',
  shimmer: 'animate-shimmer',
  bounce: 'animate-bounce',
  floatUp: 'animate-in fade-in slide-in-from-bottom-3 duration-700',
}

// Staggered animation delays
export const staggeredDelay = (index: number, delayUnit = 75) => {
  return { animationDelay: `${index * delayUnit}ms` }
}
