import React, { useEffect, useState } from "react";
import feather from "feather-icons";

interface RewardType {
  id: number;
  name: string;
}

interface RewardCreateProps {
  rewardTypes: RewardType[];
}

const TaskCreate: React.FC<RewardCreateProps> = rewardTypes => {
  useEffect(() => {
    feather.replace();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    tokens: 100,
    criteria: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your logic to submit data to a smart contract here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="col-lg-12 mt-3">
      <div className="card border-0 rounded shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <div className="form-icon position-relative">
                    <i data-feather="bookmark" className="fea icon-sm icons" />
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control ps-5"
                      placeholder="Name :"
                      value={formData.name}
                      onChange={event => handleChange(event)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    name="type"
                    value={formData.type}
                    onChange={event => handleChange(event)}
                  >
                    <option value="select type">Select Type</option>
                    {rewardTypes.rewardTypes.map((rewardType: RewardType) => (
                      <option key={rewardType.id} value={rewardType.id}>
                        {rewardType.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Tokens</label>
                  <div className="form-icon position-relative">
                    <i data-feather="circle" className="fea icon-sm icons" />
                    <input
                      name="tokens"
                      id="token"
                      type="number"
                      className="form-control ps-5"
                      placeholder="Token Value :"
                      value={formData.tokens}
                      disabled
                      onChange={event => handleChange(event)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Criteria</label>
                  <div className="form-icon position-relative">
                    <i data-feather="message-circle" className="fea icon-sm icons" />
                    <textarea
                      name="criteria"
                      id="criteria"
                      rows={4}
                      className="form-control ps-5"
                      placeholder="Criteria :"
                      value={formData.criteria}
                      onChange={event => handleChange(event)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-end">
                <input type="submit" id="submit" name="send" className="btn btn-primary" value="Create" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
