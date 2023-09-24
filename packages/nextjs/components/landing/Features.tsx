import React from "react";
import Link from "next/link";

const Features = () => {
  const featureData = [
    {
      id: 1,
      icon: "/assets/images/icon/chat.svg",
      title: "Reward Points System",
      description:
        "Earn points for achieving academic goals, participating in extracurricular activities, or displaying positive behavior.",
    },
    {
      id: 2,
      icon: "/assets/images/icon/customer-service.svg",
      title: "Gamification",
      description:
        "Gamification elements like badges, levels, and challenges to engage students and make the reward system more enjoyable.",
    },
    {
      id: 3,
      icon: "/assets/images/icon/user.svg",
      title: "Security and Trust",
      description:
        "Robust security measures like encryption and access controls, to ensure adherence to privacy compliance standards.",
    },
    {
      id: 4,
      icon: "/assets/images/icon/domain.png",
      title: "Educational Tools Integration",
      description: "Integrate with existing educational tools and systems, such as LMSs to gather achievement data.",
    },
    {
      id: 5,
      icon: "/assets/images/icon/hotel.svg",
      title: "Customizable Rewards",
      description:
        "Define a list of rewards, both NFTs (badges, certificates) and FTs (gift cards, discounts), that students can redeem.",
    },
    {
      id: 6,
      icon: "/assets/images/icon/speedometer.svg",
      title: "Blockchain Transparency",
      description:
        "Criteria for earning points and the allocation of rewards are clearly communicated to all users",
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
              <span className="badge rounded-pill bg-success">Features</span>
              <h4 className="title my-4">Communication Resources</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything
                you need to generate awareness, drive traffic, connect.
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
