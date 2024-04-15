
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnet = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / 6;
        const y = (clientY - (top + height / 2)) / 6;
        gsap.to(ref.current, { x: x, y: y, duration: 1, scale: 0.8, ease: 'power2.out' });
      }
    };

    const mouseLeave = () => {
      gsap.to(ref.current, { x: 0, y: 0, duration: 1, scale: 1, ease: 'power2.out' });
    };

    const addEventListeners = () => {
      if (ref.current && ref.current.parentElement) {
        ref.current.parentElement.addEventListener('mousemove', mouseMove);
        ref.current.parentElement.addEventListener('mouseleave', mouseLeave);
      } else {
        console.log('magnet null');
      }
    };

    const removeEventListeners = () => {
      if (ref.current && ref.current.parentElement) {
        ref.current.parentElement.removeEventListener('mousemove', mouseMove);
        ref.current.parentElement.removeEventListener('mouseleave', mouseLeave);
      } else {
        console.log('magnet null');
      }
    };

    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default Magnet;

// import React, { useEffect, useRef, ReactElement, ReactNode } from "react";
// import gsap from "gsap";

// type MagnetProps = {
//   children: ReactElement;
// };

// const Magnet: React.FC<MagnetProps> = ({ children }: MagnetProps) => {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {

//     const mouseMove = (e: MouseEvent) => {
//       if (ref.current) {
//         const {clientX, clientY } = e;
//         const { width, height, left, top } = ref.current.getBoundingClientRect();
//         const x = (clientX - (left + width / 2)) / 6;
//         const y = (clientY - (top + height / 2)) / 6;
//         gsap.to(ref.current, {x: x, y: y, duration: 1, scale: 0.8 , ease:'power2.out'});
//       }
//     };

//     const mouseLeave = (e: MouseEvent) => {
//       gsap.to(ref.current, {x: 0, y: 0, duration: 1, scale: 1, ease:'power2.out'});
//     };

//     const addEventListeners = () => {
//       if (ref.current !== null && ref.current.parentElement !== null) {
//         ref.current.parentElement.addEventListener('mousemove', mouseMove);
//         ref.current.parentElement.addEventListener('mouseleave', mouseLeave);
//       } else {
//         console.log('magnet null')
//       }
//     };

//     const removeEventListeners = () => {
//       if (ref.current !== null && ref.current.parentElement !== null) {
//         ref.current.parentElement.removeEventListener('mousemove', mouseMove);
//         ref.current.parentElement.removeEventListener('mouseleave', mouseLeave);
//       } else {
//         console.log('magnet null')
//       }
//     };

//     addEventListeners();

//     return () => {
//       removeEventListeners();
//     };
//   }, []);

//   return React.cloneElement(children, { ref });
// };

// export default Magnet;