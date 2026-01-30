import React , {useState} from 'react';

const ProductContainer = () => {
// 사용자가 구매할 상품을 입력한다.
   // 입력한 상품이 스토어에 있다면, 상품이 판매 된다.
   // 모든 상품을 판매 후 사용자가 "종료"라고 입력하면
   // 판매된 총 가격을 출력한다.
   // ex) 닌텐도
   // ex) 키보드
   // ex) 종료
  // 판매 목록
  // - 닌텐도: 700,000원
  // - 키보드: 50,000원
   // 결과: 750,000원

  const store = {
      income : 0,
      productList : [
         {
            name : "닌텐도",
            price: 700000
         },
         {
            name : "키보드",
            price: 50000
         },
         {
            name : "마우스",
            price: 30000
         },
         {
            name : "스피커",
            price: 75000
         },
         {
            name : "마이크",
            price: 150000
         },
      ]
   }
   const [product, setProduct] = useState("")
   const [price, setPrice] = useState()
   const [expectProduct, setexpectproduct] = useState([])
   const [totalPrice, setTotalProduct] = useState(0)
   const [isFinished, setIsFinished] = useState(false);

  const handleProductOnKeyPress = (e) => {
    const value = e.target.value
    if(e.key === "Enter") {
      setProduct(value)
      if (value === "종료") {
        setIsFinished(true);   
        e.target.value = "";  
        return;}


      const matched = store.productList
      .filter(store => store.name === value)[0]
      if(matched) {
        setPrice(matched.price)
        setexpectproduct([...expectProduct, matched])
        setTotalProduct(totalPrice + matched.price)
      }
    }
   }




  return (
    <div>
      <input
        type="text"
        placeholder="구매할 상품을 입력하세요"
        onKeyPress={handleProductOnKeyPress}
      />

      {!isFinished ? (
        <div>
          <h2>총 판매 목록</h2>
          <ul>
            {expectProduct.map((store, i) => (
              <li key={i}>{store.name}: {store.price}원</li>
            ))}
          </ul>
          <h3>총 판매 가격: {totalPrice}원</h3>
        </div>
      ) : (
        <div>
          <h2>판매 종료</h2>
          <h3>최종 총 판매 가격: {totalPrice}원</h3>
        </div>
      )}
    </div>
  );
};

export default ProductContainer;