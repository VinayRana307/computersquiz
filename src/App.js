import logo from './logo.svg';
import './App.css';
import quiz from './Questions/Questions'
function App() {
  var num = [10, 20, 30, 40, 50];   
var X = quiz.map((number)=>{   
return (number);   
}); 
  return (
    <div className="App">
      <marquee className="intro">Powered by <spam id="vinay">Vinay Rana</spam> & <spam id="amit">Amit kumar</spam>...</marquee>
      <h1 text-align="center"><u><i><b>Computer MS Word MCQ Questions</b></i></u></h1>
      {quiz.map((data,id) =>{
        return (
          <div className="Questions">
              <strong><p key={id}>{data.question}</p></strong>
              <p key={id}>{data.option1}</p>
              <p key={id}>{data.option2}</p>
              <p key={id}>{data.option3}</p>
              <p key={id}>{data.option4}</p>
              <strong>Ans : <p className="answer" key={id}>{data.answer}</p></strong>
              <hr/>
          </div>
        )
      })
    }
      

    </div>
  );
}

export default App;
