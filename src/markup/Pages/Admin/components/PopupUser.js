import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import bnr1 from './../../../../images/banner/banner.svg';
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                اضافة طالب
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>اضافة طالب</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="input-group input-group-outline">
                      
                        <input type="text" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)" placeholder="البحث" />
                        <button class="btn bg-gradient-success w-100 mb-0 toast-btn mr-2" type="button" data-target="dangerToast">بحث</button>

                    </div>
                    <div class="table-responsive p-0">

                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>

                                    {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th> */}

                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        اضافة
                                    </th>

                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الشعبة</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الاسم الاول</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الاسم الثاني</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الرقم الوطني</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">رقم الجوال</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الحالة الاجتماعية</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">العنوان</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">حفظ القران</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">النوع</th>



                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td class="align-middle text-center text-sm">
                                        <span class="text-secondary text-xs font-weight-bold">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefaultt" value="" /><label class="form-check-label" for="flexCheckDefaultt"></label></div>
                                        </span>

                                    </td>


                                    <td class="align-middle text-center text-sm">
                                        <span class="text-secondary text-xs font-weight-bold"> أ   </span>

                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span class="text-secondary text-xs font-weight-bold"> منذر   </span>

                                    </td>

                                    <td class="align-middle text-center text-sm">
                                        <span class="text-secondary text-xs font-weight-bold">ابو عبدلله</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">53434424</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">53434424</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">مطلق</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">غزة</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">30</span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">طالب</span>
                                    </td>





                                </tr>





                            </tbody>
                        </table>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        الغاء
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        اضافة
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;