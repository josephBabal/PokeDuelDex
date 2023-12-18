// 'use client'
// import { useState, useEffect } from 'react';


// type PokemonList = {
//   name: string
// }

// const useInfiniteScroll = (offsetIncrement: number) => {
//   const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
//   const [data, setData] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (url: string) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       setData((prevData: PokemonList) => [...prevData, ...result.results]);
//     } catch (error: any) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       setOffset((prevOffset) => prevOffset + offsetIncrement);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const url = `${initialUrl}?limit=6&offset=${offset}`;
//     fetchData(url);
//   }, [offset]);

//   return { data, isLoading, error };
// };

// export default useInfiniteScroll;
