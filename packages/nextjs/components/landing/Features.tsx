import React from "react";
import Link from "next/link";

const Features = () => {
  const featureData = [
    {
      id: 1,
      icon: "/assets/images/icon/chat.svg",
      title: "Customizable Reward Tokens",
      description:
        "Earn points for achieving academic goals or participating in extracurricular activities. Redeem tokens as NFTs or FTs.",
    },
    {
      id: 3,
      icon: "/assets/images/icon/user.svg",
      title: "Security & Transparency",
      description:
        "Robust security measures like encryption and access controls, to ensure adherence to privacy compliance standards.",
    },
    {
      id: 4,
      icon: "/assets/images/icon/domain.png",
      title: "Educational Tools Integration",
      description: "Integrate with existing educational tools and systems, such as LMSs to gather achievement data.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div
              className="section-title mb-4 pb-2 wow animate__ animate__fadeInUp animated"
              data-wow-delay=".1s"
              style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}
            >
              <h4 className="title my-4">Amazing features await you!</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                We offer various features to promote positive behavior and incentivize students for their achievements
                and contributions.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {featureData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div
                className={`card categories category-primary text-center rounded border-0 wow animate__ animate__fadeInUp animated`}
                data-wow-delay={`${0.3 + index * 0.2}s`}
                style={{
                  visibility: "visible",
                  animationDelay: `${0.3 + index * 0.2}s`,
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-body">
                  <img src={feature.icon} className="avatar avatar-small mb-3" alt="" />
                  <h5>
                    <Link href="#" className="title text-dark">
                      {feature.title}
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 mt-3">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
