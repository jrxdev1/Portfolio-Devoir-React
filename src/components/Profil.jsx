import { NavLink } from "react-router";
import data from "../assets/datas/githubProfil"

function ProfilGitHub () {

    const profil = data.profils;

    return (
            <div className="flex flex-col h-5/6 rounded-lg border border-gray-200 p-3 m-a mb-15 bg-gray-800 w-2/4 text-white">
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
                    <NavLink to="/">
                        <button type="button" class="focus:outline-none text-white bg-gray-300 hover:bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Fermer</button>
                    </NavLink>
                </div>
                </div>
    )
}

export default ProfilGitHub