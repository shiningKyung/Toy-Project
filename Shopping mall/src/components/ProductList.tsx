import { useEffect, useState } from "react"
import axios from "axios";

const ProductList = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("https://fakestoreapi.com/products?limit=12");
            console.log(result.data);

            return result.data;
        }
        fetchData().then((res) => {
            setDocs(res);
        })
    }, []);
    
    // 카테고리 필터
    const filterList = (doc) => {
        (doc.categpry === "men's clothing")
    }

    return (
        <div>
            상품리스트 페이지
            <h2 className="text-xl text-left">고객님을 위한 추천상품</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
                {docs.map((doc) => (
                    <>
                        <a className="card card-compact w-72 h-80 bg-base-100 shadow-xl text-slate-900">
                            <figure><img src={doc.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h3 className="card-title text-base">{doc.title}</h3>
                                <span className="justify-start">{doc.price}$</span>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">상세보기</button>
                                </div>
                            </div>
                        </a>
                    </>

                ))}
            </div>
        </div>
    )
}

export default ProductList