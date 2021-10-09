import React ,{useState, useRef} from 'react';
import './App.css';
import InputSample from './InputSample';
import UserList from './test_components/UserList';
import CreateUser from './test_components/CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email } = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };


  const onRemove = id => {
    //user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id))
  }


  var posts = '강남 고기 맛집 '

  var fontSize = { color : 'white', fontSize : '30px'}


  /**
   * 문자, 숫자, array, object 모두 저장 가능하다. 
   * useState 를 써야 하는 이유 : 새로고침 없이도 HTML 이 자동으로 재렌더링 된다. 
   */

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [count, setCount] = useState(0);
  

  function 제목변경() {
    // deep copy 를 해서 수정해야 한다. 
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  function 정렬() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ fontSize}>개발 Blog</div>
      </div>
      <button onClick={ 정렬 }>버튼 </button>
      <div className="llist">
        <h3>{ 글제목[0] } <span onClick={ () => { setCount(count+1) }}>👍</span> {count} </h3>    
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="llist">
        <h3>{ 글제목[1] }</h3>    
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="llist">
        <h3>{ 글제목[2] }</h3>    
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

      <Hello color="red" name="react" />

      <InputSample />

      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList users={users} onRemove={onRemove}/>

      
      
      
    </div>
  );
}
/**
 * Component function App 과 나란히 만들어주면 된다. 
 * 반복적으로 출현하는 HTML 덩어리들을 component로 만든다., 자주 변경하는 HTML UI 들, 다른 페이지 만들 때 
 * 상위 component에서 변수들을 전해주기 위해서는 props 문법을 사용해야 한다. 
 * 의미없는 <div> 쓰기 싫으면 <></> 로 묶어주면 된다.
 */
function Modal() {
  return (
    <>
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

/**
 * props 를 쓰는 방법, 아래는 비구조화를 통해 props를 제거한 것
 */

function Hello({ color, name }) {
  return <div style={{ color }}> 안녕하세요 {name}</div>
}

export default App;
