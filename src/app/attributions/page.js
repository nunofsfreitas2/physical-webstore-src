import { montserrat } from "../layout";
import { Logo } from "../local";

export default function NotFound() {
  return (
    <>
      <main className={`margins ${montserrat.className}`}>
        <Logo className="logo-big" />
        <br />
        <h3>Attributions</h3>
        <p>Unsplash</p>
        <ul>
          <li>Jazmin Quaynor (@jazminantoinette)</li>
          <li>Marissa Grootes (@stilclassis)</li>
          <li>Md Salman (@Md Salman)</li>
          <li>Sarah Dorweiler (@sarahdorweiler)</li>
          <li>Content Pixie (@contentpixie)</li>
          <li>Santhosh Kumar (@shivsantos)</li>
          <li>Tamara Bellis (@tamarabellis)</li>
        </ul>
      </main>
    </>
  );
}
