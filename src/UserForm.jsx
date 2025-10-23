import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "./feature/userSlice";
import { userSelectors } from "./store/userSelectors";

export default function UserForm() {
  const name = useRef(null);
  const age = useRef(null);
  const country = useRef(null);
  const user = useSelector(userSelectors)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {

    dispatch(updateUser({
      name: name.current.value,
      age: age.current.value,
      country: country.current.value,

   }))

  }

  const resetUserCallback = (e) => {
    e.preventDefault()
    dispatch(resetUser())
  }
  return (
    <>


      <div className="d-flex justify-content-between gap-3 pt-3 border-top">

        {/* Update Button */}
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"

          className="btn btn-outline-primary flex-grow-1 d-flex align-items-center justify-content-center fw-bold rounded-3 py-2 "
        >
          <div className="me-2" />
          Update
        </button>

        {/* Delete Button */}
        <button
          className="btn btn-danger flex-grow-1 d-flex align-items-center justify-content-center fw-bold rounded-3 py-2"
          onClick={resetUserCallback}
        >
          <div className="me-2" />
          Delete
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Your Profile:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter full name"
                    defaultValue={user.name}
                    ref={name}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Enter age"
                    defaultValue={user.age}
                    ref={age}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    defaultValue={user.country}
                    ref={country}
                  >
                    <option value="">-- Select Country --</option>
                    <option value="ma">Morocco</option>
                    <option value="fr">France</option>
                    <option value="us">USA</option>
                    <option value="ca">Canada</option>
                    <option value="jp">Japan</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"
                onClick={handleSubmit}
                data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
