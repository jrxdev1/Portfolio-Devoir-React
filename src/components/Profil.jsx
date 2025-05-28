import data from "../assets/datas/githubProfil"
import { useState } from "react";


function Modal({ onClose }) {
    return (
      <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center mx-4 ">
        <div className="max-w-4xl p-6" onClick={(e) => e.stopPropagation()}>
        <ProfilGitHub onClose={onClose}></ProfilGitHub>
        </div>
      </div>
    );
  }


function ProfilGitHub ({onClose}) {

    const profil = data.profils;

    return (
            <div className="flex flex-col h-5/6 rounded-lg border border-gray-500 p-3 m-a mb-15 bg-gray-800 w-5/6 text-white">
                <h1 className="text-left mb-3">Mon profil GitHub</h1> <hr className="text-gray-500"/>
                <div className="grid md:grid-cols-2 m-5">
                    <img src={profil.avatar_url} alt="" className="w-sm"/>
                <div className="m-2">
                    <a href={profil.html_url} className="text-blue-600 underline flex flex-row"><img src="./src/assets/images/utilisateur.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/>{profil.name}</a><hr className="text-gray-500"/>
                    <p className="my-2"><img src="./src/assets/images/epingle.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/></p><hr className="text-gray-500"/>
                    <p className="my-2 flex flex-row"><img src="./src/assets/images/text.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/>As we all know, John Doe's identify is unknow. I just wanted t contribute without being known.</p><hr className="text-gray-500" />
                    <p className="my-2 flex flex-row"><img src="./src/assets/images/cube.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/>Repositories : {profil.public_repos}</p><hr className="text-gray-500"/>
                    <p className="my-2 flex flex-row"><img src="./src/assets/images/duo.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/>Followers : {profil.followers}</p><hr className="text-gray-500"/>
                    <p className="my-2 flex flex-row"><img src="./src/assets/images/duo.png" alt="" className="w-4 h-4 mr-2 invert mt-1"/>Following : {profil.following}</p>
                </div>
                </div> <hr className="text-gray-500"/>
                <div className="text-right">
                    <button type="button" onClick={onClose} className="focus:outline-none text-white bg-gray-500 font-medium rounded-lg text-sm px-4 py-2 mt-2">Fermer</button>  
                </div>
                </div>
    )
}


function PopUpGitHub() {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div className="text-white">
        <button onClick={handleOpenModal} type="button" className="focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">En savoir plus</button>
  
        {showModal && (
          <Modal onClose={handleCloseModal} />
        )}
      </div>
    );
  }

export default PopUpGitHub