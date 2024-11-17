// "use client"

// import { useState, useEffect } from 'react';
// import { interval, timer } from 'rxjs';
// import { takeWhile, map } from 'rxjs/operators';

// interface UseOpacityTransitionProps {
//     isVisible: boolean;
//     delay?: number;
//     duration?: number;
//     increment?: number;
// }

// export const useOpacityTransition = ({
//     isVisible,
//     delay = 1000,
//     duration = 1000,
//     increment = 2
// }: UseOpacityTransitionProps) => {
//     const [opacity, setOpacity] = useState(0);
//     const [shouldShow, setShouldShow] = useState(false);

//     useEffect(() => {
//         if (isVisible) {
//             const delaySubscription = timer(delay).subscribe(() => {
//                 setShouldShow(true);
//                 const intervalTime = duration / (100 / increment);
                
//                 const opacitySubscription = interval(intervalTime).pipe(
//                     map((x) => (x + 1) * increment),
//                     takeWhile(value => value <= 100)
//                 ).subscribe(value => {
//                     setOpacity(value);
//                 });

//                 return () => opacitySubscription.unsubscribe();
//             });

//             return () => delaySubscription.unsubscribe();
//         } else {
//             setShouldShow(false);
//             setOpacity(0);
//         }
//     }, [isVisible, delay, duration, increment]);

//     return {
//         opacity: opacity / 100,
//         shouldShow
//     };
// }; 