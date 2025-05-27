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
            <div className="flex flex-col h-5/6 rounded-lg border border-gray-200 p-3 m-a mb-15 bg-gray-800 w-5/6 text-white">
                <h1 className="text-left">Mon profil GitHub</h1> <hr />
                <div className="grid grid-cols-2">
                    <img src={profil.avatar_url} alt="" className="w-sm"/>
                <div className="">
                    <a href={profil.html_url}>{profil.name}</a><hr />
                    <p>As we all know, John Doe's identify</p><hr />
                    <p>Repositories : {profil.public_repos}</p><hr />
                    <p>Followers : {profil.followers}</p><hr />
                    <p>Following : {profil.following}</p>
                </div>
                </div> <hr />
                <div className="text-right">
                    <button type="button" onClick={onClose} class="focus:outline-none text-white bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Fermer</button>  
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
        <button onClick={handleOpenModal} type="button" class="focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">En savoir plus</button>
  
        {showModal && (
          <Modal onClose={handleCloseModal} />
        )}
      </div>
    );
  }

export default PopUpGitHub