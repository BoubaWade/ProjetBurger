import { BsFillCameraFill } from "react-icons/Bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export default function getTextInputConfig(newProduct, onChange) {
  return [
    {
      id: 0,
      value: newProduct.title,
      name: "title",
      className: "input",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger className={"icon"} />,
      onChange,
    },
    {
      id: 1,
      value: newProduct.imageSource,
      name: "imageSource",
      className: "input",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill className={"icon"} />,
      onChange,
    },
    {
      id: 2,
      value: newProduct.price ? newProduct.price : "",
      name: "price",
      className: "input",
      placeholder: "Prix",
      Icon: <MdOutlineEuro className={"icon"} />,
      onChange,
    },
  ];
}
