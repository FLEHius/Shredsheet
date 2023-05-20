const getVals = () => 
([sliderRange1, sliderRange2, sliderRange3]).map(item => item.value);


const updateValue = (values) => {
    const [v1, v2, v3] = values;
    return [slideroutput1.textContent, 
        slideroutput2.textContent, slideroutput3.textContent] = [v1, v2, v3];
  }

  container.addEventListener("input", (e) => {
    if (e.target && e.target.nodeName == "INPUT") {
      const values = getVals();
      updateValue(values);
    }
  });