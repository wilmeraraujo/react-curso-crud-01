import React,{useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name:"pantalon",
        description: "blanco"
    },
    {
        id: 2,
        name:"camisa",
        description: "azul"
    },
    {
        id: 3,
        name:"camiseta",
        description: "verde"
    }
];

const  CrudApp = () => {
    const [db,setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        //console.log(data);
        data.id = Date.now();
        setDb([...db, data]);
    };
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data:el);
        setDb(newData);
    };
    const deleteData = (id) => {
        let isDelete = window.confirm(`Seguro de eliminar el registro de id '${id}'?`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }else{
            return;
        }
    };
    return (
        <div>
            <h2>CRUD APP</h2>
            <article className = "grid-1-2">
                <CrudForm 
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                <CrudTable 
                    data={db} 
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />    
            </article>
            
        </div>
    )
}

export default CrudApp;