const form = document.querySelector("#report-form");
const photoInput = document.querySelector("#photo");
const photoPreview = document.querySelector("#photo-preview");
const photoPrompt = document.querySelector("#photo-prompt");
const removePhotoButton = document.querySelector("#remove-photo");
const descriptionInput = document.querySelector("#description");
const descriptionCount = document.querySelector("#description-count");
const recipientInput = document.querySelector("#recipient");
const recipientLabel = document.querySelector("#recipient-label");
const statusMessage = document.querySelector("#status-message");

let previewUrl = null;

function updateContactField() {
  const isEmail = form.querySelector('input[name="contact-method"]:checked').value === "email";
  recipientLabel.textContent = isEmail ? "Email address" : "Phone number";
  recipientInput.type = isEmail ? "email" : "tel";
  recipientInput.autocomplete = isEmail ? "email" : "tel";
  recipientInput.placeholder = isEmail ? "name@example.com" : "+1 555 123 4567";
  recipientInput.value = "";
}

function clearPhoto() {
  photoInput.value = "";
  photoPreview.removeAttribute("src");
  photoPreview.hidden = true;
  photoPrompt.hidden = false;
  removePhotoButton.hidden = true;
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
    previewUrl = null;
  }
}

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) {
    return;
  }
  if (!file.type.startsWith("image/")) {
    statusMessage.textContent = "Choose an image file to preview.";
    clearPhoto();
    return;
  }
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }
  previewUrl = URL.createObjectURL(file);
  photoPreview.src = previewUrl;
  photoPreview.hidden = false;
  photoPrompt.hidden = true;
  removePhotoButton.hidden = false;
  statusMessage.textContent = "";
});

removePhotoButton.addEventListener("click", clearPhoto);
descriptionInput.addEventListener("input", () => {
  descriptionCount.textContent = String(descriptionInput.value.length);
});
form.querySelectorAll('input[name="contact-method"]').forEach((input) => {
  input.addEventListener("change", updateContactField);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) {
    return;
  }
  const method = form.querySelector('input[name="contact-method"]:checked').value;
  const contactType = method === "email" ? "Email address" : "Phone number";
  statusMessage.textContent = `Demo preview ready for ${contactType} ${recipientInput.value.trim()}. No report was sent and no photo was uploaded.`;
});

updateContactField();
