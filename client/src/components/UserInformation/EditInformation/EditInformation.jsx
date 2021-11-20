import React from "react";
export default function EditInformation() {
    return (
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <h4 className="text-dark">
                  Chỉnh sửa thông tin cá nhân
                </h4>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              {/* <form className="formRegister" onSubmit={handleSubmit}> */}
                <div className="form-group">
                  <input
                    className="input"
                    name="taiKhoan"
                    placeholder="Tên tài khoản"
                    // value={state.values.taiKhoan}
                    // onChange={handleChangeInput}
                    // disabled
                  />
                  {/* <span className="text-danger">{state.errors.taiKhoan}</span> */}
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    // value={state.values.matKhau}
                    // onChange={handleChangeInput}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="hoTen"
                    type="text"
                    placeholder="Họ tên"
                    // value={state.values.hoTen}
                    // onChange={handleChangeInput}
                  />
                  {/* <span className="text-danger">{state.errors.hoTen}</span> */}
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    // value={state.values.email}
                    // onChange={handleChangeInput}
                  />
                  {/* <span className="text-danger">{state.errors.email}</span> */}
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="soDT"
                    type="text"
                    placeholder="Số điện thoại"
                    // value={state.values.soDT}
                    // onChange={handleChangeInput}
                  />
                  {/* <span className="text-danger">{state.errors.soDienThoai}</span> */}
                </div>
                <div className="form-group">
                  <button
                    className="btnChange btn-block"
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "#60c5ef",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  >
                    Thay đổi thông tin
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      );

}