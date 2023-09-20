import React, {useEffect, useState} from 'react';
import feather from 'feather-icons';
import {useFetchBlocks, useScaffoldContractWrite} from "~~/hooks/scaffold-eth";

const ProgramCreate: React.FC = () => {
    const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
        contractName: "ClassReward",
        functionName: "createProgram",
        args: [],
        // For payable functions, expressed in ETH
        value: "0.01",
        // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
        blockConfirmations: 1,
        // The callback function to execute when the transaction is confirmed.
        onBlockConfirmation: (txnReceipt) => {
            console.log("Transaction blockHash", txnReceipt.blockHash);
        },
    });

    useEffect(() => {
        feather.replace()
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value,});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement your logic to submit data to a smart contract here
        console.log('Form data submitted:', formData);
        writeAsync(formData).then(r => console.log(r))
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
                                        <i data-feather="clipboard" className="fea icon-sm icons"/>
                                        <input name="name" id="name" type="text" className="form-control ps-5"
                                               placeholder="Name :"
                                               value={formData.name}
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
                                <input type="submit" id="submit" className="btn btn-primary" value="Create"
                                       onClick={() => writeAsync()}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProgramCreate;
