import Image from "next/image";
export default function ProductDetails(){
    return(
        <div>
            <h2>Product Details</h2>
            <p>Product: Laptop</p>
            <p>Price: $1200</p>
            <p>Description: This is a high-performance laptop suitable for gaming and productivity.</p>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYvQs_n_fIqfduy9oMhjkC2OQ5bZf2kUroJVvn8xq7dpvtyk42QMdGhLd&s=10" alt="Image"
             width={500}
              height={500}
              unoptimized
              
              />
        </div>
    )
}