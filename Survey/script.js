function submitForm() {
    // Retrieve form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = [...genderElements]
      .filter((el) => el.checked)
      .map((el) => el.value)
      .join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
  
    // Validate the form fields
    if (!validateFields(firstName, lastName, dob, country, gender, profession, email, mobile)) {
      alert("Please fill out all the required fields.");
      return false;
    }
  
    // Display a popup with the submitted data
    const popup = document.getElementById("popup");
    const popupData = document.getElementById("popup-data");
    popupData.innerHTML = `
      <li>First Name: ${firstName}</li>
      <li>Last Name: ${lastName}</li>
      <li>Date of Birth: ${dob}</li>
      <li>Country: ${country}</li>
      <li>Gender: ${gender}</li>
      <li>Profession: ${profession}</li>
      <li>Email: ${email}</li>
      <li>Mobile Number: ${mobile}</li>
    `;
    popup.style.display = "block";
  
    // Prevent form submission
    return false;
  }
  
  function resetForm() {
    document.getElementById("survey-form").reset();
  }
  
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  function validateFields(firstName, lastName, dob, country, gender, profession, email, mobile) {
    if (!firstName || !lastName || !dob || country === "" || !gender || !profession || !email || !mobile) {
      resetForm();
      return false;
    }
  
    // You can add more specific validation logic here
    // For example, validate the email format and mobile number format
  
    return true;
  }
  