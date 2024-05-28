import '../src/App.css';
import General from './Components/General';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && email && companyname) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <div id="cv">
        <div className="section1" style={{ backgroundColor: 'red' }}>
          <h2>Details</h2>
          <General
            value={value}
            companyname={companyname}
            email={email}
            setValue={setValue}
            setCompanyname={setCompanyname}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="section2" style={{ backgroundColor: 'yellow' }}>
          <h2>Section2</h2>
          <div className='myclass'>
            {submitted && (
              <>
                <label>Name: {value}</label><br />
                <label>E-Mail: {email}</label><br />
                <label>Company Name: {companyname}</label>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
