import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Div, ButtonWrapper, Button, SelectedButton } from "./style";

const Header = ({ isCreate }) => {
  // const [isCreate, setIsCreate] = useState(true);
  //   const [notesNumber, setNotesNumber] = useState(0);

  //   useEffect(() => {
  //     const arr = JSON.parse(window.localStorage.getItem("calendarNote"));
  //     if (arr.length) setNotesNumber(arr.length);
  //     console.log("notesNumber: ", notesNumber);
  //   }, [
  //     notesNumber,
  //     JSON.parse(window.localStorage.getItem("calendarNote")).length,
  //   ]);

  return (
    <Div>
      <ButtonWrapper>
        {isCreate && <SelectedButton>创建</SelectedButton>}
        {!isCreate && (
          <Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              创建
            </Link>
          </Button>
        )}
        {isCreate && (
          <Button>
            <Link
              to="/calendar"
              style={{ textDecoration: "none", color: "black" }}
            >
              查看
            </Link>
          </Button>
        )}
        {!isCreate && <SelectedButton>查看</SelectedButton>}
      </ButtonWrapper>
    </Div>
  );
};

export default Header;
