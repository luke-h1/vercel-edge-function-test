import React, { FormHTMLAttributes, useState } from "react";

const Home = () => {
  const [value, setValue] = useState<string>("https://www.google.com");
  return (
    <div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
      }}>
        <input
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button type="submit">Shorten</button>
      </form>
    </div>
  );
};
export default Home;
