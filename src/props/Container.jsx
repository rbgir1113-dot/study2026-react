import PropsComponent03 from './PropsComponent03';
import PropsComponent04 from './PropsComponent04';

const Container = () => {
  // const name = "홍길동"
  // const printName = () => {
  //   console.log(name)
  // }
  
  // const color = "blue"

  const color1 = "red"
  const fontSize = "50px"

  // JS 부터는 태그를 객체로 보기
  return (
    <div>
      <span> <PropsComponent03 color={color1} fontSize={fontSize}/> </span>
      
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식요소!💩</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;