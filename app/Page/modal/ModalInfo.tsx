import store from "@/app/components/store";
import { card } from "@/app/constants/constants";
import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import Modal from "../modal/Modal";

function MenuCategorie() {
  const [showModal, setShowModal] = useState(false);

  const { id } = useSnapshot(store);
  const categorieShop: any = Object.values(card.categories).filter(
    (el: any) => el.shopid === id
  );

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
          <select
            className="max-w-xs nav-link mx-5"
            onClick={() => setShowModal(true)}
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
