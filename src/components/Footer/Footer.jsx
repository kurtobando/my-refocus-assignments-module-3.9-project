import "./Footer.css";

function Footer() {
  return (
    <footer className="w-full">
      <div className="max-width m-auto flex flex-col gap-2 justify-between text-sm">
        <div>
          <label>Follow Us</label>
          <ul className="flex flex-row flex-wrap gap-1 items-center mt-1">
            <li>
              <img src="/assets/icon-linkedin.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-insta.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-facebook.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-twitter.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-whatsup.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-tiktok.png" alt="" />
            </li>
            <li>
              <img src="/assets/icon-youtube.png" alt="" />
            </li>
          </ul>
        </div>
        <nav className="flex flex-row gap-1 ">
          <a href="">Privacy Policy </a>
          <a href="">Terms of Use</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
