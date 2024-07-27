document
  .getElementById("account-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById("email");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const password = document.getElementById("password");
    const userType = document.querySelector('input[name="user-type"]:checked');

    if (email.value === "") {
      isValid = false;
      document.getElementById("email-error").textContent =
        "Please add valid email address.";
      document.getElementById("email-error").style.display = "block";
      email.classList.add("error");
    } else {
      document.getElementById("email-error").style.display = "none";
      email.classList.remove("error");
    }

    if (day.value !== "" && month.value !== "" && year.value !== "") {
      const dayValue = parseInt(day.value);
      const monthValue = parseInt(month.value);
      const yearValue = parseInt(year.value);
      const daysInMonth = getDaysInMonth(monthValue, yearValue);

      if (dayValue < 1 || dayValue > daysInMonth) {
        isValid = false;
        document.getElementById(
          "dob-error"
        ).textContent = `Please enter valid date. ${
          month.options[month.selectedIndex].text
        } has ${daysInMonth} days.`;
        document.getElementById("dob-error").style.display = "block";
        day.classList.add("error");
        month.classList.add("error");
        year.classList.add("error");
      } else {
        document.getElementById("dob-error").style.display = "none";
        day.classList.remove("error");
        month.classList.remove("error");
        year.classList.remove("error");
      }
    } else if (day.value === "" || month.value === "" || year.value === "") {
      document.getElementById("dob-error").textContent =
        "Please fill out all date fields.";
      document.getElementById("dob-error").style.display = "block";
      day.classList.add("error");
      month.classList.add("error");
      year.classList.add("error");
      isValid = false;
    } else {
      document.getElementById("dob-error").style.display = "none";
      day.classList.remove("error");
      month.classList.remove("error");
      year.classList.remove("error");
    }

    if (password.value === "") {
      isValid = false;
      document.getElementById("password-error").textContent =
        "Please choose a strong password.";
      document.getElementById("password-error").style.display = "block";
      password.classList.add("error");
    } else {
      document.getElementById("password-error").style.display = "none";
      password.classList.remove("error");
    }

    if (!userType) {
      isValid = false;
      document.getElementById("user-type-error").textContent =
        "Please select user type.";
      document.getElementById("user-type-error").style.display = "block";
    } else {
      document.getElementById("user-type-error").style.display = "none";
    }

    if (isValid) {
      // Form submission logic here
      alert("Form submitted successfully!");
    }
  });

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function disableScroll() {
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
}

window.addEventListener("load", disableScroll);

document.body.style.overflow = 'hidden';
