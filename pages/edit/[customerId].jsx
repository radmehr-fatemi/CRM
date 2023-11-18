import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Component
import EditPage from "../../components/template/edit/EditPage";

const Edit = () => {

    const router = useRouter();
    const { query: { customerId }, isReady } = router;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (customerId?.length) {
            fetch(`/api/customer/${customerId}`)
                .then(res => res.json())
                .then(data => setData(data.data))
        }
    }, [customerId])

    if ( !data ) return <h2 style={{ textAlign:"center" ,padding:"2rem" }} >Loading...</h2>

    if (data) return <EditPage data={data} setData={setData} />
};

export default Edit;