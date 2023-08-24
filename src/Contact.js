const Contact = () => {
  return (
    <div>
       <div className="mt-5">
       <h1 className="pageHeading">Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.74973478612!2d73.73601715!3d18.57685925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe4d114d579%3A0xfec1d303cfb8941a!2sBlue%20Ridge%20Town%20Pune%2C%20Phase%201%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1692785511156!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mt-5">
          <div className="row">
              <div className="col-4 offset-4">
              <form action="https://formspree.io/f/moqodllv" method="POST" className="">
          <input className="form-control mt-4" type="text" placeholder="Username" name="username" autoComplete="off" required/> 
          <input className="form-control mt-4" type="email" placeholder="Email" name="email" autoComplete="off" required/> 
          <textarea  className="form-control mt-4"name="message" id="" required placeholder="Enter a message ...." autoComplete="off" cols="30" rows="10"></textarea> 
          <div className="text-center">
          <input type="submit" value="Send" className="mt-3 btn btn-success" />

          </div>
        </form>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
