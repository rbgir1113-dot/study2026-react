import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children, i}) => {
  
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {animals},
    actions: {
      insert: () => {},
      remove: () => {}
    }
  }

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value} i={i}>
      {children}
    </AnimalsContext.Provider>
  )
}


