import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김민경',
  'birthday' : '920223',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김민경2',
  'birthday' : '910223',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김민경3',
  'birthday' : '900223',
  'gender' : '남자',
  'job' : '직장인'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
