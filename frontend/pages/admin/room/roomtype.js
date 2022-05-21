import ListTable from "../../compoment/Admin/Room/roomtype/ListTable";
import Modal from "../../compoment/Admin/Room/roomtype/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const RoomType = () => {
  const [modal, setModal] = useState(false);
  const [roomtype, setroomtype] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/roomtypes")
      .then((res) => setroomtype(res.data));
  },[])

  
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Roomtype
      </div>

      <Modal modal={modal} setModal={setModal} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          data-target="modal-js-example"
          onClick={() => setModal(true)}
        >
          ADD
        </button>
      </div>

      <hr className="mt-0" />

      <ListTable roomtype={roomtype}/>
    </AdminLayout>
  );
};

export default RoomType;
