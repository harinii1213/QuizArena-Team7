document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let status = document.getElementById("status");

if(name === "" || email === "" || message === "")
{
    status.innerHTML = "❌ Please fill all fields.";
    status.style.color = "red";
}
else
{
    status.innerHTML = "✅ Message Sent Successfully!";
    status.style.color = "green";

    document.getElementById("contactForm").reset();
}

});