import NamePropsComponent from './NamePropsComponent';
import HobbyPropsComponent from './HobbyPropsComponent';
import AgePropsComponent from './AgePropsComponent';

const PropsComponent03 = ({fontSize, color}) => {
  const style = {fontSize, color}
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기

  return (
    <div style={style}>
      <div>이름 : <NamePropsComponent /> </div>
      <div>나이 : <AgePropsComponent /></div>
      <div>취미 : <HobbyPropsComponent /></div>
    </div>
  );
};

export default PropsComponent03;