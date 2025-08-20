const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-40">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/mayur-driod/portfolio">
            <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
        </a>
        <a href="https://linkedin.com/in/mayurksetty">
            <div className="social-icon">
            <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
            </div>
        </a>
        <a href="https://instagram.com/mayura.jpg">
            <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </div>
        </a>
      </div>

      <p className="text-white-500">© 2025 Mayur K Setty. All rights reserved.</p>
    </footer>
  );
};

export default Footer;