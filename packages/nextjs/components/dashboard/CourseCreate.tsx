import React, {useEffect, useState} from 'react';
import feather from 'feather-icons';

const CourseCreate: React.FC = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        url: '',
        tokens: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement your logic to submit data to a smart contract here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="col-lg-12 mt-3">
            <div className="card border-0 rounded shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="clipboard" className="fea icon-sm icons"/>
                                        <input name="name" id="name" type="text" className="form-control ps-5"
                                               placeholder="Name :"
                                               value={formData.name}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Token Value</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="circle" className="fea icon-sm icons"/>
                                        <input name="tokens" id="token" type="number" className="form-control ps-5"
                                               placeholder="Tokens :"
                                               value={formData.tokens}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Image Url :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="globe" className="fea icon-sm icons"/>
                                        <input name="url" id="url" type="url" className="form-control ps-5"
                                               placeholder="Url :"
                                               value={formData.url}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="message-circle" className="fea icon-sm icons"/>
                                        <textarea name="description" id="description" rows={4}
                                                  className="form-control ps-5"
                                                  placeholder="Description :"
                                                  value={formData.description}
                                                  onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-end">
                                <input type="submit" id="submit" name="send" className="btn btn-primary"
                                       value="Create"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseCreate;
