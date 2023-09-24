import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <div className="position-relative">
                <h4 className="title mb-4">How it Works!</h4>
              </div>
              <p className="text-muted mx-auto para-desc mb-0">Find a step by step guide on how Rewardt works.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-4 pt-2">
            <div className="timeline-page position-relative">
              <div className="timeline-item">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="duration date-label-left position-relative text-md-end">
                      <Image
                        src="/assets/images/icon/card.svg"
                        className="avatar avatar-sm"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="my-2">Step 1</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                    <div className="event event-description-right float-left text-start">
                      <h6 className="title mb-1 text-capitalize">Connect wallet</h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-muted">
                        To participate in the reward system, a user must first connect their digital wallet to the
                        platform or application where the reward system is implemented. This wallet serves as the user's
                        digital identity and storage for the tokens they will earn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-2">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                    <div className="event event-description-left float-left text-end">
                      <h6 className="title mb-1 text-capitalize">Create or join a Program</h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-muted">
                        Users have the option to either create their own reward program or join existing ones. Creating
                        a program typically involves defining the rules, objectives, and criteria for earning tokens.
                        Joining a program means agreeing to abide by the rules and conditions set by the program
                        creator.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                    <div className="duration duration-right position-relative">
                      <Image
                        src="/assets/images/icon/ticket3.svg"
                        className="avatar avatar-sm"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="my-2">Step 2</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-2">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                    <div className="duration date-label-left position-relative text-md-end">
                      <Image
                        src="/assets/images/icon/clock.svg"
                        className="rounded-pill avatar avatar-ex-small"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="my-2">Step 3</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                    <div className="event event-description-right float-left text-start">
                      <h6 className="title mb-1 text-capitalize">Perform or Add Tasks</h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-muted">
                        Within the chosen program, users are presented with a set of tasks or activities they can
                        complete to earn tokens. These tasks can vary widely, from simple actions like sharing content
                        or referring friends to more complex actions like developing a Dapp or running a blockchain
                        node.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-2">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                    <div className="event event-description-left float-left text-end">
                      <h6 className="title mb-1 text-capitalize">Graded and Awarded Tokens</h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-muted">
                        As users complete tasks, the system tracks their progress and evaluates their performance based
                        on predefined criteria. This evaluation can involve automated algorithms or manual reviews,
                        depending on the nature of the tasks. Users are awarded tokens based on the quality and quantity
                        of their completed tasks. High-quality or more challenging tasks often yield a higher number of
                        tokens as an incentive for users to put in more effort.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                    <div className="duration duration-right position-relative">
                      <Image
                        src="/assets/images/icon/cubes.png"
                        className="rounded-pill avatar avatar-ex-small"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="my-2">Step 4</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-2">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                    <div className="duration date-label-left position-relative text-md-end">
                      <Image
                        src="/assets/images/icon/credit-card.svg"
                        className="avatar avatar-ex-small"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="my-2">Step 5</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                    <div className="event event-description-right float-left text-start">
                      <h6 className="title mb-1 text-capitalize">Redeem Tokens</h6>
                      <p className="timeline-subtitle mt-3 mb-0 text-muted">
                        Once users have accumulated a certain amount of tokens, they have the option to redeem them for
                        various rewards or benefits. These rewards can include: Digital Goods, Discounts and Coupons,
                        Real-World Rewards, Access and Privileges, Bragging Rights, Certificates etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
