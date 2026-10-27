const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();
    
    message.className="";
    message.innerHTML="";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const category = document.getElementById("category").value;
    const bio = document.getElementById("bio").value.trim();

    const gender =
    document.querySelector('input[name="gender"]:checked');

    const attendance =
    document.querySelector('input[name="attendance"]:checked');

    const interests = [];
    document
    .querySelectorAll('.checkbox-group input:checked')
    .forEach(item=>{
        interests.push(item.value);
    });
    if(name===""){
        showError("Full Name is required.");
        return;
    }
    if(email===""){
        showError("Email is required.");
        return;
    }
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        showError("Please enter a valid email.");
        return;
    }
    if(phone===""){
        showError("Phone Number is required.");
        return;
    }
    if(phone.length < 11){
        showError("Phone number must have at least 11 digits.");
        return;
    }
    if(age===""){
        showError("Age is required.");
        return;
    }
    if(!gender){
        showError("Please select your gender.");
        return;
    }
    if(category===""){
        showError("Please select an event category.");
        return;
    }
    if(!attendance){
        showError("Please choose attendance type.");
        return;
    }

    if(interests.length===0){
        showError("Please select at least one interest.");
        return;
    }

    if(bio===""){
        showError("Short Bio is required.");
        return;
    }

    message.classList.add("success");
    message.innerHTML=
    "🎉 Registration Successful!<br><br>Thank you for registering for our event.";

    console.log("Registration Details");
    console.log("-------------------------");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Age:", age);
    console.log("Gender:", gender.value);
    console.log("Category:", category);
    console.log("Attendance:", attendance.value);
    console.log("Interests:", interests.join(", "));
    console.log("Bio:", bio);

    form.reset();

});

function showError(text){
    message.classList.add("error");
    message.innerHTML=text;
}