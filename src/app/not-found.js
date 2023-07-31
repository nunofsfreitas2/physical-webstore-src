import { montserrat } from "./layout";
import { Logo } from "./local";

export default function NotFound() {
  return (
    <>
      <main className={`margins ${montserrat.className}`}>
        <Logo className="logo-big" />
        <br />
        <h2 className="font-h2">{`This page doesn't exist`}</h2>
        <p className="font-text">{`You may be experiencing some issues or the link has expired or was inserted incorrectly`}</p>
      </main>
    </>
  );
}
