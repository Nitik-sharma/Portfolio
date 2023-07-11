function sendMail() {
  var data = {
    Ename: document.getElementById("name").value,
    Email: document.getElementById("Email").value,
    message: document.getElementById("text").value,
  };

  const serviceId = "service_baejkke";
  const templateId = "template_icxk279";

  emailjs
    .send(serviceId, templateId, data)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("text").value = "";
      console.log(res);
      alert("Your message was successfully sent!");
    })
    .catch((err) => console.log(err));

  console.log("hii");
}

const btn = document.getElementById("send");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
});
