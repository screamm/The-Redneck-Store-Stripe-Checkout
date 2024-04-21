import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import Logout from "./Logout";

const Header = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  const { cart, setUser } = useCart();
  const quantityProducts = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setUser({ email: userEmail });
    }
  }, [setUser]);

  return (
    <div className="flex items-center ml-10 pt-4">
      <Logout />


<div>
      <button className="ml-20 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out mt-4" onClick={() => setIsModalOpen(true)}> Cart - {quantityProducts}
      </button>
      </div>

    </div>
  );
};

export default Header;
