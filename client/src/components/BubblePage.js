import React, { useState, useEffect } from "react";
import axios from "axios";



import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { connect } from "react-redux";

import { fetchColors } from '../store/actions'
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  const { fetchColors, isLoading, error, colors } = props;
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    // fetchColors();

    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        setColorList(res.data)   
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    colors: state.colorsData,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchColors}) (BubblePage);
