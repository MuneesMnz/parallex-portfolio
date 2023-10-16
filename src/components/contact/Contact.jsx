import "./contact.scss";

const Contact = () => {
  const data = [
    {
      title: "Mail",
      text: "hello@react.dev",
    },
    {
      title: "Address",
      text: "123 Avenue Street New York",
    },
    {
      title: "Phone",
      text: "+91 97472 56118",
    },
  ];
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="textContainer">
          <h1>Let's work together</h1>
          {data.map((item, ind) => (
            <div key={ind}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="formContainer">form</div>
      </div>
    </div>
  );
};

export default Contact;
