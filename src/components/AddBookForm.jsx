import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import slug from "slug";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1001;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const Back = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const AddBookForm = ({ onAdd, isVisible, setIsVisible }) => {
  const [title, setTitle] = useState("");
  const [mySlug, setMySlug] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    if (title.length <= 3) return;
    onAdd({ title });
    setTitle("");
    setMySlug("");
  };
  useEffect(() => {
    setMySlug(slug(title));
  }, [title]);
  if (isVisible) {
    return ReactDom.createPortal(
      <>
        <Back onClick={() => setIsVisible(false)}></Back>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter book title"
          />
          <Input type="text" value={mySlug} placeholder="Slug" readOnly />
          <Button type="submit">Add Book</Button>
        </Form>
      </>,
      document.getElementById("portal")
    );
  }
};

export default AddBookForm;
