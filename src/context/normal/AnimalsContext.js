// import { createContext, useState } from "react";

// // 1. 생성 
// export const AnimalsContext = createContext({
//   state: {animals: []},
//   actions: {insert: () => {}, remove: () => {}}
// })

// // 2. 제공
// export const AnimalsProvider = ({children}) => {
  
//   const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  
//   const value = {
//     state: {animals},
//     actions: {
//       insert: (animal) => {setAnimals(animals.concat(animal))},
//       // insert: (animal) => {setAnimals([...animals, animal])},
//       remove: () => {}
//     }
//   }

//   // 실습
//   // insert 메서드를 완성하시오!

//   return (
//     <AnimalsContext.Provider value={value} setAnimals={setAnimals}>
//       {children}
//     </AnimalsContext.Provider>
//   )
// }


import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children}) => {
  
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: (animal) => {setAnimals(animals.concat(animal))},
      
      remove: (i) => { setAnimals(animals.filter((_, idx) => i !== idx))}
      // 인덱스로 안하면 누렁이, 누렁이 이런경우에 누렁이들이 전부 해제됨
      // remove: (animal) => {
      //   setAnimals(animals.filter(removeAnimal => (
      //     removeAnimal !== animal 
      //   )))
      // }
    }
  }

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


