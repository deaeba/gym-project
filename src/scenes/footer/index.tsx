import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Success usually comes to those who are too busy to be looking for
            it.” “If you want something you've never had, you must be willing to
            do something you've never done.” “The body achieves what the mind
            believes.” “Once you are exercising regularly, the hardest thing is
            to stop it.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Our annual program</p>
          <p className="my-5">happy members reviews</p>
          <p>The most popular classes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Toll free internatian dial</p>
          <p>(333)111-222</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
