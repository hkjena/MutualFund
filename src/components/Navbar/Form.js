import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { setChartData } from "../../actions/index";
import { setAllData } from "../../actions/index";

const FormComponent = ({
  handelClose,
  width,
  datas,
  setAllData,
  setChartData
}) => {
  const [select, setSelect] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [ia, setIa] = useState("");

  useEffect(() => {
    setSelect("");
    setPrice("");
    setQty("");
    setIa("");
  }, [width]);

  const handelChange = e => {
    setSelect(e.target.value);
    if (e.target.value === "") {
      setPrice("");
      setQty("");
      setIa("");
      return;
    }
    const [{ price, quantity, invested_amount }] = datas.filter(
      data => data.scrip === e.target.value
    );
    setPrice(price);
    setQty(quantity);
    setIa(invested_amount);
  };

  const handelSubmit = async e => {
    e.preventDefault();
    await setAllData({
      scrip: select,
      price,
      quantity: qty,
      invested_amount: ia
    });
    setChartData();
    handelClose(0);
  };

  return (
    <Form id="frm" onSubmit={handelSubmit} style={{ padding: "20px" }}>
      <Form.Label>Select</Form.Label>
      <Form.Control
        as="select"
        value={select}
        onChange={handelChange}
        custom
        required
      >
        <option className="text-muted pl-5" value="">
          Select...
        </option>
        {datas &&
          datas.map(({ scrip }) => <option key={scrip}>{scrip}</option>)}
      </Form.Control>

      <Form.Label>Price</Form.Label>
      <Form.Control
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value && +e.target.value)}
        placeholder="Price"
      />

      <Form.Label>Quantity</Form.Label>
      <Form.Control
        type="text"
        placeholder="Quantity"
        value={qty}
        onChange={e => setQty(e.target.value && +e.target.value)}
      />

      <Form.Label>Invested Amount</Form.Label>
      <Form.Control
        type="text"
        placeholder="Invested Amount"
        value={ia}
        onChange={e => setIa(e.target.value && +e.target.value)}
      />

      <Button className="mt-4" variant="primary" type="submit" block>
        SUBMIT
      </Button>
    </Form>
  );
};
const mapStateToProps = state => {
  return { datas: state.data };
};

export default connect(
  mapStateToProps,
  { setChartData, setAllData }
)(FormComponent);
