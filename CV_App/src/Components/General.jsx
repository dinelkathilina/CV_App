import React from 'react';

export default function General({ value, companyname, email, setValue, setCompanyname, setEmail, handleSubmit }) {
  const handleNameChange = (e) => { setValue(e.target.value); };
  const handleCompanyNameChange = (e) => { setCompanyname(e.target.value); };
  const handleEmailChange = (e) => { setEmail(e.target.value); };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' value={value} placeholder='Name' onChange={handleNameChange} />
      </div>
      <div>
        <label>E-Mail:</label>
        <input type='email' value={email} placeholder='e-mail' onChange={handleEmailChange} />
      </div>
      <div>
        <label>Company Name:</label>
        <input type='text' value={companyname} placeholder='Company-Name' onChange={handleCompanyNameChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
