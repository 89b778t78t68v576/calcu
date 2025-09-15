const display = document.getElementById('display');

    function append(value) {
      if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }

    function clearDisplay() {
      display.textContent = '0';
    }

    function deleteChar() {
      display.textContent = display.textContent.slice(0, -1) || '0';
    }

    function calculate() {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }