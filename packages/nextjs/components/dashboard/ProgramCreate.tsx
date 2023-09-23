import React, {useEffect, useState} from 'react';
import feather from 'feather-icons';
import {useScaffoldContract, useScaffoldContractWrite} from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";

interface ProgramCreateProps {
    resourceCreated: (type: string, blockHash: string) => void;
}

const ProgramCreate: React.FC<ProgramCreateProps> = (resourceCreated) => {
    useEffect(() => {
        feather.replace()
    }, []);

    const getExternalId = (length: number = 2) => {
        const timestamp = new Date().getTime().toString(16);
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * randomChars.length);
            randomString += randomChars.charAt(randomIndex);
        }

        return timestamp + randomString;
    };
    const [formData, setFormData] = useState({externalId: getExternalId(), name: '', description: ''});
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const {data: classReward} = useScaffoldContract({
        contractName: "ClassReward",
    });

// Returns the greeting and can be called in any function, unlike useScaffoldContractRead
    await classReward?.read.greeting();

// Used to write to a contract and can be called in any function

    const {data: walletClient} = useWalletClient();
    const {data: yourContract} = useScaffoldContract({
        contractName: "YourContract",
        walletClient,
    });
    const setGreeting = async () => {
        // Call the method in any function
        await yourContract?.write.setGreeting(["the greeting here"]);
    };

    const {writeAsync} = useScaffoldContractWrite({
        contractName: "ClassReward",
        functionName: "createProgram",
        args: [formData.externalId, formData.name, formData.description],
        onBlockConfirmation: (txnReceipt) => {
            console.log("Transaction blockHash", txnReceipt.blockHash);
        },
        onError: (error) => {
            console.log('error', error)
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value,});
    };

    const account = useAccount()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log('Form data submitted:', formData);
            const tx = await classReward?.connect(account.address).createProgram(formData);
            console.log("Transaction successful:", tx);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="col-lg-12 mt-3">
            {showAlert &&
                <div className={`alert alert-dismissible fade show text-capitalize bg-soft-danger'`} role="alert">
                    {alertMessage}
                    <button onClick={() => setShowAlert(false)} type="button" className="btn btn-soft btn-close"
                            data-bs-dismiss="alert" aria-label="Close"/>
                </div>}

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
                                               onChange={handleChange}
                                               required
                                        />
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
                                                  onChange={handleChange}
                                                  required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-end">
                                <button type="submit" id="submit" className="btn btn-primary" onClick={() => writeAsync}
                                >Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProgramCreate;
