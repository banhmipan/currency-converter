const symbolArray = [
  '$', '€', '£', '¥', '₫'
]

const mainForm = document.forms['main-form'];
const resultTxt = document.getElementById('result');
let convRate;
let firstSymbol;
let convSymbol;

// from
const fromMenu = mainForm.from;
const fromOptions = mainForm.from.options;
fromMenu.required = true;

// to
const toMenu = mainForm.to;
const toOptions = mainForm.to.options;
toMenu.required = true;

mainForm.onsubmit = function(event) {
  event.preventDefault()

  const fromOptionValue = this.from.value;
  const toOptionValue = this.to.value;

  // symbols
  if (fromOptionValue === 'usd' || fromOptionValue === 'cad' || fromOptionValue === 'mxn') {
    firstSymbol = symbolArray[0];
  } else if (fromOptionValue === 'eur') {
    firstSymbol = symbolArray[1];
  } else if (fromOptionValue === 'gbp') {
    firstSymbol = symbolArray[2];
  } else if (fromOptionValue === 'cny' || fromOptionValue === 'jpy') {
    firstSymbol = symbolArray[3];
  } else if (fromOptionValue === 'vnd') {
    firstSymbol = symbolArray[4];
  }
  
  if (toOptionValue === 'usd' || toOptionValue === 'cad' || toOptionValue === 'mxn') {
    finalSymbol = symbolArray[0];
  } else if (toOptionValue === 'eur') {
    finalSymbol = symbolArray[1];
  } else if (toOptionValue === 'gbp') {
    finalSymbol = symbolArray[2];
  } else if (toOptionValue === 'cny' || toOptionValue === 'jpy') {
    finalSymbol = symbolArray[3];
  } else if (toOptionValue === 'vnd') {
    finalSymbol = symbolArray[4];
  }

  // usd --> ...
  if (fromOptionValue === 'usd') {

    // usd --> usd
    if(toOptionValue === 'usd') {
      convRate = 1;
    
    // usd --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 1.37;
    
    // usd --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 18.84;
    
    // usd --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.91;
    
    // usd --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.78;
    
    // usd --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 7.14;

    // usd --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 146.79;

    // usd --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 25035;
    }
    
  }
  
  // cad --> ...
  else if (fromOptionValue === 'cad') {
    // cad --> usd
    if(toOptionValue === 'usd') {
      convRate = 0.73;
    
    // cad --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 1;
    
    // cad --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 13.76;
    
    // cad --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.66;
    
    // cad --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.57;
    
    // cad --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 5.23;

    // cad --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 107.16;

    // cad --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 18284;
    }
  }

  // mxn --> ...
  else if (fromOptionValue === 'mxn') {
    // mxn --> usd
    if(toOptionValue === 'usd') {
      convRate = 0.053;
    
    // mxn --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 0.073;
    
    // mxn --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 1;
    
    // mxn --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.048;
    
    // mxn --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.041;
    
    // mxn --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 0.38;

    // mxn --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 7.78;

    // mxn --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 1328.35;
    }
  }

  // eur --> ...
  else if (fromOptionValue === 'eur') {
    // eur --> usd
    if(toOptionValue === 'usd') {
      convRate = 1.10;
    
    // eur --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 1.51;
    
    // eur --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 20.82;
    
    // eur --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 1;
    
    // eur --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.86;
    
    // eur --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 7.90;

    // eur --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 161.97;

    // eur --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 27648.90;
    }
  }

  // gpb --> ...
  else if (fromOptionValue === 'gbp') {
    // gbp --> usd
    if(toOptionValue === 'usd') {
      convRate = 1.29;
    
    // gbp --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 1.76;
    
    // gbp --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 24.21;
    
    // gbp --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 1.16;
    
    // gbp --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 1;
    
    // gbp --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 9.18;

    // gbp --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 188.65;

    // gbp --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 32195.89;
    }
  }

  // cny --> ...
  else if (fromOptionValue === 'cny') {
    // cny --> usd
    if(toOptionValue === 'usd') {
      convRate = 0.14;
    
    // cny --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 0.19;
    
    // cny --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 2.64;
    
    // cny --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.13;
    
    // cny --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.11;
    
    // cny --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 1;

    // cny --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 20.54;

    // cny --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 3507.83;
    }
  }
  
  // jpy --> ...
  else if (fromOptionValue === 'jpy') {
    // jpy --> usd
    if(toOptionValue === 'usd') {
      convRate = 0.0068;
    
    // jpy --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 0.0093;
    
    // jpy --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 0.13;
    
    // jpy --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.0062;
    
    // jpy --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.0053;
    
    // jpy --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 0.049;

    // jpy --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 1;

    // jpy --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 170.67;
    }
  }

  // vnd --> ...
  else if (fromOptionValue === 'vnd') {
    // vnd --> usd
    if(toOptionValue === 'usd') {
      convRate = 0.000040;
    
    // vnd --> cad
    } else if (toOptionValue === 'cad') {
      convRate = 0.000055;
    
    // vnd --> mxn
    } else if (toOptionValue === 'mxn') {
      convRate = 0.00075;
    
    // vnd --> eur
    } else if (toOptionValue === 'eur') {
      convRate = 0.000036;
    
    // vnd --> gpb
    } else if (toOptionValue === 'gbp') {
      convRate = 0.000031;
    
    // vnd --> cny
    } else if (toOptionValue === 'cny') {
      convRate = 0.00029;

    // vnd --> jpy
    } else if (toOptionValue === 'jpy') {
      convRate = 0.0059;

    // vnd --> vnd
    } else if (toOptionValue === 'vnd') {
      convRate = 1;
    }
  }

  console.log(`${fromOptionValue} --> ${toOptionValue}`);
  let amount = document.getElementById('amount').value;
  let firstResult = amount * convRate;
  let roundedResult = firstResult.toFixed(2);
  resultTxt.textContent = `${firstSymbol}${amount} ${fromOptionValue} --> ${finalSymbol}${roundedResult} ${toOptionValue}`;
}

// dark mode
const darkModeBtn = document.getElementById('dark-mode-btn');
const elements = document.querySelector('body');
const billImg = document.getElementById('bill-img');

darkModeBtn.addEventListener('click', () => {
  elements.classList.toggle('dark-mode');
})