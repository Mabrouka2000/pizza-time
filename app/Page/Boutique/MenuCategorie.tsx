import store from "@/app/components/store";
import { card } from "@/app/constants/constants";
import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import Modal from "../modal/Modal";

function MenuCategorie() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Ajout de l'état pour la valeur sélectionnée

  const { id } = useSnapshot(store);
  const categorieShop: any = Object.values(card.categories).filter(
    (el: any) => el.shopid === id
  );

  // Fonction pour gérer le changement d'option dans la liste déroulante
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setShowModal(true); // Afficher le modal lorsque l'option est sélectionnée
  };

  return (
    <Card>
      <div className="d-flex justify-content-between">
        <div className="mt-2">
          <ul style={{ backgroundColor: "#FFFFFF" }}>
            {categorieShop.slice(0, 10).map((value: any, index: number) => (
              <li key={index} onClick={() => setShowModal(true)}>
                {value.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          {/* Utilisation de handleSelectChange pour gérer le changement de sélection */}
          <select
            className="max-w-xs nav-link mx-5"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {categorieShop
              .slice(10, categorieShop.length)
              .map((value: any, index: number) => (
                <option key={index} value={value.title}>
                  {value.title}
                </option>
              ))}
          </select>
          {showModal && (
            <>
              <div
                className="modal-background"
                onClick={() => setShowModal(false)}
              />
              <Modal setShowModal={setShowModal} showModal={showModal} />
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

export default MenuCategorie;
