import React, { FormHTMLAttributes, useState } from "react";

const Home = () => {
  const [value, setValue] = useState<string>("https://www.google.com");
  const [shortUrl, setShortUrl] = useState<string>(null);
  return (
    <div>
      {shortUrl ? (
        <div>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      ) : (
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const response = await fetch("/api/shorten", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ url: value }),
            });
            const data = await response.json();
            setShortUrl(
              `${document.location.protocol}//${document.location.host}/${data.short}`
            );
          }}
        >
          <input
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <button type="submit">Shorten</button>
        </form>
      )}
    </div>
  );
};
export default Home;
