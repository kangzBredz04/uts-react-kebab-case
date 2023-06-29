import Button from "./Button";
import { BsCartPlusFill } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function Product({
  id,
  name,
  image,
  price,
  kategori,
  setEditedProduct,
  setDeletedProduct,
  setProducts,
  products,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <div>
          <h4>({id})</h4>
          <h4>{name}</h4>
        </div>
        <div>
          <p>
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            })}
          </p>
          <p>({kategori})</p>
        </div>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
                kategori,
              })
            }
          >
            <BiSolidEditAlt />
          </Button>
          <Button>
            {() =>
              setDeletedProduct(
                confirm(
                  `Apakah Anda yakin ingin menghapus ${name} dengan alamat URL ${image}`
                ) && setProducts(products.filter((p) => p.id !== products.id))
              )
            }
            <MdDelete />
          </Button>
          <Button onClick={()=> {
            
          }}>
            <BsCartPlusFill />
          </Button>
        </div>
      </section>
    </div>
  );
}
