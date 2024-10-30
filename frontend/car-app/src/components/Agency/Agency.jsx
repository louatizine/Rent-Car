import "./Agency.css";
import img from "../Assests/homeImage.png";

const Agency = () => {
  // Team data stored directly in the component
  const team = [
    {
      list: "50",
      cover: img, // Use the imported image
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [
        <i className="fa-brands fa-facebook-f" key="fb"></i>,
        <i className="fa-brands fa-linkedin" key="li"></i>,
        <i className="fa-brands fa-twitter" key="tw"></i>,
        <i className="fa-brands fa-instagram" key="ig"></i>,
      ],
    },
    {
      list: "70",
      cover: img,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [
        <i className="fa-brands fa-facebook-f" key="fb"></i>,
        <i className="fa-brands fa-linkedin" key="li"></i>,
        <i className="fa-brands fa-twitter" key="tw"></i>,
        <i className="fa-brands fa-instagram" key="ig"></i>,
      ],
    },
    {
      list: "80",
      cover: img,
      address: "Denver, USA",
      name: "Anna K. Young",
      icon: [
        <i className="fa-brands fa-facebook-f" key="fb"></i>,
        <i className="fa-brands fa-linkedin" key="li"></i>,
        <i className="fa-brands fa-twitter" key="tw"></i>,
        <i className="fa-brands fa-instagram" key="ig"></i>,
      ],
    },
    // Add more team members as needed
  ];

  return (
    <section className="team background">
      <div className="container">
        <div className="content">
          {team.map((val, index) => (
            <div className="box" key={index}>
              <button className="btn3">{val.list} Listings</button>
              <div className="details">
                <div className="img">
                  <img src={val.cover} alt={val.name} />
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <i className="fa fa-location-dot"></i>
                <label>{val.address}</label>
                <h4>{val.name}</h4>
                <ul>
                  {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <div className="button flex">
                  <button>
                    <i className="fa fa-envelope"></i>
                    Message
                  </button>
                  <button className="btn4">
                    <i className="fa fa-phone-alt">Call</i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agency;
